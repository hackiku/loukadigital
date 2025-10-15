// src/app/adhealth/_components/cta/ForFreeArrow.tsx

export function ForFreeArrow() {
	return (
		<div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full hidden lg:block pointer-events-none">
			<div className="relative" style={{ width: '180px', height: '180px' }}>
				{/* FOR FREE text */}
				<div
					className="absolute top-1 right-12 text-2xl font-bold"
					style={{
						fontFamily: 'Comic Sans MS, cursive',
						color: '#a855f7',
						transform: 'rotate(-70deg)',
						textShadow: '0 2px 8px rgba(168, 85, 247, 0.3)'
					}}
				>
					FOR FREE
				</div>

				{/* Curved Arrow SVG */}
				<svg
					className="absolute bottom-0 left-0"
					width="180"
					height="180"
					viewBox="0 0 180 180"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<filter id="glow">
							<feGaussianBlur stdDeviation="2" result="coloredBlur" />
							<feMerge>
								<feMergeNode in="coloredBlur" />
								<feMergeNode in="SourceGraphic" />
							</feMerge>
						</filter>
					</defs>

					{/* Curved path */}
					<path
						d="M 30 20 Q 80 40, 100 90 T 120 160"
						stroke="#a855f7"
						strokeWidth="4"
						fill="none"
						strokeLinecap="round"
						filter="url(#glow)"
						opacity="0.9"
					>
						<animate
							attributeName="stroke-dasharray"
							values="0,200;200,0"
							dur="2s"
							repeatCount="indefinite"
						/>
					</path>

					{/* Arrow head */}
					<path
						d="M 120 160 L 110 150 M 120 160 L 130 155"
						stroke="#a855f7"
						strokeWidth="4"
						strokeLinecap="round"
						filter="url(#glow)"
						opacity="0.9"
					/>

					{/* Handdrawn effect - secondary line */}
					<path
						d="M 32 22 Q 82 42, 102 92 T 122 162"
						stroke="#a855f7"
						strokeWidth="2"
						fill="none"
						strokeLinecap="round"
						opacity="0.4"
					/>
				</svg>
			</div>
		</div>
	);
}