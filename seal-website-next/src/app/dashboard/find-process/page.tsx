"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const processCategories = [
  {
    name: 'Immigration',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    processes: ['Visa Application', 'Residence Permit', 'Work Permit']
  },
  {
    name: 'Registration',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    processes: ['City Registration', 'School Registration', 'Vehicle Registration']
  },
  {
    name: 'Legal',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    processes: ['Power of Attorney', 'Legal Declaration', 'Contract Review']
  }
];

export default function FindProcess() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleProcessClick = (process: string) => {
    if (process === 'Visa Application') {
      // Create a temporary anchor element
      const link = document.createElement('a');
      link.href = '/files/Visa_Application.zip';
      link.download = 'Visa_Application.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="px-6 py-24">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#8BA4FF] to-[#69D0E5] bg-clip-text text-transparent">
          Find Process
        </h1>
        <p className="text-gray-400 mt-2">
          Search and start your document process
        </p>
      </div>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for a process..."
            className="w-full px-5 py-4 rounded-xl bg-[#121212] border border-[#69D0E5]/20 text-white 
                     focus:outline-none focus:border-[#69D0E5] transition-colors
                     placeholder-gray-500"
          />
          <svg
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </motion.div>

      {/* Process Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {processCategories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#121212] rounded-xl border border-[#69D0E5]/20 p-6 hover:border-[#69D0E5]/50 transition-colors"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#69D0E5]/10 flex items-center justify-center text-[#69D0E5]">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{category.name}</h3>
            </div>
            <ul className="space-y-3">
              {category.processes.map((process) => (
                <li key={process}>
                  <button 
                    onClick={() => handleProcessClick(process)}
                    className="w-full text-left px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-[#69D0E5]/10 transition-colors"
                  >
                    {process}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 