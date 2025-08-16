import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronDown, Loader, AlertTriangle } from 'lucide-react';

const companyDataFiles = {
  google: () => import('../data/Google.json'),
  amazon: () => import('../data/Amazon.json'),
  microsoft: () => import('../data/Microsoft.json'),
  apple: () => import('../data/Apple.json'),
  linkedin: () => import('../data/LinkedIn.json'),
  tcs: () => import('../data/TCS.json'),
  wipro: () => import('../data/Wipro.json'),
  infosys: () => import('../data/Infosys.json'),
};

const DifficultySection = ({ title, questions, color }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="difficulty-section">
      <button className="difficulty-header" onClick={() => setIsOpen(!isOpen)} style={{'--difficulty-color': color}}>
        <h2 className="difficulty-title">{title} ({questions.length})</h2>
        <ChevronDown className={`toggle-icon ${isOpen ? 'open' : ''}`} />
      </button>
      {isOpen && (
        <motion.div 
          className="questions-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.05 }}
        >
          {questions.map((q, index) => (
            <motion.a 
              key={index} 
              href={q.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="question-card"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="question-card-header">
                <h3 className="question-title">{q.title}</h3>
                <ExternalLink size={16} className="external-link-icon" />
              </div>
              <p className="question-description">{q.description}</p>
            </motion.a>
          ))}
        </motion.div>
      )}
    </div>
  );
};

const CompanySpecificQuestionsDetails = () => {
  const { companyName } = useParams();
  const [companyData, setCompanyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const loader = companyDataFiles[companyName.toLowerCase()];
        if (!loader) {
          throw new Error('Company not found');
        }
        const data = await loader();
        setCompanyData(data.default);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [companyName]);

  if (loading) {
    return <div className="loading-state"><Loader className="spinner" />Loading Questions...</div>;
  }

  if (error || !companyData) {
    return (
      <div className="error-state">
        <AlertTriangle size={48} />
        <h2>Error: Company Not Found</h2>
        <p>Could not load questions for "{companyName}".</p>
        <Link to="/companies" className="btn-primary">Back to Companies</Link>
      </div>
    );
  }

  const easyQuestions = companyData.questions.filter(q => q.difficulty === 'Easy');
  const mediumQuestions = companyData.questions.filter(q => q.difficulty === 'Medium');
  const hardQuestions = companyData.questions.filter(q => q.difficulty === 'Hard');

  return (
    <div className="company-details-page">
      <div className="container">
        <div className="section-header">
          <motion.h1 
            className="section-title"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            {companyData.company} Questions
          </motion.h1>
        </div>
        
        {easyQuestions.length > 0 && <DifficultySection title="Easy" questions={easyQuestions} color="#22C55E" />}
        {mediumQuestions.length > 0 && <DifficultySection title="Medium" questions={mediumQuestions} color="#F97316" />}
        {hardQuestions.length > 0 && <DifficultySection title="Hard" questions={hardQuestions} color="#EF4444" />}
      </div>
    </div>
  );
};

export default CompanySpecificQuestionsDetails;