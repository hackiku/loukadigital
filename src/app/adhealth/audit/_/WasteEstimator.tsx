// src/app/adhealth/audit/WasteEstimator.tsx

'use client';
import { useState } from 'react';

interface WasteEstimatorProps {
	className?: string;
}

export function WasteEstimator({ className = '' }: WasteEstimatorProps) {
	const [monthlySpend, setMonthlySpend] = useState(10000);

	// Calculate waste based on common issues
	const issues = [
		{ name: 'Campaign Overlap', percentage: 20, enabled: true },
		{ name: 'iOS Tracking', percentage: 35, enabled: true },
		{ name: 'Dead Placements', percentage: 25, enabled: true },
	];

	const totalWastePercentage = issues
		.filter((i) => i.enabled)
		.reduce((sum, i) => sum + i.percentage, 0) / issues.filter((i) => i.enabled).length;

	const monthlyWaste = Math.round((monthlySpend * totalWastePercentage) / 100);
	const yearlyWaste = monthlyWaste * 12;

	return (
		<div className={`flex flex-col gap-6 ${className}`}>
			{/* Header */}
			<div>
				<h3 className="text-2xl md:text-3xl font-bold mb-2">
					How Much Are You{' '}
					<span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
						Wasting?
					</span>
				</h3>
				<p className="text-muted-foreground">
					Calculate your potential monthly waste
				</p>
			</div>

			{/* Spend Input */}
			<div className="space-y-4">
				<div className="flex items-center justify-between">
					<label className="text-sm font-semibold text-muted-foreground">
						Monthly Ad Spend
					</label>
					<span className="text-2xl font-bold text-foreground">
						£{monthlySpend.toLocaleString()}
					</span>
				</div>

				<input
					type="range"
					min="1000"
					max="50000"
					step="1000"
					value={monthlySpend}
					onChange={(e) => setMonthlySpend(Number(e.target.value))}
					className="w-full h-2 bg-muted rounded-full appearance-none cursor-pointer accent-red-500"
				/>

				<div className="flex justify-between text-xs text-muted-foreground">
					<span>£1K</span>
					<span>£25K</span>
					<span>£50K</span>
				</div>
			</div>

			{/* Waste Breakdown */}
			<div className="space-y-3">
				<p className="text-sm font-semibold text-muted-foreground">
					Common Issues (Average):
				</p>
				{issues.map((issue) => (
					<div key={issue.name} className="flex items-center justify-between p-3 rounded-lg bg-card/30 border border-border/50">
						<span className="text-sm text-foreground">{issue.name}</span>
						<span className="text-sm font-semibold text-red-400">
							{issue.percentage}% waste
						</span>
					</div>
				))}
			</div>

			{/* Results */}
			<div className="grid md:grid-cols-2 gap-4">
				{/* Monthly Waste */}
				<div className="p-6 rounded-xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border-2 border-red-500/30">
					<p className="text-sm text-muted-foreground mb-2">Monthly Waste</p>
					<p className="text-3xl font-bold text-foreground">
						£{monthlyWaste.toLocaleString()}
					</p>
					<p className="text-xs text-muted-foreground mt-1">
						~{Math.round(totalWastePercentage)}% of spend
					</p>
				</div>

				{/* Yearly Waste */}
				<div className="p-6 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 border-2 border-red-500/40">
					<p className="text-sm text-muted-foreground mb-2">Yearly Waste</p>
					<p className="text-3xl font-bold text-foreground">
						£{yearlyWaste.toLocaleString()}
					</p>
					<p className="text-xs text-red-400 mt-1 font-semibold">
						Money you'll never see again
					</p>
				</div>
			</div>

			{/* CTA */}
			<div className="p-6 rounded-xl bg-purple-500/10 border border-purple-500/30">
				<p className="text-sm text-muted-foreground mb-3">
					Our average client recovers:
				</p>
				<p className="text-2xl font-bold text-foreground mb-4">
					£{Math.round(monthlyWaste * 0.7).toLocaleString()}/month
				</p>
				<button className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold rounded-xl transition-all hover:scale-105">
					Find My Waste →
				</button>
			</div>
		</div>
	);
}