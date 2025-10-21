// src/app/adhealth/audit/layout/AuditTrigger.tsx
'use client';

interface AuditTriggerProps {
	currentSinNumber: number;
	monthlyBudget: number;
	savings: number;
	selectedCount: number;
	totalCount: number;
	onBudgetChange: (value: number) => void;
	onClick: () => void;
	isExpanded: boolean;
}

export function AuditTrigger({
	currentSinNumber,
	monthlyBudget,
	savings,
	selectedCount,
	totalCount,
	onBudgetChange,
	onClick,
	isExpanded
}: AuditTriggerProps) {
	return (
		<div className="flex items-center gap-2">
			<button
				onClick={onClick}
				className="flex flex-col items-start gap-2 group"
			>
				{/* Top Row: Spend + Slider */}
				<div className="flex items-center gap-2">
					<div className="border border-border/50 px-3 py-1.5 rounded-full bg-muted/50 hover:bg-muted transition-all">
						<div className="flex items-center gap-1.5">
							<span className="text-sm font-semibold text-foreground">
								£{monthlyBudget.toLocaleString()}
							</span>
							<span className="text-[0.65em] text-muted-foreground">spend</span>
						</div>
					</div>

					{/* Slider - visible when expanded */}
					{isExpanded && (
						<div className="w-32">
							<input
								type="range"
								min="1000"
								max="50000"
								step="1000"
								value={monthlyBudget}
								onChange={(e) => {
									e.stopPropagation();
									onBudgetChange(Number(e.target.value));
								}}
								onClick={(e) => e.stopPropagation()}
								className="w-full h-1.5 bg-muted rounded-full appearance-none cursor-pointer accent-purple-500"
							/>
						</div>
					)}
				</div>

				{/* Bottom Row: Savings + Count */}
				<div className="flex items-center gap-2">
					{/* Savings */}
					<div className="border border-green-500/30 px-3 py-1.5 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20">
						<div className="flex items-baseline gap-1.5">
							<span className="text-lg font-bold text-green-400">
								£{savings > 0 ? savings.toLocaleString() : '0'}
							</span>
							<span className="text-[0.65em] text-muted-foreground leading-none">
								save<br />/mo
							</span>
						</div>
					</div>

					{/* Selected Count */}
					<div className="px-3 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/30">
						<span className="text-sm font-bold text-purple-400">
							{selectedCount}/{totalCount}
						</span>
					</div>
				</div>
			</button>
		</div>
	);
}