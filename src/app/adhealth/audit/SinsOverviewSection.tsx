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

			{/* Stats Pills */}
			<div className="flex flex-wrap items-center justify-center gap-4 mb-6">
				<div className="px-6 py-3 bg-red-500/20 border-2 border-red-500/40 rounded-full">
					<span className="text-2xl md:text-3xl font-black text-red-400">
						30-40%
					</span>
				</div>
				<div className="px-6 py-3 bg-orange-500/20 border-2 border-orange-500/40 rounded-full">
					<span className="text-2xl md:text-3xl font-black text-orange-400">
						£7,400/mo
					</span>
				</div>
			</div>

			{/* Subtext */}
			<p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
				Most accounts leak <strong className="text-foreground">30-40%</strong>.{' '}
				<strong className="text-foreground">£7,400/month</strong> gone without a trace.
			</p>
			{/* Euler Diagram Section */}
			<SinsEulerDiagram />
		</div>


	);
}