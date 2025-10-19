// src/app/adhealth/_components/cta/EmailForm.tsx
'use client';
import { useState } from 'react';

interface EmailFormProps {
	isGoodFit: boolean;
	mobile?: boolean;
}

export function EmailForm({ isGoodFit, mobile = false }: EmailFormProps) {
	const [email, setEmail] = useState('');

	if (!isGoodFit) {
		return (
			<div className={`space-y-3 ${mobile ? 'w-full' : ''}`}>
				<p className="text-xs text-muted-foreground text-center">
					Your account is already well-optimized. Explore our other services.
				</p>
			<a
				href="/contact"
				className="block w-full py-3 px-4 bg-muted/50 hover:bg-muted border border-border/50 text-foreground font-semibold rounded-xl transition-all text-center text-sm"
        >
				Explore Ad Services
			</a>
      </div >
    );
	}

	return (
		<div className={`flex gap-3 ${mobile ? 'flex-col' : 'flex-row items-end'}`}>
			<input
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				placeholder="Enter your email"
				className={`${mobile ? 'w-full' : 'flex-1'} px-4 py-3 bg-background/50 border border-border/50 rounded-xl text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all`}
			/>

			<button className={`${mobile ? 'w-full' : 'flex-shrink-0'} py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold rounded-xl transition-all hover:scale-[1.02] text-sm relative overflow-hidden group`}>
				<span className="relative z-10">
					Get AdLeak Audit <span className="opacity-60">— £697</span>
				</span>

				{/* Scarcity bar */}
				<div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#D8330C] to-orange-600 opacity-80" />
			</button>
		</div>
	);
}