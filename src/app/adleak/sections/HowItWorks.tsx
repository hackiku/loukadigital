// src/app/adleak/sections/HowItWorks.tsx
'use client';

import { Calculator, Mail, Calendar } from 'lucide-react';

export function HowItWorks() {
	return (
		<div className="max-w-5xl mx-auto">
			{/* Header */}
			<div className="text-center mb-16">
				<h2 className="text-4xl md:text-5xl font-bold mb-4">
					How It Works
				</h2>
				<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
					Three steps to stop the bleeding
				</p>
			</div>

			{/* Steps */}
			<div className="grid md:grid-cols-3 gap-8">
				{/* Step 1 */}
				<div className="relative">
					<div className="flex flex-col items-center text-center">
						<div className="w-16 h-16 rounded-2xl bg-purple-500/20 border-2 border-purple-500/50 flex items-center justify-center mb-4">
							<Calculator className="w-8 h-8 text-purple-400" />
						</div>
						<div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-purple-600 text-white text-sm font-bold flex items-center justify-center">
							1
						</div>
						<h3 className="text-xl font-bold mb-2">Calculate Your Leak</h3>
						<p className="text-sm text-muted-foreground">
							Use the interactive audit tool to identify which of the 7 sins are bleeding your budget. Download the PDF checklist.
						</p>
					</div>
				</div>

				{/* Step 2 */}
				<div className="relative">
					<div className="flex flex-col items-center text-center">
						<div className="w-16 h-16 rounded-2xl bg-blue-500/20 border-2 border-blue-500/50 flex items-center justify-center mb-4">
							<Mail className="w-8 h-8 text-blue-400" />
						</div>
						<div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center">
							2
						</div>
						<h3 className="text-xl font-bold mb-2">Send Screenshots</h3>
						<p className="text-sm text-muted-foreground">
							Email us screenshots of your ad account. No login access needed, no complicated setup. Just screenshots.
						</p>
					</div>
				</div>

				{/* Step 3 */}
				<div className="relative">
					<div className="flex flex-col items-center text-center">
						<div className="w-16 h-16 rounded-2xl bg-green-500/20 border-2 border-green-500/50 flex items-center justify-center mb-4">
							<Calendar className="w-8 h-8 text-green-400" />
						</div>
						<div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-green-600 text-white text-sm font-bold flex items-center justify-center">
							3
						</div>
						<h3 className="text-xl font-bold mb-2">Book Your Audit</h3>
						<p className="text-sm text-muted-foreground">
							Get the full £697 audit. Limited free spots available. If we don't find the waste, you don't pay.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}