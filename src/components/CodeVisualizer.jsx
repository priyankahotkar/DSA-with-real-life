import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, RotateCcw, ChevronRight } from 'lucide-react';

const CodeVisualizer = ({ topic }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedExample, setSelectedExample] = useState(0);

  const examples = topic.codeExamples || [];

  if (!examples.length) return null;

  const currentExample = examples[selectedExample];

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  return (
    <div className="code-visualizer">
      <div className="visualizer-header">
        <div className="example-tabs">
          {examples.map((example, index) => (
            <button
              key={index}
              className={`tab ${index === selectedExample ? 'active' : ''}`}
              onClick={() => setSelectedExample(index)}
            >
              {example.title}
            </button>
          ))}
        </div>
        
        <div className="visualizer-controls">
          <button className="control-btn" onClick={handlePlay}>
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </button>
          <button className="control-btn" onClick={handleReset}>
            <RotateCcw size={18} />
          </button>
        </div>
      </div>

      <div className="visualizer-content">
        <div className="code-section">
          <h4>Implementation</h4>
          <pre className="code-block">
            <code>{currentExample.code}</code>
          </pre>
        </div>

        <div className="visual-section">
          <h4>Visualization</h4>
          <div className="visual-container">
            <motion.div
              className="visual-demo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {currentExample.visualization}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="step-explanation">
        <h4>Step-by-Step Explanation</h4>
        <div className="steps">
          {currentExample.steps?.map((step, index) => (
            <motion.div
              key={index}
              className={`step ${index === currentStep ? 'active' : ''}`}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: index <= currentStep ? 1 : 0.5 }}
            >
              <span className="step-number">{index + 1}</span>
              <p>{step}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodeVisualizer;