import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-black overflow-hidden"
    >
      {/* Base starry background */}
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:50px_50px] opacity-[0.15]" />

      {/* Brighter, larger stars */}
      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_2px)] [background-size:200px_200px] opacity-[0.25]" />

      {/* Bottom glow */}
      <div className="absolute bottom-[-50%] left-1/2 -translate-x-1/2 w-[70%] h-[90%] rounded-full bg-[radial-gradient(circle,rgba(105,208,229,0.45)_0%,transparent_60%)] blur-[100px]" />

      {/* New Gradient Border Bar */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-0.5 bg-gradient-to-r from-transparent via-[#8BA4FF] to-transparent"></div>

      <div className="text-center z-10 px-4 py-32">
        <h1 className="text-7xl md:text-7xl font-bold mb-6 bg-gradient-to-b from-[#DBDBDB] to-[#FFFFFF] bg-clip-text leading-right text-transparent">
          Fill Instantly. Store Securely.
        </h1>
        <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
          SEAL instantly autofills officials documents and securely stores your
          data.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="/products"
            className="inline-block px-8 py-3 rounded-full text-lg font-medium 
                     bg-transparent border border-[#69D0E5] text-white
                     hover:-translate-y-0.5 bg-[#69D0E5]/10 transition-all duration-300
                     shadow-[0_0_20px_rgba(105,208,229,0.3)]"
          >
            Try SEAL Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
