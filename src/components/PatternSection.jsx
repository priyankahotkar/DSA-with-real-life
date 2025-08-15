import { motion } from 'framer-motion';
import { Lightbulb, TrendingUp } from 'lucide-react';

const PatternSection = ({ patterns }) => {
  return (
    <div className="pattern-section">
      <h2 className="section-title">
        <Lightbulb size={24} />
        Common Patterns & Recognition
      </h2>
      
      <div className="patterns-grid">
        {patterns?.map((pattern, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="pattern-card"
          >
            <div className="pattern-header">
              <h3>{pattern.name}</h3>
              <div className="pattern-difficulty">
                <TrendingUp size={16} />
                {pattern.difficulty}
              </div>
            </div>
            
            <p className="pattern-description">{pattern.description}</p>
            
            <div className="pattern-when">
              <h4>When to use:</h4>
              <ul>
                {pattern.whenToUse?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="pattern-example">
              <h4>Example:</h4>
              <div className="example-code">
                <code>{pattern.example}</code>
              </div>
            </div>

            {pattern.visual ? (
              <div className="pattern-mini-visual">
                {pattern.visual}
              </div>
            ) : (
              <div className="pattern-mini-visual">
                {/* Generic mini visual based on common pattern names */}
                {(/sliding window/i).test(pattern.name) && (
                  <div className="mini-sliding-window">
                    <div className="mini-array">
                      {[2,5,1,7,3].map((v,i)=>(<span key={i}>{v}</span>))}
                    </div>
                    <div className="mini-window" />
                  </div>
                )}
                {(/two pointers/i).test(pattern.name) && (
                  <div className="mini-two-pointers">
                    <div className="mini-array">
                      {[1,2,3,4,5,6].map((v,i)=>(<span key={i}>{v}</span>))}
                    </div>
                    <div className="mini-pointers">
                      <span className="left">L</span>
                      <span className="right">R</span>
                    </div>
                  </div>
                )}
                {(/monotonic (stack|queue)/i).test(pattern.name) && (
                  <div className="mini-monotonic">
                    <div className="mini-stack">
                      {[1,3,5,7].map((v,i)=>(<span key={i}>{v}</span>))}
                    </div>
                  </div>
                )}
                {(/binary search/i).test(pattern.name) && (
                  <div className="mini-binary-search">
                    {[...Array(9)].map((_,i)=>(<span key={i} className={i>=2&&i<=6? 'active':''}>{i}</span>))}
                  </div>
                )}
              </div>
            )}
            
            <div className="pattern-complexity">
              <span>Time: {pattern.timeComplexity}</span>
              <span>Space: {pattern.spaceComplexity}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PatternSection;