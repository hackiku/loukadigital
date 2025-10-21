// src/app/adhealth/audit/SinCard.tsx
'use client';

interface SinCardProps {
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
}

export function SinCard({ sin, isSelected, onToggle, monthlyBudget }: SinCardProps) {
	const waste = Math.round((monthlyBudget * sin.wastePercent) / 100);

	return (
		<button
			onClick={onToggle}
			className={`
        w-full text-left p-6 rounded-2xl border-2 transition-all
        ${isSelected
					? 'bg-red-500/10 border-red-500 shadow-xl shadow-red-500/20'
					: 'bg-card/50 border-border/50 hover:border-purple-500/50 hover:shadow-lg'
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

						{/* Waste Amount */}
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

					<p className="text-sm text-muted-foreground">
						{sin.tagline}
					</p>
				</div>
			</div>
		</button>
	);
}