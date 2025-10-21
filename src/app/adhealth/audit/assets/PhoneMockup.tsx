// src/app/adhealth/audit/assets/PhoneMockup.tsx
'use client';
import Image from 'next/image';

interface PhoneMockupProps {
	src: string;
	alt?: string;
	className?: string;
}

export function PhoneMockup({ src, alt = 'Mockup', className = '' }: PhoneMockupProps) {
	// Don't render if no src
	if (!src) {
		return (
			<div className={`relative w-full h-full rounded-3xl border-4 border-border/50 bg-muted/30 p-6 shadow-2xl flex items-center justify-center ${className}`}>
				<span className="text-muted-foreground text-sm">No mockup available</span>
			</div>
		);
	}

	return (
		<div className={`relative w-full h-full rounded-3xl border-4 border-border/50 bg-card/50 backdrop-blur-sm p-6 shadow-2xl ${className}`}>
			<div className="relative w-full h-full">
				<Image
					src={src}
					alt={alt}
					fill
					className="object-contain"
				/>
			</div>
		</div>
	);
}