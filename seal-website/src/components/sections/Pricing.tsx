import React from "react";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="min-h-screen w-full flex items-center justify-center py-20 overflow-y-auto bg-color-black"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-7xl mb-20 w-full">
          <div className="flex flex-col items-start ">
            <span className="text-white">Find the</span>
            <div className="flex items-center mt-2">
              <span className="text-white mr-4">perfect</span>
              <span className="bg-gradient-to-r from-[#8BA4FF] to-[#69D0E5] bg-clip-text text-transparent">
                plan
              </span>
            </div>
          </div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* Basic Plan */}
          <div className="bg-[#121212] rounded-3xl p-8 transition-all group border border-[#4B4B4B]">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 rounded-full border border-[#69D0E5] flex items-center justify-center mr-3">
                <span className="text-[#69D0E5] text-sm">B</span>
              </div>
              <h3 className="text-xl font-bold text-white">Basic</h3>
            </div>
            <div className="mb-8">
              <p className="text-2xl font-bold text-white mb-1">Free</p>
              <p className="text-gray-400">Best for Personal Use</p>
            </div>
            <button className="w-full py-3 px-6 rounded-xl border border-[#69D0E5] text-white hover:bg-[#69D0E5] hover:text-black transition-all mb-8">
              Get Started
            </button>
            <div className="space-y-4">
              <p className="text-gray-400 text-sm font-medium mb-2">
                What you'll get:
              </p>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-[#69D0E5] mr-3 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <p className="text-gray-400 text-sm">
                  5 Free Documents Per Month
                </p>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-[#69D0E5] mr-3 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <p className="text-gray-400 text-sm">
                  Unlimited Personal Profile
                </p>
              </div>
            </div>
          </div>

          {/* Standard Plan */}
          <div className="bg-[#121212] rounded-3xl p-8 transition-all group border border-[#4B4B4B]">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 rounded-full border border-[#69D0E5] flex items-center justify-center mr-3">
                <span className="text-[#69D0E5] text-sm">S</span>
              </div>
              <h3 className="text-xl font-bold text-white">Standard</h3>
            </div>
            <div className="mb-8">
              <p className="text-2xl font-bold text-white mb-1">10€</p>
              <p className="text-gray-400">per month</p>
            </div>
            <button className="w-full py-3 px-6 rounded-xl border border-[#69D0E5] text-white hover:bg-[#69D0E5] hover:text-black transition-all mb-8">
              Get Started
            </button>
            <div className="space-y-4">
              <p className="text-gray-400 text-sm font-medium mb-2">
                What you'll get:
              </p>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-[#69D0E5] mr-3 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <p className="text-gray-400 text-sm">Unlimited Documents</p>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-[#69D0E5] mr-3 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <p className="text-gray-400 text-sm">Advanced Support</p>
              </div>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-[#121212] rounded-3xl p-8 transition-all group border border-[#4B4B4B]">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 rounded-full border border-[#69D0E5] flex items-center justify-center mr-3">
                <span className="text-[#69D0E5] text-sm">E</span>
              </div>
              <h3 className="text-xl font-bold text-white">Enterprise</h3>
            </div>
            <div className="mb-8">
              <p className="text-2xl font-bold text-white mb-1">Custom</p>
              <p className="text-gray-400">Contact us</p>
            </div>
            <button className="w-full py-3 px-6 rounded-xl border border-[#69D0E5] text-white hover:bg-[#69D0E5] hover:text-black transition-all mb-8">
              Get Started
            </button>
            <div className="space-y-4">
              <p className="text-gray-400 text-sm font-medium mb-2">
                What you'll get:
              </p>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-[#69D0E5] mr-3 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <p className="text-gray-400 text-sm">
                  API Integration Available
                </p>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-[#69D0E5] mr-3 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <p className="text-gray-400 text-sm">
                  Custom Workflows & Integration
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
