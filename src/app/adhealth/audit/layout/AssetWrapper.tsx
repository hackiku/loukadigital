// src/app/adhealth/audit/layout/AssetWrapper.tsx
'use client';
import Image from 'next/image';

interface Asset {
	type: 'banner' | 'mockup' | 'image' | 'stat';
	colSpan: number;
	rowSpan: number;
	src?: string;
	content?: string;
}

interface AssetWrapperProps {
	assets: Asset[];
}

export function AssetWrapper({ assets }: AssetWrapperProps) {
	return (
		<>
			{assets.map((asset, idx) => {
				const colSpanClass = `col-span-${asset.colSpan}`;
				const rowSpanClass = `row-span-${asset.rowSpan}`;

				// Banner - full width image
				if (asset.type === 'banner') {
					return (
						<div
							key={idx}
							className={`${colSpanClass} ${rowSpanClass} relative rounded-2xl border-2 border-border/50 bg-muted/30 overflow-hidden`}
						>
							{asset.src && (
								<Image
									src={asset.src}
									alt="Asset"
									fill
									className="object-cover"
								/>
							)}
						</div>
					);
				}

				// Mockup - phone/device mockup
				if (asset.type === 'mockup') {
					return (
						<div
							key={idx}
							className={`${colSpanClass} ${rowSpanClass} relative rounded-2xl border-2 border-border/50 bg-card/50 backdrop-blur-sm p-6 flex items-center justify-center`}
						>
							{asset.src && (
								<div className="relative w-full h-full">
									<Image
										src={asset.src}
										alt="Mockup"
										fill
										className="object-contain"
									/>
								</div>
							)}
						</div>
					);
				}

				// Stat card - text-based stat
				if (asset.type === 'stat') {
					return (
						<div
							key={idx}
							className={`${colSpanClass} ${rowSpanClass} rounded-2xl border-2 border-purple-500/30 bg-purple-500/10 p-6 flex items-center justify-center text-center`}
						>
							<p className="text-2xl font-bold text-foreground">
								{asset.content}
							</p>
						</div>
					);
				}

				// Image - generic image
				return (
					<div
						key={idx}
						className={`${colSpanClass} ${rowSpanClass} relative rounded-2xl border-2 border-border/50 bg-muted/30 overflow-hidden`}
					>
						{asset.src && (
							<Image
								src={asset.src}
								alt="Asset"
								fill
								className="object-cover"
							/>
						)}
					</div>
				);
			})}
		</>
	);
}