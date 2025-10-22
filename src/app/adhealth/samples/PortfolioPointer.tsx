// src/app/adhealth/samples/PortfolioPointer.tsx
"use client"

import { useEffect, useState } from "react"

interface PortfolioPointerProps {
	label: string
	circlePosition: { x: string; y: string }
	className?: string
}

export function PortfolioPointer({ label, circlePosition, className = "" }: PortfolioPointerProps) {
	const [circleSvg, setCircleSvg] = useState("")
	const [arrowSvg, setArrowSvg] = useState("")

	useEffect(() => {
		// Load circle SVG
		fetch("/assets/hand-drawn-circle.svg")
			.then((res) => res.text())
			.then((svg) => {
				const recolored = svg.replace(/fill="[^"]*"/g, 'fill="#10b981"')
				setCircleSvg(`data:image/svg+xml;base64,${btoa(recolored)}`)
			})

		// Load arrow SVG
		fetch("/assets/hand-drawn-arrow.svg")
			.then((res) => res.text())
			.then((svg) => {
				const recolored = svg.replace(/fill="[^"]*"/g, 'fill="#10b981"')
				setArrowSvg(`data:image/svg+xml;base64,${btoa(recolored)}`)
			})
	}, [])

	return (
		<div className={`absolute inset-0 pointer-events-none ${className}`}>
			{/* Hand-drawn circle around result */}
			<div
				className="absolute"
				style={{
					left: circlePosition.x,
					top: circlePosition.y,
					transform: "translate(-50%, -50%)",
				}}
			>
				{circleSvg && (
					<img
						src={circleSvg}
						alt=""
						className="w-24 h-24 md:w-32 md:h-32 pointer-events-none select-none opacity-80"
						draggable={false}
					/>
				)}
			</div>

			{/* Arrow pointing to circle from bottom-left */}
			<div
				className="absolute"
				style={{
					bottom: "10%",
					left: "15%",
					transform: "rotate(-45deg)",
				}}
			>
				{arrowSvg && (
					<img
						src={arrowSvg}
						alt=""
						className="h-16 md:h-20 w-auto pointer-events-none select-none opacity-80"
						draggable={false}
					/>
				)}
			</div>

			{/* Label badge */}
			<div
				className="absolute"
				style={{
					bottom: "5%",
					left: "5%",
				}}
			>
				<div className="bg-green-500/90 text-white px-3 py-1.5 rounded-lg text-xs md:text-sm font-semibold shadow-lg whitespace-nowrap border border-green-400/30">
					{label}
				</div>
			</div>
		</div>
	)
}