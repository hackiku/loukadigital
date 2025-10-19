// src/app/adhealth/_components/navigation/Footer.tsx

"use client";


export default function Footer() {

	return (
		<footer className="rounded-lg bg-gradient-to-br from-[#FEC5E2] to-[#81B3CA] m-5 p-8 md:p-12 mt-24">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-5xl md:text-7xl font-extrabold mb-4">LOUKA.</h2>
				<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
					<p className="text-sm text-gray-700">
						2025 © Louka Digital Ltd | All Rights Reserved
					</p>
					<div className="flex gap-6 text-sm text-gray-700">
						<a href="/privacy" className="hover:text-gray-900 transition-colors">
							Privacy
						</a>
						<a href="/terms" className="hover:text-gray-900 transition-colors">
							Terms
						</a>
						<a href="/contact" className="hover:text-gray-900 transition-colors">
							Contact
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
