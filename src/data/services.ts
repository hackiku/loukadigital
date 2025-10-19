// src/data/services.ts

export interface Service {
	id: string;
	icon: string; // lucide icon name
	title: string;
	description: string;
	features: string[];
	gradient: string; // tailwind gradient classes
}

export const services: Service[] = [
	{
		id: 'lead-gen',
		icon: 'Target',
		title: 'Lead Generation',
		description: 'High-converting funnels that fill your calendar with qualified prospects ready to buy.',
		features: [
			'Lead magnet funnels',
			'VSL & webinar systems',
			'Email automation',
			'Paid traffic to booked calls',
		],
		gradient: 'from-purple-600 to-blue-400',
	},
	{
		id: 'paid-media',
		icon: 'Zap',
		title: 'Paid Media Strategy',
		description: 'Meta, Google, TikTok, and beyond. We optimize your ad spend for maximum ROAS.',
		features: [
			'Campaign optimization',
			'Audience targeting',
			'Performance tracking',
			'Multi-platform scaling',
		],
		gradient: 'from-blue-600 to-purple-400',
	},
	{
		id: 'creative',
		icon: 'Sparkles',
		title: 'Creative Production',
		description: 'Ad creatives, landing pages, VSLs, and content that stops the scroll and drives action.',
		features: [
			'Video & static ads',
			'Landing page design',
			'A/B testing',
			'Weekly creative refresh',
		],
		gradient: 'from-pink-600 to-purple-400',
	},
	{
		id: 'growth',
		icon: 'TrendingUp',
		title: 'Growth Strategy',
		description: 'Data-driven strategies that identify opportunities, eliminate bottlenecks, and scale profitably.',
		features: [
			'Growth audits',
			'Conversion optimization',
			'Analytics & reporting',
			'Daily optimizations',
		],
		gradient: 'from-green-600 to-blue-400',
	},
];