// src/app/_components/about/AboutSection.tsx

export function AboutSection() {
	return (
		<div className="max-w-7xl mx-auto">
			{/* Intro */}
			<div className="text-center mb-20">
				<h2 className="text-3xl md:text-5xl font-bold mb-6">
					About{' '}
					<span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
						Louka Digital
					</span>
				</h2>
				<p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
					We're a team of growth experts who actually deliver. No fluff, no vanity metrics—just strategic marketing that drives revenue.
				</p>
			</div>

			{/* Two Columns */}
			<div className="grid lg:grid-cols-2 gap-16 mb-20">
				{/* Left: Goals & Philosophy */}
				<div className="space-y-8">
					<div>
						<h3 className="text-2xl font-bold mb-4">Our Goal</h3>
						<p className="text-muted-foreground leading-relaxed">
							Help every client achieve sustainable, profitable growth—whether that means scaling to 8 figures or booking out your calendar.
						</p>
					</div>

					<div>
						<h3 className="text-2xl font-bold mb-4">Our Philosophy</h3>
						<ul className="space-y-3">
							<li className="flex items-start gap-3">
								<div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
								<span className="text-muted-foreground">
									We <strong className="text-foreground">move fast</strong>
								</span>
							</li>
							<li className="flex items-start gap-3">
								<div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
								<span className="text-muted-foreground">
									We <strong className="text-foreground">collaborate</strong> with clients, not just for them
								</span>
							</li>
							<li className="flex items-start gap-3">
								<div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0" />
								<span className="text-muted-foreground">
									We only work with businesses we <strong className="text-foreground">care about</strong>
								</span>
							</li>
							<li className="flex items-start gap-3">
								<div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
								<span className="text-muted-foreground">
									We think <strong className="text-foreground">creatively</strong> to get you results
								</span>
							</li>
						</ul>
					</div>
				</div>

				{/* Right: Strategy & Channels */}
				<div className="space-y-8">
					<div>
						<h3 className="text-2xl font-bold mb-4">How We Work</h3>
						<p className="text-muted-foreground leading-relaxed mb-6">
							We craft campaigns, content, and conversion systems tailored to your goals—whether that's scaling revenue or filling your pipeline.
						</p>
					</div>

					<div className="grid sm:grid-cols-2 gap-6">
						<ul className="space-y-3">
							<li className="flex items-start gap-3">
								<div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
								<span className="text-sm text-muted-foreground">Paid social advertising</span>
							</li>
							<li className="flex items-start gap-3">
								<div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
								<span className="text-sm text-muted-foreground">Content & brand awareness</span>
							</li>
							<li className="flex items-start gap-3">
								<div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
								<span className="text-sm text-muted-foreground">Influencer marketing</span>
							</li>
						</ul>

						<ul className="space-y-3">
							<li className="flex items-start gap-3">
								<div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
								<span className="text-sm text-muted-foreground">Product launches</span>
							</li>
							<li className="flex items-start gap-3">
								<div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
								<span className="text-sm text-muted-foreground">Community management</span>
							</li>
							<li className="flex items-start gap-3">
								<div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
								<span className="text-sm text-muted-foreground">Email marketing</span>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Mission */}
			<div className="text-center max-w-4xl mx-auto">
				<h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
				<p className="text-xl text-muted-foreground leading-relaxed">
					To be the growth partner that actually delivers. No fluff. No vanity metrics. Just strategic marketing that drives real revenue.
				</p>
			</div>
		</div>
	);
}