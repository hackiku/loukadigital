// src/app/adhealth/pricing/Guarantee.tsx
'use client';

import { Shield, Clock, TrendingUp } from 'lucide-react';

export function Guarantee() {
	return (
		<div className="max-w-5xl mx-auto">
			{/* Main Guarantee Card */}
			<div className="relative overflow-hidden rounded-3xl border-2 border-green-500/30 bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-background p-8 md:p-12 mb-8">
				{/* Glow effect */}
				<div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent opacity-50 blur-3xl" />

				<div className="relative z-10 text-center">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/40 mb-6">
						<Shield className="w-4 h-4 text-green-400" />
						<span className="text-sm font-bold text-green-400">Zero Risk Guarantee</span>
					</div>

					<h3 className="text-3xl md:text-5xl font-black mb-4">
						If We Don't Find At Least{' '}
						<span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
							£697 in Monthly Waste
						</span>
						, You Don't Pay
					</h3>

					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						We're that confident. Either this audit saves you more than it costs, or it's free. Simple.
					</p>
				</div>
			</div>

			{/* Feature Grid */}
			<div className="grid md:grid-cols-3 gap-6">
				{/* 48hr Delivery */}
				<div className="p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
					<div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mb-4">
						<Clock className="w-6 h-6 text-purple-400" />
					</div>
					<h4 className="text-xl font-bold mb-2">48-Hour Delivery</h4>
					<p className="text-sm text-muted-foreground">
						Request takes 90 seconds. Full audit in your inbox within 2 business days. No waiting around.
					</p>
				</div>

				{/* Money-Back */}
				<div className="p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
					<div className="w-12 h-12 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center mb-4">
						<Shield className="w-6 h-6 text-green-400" />
					</div>
					<h4 className="text-xl font-bold mb-2">Full Refund Promise</h4>
					<p className="text-sm text-muted-foreground">
						Don't find enough waste to justify the cost? We refund every penny. You literally can't lose.
					</p>
				</div>

				{/* Priority Support */}
				<div className="p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
					<div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-4">
						<TrendingUp className="w-6 h-6 text-blue-400" />
					</div>
					<h4 className="text-xl font-bold mb-2">Priority Fix Support</h4>
					<p className="text-sm text-muted-foreground">
						Not just a PDF dump. We walk you through the top 3 fixes in a 30-min implementation call.
					</p>
				</div>
			</div>

			{/* Scarcity Note */}
			<div className="mt-8 text-center">
				<p className="text-sm text-muted-foreground">
					<span className="font-bold text-red-400">7 audit slots remaining</span> this month •
					Price increases to £897 on Nov 1st
				</p>
			</div>
		</div>
	);
}