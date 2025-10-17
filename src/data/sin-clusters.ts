// src/data/sins-clusters.ts

export interface SinCluster {
	id: string;
	name: string;
	narrative: string;
	color: string;
	sins: string[]; // Array of check IDs
	totalWaste: { min: number; max: number };
	icon: string;
	urgency: 'critical' | 'high' | 'medium';
}

export const sinClusters: SinCluster[] = [
	{
		id: 'overlap',
		name: 'Overlap',
		narrative: "Competing with yourself for the same audience",
		color: 'from-red-500 to-orange-500',
		sins: ['excluded-converters', 'campaign-overlap', 'account-frequency'],
		totalWaste: { min: 6000, max: 6000 },
		icon: '💸',
		urgency: 'critical',
	},
	{
		id: 'blindspot',
		name: 'Tracking',
		narrative: "Can't fix what you can't see.",
		color: 'from-purple-500 to-pink-500',
		sins: ['tracking-accuracy', 'ios-tracking'],
		totalWaste: { min: 6500, max: 6500 },
		icon: '👁️',
		urgency: 'critical',
	},
	{
		id: 'decay',
		name: 'Decay',
		narrative: 'Your ads are slowly dying while you watch',
		color: 'from-orange-500 to-yellow-500',
		sins: ['dead-placements', 'creative-fatigue'],
		totalWaste: { min: 3750, max: 3750 },
		icon: '🔥',
		urgency: 'high',
	},
];

// Helper to get total waste range across all clusters
export const getTotalWasteRange = () => {
	const min = sinClusters.reduce((sum, cluster) => sum + cluster.totalWaste.min, 0);
	const max = sinClusters.reduce((sum, cluster) => sum + cluster.totalWaste.max, 0);
	return { min, max };
};

// 	```

// ---

// ## 🎯 KEY CONVERSION MOMENTS

// ### Moment 1: Platform Recognition (Hero)
// ```
// USER THINKS: "Wait, they specifically know Meta/Insta/Facebook ads"
// FRICTION: None
// GAIN: Trust + 10
// 	```

// ### Moment 2: Free → 48h Delivery (Hero)
// ```
// USER THINKS: "£697 normally? And I get it in 2 days for free?"
// FRICTION: None
// GAIN: Perceived value + 100, Urgency + 50
// 	```

// ### Moment 3: First Sin Recognition (Scroll)
// ```
// USER THINKS: "Oh shit, I DO have campaign overlap..."
// ACTION: Taps green pill, marks as "Yes"
// GAIN: Self - awareness + 50, Intent + 30
// 	```

// ### Moment 4: Calculator Shows £6K+ Waste
// ```
// USER THINKS: "Holy fuck I'm bleeding £6,000/month?!"
// EMOTION: Shock → Fear → Urgency
// FRICTION: Need to act NOW
// GAIN: Intent + 100, Ready to convert
// 	```

// ### Moment 5: Score Shows "Perfect Fit"
// ```
// USER SEES: "You're losing £6-12K/month. We can fix this in 48h. Free."
// USER THINKS: "I'd be stupid NOT to do this"
// ACTION: Clicks CTA
// CONVERSION: ✅