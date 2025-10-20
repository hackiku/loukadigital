// src/app/_components/services/SocialFloaters.tsx
'use client';

import Image from 'next/image';

const socials = [
	{
		name: 'Facebook',
		icon: '/assets/icons/facebook-icon.svg',
		color: '#1877F2',
		position: 'top-[20%] left-[15%]',
		size: 'w-12 h-12',
		delay: 0,
	},
	{
		name: 'Instagram',
		icon: '/assets/icons/instagram-icon.svg',
		color: '#E4405F',
		position: 'top-[60%] left-[8%]',
		size: 'w-14 h-14',
		delay: 0.8,
	},
	{
		name: 'Meta',
		icon: '/assets/icons/meta-icon.svg',
		color: '#0081FB',
		position: 'top-[40%] left-[20%]',
		size: 'w-10 h-10',
		delay: 0.4,
	},
	{
		name: 'TikTok',
		icon: '/assets/icons/meta-icon.svg', // Fallback, replace if you have tiktok
		color: '#000000',
		position: 'top-[70%] left-[12%]',
		size: 'w-11 h-11',
		delay: 1.2,
	},
];

export function SocialFloaters() {
	return (
		<div className="absolute inset-0 pointer-events-none overflow-hidden">
			{socials.map((social, index) => (
				<div
					key={social.name}
					className={`absolute ${social.position} ${social.size} opacity-20 hover:opacity-40 transition-opacity`}
					style={{
						animation: `float-gentle ${5 + index}s ease-in-out infinite`,
						animationDelay: `${social.delay}s`,
					}}
				>
					{/* Glow effect behind */}
					<div
						className="absolute inset-0 blur-xl"
						style={{
							background: `radial-gradient(circle, ${social.color}40 0%, transparent 70%)`,
						}}
					/>

					{/* Icon */}
					<div className="relative w-full h-full">
						<Image
							src={social.icon}
							alt={social.name}
							fill
							className="object-contain drop-shadow-lg"
						/>
					</div>
				</div>
			))}

			<style jsx>{`
        @keyframes float-gentle {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-15px) translateX(10px) rotate(3deg);
          }
          50% {
            transform: translateY(-8px) translateX(-8px) rotate(-2deg);
          }
          75% {
            transform: translateY(-12px) translateX(5px) rotate(2deg);
          }
        }
      `}</style>
		</div>
	);
}