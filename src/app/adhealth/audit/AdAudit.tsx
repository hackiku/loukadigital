// src/app/adhealth/audit/AdAudit.tsx
'use client';
import { useState, useEffect, useRef } from 'react';
import { AuditTrigger } from './layout/AuditTrigger';
import { AddButton } from './layout/AddButton';
import { SinClusters } from './layout/SinClusters';
import { SinSnippet } from './sins/SinSnippet';
import { FullCalculator } from './calculator/FullCalculator';
import { calculateWaste } from './math';
import { sins, clusters } from '~/data/audit';

type Scene = 'clusters' | 'scrollytell' | 'calculator' | 'mobile';

export function AdAudit() {
	const [monthlyBudget, setMonthlyBudget] = useState(10000);
	const [selectedSins, setSelectedSins] = useState<string[]>([]);
	const [isExpanded, setIsExpanded] = useState(false);
	const [currentScene, setCurrentScene] = useState<Scene>('clusters');
	const [isSticky, setIsSticky] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	const savings = calculateWaste(monthlyBudget, selectedSins);

	// Sticky behavior - only when section is in view
	useEffect(() => {
		const handleScroll = () => {
			if (!containerRef.current) return;

			const rect = containerRef.current.getBoundingClientRect();
			const navbarHeight = 80; // Adjust based on your navbar

			// Sticky when top of container reaches navbar
			const shouldStick = rect.top <= navbarHeight && rect.bottom > window.innerHeight;
			setIsSticky(shouldStick);
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const toggleSin = (sinId: string) => {
		setSelectedSins(prev =>
			prev.includes(sinId)
				? prev.filter(id => id !== sinId)
				: [...prev, sinId]
		);
	};

	const currentSinId = 'excluded-converters';
	const currentSin = sins.find(s => s.id === currentSinId) || sins[0];
	const isCurrentSinAdded = selectedSins.includes(currentSinId);

	return (
		<section
			ref={containerRef}
			className="relative min-h-[200vh] py-20"
		>
			{/* Sticky Container */}
			<div className={`${isSticky ? 'fixed top-20 left-0 right-0' : 'relative'} z-40`}>
				<div className="px-4 sm:px-12 md:px-16 lg:px-24">

					{/* Scene 1: Clusters View */}
					{currentScene === 'clusters' && (
						<SinClusters
							selectedSins={selectedSins}
							onToggle={toggleSin}
							monthlyBudget={monthlyBudget}
						/>
					)}

					{/* Scene 2: Scrollytell - Individual sins with assets */}
					{currentScene === 'scrollytell' && (
						<div className="grid grid-cols-12 gap-6 min-h-[80vh]">
							{/* Example layout - you'll customize per sin */}
							<div className="col-span-5">
								<SinSnippet
									sin={sins[0]}
									isSelected={selectedSins.includes(sins[0].id)}
									onToggle={() => toggleSin(sins[0].id)}
									monthlyBudget={monthlyBudget}
									showDescription
									showMoney
								/>
							</div>
							<div className="col-span-7">
								<div className="w-full h-96 bg-muted/30 rounded-2xl border border-border/50 flex items-center justify-center">
									<span className="text-muted-foreground">Asset / Mockup / Banner</span>
								</div>
							</div>
						</div>
					)}

					{/* Scene 3: Calculator Mode (when trigger opened) */}
					{currentScene === 'calculator' && isExpanded && (
						<div className="grid grid-cols-12 gap-6">
							{/* Left: Sidebar with clustered sins */}
							<div className="col-span-4">
								<SinClusters
									selectedSins={selectedSins}
									onToggle={toggleSin}
									monthlyBudget={monthlyBudget}
									compact
								/>
							</div>

							{/* Right: Full Calculator */}
							<div className="col-span-8">
								<FullCalculator
									selectedSins={selectedSins}
									monthlyBudget={monthlyBudget}
									savings={savings}
								/>
							</div>
						</div>
					)}

					{/* Scene 4: Mobile Grid (hidden on desktop) */}
					<div className="md:hidden">
						<div className="grid grid-cols-4 gap-2 mb-6">
							{sins.map((sin, idx) => (
								<button
									key={sin.id}
									onClick={() => toggleSin(sin.id)}
									className={`aspect-square rounded-xl border-2 flex items-center justify-center font-bold text-lg transition-all ${selectedSins.includes(sin.id)
											? 'bg-red-500/20 border-red-500 text-red-400'
											: 'bg-muted/30 border-border/50 text-muted-foreground'
										}`}
								>
									{idx + 1}
								</button>
							))}
						</div>
						<FullCalculator
							selectedSins={selectedSins}
							monthlyBudget={monthlyBudget}
							savings={savings}
							mobile
						/>
					</div>

					{/* Bottom Trigger - Always visible */}
					<div className="flex items-end gap-3 mt-8">
						<AuditTrigger
							currentSinNumber={currentSin.number}
							monthlyBudget={monthlyBudget}
							savings={savings}
							selectedCount={selectedSins.length}
							totalCount={sins.length}
							onBudgetChange={setMonthlyBudget}
							onClick={() => setIsExpanded(!isExpanded)}
							isExpanded={isExpanded}
						/>

						<AddButton
							sinId={currentSinId}
							isAdded={isCurrentSinAdded}
							onAdd={toggleSin}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}