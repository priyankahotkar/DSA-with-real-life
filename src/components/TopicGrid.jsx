import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { topics } from '../data/topics';

const TopicGrid = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="topic-grid"
    >
      {topics.map((topic) => (
        <motion.div
          key={topic.id}
          variants={itemVariants}
          whileHover={{ y: -8 }}
          className="topic-card"
        >
          <Link to={`/topic/${topic.id}`} className="topic-link">
            <div className="topic-header">
              <div className="topic-icon" style={{ backgroundColor: topic.color + '20' }}>
                <topic.icon size={24} color={topic.color} />
              </div>
              <div className="topic-meta">
                <span className="difficulty" data-level={topic.difficulty}>
                  {topic.difficulty}
                </span>
                <span className="duration">{topic.estimatedTime}</span>
              </div>
            </div>
            
            <h3 className="topic-title">{topic.title}</h3>
            <p className="topic-description">{topic.description}</p>
            
            <div className="topic-stats">
              <span className="stat">
                <strong>{topic.concepts}</strong> Concepts
              </span>
              <span className="stat">
                <strong>{topic.problems}</strong> Problems
              </span>
            </div>
            
            <div className="topic-tags">
              {topic.tags.slice(0, 3).map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TopicGrid;