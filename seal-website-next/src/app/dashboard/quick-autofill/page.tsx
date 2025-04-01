"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// const documentTypes = [
//   {
//     name: 'Government ID',
//     icon: (
//       <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
//       </svg>
//     )
//   },
//   {
//     name: 'Passport',
//     icon: (
//       <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
//       </svg>
//     )
//   },
//   {
//     name: 'Driver License',
//     icon: (
//       <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
//       </svg>
//     )
//   }
// ];

export default function QuickAutofill() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <div className="px-6 py-24">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#8BA4FF] to-[#69D0E5] bg-clip-text text-transparent">
          Quick Autofill
        </h1>
        <p className="text-gray-400 mt-2">
          Upload a single document for instant processing
        </p>
      </div>

      {/* Document Type Selection */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
      >
        {documentTypes.map((type) => (
          <button
            key={type.name}
            className="p-6 rounded-xl border border-[#69D0E5]/20 bg-[#121212] hover:border-[#69D0E5]/50 
                     transition-all group text-left"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-[#69D0E5]/10 flex items-center justify-center 
                          text-[#69D0E5] group-hover:bg-[#69D0E5]/20 transition-colors">
                {type.icon}
              </div>
              <span className="text-lg font-medium text-white">{type.name}</span>
            </div>
          </button>
        ))}
      </motion.div> */}

      {/* File Upload Area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="w-full"
      >
        <div
          className={`w-full h-64 border-2 border-dashed rounded-xl flex flex-col items-center justify-center
                     transition-colors ${
                       dragActive
                         ? 'border-[#69D0E5] bg-[#69D0E5]/10'
                         : 'border-gray-600 hover:border-[#69D0E5]/50'
                     }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            onChange={handleFileChange}
            className="hidden"
            id="file-upload"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          />
          <label
            htmlFor="file-upload"
            className="flex flex-col items-center cursor-pointer"
          >
            <svg
              className="w-12 h-12 text-gray-400 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
            <p className="text-gray-400 text-center">
              <span className="text-[#69D0E5]">Click to upload</span> or drag and drop<br />
              PDF, DOC, DOCX, JPG, JPEG, or PNG
            </p>
          </label>
        </div>
        {selectedFile && (
          <p className="mt-4 text-gray-400">
            Selected file: {selectedFile.name}
          </p>
        )}
      </motion.div>
    </div>
  );
} 