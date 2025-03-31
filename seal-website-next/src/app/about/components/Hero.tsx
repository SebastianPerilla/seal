"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-7xl mb-12 text-color-white"
      >
        One Click.{" "}
        <span className="bg-gradient-to-r from-[#8BA4FF] to-[#69D0E5] bg-clip-text text-transparent">
          Done.
        </span>
      </motion.h2>
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-3xl md:text-2xl mb-8 text-color-white leading-tight"
      >
        Say goodbye to repetitive paperwork – SEAL securely stores your
        personal information and autofills official documents in seconds.
      </motion.h3>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Link
          href="/products"
          className="inline-block px-8 py-3 rounded-full text-lg font-medium 
                   bg-transparent border border-[#69D0E5] text-white
                   hover:-translate-y-0.5 bg-[#69D0E5]/10 transition-all duration-300
                   shadow-[0_0_20px_rgba(105,208,229,0.3)]
                   mt-8"
        >
          Try SEAL Now
        </Link>
      </motion.div>
    </div>
  );
} 