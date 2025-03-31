"use client"; // Required for hooks in Next.js

import React from "react";
import Link from "next/link";
import dynamic from 'next/dynamic';
import { motion } from "framer-motion";
import Hero from '@/app/components/sections/Hero';

// Dynamically import components that are below the fold
const HowSealWorks = dynamic(() => import("@/app/components/sections/HowSealWorks"), {
  ssr: true,
  loading: () => <div className="min-h-screen bg-black" />,
});

const Faq = dynamic(() => import("@/app/components/sections/Faq"), {
  ssr: false,
  loading: () => <div className="min-h-screen bg-black" />,
});

const TrySealBanner = dynamic(() => import("@/app/components/sections/TrySealBanner"), {
  ssr: false,
  loading: () => <div className="min-h-screen bg-black" />,
});

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <HowSealWorks />
      <Faq />
      <TrySealBanner />
    </main>
  );
}
