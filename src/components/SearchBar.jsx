import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, TrendingUp, BookOpen, Code, Hash, TreePine, Network, BarChart3, Zap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { topics } from '../data/topics';

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTopics, setFilteredTopics] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  // Detect platform for keyboard shortcut display
  const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
  const searchShortcut = isMac ? '⌘K' : 'Ctrl+K';

  // Topic icons mapping
  const topicIcons = {
    'arrays': Code,
    'linked-lists': Hash,
    'stacks': BookOpen,
    'queues': BookOpen,
    'trees': TreePine,
    'graphs': Network,
    'sorting': BarChart3,
    'searching': Search,
    'hashing': Hash,
    'dynamic-programming': Zap,
    'greedy': Target
  };

  // Filter topics based on search query
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredTopics([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = topics.filter(topic => 
      topic.title.toLowerCase().includes(query) ||
      topic.description.toLowerCase().includes(query) ||
      topic.tags.some(tag => tag.toLowerCase().includes(query)) ||
      topic.concepts.toString().includes(query) ||
      topic.difficulty.toLowerCase().includes(query)
    );

    setFilteredTopics(filtered.slice(0, 8)); // Limit to 8 results
    setSelectedIndex(-1);
  }, [searchQuery]);

  // Handle keyboard navigation and shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Global search shortcut (Cmd+K on Mac, Ctrl+K on Windows/Linux)
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
        setTimeout(() => inputRef.current?.focus(), 100);
        return;
      }

      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => 
            prev < filteredTopics.length - 1 ? prev + 1 : 0
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => 
            prev > 0 ? prev - 1 : filteredTopics.length - 1
          );
          break;
        case 'Enter':
          e.preventDefault();
          if (selectedIndex >= 0 && filteredTopics[selectedIndex]) {
            handleTopicSelect(filteredTopics[selectedIndex]);
          }
          break;
        case 'Escape':
          setIsOpen(false);
          setSearchQuery('');
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredTopics, selectedIndex]);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchQuery('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleTopicSelect = (topic) => {
    setIsOpen(false);
    setSearchQuery('');
    // Navigate to topic detail page
    window.location.href = `/topic/${topic.id}`;
  };

  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setFilteredTopics([]);
    inputRef.current?.focus();
  };

  const getTopicIcon = (topicId) => {
    const IconComponent = topicIcons[topicId] || Code;
    return <IconComponent size={16} />;
  };

  return (
    <div className="search-container" ref={searchRef}>
      {/* Search Toggle Button */}
      <motion.button
        className="search-toggle"
        onClick={handleSearchToggle}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        aria-label="Search topics"
        title="Search DSA topics, concepts, and problems"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3
          }}
        >
          <Search size={18} />
        </motion.div>
        <span className="search-text">Search</span>
        <span className="search-shortcut">{searchShortcut}</span>
      </motion.button>

      {/* Search Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="search-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="search-modal"
              initial={{ scale: 0.9, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {/* Search Input */}
              <div className="search-input-container">
                <Search size={20} className="search-input-icon" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search topics, concepts, or difficulty..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                  autoComplete="off"
                />
                {searchQuery && (
                  <button
                    className="clear-search"
                    onClick={clearSearch}
                    aria-label="Clear search"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              {/* Search Results */}
              <div className="search-results">
                {searchQuery && (
                  <>
                    {filteredTopics.length > 0 ? (
                      <div className="results-header">
                        <span className="results-count">
                          {filteredTopics.length} topic{filteredTopics.length !== 1 ? 's' : ''} found
                        </span>
                      </div>
                    ) : (
                      <div className="no-results">
                        <Search size={24} />
                        <p>No topics found for "{searchQuery}"</p>
                        <span>Try different keywords or browse all topics</span>
                      </div>
                    )}

                    {filteredTopics.map((topic, index) => (
                      <motion.div
                        key={topic.id}
                        className={`search-result-item ${index === selectedIndex ? 'selected' : ''}`}
                        onClick={() => handleTopicSelect(topic)}
                        whileHover={{ backgroundColor: 'rgba(139, 92, 246, 0.1)' }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <div className="result-icon" style={{ backgroundColor: topic.color + '20' }}>
                          {getTopicIcon(topic.id)}
                        </div>
                        <div className="result-content">
                          <div className="result-title">
                            {topic.title}
                            <span className={`result-difficulty ${topic.difficulty.toLowerCase()}`}>
                              {topic.difficulty}
                            </span>
                          </div>
                          <p className="result-description">{topic.description}</p>
                          <div className="result-meta">
                            <span className="result-concepts">{topic.concepts} concepts</span>
                            <span className="result-problems">{topic.problems} problems</span>
                            <span className="result-time">{topic.estimatedTime}</span>
                          </div>
                        </div>
                        <div className="result-arrow">
                          <TrendingUp size={16} />
                        </div>
                      </motion.div>
                    ))}
                  </>
                )}

                {/* Search Suggestions */}
                {!searchQuery && (
                  <div className="search-suggestions">
                    <div className="suggestions-header">
                      <span>Popular Topics</span>
                    </div>
                    <div className="suggestions-grid">
                      {topics.slice(0, 6).map((topic) => (
                        <motion.button
                          key={topic.id}
                          className="suggestion-item"
                          onClick={() => handleTopicSelect(topic)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="suggestion-icon" style={{ backgroundColor: topic.color + '20' }}>
                            {getTopicIcon(topic.id)}
                          </div>
                          <span>{topic.title}</span>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Search Footer */}
              <div className="search-footer">
                <div className="search-tips">
                  <span>💡 Tip: Use keywords like "array", "tree", "easy", "advanced"</span>
                </div>
                <div className="search-shortcuts">
                  <span>↑↓ Navigate • Enter Select • Esc Close</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;
