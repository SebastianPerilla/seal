"use client";

import { motion } from "framer-motion";

export default function MissionStatement() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mx-auto text-center mt-32"
    >
      <h2 className="text-4xl md:text-4xl font-bold mb-16 bg-gradient-to-r from-[#8BA4FF] to-[#69D0E5] bg-clip-text text-transparent leading-tight">
        At SEAL, we believe paperwork should be effortless. Our goal is to
        eliminate repetitive form-filling by securely storing your personal
        information and instantly autofilling documents.
      </h2>
    </motion.div>
  );
} 