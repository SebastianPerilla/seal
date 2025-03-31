"use client"; // Required for hooks in Next.js

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Metadata is handled in layout.tsx
export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen w-full flex items-center justify-center relative py-20 overflow-y-auto"
    >
      {/* Base starry background */}
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:50px_50px] opacity-[0.15] z-0" />

      {/* Brighter, larger stars */}
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_2px)] [background-size:200px_200px] opacity-[0.25] z-0" />

      <div className="max-w-3xl mx-auto px-4 flex flex-col items-center text-center z-10 space-y-32">
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

        {/* Mission Statement */}
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

        {/* Values Section */}
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

        {/* Team Section */}
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
      </div>
    </motion.section>
  );
}



// Raw Code:

{/* <div className="glass rounded-xl mt-5 p-8 border-[#FFFFFF] border max-w-2xl bg-[#121212]">
          <p className="text-gray-300 mb-6 text-center">
            Say goodbye to repetitive paperwork – SEAL securely stores your
            personal information and autofills official documents in seconds.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all hover:bg-gradient-to-l hover:from-[#8BA4FF] hover:to-[#69D0E5] hover:bg-clip-text hover:text-transparent">
              <h3 className="text-xl font-bold mb-4">Secure Storage</h3>
              <div className="flex flex-wrap gap-2">
                {secureStorage.map((tech) => (
                  <div key={tech} className="flex items-center">
                    <div className="w-2 h-2 bg-[#69D0E5] rounded-full mr-2"></div>
                    <p className="text-gray-300">{tech}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all hover:bg-gradient-to-l hover:from-[#8BA4FF] hover:to-[#69D0E5] hover:bg-clip-text hover:text-transparent">
              <h3 className="text-xl font-bold mb-4">Automatic Autofill</h3>
              <div className="flex flex-wrap gap-2">
                {autofills.map((tech) => (
                  <div key={tech} className="flex items-center">
                    <div className="w-2 h-2 bg-[#69D0E5] rounded-full mr-2"></div>
                    <p className="text-gray-300">{tech}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all hover:bg-gradient-to-l hover:from-[#8BA4FF] hover:to-[#69D0E5] hover:bg-clip-text hover:text-transparent">
              <h3 className="text-xl font-bold mb-4">Business Integration</h3>
              <div className="flex flex-wrap gap-2">
                {sealAPI.map((tech) => (
                  <div key={tech} className="flex items-center">
                    <div className="w-2 h-2 bg-[#69D0E5] rounded-full mr-2"></div>
                    <p className="text-gray-300">{tech}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}