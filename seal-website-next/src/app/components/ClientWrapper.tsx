"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";

import { LoadingScreen } from "@/app/components/LoadingScreen";
import Navbar from "@/app/components/Navbar";
import MobileMenu from "@/app/components/MobileMenu";
import Footer from "@/app/components/Footer";
import DashboardLayout from "@/app/dashboard/layout";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState<boolean | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check sessionStorage only after component mounts
    const alreadyLoaded = sessionStorage.getItem("isLoaded") === "true";
    setIsLoaded(alreadyLoaded);
  }, []);

  useEffect(() => {
    if (isLoaded !== null) { // Only update when state has been initialized
      sessionStorage.setItem("isLoaded", String(isLoaded));
    }
  }, [isLoaded]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  // Don't render anything until we've checked sessionStorage
  if (isLoaded === null) {
    return null;
  }

  // Check if we're in the dashboard
  const isDashboard = pathname?.startsWith('/dashboard');

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`min-h-screen w-full transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        {isDashboard ? (
          <DashboardLayout>{children}</DashboardLayout>
        ) : (
          <>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <AnimatePresence mode="wait">{children}</AnimatePresence>
            <Footer />
          </>
        )}
      </div>
    </>
  );
}
