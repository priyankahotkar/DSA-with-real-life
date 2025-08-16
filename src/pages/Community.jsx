import Giscus from '@giscus/react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const Community = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="community-page"
    >
      <div className="container">
        <div className="section-header">
          <motion.h1 
            className="section-title"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Users size={36} className="gradient-text" />
            Community Forum
          </motion.h1>
          <motion.p 
            className="section-subtitle"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Ask questions, share your knowledge, and connect with fellow learners.
          </motion.p>
        </div>
        
        <motion.div 
          className="giscus-container"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Giscus
            id="comments"
            repo="priyankahotkar/DSA-with-real-life"
            repoId="R_kgDOPeWKgg"
            categoryId="DIC_kwDOPeWKgs4CuO6D"
            mapping="pathname"
            strict="0"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="bottom"
            theme="dark_tritanopia"
            lang="en"
            loading="lazy"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Community;