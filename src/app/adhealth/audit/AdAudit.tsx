// src/app/adhealth/audit/AdAudit.tsx
'use client';
import { useState } from 'react';
import { AuditTrigger } from './layout/AuditTrigger';
import { AddButton } from './layout/AddButton';
import { SinSnippet } from './sins/SinSnippet';
import { Banner } from './assets/Banner';
import { PhoneMockup } from './assets/PhoneMockup';
import { StatCard } from './assets/StatCard';
import { FullCalculator } from './calculator/FullCalculator';
import { EmailForm } from '../_components/cta/EmailForm';
import { calculateWaste, calculateScore, getScoreLabel } from './math';
import { sins } from '~/data/audit';

export function AdAudit() {
	const [monthlyBudget, setMonthlyBudget] = useState(10000);
	const [selectedSins, setSelectedSins] = useState<string[]>([]);
	const [isExpanded, setIsExpanded] = useState(false);

	const savings = calculateWaste(monthlyBudget, selectedSins);
	const score = calculateScore(selectedSins);
	const scoreData = getScoreLabel(score);
	const isGoodFit = scoreData.fit === 'good' || scoreData.fit === 'perfect' || scoreData.fit === 'critical';

	const toggleSin = (sinId: string) => {
		setSelectedSins(prev =>
			prev.includes(sinId)
				? prev.filter(id => id !== sinId)
				: [...prev, sinId]
		);
	};

	const currentSinId = sins[0]?.id || '';
	const currentSin = sins.find(s => s.id === currentSinId) || sins[0];
	const isCurrentSinAdded = currentSin ? selectedSins.includes(currentSin.id) : false;

	return (
		<div className="relative">
			{/* SCROLLYTELL - Not expanded */}
			{!isExpanded && (
				<div className="_space-y-[10vh]">

					{/* SIN 1: Hero Left + Banner Right */}
					<section className="relative h-[30vh]">
						<div className="absolute top-1/3 left-[5%] w-[90%] md:w-[45%] lg:w-[35%]">
							<SinSnippet
								sin={sins[0]}
								isSelected={selectedSins.includes(sins[0].id)}
								onToggle={() => toggleSin(sins[0].id)}
								monthlyBudget={monthlyBudget}
								variant="full"
							/>
						</div>
						<div className="hidden md:block absolute top-1/4 right-[5%] w-[50%] h-[60%]">
							<Banner src={sins[0].assets[0].src || ''} />
						</div>
					</section>

					{/* SIN 2: Centered with Floating Stats */}
					<section className="relative h-screen flex items-center justify-center">
						<div className="w-[90%] md:w-[500px] z-10">
							<SinSnippet
								sin={sins[1]}
								isSelected={selectedSins.includes(sins[1].id)}
								onToggle={() => toggleSin(sins[1].id)}
								monthlyBudget={monthlyBudget}
								variant="full"
							/>
						</div>
						<div className="hidden lg:block absolute top-20 right-20 w-48">
							<StatCard content={sins[1].assets[0].content || ''} />
						</div>
						<div className="hidden lg:block absolute bottom-20 right-20 w-48">
							<StatCard content={sins[1].assets[1].content || ''} />
						</div>
					</section>

					{/* SIN 3: Bottom Left + Mockup Top Right */}
					<section className="relative h-screen">
						<div className="absolute bottom-20 left-[5%] w-[90%] md:w-[40%]">
							<SinSnippet
								sin={sins[2]}
								isSelected={selectedSins.includes(sins[2].id)}
								onToggle={() => toggleSin(sins[2].id)}
								monthlyBudget={monthlyBudget}
								variant="full"
							/>
						</div>
						<div className="hidden md:block absolute top-20 right-[10%] w-[300px] h-[600px]">
							<PhoneMockup src={sins[2].assets[0].src || ''} />
						</div>
						<div className="hidden lg:block absolute top-1/3 right-[5%] w-56">
							<StatCard content={sins[2].assets[0].content || ''} />
						</div>
					</section>

					{/* SIN 4: Full Width Image with Overlay */}
					<section className="relative h-screen flex items-center justify-center">
						<div className="absolute inset-0 opacity-30">
							<Banner src={sins[3].assets[0].src || ''} />
						</div>
						<div className="relative z-10 w-[90%] md:w-[600px]">
							<SinSnippet
								sin={sins[3]}
								isSelected={selectedSins.includes(sins[3].id)}
								onToggle={() => toggleSin(sins[3].id)}
								monthlyBudget={monthlyBudget}
								variant="full"
							/>
						</div>
					</section>

					{/* SIN 5: Split Screen with Stats */}
					<section className="relative">
						<div className="grid md:grid-cols-2 gap-8 h-full p-[5%] items-center">
							<SinSnippet
								sin={sins[4]}
								isSelected={selectedSins.includes(sins[4].id)}
								onToggle={() => toggleSin(sins[4].id)}
								monthlyBudget={monthlyBudget}
								variant="full"
							/>
							<div className="hidden md:grid grid-rows-2 gap-6">
								<StatCard content={sins[4].assets[0].content || ''} />
								<StatCard content={sins[4].assets[1].content || ''} />
							</div>
						</div>
					</section>

					{/* SIN 6: Diagonal Layout */}
					<section className="relative h-screen">
						<div className="absolute top-[15%] left-[5%] w-[90%] md:w-[40%]">
							<SinSnippet
								sin={sins[5]}
								isSelected={selectedSins.includes(sins[5].id)}
								onToggle={() => toggleSin(sins[5].id)}
								monthlyBudget={monthlyBudget}
								variant="full"
							/>
						</div>
						<div className="hidden md:block absolute bottom-[15%] right-[5%] w-[300px] h-[600px]">
							<PhoneMockup src={sins[5].assets[0].src || ''} />
						</div>
						<div className="hidden lg:block absolute top-[40%] left-[50%] w-64">
							<StatCard content={sins[5].assets[1].content || ''} />
						</div>
					</section>

					{/* SIN 7: Bottom Heavy */}
					<section className="relative h-screen">
						<div className="absolute top-20 left-1/2 -translate-x-1/2 w-[90%] md:w-[500px]">
							<SinSnippet
								sin={sins[6]}
								isSelected={selectedSins.includes(sins[6].id)}
								onToggle={() => toggleSin(sins[6].id)}
								monthlyBudget={monthlyBudget}
								variant="full"
							/>
						</div>
						<div className="hidden md:block absolute bottom-[5%] left-[5%] right-[5%] h-[40%]">
							<Banner src={sins[6].assets[0].src || ''} />
						</div>
					</section>

				</div>
			)}

			{/* EXPANDED STATE - Desktop */}
			{isExpanded && (
				<div className="hidden md:grid grid-cols-12 gap-6 min-h-[80vh]">
					{/* Left: Compact Sidebar */}
					<div className="col-span-3 space-y-2">
						{sins.map((sin) => (
							<SinSnippet
								key={sin.id}
								sin={sin}
								isSelected={selectedSins.includes(sin.id)}
								onToggle={() => toggleSin(sin.id)}
								monthlyBudget={monthlyBudget}
								variant="checkbox"
							/>
						))}
					</div>

					{/* Right: Full Calculator */}
					<div className="col-span-9">
						<FullCalculator
							selectedSins={selectedSins}
							monthlyBudget={monthlyBudget}
							savings={savings}
						/>
					</div>
				</div>
			)}

			{/* EXPANDED STATE - Mobile */}
			{isExpanded && (
				<div className="md:hidden space-y-6">
					<div className="grid grid-cols-4 gap-2">
						{sins.map((sin) => (
							<SinSnippet
								key={sin.id}
								sin={sin}
								isSelected={selectedSins.includes(sin.id)}
								onToggle={() => toggleSin(sin.id)}
								monthlyBudget={monthlyBudget}
								variant="square"
							/>
						))}
					</div>
					<FullCalculator
						selectedSins={selectedSins}
						monthlyBudget={monthlyBudget}
						savings={savings}
						mobile
					/>
				</div>
			)}

			{/* BOTTOM TRIGGER ROW */}
			<div className="mt-8 flex items-end gap-3 flex-wrap">
				{/* Trigger */}
				<AuditTrigger
					currentSinNumber={currentSin?.number || 1}
					monthlyBudget={monthlyBudget}
					savings={savings}
					selectedCount={selectedSins.length}
					totalCount={sins.length}
					onBudgetChange={setMonthlyBudget}
					onClick={() => setIsExpanded(!isExpanded)}
					isExpanded={isExpanded}
				/>

				{/* Add Button */}
				{!isExpanded && currentSin && (
					<AddButton
						sinId={currentSin.id}
						isAdded={isCurrentSinAdded}
						onAdd={toggleSin}
					/>
				)}

				{/* Email Form - Desktop (right of trigger when expanded) */}
				{isExpanded && (
					<div className="hidden md:block flex-1 max-w-2xl">
						<EmailForm isGoodFit={isGoodFit} />
					</div>
				)}
			</div>

			{/* Email Form - Mobile (above trigger) */}
			{isExpanded && (
				<div className="md:hidden mb-4">
					<EmailForm isGoodFit={isGoodFit} mobile />
				</div>
			)}
		</div>
	);
}