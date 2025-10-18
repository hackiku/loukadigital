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



			{/* Euler Diagram Section */}
			<SinsEulerDiagram />
		</div>


	);
}