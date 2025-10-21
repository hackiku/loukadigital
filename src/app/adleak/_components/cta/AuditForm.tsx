// src/app/adleak/_components/cta/AuditForm.tsx
'use client';
import { useState } from 'react';
import { useAudit } from '../../_context/AuditContext';
// import { api } from '~/utils/api'; 

// Assuming you have ShadCN Slider component installed
import { Slider } from '~/components/ui/slider';

export function AuditForm() {
	const { data, updateBudget } = useAudit();
	const [email, setEmail] = useState('');

	// const submitAuditMutation = api.leads.submitAudit.useMutation();
	const submitAuditMutation= () => null;

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!email || submitAuditMutation.isLoading) return;

		submitAuditMutation.mutate({
			email,
			monthlyBudget: data.monthlyBudget,
			selectedSins: data.selectedSins,
			monthlyWaste: data.monthlyWaste,
			yearlyWaste: data.yearlyWaste,
			score: data.score,
			fit: data.fit,
		});
	};

	if (submitAuditMutation.isSuccess) {
		return (
			<div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-center">
				<p className="text-base text-green-400 font-semibold">
					✓ Check your email for the Meta Ads Checklist PDF!
				</p>
				<p className="text-xs text-muted-foreground mt-2">
					Want our team to run a full audit? Just reply to that email.
				</p>
			</div>
		);
	}

	const budgetTicks = [3000, 10000, 25000, 50000];

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			{/* Monthly Ad Spend Slider */}
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

			{/* Email Input */}
			<input
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				placeholder="Enter your email"
				required
				disabled={submitAuditMutation.isLoading}
				className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all disabled:opacity-50"
			/>

			{/* Submit Button */}
			<button
				type="submit"
				disabled={submitAuditMutation.isLoading || !email}
				className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold rounded-xl transition-all hover:scale-[1.02] text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
			>
				{submitAuditMutation.isLoading ? 'Sending...' : 'Download Free PDF'}
			</button>

			{submitAuditMutation.isError && (
				<p className="text-xs text-red-400 text-center">
					{submitAuditMutation.error.message || 'An error occurred. Please try again.'}
				</p>
			)}
		</form>
	);
}