// src/app/adhealth/audit/ResultsProof.tsx

interface Stat {
	label: string;
	value: string;
	description: string;
}

interface ResultsProofProps {
	className?: string;
}

export function ResultsProof({ className = '' }: ResultsProofProps) {
	const stats: Stat[] = [
		{
			label: 'Success Rate',
			value: '85%',
			description: 'Hit 40%+ improvement in 90 days',
		},
		{
			label: 'Average Waste Found',
			value: '£7.4K',
			description: 'Per account per month',
		},
		{
			label: 'Accounts Audited',
			value: '200+',
			description: 'Over 5 years',
		},
		{
			label: 'Quick Wins',
			value: '2-4 weeks',
			description: 'Initial impact timeline',
		},
	];

	const paths = [
		{
			title: '£697 One-Time Setup',
			ideal: 'Spending £500-£5K/month',
			includes: [
				'All 7 issues fixed in 24 hours',
				'Tracking configured (Pixel + CAPI)',
				'Campaign structure optimized',
				'30-day email support',
			],
			successRate: '92% see 30-60% improvement',
		},
		{
			title: 'Ongoing Management',
			ideal: 'Spending £5K+/month',
			includes: [
				'All 7 issues fixed',
				'Ongoing optimization',
				'Creative strategy',
				'Target: 40%+ in 90 days',
			],
			successRate: '85% hit 40%+ improvement',
		},
	];

	return (
		<div className={`flex flex-col gap-8 ${className}`}>
			{/* Header */}
			<div>
				<h3 className="text-2xl md:text-3xl font-bold mb-2">
					Real Results,{' '}
					<span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
						Real Track Record
					</span>
				</h3>
				<p className="text-muted-foreground">
					We only accept clients we're confident we can improve 40%+
				</p>
			</div>

			{/* Stats Grid */}
			<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
				{stats.map((stat) => (
					<div key={stat.label} className="p-4 rounded-xl bg-card/30 border border-border/50">
						<p className="text-3xl md:text-4xl font-bold text-foreground mb-1">
							{stat.value}
						</p>
						<p className="text-sm font-semibold text-muted-foreground mb-1">
							{stat.label}
						</p>
						<p className="text-xs text-muted-foreground/70">
							{stat.description}
						</p>
					</div>
				))}
			</div>

			{/* Paths */}
			<div className="grid md:grid-cols-2 gap-6">
				{paths.map((path) => (
					<div
						key={path.title}
						className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/30 hover:border-purple-500/50 transition-colors"
					>
						<h4 className="text-xl font-bold text-foreground mb-2">
							{path.title}
						</h4>
						<p className="text-sm text-purple-400 mb-4">
							Perfect if: {path.ideal}
						</p>

						<ul className="space-y-2 mb-4">
							{path.includes.map((item) => (
								<li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
									<span className="text-green-400 mt-0.5">✓</span>
									<span>{item}</span>
								</li>
							))}
						</ul>

						<div className="pt-4 border-t border-border/50">
							<p className="text-xs font-semibold text-green-400">
								{path.successRate}
							</p>
						</div>
					</div>
				))}
			</div>

			{/* Acceptance Rate */}
			<div className="p-6 rounded-xl bg-muted/30 border border-border/50">
				<p className="text-sm text-muted-foreground mb-2">
					Last Month's Applications:
				</p>
				<div className="flex flex-wrap gap-4 text-sm">
					<div>
						<span className="font-bold text-green-400">35%</span>
						<span className="text-muted-foreground"> accepted for ongoing</span>
					</div>
					<div>
						<span className="font-bold text-blue-400">39%</span>
						<span className="text-muted-foreground"> offered £697 setup</span>
					</div>
					<div>
						<span className="font-bold text-red-400">26%</span>
						<span className="text-muted-foreground"> declined</span>
					</div>
				</div>
				<p className="text-xs text-muted-foreground mt-3">
					We're trying to match you with the right solution, not turn everyone away.
				</p>
			</div>
		</div>
	);
}