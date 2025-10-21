// src/app/adhealth/_components/proof/ResultsCard.tsx
'use client';

import { TrendingUp, TrendingDown } from 'lucide-react';
import Image from 'next/image';

interface ResultsCardProps {
	companyName: string;
	companyLogo?: string; // Optional logo path
	industry?: string; // e.g., "Medical Clinic", "DTC Skincare"
	testimonial: string;
	metric: {
		label: string; // e.g., "Monthly Waste Found", "CAC Reduced"
		value: string; // e.g., "£17,000", "£85 → £34"
		trend?: 'up' | 'down'; // Optional: show if metric improved
	};
	sinCount?: number; // How many sins found
}

export function ResultsCard({
	companyName,
	companyLogo,
	industry,
	testimonial,
	metric,
	sinCount
}: ResultsCardProps) {
	return (
		<div className="group relative p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-purple-500/50 transition-all hover:shadow-xl">
			{/* Hover glow effect */}
			<div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 rounded-2xl transition-all" />

			<div className="relative z-10">
				{/* Header: Company Info */}
				<div className="flex items-start justify-between mb-4">
					<div className="flex items-center gap-3">
						{companyLogo ? (
							<div className="w-12 h-12 rounded-xl overflow-hidden bg-muted flex items-center justify-center">
								<Image
									src={companyLogo}
									alt={companyName}
									width={48}
									height={48}
									className="object-contain"
								/>
							</div>
						) : (
							<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
								<span className="text-white font-bold text-lg">
									{companyName.charAt(0)}
								</span>
							</div>
						)}

						<div>
							<h4 className="font-bold text-foreground">{companyName}</h4>
							{industry && (
								<p className="text-xs text-muted-foreground">{industry}</p>
							)}
						</div>
					</div>

					{/* Sin Count Badge */}
					{sinCount && (
						<div className="px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30">
							<span className="text-xs font-bold text-red-400">
								{sinCount}/7 sins
							</span>
						</div>
					)}
				</div>

				{/* Testimonial Quote */}
				<blockquote className="text-foreground leading-relaxed mb-4 italic">
					"{testimonial}"
				</blockquote>

				{/* Metric Display */}
				<div className="pt-4 border-t border-border/30">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-xs text-muted-foreground mb-1">
								{metric.label}
							</p>
							<p className="text-2xl font-black text-green-400">
								{metric.value}
							</p>
						</div>

						{/* Trend Indicator */}
						{metric.trend && (
							<div className={`w-10 h-10 rounded-full flex items-center justify-center ${metric.trend === 'up'
									? 'bg-green-500/20 border border-green-500/30'
									: 'bg-red-500/20 border border-red-500/30'
								}`}>
								{metric.trend === 'up' ? (
									<TrendingUp className="w-5 h-5 text-green-400" />
								) : (
									<TrendingDown className="w-5 h-5 text-red-400" />
								)}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

// Example usage in your results section:
/*
<ResultsCard
	companyName="Provider Partners"
	companyLogo="/assets/logos/provider-partners.png"
	industry="Health Insurance"
	testimonial="Uncovered £17,000 in additional revenue we were leaving on the table"
	metric={{
		label: "Monthly Waste Found",
		value: "£17,000",
		trend: "up"
	}}
	sinCount={5}
/>
*/