// src/app/adleak/audit/StickyControls.tsx
'use client';
import { useState, useEffect } from 'react';
import { useAudit } from '../_context/AuditContext';
import { EmailForm } from '../_components/cta/EmailForm';
import { LogoShoutouts } from '../_components/proof/LogoShoutouts';
import { SinCheckbox } from './sins/SinCheckbox';
import { calculateScore, getScoreLabel } from './math';
import { sins } from '~/data/audit';
import { X } from 'lucide-react';
import { AvailabilityBar } from '../_components/scarcity/AvailabilityBar';

export function StickyControls() {
	const { data, updateBudget, updateSins } = useAudit();
	const [isExpanded, setIsExpanded] = useState(false);
	const [isVisible, setIsVisible] = useState(false);

	const score = calculateScore(data.selectedSins);
	const scoreData = getScoreLabel(score);
	const isGoodFit = ['good', 'perfect', 'critical'].includes(scoreData.fit);

	// Show/hide based on audit section visibility
	useEffect(() => {
		const handleScroll = () => {
			const auditSection = document.getElementById('audit');
			if (!auditSection) return;

			const rect = auditSection.getBoundingClientRect();
			const inView = rect.top < window.innerHeight && rect.bottom > 0;
			setIsVisible(inView);
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const toggleSin = (sinId: string) => {
		const newSins = data.selectedSins.includes(sinId)
			? data.selectedSins.filter(id => id !== sinId)
			: [...data.selectedSins, sinId];
		updateSins(newSins);
	};

	if (!isVisible) return null;

	return (
		<>
			{/* Compact Button - Bottom Left */}
			<button
				onClick={() => setIsExpanded(true)}
				className={`
          fixed bottom-6 left-6 z-30
          bg-card/95 backdrop-blur-xl border-2 border-purple-500/50 
          rounded-2xl shadow-2xl p-4 
          hover:scale-105 transition-all
          ${isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'}
        `}
			>
				{/* Budget */}
				<div className="flex items-baseline gap-2 mb-2 pb-2 border-b border-border/50">
					<span className="text-xs text-muted-foreground">Spend</span>
					<span className="text-xl font-bold">£{data.monthlyBudget.toLocaleString()}</span>
				</div>

				{/* Waste */}
				<div className="flex items-baseline gap-2 mb-2 pb-2 border-b border-border/50">
					<span className="text-xs text-muted-foreground">Waste</span>
					<span className="text-xl font-bold text-red-400">
						£{data.monthlyWaste.toLocaleString()}
					</span>
				</div>

				{/* Score */}
				<div className="text-center">
					<div className={`text-3xl font-black ${scoreData.color}`}>
						{score}
					</div>
					<div className="text-xs text-muted-foreground">{data.selectedSins.length}/7</div>
				</div>
			</button>

			{/* Expanded Modal - DESKTOP */}
			{isExpanded && (
				<>
					{/* Backdrop with Logo Shoutouts */}
					<div
						className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
						onClick={() => setIsExpanded(false)}
					>
						{/* Logo Shoutouts - Bottom Right on Backdrop (Desktop Only) */}
						<div
							className="hidden md:block scale-80 absolute bottom-8 right-5 max-w-sm pointer-events-none opacity-60"
							onClick={(e) => e.stopPropagation()} // Prevent closing when clicking logos
						>
							<LogoShoutouts />
						</div>
					</div>

					{/* Desktop Modal */}
					<div className="hidden md:block fixed left-0 top-0 bottom-0 w-full max-w-4xl bg-card/98 backdrop-blur-xl border-r-2 border-purple-500/50 z-50 overflow-y-auto">
						<div className="h-full flex">
							{/* Left: Sin Selector (35%) */}
							<div className="w-[35%] border-r border-border/50 p-6 overflow-y-auto">
								{/* Sin Checkboxes */}
								<div className="space-y-2">
									<div className="text-xs text-muted-foreground mb-3 uppercase tracking-wide">
										Select Your Sins
									</div>
									{sins.map((sin) => (
										<SinCheckbox
											key={sin.id}
											sin={sin}
											isSelected={data.selectedSins.includes(sin.id)}
											onToggle={() => toggleSin(sin.id)}
											monthlyBudget={data.monthlyBudget}
										/>
									))}
								</div>
							</div>

							{/* Right: Form Section (65%) */}
							<div className="w-[65%] p-8 flex flex-col">
								{/* Close Button - Top Right */}
								<button
									onClick={() => setIsExpanded(false)}
									className="self-end mb-6 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
								>
									<X className="w-4 h-4" />
									<span className="text-sm">Close</span>
								</button>

								{/* Stats - Top */}
								<div className="grid grid-cols-2 gap-4 mb-8">
									{/* Waste */}
									<div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30">
										<div className="text-xs text-muted-foreground mb-1">Monthly Waste</div>
										<div className="text-3xl font-bold text-red-400">
											£{data.monthlyWaste.toLocaleString()}
										</div>
									</div>

									{/* Score - Bigger */}
									<div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30 text-center">
										<div className="text-xs text-muted-foreground mb-1">Account Score</div>
										<div className={`text-5xl font-black ${scoreData.color}`}>
											{score}
										</div>
										<div className="text-sm text-muted-foreground mt-1">{scoreData.label}</div>
									</div>
								</div>

								{/* Headline + Subhead */}
								<div className="mb-6">
									<h3 className="text-3xl font-bold mb-3">
										Get Your Free AdLeak Audit
									</h3>
									<p className="text-muted-foreground leading-relaxed">
										Download the 7 Sins PDF checklist instantly. Then email us a screenshot
										of your ad account results, and we'll analyze your specific waste areas
										in detail.
									</p>
								</div>

								{/* Monthly Spend Slider */}
								<div className="mb-6">
									<div className="flex items-baseline gap-2 mb-3">
										<label className="text-sm text-muted-foreground">Monthly Ad Spend</label>
										<span className="text-2xl font-bold">
											£{data.monthlyBudget.toLocaleString()}
										</span>
									</div>
									<input
										type="range"
										min="3000"
										max="50000"
										step="1000"
										value={data.monthlyBudget}
										onChange={(e) => updateBudget(Number(e.target.value))}
										className="w-full h-2 bg-muted rounded-full appearance-none cursor-pointer accent-purple-500"
									/>
								</div>

								{/* Email Form - Pass scoreData */}
								<EmailForm
									isGoodFit={isGoodFit}
									scoreData={scoreData}
									mobile
									isFree
								/>
								<div className="m-3 w-full">
									<AvailabilityBar variant="default" />
								</div>
								{/* <AvailabilityBar variant="compact" /> */}
							</div>
						</div>
					</div>

					{/* Mobile Modal */}
					<div className="md:hidden fixed inset-0 z-50 bg-card/98 backdrop-blur-xl overflow-y-auto">
						<div className="min-h-screen p-6">
							{/* Close Button */}
							<button
								onClick={() => setIsExpanded(false)}
								className="fixed top-6 right-6 z-10 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
							>
								<X className="w-5 h-5" />
								<span className="text-sm font-semibold">Close</span>
							</button>

							{/* Mini Stats */}
							<div className="grid grid-cols-3 gap-2 mb-6 pt-12">
								<div className="p-3 rounded-xl bg-card border border-border/50 text-center">
									<div className="text-xs text-muted-foreground mb-1">Spend</div>
									<div className="text-lg font-bold">
										£{(data.monthlyBudget / 1000).toFixed(1)}k
									</div>
								</div>
								<div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-center">
									<div className="text-xs text-muted-foreground mb-1">Waste</div>
									<div className="text-lg font-bold text-red-400">
										£{(data.monthlyWaste / 1000).toFixed(1)}k
									</div>
								</div>
								<div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-center">
									<div className="text-xs text-muted-foreground mb-1">Score</div>
									<div className={`text-2xl font-black ${scoreData.color}`}>
										{score}
									</div>
								</div>
							</div>

							{/* Compact Sin List */}
							<div className="mb-8">
								<div className="text-xs text-muted-foreground mb-3 uppercase tracking-wide">
									Your Sins ({data.selectedSins.length}/7)
								</div>
								<div className="space-y-1.5">
									{sins.map((sin) => (
										<SinCheckbox
											key={sin.id}
											sin={sin}
											isSelected={data.selectedSins.includes(sin.id)}
											onToggle={() => toggleSin(sin.id)}
											monthlyBudget={data.monthlyBudget}
										/>
									))}
								</div>
							</div>

							{/* Headline */}
							<div className="mb-6">
								<h3 className="text-2xl font-bold mb-2">
									Get Your Free AdLeak Audit
								</h3>
								<p className="text-sm text-muted-foreground leading-relaxed">
									Download the PDF checklist instantly. Email us your ad account
									screenshot for detailed analysis.
								</p>
							</div>

							{/* Budget Slider */}
							<div className="mb-6">
								<div className="flex items-baseline gap-2 mb-2">
									<span className="text-xs text-muted-foreground">Monthly Spend</span>
									<span className="text-xl font-bold">
										£{data.monthlyBudget.toLocaleString()}
									</span>
								</div>
								<input
									type="range"
									min="3000"
									max="50000"
									step="1000"
									value={data.monthlyBudget}
									onChange={(e) => updateBudget(Number(e.target.value))}
									className="w-full h-2 bg-muted rounded-full appearance-none cursor-pointer accent-purple-500"
								/>
							</div>

							{/* Email Form - Pass scoreData */}
							<EmailForm
								isGoodFit={isGoodFit}
								scoreData={scoreData}
								mobile
								isFree
							/>
						</div>
					</div>
				</>
			)}
		</>
	);
}