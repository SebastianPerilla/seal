import React from "react";
import backgroundImage from "../../assets/images/trysealbackground.png";

const TrySealBanner = () => {
  return (
    <section className="mx-auto p-3">
      <div 
        className="relative rounded-2xl overflow-hidden border border-[#69D0E5]/30 max-w-6xl mx-auto"
        style={{
          background: `url(${backgroundImage}) no-repeat center center`,
          backgroundSize: 'cover'
        }}
      >
        {/* Content container */}
        <div className="relative z-10 px-8 py-16">
          <h2 className="text-4xl font-bold mb-8">
            Skip the Paperwork, Get{" "}
            <span className="block mt-2">SEAL</span>
          </h2>
          
          <a
            href="/products"
            className="inline-block px-8 py-3 rounded-full text-lg font-medium 
                     bg-transparent border border-[#69D0E5] text-white
                     hover:bg-[#69D0E5]/10 transition-all duration-300
                     shadow-[0_0_20px_rgba(105,208,229,0.3)]"
          >
            Try SEAL Now
          </a>
        </div>

        {/* Gradient overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%)'
          }}
        ></div>
      </div>
      <div className="mt-80">
        {/* Additional content can be added here */}
      </div>

    </section>
  );
};

export default TrySealBanner;