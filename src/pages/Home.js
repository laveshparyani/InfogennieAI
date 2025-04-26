import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

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
      <section className="w-full flex flex-col items-center justify-center pt-16 pb-12 bg-white">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2 text-center">Generative BI Dashboard</h1>
        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 text-center">InfogennieAI</h2>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl">
          Build Data Analytics Dashboards within 10 Minutes. Leverage Generative AI to develop Business Intelligence Dashboards.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay3">
          <Link to="/register" className="px-6 py-2 rounded-lg font-semibold bg-gradient-to-r from-primary to-accent text-white shadow hover:from-accent hover:to-primary transition-all duration-200">Try for free</Link>
          <a href="#" className="px-6 py-2 rounded-lg font-semibold bg-gradient-to-r from-primary to-secondary text-white shadow hover:from-secondary hover:to-primary transition-all duration-200">Book a Demo</a>
          <a href="#" className="px-6 py-2 rounded-lg font-semibold border-2 border-primary text-primary bg-white hover:bg-primary hover:text-white transition-all duration-200">Contact Us</a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 bg-white rounded-xl shadow hover:shadow-lg transition-shadow border border-gray-100 flex flex-col items-center">
              <h3 className="text-xl font-semibold text-primary mb-2">Data Visualization</h3>
              <p className="text-gray-600 text-center">Create beautiful and interactive visualizations from your data with our powerful tools.</p>
            </div>
            {/* Feature 2 */}
            <div className="p-8 bg-white rounded-xl shadow hover:shadow-lg transition-shadow border border-gray-100 flex flex-col items-center">
              <h3 className="text-xl font-semibold text-primary mb-2">Power BI Integration</h3>
              <p className="text-gray-600 text-center">Seamlessly integrate with Power BI for advanced analytics and reporting.</p>
            </div>
            {/* Feature 3 */}
            <div className="p-8 bg-white rounded-xl shadow hover:shadow-lg transition-shadow border border-gray-100 flex flex-col items-center">
              <h3 className="text-xl font-semibold text-primary mb-2">Real-time Analytics</h3>
              <p className="text-gray-600 text-center">Get real-time insights and analytics to make data-driven decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Dashboard Preview Section */}
      <section className="py-8 bg-white">
        <div className="container-custom flex flex-col items-center">
          {/* Stat Cards */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center border border-gray-100 animate-fade-in">
              <span className="text-xs text-gray-500 mb-1">Avg Lifetime Value</span>
              <span className="text-2xl font-bold text-primary">$2,692</span>
              <span className="text-green-600 text-xs font-semibold mt-1">+ $12</span>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center border border-gray-100 animate-fade-in-delay">
              <span className="text-xs text-gray-500 mb-1">Win Rate</span>
              <span className="text-2xl font-bold text-primary">10.2%</span>
              <span className="text-green-600 text-xs font-semibold mt-1">+0.8%</span>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center border border-gray-100 animate-fade-in-delay2">
              <span className="text-xs text-gray-500 mb-1">Lead to Win Ratio</span>
              <span className="text-2xl font-bold text-primary">5:1</span>
              <span className="text-green-600 text-xs font-semibold mt-1">+7%</span>
            </div>
          </div>
          {/* Chart Section */}
          <div className="w-full bg-white rounded-xl shadow p-6 mb-8 border border-gray-100 flex flex-col items-center animate-fade-in-delay3">
            <span className="text-lg font-semibold text-gray-700 mb-2">Stores Sales Trend</span>
            <div className="w-full h-64 flex items-center justify-center bg-gray-50 rounded">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={salesData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="StoreA" stroke="#2B658C" strokeWidth={3} activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="StoreB" stroke="#AF628E" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          {/* Table Placeholder */}
          <div className="w-full bg-white rounded-xl shadow p-6 border border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 rounded bg-secondary text-primary font-semibold text-sm">All Year</button>
                <input type="date" className="border border-gray-200 rounded px-2 py-1 text-sm" placeholder="Start Date" />
                <input type="date" className="border border-gray-200 rounded px-2 py-1 text-sm" placeholder="End Date" />
              </div>
              <span className="font-semibold text-gray-700 text-sm">Item Pricing</span>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500">
                    <th className="py-2 pr-4">#</th>
                    <th className="py-2 pr-4">Product</th>
                    <th className="py-2 pr-4">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="py-2 pr-4">1</td>
                    <td className="py-2 pr-4">Product 01</td>
                    <td className="py-2 pr-4">$5,890,900</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2 pr-4">2</td>
                    <td className="py-2 pr-4">Product 02</td>
                    <td className="py-2 pr-4">$4,920,778</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2 pr-4">3</td>
                    <td className="py-2 pr-4">Product 03</td>
                    <td className="py-2 pr-4">$5,012,336</td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2 pr-4">4</td>
                    <td className="py-2 pr-4">Product 04</td>
                    <td className="py-2 pr-4">$2,341,097</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Visualize Smarter CTA Section */}
      <section className="py-12 bg-white">
        <div className="container-custom flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Visualize smarter. Decide faster.</h2>
          <p className="text-gray-700 max-w-2xl mb-6">
            Start with <span className="text-primary font-semibold">InfogennieAI</span>, your all-in-one generative BI tool for turning data into compelling stories. Scale with intelligent visualizations, auto-organized dashboards, and shareable insights—all powered by Generative AI. Deliver client-ready reports in minutes, with zero manual effort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <Link to="/register" className="px-6 py-2 rounded-md font-semibold bg-primary text-white hover:bg-primary/90 transition-colors border border-primary shadow-none">Try for free</Link>
            <a href="#" className="px-6 py-2 rounded-md font-semibold border border-primary text-primary bg-white hover:bg-primary hover:text-white transition-colors">Watch demo</a>
          </div>
        </div>
      </section>

      {/* Trusted By Logos Section */}
      <section className="py-6 bg-white">
        <div className="container-custom flex flex-col items-center">
          <span className="text-gray-500 text-sm mb-4">Trusted by</span>
          <div className="overflow-hidden w-full">
            <div className="flex gap-12 animate-slide-infinite items-center" style={{ minWidth: '2400px' }}>
              {/* Duplicate logos for seamless infinite loop */}
              {[1,2].map((_,i) => (
                <React.Fragment key={i}>
                  <img src="/logos/microsoft.png" alt="Microsoft" className="h-8 w-auto opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition" />
                  <img src="/logos/google.png" alt="Google" className="h-8 w-auto opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition" />
                  <img src="/logos/deloitte.png" alt="Deloitte" className="h-8 w-auto opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition" />
                  <img src="/logos/capgemini.png" alt="Capgemini" className="h-8 w-auto opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition" />
                  <img src="/logos/infosys.png" alt="Infosys" className="h-8 w-auto opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition" />
                  <img src="/logos/tcs.png" alt="TCS" className="h-8 w-auto opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition" />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlight Cards Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-12">Learn what InfogennieAI can do for you.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 bg-white rounded-xl shadow hover:shadow-lg transition-shadow border border-gray-100 flex flex-col items-center text-center">
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-secondary">
                {/* Optional: Add an icon here */}
                <span className="text-primary text-2xl font-bold">AI</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Revolutionize Business Intelligence with Generative AI</h3>
              <p className="text-gray-600">Transform your data analysis with cutting-edge AI technology.</p>
            </div>
            {/* Card 2 */}
            <div className="p-8 bg-white rounded-xl shadow hover:shadow-lg transition-shadow border border-gray-100 flex flex-col items-center text-center">
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-secondary">
                {/* Optional: Add an icon here */}
                <span className="text-primary text-2xl font-bold">BI</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Instant Data Storytelling</h3>
              <p className="text-gray-600">Experience data visualization like never before with our AI-powered platform.</p>
            </div>
            {/* Card 3 */}
            <div className="p-8 bg-white rounded-xl shadow hover:shadow-lg transition-shadow border border-gray-100 flex flex-col items-center text-center">
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-secondary">
                {/* Optional: Add an icon here */}
                <span className="text-primary text-2xl font-bold">IQ</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Smart Analytics, Infinite Impact</h3>
              <p className="text-gray-600">Make data-driven decisions with confidence using our advanced analytics solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video/Demo Section */}
      <section className="py-12 bg-white">
        <div className="container-custom flex flex-col items-center">
          <div className="w-full md:w-2/3 bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex flex-col items-center">
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-2 text-center">Build Data Analytics Dashboards in 10 Minutes</h2>
            <p className="text-gray-700 mb-4 text-center">See how easy it is to create powerful BI dashboards with InfogennieAI. Watch our quick demo!</p>
            <div className="w-full aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
              {/* Power BI demo video */}
              <iframe
                className="w-full h-64 md:h-80"
                src="https://www.youtube.com/embed/AGrl-H87pRU"
                title="InfogennieAI Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Our Patrons Section (Testimonials) */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-12">Our Patrons</h2>
          <div className="overflow-hidden w-full">
            <div className="flex gap-8 animate-slide-infinite items-center" style={{ minWidth: '1800px' }}>
              {/* Duplicate testimonials for seamless infinite loop */}
              {[1,2].map((_,i) => (
                <React.Fragment key={i}>
                  <div className="p-6 bg-white rounded-xl shadow border border-gray-100 flex flex-col items-center text-center min-w-[300px]">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-3">
                      <span className="text-primary font-bold text-lg">CJ</span>
                    </div>
                    <p className="text-gray-700 mb-3">“InfogennieAI has automated our dashboard building process. It's a powerful tool that helps us scale our BI operations efficiently.”</p>
                    <span className="font-semibold text-primary">Themba Zulu</span>
                    <span className="text-xs text-gray-500">BI Developer</span>
                  </div>
                  <div className="p-6 bg-white rounded-xl shadow border border-gray-100 flex flex-col items-center text-center min-w-[300px]">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-3">
                      <span className="text-primary font-bold text-lg">NM</span>
                    </div>
                    <p className="text-gray-700 mb-3">“I use InfogennieAI daily for internal reporting. The AI that generates dashboards helps my team make quicker, data-backed decisions.”</p>
                    <span className="font-semibold text-primary">Nomsa Mthembu</span>
                    <span className="text-xs text-gray-500">Data Analyst</span>
                  </div>
                  <div className="p-6 bg-white rounded-xl shadow border border-gray-100 flex flex-col items-center text-center min-w-[300px]">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-3">
                      <span className="text-primary font-bold text-lg">GR</span>
                    </div>
                    <p className="text-gray-700 mb-3">“This tool feels like having an extra BI analyst in the team. It's fast, accurate, and smart enough to generate meaningful dashboards without constant supervision.”</p>
                    <span className="font-semibold text-primary">Gita Raman</span>
                    <span className="text-xs text-gray-500">Analytics Manager</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Supported Data Sources Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-12">Supported Datasources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Structured & Unstructured Files */}
            <div className="bg-green-50 rounded-2xl shadow border border-green-100 p-8 flex flex-col mb-4">
              <h3 className="text-lg font-semibold text-primary mb-4">Structured Files:</h3>
              <div className="flex flex-wrap gap-4 mb-6">
                {['CSV', 'XML', 'XLX', 'XLSX', 'JSON'].map(type => (
                  <span key={type} className="inline-flex items-center px-4 py-2 bg-white text-green-700 font-semibold rounded-lg shadow-sm text-base hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white transition-all duration-200 cursor-pointer border border-green-200">
                    <span className="mr-2">📄</span>{type}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-semibold text-primary mb-4">Unstructured Files:</h3>
              <div className="flex flex-wrap gap-4">
                {['PDF', 'PNG', 'JPEG', 'MP4'].map(type => (
                  <span key={type} className="inline-flex items-center px-4 py-2 bg-white text-green-700 font-semibold rounded-lg shadow-sm text-base hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white transition-all duration-200 cursor-pointer border border-green-200">
                    <span className="mr-2">📄</span>{type}
                  </span>
                ))}
              </div>
            </div>
            {/* API & DB Connectors */}
            <div className="bg-green-50 rounded-2xl shadow border border-green-100 p-8 flex flex-col mb-4">
              <h3 className="text-lg font-semibold text-primary mb-4">API Connectors:</h3>
              <span className="inline-flex items-center px-4 py-2 bg-white text-green-700 font-semibold rounded-lg shadow-sm text-base mb-6 hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white transition-all duration-200 cursor-pointer border border-green-200">
                <span className="mr-2">🔗</span>Google Spreadsheet
              </span>
              <h3 className="text-lg font-semibold text-primary mb-4">DB Connectors:</h3>
              <div className="flex flex-wrap gap-4">
                {['MySQL', 'MongoDB', 'Snowflake', 'Airtable', 'Microsoft SQL', 'PostgreSQL'].map(type => (
                  <span key={type} className="inline-flex items-center px-4 py-2 bg-white text-green-700 font-semibold rounded-lg shadow-sm text-base hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white transition-all duration-200 cursor-pointer border border-green-200">
                    <span className="mr-2">🗄️</span>{type}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Green Gradient */}
      <footer className="pt-16 pb-8 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-8">
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <span className="font-bold text-xl">InfogennieAI</span>
              </div>
              <p className="text-sm text-white/80">Transforming data into actionable insights.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline text-white/80">Why InfogennieAI?</a></li>
                <li><a href="#" className="hover:underline text-white/80">Features</a></li>
                <li><a href="#" className="hover:underline text-white/80">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Customers</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline text-white/80">Use Cases</a></li>
                <li><a href="#" className="hover:underline text-white/80">Partnerships</a></li>
                <li><a href="#" className="hover:underline text-white/80">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Industries</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline text-white/80">Financial Services</a></li>
                <li><a href="#" className="hover:underline text-white/80">Healthcare</a></li>
                <li><a href="#" className="hover:underline text-white/80">Retail & E-commerce</a></li>
                <li><a href="#" className="hover:underline text-white/80">Marketing & Advertising</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline text-white/80">Docs</a></li>
                <li><a href="#" className="hover:underline text-white/80">FAQ</a></li>
                <li><a href="#" className="hover:underline text-white/80">Tutorial</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline text-white/80">ROI Calculator</a></li>
                <li><a href="#" className="hover:underline text-white/80">Market Projection</a></li>
                <li><a href="#" className="hover:underline text-white/80">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline text-white/80">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-xs text-white/70 mt-8">&copy; {new Date().getFullYear()} InfogennieAI. All rights reserved.</div>
        </div>
      </footer>
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