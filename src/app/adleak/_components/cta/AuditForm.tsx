// src/app/adleak/_components/cta/AuditForm.tsx
'use client';

import React, { forwardRef } from 'react';
import { useAudit } from '../../_context/AuditContext';
import { api } from '~/trpc/react';
import { Slider } from '~/components/ui/slider';

interface AuditFormProps {
	emailInputRef?: React.Ref<HTMLInputElement>;
}

export const AuditForm = forwardRef<HTMLDivElement, AuditFormProps>((props, ref) => {
	const { data, updateBudget, updateEmail } = useAudit();

	const createLead = api.leads.submitAudit.useMutation();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const form = e.currentTarget as HTMLFormElement;
		const emailInput = form.elements.namedItem('email') as HTMLInputElement;
		const email = emailInput.value;

		if (!email || createLead.isPending) return;

		updateEmail(email);

		createLead.mutate({
			email,
			monthlyBudget: data.monthlyBudget,
			selectedSins: data.selectedSins,
			monthlyWaste: data.monthlyWaste,
			yearlyWaste: data.yearlyWaste,
			score: data.score,
			fit: data.fit,
		});
	};

	if (createLead.isSuccess) {
		return (
			<div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-center">
				<p className="text-base text-green-400 font-semibold">
					✓ Check your email for the Ad Health PDF!
				</p>
			</div>
		);
	}

	const budgetTicks = [3000, 10000, 25000, 50000];

	return (
		<form onSubmit={handleSubmit} className="space-y-6 w-full" ref={ref}>
			<div className="space-y-3">
				<div className="flex justify-between items-baseline">
					<label htmlFor="budget" className="text-sm font-medium text-muted-foreground">
						Monthly Meta Ad Spend
					</label>
					<span className="text-lg font-bold text-foreground">
						£{data.monthlyBudget.toLocaleString()}
					</span>
				</div>
				<Slider
					id="budget"
					min={3000}
					max={50000}
					step={1000}
					value={[data.monthlyBudget]}
					onValueChange={(value) => updateBudget(value[0])}
				/>
				<div className="flex justify-between px-1">
					{budgetTicks.map((tick) => (
						<button
							key={tick}
							type="button"
							onClick={() => updateBudget(tick)}
							className={`text-xs text-muted-foreground hover:text-foreground transition-colors ${data.monthlyBudget === tick ? 'font-bold text-purple-400' : ''}`}
						>
							{tick >= 1000 ? `£${tick / 1000}k` : `£${tick}`}
						</button>
					))}
				</div>
			</div>

			<input
				ref={props.emailInputRef}
				name="email"
				type="email"
				placeholder="Enter your email"
				required
				disabled={createLead.isPending}
				className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all disabled:opacity-50"
			/>

			<button
				type="submit"
				disabled={createLead.isPending}
				className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold rounded-xl transition-all hover:scale-[1.02] text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
			>
				{createLead.isPending ? 'Sending...' : 'Download Ad Health PDF'}
			</button>

			{createLead.isError && (
				<p className="text-xs text-red-400 text-center">
					{createLead.error.message || 'An error occurred. Please try again.'}
				</p>
			)}
		</form>
	);
});

AuditForm.displayName = 'AuditForm';