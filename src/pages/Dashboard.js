import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container-custom py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">InfogennieAI</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="btn-secondary">Profile</button>
              <button className="btn-primary">Logout</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Navigation</h2>
              <nav className="space-y-2">
                <Link to="/dashboard" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                  Dashboard
                </Link>
                <Link to="/analytics" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                  Analytics
                </Link>
                <Link to="/reports" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                  Reports
                </Link>
                <Link to="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                  Settings
                </Link>
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-primary mb-6">Welcome to your Dashboard</h2>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-lg text-white">
                  <h3 className="text-lg font-semibold mb-2">Total Reports</h3>
                  <p className="text-3xl font-bold">24</p>
                </div>
                <div className="bg-gradient-to-r from-secondary to-accent p-6 rounded-lg text-white">
                  <h3 className="text-lg font-semibold mb-2">Active Projects</h3>
                  <p className="text-3xl font-bold">12</p>
                </div>
                <div className="bg-gradient-to-r from-accent to-primary p-6 rounded-lg text-white">
                  <h3 className="text-lg font-semibold mb-2">Data Sources</h3>
                  <p className="text-3xl font-bold">8</p>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <p className="text-gray-800">New report generated</p>
                      <p className="text-sm text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <p className="text-gray-800">Data source updated</p>
                      <p className="text-sm text-gray-500">5 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <p className="text-gray-800">New visualization created</p>
                      <p className="text-sm text-gray-500">1 day ago</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">Quick Actions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button className="btn-primary w-full">Create New Report</button>
                  <button className="btn-secondary w-full">Import Data</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 