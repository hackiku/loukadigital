// src/data/audit.ts

export interface Sin {
	id: string;
	number: number;
	name: string;
	tagline: string;
	wastePercent: number;
	clusterId: 'overlap' | 'blindspot' | 'fatigue';
	severity: 'critical' | 'high' | 'medium';
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
		name: 'Excluded Converters',
		tagline: 'Cold campaigns reaching people who already bought',
		wastePercent: 20,
		clusterId: 'overlap',
		severity: 'high'
	},
	{
		id: 'campaign-overlap',
		number: 2,
		name: 'Campaign Overlap',
		tagline: 'Multiple campaigns bidding against each other',
		wastePercent: 20,
		clusterId: 'overlap',
		severity: 'critical'
	},
	{
		id: 'tracking-accuracy',
		number: 3,
		name: 'Tracking Accuracy',
		tagline: 'Duplicate conversion tracking (false data)',
		wastePercent: 30,
		clusterId: 'blindspot',
		severity: 'critical'
	},
	{
		id: 'dead-placements',
		number: 4,
		name: 'Dead Placements',
		tagline: "Budget on placements that don't convert",
		wastePercent: 25,
		clusterId: 'fatigue',
		severity: 'high'
	},
	{
		id: 'creative-fatigue',
		number: 5,
		name: 'Creative Fatigue',
		tagline: 'Best ads running too long, audience burned out',
		wastePercent: 12.5,
		clusterId: 'fatigue',
		severity: 'medium'
	},
	{
		id: 'ios-tracking',
		number: 6,
		name: 'iOS Tracking',
		tagline: 'iOS 14.5 broke tracking in 2021',
		wastePercent: 35,
		clusterId: 'blindspot',
		severity: 'critical'
	},
	{
		id: 'account-frequency',
		number: 7,
		name: 'Account Frequency',
		tagline: 'Same person sees ads across ALL campaigns',
		wastePercent: 30,
		clusterId: 'overlap',
		severity: 'high'
	}
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