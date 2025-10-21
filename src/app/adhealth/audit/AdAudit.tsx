// src/app/adleak/audit/AdAudit.tsx
'use client';
import { useEffect } from 'react';
import { useAudit } from '../_context/AuditContext';
import { ClusterSection } from './sins/ClusterSection';
import { ClusterAssets } from './sins/ClusterAssets';
import { SinItem } from './sins/SinItem';
import { StickyControls } from './StickyControls';
import { EmailForm } from '../_components/cta/EmailForm';
import { calculateWaste, calculateScore, getScoreLabel } from './math';
import { sins } from '~/data/audit';
import { sinClusters } from '~/data/sin-clusters';

export function AdAudit() {
	const { data, updateSins, updateWaste, updateScore } = useAudit();

	useEffect(() => {
		const savings = calculateWaste(data.monthlyBudget, data.selectedSins);
		const score = calculateScore(data.selectedSins);
		const scoreData = getScoreLabel(score);

		updateWaste(savings, savings * 12);
		updateScore(score, scoreData.fit);
	}, [data.monthlyBudget, data.selectedSins]);

	const toggleSin = (sinId: string) => {
		const newSins = data.selectedSins.includes(sinId)
			? data.selectedSins.filter(id => id !== sinId)
			: [...data.selectedSins, sinId];
		updateSins(newSins);
	};

	const getSinsForCluster = (clusterId: string) => {
		const cluster = sinClusters.find(c => c.id === clusterId);
		if (!cluster) return [];
		return sins.filter(sin => cluster.sins.includes(sin.id));
	};

	const score = calculateScore(data.selectedSins);
	const scoreData = getScoreLabel(score);
	const isGoodFit = ['good', 'perfect', 'critical'].includes(scoreData.fit);

	return (
		<div className="relative">
			{/* Sticky Controls */}
			<StickyControls />

			{/* Cluster 1: Overlap */}
			<ClusterSection clusterId="overlap">
				<ClusterAssets clusterId="overlap" />
				{getSinsForCluster('overlap').map(sin => (
					<SinItem
						key={sin.id}
						sin={sin}
						isSelected={data.selectedSins.includes(sin.id)}
						onToggle={() => toggleSin(sin.id)}
						monthlyBudget={data.monthlyBudget}
						variant="full"
					/>
				))}
			</ClusterSection>

			{/* Cluster 2: Blindspot */}
			<ClusterSection clusterId="blindspot">
				<ClusterAssets clusterId="blindspot" />
				{getSinsForCluster('blindspot').map(sin => (
					<SinItem
						key={sin.id}
						sin={sin}
						isSelected={data.selectedSins.includes(sin.id)}
						onToggle={() => toggleSin(sin.id)}
						monthlyBudget={data.monthlyBudget}
						variant="full"
					/>
				))}
			</ClusterSection>

			{/* Cluster 3: Fatigue */}
			<ClusterSection clusterId="fatigue">
				<ClusterAssets clusterId="fatigue" />
				{getSinsForCluster('fatigue').map(sin => (
					<SinItem
						key={sin.id}
						sin={sin}
						isSelected={data.selectedSins.includes(sin.id)}
						onToggle={() => toggleSin(sin.id)}
						monthlyBudget={data.monthlyBudget}
						variant="full"
					/>
				))}
			</ClusterSection>

			{/* Final CTA */}
			<section className="py-32 px-6 bg-gradient-to-b from-background to-purple-500/5">
				<div className="max-w-2xl mx-auto text-center">
					<div className="mb-8">
						<div className="text-sm text-muted-foreground mb-2">Total Monthly Waste</div>
						<div className="text-6xl font-black text-red-400 mb-4">
							£{data.monthlyWaste.toLocaleString()}
						</div>
						<div className="text-xl text-muted-foreground">
							£{data.yearlyWaste.toLocaleString()} per year
						</div>
					</div>

					<div className="mb-12 p-8 rounded-2xl bg-card/50 border-2 border-purple-500/30">
						<div className="text-sm text-muted-foreground mb-2">Account Score</div>
						<div className={`text-7xl font-black ${scoreData.color} mb-2`}>
							{score}
						</div>
						<div className="text-xl text-muted-foreground">{scoreData.label}</div>
					</div>

					<EmailForm isGoodFit={isGoodFit} mobile isFree />
				</div>
			</section>
		</div>
	);
}