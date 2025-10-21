// src/app/adhealth/_components/navigation/LogoModule.tsx

"use client"
import { useState } from "react"
import Image from "next/image"
import { X, HelpCircle } from "lucide-react"

export function LogoModule() {
	const [isExpanded, setIsExpanded] = useState(false)

	return (
		<div className="relative">
			{/* Logo Button with Hover Overlay */}
			<button
				onClick={() => setIsExpanded(!isExpanded)}
				className="cursor-pointer relative w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden
				hover:scale-105 transition-transform shadow-lg hover:shadow-xl group"
			>
				<Image src="/assets/logos/louka-logo.jpg" alt="Louka Digital" fill className="object-cover" />

				{!isExpanded && (
					<div className="absolute inset-0 bg-neutral-950 opacity-0 group-hover:opacity-90 transition-opacity flex items-center justify-center">
						<HelpCircle className="w-10 h-10 md:w-14 md:h-14 text-white" />
					</div>
				)}
			</button>

			{/* Expanded Info Panel */}
			<div
				className={`
          absolute top-0 left-0 z-10
          bg-card/95 backdrop-blur-xl
          rounded-2xl shadow-2xl border border-border/50
          transition-all duration-500 ease-out origin-top-left
          ${isExpanded ? "scale-100 opacity-100 pointer-events-auto" : "scale-95 opacity-0 pointer-events-none"}
        `}
				style={{
					minWidth: "360px",
					maxWidth: "440px",
				}}
			>
				<button
					onClick={() => setIsExpanded(false)}
					className="absolute top-4 right-4 w-10 h-10 rounded-full bg-neutral-950/80 hover:bg-neutral-950 transition-colors flex items-center justify-center"
				>
					<X className="w-6 h-6 text-white" />
				</button>

				{/* Content */}
				<div className="p-8">
					<div className="flex items-center gap-5 mb-6">
						<div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
							<Image src="/assets/logos/louka-logo.jpg" alt="Louka Digital" fill className="object-cover" />
						</div>
						<div>
							<h3 className="font-bold text-2xl mb-1">Louka Digital</h3>
							<p className="text-base text-muted-foreground">Performance Marketing</p>
						</div>
					</div>

					<p className="text-base text-muted-foreground mb-6 leading-relaxed">
						We build and scale paid ad funnels that convert, backed by strong creative strategy, CRO, and transparent
						data reporting.
					</p>

					<div className="mt-6 pt-6 border-t border-border/50">
						<p className="text-sm text-muted-foreground">Trusted by gaming, healthcare, and SaaS brands</p>
					</div>
				</div>
			</div>
		</div>
	)
}
