import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Home, BookOpen, User, Users, Star, Building } from 'lucide-react';
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
            <Link 
              to="/#topics" 
              className="nav-link"
            >
              <BookOpen size={18} />
              Topics
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
            >
              <User size={18} />
              About
            </Link>
            <Link 
              to="/features" 
              className={`nav-link ${location.pathname === '/features' ? 'active' : ''}`}
            >
              <Star size={18} />
              Features
            </Link>
            <Link 
              to="/companies" 
              className={`nav-link ${location.pathname.startsWith('/company') ? 'active' : ''}`}
            >
              <Building size={18} />
              Company Specific Questions
            </Link>
            <Link 
              to="/community" 
              className={`nav-link ${location.pathname === '/community' ? 'active' : ''}`}
            >
              <Users size={18} />
              Community
            </Link>
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