// src/components/proof/Matthew.tsx
'use client';

import { Linkedin } from 'lucide-react';
import Image from 'next/image';

const mattShoutout = [
	{
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

export function MatthewShoutout() {
	const shoutout = mattShoutout[0]

	if (!shoutout) return null;

	return (
		<div className="max-w-xs">

			{/* Author */}
			<div className="flex items-center gap-1 justify-start">
				{/* Avatar */}
				<div className="relative w-16 h-16 overflow-hidden flex-shrink-0">
					<Image
						src={shoutout.author.avatar}
						alt={shoutout.author.name}
						fill
						className="object-cover"
					/>
				</div>
				{/* Author Info */}
				<div className="text-left">
					<p className="flex items-center justify-between text-sm font-bold text-foreground">
						{shoutout.author.name}
						{/* <Linkedin className="w-4"/> */}
					</p>
					<p className="text-xs text-muted-foreground">
						{shoutout.author.title}
						{shoutout.author.company}
					</p>
					{/* <p className="text-xs text-muted-foreground">{shoutout.author.company}</p> */}
				</div>
			</div>
			{/* Quote */}
			<blockquote className="ml-6 mt-1 text-sm text-muted-foreground leading-relaxed italic text-left">
				"{shoutout.quote}"
			</blockquote>

		</div>
	);
}