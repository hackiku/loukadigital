"use client"

interface ProblemPointerProps {
	problem: string
	direction: "left" | "right" | "bottom"
	circlePosition: { x: string; y: string } // percentage positions
	className?: string
}

export function ProblemPointer({ problem, direction, circlePosition, className = "" }: ProblemPointerProps) {
	// Calculate arrow positioning based on direction
	const getArrowStyles = () => {
		switch (direction) {
			case "left":
				return {
					arrow: "left-0 top-1/2 -translate-y-1/2 -translate-x-full",
					label: "left-0 top-1/2 -translate-y-1/2 -translate-x-full pr-16",
				}
			case "right":
				return {
					arrow: "right-0 top-1/2 -translate-y-1/2 translate-x-full",
					label: "right-0 top-1/2 -translate-y-1/2 translate-x-full pl-16",
				}
			case "bottom":
				return {
					arrow: "bottom-0 left-1/2 -translate-x-1/2 translate-y-full",
					label: "bottom-0 left-1/2 -translate-x-1/2 translate-y-full pt-16",
				}
		}
	}

	const styles = getArrowStyles()

	return (
		<div className={`absolute inset-0 pointer-events-none ${className}`}>
			{/* Hand-drawn circle around the problem */}
			<div
				className="absolute"
				style={{
					left: circlePosition.x,
					top: circlePosition.y,
					transform: "translate(-50%, -50%)",
				}}
			>
				<svg width="120" height="120" viewBox="0 0 120 120" className="animate-draw-circle">
					<ellipse
						cx="60"
						cy="60"
						rx="45"
						ry="48"
						fill="none"
						stroke="rgba(239, 68, 68, 0.8)"
						strokeWidth="3"
						strokeLinecap="round"
						strokeDasharray="300"
						strokeDashoffset="300"
						transform="rotate(-5 60 60)"
						style={{
							filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
						}}
					/>
				</svg>
			</div>

			{/* Arrow and label */}
			<div className={`absolute ${styles.arrow}`}>
				{direction === "left" && (
					<svg width="80" height="60" viewBox="0 0 80 60" className="animate-draw-arrow">
						<path
							d="M 75 30 Q 40 25, 15 30 L 20 25 M 15 30 L 20 35"
							fill="none"
							stroke="rgba(239, 68, 68, 0.8)"
							strokeWidth="2.5"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeDasharray="120"
							strokeDashoffset="120"
						/>
					</svg>
				)}
				{direction === "right" && (
					<svg width="80" height="60" viewBox="0 0 80 60" className="animate-draw-arrow">
						<path
							d="M 5 30 Q 40 35, 65 30 L 60 25 M 65 30 L 60 35"
							fill="none"
							stroke="rgba(239, 68, 68, 0.8)"
							strokeWidth="2.5"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeDasharray="120"
							strokeDashoffset="120"
						/>
					</svg>
				)}
				{direction === "bottom" && (
					<svg width="60" height="80" viewBox="0 0 60 80" className="animate-draw-arrow">
						<path
							d="M 30 5 Q 35 40, 30 65 L 25 60 M 30 65 L 35 60"
							fill="none"
							stroke="rgba(239, 68, 68, 0.8)"
							strokeWidth="2.5"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeDasharray="120"
							strokeDashoffset="120"
						/>
					</svg>
				)}
			</div>

			{/* Problem label */}
			<div className={`absolute ${styles.label}`}>
				<div className="bg-red-500/90 text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow-lg whitespace-nowrap">
					{problem}
				</div>
			</div>

			<style jsx>{`
        @keyframes draw-circle {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes draw-arrow {
          to {
            stroke-dashoffset: 0;
          }
        }

        .animate-draw-circle ellipse {
          animation: draw-circle 1s ease-out forwards;
          animation-delay: 0.3s;
        }

        .animate-draw-arrow path {
          animation: draw-arrow 0.8s ease-out forwards;
          animation-delay: 1.3s;
        }
      `}</style>
		</div>
	)
}
