// src/app/adleak/audit/StickyControls.tsx
'use client';
import { useState, useEffect } from 'react';
import { useAudit } from '../_context/AuditContext';
import { EmailForm } from '../_components/cta/EmailForm';
import { SinCheckbox } from './sins/SinCheckbox';
import { calculateScore, getScoreLabel } from './math';
import { sins } from '~/data/audit';
import { X } from 'lucide-react';

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
		handleScroll(); // Check on mount
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

			{/* Expanded Sidebar */}
			{isExpanded && (
				<>
					{/* Backdrop */}
					<div
						className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
						onClick={() => setIsExpanded(false)}
					/>

					{/* Sidebar */}
					<div className="fixed left-0 top-0 bottom-0 w-full max-w-3xl bg-card/98 backdrop-blur-xl border-r-2 border-purple-500/50 z-50 overflow-y-auto">
						<div className="h-full flex">
							{/* Left: Sin Selector (40%) */}
							<div className="w-2/5 border-r border-border/50 p-6 overflow-y-auto">
								{/* Close Button */}
								<button
									onClick={() => setIsExpanded(false)}
									className="mb-6 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
								>
									<X className="w-4 h-4" />
									<span className="text-sm">Close</span>
								</button>

								{/* Budget Slider */}
								<div className="mb-8">
									<div className="flex items-baseline gap-2 mb-3">
										<label className="text-sm text-muted-foreground">Monthly Spend</label>
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

							{/* Right: Stats + Form (60%) */}
							<div className="w-3/5 p-8 flex flex-col justify-between">
								{/* Stats */}
								<div className="space-y-6 mb-8">
									{/* Score */}
									<div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/30">
										<div className="text-sm text-muted-foreground mb-2">Account Score</div>
										<div className={`text-7xl font-black ${scoreData.color} mb-2`}>
											{score}
										</div>
										<div className="text-xl text-muted-foreground">{scoreData.label}</div>
									</div>

									{/* Waste Stats */}
									<div className="grid grid-cols-2 gap-4">
										<div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30">
											<div className="text-xs text-muted-foreground mb-1">Monthly</div>
											<div className="text-3xl font-bold text-red-400">
												£{data.monthlyWaste.toLocaleString()}
											</div>
										</div>
										<div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30">
											<div className="text-xs text-muted-foreground mb-1">Yearly</div>
											<div className="text-3xl font-bold text-red-400">
												£{data.yearlyWaste.toLocaleString()}
											</div>
										</div>
									</div>
								</div>

								{/* Email Form */}
								<div>
									<EmailForm isGoodFit={isGoodFit} mobile />
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
}