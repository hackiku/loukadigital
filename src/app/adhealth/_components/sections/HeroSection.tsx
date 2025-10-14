// src/app/adhealth/_components/sections/HeroSection.tsx

'use client';
import { CheckCircle } from 'lucide-react';

export function HeroSection() {
	return (
		<section className="pt-32 pb-12 px-4">
			<div className="container mx-auto max-w-4xl text-center">
				<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
					Find Out Exactly How Much You're Losing Every Month
				</h1>
				<p className="text-lg md:text-2xl text-gray-300 mb-6">
					Get a free expert analysis of your ad account and discover where your budget is leaking
				</p>
				<div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
					{['2-Minute Submission', 'CAC Health Score', 'Savings Potential'].map((item) => (
						<div key={item} className="flex items-center gap-2 bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20">
							<CheckCircle className="w-5 h-5 text-purple-400" />
							<span>{item}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}