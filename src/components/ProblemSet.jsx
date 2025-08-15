import { motion } from 'framer-motion';
import { ExternalLink, Target, Star, Code, Clock, HardDrive, Info } from 'lucide-react';
import { useState } from 'react';

const ProblemSet = ({ problems }) => {
  const [expandedProblems, setExpandedProblems] = useState(new Set());

  const toggleProblem = (index) => {
    const newExpanded = new Set(expandedProblems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedProblems(newExpanded);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return '#22c55e';
      case 'medium': return '#f59e0b';
      case 'hard': return '#ef4444';
      default: return '#8B5CF6';
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  return (
    <div className="problem-set">
      <h2 className="section-title">
        <Target size={24} />
        Practice Problems
      </h2>
      
      <div className="problems-grid">
        {problems?.map((problem, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="problem-card"
          >
            <div className="problem-header">
              <h3>{problem.title}</h3>
              <div className="problem-meta">
                <span 
                  className="difficulty-indicator"
                  style={{ backgroundColor: getDifficultyColor(problem.difficulty) }}
                >
                  {problem.difficulty}
                </span>
                <div className="problem-rating">
                  <Star size={14} fill="#fbbf24" color="#fbbf24" />
                  <span>{problem.rating}</span>
                </div>
              </div>
            </div>
            
            <p className="problem-description">{problem.description}</p>
            
            <div className="problem-concepts">
              <h4>Key Concepts:</h4>
              <div className="concepts-tags">
                {problem.concepts?.map((concept, i) => (
                  <span key={i} className="concept-tag">{concept}</span>
                ))}
              </div>
            </div>
            
            <div className="problem-hints">
              <h4>Approach Hints:</h4>
              <ul>
                {problem.hints?.map((hint, i) => (
                  <li key={i}>{hint}</li>
                ))}
              </ul>
            </div>

            {/* Time and Space Complexity */}
            {(problem.timeComplexity || problem.spaceComplexity) && (
              <div className="complexity-info">
                <h4>Complexity Analysis:</h4>
                <div className="complexity-grid">
                  {problem.timeComplexity && (
                    <div className="complexity-item">
                      <Clock size={16} />
                      <span><strong>Time:</strong> {problem.timeComplexity}</span>
                    </div>
                  )}
                  {problem.spaceComplexity && (
                    <div className="complexity-item">
                      <HardDrive size={16} />
                      <span><strong>Space:</strong> {problem.spaceComplexity}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            <div className="problem-links">
              {problem.links?.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="problem-link"
                >
                  {link.platform}
                  <ExternalLink size={16} />
                </a>
              ))}
            </div>

            {/* Expandable Solution Section */}
            {(problem.javaSolution || problem.explanation) && (
              <div className="solution-section">
                <button 
                  className="expand-button"
                  onClick={() => toggleProblem(index)}
                >
                  <Code size={16} />
                  {expandedProblems.has(index) ? 'Hide Solution' : 'Show Solution'}
                </button>
                
                {expandedProblems.has(index) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="solution-content"
                  >
                    {problem.explanation && (
                      <div className="solution-explanation">
                        <h4>
                          <Info size={16} />
                          Solution Explanation
                        </h4>
                        <p>{problem.explanation}</p>
                      </div>
                    )}
                    
                    {problem.javaSolution && (
                      <div className="java-solution">
                        <div className="solution-header">
                          <h4>
                            <Code size={16} />
                            Java Implementation
                          </h4>
                          <button 
                            className="copy-button"
                            onClick={() => copyToClipboard(problem.javaSolution)}
                            title="Copy to clipboard"
                          >
                            Copy
                          </button>
                        </div>
                        <pre className="code-block">
                          <code>{problem.javaSolution}</code>
                        </pre>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProblemSet;