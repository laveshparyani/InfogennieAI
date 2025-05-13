import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import Marquee from 'react-fast-marquee';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaChartBar, FaBolt, FaRobot, FaUserFriends, FaSmile, FaDatabase, FaFileAlt, FaLock, FaPlayCircle, FaCalendarAlt, FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

// Demo data for Stores Sales Trend
const salesData = [
  { year: 2018, StoreA: 45, StoreB: 35 },
  { year: 2019, StoreA: 42, StoreB: 30 },
  { year: 2020, StoreA: 48, StoreB: 38 },
  { year: 2021, StoreA: 50, StoreB: 40 },
  { year: 2022, StoreA: 44, StoreB: 36 },
  { year: 2023, StoreA: 46, StoreB: 37 },
  { year: 2024, StoreA: 49, StoreB: 39 },
  { year: 2025, StoreA: 47, StoreB: 38 },
];

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnM+CiAgICA8cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHBhdGggZD0iTSAyMCAwIEwgMCAwIDAgMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4yIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPgo8L3N2Zz4=')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
              className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight"
            >
              Transform Your Data into{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Powerful Insights
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
              className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed"
            >
              Build stunning Data Analytics Dashboards in minutes. Harness the power of Generative AI to create intelligent Business Intelligence solutions.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link 
                to="/register" 
                className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <FaPlayCircle className="text-2xl group-hover:animate-pulse" /> Start Free Trial
              </Link>
              <a 
                href="#demo" 
                className="px-8 py-4 rounded-xl font-semibold bg-white text-gray-800 border-2 border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg flex items-center justify-center gap-2 group"
              >
                <FaCalendarAlt className="text-2xl group-hover:animate-bounce" /> Watch Demo
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8, ease: 'easeOut' }}
              className="flex flex-wrap justify-center gap-8 text-gray-600"
            >
              <motion.div whileHover={{ scale: 1.15 }} className="flex items-center gap-2 cursor-pointer">
                <FaCheckCircle className="w-5 h-5 text-green-500 animate-pulse" />
                <span>No credit card required</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.15 }} className="flex items-center gap-2 cursor-pointer">
                <FaCheckCircle className="w-5 h-5 text-green-500 animate-pulse" />
                <span>14-day free trial</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.15 }} className="flex items-center gap-2 cursor-pointer">
                <FaCheckCircle className="w-5 h-5 text-green-500 animate-pulse" />
                <span>Cancel anytime</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <FaChartBar className="text-blue-600 animate-pulse" /> Powerful Features for Modern Analytics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to transform your data into actionable insights
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center group cursor-pointer"
            >
              <motion.div whileHover={{ scale: 1.15, rotate: 8 }} className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaChartBar className="w-8 h-8 text-white animate-pulse" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Data Visualization</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Create stunning, interactive visualizations with our powerful tools. Transform complex data into clear, actionable insights.
              </p>
            </motion.div>
            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center group cursor-pointer"
            >
              <motion.div whileHover={{ scale: 1.15, rotate: -8 }} className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaBolt className="w-8 h-8 text-white animate-bounce" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-time Analytics</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Get instant insights with real-time data processing. Make data-driven decisions with confidence using live analytics.
              </p>
            </motion.div>
            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center group cursor-pointer"
            >
              <motion.div whileHover={{ scale: 1.15, rotate: 8 }} className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaRobot className="w-8 h-8 text-white animate-pulse" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered Insights</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Leverage cutting-edge AI to uncover hidden patterns and generate intelligent recommendations from your data.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Analytics Dashboard Preview Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experience the Power of Modern Analytics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get a glimpse of our powerful analytics dashboard in action
            </p>
          </div>
          
          {/* Dashboard Preview */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Dashboard Header */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <button className="px-4 py-2 rounded-lg bg-blue-50 text-blue-600 font-semibold text-sm hover:bg-blue-100 transition-colors">
                    All Time
                  </button>
                  <div className="flex items-center gap-2">
                    <input 
                      type="date" 
                      className="px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <span className="text-gray-400">to</span>
                    <input 
                      type="date" 
                      className="px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </button>
                  <button className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.1, duration: 0.7, ease: 'easeOut' }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-md"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-gray-500">Total Revenue</h3>
                  <span className="text-green-500 text-sm font-medium">+12.5%</span>
                </div>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-gray-900">
                    $
                    <CountUp end={24692} duration={1.5} separator="," />
                  </span>
                  <span className="ml-2 text-sm text-gray-500">this month</span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 shadow-md"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-gray-500">Active Users</h3>
                  <span className="text-green-500 text-sm font-medium">+8.2%</span>
                </div>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-gray-900">
                    <CountUp end={2847} duration={1.5} separator="," />
                  </span>
                  <span className="ml-2 text-sm text-gray-500">users</span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
                className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 shadow-md"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-gray-500">Conversion Rate</h3>
                  <span className="text-green-500 text-sm font-medium">+3.1%</span>
                </div>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-gray-900">
                    <CountUp end={5.18} duration={1.5} decimals={2} suffix="%" />
                  </span>
                  <span className="ml-2 text-sm text-gray-500">avg</span>
                </div>
              </motion.div>
            </div>

            {/* Chart */}
            <div className="p-6 border-t border-gray-100">
              <div className="bg-white rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Revenue Overview</h3>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      <span className="text-sm text-gray-600">This Year</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                      <span className="text-sm text-gray-600">Last Year</span>
                    </div>
                  </div>
                </div>
                <div className="w-full h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={salesData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                      <XAxis 
                        dataKey="year" 
                        stroke="#64748b"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis 
                        stroke="#64748b"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `$${value}K`}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'white',
                          border: 'none',
                          borderRadius: '8px',
                          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="StoreA" 
                        stroke="#3b82f6" 
                        strokeWidth={3}
                        dot={false}
                        activeDot={{ r: 8 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="StoreB" 
                        stroke="#94a3b8" 
                        strokeWidth={3}
                        dot={false}
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="p-6 border-t border-gray-100">
              <div className="bg-white rounded-xl">
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
                  <button className="text-sm text-blue-600 font-medium hover:text-blue-700">View All</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-sm font-medium text-gray-500">
                        <th className="px-6 py-4">Transaction ID</th>
                        <th className="px-6 py-4">Customer</th>
                        <th className="px-6 py-4">Amount</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="text-sm text-gray-900">
                        <td className="px-6 py-4">#TRX-1234</td>
                        <td className="px-6 py-4">John Doe</td>
                        <td className="px-6 py-4">$534.87</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Completed
                          </span>
                        </td>
                        <td className="px-6 py-4">2024-03-15</td>
                      </tr>
                      <tr className="text-sm text-gray-900">
                        <td className="px-6 py-4">#TRX-1235</td>
                        <td className="px-6 py-4">Jane Smith</td>
                        <td className="px-6 py-4">$892.00</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            Pending
                          </span>
                        </td>
                        <td className="px-6 py-4">2024-03-14</td>
                      </tr>
                      <tr className="text-sm text-gray-900">
                        <td className="px-6 py-4">#TRX-1236</td>
                        <td className="px-6 py-4">Mike Johnson</td>
                        <td className="px-6 py-4">$1,249.99</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Completed
                          </span>
                        </td>
                        <td className="px-6 py-4">2024-03-14</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visualize Smarter CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="py-20 bg-gradient-to-br from-blue-50/60 via-white to-indigo-50/60 relative overflow-hidden"
      >
        {/* Animated Background Blobs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.6, scale: 1 }}
          transition={{ delay: 0.2, duration: 1.2, ease: 'easeOut' }}
          className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-indigo-200/40 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.6, scale: 1 }}
          transition={{ delay: 0.4, duration: 1.2, ease: 'easeOut' }}
          className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-indigo-200/40 to-blue-200/40 rounded-full blur-2xl pointer-events-none"
        />
        <div className="container-custom flex flex-col items-center text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
            className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 drop-shadow-lg"
          >
            Visualize smarter. Decide faster.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
            className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8 font-medium"
          >
            Start with <span className="text-blue-600 font-bold">InfogennieAI</span>, your all-in-one generative BI tool for turning data into compelling stories. Scale with intelligent visualizations, auto-organized dashboards, and shareable insights—all powered by Generative AI. Deliver client-ready reports in minutes, with zero manual effort.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-4"
          >
            <motion.div whileHover={{ scale: 1.08, boxShadow: '0 8px 32px 0 rgba(59, 130, 246, 0.15)' }}>
              <Link to="/register" className="px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                Try for free
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.08, boxShadow: '0 8px 32px 0 rgba(99, 102, 241, 0.15)' }}>
              <a href="#demo" className="px-8 py-3 rounded-xl font-semibold border-2 border-blue-600 text-blue-600 bg-white hover:bg-blue-50 hover:text-indigo-700 transition-all duration-300 text-lg">
                Watch demo
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Video/Demo Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="py-20 bg-gradient-to-br from-blue-50/60 via-white to-indigo-50/60"
        id="demo"
      >
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 drop-shadow-lg">
                See InfogennieAI in Action
              </h2>
              <p className="text-xl text-gray-700 font-medium">
                Watch how easy it is to transform your data into powerful insights with our AI-powered platform
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
              className="relative rounded-3xl overflow-hidden shadow-2xl bg-white/80 backdrop-blur-xl border border-blue-100"
            >
              {/* Video Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
                className="relative w-full"
                style={{ aspectRatio: '16/9' }}
              >
                <iframe
                  className="w-full h-full min-h-[400px] max-h-[600px] rounded-t-3xl"
                  src="https://www.youtube.com/embed/WmiUdpmrG3g"
                  title="InfogennieAI Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </motion.div>

              {/* Features List */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
                className="p-10 bg-white/90 border-t border-blue-100"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.5, duration: 0.7, ease: 'easeOut' }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl">
                        <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg mb-1">Quick Setup</h3>
                      <p className="text-sm text-gray-600">Get started in minutes</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.6, duration: 0.7, ease: 'easeOut' }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl">
                        <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg mb-1">Real-time Updates</h3>
                      <p className="text-sm text-gray-600">Live data processing</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.7, duration: 0.7, ease: 'easeOut' }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl">
                        <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg mb-1">Secure Platform</h3>
                      <p className="text-sm text-gray-600">Enterprise-grade security</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
              className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.06, boxShadow: '0 8px 32px 0 rgba(59, 130, 246, 0.15)' }}
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Start Free Trial
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.06, boxShadow: '0 8px 32px 0 rgba(99, 102, 241, 0.15)' }}
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-semibold text-blue-700 bg-white border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
              >
                Schedule Demo
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Trusted By Section */}
      {false && (
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="py-16 bg-gray-50"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-lg text-gray-600">
              Join thousands of companies using InfogennieAI to transform their data analytics
            </p>
          </motion.div>
          {/* Logo Carousel */}
          <Marquee gradient={false} speed={40} pauseOnHover={true} className="py-4 overflow-y-hidden items-center">
            {['microsoft','google','deloitte','capgemini','infosys','tcs','microsoft','google','deloitte','capgemini','infosys','tcs'].map((logo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2 + i * 0.07, duration: 0.6, ease: 'easeOut' }}
                className="mx-10 w-[140px] aspect-[3/2] flex items-center justify-center"
              >
                <img 
                  src={`/logos/${logo}.png`} 
                  alt={logo.charAt(0).toUpperCase() + logo.slice(1)} 
                  className="w-full h-full object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </motion.div>
            ))}
          </Marquee>
          {/* Animated Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
            className="mt-16 text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
              className="inline-flex items-center gap-8 p-6 bg-white rounded-2xl shadow-lg"
            >
              <div className="text-left">
                <p className="text-4xl font-bold text-gray-900">
                  <CountUp end={2500} duration={2} separator="," />+
                </p>
                <p className="text-gray-600">Active Users</p>
              </div>
              <div className="h-12 w-px bg-gray-200"></div>
              <div className="text-left">
                <p className="text-4xl font-bold text-gray-900">
                  <CountUp end={98} duration={2} suffix="%" />
                </p>
                <p className="text-gray-600">Satisfaction Rate</p>
              </div>
              <div className="h-12 w-px bg-gray-200"></div>
              <div className="text-left">
                <p className="text-4xl font-bold text-gray-900">
                  <CountUp end={24} duration={2} />/<CountUp end={7} duration={2} />
                </p>
                <p className="text-gray-600">Support</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      )}

      {/* Testimonials Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="py-20 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Loved by Data Teams Worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our customers have to say about their experience with InfogennieAI
            </p>
          </motion.div>
          {/* Testimonials Carousel */}
          <Marquee gradient={false} speed={30} pauseOnHover={true} className="mb-12 overflow-y-hidden items-center">
            {[{
              initials: 'TZ',
              name: 'Themba Zulu',
              title: 'BI Developer @ TechCorp',
              text: 'InfogennieAI has revolutionized how we handle data analytics. The AI-powered insights have helped us make better decisions faster than ever before.',
              date: '2024-03-15',
              color: 'from-blue-500 to-indigo-600'
            },{
              initials: 'NM',
              name: 'Nomsa Mthembu',
              title: 'Data Analyst @ DataCo',
              text: 'The automated dashboard generation and real-time analytics have saved us countless hours. It\'s like having an extra team member dedicated to data analysis.',
              date: '2024-03-14',
              color: 'from-purple-500 to-pink-600'
            },{
              initials: 'GR',
              name: 'Gita Raman',
              title: 'Analytics Manager @ InsightCo',
              text: 'The AI-powered insights have transformed how we approach data analysis. Our team can now focus on strategy instead of manual data processing.',
              date: '2024-03-13',
              color: 'from-green-500 to-teal-600'
            }].concat([
              {
                initials: 'TZ',
                name: 'Themba Zulu',
                title: 'BI Developer @ TechCorp',
                text: 'InfogennieAI has revolutionized how we handle data analytics. The AI-powered insights have helped us make better decisions faster than ever before.',
                date: '2024-03-15',
                color: 'from-blue-500 to-indigo-600'
              },{
                initials: 'NM',
                name: 'Nomsa Mthembu',
                title: 'Data Analyst @ DataCo',
                text: 'The automated dashboard generation and real-time analytics have saved us countless hours. It\'s like having an extra team member dedicated to data analysis.',
                date: '2024-03-14',
                color: 'from-purple-500 to-pink-600'
              },{
                initials: 'GR',
                name: 'Gita Raman',
                title: 'Analytics Manager @ InsightCo',
                text: 'The AI-powered insights have transformed how we approach data analysis. Our team can now focus on strategy instead of manual data processing.',
                date: '2024-03-13',
                color: 'from-green-500 to-teal-600'
              }
            ]).map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.7, ease: 'easeOut' }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 mx-6 min-w-[350px] max-w-[350px] flex-shrink-0"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-semibold text-lg`}>
                    {t.initials}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">{t.name}</h4>
                    <p className="text-sm text-gray-600">{t.title}</p>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-gray-700 leading-relaxed">
                    "{t.text}"
                  </blockquote>
                </div>
                <div className="text-sm text-gray-500">
                  <span>Posted on </span>
                  <time dateTime={t.date}>{new Date(t.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                </div>
              </motion.div>
            ))}
          </Marquee>
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.7, duration: 0.8, ease: 'easeOut' }}
            className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="text-4xl font-bold text-gray-900 mb-2"><CountUp end={98} duration={2} suffix="%" /></div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="text-4xl font-bold text-gray-900 mb-2"><CountUp end={2500000} duration={2.5} separator="," />+</div>
              <div className="text-gray-600">Data Points Analyzed</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="text-4xl font-bold text-gray-900 mb-2"><CountUp end={500} duration={2} />+</div>
              <div className="text-gray-600">Enterprise Clients</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="text-4xl font-bold text-gray-900 mb-2"><CountUp end={24} duration={2} />/<CountUp end={7} duration={2} /></div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Supported Datasources Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="py-20 bg-gradient-to-b from-white to-blue-50"
      >
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
            className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-12 drop-shadow-lg"
          >
            Supported Datasources
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Structured & Unstructured Files */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
              className="backdrop-blur-xl bg-white/80 border border-blue-100 rounded-3xl shadow-2xl p-10 flex flex-col mb-4"
            >
              <h3 className="text-xl font-bold text-blue-700 mb-4">Structured Files:</h3>
              <div className="flex flex-wrap gap-4 mb-6">
                {['CSV', 'XML', 'XLX', 'XLSX', 'JSON'].map((type, i) => (
                  <motion.span
                    key={type}
                    whileHover={{ scale: 1.08, boxShadow: '0 4px 16px 0 rgba(59, 130, 246, 0.10)' }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 font-semibold rounded-xl shadow-sm text-base hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 hover:text-blue-900 transition-all duration-200 cursor-pointer border border-blue-200"
                  >
                    <span className="mr-2">📄</span>{type}
                  </motion.span>
                ))}
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-4">Unstructured Files:</h3>
              <div className="flex flex-wrap gap-4">
                {['PDF', 'PNG', 'JPEG', 'MP4'].map((type, i) => (
                  <motion.span
                    key={type}
                    whileHover={{ scale: 1.08, boxShadow: '0 4px 16px 0 rgba(59, 130, 246, 0.10)' }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 font-semibold rounded-xl shadow-sm text-base hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 hover:text-blue-900 transition-all duration-200 cursor-pointer border border-blue-200"
                  >
                    <span className="mr-2">📄</span>{type}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            {/* API & DB Connectors */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
              className="backdrop-blur-xl bg-white/80 border border-blue-100 rounded-3xl shadow-2xl p-10 flex flex-col mb-4"
            >
              <h3 className="text-xl font-bold text-blue-700 mb-4">API Connectors:</h3>
              <motion.span
                whileHover={{ scale: 1.08, boxShadow: '0 4px 16px 0 rgba(59, 130, 246, 0.10)' }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 font-semibold rounded-xl shadow-sm text-base mb-6 hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 hover:text-blue-900 transition-all duration-200 cursor-pointer border border-blue-200"
              >
                <span className="mr-2">🔗</span>Google Spreadsheet
              </motion.span>
              <h3 className="text-xl font-bold text-blue-700 mb-4">DB Connectors:</h3>
              <div className="flex flex-wrap gap-4">
                {['MySQL', 'MongoDB', 'Snowflake', 'Airtable', 'Microsoft SQL', 'PostgreSQL'].map((type, i) => (
                  <motion.span
                    key={type}
                    whileHover={{ scale: 1.08, boxShadow: '0 4px 16px 0 rgba(59, 130, 246, 0.10)' }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 font-semibold rounded-xl shadow-sm text-base hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 hover:text-blue-900 transition-all duration-200 cursor-pointer border border-blue-200"
                  >
                    <span className="mr-2">🗄️</span>{type}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="bg-gray-900 text-white pt-20 pb-10"
      >
        <div className="container-custom">
          {/* Main Footer Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
            className="grid grid-cols-1 md:grid-cols-6 gap-12 mb-16"
          >
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
              className="md:col-span-2"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
                className="flex items-center mb-6"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mr-3">
                  <span className="text-white text-xl font-bold">I</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  InfogennieAI
                </span>
              </motion.div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Transform your data into actionable insights with our AI-powered analytics platform. Make smarter decisions faster.
              </p>
              <div className="flex space-x-4">
                <motion.a whileHover={{ scale: 1.15, color: '#60a5fa' }} href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <SiX className="w-6 h-6" />
                </motion.a>
                <motion.a whileHover={{ scale: 1.15, color: '#6366f1' }} href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </motion.a>
                <motion.a whileHover={{ scale: 1.15, color: '#E1306C' }} href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <FaInstagram className="w-6 h-6" />
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
              className="md:col-span-1"
            >
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-3">
                <li><motion.a whileHover={{ scale: 1.08, color: '#fff' }} href="#" className="text-gray-400 hover:text-white transition-colors">Features</motion.a></li>
                <li><motion.a whileHover={{ scale: 1.08, color: '#fff' }} href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</motion.a></li>
                <li><motion.a whileHover={{ scale: 1.08, color: '#fff' }} href="#" className="text-gray-400 hover:text-white transition-colors">Security</motion.a></li>
                <li><motion.a whileHover={{ scale: 1.08, color: '#fff' }} href="#" className="text-gray-400 hover:text-white transition-colors">Roadmap</motion.a></li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
              className="md:col-span-1"
            >
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li><motion.a whileHover={{ scale: 1.08, color: '#fff' }} href="#" className="text-gray-400 hover:text-white transition-colors">About</motion.a></li>
                <li><motion.a whileHover={{ scale: 1.08, color: '#fff' }} href="#" className="text-gray-400 hover:text-white transition-colors">Blog</motion.a></li>
                <li><motion.a whileHover={{ scale: 1.08, color: '#fff' }} href="#" className="text-gray-400 hover:text-white transition-colors">Careers</motion.a></li>
                <li><motion.a whileHover={{ scale: 1.08, color: '#fff' }} href="#" className="text-gray-400 hover:text-white transition-colors">Press</motion.a></li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
              className="md:col-span-1"
            >
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><motion.a whileHover={{ scale: 1.08, color: '#fff' }} href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</motion.a></li>
                <li><motion.a whileHover={{ scale: 1.08, color: '#fff' }} href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</motion.a></li>
                <li><motion.a whileHover={{ scale: 1.08, color: '#fff' }} href="#" className="text-gray-400 hover:text-white transition-colors">Guides</motion.a></li>
                <li><motion.a whileHover={{ scale: 1.08, color: '#fff' }} href="#" className="text-gray-400 hover:text-white transition-colors">API Status</motion.a></li>
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
              className="md:col-span-1"
            >
              <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates and insights.</p>
              <motion.form
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.7, duration: 0.7, ease: 'easeOut' }}
                className="space-y-3"
              >
                <div>
                  <label htmlFor="email-address" className="sr-only">Email address</label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full px-4 py-2 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.06, boxShadow: '0 4px 16px 0 rgba(59, 130, 246, 0.10)' }}
                  type="submit"
                  className="w-full px-4 py-2 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </motion.form>
            </motion.div>
          </motion.div>

          {/* Footer Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
            className="border-t border-gray-800 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} InfogennieAI. All rights reserved.
              </div>
              <div className="flex space-x-6">
                <motion.a whileHover={{ scale: 1.08, color: '#fff' }} href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</motion.a>
                <motion.a whileHover={{ scale: 1.08, color: '#fff' }} href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</motion.a>
                <motion.a whileHover={{ scale: 1.08, color: '#fff' }} href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Home;

<style jsx global>{`
@keyframes slide-infinite {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-slide-infinite {
  animation: slide-infinite 30s linear infinite;
}
`}</style> 