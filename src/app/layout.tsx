// src/app/layout.tsx (UPDATED)

import "~/styles/globals.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { TRPCReactProvider } from "~/trpc/react";
import { ThemeProvider } from "~/components/theme-provider";

// layout
import { Nav } from '~/components/navigation/Nav';
import { Footer } from '~/components/navigation/Footer';


export const metadata: Metadata = {
	title: "Louka Digital",
	description: "Ad health audits for growing brands",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={`${geist.variable} dark`} suppressHydrationWarning>
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem={false}
					disableTransitionOnChange
				>
					<TRPCReactProvider>
						<Nav />
						{children}
						<Footer />
					</TRPCReactProvider>

				</ThemeProvider>
			</body>
		</html>
	);
}