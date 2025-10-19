// src/components/proof/LogoShoutouts.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Testimonial {
	id: string;
	shoutout?: string;
	logo?: string;
	author: {
		company: string;
	};
}

interface LogoShoutoutsProps {
	testimonials: Testimonial[];
}

export function LogoShoutouts({ testimonials }: LogoShoutoutsProps) {
	const [activeIndex, setActiveIndex] = useState(0);
	const activeTestimonial = testimonials[activeIndex];

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % testimonials.length);
		}, 5000);

		return () => clearInterval(interval);
	}, [testimonials.length]);

	return (
		<div className="flex flex-col items-start gap-8">
			{/* Quote */}
			{activeTestimonial?.shoutout && (
				<div className="relative min-h-[80px] md:min-h-[100px] flex items-end w-full">
					{/* Quote Mark */}
					<svg
						className="absolute left-0 top-0 -translate-y-1/4 -translate-x-1/4 w-12 h-12 md:w-16 md:h-16 text-foreground/10"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
					</svg>

					<p className="pl-6 relative text-lg md:text-xl font-medium italic text-foreground leading-relaxed">
						{activeTestimonial.shoutout}
					</p>
				</div>
			)}

			{/* Logo Row */}
			<div className="flex items-center justify-start gap-6 flex-wrap">
				{testimonials.map((testimonial, index) => {
					if (!testimonial.logo) return null;
					const isActive = index === activeIndex;

					return (
						<button
							key={testimonial.id}
							onClick={() => setActiveIndex(index)}
							className={`relative transition-all duration-300 hover:scale-105 ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-60'
								}`}
						>
							<div className="relative w-20 h-12 md:w-24 md:h-14">
								<Image
									src={testimonial.logo}
									fill
									className="object-contain object-left"
									alt={testimonial.author.company}
									style={{
										filter: isActive ? 'none' : 'grayscale(100%) brightness(0.7)',
									}}
								/>
							</div>
						</button>
					);
				})}
			</div>
		</div>
	);
}