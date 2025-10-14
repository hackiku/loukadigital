// FILE: src/app/adhealth/_components/sections/OutcomesSection.tsx
// =============================================================================

import { Target, TrendingUp, DollarSign } from 'lucide-react';

const outcomes = [
	{
		icon: Target,
		title: "Audience Overlap Waste",
		amount: "$2,400/month average",
		description: "Most accounts have 3-5 campaigns targeting the same people, driving up costs by 40-60%"
	},
	{
		icon: TrendingUp,
		title: "Creative Fatigue Drain",
		amount: "$1,800/month average",
		description: "Ads running past optimal frequency burn 30-50% more budget for worse results"
	},
	{
		icon: DollarSign,
		title: "Placement Inefficiency",
		amount: "$3,200/month average",
		description: "Wrong placements eating budget - we typically find 25-40% waste here alone"
	}
];

export function OutcomesSection() {
	return (
		<section className="py-12 md:py-16 px-4 bg-gradient-to-b from-purple-900/10 to-transparent">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
					Where Your Money Is{' '}
					<span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
						Actually Going
					</span>
				</h2>
				<p className="text-center text-gray-400 mb-12 text-base md:text-lg max-w-2xl mx-auto">
					In the last 90 days, we've identified these exact issues in 94% of audits
				</p>

				<div className="space-y-4 md:space-y-6 mb-12">
					{outcomes.map((outcome, index) => {
						const Icon = outcome.icon;
						return (
							<div
								key={index}
								className="bg-[#1a2332] p-5 md:p-6 rounded-xl border border-gray-800/50 hover:border-purple-500/50 transition-all duration-300"
							>
								<div className="flex items-start gap-4">
									<div className="text-purple-400 flex-shrink-0 mt-1">
										<Icon className="w-6 h-6 md:w-8 md:h-8" />
									</div>
									<div className="flex-1 min-w-0">
										<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
											<h3 className="text-lg md:text-xl font-semibold text-white">
												{outcome.title}
											</h3>
											<span className="text-red-400 font-bold text-base md:text-lg whitespace-nowrap">
												{outcome.amount}
											</span>
										</div>
										<p className="text-sm md:text-base text-gray-400 leading-relaxed">
											{outcome.description}
										</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>

				<div className="p-6 md:p-8 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-2xl text-center">
					<p className="text-xl md:text-2xl font-bold mb-2">
						Average Total Waste Found:{' '}
						<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
							$7,400/month
						</span>
					</p>
					<p className="text-sm md:text-base text-gray-400">
						That's <span className="text-white font-semibold">$88,800 per year</span> you could be saving or reinvesting in growth
					</p>
				</div>
			</div>
		</section>
	);
}
