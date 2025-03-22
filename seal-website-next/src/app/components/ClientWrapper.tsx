"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";

import { LoadingScreen } from "@/app/components/LoadingScreen";
import Navbar from "@/app/components/Navbar";
import MobileMenu from "@/app/components/MobileMenu";
import Footer from "@/app/components/Footer";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem("isLoaded") === "true";
    setIsLoaded(alreadyLoaded);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      sessionStorage.setItem("isLoaded", "true");
    }
  }, [isLoaded]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`min-h-screen w-full transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <AnimatePresence mode="wait">{children}</AnimatePresence>
        <Footer />
      </div>
    </>
  );
}
