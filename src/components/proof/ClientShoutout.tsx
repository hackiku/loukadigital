// src/components/proof/ClientShoutout.tsx
'use client';

import Image from 'next/image';

const shoutouts = [
	{
		id: '1',
		// quote: "We're delighted with the work Tom and his team have done. They took the time to really understand our values and DNA",
		quote: "Tom and his team took the time to really understand our values and DNA",
		author: {
			name: 'Rob Atherton',
			title: 'Head of International Wealth',
			company: 'Melbourne Capital Group',
			avatar: '/assets/avatars/rob-atherton.png',
		},
	},
	{
		id: '2',
		// quote: "We've been working with Louka for over a year now and really appreciate how they take the time to know and understand our product, brand, and direction",
		quote: "Been working with Louka for over a year now. Cannot recommend them highly enough.",
		author: {
			name: 'Matthew Nagy',
			title: 'COO / Founder',
			company: 'Triumph Games',
			avatar: '/assets/avatars/matthew-nagy.png',
		},
	},
];

interface ClientShoutoutProps {
	index?: number; // 0 or 1 to select which testimonial
}

export function ClientShoutout({ index = 0 }: ClientShoutoutProps) {
	const shoutout = shoutouts[index];

	if (!shoutout) return null;

	return (
		<div className="max-w-sm">
			{/* Quote */}
			<blockquote className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3 italic text-left">
				"{shoutout.quote}"
			</blockquote>

			{/* Author */}
			<div className="flex items-center gap-3 justify-start">
				{/* Avatar */}
				<div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
					<Image
						src={shoutout.author.avatar}
						alt={shoutout.author.name}
						fill
						className="object-cover"
					/>
				</div>
				{/* Author Info */}
				<div className="text-left">
					<p className="text-sm font-bold text-foreground">{shoutout.author.name}</p>
					<p className="text-xs text-muted-foreground">{shoutout.author.title}</p>
					<p className="text-xs text-muted-foreground">{shoutout.author.company}</p>
				</div>


			</div>
		</div>
	);
}