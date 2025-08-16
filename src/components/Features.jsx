import { motion } from 'framer-motion';
import {
    Eye,
    Brain,
    Target,
    Code,
    Layers,
    BookOpen,
    Trophy,
    Gauge,
} from 'lucide-react';

const features = [
	{
		icon: Eye,
		title: 'Visual Learning',
		description:
			'Interactive animations and simulations make complex algorithms easy to understand',
	},
	{
		icon: Brain,
		title: 'Pattern Recognition',
		description:
			'Learn to identify common patterns and approaches across different problem types',
	},
	{
		icon: Target,
		title: 'Real-world Examples',
		description:
			'Connect abstract concepts to practical applications you encounter daily',
	},
	{
		icon: Code,
		title: 'Hands-on Practice',
		description:
			'Solve problems with guided explanations and multiple difficulty levels',
	},
	{
		icon: Layers,
		title: 'Step-by-Step Breakdown',
		description:
			'Follow detailed, step-by-step walkthroughs for both concepts and code implementations',
	},
	{
		icon: BookOpen,
		title: 'In-depth Content',
		description:
			'Explore comprehensive guides covering core concepts, Java code, and common patterns',
	},
	{
		icon: Trophy,
		title: 'Interview-Ready Skills',
		description:
			'Master key concepts and problems frequently asked in top tech interviews to ace your next role.',
	},
	{
		icon: Gauge,
		title: 'Performance Insights',
		description:
			'Grasp time and space complexity with clear, concise explanations for every algorithm and data structure.',
	},
];

const Features = () => {
	return (
		<section className="features">
			<div className="container">
				<div className="features-grid">
					{features.map((feature, index) => (
						<motion.div
							key={feature.title}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="feature-card"
						>
							<div className="feature-icon">
								<feature.icon size={24} />
							</div>
							<h3 className="feature-title">{feature.title}</h3>
							<p className="feature-description">{feature.description}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;