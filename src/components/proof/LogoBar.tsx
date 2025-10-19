// src/components/proof/LogoBar.tsx
import Image from 'next/image';

const logos = [
	{ name: 'Logitech', src: '/assets/logos/logitech.png' },
	{ name: 'Babbel', src: '/assets/logos/babbel.png' },
	{ name: 'Casio', src: '/assets/logos/casio.png' },
	{ name: 'Samsung', src: '/assets/logos/samsung.png' },
	{ name: 'Melbourne Capital Group', src: '/assets/logos/melbourne-capital-group.svg' },
	{ name: 'Electronic Arts', src: '/assets/logos/ea-games.png' },
	{ name: 'Triumph Games', src: '/assets/logos/triumph-games.png' },
];

export function LogoBar() {
	return (
		<div className="w-full">
			{/* Mobile: 3 columns */}
			<div className="grid grid-cols-3 gap-6 sm:hidden">
				{logos.map((logo) => (
					<div key={logo.name} className="w-full h-20 flex items-center justify-center">
						<div className="relative w-full h-full">
							<Image
								src={logo.src}
								alt={logo.name}
								fill
								className={`object-contain p-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ${logo.name === 'Triumph Games' ? 'scale-75' : ''
									}`}
							/>
						</div>
					</div>
				))}
			</div>

			{/* Desktop: 4-7 columns */}
			<div className="hidden sm:grid sm:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
				{logos.map((logo) => (
					<div key={logo.name} className="w-full h-24 flex items-center justify-center">
						<div className="relative w-full h-full hover:scale-110 transition-transform duration-300">
							<Image
								src={logo.src}
								alt={logo.name}
								fill
								className={`object-contain p-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ${logo.name === 'Triumph Games' ? 'scale-75' : ''
									}`}
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}