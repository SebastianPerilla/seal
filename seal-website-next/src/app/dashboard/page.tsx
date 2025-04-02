"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Mock data for missing items
const missingItems = [
  "Passport",
  "Birth Certificate",
  "Marriage Certificate",
  "Bank Statements"
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white pt-6 pb-12">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:50px_50px] opacity-[0.15] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-5xl font-semibold px-6 bg-gradient-to-r from-[#8BA4FF] to-[#69D0E5] bg-clip-text text-transparent">Dashboard</h1>
        

        
        {/* Quick Links */}
        <div className="px-6">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Quick Autofill Button */}
            <Link href="/dashboard/quick-autofill">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 rounded-xl border-2 border-[#69D0E5]/20 bg-[#121212]/50 backdrop-blur-sm hover:bg-[#121212] transition-all cursor-pointer"
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
            </Link>

            {/* Find Process Button */}
            <Link href="/dashboard/find-process">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-xl border-2 border-[#69D0E5]/20 bg-[#121212]/50 backdrop-blur-sm hover:bg-[#121212] transition-all cursor-pointer"
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
            </Link>
          </div>
        </div>

        {/* Vault Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="px-6"
        >
          <h2 className="text-xl font-semibold mb-4">Vault Status</h2>
          <div className="bg-[#121212]/50 backdrop-blur-sm rounded-xl p-6 border-2 border-[#69D0E5]/20">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-medium">40% Complete</span>
              <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#69D0E5] to-[#8BA4FF]"
                  style={{ width: '40%' }}
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Missing Items</h3>
              <div className="space-y-2">
                {missingItems.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 text-red-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-4 py-2 px-4 bg-[#69D0E5]/20 hover:bg-[#69D0E5]/30 text-[#69D0E5] rounded-lg transition-colors">
                Complete Vault
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 