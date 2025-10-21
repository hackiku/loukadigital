// src/app/adhealth/sections/SinsIntroSection.tsx
import { ArrowDown, ChevronDown } from "lucide-react";

export function SinsIntroSection() {
	return (
		<div className="max-w-7xl mx-auto">
			{/* Rotated Statement - Centered, subtle */}
			<div className="relative mb-24 min-h-[200px]">
				{/* Background subtle glow */}
				<div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-orange-500/5 blur-3xl" />

				<div className="relative rotate-12 max-w-3xl ml-auto text-center">
					{/* Top line */}
					<p className="text-lg md:text-2xl text-muted-foreground/70 mb-3">
						Most ad accounts leak
					</p>

					{/* Big statement line */}
					<div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap mb-3">
						{/* 30-40% Badge */}
						<span className="inline-flex items-center gap-1.5 px-3 md:px-4 py-1.5 md:py-2 bg-red-500/20 rounded-full border-2 border-red-500/40">
							<ArrowDown className="w-4 h-4 md:w-5 md:h-5 text-red-400" />
							<span className="text-2xl md:text-4xl font-black text-red-400">
								30-40%
							</span>
						</span>

						{/* Ad budget text */}
						<span className="text-2xl md:text-4xl font-bold text-foreground">
							ad budget
						</span>
					</div>

					{/* Bottom descriptive line */}
					<p className="text-base md:text-xl text-muted-foreground/70 leading-relaxed">
						on <strong className="text-foreground font-semibold">easy to fix</strong> yet{' '}
						<strong className="text-foreground font-semibold">devilish to diagnose</strong> issues
					</p>
				</div>
			</div>

			{/* 7 Sins CTA Box - Subtle */}
			<div className="__hidden max-w-xl mx-auto">
				<div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500/10 via-red-500/5 to-orange-600/10 p-6 md:p-8">
					<div className="relative z-10 text-center">
						<p className="text-sm md:text-base text-muted-foreground mb-2">
							find out with the
						</p>

						<h3 className="text-2xl md:text-4xl font-black mb-4 leading-tight">
							<span className="bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 bg-clip-text text-transparent">
								7 Sins of Meta Ads
							</span>
						</h3>

						{/* Animated arrow - bounces down */}
						<div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange-500/20 animate-bounce">
							<ChevronDown className="w-5 h-5 text-orange-400" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}