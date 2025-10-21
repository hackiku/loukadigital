// src/app/adhealth/sections/HeroSection.tsx

"use client"

// cta
import { PDFButton } from "../_components/cta/PDFButton"
import { useDrawer } from "../_context/DrawerContext"

// ui
import { LiquidLeakText } from "../_components/ui/LiquidLeakText"
import { LogoShoutouts } from "../_components/proof/LogoShoutouts"
import { PlatformIcons } from "../_components/ui/PlatformIcons"
import { DeliveryTime } from "../pricing/DeliveryTime"
// import { GetPDFButton } from '../_components/cta/GetPDFButton';
// import { AuditForm } from '../_components/cta/AuditForm';
// import { AuditDrawerTrigger } from '../_components/cta/AuditDrawerTrigger';

export function HeroSection() {
	const { openDrawer } = useDrawer()

	return (
		<div className="relative w-full h-full">
			{/* Bottom left testimonials - desktop only */}
			<div className="absolute bottom-0 left-0 z-10 hidden md:block max-w-sm">
				<LogoShoutouts />
			</div>

			{/* Floating platform icons */}
			<PlatformIcons />

			{/* Main Content */}
			<div className="max-w-xl relative mt-36 flex flex-col items-center gap-4 mx-auto w-full">
				{/* Main Headline */}
				<h1 className="flex flex-col gap-1 text-4xl md:text-6xl lg:text-7xl font-extrabold text-center">
					<span className="text-transparent text-5xl md:text-7xl bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text">
						Diagnose & Fix Your Meta
					</span>
					<LiquidLeakText>Ad Spend Leak</LiquidLeakText>
				</h1>

				<p className="text-center text-xl md:text-2xl text-muted-foreground leading-relaxed mb-4">
					Uncover up to <strong className="text-foreground">£15k/mo in losses</strong> in ~10 min (for free)
					{/* (Or we can do it for you) */}
				</p>
				{/* <AuditForm /> */}
				{/* CTA Button Container */}
				<div className="flex flex-col gap-6 md:flex-row items-center justify-center relative w-full">
					<div className="w-[11.4em] _w-full" id="hero-cta-button">
						{/* <AuditForm /> */}
						{/* <AuditDrawerTrigger badge="price" onOpen={onOpenDrawer} /> */}
						<PDFButton onClick={openDrawer} />
						{/* <GetPDFButton variant="hero" /> */}
					</div>
				</div>

				{/* Delivery Time Badge - positioned below button on mobile, floating on desktop */}
				{/* <div className="relative md:absolute md:right-[5%] md:-bottom-[20%] mt-4 md:mt-0">
          <DeliveryTime targetButtonId="hero-cta-button" />
        </div> */}

				{/* Mobile testimonials */}
				<div className="md:hidden mt-8">
					<LogoShoutouts />
				</div>
			</div>
		</div>
	)
}
