import React from "react";

export const Home = () => {
  return (
    <section
      id="#home"
      className="min-h-screen flex items-center justify-center relative bg-[#121212]"
    >
      <div className="text-center z-10 px-4 py-32">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-b from-[#DBDBDB] to-[#FFFFFF] bg-clip-text leading-right text-transparent">
          Fill Instantly. Store Securely.
        </h1>
        <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
          SEAL instantly autofills officials documents and securely stores your
          data.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#products"
            className="bg-[#1a1a1a] text-white py-3 px-6 rounded-full font-medium transition relative overflow-hidden hover:-translate-y-0.5 border border-transparent hover:border-[#00C2FF] shadow-[0_0_0px_#00C2FF] hover:shadow-[0_0_15px_rgba(0,194,255,0.5)] duration-300"
          >
            Try Seal Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
