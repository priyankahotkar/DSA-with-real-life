import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, RotateCcw, ChevronRight, ChevronLeft, Lightbulb, Target } from 'lucide-react';

const AnimatedExplanation = ({ explanation, steps = [], autoPlayInterval = 4000 }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [highlightedText, setHighlightedText] = useState('');
  const intervalRef = useRef(null);

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && !isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= steps.length - 1) {
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
  }, [isPlaying, isPaused, steps.length, autoPlayInterval]);

  // Update highlighted text based on current step
  useEffect(() => {
    if (steps[currentStep]?.highlightText) {
      setHighlightedText(steps[currentStep].highlightText);
    } else {
      setHighlightedText('');
    }
  }, [currentStep, steps]);

  const handlePlay = () => {
    if (currentStep >= steps.length - 1) {
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
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
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

  // Function to highlight specific text in the explanation
  const renderHighlightedExplanation = () => {
    // Always render HTML properly
    if (!explanation || !highlightedText) {
      return <div dangerouslySetInnerHTML={{ __html: explanation }} />;
    }

    // For highlighting, create a modified HTML string with highlighted spans
    const highlightedHTML = explanation.replace(
      new RegExp(`(${highlightedText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'),
      '<span class="highlighted-text-inline">$1</span>'
    );
    
    return (
      <div 
        dangerouslySetInnerHTML={{ __html: highlightedHTML }}
        className="highlighted-content"
      />
    );
  };

  if (!explanation) return null;

  return (
    <div className="animated-explanation">
      {/* Controls */}
      <div className="explanation-controls">
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
          
          <button className="control-btn" onClick={handleNext} disabled={currentStep === steps.length - 1} title="Next">
            <ChevronRight size={18} />
          </button>
        </div>
        
        <div className="progress-info">
          <span className="step-counter">
            Step {currentStep + 1} of {steps.length}
          </span>
          <div className="progress-bar">
            <motion.div
              className="progress-fill"
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="explanation-content">
        {/* Explanation Section */}
        <div className="explanation-section">
          <h4>
            <Lightbulb size={20} />
            Interactive Explanation
          </h4>
          <div className="explanation-text">
            {renderHighlightedExplanation()}
          </div>
        </div>

        {/* Steps Section */}
        {steps.length > 0 && (
          <div className="steps-section">
            <h4>
              <Target size={20} />
              Step-by-Step Breakdown
            </h4>
            <div className="steps-container">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  className="current-step"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="step-header">
                    <span className="step-number">{currentStep + 1}</span>
                    <span className="step-title">{steps[currentStep]?.title || `Step ${currentStep + 1}`}</span>
                  </div>
                  <p className="step-description">{steps[currentStep]?.description || steps[currentStep]}</p>
                  {steps[currentStep]?.tip && (
                    <div className="step-tip">
                      <Lightbulb size={16} />
                      <span>{steps[currentStep].tip}</span>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>

      {/* Step Navigation */}
      {steps.length > 0 && (
        <div className="step-navigation">
          <div className="step-dots">
            {steps.map((_, index) => (
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
              >
                {index + 1}
              </motion.button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimatedExplanation;