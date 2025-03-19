import { useState, useEffect } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import "./index.css";
import React from "react";
import MobileMenu from "./components/MobileMenu";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Products from "./components/sections/Products";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";
import { AnimatedPage } from "./components/AnimatedPage";
import Contact from "./components/sections/Contact";
import HowSealWorks from "./components/sections/HowSealWorks";
import Faq from "./components/sections/Faq";
import TrySealBanner from "./components/sections/TrySealBanner";
import Pricing from "./components/sections/Pricing";

function AppContent() {
  const [isLoaded, setIsLoaded] = useState(() => sessionStorage.getItem('isLoaded') === 'true');
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!isLoaded) {
      sessionStorage.setItem('isLoaded', 'true');
    }
  }, [isLoaded]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen w-full transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <AnimatedPage>
                <>
                  <Home />
                  <HowSealWorks />
                  <Faq />
                  <TrySealBanner />
                  {/* <Products /> */}
                </>
              </AnimatedPage>
            } />
            <Route path="/about" element={
              <AnimatedPage>
                <>
                  <About />
                </>
              </AnimatedPage>
            } />
            <Route path="/products" element={
              <AnimatedPage>
                <>
                  <Products />
                  <TrySealBanner />
                </>
              </AnimatedPage>
            } />
            <Route path="/contact" element={
              <AnimatedPage>
                <>
                  <Contact />
                </>
              </AnimatedPage>
            } />
            <Route path="/pricing" element={
              <AnimatedPage>
                <>
                  <Pricing />
                </>
              </AnimatedPage>
            } />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
