import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, BarChart, BookOpen, Code, ExternalLink } from 'lucide-react';
import { topics } from '../data/topics';
import CodeVisualizer from '../components/CodeVisualizer';
import ConceptVisuals from '../components/ConceptVisuals';
import ProblemSet from '../components/ProblemSet';
import PatternSection from '../components/PatternSection';
import AnimatedExplanation from '../components/AnimatedExplanation';

const TopicDetail = () => {
  const { topicId } = useParams();
  const topic = topics.find(t => t.id === topicId);

  if (!topic) {
    return (
      <div className="container" style={{ paddingTop: '100px' }}>
        <h1>Topic not found</h1>
        <Link to="/" className="btn-primary">Go Home</Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="topic-detail"
    >
      <div className="container">
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="topic-header-detail"
        >
          <Link to="/" className="back-btn">
            <ArrowLeft size={20} />
            Back to Topics
          </Link>
          
          <div className="topic-intro">
            <div className="topic-meta-detail">
              <div className="topic-icon-large" style={{ backgroundColor: topic.color + '20' }}>
                <topic.icon size={32} color={topic.color} />
              </div>
              <div>
                <h1 className="topic-title-detail">{topic.title}</h1>
                <div className="topic-badges">
                  <span className={`difficulty-badge ${topic.difficulty.toLowerCase()}`}>
                    <BarChart size={16} />
                    {topic.difficulty}
                  </span>
                  <span className="time-badge">
                    <Clock size={16} />
                    {topic.estimatedTime}
                  </span>
                </div>
              </div>
            </div>
            <p className="topic-description-detail">{topic.description}</p>
          </div>
        </motion.div>

        <div className="topic-content">
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="section"
          >
            <h2 className="section-title">
              <BookOpen size={24} />
              What is {topic.title}?
            </h2>
            <AnimatedExplanation 
              explanation={topic.explanation}
              steps={topic.explanationSteps || []}
              autoPlayInterval={4000}
            />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="section"
          >
            <h2 className="section-title">
              <Code size={24} />
              Visual Intuition & Real-world Scenarios
            </h2>
            <ConceptVisuals topic={topic} />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="section"
          >
            <h2 className="section-title">
              <Code size={24} />
              Visual Implementation
            </h2>
            <CodeVisualizer topic={topic} />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="section"
          >
            <PatternSection patterns={topic.patterns} />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="section"
          >
            <ProblemSet problems={topic.problemSet} />
          </motion.section>
        </div>
      </div>
    </motion.div>
  );
};

export default TopicDetail;