// src/app/adhealth/audit/layout/SinClusters.tsx
"use client";
import { clusters, sins } from "~/data/audit";

interface SinClustersProps {
	monthlyBudget: number;
}

export function SinClusters({ monthlyBudget }: SinClustersProps) {
	return (
		<div className="space-y-3">
			{clusters.map(cluster => {
				const clusterSins = sins.filter(s => s.clusterId === cluster.id);

				return (
					<div
						key={cluster.id}
						className={`p-4 rounded-xl bg-gradient-to-r ${cluster.color} bg-opacity-10 border-2 border-opacity-30`}
						style={{ borderColor: `var(--${cluster.color})` }}
					>
						<div className="flex items-start justify-between mb-2">
							<h4 className="text-lg font-bold">{cluster.name}</h4>
							<div className="px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full">
								<span className="text-sm font-black text-red-400">
									£{cluster.wasteMin.toLocaleString()}/mo
								</span>
							</div>
						</div>
						<p className="text-sm text-muted-foreground mb-3">{cluster.description}</p>

						{/* Show sins in cluster */}
						<div className="flex flex-wrap gap-2">
							{clusterSins.map(sin => (
								<span key={sin.id} className="text-xs px-2 py-1 bg-background/50 rounded-full">
									#{sin.number} {sin.name}
								</span>
							))}
						</div>
					</div>
				);
			})}
		</div>
	);
}