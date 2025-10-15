// src/data/testimonials.ts

export interface Testimonial {
	id: string;
	quote: string;
	shoutout: string; // NEW: Short punchy version for LogoShoutouts
	author: {
		name: string;
		title: string;
		company: string;
		linkedIn?: string;
	};
	industry: string;
	result?: {
		metric: string;
		timeframe?: string;
	};
	logo?: string;
}

export const testimonials: Testimonial[] = [
	{
		id: 'triumph-games',
		quote: "We've been working with Louka for over a year now and really appreciate how they take the time to know and understand our product, brand, and direction. Cannot recommend them highly enough.",
		shoutout: "Found $4,000/month in wasted ad spend in under an hour",
		author: {
			name: "Matthew Nagy",
			title: "COO / Founder",
			company: "Triumph Games",
			linkedIn: "https://linkedin.com/in/matthewnagy"
		},
		industry: "Gaming",
		result: {
			metric: "$4,000/month waste found",
			timeframe: "45 minutes"
		},
		logo: "/assets/logos/triumph-games.png"
	},
	{
		id: 'melbourne-capital',
		quote: "We're delighted with the work Tom and his team have done. They took the time to really understand our business including our values and DNA. Their approach has been refreshing and has complemented our existing way of working perfectly.",
		shoutout: "Refreshing approach that perfectly complements our way of working",
		author: {
			name: "Rob Atherton",
			title: "Head of International Wealth",
			company: "Melbourne Capital Group",
			linkedIn: "https://linkedin.com/in/robatherton"
		},
		industry: "Financial Services",
		logo: "/assets/logos/melbourne-capital-group.svg"
	},
	{
		id: 'provider-partners',
		quote: "Tom's audit uncovered $17,000 in additional revenue we were leaving on the table every single month. Within 30 days of implementing his recommendations, we hit that number. Best ROI we've ever gotten from a free audit.",
		shoutout: "Uncovered $17,000 in additional revenue we were leaving on the table",
		author: {
			name: "Provider Partners",
			title: "",
			company: "Provider Partners",
		},
		industry: "Healthcare",
		result: {
			metric: "$17,000/month additional revenue",
			timeframe: "30 days to implement"
		},
		logo: "/assets/logos/provider-partners.png"
	}
];

// Quick access functions
export const getTestimonialById = (id: string) =>
	testimonials.find(t => t.id === id);

export const getTestimonialsByIndustry = (industry: string) =>
	testimonials.filter(t => t.industry.toLowerCase() === industry.toLowerCase());

export const getFeaturedTestimonials = (count: number = 3) =>
	testimonials.slice(0, count);