import React from "react";
import { Link } from "react-router-dom";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col justify-center 
                      transition-all duration-700 ease-in-out 
                      
                      
                      ${
                        menuOpen
                          ? "h-screen opacity-100 pointer-events-auto"
                          : "h-0 opacity-0 pointer-events-none "
                      }
                    `}
    >      
      <div className="flex flex-col items-start ml-20 justify-center">
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
          aria-label="Close Menu"
        >
          &times;
        </button>
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Home
        </Link>
        <Link
          to="/about"
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          About
        </Link>
        <Link
          to="/products"
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Products
        </Link>
        <Link
          to="/pricing"
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Pricing
        </Link>
        <Link
          to="/contact"
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
