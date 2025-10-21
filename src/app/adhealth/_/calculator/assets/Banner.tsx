// src/app/adhealth/audit/assets/Banner.tsx
'use client';
import Image from 'next/image';

interface BannerProps {
	src: string;
	alt?: string;
	className?: string;
}

export function Banner({ src, alt = 'Asset', className = '' }: BannerProps) {
	// Don't render if no src
	if (!src) {
		return (
			<div className={`relative w-full h-full rounded-2xl border-2 border-border/50 bg-muted/30 flex items-center justify-center ${className}`}>
				<span className="text-muted-foreground text-sm">No banner available</span>
			</div>
		);
	}

	return (
		<div className={`relative w-full h-full rounded-2xl border-2 border-border/50 bg-muted/30 overflow-hidden ${className}`}>
			<Image
				src={src}
				alt={alt}
				fill
				className="object-cover"
			/>
		</div>
	);
}