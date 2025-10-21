// src/app/adhealth/_components/navigation/Footer.tsx

"use client"

import { useState } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"

export default function Footer() {
	const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false)

	return (
		<footer className="rounded-lg bg-gradient-to-br from-[#FEC5E2] to-[#81B3CA] m-5 p-8 md:p-12 mt-24">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-5xl md:text-7xl font-extrabold mb-6">LOUKA.</h2>

				{/* Legal Disclaimer - Expandable */}
				<div className="mb-6">
					<button
						onClick={() => setIsDisclaimerOpen(!isDisclaimerOpen)}
						className="flex items-center gap-2 text-lg font-semibold text-gray-900 hover:text-gray-700 transition-colors"
					>
						Important Legal Disclaimer
						{isDisclaimerOpen ? <ChevronDown className="w-5 h-5" /> : <ChevronUp className="w-5 h-5" />}
					</button>

					{isDisclaimerOpen && (
						<div className="mt-4 p-4 bg-white/20 rounded-lg text-sm text-gray-800 leading-relaxed">
							<p>
								The ad account audit and recommendations provided are based on the screenshots and information you
								submit. Results and savings potential are estimates and not guarantees. Actual performance improvements
								will vary based on implementation, market conditions, product quality, and numerous other factors beyond
								our control. This audit is provided for informational purposes only and does not constitute professional
								advertising advice. By submitting your information, you acknowledge that past performance and case
								studies do not guarantee future results.
							</p>
						</div>
					)}
				</div>

				<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
					<p className="text-sm text-gray-700">2025 © | Copyright by Louka Digital Ltd | All Rights Reserved</p>
					<div className="flex gap-6 text-sm text-gray-700">
						<a href="/getresults/privacy" className="hover:text-gray-900 transition-colors">
							Privacy Policy
						</a>
						<a href="/getresults/terms" className="hover:text-gray-900 transition-colors">
							Terms
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}
