import { motion } from 'framer-motion';
import { 
  Mail, 
  Github, 
  Code, 
  Trophy, 
  Target, 
  Lightbulb, 
  Heart, 
  ArrowLeft,
  ExternalLink,
  Star,
  Award,
  Users,
  BookOpen,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { icon: Code, label: 'LeetCode Problems', value: '900+', link: 'https://leetcode.com/priyankahotkar_' },
    { icon: Trophy, label: 'Codeforces Rating', value: 'Div 3', link: 'https://codeforces.com/profile/priyankahotkar_' },
    { icon: Star, label: 'Years of Experience', value: '2+', link: null },
    { icon: Users, label: 'Students Helped', value: '10+', link: null }
  ];

  const achievements = [
    'Solved 900+ problems on LeetCode',
    'Active Codeforces participant (Div 3)',
    'Passionate about teaching DSA concepts',
    'Believes in making complex topics simple'
  ];

  const vision = [
    'Democratizing DSA education for everyone',
    'Making complex algorithms accessible',
    'Building a supportive tech community',
    'Empowering the next generation of developers'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="about-page"
    >
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="about-header"
        >
          <Link to="/" className="back-btn">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          
          <div className="about-intro">
            <div className="profile-section">
                             <div className="profile-avatar">
                 <div className="avatar-circle">
                   <img 
                     src="/profile-picture.png" 
                     alt="Priyanka Hotkar" 
                     className="profile-image"
                     onError={(e) => {
                       // Fallback to initials if image fails to load
                       e.target.style.display = 'none';
                       e.target.nextSibling.style.display = 'flex';
                     }}
                   />
                   <span className="avatar-text" style={{ display: 'none' }}>PH</span>
                 </div>
               </div>
              <div className="profile-info">
                <h1 className="profile-name">Priyanka Hotkar</h1>
                <p className="profile-title">DSA Educator & Competitive Programmer</p>
                <p className="profile-mission">
                  "What I know, everyone in the tech community should know"
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="stats-section"
        >
          <h2 className="section-title">
            <Target size={24} />
            Achievements & Stats
          </h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="stat-icon">
                  <stat.icon size={24} />
                </div>
                <div className="stat-content">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
                {stat.link && (
                  <a 
                    href={stat.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="stat-link"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Story Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="story-section"
        >
          <h2 className="section-title">
            <BookOpen size={24} />
            The Story Behind DSA Mastery
          </h2>
          <div className="story-content">
            <div className="story-card">
              <div className="story-icon">
                <Lightbulb size={32} />
              </div>
              <div className="story-text">
                <h3>The Vision</h3>
                <p>
                  During my journey of solving 900+ problems on LeetCode and participating in competitive programming, 
                  I realized something profound: the knowledge I've gained shouldn't be kept to myself. 
                  Every developer, regardless of their background or experience level, deserves access to 
                  clear, comprehensive, and engaging DSA education.
                </p>
              </div>
            </div>
            
            <div className="story-card">
              <div className="story-icon">
                <Heart size={32} />
              </div>
              <div className="story-text">
                <h3>The Mission</h3>
                <p>
                  This platform was born from a simple yet powerful belief: "What I know, everyone in the 
                  tech community should know." I've seen too many brilliant minds struggle with DSA concepts 
                  not because they lack intelligence, but because the resources available were either too 
                  complex, too scattered, or too theoretical.
                </p>
              </div>
            </div>

            <div className="story-card">
              <div className="story-icon">
                <Zap size={32} />
              </div>
              <div className="story-text">
                <h3>The Approach</h3>
                <p>
                  DSA Mastery combines real-world analogies, step-by-step visualizations, and comprehensive 
                  problem-solving strategies. Every concept is explained as if I'm teaching it to someone 
                  who's learning it for the first time. Because that's exactly what I wish I had when I started.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Vision Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="vision-section"
        >
          <h2 className="section-title">
            <Award size={24} />
            Our Vision for the Tech Community
          </h2>
          <div className="vision-grid">
            {vision.map((item, index) => (
              <motion.div
                key={index}
                className="vision-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <div className="vision-bullet">
                  <Star size={16} />
                </div>
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="contact-section"
        >
          <h2 className="section-title">
            <Mail size={24} />
            Let's Connect
          </h2>
          <div className="contact-grid">
            <motion.a
              href="mailto:unlimitlytech@gmail.com"
              className="contact-card"
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail size={24} />
              <div className="contact-info">
                <h3>Email</h3>
                <p>unlimitlytech@gmail.com</p>
              </div>
            </motion.a>

            <motion.a
              href="https://github.com/priyankahotkar"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github size={24} />
              <div className="contact-info">
                <h3>GitHub</h3>
                <p>github.com/priyankahotkar</p>
              </div>
            </motion.a>

            <motion.a
              href="https://leetcode.com/priyankahotkar_"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Code size={24} />
              <div className="contact-info">
                <h3>LeetCode</h3>
                <p>900+ Problems Solved</p>
              </div>
            </motion.a>

            <motion.a
              href="https://codeforces.com/profile/priyankahotkar_"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Trophy size={24} />
              <div className="contact-info">
                <h3>Codeforces</h3>
                <p>Div 3 Competitive Programmer</p>
              </div>
            </motion.a>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="cta-section"
        >
          <div className="cta-content">
            <h2>Ready to Master DSA?</h2>
            <p>Join thousands of developers who are already learning with DSA Mastery</p>
            <Link to="/" className="cta-button">
              Start Learning
              <ArrowLeft size={20} style={{ transform: 'rotate(180deg)' }} />
            </Link>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default About;
