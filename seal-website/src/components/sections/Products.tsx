import React from "react";

const Products = () => {
  return (
    <section
      id="products"
      className="min-h-screen w-full flex items-center justify-center py-20 overflow-y-auto bg-black"
    >
      <div className="max-w-6xl mx-auto mt-30 px-4 flex flex-col items-center">
        <h2 className="text-7xl w-full mb-20">
          <div className="flex flex-col p-6">
            <span className="text-white">Products that</span>
            <div className="flex items-center mt-2">
              <span className="bg-gradient-to-r from-[#8BA4FF] to-[#69D0E5] bg-clip-text text-transparent">
                simplify
              </span>
            </div>
          </div>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl auto-rows-fr min-h-[800px] flex flex-col text-center">
          
          {/* SEAL Autofill */}
          <div className="bg-[#121212] rounded-3xl p-8 transition-all group border-2 border-[#1a1a1a] hover:border-[#69D0E5]">
            <div className="flex justify-start mb-6">
              <img
                src="/assets/icons/autofill_icon.png"
                alt="Autofill Icon"
                className="w-16 h-16 mx-auto"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              SEAL Autofill
            </h3>
            <p className="text-gray-400 text-lg">
              No more typing the same details over and over. SEAL fills out your forms instantly, so you don't have to.
            </p>
          </div>

          {/* SEAL Process */}
          <div className="bg-[#121212] rounded-3xl p-8 transition-all group border-2 border-[#1a1a1a] hover:border-[#69D0E5] ">
            <div className="flex justify-start mb-6">
              <img
                src="/assets/icons/lightning_icon.png"
                alt="Process Icon"
                className="w-16 h-16 mx-auto"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              SEAL Process
            </h3>
            <p className="text-gray-400 text-lg">
              With SEAL, any document process gets done for you—fast, hassle-free, and without the paperwork headaches.
            </p>
          </div>

          {/* SEAL Vault */}
          <div className="bg-[#121212] rounded-3xl p-8 transition-all group border-2 border-[#1a1a1a] hover:border-[#69D0E5] ">
            <div className="flex justify-start mb-6">
              <img
                src="/assets/icons/vault_logo.png"
                alt="Vault Icon"
                className="w-16 h-16 mx-auto"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              SEAL Vault
            </h3>
            <p className="text-gray-400 text-lg">
              Store your personal info securely in one place and access it anytime you need to fill out documents.
            </p>
          </div>

          {/* SEAL API */}
          <div className="bg-[#121212] rounded-3xl p-8 transition-all group border-2 border-[#1a1a1a] hover:border-[#69D0E5] ">
            <div className="flex justify-start mb-6">
              <img
                src="/assets/icons/building_icon.png"
                alt="API Icon"
                className="w-16 h-16 mx-auto"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              SEAL API
            </h3>
            <p className="text-gray-400 text-lg">
              Businesses and institutions can connect with SEAL to streamline paperwork and speed up processes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
