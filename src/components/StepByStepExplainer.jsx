import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, RotateCcw, ChevronRight, ChevronLeft, SkipForward, SkipBack } from 'lucide-react';

const StepByStepExplainer = ({ steps = [], code = '', autoPlayInterval = 3000 }) => {
  // Handle both string and object step formats - define this first
  const processedSteps = steps.map((step, index) => {
    if (typeof step === 'string') {
      return {
        title: `Step ${index + 1}`,
        description: step,
        tip: null
      };
    }
    return step;
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const [highlightedLines, setHighlightedLines] = useState([]);

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && !isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= processedSteps.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, autoPlayInterval);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, isPaused, processedSteps.length, autoPlayInterval]);

  const handlePlay = () => {
    if (currentStep >= processedSteps.length - 1) {
      setCurrentStep(0);
    }
    setIsPlaying(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  const handleStop = () => {
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentStep(0);
  };

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, processedSteps.length - 1));
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleStepClick = (stepIndex) => {
    setCurrentStep(stepIndex);
    if (isPlaying) {
      setIsPaused(true);
    }
  };

  // Parse code to highlight specific lines based on current step
  const getHighlightedCode = () => {
    if (!code) return code;
    
    const lines = code.split('\n');
    const highlightedLines = getHighlightedLinesForStep(currentStep, lines.length);
    
    return lines.map((line, index) => {
      const isHighlighted = highlightedLines.includes(index);
      return (
        <motion.div
          key={index}
          className={`code-line ${isHighlighted ? 'highlighted' : ''}`}
          initial={{ backgroundColor: 'transparent' }}
          animate={{ 
            backgroundColor: isHighlighted ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
            borderLeft: isHighlighted ? '3px solid #3B82F6' : '3px solid transparent'
          }}
          transition={{ duration: 0.3 }}
        >
          <span className="line-number">{index + 1}</span>
          <span className="line-content">{line}</span>
        </motion.div>
      );
    });
  };

  const getHighlightedLinesForStep = (stepIndex, totalLines) => {
    // This is a simple mapping - you can enhance this based on your needs
    const stepLineMappings = {
      0: [0, 1], // First step highlights first few lines
      1: [2, 3], // Second step highlights next lines
      2: [4, 5], // etc.
      3: [6, 7],
      4: [8, 9],
    };
    
    return stepLineMappings[stepIndex] || [];
  };

  if (!processedSteps.length) return null;

  return (
    <div className="step-by-step-explainer">
      {/* Controls */}
      <div className="explainer-controls">
        <div className="control-buttons">
          {isPlaying && !isPaused ? (
            <button className="control-btn" onClick={handlePause} title="Pause">
              <Pause size={18} />
            </button>
          ) : (
            <button className="control-btn" onClick={isPaused ? handleResume : handlePlay} title="Play">
              <Play size={18} />
            </button>
          )}
          
          <button className="control-btn" onClick={handleStop} title="Stop">
            <RotateCcw size={18} />
          </button>
          
          <button className="control-btn" onClick={handlePrevious} disabled={currentStep === 0} title="Previous">
            <ChevronLeft size={18} />
          </button>
          
          <button className="control-btn" onClick={handleNext} disabled={currentStep === processedSteps.length - 1} title="Next">
            <ChevronRight size={18} />
          </button>
        </div>
        
        <div className="progress-info">
          <span className="step-counter">
            Step {currentStep + 1} of {processedSteps.length}
          </span>
          <div className="progress-bar">
            <motion.div
              className="progress-fill"
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / processedSteps.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="explainer-content">
        {/* Code Section */}
        {code && (
          <div className="code-section">
            <h4>Code Implementation</h4>
            <div className="code-container">
              <pre className="code-block">
                <code>{getHighlightedCode()}</code>
              </pre>
            </div>
          </div>
        )}

        {/* Steps Section */}
        <div className="steps-section">
          <h4>Step-by-Step Explanation</h4>
          <div className="steps-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                className="current-step"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="step-header">
                  <span className="step-number">{currentStep + 1}</span>
                  <span className="step-title">{processedSteps[currentStep]?.title || `Step ${currentStep + 1}`}</span>
                </div>
                <p className="step-description">{processedSteps[currentStep]?.description || processedSteps[currentStep]}</p>
                {processedSteps[currentStep]?.tip && (
                  <div className="step-tip">
                    <span>{processedSteps[currentStep].tip}</span>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Step Navigation */}
      <div className="step-navigation">
        <div className="step-dots">
          {processedSteps.map((step, index) => (
            <motion.button
              key={index}
              className={`step-dot ${index === currentStep ? 'active' : ''}`}
              onClick={() => handleStepClick(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0.5 }}
              animate={{ 
                opacity: index <= currentStep ? 1 : 0.5,
                scale: index === currentStep ? 1.2 : 1
              }}
              transition={{ duration: 0.2 }}
              title={step.title || `Step ${index + 1}`}
            >
              {index + 1}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepByStepExplainer;
