// src/app/adhealth/audit/calculator/FullCalculator.tsx

'use client';
import { useState } from 'react';
import { calculateScore, getScoreLabel } from '../math';

interface FullCalculatorProps {
	selectedSins: string[];
	monthlyBudget: number;
	savings: number;
}

export function FullCalculator({ selectedSins, monthlyBudget, savings }: FullCalculatorProps) {
	const score = calculateScore(selectedSins);
	const scoreData = getScoreLabel(score);
	const isGoodFit = scoreData.fit === 'good' || scoreData.fit === 'perfect' || scoreData.fit === 'critical';

	return (
		<div className="w-[400px] p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 flex flex-col justify-between" style={{ maxHeight: '500px' }}>
			{/* Top Section: Score & Stats */}
			<div className="space-y-4 mb-6">
				{/* Score Display */}
				<div className="text-center">
					<div className="text-xs text-muted-foreground mb-2">Your Account Score</div>
					<div className={`text-6xl font-black ${scoreData.color}`}>
						{score}
					</div>
					<div className="text-sm font-semibold text-muted-foreground mt-1">
						{scoreData.label}
					</div>
				</div>

				{/* Stats Grid */}
				<div className="grid grid-cols-2 gap-3">
					<div className="p-3 rounded-xl bg-muted/30 border border-border/30">
						<div className="text-xs text-muted-foreground mb-1">Monthly Waste</div>
						<div className="text-xl font-bold text-red-400">£{savings.toLocaleString()}</div>
					</div>
					<div className="p-3 rounded-xl bg-muted/30 border border-border/30">
						<div className="text-xs text-muted-foreground mb-1">Yearly Impact</div>
						<div className="text-xl font-bold text-red-400">£{(savings * 12).toLocaleString()}</div>
					</div>
				</div>

				{/* Issues Found */}
				<div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30">
					<div className="text-sm text-muted-foreground">
						<span className="font-bold text-purple-400">{selectedSins.length}</span> of 7 sins detected
					</div>
				</div>
			</div>

			{/* Bottom Section: Email Form */}
			<EmailForm isGoodFit={isGoodFit} />
		</div>
	);
}

function EmailForm({ isGoodFit }: { isGoodFit: boolean }) {
	const [email, setEmail] = useState('');

	if (!isGoodFit) {
		return (
			<div className="space-y-3">
				<p className="text-xs text-muted-foreground text-center">
					Your account is already well-optimized. Explore our other services to continue growing.
				</p>
			<a
				href="/contact"
				className="block w-full py-3 px-4 bg-muted/50 hover:bg-muted border border-border/50 text-foreground font-semibold rounded-xl transition-all text-center text-sm"
        >
				Explore Ad Services
			</a>
      </div >
    );
	}

	return (
		<div className="space-y-3">
			<input
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				placeholder="Enter your email"
				className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-xl text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
			/>

			<button className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold rounded-xl transition-all hover:scale-[1.02] text-sm relative overflow-hidden group">
				<span className="relative z-10">
					Get AdLeak Audit <span className="opacity-60">— £697</span>
				</span>

				{/* Scarcity bar effect */}
				<div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-red-600 to-orange-600 opacity-70" />
			</button>
		</div>
	);
}