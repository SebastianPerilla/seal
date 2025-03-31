"use client"; // Required for hooks in Next.js

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-gray-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/images/seal_logo.png"
              alt="SEAL Logo"
              width={32}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>

          <button
            className="md:hidden p-2 text-white hover:text-gray-300 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div className="hidden md:flex items-center space-x-12">
            <Link
              href="/"
              className="text-white hover:text-gray-300 transition-colors text-sm"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-gray-300 transition-colors text-sm"
            >
              About
            </Link>
            <Link
              href="/products"
              className="text-white hover:text-gray-300 transition-colors text-sm"
            >
              Products
            </Link>
            <Link
              href="/pricing"
              className="text-white hover:text-gray-300 transition-colors text-sm"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-gray-300 transition-colors text-sm"
            >
              Contact
            </Link>
            <Link
              href="/login"
              className="px-5 py-2 rounded-full text-sm font-medium 
                       bg-transparent border-2 border-[#69D0E5] text-white
                       hover:bg-[#69D0E5]/10 transition-all duration-300
                       shadow-[0_0_20px_rgba(105,208,229,0.3)]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;