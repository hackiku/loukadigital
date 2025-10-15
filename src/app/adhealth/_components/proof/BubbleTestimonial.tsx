// src/app/adhealth/_components/proof/BubbleTestimonial.tsx

import Image from "next/image";
import { Quote } from "lucide-react";

export function BubbleTestimonial() {
	return (
		<div className="flex items-center justify-center gap-4 max-w-sm">
			{/* Quote Icon */}
			{/* <Quote className="w-8 h-8 text-purple-400" /> */}


			{/* Logo */}
			<div className="relative w-32 h-12 mb-2">
				<Image
					src="/assets/logos/provider-partners.png"
					fill
					className="object-contain object-left"
					alt="Provider Partners"
				/>
			</div>
			{/* Quote Text */}
			<p className="text-sm text-muted-foreground/50 font-regular ">
				Uncovered $17,000 in additional revenue we were leaving on the table
			</p>
		</div>
	);
}