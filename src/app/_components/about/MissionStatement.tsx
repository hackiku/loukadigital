// src/app/_components/about/MissionStatement.tsx

export function MissionStatement() {
	return (
		<div className="bg-card/50 rounded-2xl p-8 border border-border/50 h-full">
			{/* Header */}
			<div className="text-center mb-6">
				<span className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
					Mission
				</span>
			</div>

			{/* Mission Text */}
			<p className="text-lg text-foreground leading-relaxed text-left">
				Be the growth partner that actually delivers. No fluff, no vanity metrics—just strategic marketing that drives real revenue, whether you're selling products or filling your calendar.
			</p>
		</div>
	);
}