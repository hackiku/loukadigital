// src/app/adhealth/_components/cta/PDFContainer.tsx
"use client"

import Image from "next/image"
import { AuditForm } from "./AuditForm"

export function PDFContainer() {
	return (
		<div className="p-6 md:p-8">
			<div className="grid md:grid-cols-2 gap-8 items-center">
				{/* Left: Image (hidden on small screens) */}
				<div className="hidden md:block relative w-full aspect-[500/707]">
					<Image
						src="/collateral/health-checklist-cover.webp"
						alt="Ad Health PDF Checklist"
						fill
						className="object-cover rounded-lg shadow-xl shadow-purple-500/10 transform -rotate-3 pointer-events-none select-none"
						draggable={false}
					/>
				</div>

				{/* Right: Form & Text */}
				<div className="flex flex-col justify-center">
					<h3 className="text-2xl font-bold mb-2">
						Get the{" "}
						<span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
							7 Sins Checklist
						</span>
					</h3>
					<p className="text-muted-foreground text-sm mb-6">
						Enter your email to get the free 20-page PDF instantly in your inbox.
					</p>
					<AuditForm />
				</div>
			</div>
		</div>
	)
}
