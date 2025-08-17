import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import TopicDetail from './pages/TopicDetail';
import About from './pages/About';
import './App.css';
import Features from './components/Features';
import Community from './pages/Community';
import { Analytics } from "@vercel/analytics/react";
import { useEffect } from 'react';
import CompanySpecificQuestions from './pages/CompanySpecificQuestions';
import CompanySpecificQuestionsDetails from './pages/CompanySpecificQuestionsDetails';
import { SpeedInsights } from "@vercel/speed-insights/react"

  // when i change the url, i want to scroll to the top smoothly
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
}


function App() {

  return (
    <Router>
      <div className="App">
        <Analytics/>
        <SpeedInsights/>
        <Header />
       {/* ScrollToTop will handle smooth scrolling on route change */}
        <ScrollToTop />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topic/:topicId" element={<TopicDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/features" element={<Features />} />
            <Route path="/community" element={<Community />} />
            <Route path="/companies" element={<CompanySpecificQuestions />} />
            <Route path="/company/:companyName" element={<CompanySpecificQuestionsDetails />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;