// src/app/adleak/audit/sins/SinCheckbox.tsx
'use client';
import { Check } from 'lucide-react';

interface SinCheckboxProps {
	sin: {
		id: string;
		number: number;
		name: string;
		wastePercent: number;
	};
	isSelected: boolean;
	onToggle: () => void;
	monthlyBudget: number;
}

export function SinCheckbox({ sin, isSelected, onToggle, monthlyBudget }: SinCheckboxProps) {
	const waste = Math.round((monthlyBudget * sin.wastePercent) / 100);

	return (
		<button
			onClick={onToggle}
			className={`
        w-full flex items-center justify-between gap-3 
        px-3 py-2.5 rounded-xl border-2 transition-all
        ${isSelected
					? 'bg-red-500/10 border-red-500'
					: 'bg-card border-border/30 hover:border-purple-500/50'
				}
      `}
		>
			{/* Left: Checkbox + Name */}
			<div className="flex items-center gap-2.5 flex-1 min-w-0">
				<div className={`
          w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0
          ${isSelected ? 'border-red-400 bg-red-500/30' : 'border-muted-foreground/30'}
        `}>
					{isSelected && <Check className="w-2.5 h-2.5 text-red-400" />}
				</div>
				<span className={`text-sm font-semibold truncate ${isSelected ? 'text-red-400' : 'text-foreground'
					}`}>
					{sin.name}
				</span>
			</div>

			{/* Right: Waste */}
			<div className="flex-shrink-0">
				{isSelected ? (
					<span className="text-xs font-bold text-green-400 px-2 py-0.5 rounded-full bg-green-500/20 border border-green-500/40">
						+£{waste.toLocaleString()}
					</span>
				) : (
					<span className="text-xs font-semibold text-red-400">
						-£{waste.toLocaleString()}
					</span>
				)}
			</div>
		</button>
	);
}