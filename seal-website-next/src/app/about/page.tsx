"use client"; // Required for hooks in Next.js

import { motion } from "framer-motion";
import Hero from "./components/Hero";
import MissionStatement from "./components/MissionStatement";
import Values from "./components/Values";
import Team from "./components/Team";

// Metadata is handled in layout.tsx
export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen w-full flex items-center justify-center relative py-32 overflow-y-auto"
    >
      {/* Base starry background */}
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:50px_50px] opacity-[0.15] z-0" />

      {/* Brighter, larger stars */}
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_2px)] [background-size:200px_200px] opacity-[0.25] z-0" />

      <div className="max-w-3xl mx-auto px-4 flex flex-col items-center text-center z-10">
        <Hero />
        
        {/* Section dividers with increased spacing */}
        <div className="space-y-64 w-full">
          <div className="relative">
            <div className="absolute w-1/2 h-px bg-gradient-to-r from-transparent via-[#69D0E5] to-transparent left-1/2 -translate-x-1/2 -top-32 opacity-30" />
            <MissionStatement />
          </div>
          
          <div className="relative">
            <div className="absolute w-1/2 h-px bg-gradient-to-r from-transparent via-[#69D0E5] to-transparent left-1/2 -translate-x-1/2 -top-32 opacity-30" />
            <Values />
          </div>
          
          <div className="relative">
            <div className="absolute w-1/2 h-px bg-gradient-to-r from-transparent via-[#69D0E5] to-transparent left-1/2 -translate-x-1/2 -top-32 opacity-30" />
            <Team />
          </div>
        </div>
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