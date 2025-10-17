// FILE: src/app/adhealth/_components/sections/FormSection.tsx

'use client';
import { CheckCircle } from 'lucide-react';
import { AuditForm } from '../cta/AuditForm';

export function FormSection() {
	return (
		<section className="py-12 md:py-16 px-4" id="audit-form">
			<div className="container mx-auto max-w-2xl">
				<div className="bg-[#1a2332] p-6 md:p-10 rounded-2xl border border-gray-800/50 shadow-2xl">
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
						Get Your Free{' '}
						<span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
							Ad Health Audit
						</span>
					</h2>

					{/* Trust Badges - More Specific per brief */}
					<div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-8 text-sm flex-wrap">
						<div className="flex items-center gap-2 text-gray-300">
							<CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
							<span>90 seconds to request</span>
						</div>
						<div className="flex items-center gap-2 text-gray-300">
							<CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
							<span>Delivered within 48 hours</span>
						</div>
						<div className="flex items-center gap-2 text-gray-300">
							<CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
							<span>100% confidential</span>
						</div>
					</div>

					<AuditForm />

					{/* Social Proof Indicator - Real-time feel */}
					<div className="mt-6 text-center">
						<p className="text-sm text-gray-400">
							<span className="inline-flex items-center gap-2">
								<span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
								<span className="text-green-400 font-semibold">157 audits completed this month</span>
							</span>
						</p>
						<p className="text-xs text-gray-500 mt-1">
							Last submission 12 minutes ago
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
