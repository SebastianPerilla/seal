"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Team() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full mt-32 mb-32"
    >
      <h2 className="text-5xl font-bold text-center mb-20 text-color-white">
        Meet the{" "}
        <span className="bg-gradient-to-r from-[#8BA4FF] to-[#69D0E5] bg-clip-text text-transparent">
          Team
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-4xl mx-auto">
        {/* Eliott Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center text-center"
        >
          <div className="w-64 h-64 rounded-full overflow-hidden mb-8">
            <Image
              src="/assets/images/Eliott_Lombard_About_Us.jpeg"
              alt="Eliott Lombard"
              width={256}
              height={256}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <h3 className="text-3xl font-bold mb-4">Eliott Lombard</h3>
          <h4 className="text-2xl font-bold mb-4">CEO</h4>
          <p className="text-gray-300 text-lg leading-relaxed">
            Drives SEAL&apos;s vision, <br></br>ensuring everything runs{" "}
            <br></br>smoothly and grows successfully.
          </p>
        </motion.div>

        {/* Sebastian Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center text-center"
        >
          <div className="w-64 h-64 rounded-full overflow-hidden mb-8">
            <Image
              src="/assets/images/Sebastian_Perilla_About_Us.jpeg"
              alt="Sebastian Perilla"
              width={256}
              height={256}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <h3 className="text-3xl font-bold mb-4">Sebastian Perilla</h3>
          <h4 className="text-2xl font-bold mb-4">CTO</h4>
          <p className="text-gray-300 text-lg leading-relaxed">
            Turns big ideas into reality, leading the tech behind SEAL&apos;s AI
            and machine learning technologies.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}