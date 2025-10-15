// src/server/api/routers/leads.ts

import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { subscribeToForm } from "~/lib/convertkit";

export const leadsRouter = createTRPCRouter({
	submitLead: publicProcedure
		.input(
			z.object({
				form: z.enum(["adhealth", "newsletter", "contact", "ebook"]),
				email: z.string().email(),
				firstName: z.string().optional(),
				fields: z.record(z.string()).optional(),
			})
		)
		.mutation(async ({ input }) => {
			const formMap: Record<typeof input.form, string> = {
				adhealth: "123456",    // replace with ConvertKit form IDs
				newsletter: "234567",
				contact: "345678",
				ebook: "456789",
			};

			const formId = formMap[input.form];
			if (!formId) throw new Error("Invalid form");

			const result = await subscribeToForm({
				formId,
				email: input.email,
				firstName: input.firstName,
				fields: input.fields,
			});

			return { success: true, result };
		}),
});