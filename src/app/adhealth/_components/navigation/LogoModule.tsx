// src/app/adhealth/_components/navigation/LogoModule.tsx

'use client';
import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

export function LogoModule() {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div className="relative">
			{/* Logo Button */}
			<button
				onClick={() => setIsExpanded(!isExpanded)}
				className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden hover:scale-110 transition-transform shadow-lg hover:shadow-xl"
			>
				<Image
					src="/assets/logos/louka-logo.jpg"
					alt="Louka Digital"
					fill
					className="object-cover"
				/>
			</button>

			{/* Expanded Info Panel */}
			<div
				className={`
          absolute top-0 left-0 z-10
          bg-card/95 backdrop-blur-xl
          rounded-2xl shadow-2xl border border-border/50
          transition-all duration-500 ease-out origin-top-left
          ${isExpanded
						? 'scale-100 opacity-100 pointer-events-auto'
						: 'scale-95 opacity-0 pointer-events-none'
					}
        `}
				style={{
					minWidth: '320px',
					maxWidth: '400px'
				}}
			>
				{/* Close button */}
				<button
					onClick={() => setIsExpanded(false)}
					className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
				>
					<X className="w-5 h-5" />
				</button>

				{/* Content */}
				<div className="p-6">
					<div className="flex items-center gap-4 mb-4">
						<div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
							<Image
								src="/assets/logos/louka-logo.jpeg"
								alt="Louka Digital"
								fill
								className="object-cover"
							/>
						</div>
						<div>
							<h3 className="font-bold text-lg">Louka Digital</h3>
							<p className="text-sm text-muted-foreground">Performance Marketing</p>
						</div>
					</div>

					<p className="text-sm text-muted-foreground mb-4 leading-relaxed">
						We build and scale paid ad funnels that convert, backed by strong creative strategy,
						CRO, and transparent data reporting.
					</p>

					<div className="space-y-2">
						<a
							href="/"
							className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
						>
							→ Full Services
						</a>
						<a
							href="/case-studies"
							className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
						>
							→ Case Studies
						</a>
						<a
							href="/contact"
							className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
						>
							→ Contact Us
						</a>
					</div>

					<div className="mt-4 pt-4 border-t border-border/50">
						<p className="text-xs text-muted-foreground">
							Trusted by gaming, healthcare, and SaaS brands
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}