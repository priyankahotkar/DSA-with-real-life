import { motion } from 'framer-motion';
import { ArrowRight, Play, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-content"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hero-badge"
          >
            <Zap size={16} />
            <span>Interactive Learning Platform</span>
          </motion.div>
          
          <h1 className="hero-title">
            Master <span className="gradient-text">Data Structures</span>
            <br />& <span className="gradient-text">Algorithms</span>
          </h1>
          
          <p className="hero-description">
            Learn DSA through real-world simulations, visual animations, and detailed explanations. 
            From complete beginner to advanced practitioner - we've got you covered.
          </p>
          
          <div className="hero-actions">
            <Link to="/#topics" className="btn-primary">
              Start Learning <ArrowRight size={18} />
            </Link>
            <button className="btn-secondary">
              <Play size={18} />
              Watch Demo
            </button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hero-visual"
        >
          <div className="floating-cards">
            {['Arrays', 'Trees', 'Graphs', 'Sorting'].map((topic, index) => (
              <motion.div
                key={topic}
                className="floating-card"
                initial={{ y: 0 }}
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              >
                {topic}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;