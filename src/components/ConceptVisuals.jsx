import { motion } from 'framer-motion';
import { Lightbulb, Map, Boxes, ListOrdered, Binary, Hash, Network, Trees as TreesIcon, Layers, Timer, Activity, MoveRight } from 'lucide-react';

const ConceptVisuals = ({ topic }) => {
  if (!topic) return null;

  const topicId = topic.id;

  const SectionCard = ({ title, children }) => (
    <div className="visual-card">
      <div className="visual-card-header">
        <h3>{title}</h3>
      </div>
      <div className="visual-card-body">{children}</div>
    </div>
  );

  const RealWorldList = ({ items }) => (
    <ul className="realworld-list">
      {items.map((text, idx) => (
        <li key={idx} className="realworld-item">
          <Lightbulb size={16} />
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );

  const ArrayVisual = () => (
    <div className="array-visual">
      <div className="array-container">
        {[2, 7, 1, 8, 3, 5].map((v, i) => (
          <div className="array-item" key={i}>
            <div className="array-index">{i}</div>
            <div className="array-value">{v}</div>
          </div>
        ))}
      </div>
      <div className="array-annotations">
        <span className="pointer">left</span>
        <span className="window" />
        <span className="pointer right">right</span>
      </div>
    </div>
  );

  const LinkedListVisual = () => (
    <div className="linkedlist-visual">
      <div className="node-chain">
        {[10, 20, 30, 40].map((v, i) => (
          <div className="node" key={i}>
            <span>{v}</span>
            {i < 3 && <span className="arrow">→</span>}
          </div>
        ))}
      </div>
    </div>
  );

  const StackVisual = () => (
    <div className="stack-visual">
      <div className="stack-container">
        <div className="stack-item top">Top: 7</div>
        <div className="stack-item">5</div>
        <div className="stack-item">2</div>
        <div className="stack-base">Bottom</div>
      </div>
      <div className="operations">
        <div className="operation">push(9)</div>
        <div className="operation">pop()</div>
        <div className="operation">peek()</div>
      </div>
    </div>
  );

  const QueueVisual = () => (
    <div className="queue-visual">
      <div className="queue-container">
        {[3, 8, 5, 1].map((v, i) => (
          <div className="queue-item" key={i}>{v}</div>
        ))}
      </div>
      <div className="queue-labels">
        <span>front</span>
        <MoveRight size={16} />
        <span>rear</span>
      </div>
    </div>
  );

  const TreeVisual = () => (
    <div className="tree-visual">
      <div className="tree-container">
        <div className="tree-level">
          <div className="tree-node root">1</div>
        </div>
        <div className="tree-level">
          <div className="tree-node">2</div>
          <div className="tree-node">3</div>
        </div>
        <div className="tree-level">
          <div className="tree-node">4</div>
          <div className="tree-node">5</div>
          <div className="tree-node">6</div>
          <div className="tree-node">7</div>
        </div>
      </div>
      <div className="traversal-info">
        <div>Preorder: 1, 2, 4, 5, 3, 6, 7</div>
        <div>Inorder: 4, 2, 5, 1, 6, 3, 7</div>
        <div>Postorder: 4, 5, 2, 6, 7, 3, 1</div>
      </div>
    </div>
  );

  const GraphVisual = () => (
    <div className="graph-visual">
      <svg className="graph-edges" viewBox="0 0 300 200">
        {/* Edges with better positioning */}
        <line x1="60" y1="60" x2="120" y2="40" className="graph-edge" />
        <line x1="120" y1="40" x2="180" y2="70" className="graph-edge" />
        <line x1="60" y1="60" x2="90" y2="140" className="graph-edge" />
        <line x1="90" y1="140" x2="180" y2="150" className="graph-edge" />
        <line x1="120" y1="40" x2="90" y2="140" className="graph-edge" />
      </svg>
      
      {/* Nodes with better positioning and styling */}
      <div className="graph-node" style={{ left: '20%', top: '30%' }}>
        <span className="node-label">A</span>
      </div>
      <div className="graph-node" style={{ left: '40%', top: '20%' }}>
        <span className="node-label">B</span>
      </div>
      <div className="graph-node" style={{ left: '60%', top: '35%' }}>
        <span className="node-label">C</span>
      </div>
      <div className="graph-node" style={{ left: '30%', top: '70%' }}>
        <span className="node-label">D</span>
      </div>
      <div className="graph-node" style={{ left: '60%', top: '75%' }}>
        <span className="node-label">E</span>
      </div>
      
      <div className="traversal-info">
        <div className="traversal-item">
          <span className="traversal-label">BFS:</span>
          <span className="traversal-path">A → B → D → C → E</span>
        </div>
        <div className="traversal-item">
          <span className="traversal-label">DFS:</span>
          <span className="traversal-path">A → B → C → E → D</span>
        </div>
      </div>
    </div>
  );

  const SortingVisual = () => (
    <div className="sorting-visual">
      <div className="bars">
        {[60, 120, 40, 160, 90, 130].map((h, i) => (
          <div className="bar" style={{ height: `${h}px` }} key={i} />)
        )}
      </div>
      <div className="sorting-legend">
        <span className="legend-item">compare</span>
        <span className="legend-item">swap</span>
        <span className="legend-item">sorted</span>
      </div>
    </div>
  );

  const SearchingVisual = () => (
    <div className="binary-search-visual">
      <div className="range">
        <div className="range-bar">
          {[...Array(10)].map((_, i) => (
            <div className={`tick ${i >= 2 && i <= 7 ? 'active' : ''}`} key={i}>{i}</div>
          ))}
        </div>
        <div className="range-labels">
          <span>left</span>
          <span>mid</span>
          <span>right</span>
        </div>
      </div>
    </div>
  );

  const HashingVisual = () => (
    <div className="hash-buckets">
      {[0,1,2,3,4].map((b) => (
        <div className="bucket" key={b}>
          <div className="bucket-title">bucket {b}</div>
          <div className="bucket-items">
            {b === 1 && <span>21</span>}
            {b === 1 && <span>31</span>}
            {b === 3 && <span>13</span>}
          </div>
        </div>
      ))}
    </div>
  );

  const DPVisual = () => (
    <div className="dp-grid">
      {[...Array(5)].map((_, r) => (
        <div className="dp-row" key={r}>
          {[...Array(6)].map((_, c) => (
            <div className={`dp-cell ${r === 0 || c === 0 ? 'base' : ''}`} key={c}>{r*c}</div>
          ))}
        </div>
      ))}
    </div>
  );

  const GreedyVisual = () => (
    <div className="greedy-timeline">
      <div className="activity-block" style={{ left: '2%', width: '20%' }}>A</div>
      <div className="activity-block" style={{ left: '18%', width: '22%' }}>B</div>
      <div className="activity-block" style={{ left: '42%', width: '20%' }}>C</div>
      <div className="activity-block" style={{ left: '65%', width: '18%' }}>D</div>
    </div>
  );

  const visualsMap = {
    'arrays': { icon: Boxes, visual: <ArrayVisual />, scenarios: [
      'Inventory bins arranged in shelves (indexes and values)',
      'Camera moving window for continuous frames (sliding window)',
      'Two shoppers scanning aisles from both ends (two pointers)'
    ]},
    'linked-lists': { icon: ListOrdered, visual: <LinkedListVisual />, scenarios: [
      'Train coaches linked one after another',
      'Playlist where next song points to following song',
      'Undo/redo stacks in editors (with next/prev)'
    ]},
    'stacks': { icon: Layers, visual: <StackVisual />, scenarios: [
      'Plates stacked in a cafeteria (LIFO)',
      'Browser history back navigation',
      'Function call stack'
    ]},
    'queues': { icon: Activity, visual: <QueueVisual />, scenarios: [
      'Ticket line at a counter (FIFO)',
      'Printer job queue',
      'Task scheduling in OS'
    ]},
    'trees': { icon: TreesIcon, visual: <TreeVisual />, scenarios: [
      'Company org chart',
      'File system directories',
      'Tournament brackets'
    ]},
    'graphs': { icon: Network, visual: <GraphVisual />, scenarios: [
      'Social network friend connections',
      'City map with roads',
      'Dependency graphs in projects'
    ]},
    'sorting': { icon: Timer, visual: <SortingVisual />, scenarios: [
      'Organizing books by height',
      'Ordering tasks by priority',
      'Rearranging photos by date'
    ]},
    'searching': { icon: Binary, visual: <SearchingVisual />, scenarios: [
      'Guess the number game (midpoint strategy)',
      'Finding a word in a dictionary',
      'Looking up a seat in a sorted list'
    ]},
    'hashing': { icon: Hash, visual: <HashingVisual />, scenarios: [
      'Library card catalog drawers',
      'CPU cache lines mapping',
      'URL shortener lookups'
    ]},
    'dynamic-programming': { icon: Map, visual: <DPVisual />, scenarios: [
      'Planning cheapest travel with layovers',
      'Knapsack packing choices table',
      'Grid path counting with obstacles'
    ]},
    'greedy': { icon: Activity, visual: <GreedyVisual />, scenarios: [
      'Scheduling talks to fit a day',
      'Selecting profitable stock sell points',
      'Choosing fewer coins for change'
    ]},
  };

  const data = visualsMap[topicId];
  if (!data) return null;

  const Icon = data.icon || Lightbulb;

  return (
    <div className="concept-visuals">
      <div className="visuals-grid">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <SectionCard title={<span className="visual-title"><Icon size={18} /> Visual Intuition</span>}>
            {data.visual}
          </SectionCard>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
          <SectionCard title={<span className="visual-title"><Lightbulb size={18} /> Real-world Scenarios</span>}>
            <RealWorldList items={data.scenarios} />
          </SectionCard>
        </motion.div>
      </div>
    </div>
  );
};

export default ConceptVisuals;



