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
		<div className="flex flex-col items-start gap-8">
			{/* Shoutout Text with Quote Mark */}
			<div className="relative min-h-[80px] md:min-h-[100px] flex items-end w-full">
				{/* Left Quote Mark - bigger, behind text, lower opacity */}
				<svg
					className="absolute left-0 top-0 -translate-y-1/4 -translate-x-1/4 w-12 h-12 md:w-16 md:h-16 text-white/20"
					fill="currentColor"
					viewBox="0 0 24 24"
					style={{ zIndex: 0 }}
				>
					<path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
				</svg>

				{/* Shoutout Text - starts at center of mass of quote */}
				<p 
					className="pl-5 md:pl-5 relative text-lg md:text-xl font-medium italic text-foreground 
										 leading-relaxed transition-all duration-500 "
					style={{ zIndex: 1 }}>
					{activeTestimonial?.shoutout}
				</p>
			</div>

			{/* Logo Row */}
			<div className="flex items-center justify-start gap-4 md:gap-6 flex-wrap">
				{testimonials.map((testimonial, index) => {
					const isActive = index === activeIndex;
					const isProviderPartners = testimonial.author.company === 'Provider Partners';

					return (
						<button
							key={testimonial.id}
							onClick={() => setActiveIndex(index)}
							className={`
								relative transition-all duration-300 hover:scale-105
								${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-60'}
								${isProviderPartners ? 'mb-2' : ''}
							`}
							aria-label={`View testimonial from ${testimonial.author.company}`}
						>
							<div className="relative w-20 h-12 md:w-24 md:h-14">
								<Image
									src={testimonial.logo || ''}
									fill
									className="object-contain object-left transition-all duration-300"
									alt={testimonial.author.company}
									style={{
										filter: isActive
											? 'none'
											: 'grayscale(100%) brightness(0.7) contrast(1.2) sepia(1) saturate(2) hue-rotate(280deg)'
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