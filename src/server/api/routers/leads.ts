// src/server/api/routers/leads.ts
import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

export const leadsRouter = createTRPCRouter({
	submitAudit: publicProcedure
		.input(z.object({
			email: z.string().email(),
			monthlyBudget: z.number(),
			selectedSins: z.array(z.string()),
			monthlyWaste: z.number(),
			yearlyWaste: z.number(),
			score: z.number(),
			fit: z.enum(['poor', 'borderline', 'good', 'perfect', 'critical']),
		}))
		.mutation(async ({ input }) => {
			// Send to ConvertKit
			const response = await fetch('https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					api_key: process.env.CONVERTKIT_API_KEY,
					email: input.email,
					fields: {
						monthly_budget: input.monthlyBudget,
						monthly_waste: input.monthlyWaste,
						yearly_waste: input.yearlyWaste,
						score: input.score,
						fit: input.fit,
						sins: input.selectedSins.join(','),
					},
					tags: [input.fit === 'good' || input.fit === 'perfect' ? 'high-intent' : 'low-intent'],
				}),
			});

			if (!response.ok) {
				throw new Error('Failed to submit to ConvertKit');
			}

			return { success: true };
		}),
});