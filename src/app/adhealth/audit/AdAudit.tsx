// src/app/adhealth/audit/AdAudit.tsx
'use client';
import { useState } from 'react';
import { AuditTrigger } from './layout/AuditTrigger';
import { AddButton } from './layout/AddButton';
import { SinSidebar } from './layout/SinSidebar';
import { FullCalculator } from './calculator/FullCalculator';
import { calculateWaste } from './math';
import { sins } from '~/data/audit';

export function AdAudit() {
	const [monthlyBudget, setMonthlyBudget] = useState(10000);
	const [selectedSins, setSelectedSins] = useState<string[]>([]);
	const [isExpanded, setIsExpanded] = useState(false);

	const savings = calculateWaste(monthlyBudget, selectedSins);

	const toggleSin = (sinId: string) => {
		setSelectedSins(prev =>
			prev.includes(sinId)
				? prev.filter(id => id !== sinId)
				: [...prev, sinId]
		);
	};

	// Get current sin (will be dynamic from scroll)
	const currentSinId = 'excluded-converters';
	const currentSin = sins.find(s => s.id === currentSinId) || sins[0];
	const isCurrentSinAdded = selectedSins.includes(currentSinId);

	// Calculate dimensions for gradient
	const gradientWidth = isExpanded ? '800px' : '400px';
	const gradientHeight = isExpanded ? '600px' : '200px';

	return (
		<>
			{/* Radial gradient background */}
			<div
				className="fixed bottom-0 left-0 pointer-events-none z-30 transition-all duration-500"
				style={{
					width: gradientWidth,
					height: gradientHeight,
					background: 'radial-gradient(ellipse at bottom left, rgba(10, 10, 10, 0.95) 0%, rgba(10, 10, 10, 0.7) 40%, transparent 70%)',
				}}
			/>

			{/* Main Container */}
			<div className="fixed bottom-0 left-0 z-40 pb-4 pl-4 sm:pl-12 md:pl-16 lg:pl-24">
				<div className="flex items-end gap-4">
					{/* Left Side: Sidebar + Trigger + Add Button */}
					<div className="flex flex-col items-start gap-3">
						{/* Expandable Sidebar */}
						<SinSidebar
							selectedSins={selectedSins}
							onToggle={toggleSin}
							isExpanded={isExpanded}
							monthlyBudget={monthlyBudget}
						/>

						{/* Bottom Row: Trigger + Add Button */}
						<div className="flex items-center gap-3">
							<AuditTrigger
								currentSinNumber={currentSin.number}
								monthlyBudget={monthlyBudget}
								savings={savings}
								onBudgetChange={setMonthlyBudget}
								onClick={() => setIsExpanded(!isExpanded)}
							/>

							<AddButton
								sinId={currentSinId}
								isAdded={isCurrentSinAdded}
								onAdd={toggleSin}
							/>
						</div>
					</div>

					{/* Right Side: Full Calculator (when expanded) */}
					{isExpanded && (
						<div className="transition-all duration-500 animate-in fade-in slide-in-from-left-4">
							<FullCalculator
								selectedSins={selectedSins}
								monthlyBudget={monthlyBudget}
								savings={savings}
							/>
						</div>
					)}
				</div>
			</div>
		</>
	);
}