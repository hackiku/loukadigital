// src/app/adhealth/_components/proof/BubbleTestimonial.tsx

import Image from 'next/image';

interface BubbleTestimonialProps {
	quote: string;
	author: {
		name: string;
		title?: string;
		company: string;
	};
	avatar?: string;
	logo?: string;
}

export function BubbleTestimonial({ quote, author, avatar, logo }: BubbleTestimonialProps) {
	return (
		<div className="relative inline-block max-w-xs">
			{/* Speech Bubble */}
			<div className="relative bg-[#1a2332] border border-purple-500/30 rounded-2xl p-4 shadow-lg">
				<p className="text-sm text-gray-300 leading-relaxed mb-2">
					"{quote}"
				</p>

				<div className="flex items-center gap-2">
					{logo && (
						<div className="w-8 h-8 relative flex-shrink-0">
							<Image
								src={logo}
								alt={author.company}
								fill
								className="object-contain"
							/>
						</div>
					)}
					<div className="text-xs">
						<p className="font-semibold text-white">{author.name}</p>
						<p className="text-gray-400">{author.company}</p>
					</div>
				</div>

				{/* Pointer */}
				<div className="absolute -bottom-2 left-8 w-4 h-4 bg-[#1a2332] border-r border-b border-purple-500/30 transform rotate-45" />
			</div>

			{/* Avatar */}
			<div className="absolute -bottom-6 left-4 w-12 h-12 rounded-full border-2 border-purple-500/50 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg">
				{avatar ? (
					<Image
						src={avatar}
						alt={author.name}
						fill
						className="rounded-full object-cover"
					/>
				) : (
					<span className="text-lg">{author.name.charAt(0)}</span>
				)}
			</div>
		</div>
	);
}

// Example usage:
/*
const testimonial = {
	quote: "Tom's audit uncovered $17,000 in additional revenue we were leaving on the table every single month.",
	author: {
		name: "Healthcare Director",
		company: "Provider Partners",
	},
	logo: "/logos/provider-partners.png"
};

<BubbleTestimonial {...testimonial} />
*/