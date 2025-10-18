// src/app/adhealth/audit/sins/SinSnippet.tsx
'use client';
import { Check, AlertCircle } from 'lucide-react';

interface SinSnippetProps {
	sin: {
		id: string;
		number: number;
		name: string;
		tagline: string;
		wastePercent: number;
	};
	isSelected: boolean;
	onToggle: () => void;
	monthlyBudget: number;
	showDescription?: boolean;
	showMoney?: boolean;
	compact?: boolean;
}

export function SinSnippet({
	sin,
	isSelected,
	onToggle,
	monthlyBudget,
	showDescription = false,
	showMoney = true,
	compact = false
}: SinSnippetProps) {
	const waste = Math.round((monthlyBudget * sin.wastePercent) / 100);

	return (
		<button
			onClick={onToggle}
			className={`group w-full text-left transition-all ${compact ? 'p-2' : 'p-4'
				} rounded-xl border-2 ${isSelected
					? 'bg-red-500/10 border-red-500'
					: 'bg-card border-border/50 hover:border-purple-500/50 hover:bg-card/80'
				}`}
		>
			<div className="flex items-start justify-between gap-3">
				{/* Left: Checkbox + Content */}
				<div className="flex items-start gap-3 flex-1 min-w-0">
					{/* Checkbox */}
					<div className={`flex-shrink-0 rounded-full border-2 flex items-center justify-center transition-all ${compact ? 'w-5 h-5' : 'w-6 h-6'
						} ${isSelected
							? 'border-red-400 bg-red-500/30 scale-100'
							: 'border-muted-foreground/30 group-hover:border-purple-500/50'
						}`}>
						{isSelected && <Check className={compact ? 'w-3 h-3' : 'w-4 h-4'} />}
					</div>

					{/* Content */}
					<div className="flex-1 min-w-0">
						<div className="flex items-center gap-2 mb-1">
							<span className={`${compact ? 'text-xs' : 'text-sm'} font-bold ${isSelected ? 'text-red-400' : 'text-foreground'
								}`}>
								{sin.name}
							</span>
							{!compact && (
								<span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400 font-semibold">
									#{sin.number}
								</span>
							)}
						</div>

						{showDescription && !compact && (
							<p className="text-sm text-muted-foreground leading-relaxed">
								{sin.tagline}
							</p>
						)}
					</div>
				</div>

				{/* Right: Money indicator */}
				{showMoney && (
					<div className="flex-shrink-0">
						{isSelected ? (
							<div className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/40">
								<span className="text-sm font-bold text-green-400">
									+£{waste.toLocaleString()}
								</span>
							</div>
						) : (
							<span className="text-sm font-semibold text-red-400">
								-£{waste.toLocaleString()}
							</span>
						)}
					</div>
				)}
			</div>
		</button>
	);
}