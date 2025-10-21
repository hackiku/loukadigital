// src/app/adhealth/sections/HeroSection.tsx

"use client"

// cta
import { PDFButton } from "../_components/cta/PDFButton"
import { useDrawer } from "../_context/DrawerContext"

// ui
import { LiquidLeakText } from "../_components/ui/LiquidLeakText"
import { LogoShoutouts } from "../_components/proof/LogoShoutouts"
import { PlatformIcons } from "../_components/ui/PlatformIcons"

export function HeroSection() {
	const { openDrawer } = useDrawer()

	return (
		<div className="relative w-full h-full">
			{/* Bottom left testimonials - desktop only */}
			<div className="absolute bottom-0 left-0 z-10 hidden md:block max-w-sm">
				<LogoShoutouts />
			</div>

			{/* Main Content */}
			<div className="max-w-3xl relative mt-36 flex flex-col items-center gap-4 mx-auto w-full z-10">
				{/* Main Headline */}
				<h1 className="flex flex-col gap-1 text-4xl md:text-6xl lg:text-7xl font-extrabold text-center">
					<span className="text-transparent text-5xl md:text-7xl bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text">
						Diagnose & Fix Your Monthly Meta
					</span>
					<LiquidLeakText />
				</h1>

				<p className="text-center text-xl md:text-2xl text-muted-foreground leading-relaxed mb-4">
					Uncover up to <strong className="text-foreground">£15k/mo in losses</strong> in ~10 min (for free)
				</p>

				{/* CTA Button Container */}
				<div className="flex flex-col gap-6 md:flex-row items-center justify-center relative w-full">
					<div className="w-[11.4em]" id="hero-cta-button">
						<PDFButton onClick={openDrawer} />
					</div>
				</div>
			</div>

			{/* Mobile testimonials */}
			<div className="md:hidden mt-8 max-w-sm z-10 relative">
				<LogoShoutouts />
			</div>

			{/* Floating platform icons - behind everything, no interaction */}
			<div className="hidden md:block pointer-events-none absolute -right-[2vw] -bottom-[30%] w-full h-full scale-80 md:scale-100 z-0 opacity-60">
				<PlatformIcons />
			</div>
		</div>
	)
}