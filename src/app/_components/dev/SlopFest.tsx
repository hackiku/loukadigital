// src/app/_components/dev/SlopFest.tsx

"use client";
// import { useState, useEffect } from 'react';

export default function SlopFest() {

	return (
		<section className="relative h-[80vh] rounded-3xl overflow-hidden flex items-center justify-center my-24" >
			{/* 45deg Striped Background */}
			<div
				className="absolute inset-0 bg-card/20"
				style={{
					backgroundImage: `repeating-linear-gradient(
					45deg,
					transparent,
					transparent 20px,
					rgba(255, 255, 255, 0.03) 20px,
					rgba(255, 255, 255, 0.03) 40px
				)`
				}}
			/>
			<h2 className="relative z-10 text-[5rem] font-thin tracking-wider text-muted-foreground/20"
				style={{ fontWeight: 100 }}
			>
			SLOPFEST
			</h2 >
		</section>
	);
}