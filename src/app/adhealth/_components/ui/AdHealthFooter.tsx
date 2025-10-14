// src/app/adhealth/_components/ui/AdHealthFooter.tsx

"use client";


export function AdHealthFooter() {

	return (
		<footer className="bg-purple-300 text-black py-8">
			<div className="container mx-auto px-4">
				<div className="text-center mb-6">
					<p className="font-bold text-sm md:text-base">
						2025 © | Copyright by Louka Digital Ltd | All Rights Reserved |
						<a className="text-black hover:underline ml-1 mr-1" href="/privacy">Privacy Policy</a> |
						<a className="text-black hover:underline ml-1" href="/terms">Terms</a>
					</p>
				</div>
				<div className="max-w-4xl mx-auto">
					<div className="text-xs text-gray-700 leading-relaxed text-center">
						<p>
							The ad account audit and recommendations provided are based on the information you submit.
							Results and savings potential are estimates and not guarantees. Actual performance improvements
							will vary based on implementation, market conditions, and other factors beyond our control.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
