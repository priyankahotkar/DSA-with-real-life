import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Heart, 
  Code, 
  BookOpen, 
  Users,
  ArrowUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Section */}
          <motion.div 
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="footer-logo">
              <Code size={24} className="footer-logo-icon" />
              <span className="footer-logo-text">DSA Learning</span>
            </div>
            <p className="footer-description">
              Master Data Structures and Algorithms with real-world analogies, 
              comprehensive explanations, and extensive practice problems.
            </p>
            <div className="footer-social">
              <a 
                href="https://github.com/priyankahotkar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.comin/priyanka-hotkar-3a667a259/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:unlimitlytech@gmail.com" 
                className="social-link"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="footer-section-title">Quick Links</h3>
            <ul className="footer-links-list">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/#topics" className="footer-link">Topics</Link></li>
              <li><Link to="/features" className="footer-link">Features</Link></li>
              <li><Link to="/about" className="footer-link">About</Link></li>
            </ul>
          </motion.div>

          {/* Learning Paths */}
          <motion.div 
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="footer-section-title">Learning Paths</h3>
            <ul className="footer-links-list">
              <li><Link to="/topic/arrays" className="footer-link">Arrays</Link></li>
              <li><Link to="/topic/linked-lists" className="footer-link">Linked Lists</Link></li>
              <li><Link to="/topic/trees" className="footer-link">Trees</Link></li>
              <li><Link to="/topic/graphs" className="footer-link">Graphs</Link></li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div 
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="footer-section-title">Resources</h3>
            <ul className="footer-links-list">
              <li>
                <a 
                  href="https://leetcode.com/priyankahotkar_/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  LeetCode
                </a>
              </li>
              <li>
                <a 
                  href="https://hackerrank.com/profile/priyankahotkar4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  HackerRank
                </a>
              </li>
              <li>
                <a 
                  href="https://geeksforgeeks.org/user/priyankafkfb/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  GeeksforGeeks
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/priyankahotkar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="footer-contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="footer-section-title">Get in Touch</h3>
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={16} />
                <span>unlimitlytech@gmail.com</span>
              </div>
              <div className="contact-item">
                <Users size={16} />
                <span>Join our community</span>
              </div>
              <div className="contact-item">
                <BookOpen size={16} />
                <span>Free learning resources</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>
                © {currentYear} DSA Learning Platform. Made with{' '}
                <Heart size={14} className="heart-icon" /> for the coding community.
              </p>
            </div>
            <div className="footer-bottom-links">
              <span className="footer-bottom-link">Privacy Policy</span>
              <span className="footer-bottom-link">Terms of Service</span>
              <span className="footer-bottom-link">Cookie Policy</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        className="scroll-to-top"
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ delay: 0.7 }}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;


