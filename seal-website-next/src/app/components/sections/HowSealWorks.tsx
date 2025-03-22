"use client"; // Required for hooks in Next.js

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const HowSealWorks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Create separate progress values for each section
  const section1Progress = useTransform(scrollYProgress, [0, 0.20], [0, 1]);
  const section2Progress = useTransform(scrollYProgress, [0.20, 0.40], [0, 1]);
  const section3Progress = useTransform(scrollYProgress, [0.40, 1], [0, 1]);

  return (
    <section
      id="how-seal-works"
      className="min-h-screen w-full py-20 relative bg-black overflow-hidden"
      ref={containerRef}
    >
      {/* Main heading */}
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-center mb-4"
        >
          <span className="bg-gradient-to-r from-[#8BA4FF] to-[#69D0E5] bg-clip-text text-transparent">
            How SEAL works
          </span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-300 text-base sm:text-lg md:text-xl mb-12 sm:mb-16 md:mb-20"
        >
          Simple, secure, and efficient document management
        </motion.p>

        {/* Timeline bar with numbered indicators */}
        <div className="absolute md:left-1/2 left-[20px] top-[20%] bottom-[0%] w-1 bg-gradient-to-b from-transparent via-[#1a1a1a] to-transparent rounded-full">
          <motion.div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#69D0E5] via-[#8BA4FF] to-transparent rounded-full"
            style={{ height: lineHeight, transition: 'height 0.5s ease-in-out' }}
          />
          
          {/* Number indicators with solid backgrounds to cover the line */}
          <div className="absolute top-[5%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black z-10 left-1/2" />
          <div className="absolute top-[41.5%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black z-10 left-1/2" />
          <div className="absolute top-[80%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black z-10 left-1/2" />
          
          {/* Number indicators with gradients */}
          <motion.div 
            className="absolute top-[5%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center z-20 overflow-hidden"
            style={{ 
              opacity: section1Progress,
              left: '50%',
            }}
          >
            <div className="absolute inset-0 bg-black rounded-full" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#69D0E5] via-[#8BA4FF] to-[#69D0E5] opacity-10" />
            <div className="absolute inset-0 rounded-full" style={{
              background: 'linear-gradient(to bottom, #69D0E5, #8BA4FF, #69D0E5)',
              padding: '2px',
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude',
            }} />
            <span className="relative z-10 text-sm font-medium bg-gradient-to-b from-[#69D0E5] via-[#8BA4FF] to-[#69D0E5] bg-clip-text text-transparent">1</span>
          </motion.div>
          
          <motion.div 
            className="absolute top-[41.5%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center z-20 overflow-hidden"
            style={{ 
              opacity: section2Progress,
              left: '50%',
            }}
          >
            <div className="absolute inset-0 bg-black rounded-full" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#69D0E5] via-[#8BA4FF] to-[#69D0E5] opacity-10" />
            <div className="absolute inset-0 rounded-full" style={{
              background: 'linear-gradient(to bottom, #69D0E5, #8BA4FF, #69D0E5)',
              padding: '2px',
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude',
            }} />
            <span className="relative z-10 text-sm font-medium bg-gradient-to-b from-[#69D0E5] via-[#8BA4FF] to-[#69D0E5] bg-clip-text text-transparent">2</span>
          </motion.div>
          
          <motion.div 
            className="absolute top-[80%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center z-20 overflow-hidden"
            style={{ 
              opacity: section3Progress,
              left: '50%',
            }}
          >
            <div className="absolute inset-0 bg-black rounded-full" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#69D0E5] via-[#8BA4FF] to-[#69D0E5] opacity-10" />
            <div className="absolute inset-0 rounded-full" style={{
              background: 'linear-gradient(to bottom, #69D0E5, #8BA4FF, #69D0E5)',
              padding: '2px',
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude',
            }} />
            <span className="relative z-10 text-sm font-medium bg-gradient-to-b from-[#69D0E5] via-[#8BA4FF] to-[#69D0E5] bg-clip-text text-transparent">3</span>
          </motion.div>
        </div>

        {/* Content sections */}
        <div className="relative z-10 space-y-24 sm:space-y-32 md:space-y-40">
          {/* Upload Document Section */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 grid-cols-1 gap-8 items-center md:ml-8 ml-8"
          >
            <div className="flex items-center justify-center order-2 md:order-1">
              <Image
                src="/assets/images/Imac_inch.png"
                alt="Upload Documents"
                width={500}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="space-y-4 order-1 md:order-2">
              <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-white">Upload Your Documents</h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-300">
                Start by uploading your official documents to SEAL. We support various formats including PDF, DOCX, and more.
              </p>
            </div>
          </motion.div>

          {/* AI Analysis Section */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 grid-cols-1 gap-8 items-center md:ml-8 ml-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-white">AI-Powered Analysis</h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-300">
                Our advanced AI analyzes your documents to identify key information and form fields that need to be filled.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/assets/images/iPad_Mini_2021.png"
                alt="AI Analysis"
                width={400}
                height={300}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Secure Storage Section */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 grid-cols-1 gap-8 items-center md:ml-8 ml-8"
          >
            <div className="flex items-center justify-center order-2 md:order-1">
              <Image
                src="/assets/images/Monitor XDR.png"
                alt="Secure Storage"
                width={600}
                height={450}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="space-y-4 order-1 md:order-2">
              <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-white">Secure Storage</h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-300">
                Your data is encrypted and securely stored on the blockchain, ensuring maximum security and transparency.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HowSealWorks;
