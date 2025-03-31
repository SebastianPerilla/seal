"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Mock data for demonstration
const processes = [
  { id: 1, name: 'NIE', date: 'Jun 24, 2025', status: 30 },
  { id: 2, name: 'Spanish Visa', date: 'May 13, 2025', status: 60 },
  { id: 3, name: 'Authorization to Return', date: 'Jan 19, 2025', status: 60 },
  { id: 4, name: 'City Hall Registration', date: 'Feb 5, 2025', status: 90 },
];

const smartSuggestions = [
  { id: 1, text: 'Your visa expires soon', action: 'Renew Now' },
  { id: 2, text: 'Missing City Registration', action: 'Help Me' },
  { id: 3, text: '3 Forms need Signature', action: 'Sign Now' },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12 px-6">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:50px_50px] opacity-[0.15] pointer-events-none" />
      
      {/* Quick Actions */}
      <div className="max-w-7xl space-y-8 items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Find Process Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-xl border border-[#69D0E5] bg-[#121212]/50 backdrop-blur-sm hover:bg-[#121212] transition-all cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-[#69D0E5]/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#69D0E5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Find Process</h3>
                <p className="text-gray-400 text-sm">Fill in your process in seconds</p>
              </div>
            </div>
          </motion.div>

          {/* Quick Autofill Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-xl border border-[#69D0E5] bg-[#121212]/50 backdrop-blur-sm hover:bg-[#121212] transition-all cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-[#69D0E5]/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#69D0E5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Quick Autofill</h3>
                <p className="text-gray-400 text-sm">For single documents</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Smart Suggestions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#121212]/50 backdrop-blur-sm rounded-xl p-6 border border-[#69D0E5]"
        >
          <h2 className="text-xl font-semibold mb-4">Smart Suggestions</h2>
          <div className="space-y-3">
            {smartSuggestions.map((suggestion) => (
              <div key={suggestion.id} className="flex items-center justify-between bg-[#1A1A1A] p-3 rounded-lg">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-gray-300">{suggestion.text}</span>
                </div>
                <button className="px-4 py-1 rounded-full text-sm bg-[#69D0E5]/20 text-[#69D0E5] hover:bg-[#69D0E5]/30 transition-colors">
                  {suggestion.action}
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Process List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[#121212]/50 backdrop-blur-sm rounded-xl p-6 border border-[#69D0E5]"
        >
          <h2 className="text-xl font-semibold mb-4">Your Processes</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-400">
                  <th className="pb-4">Process</th>
                  <th className="pb-4">Date</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {processes.map((process) => (
                  <tr key={process.id} className="text-gray-300">
                    <td className="py-4">{process.name}</td>
                    <td className="py-4">{process.date}</td>
                    <td className="py-4">
                      <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#69D0E5] to-[#8BA4FF]"
                          style={{ width: `${process.status}%` }}
                        />
                      </div>
                    </td>
                    <td className="py-4">
                      <button className="flex items-center space-x-1 text-[#69D0E5] hover:text-[#8BA4FF] transition-colors">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                        <span>Upload Passport</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 