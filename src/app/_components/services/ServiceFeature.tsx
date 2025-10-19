// src/app/_components/services/ServiceFeature.tsx
'use client';

import { useEffect, useRef } from 'react';

interface ServiceFeatureProps {
	feature: string;
	index: number;
}

export function ServiceFeature({ feature, index }: ServiceFeatureProps) {
	const cardRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const card = cardRef.current;
		if (!card) return;

		const handleMouseMove = (e: MouseEvent) => {
			const rect = card.getBoundingClientRect();
			const x = e.clientX - rect.left - rect.width / 2;
			const y = e.clientY - rect.top - rect.height / 2;

			const moveX = x * 0.1;
			const moveY = y * 0.1;

			card.style.transform = `translate(${moveX}px, ${moveY}px)`;
		};

		const handleMouseLeave = () => {
			card.style.transform = 'translate(0, 0)';
		};

		card.addEventListener('mousemove', handleMouseMove);
		card.addEventListener('mouseleave', handleMouseLeave);

		return () => {
			card.removeEventListener('mousemove', handleMouseMove);
			card.removeEventListener('mouseleave', handleMouseLeave);
		};
	}, []);

	// Random positioning offsets based on index
	const positions = [
		'top-[10%] right-[15%]',
		'top-[35%] right-[5%]',
		'bottom-[25%] right-[20%]',
		'bottom-[10%] right-[8%]',
	];

	const position = positions[index % positions.length];

	return (
		<div
			ref={cardRef}
			className={`absolute ${position} hidden lg:block transition-transform duration-200 ease-out`}
		>
			<div className="px-4 py-2 rounded-lg bg-card border border-border/50 backdrop-blur-sm shadow-lg">
				<p className="text-sm font-medium text-foreground whitespace-nowrap">
					{feature}
				</p>
			</div>
		</div>
	);
}