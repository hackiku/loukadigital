// src/app/adleak/audit/sins/ClusterSection.tsx
'use client';
import { sinClusters } from '~/data/sin-clusters';

interface ClusterSectionProps {
	clusterId: 'overlap' | 'blindspot' | 'fatigue';
	children: React.ReactNode;
}

export function ClusterSection({ clusterId, children }: ClusterSectionProps) {
	const cluster = sinClusters.find(c => c.id === clusterId);
	if (!cluster) return null;

	// Color mapping for 45deg stripes
	const colorMap = {
		overlap: 'rgba(239, 68, 68, 0.08)', // red
		blindspot: 'rgba(168, 85, 247, 0.08)', // purple
		fatigue: 'rgba(251, 146, 60, 0.08)', // orange
	};

	return (
		<section className="relative py-32 min-h-screen flex items-center">
			{/* 45° Striped Background */}
			<div
				className="absolute inset-0"
				style={{
					backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 30px,
            ${colorMap[clusterId]} 30px,
            ${colorMap[clusterId]} 60px
          )`
				}}
			/>

			{/* Content Container */}
			<div className="relative z-10 w-full max-w-6xl mx-auto px-6">
				{/* Cluster Header - Centered, Big */}
				<div className="text-center mb-16">
					<h2 className="text-5xl md:text-6xl font-black mb-3 uppercase tracking-tight">
						{cluster.name}
					</h2>
					<p className="text-xl text-muted-foreground mb-6">
						{cluster.narrative}
					</p>

					{/* Waste Range - Subtle */}
					<div className="inline-flex items-baseline gap-2 text-sm">
						<span className="text-muted-foreground">Typical waste</span>
						<span className="text-2xl font-bold text-red-400">
							£{cluster.totalWaste.min.toLocaleString()}
							{cluster.totalWaste.min !== cluster.totalWaste.max &&
								`-£${cluster.totalWaste.max.toLocaleString()}`
							}/mo
						</span>
					</div>
				</div>

				{/* Sins Grid */}
				<div className="space-y-4 max-w-3xl mx-auto">
					{children}
				</div>
			</div>
		</section>
	);
}