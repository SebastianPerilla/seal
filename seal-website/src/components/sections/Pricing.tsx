import React from "react";
import FeatureItem from "../subcomponents/FeatureItem";
import GetStarted from "../subcomponents/GetStarted";
const Pricing = () => {
  return (
    <section
      id="pricing"
      className="min-h-screen w-full flex items-center justify-center py-20 overflow-y-auto"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-7xl mb-20 w-full">
          <div className="flex flex-col items-center text-white">
            Find the perfect
            <span className="bg-gradient-to-r from-[#8BA4FF] to-[#69D0E5] bg-clip-text text-transparent">
              plan
            </span>
          </div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* Basic Plan */}
          <div className="rounded-3xl p-8 transition-all group relative overflow-hidden bg-gradient-to-tr from-[rgba(138,164,255,0.2)] via-[rgba(0,0,0,0.8)] to-[rgba(105,208,229,0.2)]">
            <div className="flex items-center mb-6 relative z-10">
              <div className="w-8 h-8 rounded-full border border-[#69D0E5] flex items-center justify-center mr-3">
                <span className="text-[#69D0E5] text-sm">B</span>
              </div>
              <h3 className="text-xl font-bold text-white">Basic</h3>
            </div>
            <div className="mb-8 relative z-10">
              <p className="text-2xl font-bold text-white mb-1">Free</p>
              <p className="text-gray-400 text-sm">Best for Personal Use (Storage: 500MB, Document Processes: 1 per month)  </p>
            </div>
            <GetStarted />
            <div className="space-y-4 relative z-10">
              <p className="text-gray-400 text-sm font-medium mb-2">
                What you'll get:
              </p>
              <FeatureItem text="3 Free Document Autofills per Month" />
              <FeatureItem text="1 Document Process per Month" />
              <FeatureItem text="Encrypted Document Vault" />
            </div>
          </div>

          {/* Standard Plan */}
          <div className="rounded-3xl p-8 transition-all group relative z-10 bg-gradient-to-tr from-[rgba(105,208,229,0.2)] via-[rgba(0,0,0,0.8)] to-[rgba(138,164,255,0.2)]">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 rounded-full border border-[#69D0E5] flex items-center justify-center mr-3 ">
                <span className="text-[#69D0E5] text-sm">S</span>
              </div>
              <h3 className="text-xl font-bold text-white">Standard</h3>
            </div>
            <div className="mb-8">
              <p className="text-2xl font-bold text-white mb-1">
                10€ / per month
              </p>
              <p className="text-gray-400 text-sm">
                For Students, Expats, and Frequent Travellers Managing Docs
              </p>
            </div>
            <GetStarted />
            <div className="space-y-4">
              <p className="text-gray-400 text-sm font-medium mb-2">
                What you'll get:
              </p>
              <FeatureItem text="Unlimited AI Autofill" />
              <FeatureItem text="Secure Vault with 500MB Storage" />
              <FeatureItem text="Unlimited Document Processes" />
              <FeatureItem text="Priority Support" />
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="rounded-3xl p-8 transition-all group bg-gradient-to-tr from-[rgba(138,164,255,0.2)] via-[rgba(0,0,0,0.8)] to-[rgba(105,208,229,0.2)]">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 rounded-full border border-[#69D0E5] flex items-center justify-center mr-3">
                <span className="text-[#69D0E5] text-sm">E</span>
              </div>
              <h3 className="text-xl font-bold text-white">Enterprise</h3>
            </div>
            <div className="mb-8">
              <p className="text-2xl font-bold text-white mb-1">Custom</p>
              <p className="text-gray-400 text-sm">
                For Companies, Institutions, Universities, and Teams
              </p>
            </div>
            <GetStarted />
            <div className="space-y-4">
              <p className="text-gray-400 text-sm font-medium mb-2">
                What you'll get:
              </p>
              <FeatureItem text="All Standard Features" />
              <FeatureItem text="API Integration with Enterprise Software" />
              <FeatureItem text="Custom Workflows & Compliance Tools" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
