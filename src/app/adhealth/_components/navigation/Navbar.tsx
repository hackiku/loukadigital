// src/app/adhealth/_components/navigation/Navbar.tsx

"use client";

import Image from "next/image";

export function AdHealthNavbar() {

	return (
		<div className="w-full">
			<a
				href="/"
				className="fixed top-16 left-4 z-40 block group"
				aria-label="Louka Digital"
			>
				<Image
					width={44}
					height={44}
					src={'/assets/logos/louka-logo.jpg'}
					className="rounded-full"
					alt="Louka Digital Logo"
				/>
			</a>
		</div>
	);
}
