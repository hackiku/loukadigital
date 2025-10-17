// src/app/adhealth/audit/AdAudit.tsx
'use client';
import { useState, useEffect } from 'react';
import { Calculator, ChevronDown, ChevronUp } from 'lucide-react';
import { checks, getScoreRange } from '~/data/checklist';

interface AdAuditProps {
	onOpenDrawer?: () => void;
	className?: string;
}

export function AdAudit({ onOpenDrawer, className = '' }: AdAuditProps) {
	const [selections, setSelections] = useState<Record<string, 'pass' | 'fail'>>({});
	const [monthlySpend, setMonthlySpend] = useState(10000);
	const [isExpanded, setIsExpanded] = useState(false);
	const [isSticky, setIsSticky] = useState(false);

	// Calculate score and waste
	const calculateResults = () => {
		const selectedChecks = Object.entries(selections)
			.filter(([_, value]) => value === 'fail')
			.map(([id]) => id);

		const totalPoints = checks.reduce((sum, check) => {
			if (selections[check.id] === 'pass') return sum + check.scoring.pass.points;
			return sum;
		}, 0);

		const maxPoints = checks.reduce((sum, check) => sum + check.scoring.pass.points, 0);
		const score = Math.round((totalPoints / maxPoints) * 90);

		const wastePercent = selectedChecks.reduce((sum, checkId) => {
			const check = checks.find(c => c.id === checkId);
			// Extract percentage from formula
			const percentages: Record<string, number> = {
				'excluded-converters': 20,
				'campaign-overlap': 20,
				'tracking-accuracy': 30,
				'dead-placements': 25,
				'creative-fatigue': 12.5,
				'ios-tracking': 35,
				'account-frequency': 30,
			};
			return sum + (percentages[checkId] || 0);
		}, 0) / Math.max(selectedChecks.length, 1);

		const monthlyWaste = Math.round((monthlySpend * wastePercent) / 100);
		const scoreRange = getScoreRange(score);

		return {
			score,
			monthlyWaste,
			yearlyWaste: monthlyWaste * 12,
			fitLabel: scoreRange?.label || 'Unknown',
			fitColor: scoreRange?.fit === 'critical' ? 'text-red-400' :
				scoreRange?.fit === 'perfect' ? 'text-purple-400' :
					scoreRange?.fit === 'good' ? 'text-blue-400' :
						scoreRange?.fit === 'borderline' ? 'text-yellow-400' :
							scoreRange?.fit === 'poor' ? 'text-green-400' : 'text-gray-400',
			selectedCount: selectedChecks.length
		};
	};

	const results = calculateResults();

	// Sticky behavior
	useEffect(() => {
		const handleScroll = () => {
			setIsSticky(window.scrollY > 800);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleSelection = (checkId: string, value: 'pass' | 'fail') => {
		setSelections(prev => ({
			...prev,
			[checkId]: value
		}));
	};

	const SinButton = ({ check }: { check: typeof checks[0] }) => {
		const selected = selections[check.id];

		return (
			<div className="group">
				<div className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-purple-500/50 transition-all">
					{/* Number */}
					<div className="relative flex-shrink-0">
						<div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
							<span className="text-white font-bold text-sm">{check.number}</span>
						</div>
					</div>

					{/* Content */}
					<div className="flex-1 min-w-0">
						<h4 className="text-sm font-bold text-foreground mb-1">{check.name}</h4>
						<p className="text-xs text-muted-foreground line-clamp-2">{check.tagline}</p>
					</div>

					{/* Yes/No Buttons */}
					<div className="flex gap-2 flex-shrink-0">
						<button
							onClick={() => handleSelection(check.id, 'fail')}
							className={`w-14 h-10 rounded-lg border-2 transition-all font-semibold text-xs
                ${selected === 'fail'
									? 'bg-red-500/20 border-red-500 text-red-400'
									: 'border-border/50 text-muted-foreground hover:border-red-500/50'}`}
						>
							Yes
						</button>
						<button
							onClick={() => handleSelection(check.id, 'pass')}
							className={`w-14 h-10 rounded-lg border-2 transition-all font-semibold text-xs
                ${selected === 'pass'
									? 'bg-green-500/20 border-green-500 text-green-400'
									: 'border-border/50 text-muted-foreground hover:border-green-500/50'}`}
						>
							No
						</button>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className={`transition-all duration-500 ${className} ${isSticky
				? 'fixed top-20 right-8 z-40 w-96'
				: 'relative w-full max-w-2xl'
			}`}>
			{/* Main Container */}
			<div className="bg-card/95 backdrop-blur-xl rounded-2xl border border-border/50 shadow-2xl overflow-hidden">

				{/* Header - Always Visible */}
				<div
					className="p-6 cursor-pointer hover:bg-card/80 transition-colors"
					onClick={() => setIsExpanded(!isExpanded)}
				>
					<div className="flex items-center justify-between mb-4">
						<div className="flex items-center gap-3">
							<Calculator className="w-6 h-6 text-purple-400" />
							<h3 className="text-xl font-bold">Ad Health Score</h3>
						</div>
						{isSticky && (
							<button className="p-1 hover:bg-muted/50 rounded">
								{isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
							</button>
						)}
					</div>

					{/* Quick Results */}
					<div className="grid grid-cols-2 gap-4">
						<div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl p-4 border border-purple-500/30">
							<div className="text-xs text-muted-foreground mb-1">Your Score</div>
							<div className={`text-3xl font-black ${results.fitColor}`}>
								{results.score > 0 ? results.score : '--'}
							</div>
							<div className="text-xs font-semibold text-muted-foreground mt-1">
								{results.fitLabel}
							</div>
						</div>

						<div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl p-4 border border-red-500/30">
							<div className="text-xs text-muted-foreground mb-1">Monthly Waste</div>
							<div className="text-2xl font-black text-red-400">
								£{results.monthlyWaste > 0 ? results.monthlyWaste.toLocaleString() : '--'}
							</div>
							<div className="text-xs font-semibold text-muted-foreground mt-1">
								£{results.yearlyWaste > 0 ? results.yearlyWaste.toLocaleString() : '--'}/year
							</div>
						</div>
					</div>

					<div className="mt-4 text-center text-xs text-muted-foreground">
						{results.selectedCount > 0
							? `${results.selectedCount} of 7 sins identified`
							: 'Select Yes/No for each sin above'}
					</div>
				</div>

				{/* Expandable Content */}
				<div className={`transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-[70vh] opacity-100' : 'max-h-0 opacity-0'
					}`}>
					<div className="border-t border-border/50 p-6 space-y-3 overflow-y-auto max-h-[60vh]">
						{/* Monthly Spend Input */}
						<div className="mb-6 p-4 bg-muted/30 rounded-xl">
							<label className="text-sm font-semibold text-foreground mb-2 block">
								Your Monthly Ad Spend
							</label>
							<div className="relative">
								<span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">£</span>
								<input
									type="number"
									value={monthlySpend}
									onChange={(e) => setMonthlySpend(Number(e.target.value))}
									className="w-full pl-8 pr-4 py-2 bg-background border border-border rounded-lg text-foreground"
									step="1000"
									min="0"
								/>
							</div>
						</div>

						{/* Sin Checklist */}
						{checks.map(check => (
							<SinButton key={check.id} check={check} />
						))}

						{/* CTA */}
						{results.score > 0 && results.score < 80 && onOpenDrawer && (
							<button
								onClick={onOpenDrawer}
								className="w-full mt-6 py-4 px-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold rounded-xl transition-all hover:scale-105"
							>
								Get My Free Audit →
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}