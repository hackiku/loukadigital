// =============================================================================
// src/app/adhealth/_components/sections/TestimonialsSection.tsx
// =============================================================================

import { testimonials } from '~/data/testimonials';
import { TestimonialCard } from './TestimonialCard';

export function TestimonialsSection() {
	return (
		<section className="py-12 md:py-16 px-4 bg-gradient-to-b from-purple-900/5 to-transparent">
			<div className="container mx-auto max-w-7xl">
				<h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
					What Our Clients Say
				</h2>
				<p className="text-center text-gray-400 text-lg md:text-xl mb-12">
					Real businesses. Real results. Real growth.
				</p>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
					{testimonials.map((testimonial) => (
						<TestimonialCard key={testimonial.id} testimonial={testimonial} />
					))}
				</div>
			</div>
		</section>
	);
}
