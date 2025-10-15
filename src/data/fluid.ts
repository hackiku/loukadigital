// src/data/checklist.ts

export interface CheckItem {
	id: string;
	number: number;
	name: string;
	tagline: string;
	issue: string;
	check: {
		instructions: string;
		steps: string[];
	};
	scoring: {
		pass: {
			points: number;
			criteria: string;
		};
		fail: {
			points: number;
			criteria: string;
		};
	};
	wasteCalculation: {
		formula: string;
		example: {
			input: string;
			output: string;
		};
	};
	severity: 'critical' | 'high' | 'medium';
	timeToCheck: number; // minutes
	adCardVisual?: {
		screenshot: string; // Where in Meta Ads Manager to screenshot
		arrows: Array<{
			from: string;
			to: string;
			label: string;
		}>;
		highlights: string[]; // What to highlight in red/green
	};
}

export interface ScoreRange {
	min: number;
	max: number;
	label: string;
	description: string;
	recommendation: string;
	fit: 'poor' | 'borderline' | 'good' | 'perfect' | 'critical';
	emoji: string;
}

export interface Offer {
	id: string;
	name: string;
	price: string;
	ideal: string;
	includes: string[];
	successRate: string;
	timeline: string;
}

// ============================================================================
// THE 7 CHECKS
// ============================================================================

export const checks: CheckItem[] = [
	{
		id: 'excluded-converters',
		number: 1,
		name: 'Excluded Converters',
		tagline: 'Cold campaigns reaching people who already bought',
		issue: 'Running ads to existing customers wastes 20% of cold traffic budget',
		check: {
			instructions: 'Open your largest cold traffic campaign',
			steps: [
				'Go to Ad Set → Edit',
				'Scroll to Audiences → Exclude section',
				'Check if you exclude: Past purchasers, Email list, Recent converters',
			],
		},
		scoring: {
			pass: {
				points: 10,
				criteria: 'All three excluded (past purchasers, email list, recent converters)',
			},
			fail: {
				points: 0,
				criteria: 'Missing any exclusions',
			},
		},
		wasteCalculation: {
			formula: 'Monthly cold spend × 0.20 = waste',
			example: {
				input: '£5K cold spend',
				output: '£1K/month waste',
			},
		},
		severity: 'high',
		timeToCheck: 1,
		adCardVisual: {
			screenshot: 'Ad Set edit screen → Audiences section',
			arrows: [
				{
					from: 'Exclude section',
					to: 'Empty field',
					label: 'Missing exclusions = wasted budget',
				},
			],
			highlights: ['Exclude section should have 3+ audiences'],
		},
	},
	{
		id: 'campaign-overlap',
		number: 2,
		name: 'Campaign Overlap',
		tagline: 'Multiple campaigns bidding against each other',
		issue: 'Your campaigns are competing for the same audience, driving up costs',
		check: {
			instructions: 'Count your active campaigns and check targeting',
			steps: [
				'Count active campaigns: ____',
				'Check if 3+ campaigns have similar broad targeting',
				'Look for audience overlap in campaign settings',
			],
		},
		scoring: {
			pass: {
				points: 15,
				criteria: '1-2 campaigns OR distinct audiences with no overlap',
			},
			fail: {
				points: 0,
				criteria: '3+ overlapping campaigns competing for same audience',
			},
		},
		wasteCalculation: {
			formula: 'Monthly spend × 0.40 × 0.50 = waste',
			example: {
				input: '£10K spend',
				output: '£2K/month waste',
			},
		},
		severity: 'critical',
		timeToCheck: 2,
		adCardVisual: {
			screenshot: 'Campaigns overview showing 3+ active campaigns',
			arrows: [
				{
					from: 'Campaign 1 audience',
					to: 'Campaign 2 audience',
					label: 'Competing for same people',
				},
				{
					from: 'Campaign 2 audience',
					to: 'Campaign 3 audience',
					label: 'Bidding against yourself',
				},
			],
			highlights: ['Similar targeting = overlap', 'Duplicate audiences'],
		},
	},
	{
		id: 'tracking-accuracy',
		number: 3,
		name: 'Tracking Accuracy',
		tagline: 'Duplicate conversion tracking (false data)',
		issue: 'Your tracking is broken - real CPA is 30% higher than reported',
		check: {
			instructions: 'Compare Ads Manager vs actual backend purchases',
			steps: [
				'Check Ads Manager purchases (last 30 days): ____',
				'Check actual backend purchases (same period): ____',
				'Calculate difference - should be within 5%',
			],
		},
		scoring: {
			pass: {
				points: 15,
				criteria: 'Within 5% match between Ads Manager and backend',
			},
			fail: {
				points: 0,
				criteria: '10%+ difference (tracking is broken)',
			},
		},
		wasteCalculation: {
			formula: 'Real CPA is 30% higher than reported',
			example: {
				input: '£10K spend',
				output: '£3K invisible loss',
			},
		},
		severity: 'critical',
		timeToCheck: 1,
		adCardVisual: {
			screenshot: 'Ads Manager showing inflated conversion numbers',
			arrows: [
				{
					from: 'Ads Manager: 100 purchases',
					to: 'Backend: 70 purchases',
					label: '30% tracking error',
				},
			],
			highlights: ['Duplicate pixel events', 'False conversions'],
		},
	},
	{
		id: 'dead-placements',
		number: 4,
		name: 'Dead Placements',
		tagline: 'Budget on placements that don't convert',
		issue: 'Spending thousands on Audience Network, wrong-format Reels, etc.',
		check: {
			instructions: 'Break down by placement to find dead weight',
			steps: [
				'Go to Ads Manager → Breakdown → By Placement',
				'Find placements with £500+ spend',
				'Check: CTR <0.5% OR zero conversions?',
			],
		},
		scoring: {
			pass: {
				points: 10,
				criteria: 'All placements performing (CTR >0.5%, conversions happening)',
			},
			fail: {
				points: 0,
				criteria: 'Dead placements burning budget (high spend, no results)',
			},
		},
		wasteCalculation: {
			formula: 'Add up dead placement spend = waste',
			example: {
				input: '£2.5K on Audience Network',
				output: '£2.5K waste',
			},
		},
		severity: 'high',
		timeToCheck: 2,
		adCardVisual: {
			screenshot: 'Placement breakdown showing Audience Network with 0 conversions',
			arrows: [
				{
					from: 'Audience Network',
					to: '£2,500 spent, 0 conversions',
					label: 'Pure waste',
				},
			],
			highlights: ['CTR <0.5%', 'Zero conversions', 'High spend'],
		},
	},
	{
		id: 'creative-fatigue',
		number: 5,
		name: 'Creative Fatigue',
		tagline: 'Best ads running too long, audience burned out',
		issue: 'Frequency >3.0 or ads older than 60 days = diminishing returns',
		check: {
			instructions: 'Check your top 3 spending ads',
			steps: [
				'Look at top 3 spending ads',
				'Check frequency for each',
				'Check age (days running)',
				'Any with frequency >3.0 OR age >60 days?',
			],
		},
		scoring: {
			pass: {
				points: 10,
				criteria: 'Frequency <2.5, age <45 days for all top ads',
			},
			fail: {
				points: 0,
				criteria: 'High frequency (>3.0) or old creative (>60 days)',
			},
		},
		wasteCalculation: {
			formula: 'Monthly spend × 0.25 × 0.50 = waste',
			example: {
				input: '£10K spend',
				output: '£1.25K/month waste',
			},
		},
		severity: 'medium',
		timeToCheck: 1,
		adCardVisual: {
			screenshot: 'Ad level showing frequency 4.2 and 73 days old',
			arrows: [
				{
					from: 'Frequency: 4.2',
					to: 'Audience is burned out',
					label: 'Seen too many times',
				},
				{
					from: 'Age: 73 days',
					to: 'Stale creative',
					label: 'Needs refresh',
				},
			],
			highlights: ['Frequency >3.0', 'Age >60 days'],
		},
	},
	{
		id: 'ios-tracking',
		number: 6,
		name: 'iOS Tracking',
		tagline: 'iOS 14.5 broke tracking in 2021, most setups still broken',
		issue: 'Missing 35% of conversions from iOS users due to poor setup',
		check: {
			instructions: 'Answer these 4 questions honestly',
			steps: [
				'Do you have Conversion API (CAPI) set up?',
				'Did anyone update tracking after April 2021?',
				'Is Aggregated Event Measurement configured?',
				'Can you confirm deduplication works?',
			],
		},
		scoring: {
			pass: {
				points: 20,
				criteria: 'All 4 confirmed working (CAPI, post-iOS update, AEM, deduplication)',
			},
			fail: {
				points: 0,
				criteria: 'Not sure or missing any pieces',
			},
		},
		wasteCalculation: {
			formula: 'Monthly spend × 0.35 = waste',
			example: {
				input: '£10K spend',
				output: '£3.5K hidden waste',
			},
		},
		severity: 'critical',
		timeToCheck: 3,
		adCardVisual: {
			screenshot: 'Events Manager showing only Pixel, no CAPI',
			arrows: [
				{
					from: 'Pixel only',
					to: 'Missing iOS conversions',
					label: '35% data loss',
				},
			],
			highlights: ['No CAPI badge', 'Pre-iOS 14.5 setup', 'No deduplication'],
		},
	},
	{
		id: 'account-frequency',
		number: 7,
		name: 'Account Frequency',
		tagline: 'Same person sees ads across ALL campaigns',
		issue: 'Individual campaigns look fine, but total frequency is burning audience',
		check: {
			instructions: 'Calculate account-level frequency',
			steps: [
				'Look at each campaign's frequency',
				'If 3 campaigns at 2.0 each = ~4-6 account frequency',
				'Check: Is account frequency over 3.0?',
			],
		},
		scoring: {
			pass: {
				points: 10,
				criteria: 'Account frequency <2.5 (audience not oversaturated)',
			},
			fail: {
				points: 0,
				criteria: 'Account frequency >3.5 (annoying your audience)',
			},
		},
		wasteCalculation: {
			formula: 'Monthly spend × 0.30 = waste',
			example: {
				input: '£10K spend',
				output: '£3K/month waste',
			},
		},
		severity: 'high',
		timeToCheck: 1,
		adCardVisual: {
			screenshot: 'Campaign 1: 2.1 freq, Campaign 2: 2.3 freq, Campaign 3: 1.9 freq',
			arrows: [
				{
					from: 'All campaigns',
					to: 'Same small audience',
					label: 'Total freq: 4.8',
				},
			],
			highlights: ['Multiple campaigns', 'Overlapping audiences', 'High combined frequency'],
		},
	},
];

// ============================================================================
// SCORE RANGES
// ============================================================================

export const scoreRanges: ScoreRange[] = [
	{
		min: 80,
		max: 90,
		label: 'Already Optimized',
		description: "Don't apply - we'll decline you. Your account is top 10%. Keep doing what you're doing.",
		recommendation: 'No action needed',
		fit: 'poor',
		emoji: '🎯',
	},
	{
		min: 65,
		max: 79,
		label: 'Borderline',
		description: 'Might hit 40%, might not. Apply but we may decline after detailed review.',
		recommendation: 'Apply with caution',
		fit: 'borderline',
		emoji: '⚠️',
	},
	{
		min: 45,
		max: 64,
		label: 'Good Fit',
		description: '3-4 major issues. Confident in 40%+ improvement. High likelihood of acceptance.',
		recommendation: 'Strong candidate for £697 setup',
		fit: 'good',
		emoji: '✅',
	},
	{
		min: 20,
		max: 44,
		label: 'Perfect Fit',
		description: '5-6 major issues. Very confident in 40%+. Apply immediately.',
		recommendation: 'Ideal for ongoing management',
		fit: 'perfect',
		emoji: '✅✅',
	},
	{
		min: 0,
		max: 19,
		label: 'Critical',
		description: 'Fundamental problems. Extremely confident in 100%+ improvement. Almost guaranteed acceptance.',
		recommendation: 'Priority candidate',
		fit: 'critical',
		emoji: '✅✅✅',
	},
];

// ============================================================================
// OFFERS
// ============================================================================

export const offers: Offer[] = [
	{
		id: 'setup',
		name: '£697 One-Time Setup',
		price: '£697',
		ideal: 'Spending £500-£5K/month, will manage ads yourself after setup',
		includes: [
			'All 7 issues fixed in 24 hours',
			'Tracking configured (Pixel + CAPI)',
			'Campaign structure optimized',
			'Documentation + video walkthrough',
			'30-day email support',
		],
		successRate: '92% see 30-60% improvement in 60 days',
		timeline: '24 hours delivery',
	},
	{
		id: 'ongoing',
		name: 'Ongoing Management',
		price: 'Custom pricing',
		ideal: 'Spending £5K+/month, want hands-off solution, serious about scaling',
		includes: [
			'All 7 issues fixed',
			'Ongoing optimization',
			'Creative strategy',
			'Weekly reporting',
			'Target: 40%+ improvement in 90 days',
		],
		successRate: '85% hit 40%+ improvement in 90 days',
		timeline: 'Ongoing partnership',
	},
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export const getCheckById = (id: string) => checks.find((c) => c.id === id);

export const getScoreRange = (score: number) =>
	scoreRanges.find((r) => score >= r.min && score <= r.max);

export const calculateTotalWaste = (monthlySpend: number, failedChecks: string[]) => {
	let totalPercentage = 0;
	failedChecks.forEach((checkId) => {
		const check = getCheckById(checkId);
		if (check) {
			// Extract percentage from formula (rough estimate)
			const percentages: Record<string, number> = {
				'excluded-converters': 20,
				'campaign-overlap': 20,
				'tracking-accuracy': 30,
				'dead-placements': 25,
				'creative-fatigue': 12.5,
				'ios-tracking': 35,
				'account-frequency': 30,
			};
			totalPercentage += percentages[checkId] || 0;
		}
	});

	// Average if multiple issues
	const avgPercentage = totalPercentage / failedChecks.length;
	return Math.round((monthlySpend * avgPercentage) / 100);
};

export const getChecksBySeverity = (severity: 'critical' | 'high' | 'medium') =>
	checks.filter((c) => c.severity === severity);