// src/app/adhealth/_components/sections/QualificationSection.tsx

import { CheckCircle, X } from 'lucide-react';

const perfectFor = [
	"You're spending $3,000+/month on Meta ads",
	"You suspect your ads could perform better",
	"You want objective expert analysis",
	"You're open to making data-driven changes"
];

const notFor = [
	"Spending less than $3,000/month on ads",
	"Just launched ads in the last 30 days",
	"Not advertising on Meta/Facebook/Instagram",
	"Looking for someone to just do the work for you"
];

export function QualificationSection() {
	return (
		<section className="py-12 md:py-16 px-4 bg-gradient-to-b from-transparent to-purple-900/5">
			<div className="container mx-auto max-w-4xl">
				<div className="bg-[#1a2332] border border-gray-800/50 rounded-2xl p-6 md:p-10">
					<h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
						Is This Audit{' '}
						<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
							Right For You?
						</span>
					</h2>

					<div className="grid md:grid-cols-2 gap-8 md:gap-12">
						{/* Perfect If */}
						<div>
							<h3 className="text-xl font-semibold mb-6 text-green-400 flex items-center gap-2">
								<CheckCircle className="w-6 h-6 flex-shrink-0" />
								<span>This audit is perfect if:</span>
							</h3>
							<ul className="space-y-4">
								{perfectFor.map((item, i) => (
									<li key={i} className="flex items-start gap-3">
										<span className="text-green-400 mt-0.5 flex-shrink-0 text-xl font-bold">✓</span>
										<span className="text-gray-300 text-sm md:text-base leading-relaxed">{item}</span>
									</li>
								))}
							</ul>
						</div>

						{/* Not For */}
						<div>
							<h3 className="text-xl font-semibold mb-6 text-red-400 flex items-center gap-2">
								<X className="w-6 h-6 flex-shrink-0" />
								<span>Not for:</span>
							</h3>
							<ul className="space-y-4">
								{notFor.map((item, i) => (
									<li key={i} className="flex items-start gap-3">
										<span className="text-red-400 mt-0.5 flex-shrink-0 text-xl font-bold">✗</span>
										<span className="text-gray-300 text-sm md:text-base leading-relaxed">{item}</span>
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* Bottom CTA/Note */}
					<div className="mt-8 p-5 bg-purple-500/10 border border-purple-500/30 rounded-xl text-center">
						<p className="text-gray-300 text-sm md:text-base">
							<span className="font-semibold text-purple-400">Limited capacity:</span>{' '}
							We can only take on qualified businesses to ensure audit quality
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}