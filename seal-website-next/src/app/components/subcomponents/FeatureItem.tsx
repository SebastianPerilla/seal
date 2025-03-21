"use client"; // Required for hooks in Next.js

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface FeatureItemProps {
  text: string;
  delay?: number;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ text, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="flex items-start mb-3"
    >
      <div className="w-5 h-5 mr-3 mt-1 relative">
        <Image
          src="/assets/icons/check_icon.png"
          alt="Check"
          fill
          className="object-contain"
        />
      </div>
      <p className="text-gray-400 text-sm font-medium">{text}</p>
    </motion.div>
  );
};

export default FeatureItem;