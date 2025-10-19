// src/app/_components/about/Philosophy.tsx

import { Zap, Users, Heart, Lightbulb } from 'lucide-react';

const philosophyItems = [
	{
		icon: Zap,
		text: 'We move fast—speed wins',
		color: 'text-purple-400',
	},
	{
		icon: Users,
		text: 'We collaborate with clients, not just for them',
		color: 'text-blue-400',
	},
	{
		icon: Heart,
		text: 'We only work with businesses we care about',
		color: 'text-pink-400',
	},
	{
		icon: Lightbulb,
		text: 'We think creatively to get you results',
		color: 'text-purple-400',
	},
];

export function Philosophy() {
	return (
		<div className="space-y-4">
			{philosophyItems.map((item) => {
				const Icon = item.icon;
				return (
					<div key={item.text} className="flex items-center gap-4">
						{/* Icon */}
						<div className={`w-8 h-8 flex items-center justify-center flex-shrink-0 ${item.color}`}>
							<Icon className="w-6 h-6" />
						</div>

						{/* Text */}
						<p className="text-base md:text-lg text-foreground font-medium">
							{item.text}
						</p>
					</div>
				);
			})}
		</div>
	);
}