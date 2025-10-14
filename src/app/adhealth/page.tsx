// src/app/adhealth/page.tsx
"use client"

import { useState, useEffect } from 'react';
import { Clock, CheckCircle, TrendingUp, Target, Zap, DollarSign, Star, ChevronDown, X } from 'lucide-react';

// Main Page Component
export default function AdHealthPage() {
	const [showExitIntent, setShowExitIntent] = useState(false);
	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		// Exit intent detection
		const handleMouseLeave = (e: MouseEvent) => {
			if (e.clientY <= 0 && !showExitIntent) {
				setShowExitIntent(true);
			}
		};

		// Scroll progress
		const handleScroll = () => {
			const windowHeight = window.innerHeight;
			const documentHeight = document.documentElement.scrollHeight - windowHeight;
			const scrolled = window.scrollY;
			const progress = (scrolled / documentHeight) * 100;
			setScrollProgress(progress);
		};

		document.addEventListener('mouseleave', handleMouseLeave);
		window.addEventListener('scroll', handleScroll);

		return () => {
			document.removeEventListener('mouseleave', handleMouseLeave);
			window.removeEventListener('scroll', handleScroll);
		};
	}, [showExitIntent]);

	return (
		<div className="min-h-screen bg-black text-white">
			{/* Scarcity Banner */}
			<ScarcityBanner />

			{/* Logo */}
			<LogoHeader />

			{/* Hero Section */}
			<HeroSection />

			{/* Specific Outcomes Section - NEW */}
			<SpecificOutcomesSection />

			{/* Form Section */}
			<FormSection />

			{/* What You'll Get */}
			<BenefitsSection />

			{/* Qualification Section - NEW */}
			<QualificationSection />

			{/* Social Proof */}
			<TestimonialsSection />

			{/* Mobile Sticky CTA */}
			<MobileStickyCTA />

			{/* Exit Intent Popup */}
			{showExitIntent && (
				<ExitIntentPopup onClose={() => setShowExitIntent(false)} />
			)}

			{/* Footer */}
			<Footer />
		</div>
	);
}

// Scarcity Banner Component
function ScarcityBanner() {
	return (
		<div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600">
			<div className="container mx-auto px-4 py-3">
				<div className="flex items-center justify-center gap-3 text-center text-sm md:text-base">
					<Clock className="w-5 h-5 text-white animate-pulse" />
					<span className="text-white font-bold">Limited Availability:</span>
					<span className="text-white">
						Only <span className="font-bold text-lg px-2 py-0.5 bg-white/20 rounded">17 out of 20</span> spots left
					</span>
					<Clock className="w-5 h-5 text-white animate-pulse" />
				</div>
			</div>
		</div>
	);
}

// Logo Header
function LogoHeader() {
	return (
		<div className="fixed top-16 left-4 z-40">
			<div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-purple-400 flex items-center justify-center font-bold text-black text-xs md:text-sm hover:scale-110 transition-transform">
				LOUKA
			</div>
		</div>
	);
}

// Hero Section
function HeroSection() {
	return (
		<section className="pt-32 pb-12 px-4">
			<div className="container mx-auto max-w-4xl text-center">
				<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
					Find Out Exactly How Much You're Losing Every Month
				</h1>
				<p className="text-lg md:text-2xl text-gray-300 mb-6">
					Get a free expert analysis of your ad account and discover where your budget is leaking
				</p>
				<div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
					{['2-Minute Submission', 'CAC Health Score', 'Savings Potential'].map((item) => (
						<div key={item} className="flex items-center gap-2 bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20">
							<CheckCircle className="w-5 h-5 text-purple-400" />
							<span>{item}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

// NEW: Specific Outcomes Section (Phase 1 Priority)
function SpecificOutcomesSection() {
	const outcomes = [
		{
			icon: <Target className="w-8 h-8" />,
			title: "Audience Overlap Waste",
			amount: "$2,400/month average",
			description: "Most accounts have 3-5 campaigns targeting the same people, driving up costs by 40-60%"
		},
		{
			icon: <TrendingUp className="w-8 h-8" />,
			title: "Creative Fatigue Drain",
			amount: "$1,800/month average",
			description: "Ads running past optimal frequency burn 30-50% more budget for worse results"
		},
		{
			icon: <DollarSign className="w-8 h-8" />,
			title: "Placement Inefficiency",
			amount: "$3,200/month average",
			description: "Wrong placements eating budget - we typically find 25-40% waste here alone"
		}
	];

	return (
		<section className="py-12 px-4 bg-gradient-to-b from-purple-900/10 to-transparent">
			<div className="container mx-auto max-w-4xl">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
					Where Your Money Is <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Actually Going</span>
				</h2>
				<p className="text-center text-gray-400 mb-12 text-lg">
					In the last 90 days, we've identified these exact issues in 94% of audits
				</p>
				<div className="space-y-6">
					{outcomes.map((outcome, index) => (
						<div key={index} className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-all">
							<div className="flex items-start gap-4">
								<div className="text-purple-400 flex-shrink-0 mt-1">
									{outcome.icon}
								</div>
								<div className="flex-1">
									<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
										<h3 className="text-xl font-semibold text-white">{outcome.title}</h3>
										<span className="text-red-400 font-bold text-lg">{outcome.amount}</span>
									</div>
									<p className="text-gray-400">{outcome.description}</p>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="mt-8 p-6 bg-purple-500/10 border border-purple-500/30 rounded-lg text-center">
					<p className="text-xl font-semibold mb-2">
						Average Total Waste Found: <span className="text-purple-400">$7,400/month</span>
					</p>
					<p className="text-gray-400">That's $88,800 per year you could be saving or reinvesting</p>
				</div>
			</div>
		</section>
	);
}

// Form Section (Optimized)
function FormSection() {
	return (
		<section className="py-12 px-4" id="audit-form">
			<div className="container mx-auto max-w-2xl">
				<div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800">
					<h2 className="text-3xl font-bold text-center mb-4">
						Get Your Free <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Ad Health Audit</span>
					</h2>

					{/* Trust Indicators - More Specific */}
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 text-sm">
						<div className="flex items-center gap-2 text-gray-300">
							<CheckCircle className="w-5 h-5 text-green-400" />
							<span>90 seconds to request</span>
						</div>
						<div className="flex items-center gap-2 text-gray-300">
							<CheckCircle className="w-5 h-5 text-green-400" />
							<span>Delivered within 48 hours</span>
						</div>
						<div className="flex items-center gap-2 text-gray-300">
							<CheckCircle className="w-5 h-5 text-green-400" />
							<span>157 audits completed this month</span>
						</div>
					</div>

					{/* Form */}
					<form className="space-y-4">
						<input
							type="email"
							placeholder="Enter your email"
							className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
						/>
						<select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500">
							<option>Monthly Ad Spend</option>
							<option>$1,000 - $3,000</option>
							<option>$3,000 - $5,000</option>
							<option>$5,000 - $10,000</option>
							<option>$10,000+</option>
						</select>
						<button
							type="submit"
							className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-105"
						>
							Get My Free Audit
						</button>
					</form>

					{/* Social Proof Below Form */}
					<p className="text-center text-gray-400 text-sm mt-4">
						<span className="text-green-400 font-semibold">Last audit submitted 12 minutes ago</span>
					</p>
				</div>
			</div>
		</section>
	);
}

// Benefits Section
function BenefitsSection() {
	const benefits = [
		{ icon: <TrendingUp />, title: "CAC Health Score", description: "Overall performance rating across 4 key categories" },
		{ icon: <Target />, title: "Waste Analysis", description: "Exact dollar amount you're losing each month" },
		{ icon: <Zap />, title: "Quick Wins", description: "3-5 immediate actions to improve performance" },
		{ icon: <DollarSign />, title: "Savings Potential", description: "Projected monthly savings with optimizations" }
	];

	return (
		<section className="py-12 px-4">
			<div className="container mx-auto max-w-4xl">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
					What You'll <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Get</span>
				</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
					{benefits.map((benefit, index) => (
						<div key={index} className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-all hover:scale-105">
							<div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4 text-white">
								{benefit.icon}
							</div>
							<h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
							<p className="text-gray-400">{benefit.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

// NEW: Qualification Section (Phase 1 Priority)
function QualificationSection() {
	return (
		<section className="py-12 px-4 bg-gradient-to-b from-transparent to-purple-900/10">
			<div className="container mx-auto max-w-3xl">
				<div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
					<h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
						Is This Audit <span className="text-purple-400">Right For You?</span>
					</h2>

					<div className="grid md:grid-cols-2 gap-8">
						{/* Perfect If */}
						<div>
							<h3 className="text-xl font-semibold mb-4 text-green-400 flex items-center gap-2">
								<CheckCircle className="w-6 h-6" />
								This audit is perfect if:
							</h3>
							<ul className="space-y-3 text-gray-300">
								<li className="flex items-start gap-2">
									<span className="text-green-400 mt-1">✓</span>
									<span>You're spending $3,000+/month on Meta ads</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-green-400 mt-1">✓</span>
									<span>You suspect your ads could perform better</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-green-400 mt-1">✓</span>
									<span>You want objective expert analysis</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-green-400 mt-1">✓</span>
									<span>You're open to making changes based on data</span>
								</li>
							</ul>
						</div>

						{/* Not For */}
						<div>
							<h3 className="text-xl font-semibold mb-4 text-red-400 flex items-center gap-2">
								<X className="w-6 h-6" />
								Not for:
							</h3>
							<ul className="space-y-3 text-gray-300">
								<li className="flex items-start gap-2">
									<span className="text-red-400 mt-1">✗</span>
									<span>Spending less than $3,000/month on ads</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-red-400 mt-1">✗</span>
									<span>Just launched ads in the last 30 days</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-red-400 mt-1">✗</span>
									<span>Not advertising on Meta/Facebook/Instagram</span>
								</li>
								<li className="flex items-start gap-2">
									<span className="text-red-400 mt-1">✗</span>
									<span>Looking for someone to just do the work for you</span>
								</li>
							</ul>
						</div>
					</div>

					<div className="mt-8 p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg text-center">
						<p className="text-gray-300">
							<span className="font-semibold text-purple-400">Limited capacity:</span> We can only take on qualified businesses to ensure audit quality
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

// Testimonials Section
function TestimonialsSection() {
	const testimonials = [
		{
			quote: "In 45 minutes, he found $4,000/month I was throwing away. My previous agency never caught it.",
			company: "Triumph Game Studios",
			industry: "Gaming Industry"
		},
		{
			quote: "Tom's audit uncovered $17,000 in additional revenue we were leaving on the table every single month.",
			company: "Provider Partners",
			industry: "Healthcare Industry"
		},
		{
			quote: "We're delighted with the work Tom and his team have done. Their approach has been refreshing.",
			company: "Melbourne Capital Group",
			industry: "Financial Services"
		}
	];

	return (
		<section className="py-12 px-4">
			<div className="container mx-auto max-w-6xl">
				<div className="grid md:grid-cols-3 gap-6">
					{testimonials.map((testimonial, index) => (
						<div key={index} className="bg-gray-900/50 p-8 rounded-lg border border-gray-800">
							<div className="flex justify-center mb-4">
								{[...Array(5)].map((_, i) => (
									<Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
								))}
							</div>
							<p className="text-gray-300 text-lg italic mb-6 text-center">"{testimonial.quote}"</p>
							<div className="text-center">
								<div className="font-semibold text-white">{testimonial.company}</div>
								<div className="text-sm text-gray-400">{testimonial.industry}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

// Mobile Sticky CTA (Phase 2)
function MobileStickyCTA() {
	return (
		<div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-purple-600 to-blue-600 p-4 shadow-lg">
			<button
				onClick={() => {
					document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' });
				}}
				className="w-full bg-white text-purple-600 font-bold py-3 rounded-lg"
			>
				Get My Free Audit
			</button>
		</div>
	);
}

// Exit Intent Popup (Phase 2)
function ExitIntentPopup({ onClose }: { onClose: () => void }) {
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
			<div className="bg-gray-900 border border-purple-500 rounded-lg p-8 max-w-md relative">
				<button
					onClick={onClose}
					className="absolute top-4 right-4 text-gray-400 hover:text-white"
				>
					<X className="w-6 h-6" />
				</button>
				<h3 className="text-2xl font-bold mb-4 text-center">
					Wait! Before You Go...
				</h3>
				<p className="text-gray-300 mb-6 text-center">
					Don't miss out on discovering how much you could be saving. The audit takes 90 seconds to request.
				</p>
				<form className="space-y-4">
					<input
						type="email"
						placeholder="Enter your email"
						className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
					/>
					<button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 rounded-lg">
						Get My Free Audit
					</button>
				</form>
			</div>
		</div>
	);
}

// Footer
function Footer() {
	return (
		<footer className="bg-purple-300 text-black py-8">
			<div className="container mx-auto px-4 text-center">
				<p className="font-bold mb-4">2025 © | Copyright by Louka Digital Ltd | All Rights Reserved</p>
				<div className="text-xs text-gray-700 max-w-4xl mx-auto">
					<p>The ad account audit and recommendations provided are based on the information you submit. Results and savings potential are estimates and not guarantees.</p>
				</div>
			</div>
		</footer>
	);
}