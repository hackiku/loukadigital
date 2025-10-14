// src/app/adhealth/_components/sections/BenefitsSection.tsx

import { TrendingUp, Target, Zap, DollarSign } from 'lucide-react';

const benefits = [
	{
		icon: TrendingUp,
		title: "CAC Health Score",
		description: "Overall performance rating across 4 key categories"
	},
	{
		icon: Target,
		title: "Waste Analysis",
		description: "Exact dollar amount you're losing each month"
	},
	{
		icon: Zap,
		title: "Quick Wins",
		description: "3-5 immediate actions to improve performance"
	},
	{
		icon: DollarSign,
		title: "Savings Potential",
		description: "Projected monthly savings with optimizations"
	}
];

export function BenefitsSection() {
	return (
		<section className="py-12 md:py-16 px-4 bg-gradient-to-b from-purple-900/5 to-transparent">
			<div className="container mx-auto max-w-6xl">
				<h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
					What You'll{' '}
					<span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
						Get
					</span>
				</h2>
				<p className="text-center text-gray-400 mb-12 text-base md:text-lg max-w-2xl mx-auto">
					A comprehensive analysis delivered in 48 hours
				</p>

				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{benefits.map((benefit, index) => {
						const Icon = benefit.icon;
						return (
							<div
								key={index}
								className="bg-[#1a2332] p-6 rounded-xl border border-gray-800/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group"
							>
								<div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
									<Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
								</div>
								<h3 className="text-xl font-semibold mb-2 text-white">
									{benefit.title}
								</h3>
								<p className="text-gray-400 text-sm leading-relaxed">
									{benefit.description}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}