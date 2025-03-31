"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Values() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full mt-32"
    >
      <h2 className="text-5xl font-bold text-center mb-12 text-color-white">
        Our{" "}
        <span className="bg-gradient-to-r from-[#8BA4FF] to-[#69D0E5] bg-clip-text text-transparent">
          Values
        </span>
      </h2>
      <p className="text-xl text-gray-300 text-center mb-20">
        Our core values guide everything we do, ensuring a seamless
        experience for individuals and businesses alike.
      </p>

      <div className="glass rounded-xl p-12 border-[#FFFFFF] duration-300 bg-transparent">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Efficiency Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#121212] border border-[#69D0E5] rounded-xl p-6 transition-all group shadow-[0_0_10px_#69D0E5]"
          >
            <div className="flex justify-center">
              <Image
                src="/assets/icons/lightning_icon.png"
                alt="Lightning Icon"
                width={48}
                height={48}
                className="w-12 h-12 mb-6"
                priority
              />
            </div>
            <h3 className="text-xl font-bold mb-4 transition-colors group-hover:bg-gradient-to-l group-hover:from-[#8BA4FF] group-hover:to-[#69D0E5] group-hover:bg-clip-text group-hover:text-transparent">
              Efficiency
            </h3>
            <p className="text-gray-300">
              Save time by automating tedious paperwork
            </p>
          </motion.div>

          {/* Security Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-[#121212] border border-[#69D0E5] rounded-xl p-6 transition-all group shadow-[0_0_10px_#69D0E5]"
          >
            <div className="flex justify-center">
              <Image
                src="/assets/icons/vault_logo.png"
                alt="Security Icon"
                width={48}
                height={48}
                className="w-12 h-12 mb-6"
                priority
              />
            </div>
            <h3 className="text-xl font-bold mb-4 transition-colors group-hover:bg-gradient-to-l group-hover:from-[#8BA4FF] group-hover:to-[#69D0E5] group-hover:bg-clip-text group-hover:text-transparent">
              Security
            </h3>
            <p className="text-gray-300">
              Your data is encrypted and stored on the blockchain
            </p>
          </motion.div>

          {/* Simplicity Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-[#121212] border border-[#69D0E5] rounded-xl p-6 transition-all group shadow-[0_0_10px_#69D0E5]"
          >
            <div className="flex justify-center">
              <Image
                src="/assets/icons/simple_icon.png"
                alt="Simplicity Icon"
                width={48}
                height={48}
                className="w-12 h-12 mb-6"
                priority
              />
            </div>
            <h3 className="text-xl font-bold mb-4 transition-colors group-hover:bg-gradient-to-l group-hover:from-[#8BA4FF] group-hover:to-[#69D0E5] group-hover:bg-clip-text group-hover:text-transparent">
              Simplicity
            </h3>
            <p className="text-gray-300">
              A seamless experience for individuals and businesses
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
} 