// src/app/adleak/audit/calculator/FullCalculator.tsx

'use client';
import { calculateScore, getScoreLabel } from '../math';

interface FullCalculatorProps {
	selectedSins: string[];
	monthlyBudget: number;
	savings: number;
}

export function FullCalculator({ selectedSins, monthlyBudget, savings }: FullCalculatorProps) {
	const score = calculateScore(selectedSins);
	const scoreData = getScoreLabel(score);

	return (
		<div className="w-full max-w-[400px] p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 
									  flex flex-col justify-between" style={{ maxHeight: '500px' }}>
			{/* Top Section: Score & Stats */}
			<div className="grid grid-cols-3 gap-3 mb-5">
				{/* Score Display */}
				<div className="col-span-2 text-center">
					<div className="text-sm text-muted-foreground mb-2">Your Account Score</div>
					<div className={`text-6xl font-black ${scoreData.color}`}>
						{score}
					</div>
					<div className="text-xl font-semibold text-muted-foreground mt-1">
						{scoreData.label}
					</div>
				</div>

				{/* Stats Grid */}
				<div className="col-span-1 flex flex-col gap-2">
					<div className="p-2 rounded-xl bg-muted/30 border border-border/30">
						<div className="text-xs text-muted-foreground mb-1">Monthly Waste</div>
						<div className="text-lg font-bold text-red-400">£{savings.toLocaleString()}</div>
					</div>
					<div className="p-2 rounded-xl bg-muted/30 border border-border/30">
						<div className="text-xs text-muted-foreground mb-1">Yearly Impact</div>
						<div className="text-lg font-bold text-red-400">£{(savings * 12).toLocaleString()}</div>
					</div>
				</div>
			</div>

			{/* Sins Count Badge */}
			<div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30">
				<div className="text-sm text-muted-foreground text-center">
					<span className="font-bold text-purple-400">{selectedSins.length}</span> of 7 sins detected
				</div>
			</div>
		</div>
	);
}