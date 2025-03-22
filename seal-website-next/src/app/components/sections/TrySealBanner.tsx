"use client"; // Required for hooks in Next.js

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const TrySealBanner: React.FC = () => {
  return (
    <section className="mx-auto p-3">
      <div className="mt-80">
        {/* Additional content can be added here */}
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative rounded-2xl overflow-hidden border border-[#69D0E5]/30 max-w-6xl mx-auto"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/images/trysealbackground.png"
            alt="Try SEAL Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content container */}
        <div className="relative z-10 px-8 py-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-8"
          >
            Skip the Paperwork,<br />
            Get{" "}
            <span className="mt-2 bg-gradient-to-r from-[#8BA4FF] to-[#69D0E5] text-transparent bg-clip-text">
              SEAL
            </span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              href="/products"
              className="inline-block px-8 py-3 rounded-full text-lg font-medium 
                       bg-transparent border-2 border-[#69D0E5] text-white
                       hover:bg-[#69D0E5]/10 transition-all duration-300
                       shadow-[0_0_20px_rgba(105,208,229,0.3)]"
            >
              Try SEAL Now
            </Link>
          </motion.div>
        </div>

        {/* Gradient overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%)'
          }}
        />
      </motion.div>
      <div className="mt-80">
        {/* Additional content can be added here */}
      </div>
    </section>
  );
};

export default TrySealBanner;
