"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

type DocumentType = 'passport' | 'general_info' | 'id_card' | 'driving_license';

interface DocumentSection {
  type: DocumentType;
  title: string;
  description: string;
  icon: React.ReactNode;
  jsonStructure: any;
}

const documentSections: DocumentSection[] = [
  {
    type: 'passport',
    title: 'Passport Information',
    description: 'Upload your passport for automatic information extraction',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
      </svg>
    ),
    jsonStructure: {
      Sex: "",
      Name: "",
      Photo: "",
      Signature: "",
      Nationality: "",
      "Country Code": "",
      "Date of Birth": "",
      "Date of Issue": "",
      "Passport Type": "",
      "Date of Expiry": "",
      "Place of Birth": "",
      "Passport Number": "",
      "Issuing Authority": "",
      "Machine Readable Zone": {
        Line1: "",
        Line2: ""
      }
    }
  },
  {
    type: 'general_info',
    title: 'General Information',
    description: 'Manage your personal information and details',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    jsonStructure: {
      Email: "",
      Gender: "",
      Address: {
        City: "",
        Street: "",
        Country: "",
        Province: "",
        "Postal Code": ""
      },
      Employer: "",
      Language: "",
      "Full Name": "",
      Occupation: "",
      Nationality: "",
      "Phone Number": "",
      "Date of Birth": "",
      "Marital Status": "",
      "Preferred Name": "",
      "Profile Picture": "",
      "Emergency Contact": {
        Name: "",
        Phone: "",
        Relationship: ""
      }
    }
  }
];

export default function Documents() {
  const [selectedSection, setSelectedSection] = useState<DocumentType | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<Record<DocumentType, File | null>>({
    passport: null,
    general_info: null,
    id_card: null,
    driving_license: null
  });
  const [extractedData, setExtractedData] = useState<Record<DocumentType, any>>({
    passport: null,
    general_info: null,
    id_card: null,
    driving_license: null
  });

  const handleFileUpload = async (type: DocumentType, file: File) => {
    setUploadedFiles(prev => ({ ...prev, [type]: file }));
    
    // TODO: Implement actual file upload and data extraction with Supabase
    // This is where you would:
    // 1. Upload the file to Supabase Storage
    // 2. Call your OCR/data extraction service
    // 3. Store the extracted JSONB data in Supabase
    
    // Mock data extraction for demonstration
    const mockExtraction = documentSections.find(section => section.type === type)?.jsonStructure;
    setExtractedData(prev => ({ ...prev, [type]: mockExtraction }));
  };

  return (
    <div className="px-3 sm:px-6 py-4 sm:py-8 lg:py-12">
      {/* Header */}
      <div className="mb-4 sm:mb-8">
        <h1 className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-[#8BA4FF] to-[#69D0E5] bg-clip-text text-transparent">
          Document Management
        </h1>
        <p className="text-sm text-gray-400 mt-1 sm:mt-2">
          Upload and manage your documents for automatic information extraction
        </p>
      </div>

      {/* Document Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-6">
        {documentSections.map((section) => (
          <motion.div
            key={section.type}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#121212] border border-[#69D0E5]/20 rounded-xl p-3 sm:p-6 hover:border-[#69D0E5]/50 
                     transition-all cursor-pointer"
            onClick={() => setSelectedSection(section.type)}
          >
            <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
              <div className="w-9 sm:w-12 h-9 sm:h-12 rounded-lg bg-[#69D0E5]/10 flex items-center justify-center text-[#69D0E5]">
                {section.icon}
              </div>
              <div>
                <h3 className="text-base sm:text-xl font-semibold text-white">{section.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400">{section.description}</p>
              </div>
            </div>

            <div className="mt-3 sm:mt-4">
              {uploadedFiles[section.type] ? (
                <div className="flex items-center justify-between bg-[#69D0E5]/10 rounded-lg p-2.5 sm:p-3">
                  <span className="text-[#69D0E5] text-xs sm:text-sm truncate max-w-[160px] sm:max-w-[200px]">
                    {uploadedFiles[section.type]?.name}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setUploadedFiles(prev => ({ ...prev, [section.type]: null }));
                      setExtractedData(prev => ({ ...prev, [section.type]: null }));
                    }}
                    className="text-gray-400 hover:text-white ml-2 flex-shrink-0 px-2 py-1 text-xs sm:text-sm
                             hover:bg-[#69D0E5]/10 rounded transition-colors"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center w-full h-20 sm:h-32 border-2 
                               border-dashed border-gray-700 rounded-lg cursor-pointer hover:border-[#69D0E5]
                               transition-colors">
                  <div className="flex flex-col items-center justify-center pt-3 pb-4 sm:pt-5 sm:pb-6">
                    <svg className="w-5 h-5 sm:w-8 sm:h-8 mb-2 sm:mb-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-xs sm:text-sm text-gray-400 text-center px-2">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files?.[0]) {
                        handleFileUpload(section.type, e.target.files[0]);
                      }
                    }}
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                </label>
              )}
            </div>

            {extractedData[section.type] && (
              <div className="mt-3 sm:mt-4">
                <h4 className="text-xs sm:text-base text-white font-medium mb-2">Extracted Information</h4>
                <div className="relative">
                  <pre className="bg-black/30 p-2.5 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm text-gray-300 
                              max-h-36 sm:max-h-64 scrollbar-thin scrollbar-thumb-[#69D0E5]/20 scrollbar-track-transparent">
                    {JSON.stringify(extractedData[section.type], null, 2)}
                  </pre>
                  <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
} 