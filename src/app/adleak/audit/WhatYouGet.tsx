// src/app/adleak/audit/WhatYouGet.tsx
'use client';

import { Check, FileText, Target, Wrench, TrendingUp } from 'lucide-react';

export function WhatYouGet() {
	return (
		<div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
			{/* Left: Mockup/Preview */}
			<div className="relative">
				{/* Main Audit Document Mockup */}
				<div className="relative rounded-2xl border-2 border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden shadow-2xl">
					{/* Header */}
					<div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white">
						<div className="flex items-center gap-2 mb-2">
							<FileText className="w-5 h-5" />
							<span className="text-sm font-semibold opacity-90">AdLeak Audit Report</span>
						</div>
						<h3 className="text-2xl font-black mb-1">Your Account Analysis</h3>
						<p className="text-sm opacity-80">47-Point Technical Breakdown</p>
					</div>

					{/* Sample Content */}
					<div className="p-6 space-y-4">
						{/* Executive Summary Section */}
						<div className="pb-4 border-b border-border/30">
							<div className="flex items-center gap-2 mb-2">
								<div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
									<span className="text-red-400 font-bold text-sm">5/7</span>
								</div>
								<span className="font-bold text-foreground">Critical Issues Found</span>
							</div>
							<p className="text-sm text-muted-foreground">
								Account Score: <span className="text-red-400 font-bold">32/90</span> (Critical)
							</p>
						</div>

						{/* Sample Finding */}
						<div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30">
							<div className="flex items-start gap-3">
								<div className="w-8 h-8 rounded-full bg-red-500/30 flex items-center justify-center flex-shrink-0 mt-1">
									<span className="text-red-400 font-bold">3</span>
								</div>
								<div>
									<h4 className="font-bold text-red-400 mb-1">Account Frequency</h4>
									<p className="text-sm text-muted-foreground mb-2">
										Same users seeing ads across ALL campaigns
									</p>
									<div className="flex items-center gap-2">
										<span className="text-xs font-bold text-green-400 px-2 py-1 rounded-full bg-green-500/20">
											£3,000/mo waste
										</span>
										<span className="text-xs text-muted-foreground">
											Avg frequency: 7.2x
										</span>
									</div>
								</div>
							</div>
						</div>

						{/* Priority Fixes Preview */}
						<div className="space-y-2">
							<p className="text-xs font-bold text-purple-400 uppercase tracking-wide">
								Priority Fixes
							</p>
							{[1, 2, 3].map((num) => (
								<div key={num} className="flex items-center gap-2 text-sm text-muted-foreground">
									<div className="w-5 h-5 rounded border border-border/50 flex items-center justify-center text-xs">
										{num}
									</div>
									<div className="flex-1 h-2 bg-muted/30 rounded-full" />
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Floating Badge */}
				<div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold shadow-xl border-4 border-background">
					48hr delivery ⚡
				</div>
			</div>

			{/* Right: What's Inside */}
			<div className="space-y-6">
				<div>
					<h3 className="text-3xl md:text-4xl font-black mb-3">
						Here's Exactly What{' '}
						<span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
							You Get
						</span>
					</h3>
					<p className="text-lg text-muted-foreground">
						Not a vague "strategy session". A surgical breakdown of where your money's going.
					</p>
				</div>

				{/* Deliverables List */}
				<div className="space-y-4">
					<DeliverableItem
						icon={<FileText className="w-5 h-5" />}
						title="47-Point Technical Audit"
						description="Every campaign, ad set, and placement analyzed. No stone unturned."
					/>

					<DeliverableItem
						icon={<Target className="w-5 h-5" />}
						title="Custom Waste Breakdown"
						description="Specific £ amounts for each issue. Know exactly where your budget's leaking."
					/>

					<DeliverableItem
						icon={<Wrench className="w-5 h-5" />}
						title="Priority Fix Roadmap"
						description="Step-by-step fixes ranked by impact. Start with the biggest wins first."
					/>

					<DeliverableItem
						icon={<TrendingUp className="w-5 h-5" />}
						title="30-Min Implementation Call"
						description="We walk you through the top 3 fixes. No tech jargon, just clear actions."
					/>
				</div>

				{/* Example Finding Callout */}
				<div className="p-4 rounded-xl border border-purple-500/30 bg-purple-500/10">
					<p className="text-sm font-bold text-purple-400 mb-1">Real Example:</p>
					<p className="text-sm text-muted-foreground">
						"Campaign overlap causing £2,400/month waste due to 3 campaigns bidding against each other for the same audience."
					</p>
				</div>
			</div>
		</div>
	);
}

// Reusable deliverable item component
function DeliverableItem({
	icon,
	title,
	description
}: {
	icon: React.ReactNode;
	title: string;
	description: string;
}) {
	return (
		<div className="flex gap-4">
			<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center flex-shrink-0 text-white">
				{icon}
			</div>
			<div>
				<h4 className="font-bold text-foreground mb-1">{title}</h4>
				<p className="text-sm text-muted-foreground">{description}</p>
			</div>
		</div>
	);
}