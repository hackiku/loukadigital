// src/app/adhealth/audit/ChecklistOverview.tsx

interface ChecklistOverviewProps {
	className?: string;
}

export function ChecklistOverview({ className = '' }: ChecklistOverviewProps) {
	const checks = [
		{ name: 'Excluded Converters', waste: '£1K/mo', severity: 'high' },
		{ name: 'Campaign Overlap', waste: '£2K/mo', severity: 'critical' },
		{ name: 'Tracking Accuracy', waste: '£3K/mo', severity: 'critical' },
		{ name: 'Dead Placements', waste: '£2.5K/mo', severity: 'high' },
		{ name: 'Creative Fatigue', waste: '£1.25K/mo', severity: 'medium' },
		{ name: 'iOS Tracking', waste: '£3.5K/mo', severity: 'critical' },
		{ name: 'Account Frequency', waste: '£3K/mo', severity: 'high' },
	];

	return (
		<div className={`flex flex-col gap-6 ${className}`}>
			{/* Header */}
			<div>
				<h3 className="text-2xl md:text-3xl font-bold mb-2">
					The 7 Silent{' '}
					<span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
						Money Drains
					</span>
				</h3>
				<p className="text-muted-foreground">
					Most accounts have 5-6 of these. Each costs £1K-£4K monthly.
				</p>
			</div>

			{/* Checklist Items */}
			<div className="grid gap-3 md:gap-4">
				{checks.map((check, index) => (
					<div
						key={check.name}
						className="flex items-center justify-between p-4 rounded-xl bg-card/30 border border-border/50 hover:border-purple-500/30 transition-colors group"
					>
						<div className="flex items-center gap-4">
							<div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-muted-foreground font-bold text-sm">
								{index + 1}
							</div>
							<div>
								<p className="font-semibold text-foreground group-hover:text-purple-400 transition-colors">
									{check.name}
								</p>
								<p className="text-xs text-muted-foreground">
									Typical waste: {check.waste}
								</p>
							</div>
						</div>

						{/* Severity Badge */}
						<div
							className={`px-3 py-1 rounded-full text-xs font-semibold ${
								check.severity === 'critical'
									? 'bg-red-500/20 text-red-400'
									: check.severity === 'high'
									? 'bg-orange-500/20 text-orange-400'
									: 'bg-yellow-500/20 text-yellow-400'
							}`}
						>
							{check.severity.toUpperCase()}
						</div>
					</div>
				))}
			</div>

			{/* Total Potential Waste */}
			<div className="p-6 rounded-xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border-2 border-red-500/30">
				<p className="text-sm text-muted-foreground mb-1">
					Average recoverable waste per account:
				</p>
				<p className="text-3xl md:text-4xl font-bold text-foreground">
					£5K-£15K
					<span className="text-lg text-muted-foreground"> /month</span>
				</p>
			</div>
		</div>
	);
}