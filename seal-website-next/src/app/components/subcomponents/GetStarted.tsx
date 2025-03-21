"use client"; // Required for hooks in Next.js

import React from 'react';
import Link from 'next/link';

interface GetStartedProps {
  className?: string;
}

const GetStarted: React.FC<GetStartedProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      <Link
        href="/products"
        className="w-full py-3 px-6 mb-6 rounded-xl border-2 border-[#69D0E5] text-white 
                 hover:bg-[#69D0E5]/10 transition-all duration-300
                 shadow-[0_0_20px_rgba(105,208,229,0.3)] flex items-center justify-center"
      >
        <span className="mr-2">Get Started</span>
        
      </Link>
    </div>
  );
};

export default GetStarted;