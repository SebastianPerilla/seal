"use client"; // Required for hooks in Next.js

import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full flex items-center justify-center py-20 overflow-y-auto bg-black"
    >
      <div className="max-w-3xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-7xl font-bold mb-8 bg-gradient-to-r from-[#8BA4FF] to-[#69D0E5] bg-clip-text text-transparent text-center">
          Contact Us
        </h2>
        <p className="text-gray-400 text-lg mb-12 text-center max-w-2xl">
          Have questions about SEAL? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
        
        <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-white text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#121212] border border-[#1a1a1a] rounded-lg text-white focus:outline-none focus:border-[#69D0E5] transition-colors"
              placeholder="Your name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-white text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#121212] border border-[#1a1a1a] rounded-lg text-white focus:outline-none focus:border-[#69D0E5] transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-white text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-[#121212] border border-[#1a1a1a] rounded-lg text-white focus:outline-none focus:border-[#69D0E5] transition-colors resize-none"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-gradient-to-r from-[#8BA4FF] to-[#69D0E5] text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Or reach out to us directly at{" "}
            <a
              href="mailto:contact@seal.com"
              className="text-[#69D0E5] hover:underline"
            >
              contact@seal.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact; 