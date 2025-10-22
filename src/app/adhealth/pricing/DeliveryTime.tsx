// src/app/adhealth/pricing/DeliveryTime.tsx
'use client';
import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

interface DeliveryTimeProps {
	deliveryTime?: string;
	direction?: 'down-right' | 'right';
	className?: string;
}

export function DeliveryTime({
	deliveryTime = '48h',
	direction = 'right',
	className = ''
}: DeliveryTimeProps) {
	const [circleSvg, setCircleSvg] = useState('');
	const [arrowSvg, setArrowSvg] = useState('');

	useEffect(() => {
		fetch('/assets/hand-drawn-circle.svg')
			.then(res => res.text())
			.then(svg => {
				const recolored = svg.replace(/fill="[^"]*"/g, 'fill="#10b981"');
				setCircleSvg(`data:image/svg+xml;base64,${btoa(recolored)}`);
			});

		fetch('/assets/hand-drawn-arrow.svg')
			.then(res => res.text())
			.then(svg => {
				const recolored = svg.replace(/fill="[^"]*"/g, 'fill="#10b981"');
				setArrowSvg(`data:image/svg+xml;base64,${btoa(recolored)}`);
			});
	}, []);

	const arrowRotation = direction === 'down-right' ? 45 : -15;

	return (
		<div className={`relative inline-flex flex-col items-center ${className}`}>
			{/* Circle with content inside */}
			<div className="-rotate-12 relative inline-flex items-center justify-center">
				{/* Hand-drawn circle background */}
				<div className="absolute -inset-0 flex items-center justify-center pointer-events-none">
					{circleSvg && (
						<img
							src={circleSvg}
							alt=""
							className="w-full h-full object-contain pointer-events-none select-none"
							draggable={false}
							style={{
								transform: 'scale(1.4)',
							}}
						/>
					)}
				</div>

				{/* Content - centered inside circle */}
				<div className="relative z-10 flex flex-col items-center gap-1 p-4">
					<div className="flex items-center gap-2">
						<Clock className="w-auto h-7 text-emerald-400" strokeWidth={2.5} />
						<span className="text-emerald-400 text-4xl font-semibold tracking-tight">
							{deliveryTime}
						</span>
					</div>
				</div>
			</div>

			{/* Hand-drawn arrow */}
			<div
				className="absolute pointer-events-none"
				style={{
					bottom: direction === 'down-right' ? '-20%' : '50%',
					right: direction === 'down-right' ? '-20%' : '-25%',
					transformOrigin: 'top left',
					transform: `rotate(${arrowRotation}deg)`,
				}}
			>
				{arrowSvg && (
					<img
						src={arrowSvg}
						alt=""
						className="h-20 md:h-24 w-auto pointer-events-none select-none"
						draggable={false}
					/>
				)}
			</div>
		</div>
	)
}