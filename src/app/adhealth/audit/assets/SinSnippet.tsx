// src/app/adhealth/audit/assets/SinSnippet.tsx
'use client';
import { Check } from 'lucide-react';

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
	variant: 'square' | 'checkbox' | 'full';
}

export function SinSnippet({
	sin,
	isSelected,
	onToggle,
	monthlyBudget,
	variant
}: SinSnippetProps) {
	const waste = Math.round((monthlyBudget * sin.wastePercent) / 100);

	// Square variant - for mobile grid
	if (variant === 'square') {
		return (
			<button
				onClick={onToggle}
				className={`w-full aspect-square rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${isSelected
						? 'bg-red-500/20 border-red-500 text-red-400'
						: 'bg-card border-border/50 text-muted-foreground hover:border-purple-500/50'
					}`}
			>
				<div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg ${isSelected ? 'bg-red-500/30' : 'bg-gradient-to-br from-purple-600 to-blue-600 text-white'
					}`}>
					{sin.number}
				</div>
				{isSelected && <Check className="w-5 h-5" />}
			</button>
		);
	}

	// Checkbox variant - compact sidebar style
	if (variant === 'checkbox') {
		return (
			<button
				onClick={onToggle}
				className={`w-full text-left p-3 rounded-xl border-2 transition-all ${isSelected
						? 'bg-red-500/10 border-red-500'
						: 'bg-card border-border/50 hover:border-purple-500/50'
					}`}
			>
				<div className="flex items-center justify-between gap-3">
					<div className="flex items-center gap-2.5 flex-1 min-w-0">
						<div className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-red-400 bg-red-500/30' : 'border-muted-foreground/30'
							}`}>
							{isSelected && <Check className="w-3 h-3 text-red-400" />}
						</div>
						<span className={`text-sm font-semibold truncate ${isSelected ? 'text-red-400' : 'text-foreground'
							}`}>
							{sin.name}
						</span>
					</div>

					<div className="flex-shrink-0 min-w-[70px] text-right">
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
				</div>
			</button>
		);
	}

	// Full variant - for scrollytell grid
	// Full variant - for scrollytell grid
	// Full variant - for scrollytell grid
	return (
		<button
			onClick={onToggle}
			className={`w-full h-full text-left p-6 rounded-2xl border-2 transition-all ${isSelected
					? 'bg-red-500/10 border-red-500 shadow-xl shadow-red-500/10'
					: 'bg-card/90 backdrop-blur-sm border-border/50 hover:border-purple-500/50 hover:shadow-xl'
				}`}
		>
			<div className="grid grid-cols-[auto_1fr] gap-4 items-start h-full">
				{/* Left Column: Number circle - spans 2 rows */}
				<div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl border-2 transition-all ${isSelected
						? 'bg-red-500/30 text-red-400 border-red-500'
						: 'bg-transparent text-foreground border-foreground/30'
					}`}>
					{sin.number}
				</div>

				{/* Right Column: Content stacked */}
				<div className="flex flex-col gap-2">
					{/* Row 2: Title + Money */}
					<div className="flex items-center justify-between gap-4">
						<h3 className={`text-2xl font-bold ${isSelected ? 'text-red-400' : 'text-foreground'
							}`}>
							{sin.name}
						</h3>

						{isSelected ? (
							<span className="text-lg font-bold text-green-400 whitespace-nowrap">
								+£{waste.toLocaleString()}
							</span>
						) : (
							<span className="text-lg font-semibold text-red-400 whitespace-nowrap">
								-£{waste.toLocaleString()}
							</span>
						)}
					</div>

					{/* Row 3: Description - full width */}
					<p className="text-base text-muted-foreground leading-relaxed">
						{sin.tagline}
					</p>
				</div>
			</div>
		</button>
	);
}