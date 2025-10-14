// src/app/adhealth/_components/sections/HeroSection.tsx

import { AuditDrawer } from '../cta/AuditDrawer';

export function HeroSection() {
	return (
		<section className="pt-32 pb-12">
			<div className="flex flex-col items-center gap-4 mx-auto max-w-4xl text-center">
				<span className="rounded-full bg-purple-500/10 border border-purple-500/20 px-4 py-1 text-sm text-purple-300">
					Ad Health
				</span>

				<h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4">
					<span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
						Find your monthly{' '}
					</span>
					<span className="relative inline-block">
						<span className="relative inline-block px-4 py-2 rounded-xl overflow-hidden">
							{/* Liquid fill effect */}
							<span className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl">
								<span
									className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-red-500/40 to-orange-500/40 rounded-xl animate-liquid-fill"
									style={{ height: '66%' }}
								/>
								{/* Animated wave overlay */}
								<span
									className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-red-400/30 to-transparent animate-liquid-wave"
									style={{ height: '66%' }}
								/>
							</span>
							<span className="relative z-10 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent font-extrabold">
								ad spend leak
							</span>
						</span>
					</span>
				</h1>

				<p className="text-lg md:text-2xl text-gray-300 mb-6 max-w-2xl">
					Free expert analysis of your ad accounts
				</p>

				<div className="w-full max-w-md">
					<AuditDrawer />
				</div>
			</div>
		</section>
	);
}