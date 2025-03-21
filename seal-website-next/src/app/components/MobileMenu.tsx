"use client"; // Required for hooks in Next.js

import React from "react";
import Link from "next/link";

interface MobileMenuProps {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed inset-0 bg-[rgba(10,10,10,0.95)] backdrop-blur-lg z-40 
                 transition-all duration-500 ease-in-out 
                 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
    >      
      <div className="flex flex-col items-start justify-center h-full space-y-8 pl-8"> {/* Changed items-center to items-start and added padding-left */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-semibold text-white hover:text-[#69D0E5] transition-colors"
        >
          Home
        </Link>
        <Link
          href="/about"
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-semibold text-white hover:text-[#69D0E5] transition-colors"
        >
          About
        </Link>
        <Link
          href="/products"
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-semibold text-white hover:text-[#69D0E5] transition-colors"
        >
          Products
        </Link>
        <Link
          href="/pricing"
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-semibold text-white hover:text-[#69D0E5] transition-colors"
        >
          Pricing
        </Link>
        <Link
          href="/contact"
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-semibold text-white hover:text-[#69D0E5] transition-colors"
        >
          Contact
        </Link>
        <Link
          href="/products"
          onClick={() => setMenuOpen(false)}
          className="mt-4 px-6 py-3 rounded-full text-lg font-medium 
                   bg-transparent border border-[#69D0E5] text-white
                   hover:bg-[#69D0E5]/10 transition-all duration-300
                   shadow-[0_0_20px_rgba(105,208,229,0.3)]"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
