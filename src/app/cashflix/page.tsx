"use client";

import { motion } from "framer-motion";
import { 
  Search, 
  Home, 
  BarChart3, 
  CreditCard, 
  Eye, 
  FileText, 
  Bot, 
  Calendar, 
  Receipt, 
  TrendingUp, 
  Target, 
  Building2,
  Laptop,
  Car,
  House,
  ArrowRight
} from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis } from 'recharts';

export default function CashFlixPage() {
  // Chart data
  const spendingData = [
    { name: 'Planned', value: 4000, color: '#FCD34D' },
    { name: 'Other', value: 2000, color: '#8B5CF6' },
    { name: 'Available', value: 3681, color: '#3B82F6' }
  ];

  const lineData = [
    { date: 'Jun 15', value: 20000 },
    { date: 'Jun 20', value: 21000 },
    { date: 'Jun 25', value: 22000 },
    { date: 'Jul 1', value: 23000 },
    { date: 'Jul 5', value: 23500 },
    { date: 'Jul 10', value: 24000 },
    { date: 'Jul 15', value: 24200 },
    { date: 'Jul 20', value: 24500 },
    { date: 'Jul 25', value: 24681 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white relative overflow-hidden">
        {/* Header */}
        <header className="px-6 py-4 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-gray-900 font-semibold text-xl">CashFlix</span>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              <a href="#" className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium">Home</a>
              <a href="#" className="text-gray-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100">Dashboard</a>
              <a href="#" className="text-gray-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100">Transactions</a>
              <a href="#" className="text-gray-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100">Watchlist</a>
              <a href="#" className="text-gray-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100">Reports</a>
            </nav>
            
            {/* Auth Buttons */}
            <div className="flex items-center gap-3">
              <button className="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 hover:bg-gray-50">
                Sign in
              </button>
              <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800">
                Get started
              </button>
            </div>
          </div>
        </header>

        {/* Hero Content */}
        <div className="px-6 py-20 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-serif text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Step Into The Future Of Ai Finance Simple, Smart, And Secure.
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Track savings, manage bills, and understand your money with an all-in-one financial dashboard.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <input 
                type="text" 
                placeholder="Connect bank|" 
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                View demo
              </button>
            </motion.div>
          </div>
        </div>

        {/* Subtle gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-50 to-transparent"></div>
      </div>

      {/* Dashboard Section */}
      <div className="px-6 py-8 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="flex">
              {/* Sidebar */}
              <div className="w-64 bg-white border-r border-gray-200 p-6">
                {/* Logo */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">C</span>
                  </div>
                  <span className="text-gray-900 font-semibold text-lg">CashFlix</span>
                </div>

                {/* Search */}
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input 
                    type="text" 
                    placeholder="Search" 
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                {/* Navigation */}
                <nav className="space-y-2">
                  <a href="#" className="flex items-center gap-3 px-3 py-2 bg-gray-100 rounded-lg text-gray-900 text-sm font-medium">
                    <BarChart3 className="w-4 h-4" />
                    Dashboard
                  </a>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm font-medium">
                    <CreditCard className="w-4 h-4" />
                    Transactions
                  </a>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm font-medium">
                    <Bot className="w-4 h-4" />
                    Ai Assistant
                  </a>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm font-medium">
                    <Calendar className="w-4 h-4" />
                    Spending Plan
                  </a>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm font-medium">
                    <Receipt className="w-4 h-4" />
                    Bills & Payments
                  </a>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm font-medium">
                    <Eye className="w-4 h-4" />
                    Watchlist
                  </a>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm font-medium">
                    <FileText className="w-4 h-4" />
                    Reports
                  </a>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm font-medium">
                    <TrendingUp className="w-4 h-4" />
                    Investments
                  </a>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm font-medium">
                    <Target className="w-4 h-4" />
                    Goals
                  </a>
                </nav>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900">Hello, sajon</h2>
                    <p className="text-gray-600">Sunday, July 26, 2025</p>
                  </div>
                  <button className="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 hover:bg-gray-50">
                    Add account
                  </button>
                </div>

                {/* Financial Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {/* Banking Saving */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-gray-600" />
                        <span className="text-sm font-medium text-gray-600">Banking Saving</span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h3 className="text-3xl font-bold text-gray-900">$24,681.49</h3>
                    </div>
                    <div className="h-16">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={lineData}>
                          <Line 
                            type="monotone" 
                            dataKey="value" 
                            stroke="#8B5CF6" 
                            strokeWidth={2}
                            dot={false}
                          />
                          <XAxis dataKey="date" hide />
                          <YAxis hide />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>Jun 15</span>
                      <span>Jul 25</span>
                    </div>
                  </div>

                  {/* Investment */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-gray-600" />
                        <span className="text-sm font-medium text-gray-600">Investment</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">$24,681.49</h3>
                    </div>
                  </div>

                  {/* Assets */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-gray-600" />
                        <span className="text-sm font-medium text-gray-600">Assets</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">$24,681.49</h3>
                    </div>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Spending Plan */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">Spending Plan</h3>
                      <p className="text-sm text-gray-600">July 2025</p>
                    </div>
                    
                    {/* Legend */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <span className="text-xs text-gray-600">Planned</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="text-xs text-gray-600">Other</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-xs text-gray-600">Available</span>
                      </div>
                    </div>

                    {/* Donut Chart */}
                    <div className="h-48 mb-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={spendingData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            dataKey="value"
                          >
                            {spendingData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">$9,681.49</p>
                    </div>
                  </div>

                  {/* Planned Spending */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">Planned Spending</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Laptop className="w-5 h-5 text-blue-500" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">New Laptop</p>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                          </div>
                          <p className="text-xs text-gray-600 mt-1">$656 left</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Car className="w-5 h-5 text-yellow-500" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">Car Repair</p>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                            <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                          </div>
                          <p className="text-xs text-gray-600 mt-1">$1,356 left</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <House className="w-5 h-5 text-purple-500" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">Rent</p>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                            <div className="bg-purple-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                          </div>
                          <p className="text-xs text-gray-600 mt-1">$867 left</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Your Spends */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">Your Spends</h3>
                      <p className="text-sm text-gray-600">July 2025</p>
                    </div>
                    
                    <div className="space-y-3">
                      {[1, 2, 3, 4, 5].map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <ArrowRight className="w-4 h-4 text-gray-400" />
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">New Laptop</p>
                            <p className="text-xs text-gray-600">$18.00 left</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
