// src/app/adhealth/pricing/DeliveryTime.tsx

'use client';
import { useEffect, useState, useRef } from 'react';
import { Clock, Hourglass, Zap, ZapOff } from 'lucide-react';

interface DeliveryTimeProps {
	deliveryTime?: string;
	targetButtonId?: string;
	className?: string;
}

export function DeliveryTime({
	deliveryTime = '48h',
	targetButtonId = 'hero-cta-button',
	className = ''
}: DeliveryTimeProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const [arrowRotation, setArrowRotation] = useState(-45);
	const [circleSvg, setCircleSvg] = useState('');
	const [arrowSvg, setArrowSvg] = useState('');

	// Fetch and recolor SVGs
	useEffect(() => {
		// load circle SVG
		fetch('/assets/hand-drawn-circle.svg')
			.then(res => res.text())
			.then(svg => {
				// fill color green
				const recolored = svg.replace(/fill="[^"]*"/g, 'fill="#10b981"');
				setCircleSvg(`data:image/svg+xml;base64,${btoa(recolored)}`);
			});

		// load arrow SVG
		fetch('/assets/hand-drawn-arrow.svg')
			.then(res => res.text())
			.then(svg => {
				// fill color green
				const recolored = svg
					.replace(/fill="[^"]*"/g, 'fill="#10b981"')
					// .replace(/stroke="[^"]*"/g, 'stroke="#a855f7"');
				setArrowSvg(`data:image/svg+xml;base64,${btoa(recolored)}`);
			});
	}, []);

	useEffect(() => {
		const calculateArrowRotation = () => {
			const container = containerRef.current;
			const target = document.getElementById(targetButtonId);

			if (!container || !target) return;

			const containerRect = container.getBoundingClientRect();
			const targetRect = target.getBoundingClientRect();

			// Arrow starts from bottom-right of container
			const arrowX = containerRect.right;
			const arrowY = containerRect.bottom + 40;

			const buttonX = targetRect.left + targetRect.width / 2;
			const buttonY = targetRect.top + targetRect.height / 2;

			const deltaX = buttonX - arrowX;
			const deltaY = buttonY - arrowY;

			// Calculate angle in degrees
			const angleRad = Math.atan2(deltaY, deltaX);
			const angleDeg = angleRad * (180 / Math.PI);

			// Arrow SVG points up by default, adjust so it points toward button
			// Since arrow's origin should be top-left, we rotate from there
			setArrowRotation(angleDeg + 45);
		};

		const timer = setTimeout(calculateArrowRotation, 300);
		window.addEventListener('resize', calculateArrowRotation);

		return () => {
			clearTimeout(timer);
			window.removeEventListener('resize', calculateArrowRotation);
		};
	}, [targetButtonId]);

	return (
		<div ref={containerRef} className={`relative inline-flex flex-col items-center ${className}`}>
			{/* Circle with content inside */}
			<div className="-rotate-20 relative inline-flex items-center justify-center">
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
					{/* Icon + Time */}
					<div className="flex items-center gap-2">

						<Clock className="w-auto h-7 text-emerald-400" strokeWidth={2.5} />
						{/* <Hourglass className="w-* h-8 text-emerald-400" strokeWidth={2.5} /> */}
						<span className="text-emerald-400 text-4xl font-semibold tracking-tight">
							{deliveryTime}
						</span>
					</div>

					{/* Deliverance text */}
					{/* <span className="text-base italic font-medium text-emerald-400 tracking-wide ml-auto">
						deliverance
						fast deliver- <br></br>ance
					</span> */}
				</div>
			</div>

			{/* Hand-drawn arrow - positioned at bottom-right, origin at top-left */}
			<div
				className="absolute pointer-events-none"
				style={{
					top: '50%',
					left: '-25%',
					transformOrigin: 'top left',
					transform: `rotate(${arrowRotation}deg)`,
					transition: 'transform 0.3s ease-out',
				}}
			>
				{arrowSvg && (
					<img
						src={arrowSvg}
						alt=""
						className="h-24 w-auto pointer-events-none select-none"
						draggable={false}
					/>
				)}
			</div>
		</div>
	);
}