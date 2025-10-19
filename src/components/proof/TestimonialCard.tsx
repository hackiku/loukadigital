// src/components/proof/TestimonialCard.tsx
import { Star } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
	id: string;
	quote: string;
	author: {
		name: string;
		title?: string;
		company: string;
		linkedIn?: string;
	};
	industry: string;
	logo?: string;
	result?: {
		metric: string;
		timeframe?: string;
	};
}

interface TestimonialCardProps {
	testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
	return (
		<div className="bg-card/50 rounded-2xl p-8 flex flex-col h-full border border-border/50 hover:border-purple-500/30 transition-all">
			{/* Stars */}
			<div className="flex justify-center gap-1 mb-6">
				{[...Array(5)].map((_, i) => (
					<Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
				))}
			</div>

			{/* Quote */}
			<blockquote className="text-foreground/90 text-lg italic mb-8 flex-grow text-center leading-relaxed">
				"{testimonial.quote}"
			</blockquote>

			{/* Author */}
			<div className="flex flex-col items-center gap-4 pt-6 border-t border-border/30">
				{testimonial.logo && (
					<div className="w-16 h-16 relative">
						<Image
							src={testimonial.logo}
							alt={testimonial.author.company}
							fill
							className="object-contain"
						/>
					</div>
				)}

				<div className="text-center">
					<div className="flex items-center justify-center gap-2">
						<p className="font-bold text-foreground">{testimonial.author.name}</p>
						{testimonial.author.linkedIn && (
							<a
								href={testimonial.author.linkedIn}
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-400 hover:text-blue-300 transition-colors"
							>
								<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
									<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
								</svg>
							</a>
						)}
					</div>
					{testimonial.author.title && (
						<p className="text-sm text-muted-foreground mt-1">{testimonial.author.title}</p>
					)}
					<p className="text-sm text-muted-foreground">{testimonial.author.company}</p>
				</div>

				{testimonial.result && (
					<div className="mt-2 px-4 py-2 bg-purple-500/10 rounded-lg border border-purple-500/20">
						<p className="text-sm font-semibold text-purple-400">{testimonial.result.metric}</p>
					</div>
				)}
			</div>
		</div>
	);
}