"use client"; // Required for hooks in Next.js

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Products: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false); // Initialize without sessionStorage
  
  // Move sessionStorage check to useEffect
  useEffect(() => {
    setIsLoaded(sessionStorage.getItem("isLoaded") === "true");
  }, []);

  // Update sessionStorage when isLoaded changes
  useEffect(() => {
    sessionStorage.setItem("isLoaded", isLoaded.toString());
  }, [isLoaded]);

  const products = [
    {
      title: "SEAL Autofill",
      description: "No more typing the same details over and over. SEAL fills out your forms instantly, so you don't have to.",
      icon: "/assets/icons/autofill_icon.png",
    },
    {
      title: "SEAL Process",
      description: "Streamline your workflow with our intelligent document processing system.",
      icon: "/assets/icons/lightning_icon.png",
    },
    {
      title: "SEAL Vault",
      description: "Store your personal info securely in one place and access it anytime you need to fill out documents.",
      icon: "/assets/icons/vault_icon.png",
    },
    {
      title: "SEAL API",
      description: "Businesses and institutions can integrate SEAL's powerful features into their own applications to streamline paperwork and speed up processes.",
      icon: "/assets/icons/building_icon.png", 
    },
  ];

  return (
    <section
      id="products"
      className="min-h-screen w-full flex items-center justify-center py-20 overflow-y-auto bg-black"
    >
      <div className="max-w-6xl mx-auto mt-30 px-4 flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-7xl w-full mb-20"
        >
          <div className="flex flex-col p-6">
            <span className="text-white">Products that</span>
            <div className="flex items-center mt-2">
              <span className="bg-gradient-to-r from-[#8BA4FF] to-[#69D0E5] bg-clip-text text-transparent">
                simplify
              </span>
            </div>
          </div>
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl auto-rows-fr min-h-[800px] flex flex-col text-center">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#121212] rounded-3xl p-8 transition-all group border-2 border-[#1a1a1a] hover:border-[#69D0E5]"
            >
              <div className="flex justify-start mb-6">
                <Image
                  src={product.icon}
                  alt={`${product.title} Icon`}
                  width={64}
                  height={64}
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {product.title}
              </h3>
              <p className="text-gray-400 text-lg">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products; 