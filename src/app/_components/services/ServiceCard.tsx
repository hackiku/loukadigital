// src/app/_components/services/ServiceCard.tsx
import { Target, Zap, Sparkles, TrendingUp } from 'lucide-react';
import { ServiceFeature } from './ServiceFeature';
import type { Service } from '~/data/services';

const iconMap = {
	Target,
	Zap,
	Sparkles,
	TrendingUp,
};

interface ServiceCardProps {
	service: Service;
	index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
	const isEven = index % 2 === 0;
	const Icon = iconMap[service.icon as keyof typeof iconMap];

	return (
		<div className="w-full">
			<div className="bg-card/30 rounded-3xl overflow-hidden">
				<div className={`grid lg:grid-cols-2 gap-8 lg:gap-0 ${isEven ? '' : 'lg:grid-flow-dense'}`}>
					{/* Text Content */}
					<div className={`p-8 md:p-12 flex flex-col justify-center ${isEven ? 'lg:pr-16' : 'lg:pl-16 lg:col-start-2'}`}>
						{/* Icon */}
						<div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6`}>
							{Icon && <Icon className="w-7 h-7 text-white" />}
						</div>

						{/* Title */}
						<h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
							{service.title}
						</h3>

						{/* Description */}
						<p className="text-lg text-muted-foreground leading-relaxed mb-6">
							{service.description}
						</p>

						{/* Features List - Mobile/Tablet */}
						<ul className="space-y-2 lg:hidden">
							{service.features.map((feature) => (
								<li key={feature} className="flex items-center gap-2 text-muted-foreground">
									<div className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
									<span className="text-sm">{feature}</span>
								</li>
							))}
						</ul>
					</div>

					{/* Floating Features - Desktop Only */}
					<div className={`relative hidden lg:block min-h-[400px] ${isEven ? 'lg:col-start-2' : 'lg:col-start-1'}`}>
						{service.features.map((feature, featureIndex) => (
							<ServiceFeature
								key={feature}
								feature={feature}
								index={featureIndex}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}