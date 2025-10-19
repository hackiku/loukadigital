// src/app/adleak/_components/ui/PlatformIcons.tsx

'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const platforms = [
	{
		name: 'Facebook',
		icon: '/assets/icons/facebook-icon.svg',
		position: { top: '20%', right: '10%' },
		delay: 0,
		color: '#1877F2'
	},
	{
		name: 'Instagram',
		icon: '/assets/icons/instagram-icon.svg',
		position: { top: '60%', right: '5%' },
		delay: 0.2,
		color: '#E4405F'
	},
	{
		name: 'Meta',
		icon: '/assets/icons/meta-icon.svg',
		position: { top: '40%', right: '15%' },
		delay: 0.1,
		color: '#0081FB'
	},
];

export function PlatformIcons() {
	const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

	const handleImageError = (platformName: string) => {
		setImageErrors(prev => ({ ...prev, [platformName]: true }));
	};

	return (
		<div className="absolute inset-0 pointer-events-none overflow-hidden">
			{platforms.map((platform) => (
				<div
					key={platform.name}
					className="absolute animate-float"
					style={{
						...platform.position,
						animationDelay: `${platform.delay}s`,
					}}
				>
					{imageErrors[platform.name] ? (
						// Fallback: elegant circle with platform color
						<div
							className="w-16 h-16 rounded-full flex items-center justify-center"
							style={{
								backgroundColor: `${platform.color}20`,
								border: `2px solid ${platform.color}40`,
							}}
						>
							<div
								className="w-8 h-8 rounded-full"
								style={{
									backgroundColor: `${platform.color}60`,
								}}
							/>
						</div>
					) : (
						// Try to load actual icon
						<div className="relative w-16 h-16 opacity-40 hover:opacity-60 transition-opacity">
							<Image
								src={platform.icon}
								alt={`${platform.name} icon`}
								fill
								className="object-contain"
								onError={() => handleImageError(platform.name)}
							/>
						</div>
					)}
				</div>
			))}

			<style jsx>{`
				@keyframes float {
					0%, 100% {
						transform: translateY(0px) rotate(0deg);
					}
					33% {
						transform: translateY(-20px) rotate(5deg);
					}
					66% {
						transform: translateY(-10px) rotate(-5deg);
					}
				}

				.animate-float {
					animation: float 6s ease-in-out infinite;
				}
			`}</style>
		</div>
	);
}