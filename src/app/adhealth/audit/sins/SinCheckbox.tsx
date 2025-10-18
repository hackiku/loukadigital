// src/app/adhealth/audit/sins/SinCheckbox.tsx
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
			className={`flex items-center justify-between gap-3 px-3 py-3 rounded-full border-2 transition-all hover:scale-[1.01] w-full bg-card ${isSelected
					? 'border-red-500'
					: 'border-border/50 hover:border-purple-500/50'
				}`}
		>
			{/* Left: Checkbox + Name */}
			<div className="flex items-center gap-2.5">
				<div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${isSelected ? 'border-red-400 bg-red-500/30' : 'border-muted-foreground/30'
					}`}>
					{isSelected && <Check className="w-2.5 h-2.5 text-red-400" />}
				</div>
				<span className={`text-xs font-semibold whitespace-nowrap ${isSelected ? 'text-red-400' : 'text-foreground'
					}`}>
					{sin.name}
				</span>
			</div>

			{/* Right: Waste/Gain Amount */}
			{isSelected ? (
				<div className="px-2.5 py-0.5 rounded-full bg-green-500/20 border border-green-500/40 flex-shrink-0">
					<span className="text-xs font-bold text-green-400">+£{waste.toLocaleString()}</span>
				</div>
			) : (
				<span className="text-xs font-semibold text-red-400 flex-shrink-0">
					-£{waste.toLocaleString()}
				</span>
			)}
		</button>
	);
}