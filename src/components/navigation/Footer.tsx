// src/components/navigation/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
	return (
		<footer className="bg-muted/30 border-t border-border/50">
			<div className="px-4 sm:px-12 md:px-16 lg:px-24 py-16">
				<div className="max-w-7xl mx-auto">
					<div className="grid md:grid-cols-4 gap-12 mb-12">
						{/* Brand */}
						<div className="md:col-span-2 space-y-4">
							<Image
								src="/assets/logos/louka-logo.jpg"
								alt="Louka Digital"
								width={48}
								height={48}
								className="rounded-full"
							/>
							<p className="text-muted-foreground leading-relaxed max-w-md">
								Growth marketing for wellness, DTC, and digital-first brands ready to scale.
							</p>
						</div>

						{/* Services */}
						<div>
							<h4 className="font-bold text-foreground mb-4">Services</h4>
							<ul className="space-y-3 text-muted-foreground">
								<li className="hover:text-foreground transition-colors cursor-pointer">
									Lead Generation
								</li>
								<li className="hover:text-foreground transition-colors cursor-pointer">
									Paid Media
								</li>
								<li className="hover:text-foreground transition-colors cursor-pointer">
									Creative Production
								</li>
								<li className="hover:text-foreground transition-colors cursor-pointer">
									Growth Strategy
								</li>
							</ul>
						</div>

						{/* Contact */}
						<div>
							<h4 className="font-bold text-foreground mb-4">Contact</h4>
							<ul className="space-y-3 text-muted-foreground">
								<li>
									<a
										href="mailto:info@loukadigital.xyz"
										className="hover:text-foreground transition-colors"
									>
										info@loukadigital.xyz
									</a>
								</li>
								<li>
									<a
										href="https://calendly.com/loukadigital/meeting"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-foreground transition-colors"
									>
										Book a Call
									</a>
								</li>
							</ul>
						</div>
					</div>

					{/* Bottom */}
					<div className="pt-8 text-center text-muted-foreground text-sm">
						<p>© 2025 Louka Digital. All rights reserved.</p>
					</div>
				</div>
			</div>
		</footer>
	);
}