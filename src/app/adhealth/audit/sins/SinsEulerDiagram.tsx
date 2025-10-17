// src/app/adhealth/audit/SinsEulerDiagram.tsx

'use client';
import { sinClusters, getTotalWasteRange } from '~/data/sin-clusters';

export function SinsEulerDiagram() {
	const totalWaste = getTotalWasteRange();

	return (
		<div className="relative min-h-[80vh] flex items-center justify-center">
			{/* Euler Sets Container */}
			<div className="relative w-full max-w-5xl aspect-square">
				{/* Cluster 1: The Overlap Disaster - Top Left */}
				<div
					className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 border-4 border-red-500/40 backdrop-blur-sm"
					style={{
						top: '10%',
						left: '5%',
					}}
				>
					<div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
						<div className="text-6xl mb-3">{sinClusters[0].icon}</div>
						<h3 className="text-2xl font-bold text-foreground mb-2">
							{sinClusters[0].name}
						</h3>
						<p className="text-sm text-muted-foreground leading-relaxed">
							{sinClusters[0].narrative}
						</p>
						<div className="mt-4 px-4 py-2 bg-red-500/30 rounded-full">
							<span className="text-lg font-black text-red-300">
								£{sinClusters[0].totalWaste.min.toLocaleString()}/mo
							</span>
						</div>
					</div>
				</div>

				{/* Cluster 2: The Invisible Waste - Top Right */}
				<div
					className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-4 border-purple-500/40 backdrop-blur-sm"
					style={{
						top: '10%',
						right: '5%',
					}}
				>
					<div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
						<div className="text-6xl mb-3">{sinClusters[1].icon}</div>
						<h3 className="text-2xl font-bold text-foreground mb-2">
							{sinClusters[1].name}
						</h3>
						<p className="text-sm text-muted-foreground leading-relaxed">
							{sinClusters[1].narrative}
						</p>
						<div className="mt-4 px-4 py-2 bg-purple-500/30 rounded-full">
							<span className="text-lg font-black text-purple-300">
								£{sinClusters[1].totalWaste.min.toLocaleString()}/mo
							</span>
						</div>
					</div>
				</div>

				{/* Cluster 3: The Silent Killers - Bottom Center */}
				<div
					className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-orange-500/20 to-yellow-500/20 border-4 border-orange-500/40 backdrop-blur-sm"
					style={{
						bottom: '5%',
						left: '50%',
						transform: 'translateX(-50%)',
					}}
				>
					<div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
						<div className="text-6xl mb-3">{sinClusters[2].icon}</div>
						<h3 className="text-2xl font-bold text-foreground mb-2">
							{sinClusters[2].name}
						</h3>
						<p className="text-sm text-muted-foreground leading-relaxed">
							{sinClusters[2].narrative}
						</p>
						<div className="mt-4 px-4 py-2 bg-orange-500/30 rounded-full">
							<span className="text-lg font-black text-orange-300">
								£{sinClusters[2].totalWaste.min.toLocaleString()}/mo
							</span>
						</div>
					</div>
				</div>

				{/* Center Content - Total Waste */}
				{/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
					<div className="bg-background/90 backdrop-blur-md rounded-2xl p-8 border-2 border-foreground/10 shadow-2xl">
						<div className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 mb-2">
							£{totalWaste.min.toLocaleString()}
						</div>
						<div className="text-xl md:text-2xl font-bold text-foreground mb-4">
							potential savings
						</div>
						<div className="text-4xl font-black text-foreground mb-3">
							7 Sins of Meta Ads
						</div>
						<p className="text-base text-muted-foreground">
							Which ones may you have?{' '}
							<span className="text-foreground font-semibold">Find out here ↓</span>
						</p>
					</div>
				</div> */}
			</div>

			{/* Calculator Placeholder - Bottom Left */}
			<div className="absolute bottom-8 left-8 hidden lg:block">
				<div className="w-64 h-48 rounded-xl border-2 border-dashed border-purple-500/30 bg-purple-500/5 flex items-center justify-center">
					<span className="text-sm text-muted-foreground">
						Calculator Module
					</span>
				</div>
			</div>
		</div>
	);
}