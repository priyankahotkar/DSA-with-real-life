import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Users, BookOpen } from 'lucide-react';
import TopicGrid from '../components/TopicGrid';
import Hero from '../components/Hero';
import Features from '../components/Features';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="home"
    >
      <Hero />
      <Features />
      <section id="topics" className="topics-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title gradient-text">Master Data Structures & Algorithms</h2>
            <p className="section-subtitle">
              Learn through interactive visualizations, real-world examples, and hands-on practice
            </p>
          </motion.div>
          <TopicGrid />
        </div>
      </section>
    </motion.div>
  );
};

export default Home;