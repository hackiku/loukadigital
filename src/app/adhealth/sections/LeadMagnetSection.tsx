// src/app/adhealth/sections/LeadMagnetSection.tsx
"use client"

import Image from "next/image"
import { HandDrawnPointer } from "../_components/ui/HandDrawnPointer"
import { AuditForm } from "../_components/cta/AuditForm"

export function LeadMagnetSection() {
	return (
		<>
			{/* Desktop Layout */}
			<div className="hidden md:grid md:grid-cols-2 -mt-12 gap-8 lg:gap-12 items-start mx-12">
				{/* Left side - HandDrawn Pointer */}
				<div className="mt-16 flex items-center justify-end">
					<HandDrawnPointer text="Ultimate diagnostics checklist" pointDirection="down" />
				</div>

				{/* Right side - PDF Image */}
				<div className="relative w-full max-w-[420px] aspect-[500/707] ml-8">
					<Image
						src="/collateral/health-checklist-cover.webp"
						alt="Ad Health PDF Checklist"
						fill
						className="object-cover rounded-lg shadow-xl shadow-purple-500/10 transform rotate-6 pointer-events-none select-none"
						draggable={false}
					/>
				</div>
			</div>

			{/* Form - overlaps image on desktop */}
			<div className="hidden md:block relative -mt-32 ml-12 max-w-md">
				<div className="bg-card p-6 rounded-2xl shadow-2xl border border-border/50">
					<h3 className="text-2xl font-bold mb-6">Find Your Ad Waste in 10min</h3>
					<AuditForm />
				</div>
			</div>

			{/* ----------------- mobile ----------------- */}

			<div className="md:hidden flex flex-col items-center gap-8">
				{/* HandDrawn Pointer pointing down - BEFORE image */}
				<div className="mb-8 rotate-12">
					<HandDrawnPointer text="Ultimate diagnostics checklist" pointDirection="down" />
				</div>

				{/* PDF Image */}
				<div className="relative w-full max-w-[300px] aspect-[500/707]">
					<Image
						src="/collateral/health-checklist-cover.webp"
						alt="Ad Health PDF Checklist"
						fill
						className="object-cover rounded-lg shadow-xl shadow-purple-500/10 transform rotate-6 pointer-events-none select-none"
						draggable={false}
					/>
				</div>

				{/* Form */}
				<div className="z-10 -mt-10 w-full bg-card p-6 rounded-2xl shadow-xl border border-border/50">
					<h3 className="text-2xl font-bold mb-6">Find Your Ad Waste in 10min</h3>
					<AuditForm />
				</div>
			</div>
		</>
	)
}