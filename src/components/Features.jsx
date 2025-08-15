import { motion } from 'framer-motion';
import { Eye, Brain, Target, Code } from 'lucide-react';

const features = [
  {
    icon: Eye,
    title: "Visual Learning",
    description: "Interactive animations and simulations make complex algorithms easy to understand"
  },
  {
    icon: Brain,
    title: "Pattern Recognition",
    description: "Learn to identify common patterns and approaches across different problem types"
  },
  {
    icon: Target,
    title: "Real-world Examples",
    description: "Connect abstract concepts to practical applications you encounter daily"
  },
  {
    icon: Code,
    title: "Hands-on Practice",
    description: "Solve problems with guided explanations and multiple difficulty levels"
  }
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