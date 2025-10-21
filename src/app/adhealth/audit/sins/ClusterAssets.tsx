// src/app/adhealth/audit/sins/ClusterAssets.tsx
'use client';

interface ClusterAssetsProps {
	clusterId: 'overlap' | 'blindspot' | 'fatigue';
}

export function ClusterAssets({ clusterId }: ClusterAssetsProps) {
	// Asset configurations per cluster
	const assetConfig = {
		overlap: {
			type: 'floating-screenshot' as const,
			position: 'right',
			src: '/assets/overlap-screenshot.png', // Add later
		},
		blindspot: {
			type: 'phone-mockup' as const,
			position: 'left',
			src: '/assets/ios-popup.png', // Add later
		},
		fatigue: {
			type: 'carousel-blur' as const,
			position: 'center',
			src: '/assets/creative-examples.png', // Add later
		},
	};

	const config = assetConfig[clusterId];

	// Floating Screenshot (Overlap)
	if (config.type === 'floating-screenshot' && config.position === 'right') {
		return (
			<div className="hidden lg:block absolute right-12 top-1/4 w-[400px] h-[300px] opacity-0 pointer-events-none">
				{/* TODO: Add when asset is ready */}
				<div className="w-full h-full rounded-xl border border-border/30 bg-muted/20 backdrop-blur-sm flex items-center justify-center">
					<span className="text-xs text-muted-foreground">Screenshot placeholder</span>
				</div>
			</div>
		);
	}

	// Phone Mockup (Blindspot)
	if (config.type === 'phone-mockup' && config.position === 'left') {
		return (
			<div className="hidden lg:block absolute left-12 top-1/3 w-[280px] h-[560px] opacity-0 pointer-events-none">
				{/* TODO: Add when asset is ready */}
				<div className="w-full h-full rounded-3xl border-4 border-border/50 bg-muted/20 backdrop-blur-sm flex items-center justify-center">
					<span className="text-xs text-muted-foreground">iOS mockup placeholder</span>
				</div>
			</div>
		);
	}

	// Background Carousel Blur (Fatigue)
	if (config.type === 'carousel-blur' && config.position === 'center') {
		return (
			<div className="absolute inset-0 opacity-5 pointer-events-none">
				{/* TODO: Add when asset is ready */}
				<div className="w-full h-full bg-gradient-to-br from-orange-500/20 to-yellow-500/20" />
			</div>
		);
	}

	return null;
}