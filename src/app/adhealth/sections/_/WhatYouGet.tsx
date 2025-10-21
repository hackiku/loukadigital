// src/app/adhealth/audit/WhatYouGet.tsx
'use client';

import Image from 'next/image';
import { Check } from 'lucide-react';
import { EmailForm } from '../_components/cta/EmailForm';
import { AuditForm } from '../_components/cta/AuditForm';

export function WhatYouGet() {
	return (
		<section id="what-you-get">
			<div className="max-w-5xl mx-auto">
				<div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Left Column: PDF Cover Image */}
					<div className="relative w-full max-w-sm mx-auto md:max-w-none">
						<Image
							src="/collateral/health-checklist-cover.webp"
							alt="The 7 Sins of Meta Ads PDF Checklist Cover"
							width={500}
							height={707}
							className="rounded-xl shadow-2xl shadow-purple-500/10 transform -rotate-2 hover:-rotate-1 transition-transform duration-300"
						/>
						<div className="absolute -top-4 -right-4 bg-red-500 text-white font-bold text-sm px-4 py-2 rounded-full transform rotate-6 shadow-lg">
							INSTANT DOWNLOAD
						</div>
					</div>

					{/* Right Column: Content & Form */}
					<div>
						<h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
							Your Step-by-Step{' '}
							<span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
								Fix Guide
							</span>
						</h2>

						<p className="text-lg text-muted-foreground mb-8">
							You've seen the potential waste. This free 15-page checklist is your playbook for finding and fixing it yourself.
						</p>

						<ul className="space-y-4 mb-12">
							<li className="flex items-start gap-3">
								<Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
								<div>
									<h4 className="font-semibold text-foreground">Detailed Breakdowns</h4>
									<p className="text-sm text-muted-foreground">
										A full page dedicated to each of the 7 Sins, explaining the *why* behind the waste.
									</p>
								</div>
							</li>
							<li className="flex items-start gap-3">
								<Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
								<div>
									<h4 className="font-semibold text-foreground">Real Screenshots</h4>
									<p className="text-sm text-muted-foreground">
										See exactly where to click in your Ads Manager—no more guessing games.
									</p>
								</div>
							</li>
							<li className="flex items-start gap-3">
								<Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
								<div>
									<h4 className="font-semibold text-foreground">15-Minute Fixes</h4>
									<p className="text-sm text-muted-foreground">
										Simple, actionable "If-Then" steps to plug the leaks without rebuilding campaigns.
									</p>
								</div>
							</li>
						</ul>

						{/* Email Form */}
						<div className="p-6 rounded-2xl bg-card/50 border-2 border-purple-500/30">
							<AuditForm />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}