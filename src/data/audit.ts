// src/data/audit.ts - SIMPLIFIED, JUST CONTENT

export interface Sin {
	id: string;
	number: number;
	name: string;
	tagline: string;
	wastePercent: number;
	clusterId: 'overlap' | 'blindspot' | 'fatigue';
	severity: 'critical' | 'high' | 'medium';
	assets: Asset[];
}

export interface Asset {
	type: 'banner' | 'mockup' | 'image' | 'stat';
	src?: string;
	content?: string;
}

export interface Cluster {
	id: 'overlap' | 'blindspot' | 'fatigue';
	name: string;
	description: string;
	color: string;
	wasteMin: number;
	wasteMax: number;
}

export const sins: Sin[] = [
	{
		id: 'excluded-converters',
		number: 1,
		name: 'Included Converters',
		tagline: 'Cold campaigns reaching people who already bought',
		wastePercent: 20,
		clusterId: 'overlap',
		severity: 'high',
		assets: [
			{ type: 'banner', src: '/assets/ad-formats-banner.png' }
		]
	},
	{
		id: 'campaign-overlap',
		number: 2,
		name: 'Campaign Overlap',
		tagline: 'Multiple campaigns bidding against each other',
		wastePercent: 20,
		clusterId: 'overlap',
		severity: 'critical',
		assets: [
			{ type: 'stat', content: '3+ campaigns competing' },
			{ type: 'stat', content: 'CPMs inflated 40-60%' }
		]
	},
	{
		id: 'account-frequency',
		number: 3,
		name: 'Account Frequency',
		tagline: 'Same person sees ads across ALL campaigns',
		wastePercent: 30,
		clusterId: 'overlap',
		severity: 'high',
		assets: [
			{ type: 'banner', src: '/assets/frequency-chart.png' }
		]
	},
	// blindspot (tracking)
	{
		id: 'tracking-accuracy',
		number: 4,
		name: 'Inaccurate Tracking',
		tagline: 'Duplicate conversion tracking (false data)',
		wastePercent: 30,
		clusterId: 'blindspot',
		severity: 'critical',
		assets: [
			{ type: 'mockup', src: '/assets/tracking-mockup.png' },
			{ type: 'stat', content: 'Real CPA 30% higher' }
		]
	},
	{
		id: 'ios-tracking',
		number: 5,
		name: 'iOS Tracking',
		tagline: 'iOS 14.5 broke tracking in 2021',
		wastePercent: 35,
		clusterId: 'blindspot',
		severity: 'critical',
		assets: [
			{ type: 'mockup', src: '/assets/ios-mockup.png' },
			{ type: 'stat', content: '35% iOS conversions missing' }
		]
	},
	// fatigue
	{
		id: 'dead-placements',
		number: 6,
		name: 'Dead Placements',
		tagline: "Budget on placements that don't convert",
		wastePercent: 25,
		clusterId: 'fatigue',
		severity: 'high',
		assets: [
			{ type: 'image', src: '/assets/placement-breakdown.png' }
		]
	},
	{
		id: 'creative-fatigue',
		number: 7,
		name: 'Creative Fatigue',
		tagline: 'Best ads running too long, audience burned out',
		wastePercent: 12.5,
		clusterId: 'fatigue',
		severity: 'medium',
		assets: [
			{ type: 'stat', content: 'Frequency > 3.0' },
			{ type: 'stat', content: 'Ads older than 60 days' }
		]
	},
];

export const clusters: Cluster[] = [
	{
		id: 'overlap',
		name: 'Overlap',
		description: 'Competing with yourself',
		color: 'from-red-500 to-orange-500',
		wasteMin: 6000,
		wasteMax: 10000
	},
	{
		id: 'blindspot',
		name: 'Blindspot',
		description: 'Tracking & targeting issues',
		color: 'from-purple-500 to-pink-500',
		wasteMin: 6500,
		wasteMax: 6500
	},
	{
		id: 'fatigue',
		name: 'Fatigue',
		description: 'Inconsistent or repeating creative',
		color: 'from-orange-500 to-yellow-500',
		wasteMin: 3750,
		wasteMax: 3750
	}
];