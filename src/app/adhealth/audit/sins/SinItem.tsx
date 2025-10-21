// src/app/adhealth/audit/SinItem.tsx
'use client';
import { Check } from 'lucide-react';

interface SinItemProps {
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
	variant?: 'compact' | 'full';
}

export function SinItem({
	sin,
	isSelected,
	onToggle,
	monthlyBudget,
	variant = 'full'
}: SinItemProps) {
	const waste = Math.round((monthlyBudget * sin.wastePercent) / 100);

	if (variant === 'compact') {
		return (
			<button
				onClick={onToggle}
				className={`
          group w-full flex items-center justify-between gap-4 
          px-5 py-4 rounded-2xl border-2 transition-all
          ${isSelected
						? 'bg-red-500/10 border-red-500 shadow-lg'
						: 'bg-card/50 border-border/30 hover:border-purple-500/50 hover:scale-[1.02]'
					}
        `}
			>
				{/* Left: Number + Name */}
				<div className="flex items-center gap-3">
					<div className={`
            w-8 h-8 rounded-full flex items-center justify-center 
            text-sm font-bold border-2
            ${isSelected
							? 'bg-red-500/30 text-red-400 border-red-500'
							: 'bg-purple-500/20 text-purple-400 border-purple-500/50'
						}
          `}>
						{sin.number}
					</div>
					<span className={`font-semibold ${isSelected ? 'text-red-400' : 'text-foreground'}`}>
						{sin.name}
					</span>
				</div>

				{/* Right: Waste + Checkbox */}
				<div className="flex items-center gap-3">
					<div className={`
            px-3 py-1 rounded-full text-sm font-bold
            ${isSelected
							? 'bg-green-500/20 text-green-400 border border-green-500/40'
							: 'bg-red-500/20 text-red-400'
						}
          `}>
						{isSelected ? '+' : '-'}£{waste.toLocaleString()}
					</div>

					<div className={`
            w-5 h-5 rounded-full border-2 flex items-center justify-center
            ${isSelected ? 'border-red-400 bg-red-500/30' : 'border-muted-foreground/30'}
          `}>
						{isSelected && <Check className="w-3 h-3 text-red-400" />}
					</div>
				</div>
			</button>
		);
	}

	// Full variant - shows tagline
	return (
		<button
			onClick={onToggle}
			className={`
        group w-full text-left p-6 rounded-2xl border-2 transition-all
        ${isSelected
					? 'bg-red-500/10 border-red-500 shadow-xl shadow-red-500/10'
					: 'bg-card/50 border-border/30 hover:border-purple-500/50 hover:shadow-lg'
				}
      `}
		>
			<div className="flex items-start gap-4">
				{/* Number Circle */}
				<div className={`
          flex-shrink-0 w-12 h-12 rounded-full 
          flex items-center justify-center 
          font-bold text-xl border-2
          ${isSelected
						? 'bg-red-500/30 text-red-400 border-red-500'
						: 'bg-purple-500/20 text-purple-400 border-purple-500/50'
					}
        `}>
					{sin.number}
				</div>

				{/* Content */}
				<div className="flex-1 min-w-0">
					<div className="flex items-start justify-between gap-4 mb-2">
						<h3 className={`text-xl font-bold ${isSelected ? 'text-red-400' : 'text-foreground'}`}>
							{sin.name}
						</h3>

						<div className={`
              flex-shrink-0 px-3 py-1 rounded-full text-sm font-bold
              ${isSelected
								? 'bg-green-500/20 text-green-400 border border-green-500/40'
								: 'bg-red-500/20 text-red-400 border border-red-500/40'
							}
            `}>
							{isSelected ? '+' : '-'}£{waste.toLocaleString()}
						</div>
					</div>

					{/* Tagline - only show when selected */}
					{isSelected && (
						<p className="text-sm text-muted-foreground">
							{sin.tagline}
						</p>
					)}
				</div>
			</div>
		</button>
	);
}