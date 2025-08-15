import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Home, BookOpen } from 'lucide-react';
import SearchBar from './SearchBar';

const Header = () => {
  const location = useLocation();

  return (
    <motion.header 
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">
            <Code className="logo-icon" />
            <span className="gradient-text">DSA Mastery</span>
          </Link>
          
          <div className="nav-links">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              <Home size={18} />
              Home
            </Link>
            <a 
              href="#topics" 
              className="nav-link"
            >
              <BookOpen size={18} />
              Topics
            </a>
            <AnimatePresence mode="wait">
              <SearchBar />
            </AnimatePresence>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;