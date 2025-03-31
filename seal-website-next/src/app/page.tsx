"use client"; // Required for hooks in Next.js

import React from "react";
import Link from "next/link";
import dynamic from 'next/dynamic';
import { motion } from "framer-motion";

// Dynamically import heavy components
const HowSealWorks = dynamic(() => import("@/app/components/sections/HowSealWorks"), {
  ssr: true, // Enable SSR since this component is visible above the fold
});

const Faq = dynamic(() => import("@/app/components/sections/Faq"), {
  ssr: false, // Disable SSR since this component is below the fold
});

const TrySealBanner = dynamic(() => import("@/app/components/sections/TrySealBanner"), {
  ssr: false, // Disable SSR since this component is below the fold
});

export default function Home() {
  return (
    <main className="bg-black">
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative bg-black overflow-hidden"
      >
        {/* Base starry background */}
        <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:50px_50px] opacity-[0.15]" />

        {/* Brighter, larger stars */}
        <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_2px)] [background-size:200px_200px] opacity-[0.25]" />

        {/* Bottom glow */}
        <div className="absolute bottom-[-50%] left-1/2 -translate-x-1/2 w-[70%] h-[90%] rounded-full bg-[radial-gradient(circle,rgba(105,208,229,0.45)_0%,transparent_60%)] blur-[100px]" />

        {/* New Gradient Border Bar */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-0.5 bg-gradient-to-r from-transparent via-[#8BA4FF] to-transparent"></div>

        <div className="text-center z-10 px-4 py-16 sm:py-24 md:py-32">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-b from-[#DBDBDB] to-[#FFFFFF] bg-clip-text leading-tight text-transparent px-2"
          >
            Fill Instantly. Store Securely.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 text-base sm:text-lg md:text-2xl mb-6 sm:mb-8 max-w-[90%] sm:max-w-lg mx-auto px-2"
          >
            SEAL instantly autofills officials documents and securely stores your
            data.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center space-x-4"
          >
            <Link
              href="/products"
              className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-medium 
                       bg-transparent border-2 border-[#69D0E5] text-white
                       hover:-translate-y-0.5 bg-[#69D0E5]/10 transition-all duration-300
                       shadow-[0_0_20px_rgba(105,208,229,0.3)]"
            >
              Try SEAL Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How SEAL Works Section */}
      <HowSealWorks />

      {/* FAQ Section */}
      <Faq />

      {/* Try SEAL Banner */}
      <TrySealBanner />
    </main>
  );
}
