import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import {
  FaLayerGroup, FaBroom, FaLink, FaBalanceScale, FaFilter, FaExchangeAlt, FaCodeBranch, FaSlidersH, FaChartBar, FaThLarge, FaFire, FaLightbulb, FaListOl, FaMobileAlt, FaTrophy, FaDatabase, FaMagic, FaTable, FaFont, FaChevronLeft, FaChevronRight
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const featuresList = [
  { key: 'aggregation', name: 'Aggregation & Summarization', icon: <FaLayerGroup /> },
  { key: 'cleaning', name: 'Data Cleaning', icon: <FaBroom /> },
  { key: 'integration', name: 'Data Integration & Merging', icon: <FaLink /> },
  { key: 'normalization', name: 'Data Normalization & Scaling', icon: <FaBalanceScale /> },
  { key: 'slicing', name: 'Data Slicing & Filtering', icon: <FaFilter /> },
  { key: 'type-conversion', name: 'Data Type Conversion', icon: <FaExchangeAlt /> },
  { key: 'encoding', name: 'Encoding & Transformation', icon: <FaCodeBranch /> },
  { key: 'feature-engineering', name: 'Feature Engineering', icon: <FaMagic /> },
  { key: 'filter-generation', name: 'Filter Generation', icon: <FaSlidersH /> },
  { key: 'graph-generation', name: 'Graph Generation', icon: <FaChartBar /> },
  { key: 'heatmap-generation', name: 'Heatmap Generation', icon: <FaFire /> },
  { key: 'insight-generation', name: 'Insight Generation', icon: <FaLightbulb /> },
  { key: 'pagination', name: 'Pagination Generation', icon: <FaListOl /> },
  { key: 'responsive-visuals', name: 'Responsive Visuals', icon: <FaMobileAlt /> },
  { key: 'scorecard', name: 'Scorecard Generation', icon: <FaTrophy /> },
  { key: 'sql-query', name: 'SQL Query Generation', icon: <FaDatabase /> },
  { key: 'stylizing-prompt', name: 'Stylizing Prompt', icon: <FaMagic /> },
  { key: 'table-generation', name: 'Table Generation', icon: <FaTable /> },
  { key: 'text-processing', name: 'Text Processing', icon: <FaFont /> },
];

const featureDescriptions = {
  aggregation: 'Summarize and aggregate your data to extract key metrics and insights.',
  cleaning: 'Automatically clean and preprocess your data to ensure accuracy and consistency.',
  integration: 'Merge and integrate data from multiple sources for unified analysis.',
  normalization: 'Normalize and scale your data for better model performance and comparability.',
  slicing: 'Slice and filter your data to focus on relevant subsets and segments.',
  'type-conversion': 'Convert data types seamlessly to match your analysis requirements.',
  encoding: 'Encode and transform categorical and textual data for advanced analytics.',
  'feature-engineering': 'Create new features from existing data to enhance model performance.',
  'filter-generation': 'Generate advanced filters to refine your data views and queries.',
  'graph-generation': 'Automatically generate insightful graphs and visualizations.',
  'heatmap-generation': 'Visualize data density and relationships with heatmaps.',
  'insight-generation': 'Leverage AI to generate actionable business insights from your data.',
  pagination: 'Paginate large datasets for efficient browsing and analysis.',
  'responsive-visuals': 'Create visuals that adapt to any device or screen size.',
  scorecard: 'Generate scorecards to track and compare key metrics.',
  'sql-query': 'Generate complex SQL queries automatically from your requirements.',
  'stylizing-prompt': 'Style and customize prompts for better data interaction.',
  'table-generation': 'Generate tables from raw data for easy analysis.',
  'text-processing': 'Process and analyze textual data for deeper insights.',
};

function FeatureContent({ selected }) {
  if (selected === 'graph-generation') {
    return (
      <div>
        <h1 className="text-4xl font-bold text-blue-700 mb-2 flex items-center gap-3">
          <FaChartBar className="text-3xl" /> Graph Generation
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Automatically generate insightful graphs and visualizations.
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Generate a graph of sales vs year. Sales on Y axis, Year on X axis.</li>
          <li>Generate a gauge graph of total sales made.</li>
          <li>Generate a sales graph with filters for Sales and Year.</li>
        </ul>
        <div className="rounded-xl bg-gradient-to-br from-blue-400 via-blue-200 to-blue-100 border border-blue-200 p-6 mb-6">
          <div className="font-semibold text-blue-800 mb-2">Demo: Sales vs Year</div>
          <div className="w-full h-64 flex items-center justify-center">
            <img src="/sample-graph.png" alt="Graph Demo" className="max-h-full max-w-full rounded-lg shadow" />
          </div>
        </div>
        <div className="rounded-xl bg-blue-50 border border-blue-100 p-6 text-blue-900 shadow-inner">
          <span className="font-semibold">100+ types of graph generation and graphing libraries of your choice (D3.js, Chart.js, and more).</span>
        </div>
      </div>
    );
  }
  if (selected === 'heatmap-generation') {
    return (
      <div>
        <h1 className="text-4xl font-bold text-blue-700 mb-2 flex items-center gap-3">
          <FaFire className="text-3xl" /> Heatmap Generation
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Visualize data density and relationships with heatmaps.
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Generate a heatmap of sales using table 1 and table 2.</li>
          <li>Generate a heatmap of total revenue made in the first quarter from a PDF.</li>
        </ul>
        <div className="rounded-xl bg-gradient-to-br from-blue-400 via-blue-200 to-blue-100 border border-blue-200 p-6 mb-6">
          <div className="font-semibold text-blue-800 mb-2">Demo: Sales Heatmap</div>
          <div className="w-full h-64 flex items-center justify-center">
            <img src="/sample-heatmap.png" alt="Heatmap Demo" className="max-h-full max-w-full rounded-lg shadow" />
          </div>
        </div>
        <div className="rounded-xl bg-blue-50 border border-blue-100 p-6 text-blue-900 shadow-inner">
          <span className="font-semibold">AI heatmap generation and map libraries of your choice (Leaflet, MapLibreGL, and more).</span>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-700 mb-4 flex items-center gap-3">
        <span className="text-3xl">{featuresList.find(f => f.key === selected).icon}</span>
        {featuresList.find(f => f.key === selected).name}
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        {featureDescriptions[selected] || 'Description coming soon.'}
      </p>
      <div className="rounded-xl bg-blue-50 border border-blue-100 p-8 text-blue-900 shadow-inner">
        <span className="font-semibold">More details and interactive demos coming soon for this feature.</span>
      </div>
    </div>
  );
}

const Features = () => {
  const [selected, setSelected] = useState(featuresList[0].key);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-white flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 pt-20 h-[calc(100vh-5rem)] overflow-hidden">
        {/* Sidebar */}
        <div className={`hidden md:flex flex-col relative transition-all duration-300 ${sidebarOpen ? 'w-80 min-w-[260px]' : 'w-24 min-w-[96px]'} bg-gradient-to-b from-blue-700 via-blue-500 to-blue-400 text-white h-full overflow-y-auto hide-scrollbar`} style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', marginTop: 0 }}>
          {/* Top: Features label and Collapse/Expand Arrow, aligned horizontally */}
          <div className="flex items-center w-full pt-3 pr-2 pb-2 pl-4 gap-2">
            <span className={`text-2xl font-bold flex items-center transition-all duration-200 ${sidebarOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0 pointer-events-none'} whitespace-nowrap`}>Features</span>
            <motion.button
              className="shadow-lg border border-blue-200 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200"
              style={{ boxShadow: '0 2px 8px 0 rgba(30,64,175,0.10)' }}
              onClick={() => setSidebarOpen((v) => !v)}
              aria-label={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
            >
              {sidebarOpen ? <FaChevronLeft size={20} /> : <FaChevronRight size={20} />}
            </motion.button>
          </div>
          <nav className={`flex flex-col gap-2 w-full ${sidebarOpen ? 'items-start' : 'items-center'}`}>
            {featuresList.map((f) => (
              <button
                key={f.key}
                onClick={() => setSelected(f.key)}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg text-lg font-medium transition-all duration-200 text-left focus:outline-none w-full ${selected === f.key ? 'bg-white/20 shadow-lg' : 'hover:bg-white/10'} ${!sidebarOpen ? 'justify-center' : ''}`}
                style={{ minHeight: '44px' }}
              >
                <span className={`text-2xl flex-shrink-0 flex items-center ${!sidebarOpen ? 'justify-center w-full' : 'justify-start'}`}>{f.icon}</span>
                <span className={`transition-all duration-200 ${sidebarOpen ? 'opacity-100 ml-2 w-auto' : 'opacity-0 w-0 ml-0 pointer-events-none'} overflow-hidden whitespace-nowrap`}>{f.name}</span>
              </button>
            ))}
          </nav>
        </div>
        {/* Mobile Sidebar */}
        <aside className="md:hidden w-full bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 text-blue-900 py-4 px-2 flex overflow-x-auto gap-2 sticky top-20 z-20">
          {featuresList.map((f) => (
            <button
              key={f.key}
              onClick={() => setSelected(f.key)}
              className={`flex flex-col items-center px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 focus:outline-none ${selected === f.key ? 'bg-white/20 shadow' : 'hover:bg-white/10'}`}
            >
              <span className="text-xl mb-1">{f.icon}</span>
              <span>{f.name.split(' ')[0]}</span>
            </button>
          ))}
        </aside>
        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8 h-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl mx-auto h-full flex flex-col justify-start"
              style={{ overflow: 'visible' }}
            >
              <FeatureContent selected={selected} />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default Features; 