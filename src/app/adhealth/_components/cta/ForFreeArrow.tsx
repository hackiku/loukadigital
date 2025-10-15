// src/app/adhealth/_components/cta/ForFreeArrow.tsx

export function ForFreeArrow() {
	return (
		<div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full hidden lg:block pointer-events-none">
			<div className="relative" style={{ width: '180px', height: '180px' }}>
				{/* Price text with strikethrough */}
				<div
					className="absolute top-1 right-12"
					style={{
						fontFamily: 'Comic Sans MS, cursive',
						transform: 'rotate(-70deg)',
					}}
				>
					<div className="relative inline-block">
						<span
							className="text-xl font-bold text-foreground/80"
							style={{
								textShadow: '0 2px 8px rgba(168, 85, 247, 0.2)'
							}}
						>
							£697
						</span>
						{/* Diagonal strikethrough */}
						<div
							className="absolute -inset-2 flex items-center justify-center"
							style={{
								transform: 'rotate(-15deg)',
							}}
						>
							<div
								className="w-full bg-red-500/80"
								style={{
									height: '4px',
									boxShadow: '0 0 4px rgba(239, 68, 68, 0.6)'
								}}
							/>
						</div>
					</div>
					<div
						className="text-2xl font-bold text-white mt-1"
						style={{
							textShadow: '0 2px 8px rgba(168, 85, 247, 0.3)'
						}}
					>
						FREE
					</div>
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
						<linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" stopColor="#a855f7">
								<animate attributeName="stop-color"
									values="#a855f7;#ec4899;#3b82f6;#a855f7"
									dur="4s"
									repeatCount="indefinite" />
							</stop>
							<stop offset="100%" stopColor="#ec4899">
								<animate attributeName="stop-color"
									values="#ec4899;#3b82f6;#a855f7;#ec4899"
									dur="4s"
									repeatCount="indefinite" />
							</stop>
						</linearGradient>
					</defs>

					{/* Curved path */}
					<path
						d="M 80 80 Q 80 40, 100 90 T 120 160"
						stroke="url(#arrowGradient)"
						strokeWidth="4"
						fill="none"
						strokeLinecap="round"
						filter="url(#glow)"
						opacity="0.9"
					/>

					{/* Arrow head */}
					<path
						d="M 120 160 L 110 150 M 120 160 L 130 155"
						stroke="url(#arrowGradient)"
						strokeWidth="4"
						strokeLinecap="round"
						filter="url(#glow)"
						opacity="0.9"
					/>

				</svg>
			</div>
		</div>
	);
}