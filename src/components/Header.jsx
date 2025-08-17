import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Home, BookOpen, User, Users, Star, Building, Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import SearchBar from './SearchBar';
import { MessageSquare } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Toggle overlay and handle menu state
  useEffect(() => {
    const overlay = document.querySelector('.mobile-menu-overlay');
    
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
      if (overlay) {
        overlay.classList.add('active');
      }
    } else {
      document.body.classList.remove('mobile-menu-open');
      if (overlay) {
        overlay.classList.remove('active');
      }
    }

    // Cleanup
    return () => {
      document.body.classList.remove('mobile-menu-open');
      if (overlay) {
        overlay.classList.remove('active');
      }
    };
  }, [isMobileMenuOpen]);

  // Close menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

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
          
          <button 
            ref={hamburgerRef}
            className="hamburger-menu" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <div 
            ref={menuRef}
            className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}
            aria-hidden={!isMobileMenuOpen}
          >
            <div className="mobile-menu-header">
              <div className="logo">
                <Code className="logo-icon" />
                <span className="gradient-text">DSA Mastery</span>
              </div>
              <button 
                className="close-menu"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
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
              className={`nav-link ${location.pathname.startsWith('/companies') ? 'active' : ''}`}
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
            <Link 
              to="/testimonials" 
              className={`nav-link ${location.pathname === '/testimonials' ? 'active' : ''}`}
            >
              <MessageSquare size={18} />
              Testimonials
            </Link>
            <AnimatePresence mode="wait">
              <SearchBar />
            </AnimatePresence>
            <div className="mobile-menu-footer">
              <p>DSA Mastery © {new Date().getFullYear()}</p>
            </div>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;