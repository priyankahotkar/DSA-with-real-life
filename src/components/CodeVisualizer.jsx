import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, RotateCcw, ChevronRight } from 'lucide-react';
import StepByStepExplainer from './StepByStepExplainer';

const CodeVisualizer = ({ topic }) => {
  const [selectedExample, setSelectedExample] = useState(0);

  const examples = topic.codeExamples || [];

  if (!examples.length) return null;

  const currentExample = examples[selectedExample];



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
      </div>

      <div className="visualizer-content">
        {/* Visualization Section - At the top */}
        {currentExample.visualization && (
          <div className="visual-section">
            <h4>Visual Representation</h4>
            <div className="visual-container">
              <motion.div
                className="visual-demo"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {currentExample.visualization}
              </motion.div>
            </div>
          </div>
        )}

        {/* Enhanced Step-by-Step Explainer */}
        <StepByStepExplainer 
          steps={currentExample.steps || []}
          code={currentExample.code || ''}
          autoPlayInterval={4000}
        />
      </div>
    </div>
  );
};

export default CodeVisualizer;