import React from 'react';
import Navbar from '../components/Navbar';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-100 min-h-screen">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">Pricing</h1>
        <p className="text-center text-gray-600 mb-12 text-lg">Choose the plan that fits your business needs. Simple, transparent pricing.</p>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white/90 rounded-2xl shadow-xl border border-blue-100 p-8 flex-1 max-w-xs flex flex-col items-center">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">Free</h2>
            <div className="text-4xl font-extrabold text-gray-900 mb-2">$0<span className="text-lg font-medium text-gray-500">/mo</span></div>
            <ul className="text-gray-700 mb-6 space-y-2 text-sm">
              <li>✔️ Basic analytics</li>
              <li>✔️ 1 user</li>
              <li>✔️ Community support</li>
              <li>✔️ Limited AI features</li>
            </ul>
            <button className="w-full py-2 px-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-500 shadow hover:scale-105 transition-all">Get Started</button>
          </div>
          {/* Pro Plan */}
          <div className="bg-white rounded-2xl shadow-2xl border-2 border-blue-400 p-10 flex-1 max-w-xs flex flex-col items-center scale-105 z-10">
            <h2 className="text-2xl font-bold text-indigo-700 mb-2">Pro</h2>
            <div className="text-4xl font-extrabold text-gray-900 mb-2">$29<span className="text-lg font-medium text-gray-500">/mo</span></div>
            <ul className="text-gray-700 mb-6 space-y-2 text-sm">
              <li>✔️ All Free features</li>
              <li>✔️ Up to 10 users</li>
              <li>✔️ Priority email support</li>
              <li>✔️ Advanced AI analytics</li>
              <li>✔️ Custom dashboards</li>
            </ul>
            <button className="w-full py-2 px-4 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-blue-600 shadow hover:scale-105 transition-all">Start Pro Trial</button>
          </div>
          {/* Enterprise Plan */}
          <div className="bg-white/90 rounded-2xl shadow-xl border border-blue-100 p-8 flex-1 max-w-xs flex flex-col items-center">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">Enterprise</h2>
            <div className="text-4xl font-extrabold text-gray-900 mb-2">Custom</div>
            <ul className="text-gray-700 mb-6 space-y-2 text-sm">
              <li>✔️ All Pro features</li>
              <li>✔️ Unlimited users</li>
              <li>✔️ Dedicated support</li>
              <li>✔️ Custom integrations</li>
              <li>✔️ SLA & onboarding</li>
            </ul>
            <button className="w-full py-2 px-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow hover:scale-105 transition-all">Contact Sales</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing; 