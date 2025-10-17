// src/app/adhealth/audit/SinsOverviewSection.tsx

'use client';
import { sinClusters, getTotalWasteRange } from '~/data/sin-clusters';
import { SinsEulerDiagram } from './SinsEulerDiagram';

export function SinsOverviewSection() {
	const totalWaste = getTotalWasteRange();

	return (
		<div className="text-center mb-16">
			{/* <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
				Where on Earth does my{' '}
				<br />
				<span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
					Insta Ad money
				</span>{' '}
				go?
			</h2> */}



			{/* Subtext */}
			<p className="text-xl leading-10 md:text-2xl text-muted-foreground max-w-2xl mx-auto">
				Most accounts leak 
				<span className="m-1 px-3 py-1 bg-red-500/20 border-2 border-red-500/40 rounded-full
							text-2xl md:text-2xl font-bold text-red-400">
					30-40%
				</span>
				which corresponds preposterously to 
				<span className="m-1 px-3 py-1 bg-red-500/20 border-2 border-red-500/40 rounded-full
							text-2xl md:text-2xl font-bold text-red-400">
					£7,400/month
				</span> lost in thin air
			</p>


			{/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10"> */}
			<div className="bg-background/90 backdrop-blur-md rounded-2xl p-8 border-2 border-foreground/10 shadow-2xl">
				{/* <div className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 mb-2">
						£{totalWaste.min.toLocaleString()}
					</div> */}
				<div className="text-xl md:text-2xl font-bold text-foreground mb-4">
					find out with the
				</div>
				<div className="text-4xl font-black text-foreground mb-3">
					7 Sins of Meta Ads
				</div>
				{/* <p className="text-base text-muted-foreground">
					Which ones may you have?{' '}
				</p> */}
			</div>
			{/* </div> */}



			{/* Euler Diagram Section */}
			<SinsEulerDiagram />
		</div>


	);
}