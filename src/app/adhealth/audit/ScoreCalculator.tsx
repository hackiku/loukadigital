// src/app/adhealth/audit/ScoreCalculator.tsx

'use client';
import { useState } from 'react';

interface ScoreRange {
	min: number;
	max: number;
	label: string;
	description: string;
	fit: 'poor' | 'borderline' | 'good' | 'perfect' | 'critical';
	color: string;
}

const scoreRanges: ScoreRange[] = [
	{
		min: 80,
		max: 90,
		label: 'Already Optimized',
		description: "Don't apply - we'll decline you. Your account is top 10%.",
		fit: 'poor',
		color: 'from-green-500/20 to-emerald-500/20',
	},
	{
		min: 65,
		max: 79,
		label: 'Borderline',
		description: 'Might hit 40%, might not. Apply but we may decline.',
		fit: 'borderline',
		color: 'from-yellow-500/20 to-orange-500/20',
	},
	{
		min: 45,
		max: 64,
		label: 'Good Fit',
		description: '3-4 major issues. Confident in 40%+ improvement.',
		fit: 'good',
		color: 'from-blue-500/20 to-purple-500/20',
	},
	{
		min: 20,
		max: 44,
		label: 'Perfect Fit',
		description: '5-6 major issues. Very confident in 40%+.',
		fit: 'perfect',
		color: 'from-purple-500/20 to-pink-500/20',
	},
	{
		min: 0,
		max: 19,
		label: 'Critical',
		description: 'Fundamental problems. Extremely confident in 100%+ improvement.',
		fit: 'critical',
		color: 'from-red-500/20 to-orange-500/20',
	},
];

export function ScoreCalculator({ className = '' }: { className?: string }) {
	const [score, setScore] = useState(45); // Default to "Good Fit"

	const currentRange = scoreRanges.find((range) => score >= range.min && score <= range.max);

	return (
		<div className={`flex flex-col gap-6 ${className}`}>
			{/* Header */}
			<div>
				<h3 className="text-2xl md:text-3xl font-bold mb-2">
					What's Your{' '}
					<span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
						Account Score?
					</span>
				</h3>
				<p className="text-muted-foreground">
					We only take clients we can improve 40%+ in 90 days
				</p>
			</div>

			{/* Score Slider */}
			<div className="space-y-4">
				<div className="flex items-center justify-between">
					<span className="text-sm text-muted-foreground">Your Score</span>
					<span className="text-4xl font-bold text-foreground">{score}</span>
				</div>

				<input
					type="range"
					min="0"
					max="90"
					value={score}
					onChange={(e) => setScore(Number(e.target.value))}
					className="w-full h-2 bg-muted rounded-full appearance-none cursor-pointer accent-purple-500"
				/>

				<div className="flex justify-between text-xs text-muted-foreground">
					<span>0</span>
					<span>45</span>
					<span>90</span>
				</div>
			</div>

			{/* Result Card */}
			{currentRange && (
				<div
					className={`p-6 rounded-xl bg-gradient-to-br ${currentRange.color} border-2 ${currentRange.fit === 'good' || currentRange.fit === 'perfect' || currentRange.fit === 'critical'
							? 'border-purple-500/50'
							: 'border-border/50'
						}`}
				>
					<div className="flex items-start justify-between mb-3">
						<div>
							<h4 className="text-xl font-bold text-foreground mb-1">
								{currentRange.label}
							</h4>
							<p className="text-sm text-muted-foreground">
								Score: {currentRange.min}-{currentRange.max} points
							</p>
						</div>

						{/* Fit Badge */}
						{(currentRange.fit === 'good' || currentRange.fit === 'perfect' || currentRange.fit === 'critical') && (
							<div className="flex items-center gap-1 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/50">
								<span className="text-xs font-bold text-purple-400">
									{currentRange.fit === 'critical' ? '✅✅✅' : currentRange.fit === 'perfect' ? '✅✅' : '✅'}
								</span>
							</div>
						)}
					</div>

					<p className="text-foreground leading-relaxed">
						{currentRange.description}
					</p>
				</div>
			)}

			{/* CTA based on score */}
			{currentRange && currentRange.fit !== 'poor' && (
				<button className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold rounded-xl transition-all hover:scale-105">
					Get Your Free Audit →
				</button>
			)}
		</div>
	);
}