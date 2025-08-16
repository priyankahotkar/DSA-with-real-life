import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building } from 'lucide-react';

const companies = [
  { name: 'Google', id: 'google' },
  { name: 'Amazon', id: 'amazon' },
  { name: 'Microsoft', id: 'microsoft' },
  { name: 'Apple', id: 'apple' },
  { name: 'LinkedIn', id: 'linkedin' },
  { name: 'TCS', id: 'tcs' },
  { name: 'Wipro', id: 'wipro' },
  { name: 'Infosys', id: 'infosys' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

const CompanySpecificQuestions = () => {
  return (
    <div className="company-questions-page">
      <div className="container">
        <div className="section-header">
          <motion.h1 
            className="section-title"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Building size={36} className="gradient-text" />
            Company-Specific Questions
          </motion.h1>
          <motion.p 
            className="section-subtitle"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Practice problems frequently asked by top tech companies.
          </motion.p>
        </div>

        <motion.div 
          className="company-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {companies.map((company) => (
            <motion.div key={company.id} variants={itemVariants}>
              <Link to={`/company/${company.id}`} className="company-card">
                <h3 className="company-card-name">{company.name}</h3>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CompanySpecificQuestions;