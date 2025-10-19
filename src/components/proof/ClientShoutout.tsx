// src/components/proof/ClientShoutout.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const shoutouts = [
	{
		id: '1',
		quote: "We're delighted with the work Tom and his team have done. They took the time to really understand our business including our values and DNA",
		author: {
			name: 'Rob Atherton',
			title: 'Head of International Wealth',
			company: 'Melbourne Capital Group',
			avatar: '/assets/avatars/rob-atherton.png',
		},
	},
	// {
	// 	id: '2',
	// 	quote: "We've been working with Louka for over a year now and really appreciate how they take the time to know and understand our product, brand, and direction",
	// 	author: {
	// 		name: 'Matthew Nagy',
	// 		title: 'COO / Founder',
	// 		company: 'Triumph Games',
	// 		avatar: '/assets/avatars/matthew-nagy.png',
	// 	},
	// },
	// {
	// 	id: '3',
	// 	quote: "Tom's audit uncovered $17,000 in additional revenue we were leaving on the table every single month. Within 30 days of implementing his recommendations, we hit that number",
	// 	author: {
	// 		name: 'Provider Partners',
	// 		title: 'Healthcare Industry',
	// 		company: 'Provider Partners',
	// 		avatar: '/assets/logos/provider-partners.png',
	// 	},
	// },
];

export function ClientShoutout() {
	const [activeIndex, setActiveIndex] = useState(0);
	const activeShoutout = shoutouts[activeIndex];

	// Auto-rotate every 6 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % shoutouts.length);
		}, 6000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative">
			{/* Quote Mark Background */}
			<svg
				className="absolute -left-4 -top-8 w-20 h-20 text-foreground/5 pointer-events-none"
				fill="currentColor"
				viewBox="0 0 24 24"
			>
				<path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
			</svg>

			{/* Quote */}
			<blockquote className="relative text-xl md:text-2xl font-medium text-foreground leading-relaxed mb-8 italic">
				"{activeShoutout?.quote}"
			</blockquote>

			{/* Author */}
			<div className="flex items-center gap-4">
				{/* Avatar */}
				<div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
					<Image
						src={activeShoutout?.author.avatar || ''}
						alt={activeShoutout?.author.name || ''}
						fill
						className="object-cover"
					/>
				</div>

				{/* Author Info */}
				<div>
					<p className="font-bold text-foreground">{activeShoutout?.author.name}</p>
					<p className="text-sm text-muted-foreground">{activeShoutout?.author.title}</p>
					<p className="text-sm text-muted-foreground">{activeShoutout?.author.company}</p>
				</div>
			</div>

			{/* Dots Indicator */}
			<div className="flex items-center gap-2 mt-6">
				{shoutouts.map((_, index) => (
					<button
						key={index}
						onClick={() => setActiveIndex(index)}
						className={`w-2 h-2 rounded-full transition-all ${index === activeIndex
								? 'bg-purple-400 w-8'
								: 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
							}`}
						aria-label={`Go to testimonial ${index + 1}`}
					/>
				))}
			</div>
		</div>
	);
}