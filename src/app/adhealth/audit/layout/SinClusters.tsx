// src/app/adhealth/audit/layout/SinClusters.tsx
'use client';
import { sins, clusters } from '~/data/audit';
import { SinSnippet } from '../sins/SinSnippet';

interface SinClustersProps {
	selectedSins: string[];
	onToggle: (sinId: string) => void;
	monthlyBudget: number;
	compact?: boolean;
}

export function SinClusters({ selectedSins, onToggle, monthlyBudget, compact = false }: SinClustersProps) {
	return (
		<div className="grid grid-cols-12 gap-6">
			{/* Left Column: Stacked sins grouped by cluster */}
			<div className={`${compact ? 'col-span-12' : 'col-span-5'} space-y-6`}>
				{clusters.map(cluster => {
					const clusterSins = sins.filter(s => s.clusterId === cluster.id);

					return (
						<div key={cluster.id} className="space-y-3">
							{/* Cluster Header */}
							{!compact && (
								<div className="px-4 py-3 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50">
									<div className="flex items-start justify-between mb-1">
										<h3 className="text-lg font-bold">{cluster.name}</h3>
										<div className="px-2.5 py-0.5 rounded-full bg-red-500/20 border border-red-500/40">
											<span className="text-xs font-bold text-red-400">
												£{cluster.wasteMin.toLocaleString()}
											</span>
										</div>
									</div>
									<p className="text-sm text-muted-foreground">{cluster.description}</p>
								</div>
							)}

							{/* Sins in this cluster */}
							<div className="space-y-2 pl-4">
								{clusterSins.map(sin => (
									<SinSnippet
										key={sin.id}
										sin={sin}
										isSelected={selectedSins.includes(sin.id)}
										onToggle={() => onToggle(sin.id)}
										monthlyBudget={monthlyBudget}
										showMoney={false}
										compact={compact}
									/>
								))}
							</div>
						</div>
					);
				})}
			</div>

			{/* Right Column: Cluster details (only when not compact) */}
			{!compact && (
				<div className="col-span-7 space-y-4">
					{clusters.map(cluster => (
						<div
							key={cluster.id}
							className={`p-6 rounded-2xl bg-gradient-to-r ${cluster.color} bg-opacity-10 border-2 border-opacity-30`}
						>
							<h3 className="text-2xl font-bold mb-2">{cluster.name}</h3>
							<p className="text-muted-foreground mb-4">{cluster.description}</p>
							<div className="flex items-center gap-2">
								<span className="text-sm text-muted-foreground">Potential waste:</span>
								<span className="text-xl font-black text-red-400">
									£{cluster.wasteMin.toLocaleString()}/mo
								</span>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}