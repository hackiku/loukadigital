// src/app/adhealth/audit/AdAudit.tsx - FINAL FIX
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

	const currentSin = sins[0];
	const isCurrentSinAdded = currentSin ? selectedSins.includes(currentSin.id) : false;

	// Destructure all sins upfront for type safety
	const [sin1, sin2, sin3, sin4, sin5, sin6, sin7] = sins;

	return (
		<div className="relative">
			{/* SCROLLYTELL - Not expanded */}
			{!isExpanded && (
				<div className="space-y-[100vh]">

					{/* SIN 1: Hero Left + Banner Right */}
					{sin1 && (
						<section className="relative h-screen">
							<div className="absolute top-1/3 left-[5%] w-[90%] md:w-[45%] lg:w-[35%]">
								<SinSnippet
									sin={sin1}
									isSelected={selectedSins.includes(sin1.id)}
									onToggle={() => toggleSin(sin1.id)}
									monthlyBudget={monthlyBudget}
									variant="full"
								/>
							</div>
							{sin1.assets[0]?.src && (
								<div className="hidden md:block absolute top-1/4 right-[5%] w-[50%] h-[60%]">
									<Banner src={sin1.assets[0].src} />
								</div>
							)}
						</section>
					)}

					{/* SIN 2: Centered with Floating Stats */}
					{sin2 && (
						<section className="relative h-screen flex items-center justify-center">
							<div className="w-[90%] md:w-[500px] z-10">
								<SinSnippet
									sin={sin2}
									isSelected={selectedSins.includes(sin2.id)}
									onToggle={() => toggleSin(sin2.id)}
									monthlyBudget={monthlyBudget}
									variant="full"
								/>
							</div>
							{sin2.assets[0]?.content && (
								<div className="hidden lg:block absolute top-20 right-20 w-48">
									<StatCard content={sin2.assets[0].content} />
								</div>
							)}
							{sin2.assets[1]?.content && (
								<div className="hidden lg:block absolute bottom-20 right-20 w-48">
									<StatCard content={sin2.assets[1].content} />
								</div>
							)}
						</section>
					)}

					{/* SIN 3: Bottom Left + Mockup Top Right */}
					{sin3 && (
						<section className="relative h-screen">
							<div className="absolute bottom-20 left-[5%] w-[90%] md:w-[40%]">
								<SinSnippet
									sin={sin3}
									isSelected={selectedSins.includes(sin3.id)}
									onToggle={() => toggleSin(sin3.id)}
									monthlyBudget={monthlyBudget}
									variant="full"
								/>
							</div>
							{sin3.assets[0]?.src && (
								<div className="hidden md:block absolute top-20 right-[10%] w-[300px] h-[600px]">
									<PhoneMockup src={sin3.assets[0].src} />
								</div>
							)}
							{sin3.assets[1]?.content && (
								<div className="hidden lg:block absolute top-1/3 right-[5%] w-56">
									<StatCard content={sin3.assets[1].content} />
								</div>
							)}
						</section>
					)}

					{/* SIN 4: Full Width Image with Overlay */}
					{sin4 && (
						<section className="relative h-screen flex items-center justify-center">
							{sin4.assets[0]?.src && (
								<div className="absolute inset-0 opacity-30">
									<Banner src={sin4.assets[0].src} />
								</div>
							)}
							<div className="relative z-10 w-[90%] md:w-[600px]">
								<SinSnippet
									sin={sin4}
									isSelected={selectedSins.includes(sin4.id)}
									onToggle={() => toggleSin(sin4.id)}
									monthlyBudget={monthlyBudget}
									variant="full"
								/>
							</div>
						</section>
					)}

					{/* SIN 5: Split Screen with Stats */}
					{sin5 && (
						<section className="relative h-screen">
							<div className="grid md:grid-cols-2 gap-8 h-full p-[5%] items-center">
								<SinSnippet
									sin={sin5}
									isSelected={selectedSins.includes(sin5.id)}
									onToggle={() => toggleSin(sin5.id)}
									monthlyBudget={monthlyBudget}
									variant="full"
								/>
								<div className="hidden md:grid grid-rows-2 gap-6">
									{sin5.assets[0]?.content && <StatCard content={sin5.assets[0].content} />}
									{sin5.assets[1]?.content && <StatCard content={sin5.assets[1].content} />}
								</div>
							</div>
						</section>
					)}

					{/* SIN 6: Diagonal Layout */}
					{sin6 && (
						<section className="relative h-screen">
							<div className="absolute top-[15%] left-[5%] w-[90%] md:w-[40%]">
								<SinSnippet
									sin={sin6}
									isSelected={selectedSins.includes(sin6.id)}
									onToggle={() => toggleSin(sin6.id)}
									monthlyBudget={monthlyBudget}
									variant="full"
								/>
							</div>
							{sin6.assets[0]?.src && (
								<div className="hidden md:block absolute bottom-[15%] right-[5%] w-[300px] h-[600px]">
									<PhoneMockup src={sin6.assets[0].src} />
								</div>
							)}
							{sin6.assets[1]?.content && (
								<div className="hidden lg:block absolute top-[40%] left-[50%] w-64">
									<StatCard content={sin6.assets[1].content} />
								</div>
							)}
						</section>
					)}

					{/* SIN 7: Bottom Heavy */}
					{sin7 && (
						<section className="relative h-screen">
							<div className="absolute top-20 left-1/2 -translate-x-1/2 w-[90%] md:w-[500px]">
								<SinSnippet
									sin={sin7}
									isSelected={selectedSins.includes(sin7.id)}
									onToggle={() => toggleSin(sin7.id)}
									monthlyBudget={monthlyBudget}
									variant="full"
								/>
							</div>
							{sin7.assets[0]?.src && (
								<div className="hidden md:block absolute bottom-[5%] left-[5%] right-[5%] h-[40%]">
									<Banner src={sin7.assets[0].src} />
								</div>
							)}
						</section>
					)}

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