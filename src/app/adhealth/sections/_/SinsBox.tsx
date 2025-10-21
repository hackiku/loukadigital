// src/app/adhealth/sections/SinsBox.tsx
import { ArrowDown, ChevronDown } from "lucide-react";

export function SinsBox() {
	return (
		<div className="mx-auto max-w-xl mb-12">
			<div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500/10 via-red-500/5 to-orange-600/10 p-6 md:p-8">
				<div className="relative z-10 text-center">
					{/* <span className="text-2xl italic">self-diagnose your</span> */}
					<h3 className="text-3xl md:text-5xl font-black mt-2 mb-4 leading-tight">
						<span className="bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 bg-clip-text text-transparent">
							The 7 Sins <br />of Meta Ads
						</span>
						{/* <span className="text-2xl italic mb-12">(for free)</span> */}
					</h3>

					{/* Animated arrow */}
					<div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange-500/20 animate-bounce">
						<ChevronDown className="w-5 h-5 text-orange-400" />
					</div>
				</div>
			</div>
		</div>
	);
}