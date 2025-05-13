import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import {
  FaInfoCircle, FaNewspaper, FaBook, FaFileAlt, FaQuestionCircle, FaBookOpen, FaChevronLeft, FaChevronRight, FaStar, FaLightbulb
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const aboutList = [
  { key: 'about', name: 'About', icon: <FaInfoCircle /> },
  { key: 'blog', name: 'Blog', icon: <FaNewspaper /> },
  { key: 'press', name: 'Press', icon: <FaNewspaper /> },
  { key: 'resources', name: 'Resources', icon: <FaBook /> },
  { key: 'docs', name: 'Documentation', icon: <FaFileAlt /> },
  { key: 'help', name: 'Help Center', icon: <FaQuestionCircle /> },
  { key: 'guides', name: 'Guides', icon: <FaBookOpen /> },
];

const aboutDescriptions = {
  about: 'Learn more about InfogennieAI, our mission, and our team.',
  blog: 'Read the latest news, updates, and insights from our team.',
  press: 'See our press releases and media coverage.',
  resources: 'Access whitepapers, case studies, and other resources.',
  docs: 'Browse our comprehensive documentation for developers and users.',
  help: 'Get support, FAQs, and help articles in our Help Center.',
  guides: 'Step-by-step guides to help you get the most out of InfogennieAI.',
};

function AboutContent({ selected }) {
  const item = aboutList.find(f => f.key === selected);
  const [open, setOpen] = useState(null);
  const [tab, setTab] = useState('getting-started');
  const [search, setSearch] = useState('');

  // About Section: Mission, Timeline, Team
  if (selected === 'about') {
    return (
      <div>
        <h1 className="text-4xl font-bold text-blue-700 mb-4 flex items-center gap-3">
          <span className="text-3xl">{item.icon}</span>
          {item.name}
        </h1>
        {/* Mission & Vision Card */}
        <div className="rounded-2xl bg-gradient-to-br from-blue-100 via-blue-50 to-white border border-blue-200 p-8 shadow flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-10">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-blue-800 mb-2">Our Mission & Vision</h2>
            <p className="text-gray-700 mb-4 text-lg">InfogennieAI empowers organizations to unlock the full potential of their data through intuitive, AI-driven analytics. We envision a world where data is not just accessible, but truly actionable for everyone—fueling smarter decisions, innovation, and growth.</p>
            <blockquote className="italic text-blue-600 border-l-4 border-blue-400 pl-4 mb-4">“Turning data into wisdom, and wisdom into action.”</blockquote>
            <button className="mt-2 px-6 py-2 rounded bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-700 hover:to-indigo-700 transition">Discover Our Story</button>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80" alt="Mission" className="rounded-xl shadow-lg w-full max-w-xs object-cover" />
          </div>
        </div>
        {/* Responsive Timeline */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">Our Journey</h2>
          <div className="flex flex-col md:flex-row md:items-start gap-8">
            <ol className="relative border-l-4 border-blue-300 pl-6 md:pl-0 md:border-l-0 md:border-t-4 md:flex-1 md:flex md:gap-8">
              <li className="mb-8 md:mb-0 md:flex-1 relative">
                <div className="absolute -left-7 md:static md:mb-2 flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full shadow-lg"><FaInfoCircle /></div>
                <div className="ml-0 md:ml-0">
                  <span className="font-semibold text-blue-700">2024</span>
                  <p className="text-gray-600 text-sm">Founded in Mumbai, India with a vision to democratize data analytics.</p>
                </div>
              </li>
              <li className="mb-8 md:mb-0 md:flex-1 relative">
                <div className="absolute -left-7 md:static md:mb-2 flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full shadow-lg"><FaBookOpen /></div>
                <div className="ml-0 md:ml-0">
                  <span className="font-semibold text-blue-700">2025</span>
                  <p className="text-gray-600 text-sm">Launched our AI-powered analytics suite and reached 100+ global customers.</p>
                </div>
              </li>
              <li className="mb-8 md:mb-0 md:flex-1 relative">
                <div className="absolute -left-7 md:static md:mb-2 flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full shadow-lg"><FaStar /></div>
                <div className="ml-0 md:ml-0">
                  <span className="font-semibold text-blue-700">2026</span>
                  <p className="text-gray-600 text-sm">Recognized as a leader in AI-driven business intelligence platforms.</p>
                </div>
              </li>
              <li className="md:flex-1 relative">
                <div className="absolute -left-7 md:static md:mb-2 flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full shadow-lg"><FaLightbulb /></div>
                <div className="ml-0 md:ml-0">
                  <span className="font-semibold text-blue-700">Future</span>
                  <p className="text-gray-600 text-sm">Expanding to new markets and innovating in AI for all.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
        {/* Team Avatars - Responsive Grid */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">Meet Our Team</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              { name: 'Amit Sharma', role: 'CEO & Founder', img: 'https://randomuser.me/api/portraits/men/31.jpg', fact: 'Loves cricket and AI ethics.' },
              { name: 'Priya Patel', role: 'Chief Data Scientist', img: 'https://randomuser.me/api/portraits/women/44.jpg', fact: 'Enjoys hiking and data visualization.' },
              { name: 'Rahul Mehra', role: 'Lead Engineer', img: 'https://randomuser.me/api/portraits/men/34.jpg', fact: 'Chess champion and open-source contributor.' },
              { name: 'Sara Khan', role: 'Product Designer', img: 'https://randomuser.me/api/portraits/women/68.jpg', fact: 'Passionate about UX and painting.' },
            ].map((member, i) => (
              <motion.div whileHover={{ scale: 1.08, rotate: 2 }} className="flex flex-col items-center bg-white rounded-xl shadow-lg p-4 border border-blue-100 transition" key={i}>
                <img src={member.img} alt={member.name} className="w-20 h-20 rounded-full border-2 border-blue-400 shadow mb-2 object-cover" />
                <span className="font-semibold text-blue-800">{member.name}</span>
                <span className="text-sm text-gray-500 mb-1">{member.role}</span>
                <span className="italic text-xs text-blue-600 text-center">"{member.fact}"</span>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Join Our Team CTA */}
        <div className="flex flex-col items-center justify-center py-8">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">Want to shape the future of AI analytics?</h3>
          <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg shadow hover:from-blue-700 hover:to-indigo-700 transition">Join Our Team</button>
        </div>
      </div>
    );
  }

  // Blog Section: Cards, Subscribe CTA
  if (selected === 'blog') {
    // Blog posts data
    const posts = [
      {
        title: 'How AI is Transforming Data Analytics in 2024',
        date: 'May 2024',
        excerpt: 'Discover the latest trends in AI-powered analytics and how they are reshaping business intelligence.',
        author: 'Amit Sharma',
        avatar: 'https://randomuser.me/api/portraits/men/31.jpg',
        tags: ['AI', 'Analytics', 'Trends'],
        featured: true
      },
      {
        title: '5 Tips for Better Data Visualization',
        date: 'April 2024',
        excerpt: 'Learn practical tips to make your data visualizations more effective and engaging.',
        author: 'Priya Patel',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        tags: ['Visualization', 'Tips'],
        featured: false
      },
      {
        title: 'InfogennieAI Product Updates: Spring Edition',
        date: 'March 2024',
        excerpt: 'Explore the newest features and improvements in our analytics platform.',
        author: 'Rahul Mehra',
        avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
        tags: ['Product', 'Updates'],
        featured: false
      }
    ];
    const featured = posts.find(p => p.featured);
    const others = posts.filter(p => !p.featured);
    return (
      <div>
        <h1 className="text-4xl font-bold text-blue-700 mb-4 flex items-center gap-3">
          <span className="text-3xl">{item.icon}</span>
          {item.name}
        </h1>
        {/* Featured Post */}
        <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl bg-gradient-to-br from-blue-50 via-white to-blue-100 border border-blue-200 p-8 shadow flex flex-col md:flex-row gap-6 mb-8">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-blue-800 mb-2">{featured.title}</h2>
            <div className="flex items-center gap-3 mb-2">
              <img src={featured.avatar} alt={featured.author} className="w-8 h-8 rounded-full border-2 border-blue-400" />
              <span className="text-sm font-semibold text-blue-700">{featured.author}</span>
              <span className="text-xs text-gray-400">{featured.date}</span>
            </div>
            <div className="flex gap-2 mb-2">
              {featured.tags.map(tag => <span key={tag} className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">{tag}</span>)}
            </div>
            <p className="text-gray-700 mb-4">{featured.excerpt}</p>
            <button className="px-5 py-2 rounded bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition">Read Full Article</button>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80" alt="Blog Visual" className="rounded-xl shadow-lg w-full max-w-xs object-cover" />
          </div>
        </motion.div>
        {/* Other Posts */}
        <div className="grid md:grid-cols-2 gap-6">
          {others.map((post, i) => (
            <motion.div whileHover={{ scale: 1.03 }} className="rounded-xl bg-white border border-blue-100 p-5 shadow flex flex-col justify-between" key={i}>
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-1">{post.title}</h3>
                <div className="flex items-center gap-2 mb-1">
                  <img src={post.avatar} alt={post.author} className="w-7 h-7 rounded-full border-2 border-blue-400" />
                  <span className="text-xs font-semibold text-blue-700">{post.author}</span>
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>
                <div className="flex gap-1 mb-1">
                  {post.tags.map(tag => <span key={tag} className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-semibold">{tag}</span>)}
                </div>
                <p className="text-gray-600 mt-2 text-sm">{post.excerpt}</p>
              </div>
              <button className="mt-4 px-4 py-2 rounded bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition">Read More</button>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center">
          <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l border border-blue-200 focus:outline-none" />
          <button className="mt-2 px-6 py-2 rounded bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-700 hover:to-indigo-700 transition">Subscribe to Blog</button>
        </div>
      </div>
    );
  }

  // Press Section: Accordions, Download Kit
  if (selected === 'press') {
    // Press releases data
    const pressReleases = [
      {
        title: 'InfogennieAI Raises Series A to Accelerate AI Innovation',
        summary: 'InfogennieAI has secured Series A funding to expand its AI research and product development.',
        date: 'Feb 2025',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/6/62/TechCrunch_logo.svg',
        link: '#',
        featured: true
      },
      {
        title: 'Featured in TechCrunch: "The Next Generation of Data Platforms"',
        summary: 'TechCrunch highlights InfogennieAI as a leader in next-gen analytics.',
        date: 'Jan 2025',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/6/62/TechCrunch_logo.svg',
        link: '#',
        featured: false
      },
      {
        title: 'InfogennieAI Partners with Leading Cloud Providers',
        summary: 'New partnerships will bring enhanced scalability and security to our users.',
        date: 'Dec 2024',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
        link: '#',
        featured: false
      }
    ];
    const featured = pressReleases.find(p => p.featured);
    const others = pressReleases.filter(p => !p.featured);
    return (
      <div>
        <h1 className="text-4xl font-bold text-blue-700 mb-4 flex items-center gap-3">
          <span className="text-3xl">{item.icon}</span>
          {item.name}
        </h1>
        {/* Featured Press Release */}
        <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl bg-gradient-to-br from-blue-50 via-white to-blue-100 border border-blue-200 p-8 shadow flex flex-col md:flex-row gap-6 mb-8">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-blue-800 mb-2">{featured.title}</h2>
            <div className="flex items-center gap-3 mb-2">
              <img src={featured.logo} alt="Publication Logo" className="w-10 h-6 object-contain bg-white rounded shadow" />
              <span className="text-xs text-gray-400">{featured.date}</span>
            </div>
            <p className="text-gray-700 mb-4">{featured.summary}</p>
            <a href={featured.link} className="px-5 py-2 rounded bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition inline-block">Read Full Article</a>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Press Visual" className="rounded-xl shadow-lg w-full max-w-xs object-cover" />
          </div>
        </motion.div>
        {/* Other Press Releases as Accordions */}
        <div className="space-y-4">
          {others.map((pr, i) => (
            <motion.div key={i} className="rounded-xl border border-blue-100 bg-white shadow">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex justify-between items-center px-6 py-4 focus:outline-none">
                <div className="flex items-center gap-3">
                  <img src={pr.logo} alt="Publication Logo" className="w-8 h-5 object-contain bg-white rounded shadow" />
                  <span className="text-lg font-semibold text-blue-800">{pr.title}</span>
                </div>
                <span className="ml-4 text-blue-600">{open === i ? '-' : '+'}</span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-6 pb-4 text-gray-700 text-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-gray-400">{pr.date}</span>
                      <a href={pr.link} className="text-blue-600 underline text-xs">Read Full Article</a>
                    </div>
                    {pr.summary}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <button className="px-6 py-2 rounded bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-700 hover:to-indigo-700 transition">Download Press Kit</button>
        </div>
      </div>
    );
  }

  // Resources Section: Resource Cards
  if (selected === 'resources') {
    const resources = [
      { title: 'Whitepaper: AI-Driven Business Intelligence', type: 'Whitepaper', icon: <FaFileAlt className="text-blue-500" />, desc: 'In-depth analysis of AI in BI for 2024.', link: '#', action: 'Download PDF' },
      { title: 'Case Study: Retail Analytics Success Story', type: 'Case Study', icon: <FaBook className="text-green-500" />, desc: 'How a major retailer boosted sales with InfogennieAI.', link: '#', action: 'View Case Study' },
      { title: 'eBook: Data Visualization Best Practices', type: 'eBook', icon: <FaBookOpen className="text-indigo-500" />, desc: 'A practical guide to effective data visualization.', link: '#', action: 'Download eBook' },
      { title: 'API Quickstart Guide', type: 'Guide', icon: <FaInfoCircle className="text-yellow-500" />, desc: 'Step-by-step API integration instructions.', link: '#', action: 'Read Guide' },
      { title: 'Webinar: AI for Business', type: 'Webinar', icon: <FaStar className="text-pink-500" />, desc: 'Watch our latest webinar on AI adoption.', link: '#', action: 'Watch Webinar' },
    ];
    return (
      <div>
        <h1 className="text-4xl font-bold text-blue-700 mb-4 flex items-center gap-3">
          <span className="text-3xl">{item.icon}</span>
          {item.name}
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((res, i) => (
            <motion.div whileHover={{ scale: 1.03 }} key={i} className="rounded-xl bg-white border border-blue-100 p-6 shadow flex flex-col justify-between transition-all">
              <div className="flex items-center gap-3 mb-2">
                {res.icon}
                <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-100">{res.type}</span>
              </div>
              <h3 className="text-lg font-semibold text-blue-800 mb-1">{res.title}</h3>
              <p className="text-gray-600 text-sm mb-4 flex-1">{res.desc}</p>
              <a href={res.link} className="mt-2 px-4 py-2 rounded bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold hover:from-blue-700 hover:to-indigo-700 transition text-center w-full">{res.action}</a>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center">
          <span className="text-gray-500 text-sm mb-2">Looking for something else?</span>
          <button className="px-6 py-2 rounded bg-blue-100 text-blue-700 font-semibold hover:bg-blue-200 transition">Contact Us for More Resources</button>
        </div>
      </div>
    );
  }

  // Docs Section: Tabs, Code Snippet, Search, Quick Links
  if (selected === 'docs') {
    const tabContent = {
      'getting-started': {
        label: 'Getting Started',
        content: <div className="mt-4 text-gray-700"><p>Quickly set up InfogennieAI in your project:</p><pre className="bg-gray-100 rounded p-4 mt-2 text-xs overflow-x-auto">npm install infogennieai --save</pre><ul className="list-disc pl-6 mt-2 text-sm"><li>Install the package</li><li>Import and initialize in your app</li><li>Start analyzing your data</li></ul></div>
      },
      'api': {
        label: 'API Reference',
        content: <div className="mt-4 text-gray-700"><p>Explore our REST API for data integration and analytics:</p><pre className="bg-gray-100 rounded p-4 mt-2 text-xs overflow-x-auto">GET /api/v1/analytics?query=...</pre><ul className="list-disc pl-6 mt-2 text-sm"><li>Authentication via API key</li><li>Flexible query parameters</li><li>JSON responses</li></ul></div>
      },
      'advanced': {
        label: 'Advanced',
        content: <div className="mt-4 text-gray-700"><p>Advanced customization and embedding:</p><pre className="bg-gray-100 rounded p-4 mt-2 text-xs overflow-x-auto">&lt;InfogennieAIWidget config=&#123;...&#125; /&gt;</pre><ul className="list-disc pl-6 mt-2 text-sm"><li>Custom widgets</li><li>Theme and branding options</li><li>Event hooks</li></ul></div>
      },
      'faq': {
        label: 'FAQ',
        content: <div className="mt-4 text-gray-700"><ul className="list-disc pl-6 text-sm"><li>How do I get an API key?</li><li>Where can I find more code samples?</li><li>How do I contact support?</li></ul></div>
      },
    };
    const quickLinks = [
      { label: 'API Authentication', link: '#' },
      { label: 'Data Sources', link: '#' },
      { label: 'Visualization Examples', link: '#' },
      { label: 'Error Handling', link: '#' },
    ];
    return (
      <div>
        <h1 className="text-4xl font-bold text-blue-700 mb-4 flex items-center gap-3">
          <span className="text-3xl">{item.icon}</span>
          {item.name}
        </h1>
        <div className="mb-6 flex flex-col md:flex-row md:items-center gap-4">
          <input value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder="Search documentation..." className="flex-1 px-4 py-2 rounded border border-blue-200 focus:outline-none" />
          <div className="flex gap-2 flex-wrap">
            {quickLinks.map((q, i) => (
              <a key={i} href={q.link} className="px-3 py-1 rounded bg-blue-100 text-blue-700 text-xs font-semibold hover:bg-blue-200 transition whitespace-nowrap">{q.label}</a>
            ))}
          </div>
        </div>
        <div className="flex gap-4 mb-4 overflow-x-auto">
          {Object.entries(tabContent).map(([key, t]) => (
            <button key={key} onClick={() => setTab(key)} className={`px-4 py-2 rounded-t-lg font-semibold ${tab === key ? 'bg-blue-100 text-blue-800' : 'bg-white text-blue-600 hover:bg-blue-50'} transition whitespace-nowrap`}>
              {t.label}
            </button>
          ))}
        </div>
        <motion.div layout className="rounded-b-xl border border-blue-100 bg-white p-6 shadow transition-all">
          {tabContent[tab].content}
        </motion.div>
        <div className="mt-6 flex justify-end">
          <a href="#" className="px-6 py-2 rounded bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-700 hover:to-indigo-700 transition">Open Full Docs</a>
        </div>
      </div>
    );
  }

  // Help Center: Search, FAQ Accordion, Contact
  if (selected === 'help') {
    const faqs = [
      { q: 'How do I reset my password?', a: 'Go to your account settings and click on "Reset Password".' },
      { q: 'How can I contact support?', a: 'Email us at support@infogennie.ai or use the Contact Support button below.' },
      { q: 'Where can I find API documentation?', a: 'Check the Documentation section or visit our developer portal.' },
      { q: 'How do I invite team members?', a: 'Go to Team Settings and click "Invite Member".' },
      { q: 'How do I upgrade my plan?', a: 'Visit the Billing section in your account dashboard.' },
    ];
    const featured = {
      title: 'Getting Started with InfogennieAI',
      desc: 'Learn how to set up your account, connect data sources, and create your first dashboard in minutes.',
      link: '#',
    };
    return (
      <div>
        <h1 className="text-4xl font-bold text-blue-700 mb-4 flex items-center gap-3">
          <span className="text-3xl">{item.icon}</span>
          {item.name}
        </h1>
        {/* Featured Help Topic */}
        <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl bg-gradient-to-br from-blue-50 via-white to-blue-100 border border-blue-200 p-6 shadow flex flex-col md:flex-row gap-6 mb-8">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-blue-800 mb-2">{featured.title}</h2>
            <p className="text-gray-700 mb-4">{featured.desc}</p>
            <a href={featured.link} className="px-5 py-2 rounded bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition inline-block">Read Guide</a>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80" alt="Help Visual" className="rounded-xl shadow-lg w-full max-w-xs object-cover" />
          </div>
        </motion.div>
        {/* Search Bar */}
        <div className="mb-6">
          <input type="text" placeholder="Search help topics..." className="w-full px-4 py-2 rounded border border-blue-200 focus:outline-none" />
        </div>
        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div key={i} className="rounded-xl border border-blue-100 bg-white shadow">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex justify-between items-center px-6 py-4 focus:outline-none">
                <span className="text-lg font-semibold text-blue-800">{faq.q}</span>
                <span className="ml-4 text-blue-600">{open === i ? '-' : '+'}</span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-6 pb-4 text-gray-700 text-sm">
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        {/* Contact Support Card */}
        <div className="mt-10 flex flex-col md:flex-row gap-6 items-center justify-center">
          <div className="rounded-xl bg-blue-50 border border-blue-200 p-6 flex-1 flex flex-col items-center text-center shadow">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">Need more help?</h3>
            <p className="text-gray-600 mb-4">Our support team is here for you 24/7. Reach out for personalized assistance or urgent issues.</p>
            <a href="mailto:support@infogennie.ai" className="px-6 py-2 rounded bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:from-blue-700 hover:to-indigo-700 transition">Contact Support</a>
          </div>
        </div>
      </div>
    );
  }

  // Guides: Step-by-step cards, progress, featured guide
  if (selected === 'guides') {
    const guides = [
      { title: 'Connect Your Data Sources', steps: 3, time: '5 min', progress: 2, desc: 'Easily link your databases, spreadsheets, and cloud apps.' },
      { title: 'Build a Custom Dashboard', steps: 4, time: '8 min', progress: 1, desc: 'Create interactive dashboards tailored to your business.' },
      { title: 'Automate Reports', steps: 2, time: '3 min', progress: 2, desc: 'Schedule and automate your analytics reports.' },
    ];
    const featured = {
      title: 'Getting Started: Your First Dashboard',
      desc: 'A step-by-step guide to creating your first dashboard and visualizing your data with InfogennieAI.',
      steps: 5,
      time: '10 min',
      progress: 3,
      link: '#',
    };
    return (
      <div>
        <h1 className="text-4xl font-bold text-blue-700 mb-4 flex items-center gap-3">
          <span className="text-3xl">{item.icon}</span>
          {item.name}
        </h1>
        {/* Featured Guide */}
        <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl bg-gradient-to-br from-blue-50 via-white to-blue-100 border border-blue-200 p-6 shadow flex flex-col md:flex-row gap-6 mb-8">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-blue-800 mb-2">{featured.title}</h2>
            <p className="text-gray-700 mb-4">{featured.desc}</p>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded-full font-semibold">{featured.steps} steps</span>
              <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full font-semibold">{featured.time}</span>
            </div>
            <div className="w-full bg-blue-100 rounded-full h-2 mb-4">
              <div className="bg-blue-600 h-2 rounded-full transition-all" style={{ width: `${(featured.progress / featured.steps) * 100}%` }}></div>
            </div>
            <a href={featured.link} className="px-5 py-2 rounded bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition inline-block">Start Guide</a>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80" alt="Guide Visual" className="rounded-xl shadow-lg w-full max-w-xs object-cover" />
          </div>
        </motion.div>
        {/* Other Guides */}
        <div className="grid md:grid-cols-3 gap-6">
          {guides.map((g, i) => (
            <motion.div whileHover={{ scale: 1.03 }} key={i} className="rounded-xl bg-white border border-blue-100 p-5 shadow flex flex-col justify-between transition-all">
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">{g.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{g.desc}</p>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded-full font-semibold">{g.steps} steps</span>
                  <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full font-semibold">{g.time}</span>
                </div>
                <div className="w-full bg-blue-100 rounded-full h-2 mb-2">
                  <div className="bg-blue-600 h-2 rounded-full transition-all" style={{ width: `${(g.progress / g.steps) * 100}%` }}></div>
                </div>
              </div>
              <button className="mt-4 px-4 py-2 rounded bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition">Continue</button>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  // fallback
  return null;
}

const About = () => {
  const [selected, setSelected] = useState(aboutList[0].key);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-white flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 pt-20 h-[calc(100vh-5rem)] overflow-hidden">
        {/* Sidebar */}
        <div className={`hidden md:flex flex-col relative transition-all duration-300 ${sidebarOpen ? 'w-80 min-w-[260px]' : 'w-24 min-w-[96px]'} bg-gradient-to-b from-blue-700 via-blue-500 to-blue-400 text-white h-full overflow-y-auto hide-scrollbar`} style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', marginTop: 0 }}>
          {/* Top: About label and Collapse/Expand Arrow, aligned horizontally */}
          <div className="flex items-center w-full pt-3 pr-2 pb-2 pl-4 gap-2">
            <span className={`text-2xl font-bold flex items-center transition-all duration-200 ${sidebarOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0 pointer-events-none'} whitespace-nowrap`}>About</span>
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
            {aboutList.map((f) => (
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
          {aboutList.map((f) => (
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
        <main className="flex-1 p-4 md:p-8 h-full overflow-y-auto">
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
              <AboutContent selected={selected} />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default About; 