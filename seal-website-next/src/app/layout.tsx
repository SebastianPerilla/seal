"use client"; // Required for hooks in Next.js

import { useState, useEffect } from "react";
import "@/app/globals.css"; // Global styles

import { LoadingScreen } from "@/app/components/LoadingScreen";
import Navbar from "@/app/components/Navbar";
import MobileMenu from "@/app/components/MobileMenu";
import Footer from "@/app/components/Footer";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false); // Initialize without sessionStorage
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Replaces useLocation()

  // Move sessionStorage check to useEffect
  useEffect(() => {
    setIsLoaded(sessionStorage.getItem("isLoaded") === "true");
  }, []);

  useEffect(() => {
    if (isLoaded) {
      sessionStorage.setItem("isLoaded", "true");
    }
  }, [isLoaded]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <html lang="en">
      <body className="bg-black text-gray-100">
        {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
        <div className={`min-h-screen w-full transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <AnimatePresence mode="wait">{children}</AnimatePresence> {/* Next.js automatically passes children here */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
