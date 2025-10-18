// src/app/adhealth/audit/layout/AuditTrigger.tsx
'use client';

interface AuditTriggerProps {
	currentSinNumber: number;
	monthlyBudget: number;
	savings: number;
	onBudgetChange: (value: number) => void;
	onClick: () => void;
	isExpanded: boolean;
}

export function AuditTrigger({
	currentSinNumber,
	monthlyBudget,
	savings,
	onBudgetChange,
	onClick,
	isExpanded
}: AuditTriggerProps) {
	return (
		<button
			onClick={onClick}
			className="flex items-center gap-3 group"
		>
			{/* Number Circle - commented out */}
			{/* <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
        <span className="text-white font-bold text-lg">{currentSinNumber}</span>
      </div> */}

			{/* Budget Column */}
			<div className="flex flex-col items-start gap-2">
				<div className="border border-border/50 px-3 py-1 rounded-full bg-muted/50 hover:bg-muted transition-all ">
					<div className="flex items-center gap-1.5">
						<span className="-mb-0.5 text-sm font-semibold text-foreground">£{monthlyBudget.toLocaleString()}</span>
						<span className="text-left text-[0.6em] text-muted-foreground">
							spend
							{/* <br/> spend */}
						</span>
					</div>
				</div>

				<div className="flex flex-col items-start gap-2">
					<div className="border border-border/50 px-3 py-1 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 ">
						<div className="flex items-center gap-1.5 text-green-400">
							<span className="-mb-0.5 text-lg font-semibold ">£{savings > 0 ? savings.toLocaleString() : '0'}</span>
							<span className="text-left text-xs">
								save
								{/* <br/> spend */}
							</span>
						</div>
					</div>
				</div>

			</div>

			{/* Savings Column */}
			{/* Budget Slider - always visible when expanded */}
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

		</button>
	);
}