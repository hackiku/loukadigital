// src/app/adhealth/_components/proof/LogoShoutouts.tsx

'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { testimonials } from '~/data/testimonials';

export function LogoShoutouts() {
	const [activeIndex, setActiveIndex] = useState(0);
	const activeTestimonial = testimonials[activeIndex];

	// Auto-rotate every 5 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % testimonials.length);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="flex flex-col items-start gap-6 max-w-3xl">
			{/* Shoutout Text with Quote Marks */}
			<div className="relative px-6 min-h-[80px] md:min-h-[100px] flex items-end w-full">
				{/* Top Left Quote */}
				<svg
					className="absolute -top-1 -left-1 w-6 h-6 text-purple-400/40"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
				</svg>

				{/* Shoutout Text */}
				<p className="text-lg md:text-xl font-medium italic text-foreground leading-relaxed transition-all duration-500">
					{activeTestimonial?.shoutout}
				</p>

				{/* Bottom Right Quote */}
				<svg
					className="absolute -bottom-1 -right-1 w-6 h-6 text-purple-400/40 rotate-180"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
				</svg>
			</div>

			{/* Logo Row */}
			<div className="flex items-center justify-start gap-4 md:gap-6 flex-wrap">
				{testimonials.map((testimonial, index) => (
					<button
						key={testimonial.id}
						onClick={() => setActiveIndex(index)}
						className={`relative transition-all duration-300 hover:scale-105 ${index === activeIndex ? 'opacity-100' : 'opacity-40 hover:opacity-60'
							}`}
						aria-label={`View testimonial from ${testimonial.author.company}`}
					>
						<div className="relative w-20 h-12 md:w-24 md:h-14">
							<Image
								src={testimonial.logo || ''}
								fill
								className="object-contain object-left"
								alt={testimonial.author.company}
							/>
						</div>

						{/* Active indicator */}
						{index === activeIndex && (
							<div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
						)}
					</button>
				))}
			</div>

			{/* Industry Tag */}
			<div className="text-xs md:text-sm text-muted-foreground">
				{activeTestimonial?.industry}
			</div>
		</div>
	);
}