import React, { useEffect, useRef } from "react";
import Mac24inc from "../../assets/images/iMac 24 inch.png";
import IpadMini from "../../assets/images/iPad_Mini_2021.png";
import MonitorXDR from "../../assets/images/Monitor XDR.png";

const HowSealWorks = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const element = timelineRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how much of the timeline should be filled based on scroll position
      const visibleHeight = windowHeight - rect.top;
      const percentVisible = Math.max(
        0,
        Math.min(1, visibleHeight / rect.height)
      );

      element.style.background = `linear-gradient(
        to bottom,
        #8BA4FF ${percentVisible * 100}%,
        #69D0E5 ${percentVisible * 100}%
      )`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="how-seal-works"
      className="min-h-screen w-full py-20 relative bg-black"
    >
      {/* Main heading */}
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-7xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-[#8BA4FF] to-[#69D0E5] bg-clip-text text-transparent">
            How SEAL works
          </span>
        </h2>
        <p className="text-center text-gray-300 text-xl mb-20">
          Autofill your documents and save time.
        </p>

        {/* Timeline bar */}
        <div
          className="absolute left-1/2 top-[20%] bottom-[10%] w-1"
          ref={timelineRef}
        ></div>

        {/* Content sections */}
        <div className="relative z-10 space-y-40 text-center">
          {/* Upload Document Section */}
          <div className="grid grid-cols-2 gap-8 items-center">
            <div className="flex items-center justify-center">
              <div className="w-full h-full relative">
                {/* First Image */}
                <div className="flex items-center justify-center ">
                  <img
                    src={Mac24inc}
                    alt="iMac 24 inc"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">Upload Your Document</h3>
              <p className="text-xl text-gray-300">
                Select any official form (visa, housing, banking, etc.), and
                SEAL's AI instantly autofills it.
              </p>
            </div>
          </div>

          {/* Store Data Section */}
          <div className="grid grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">Store Your Data Securely</h3>
              <p className="text-xl text-gray-300">
                Enter your personal details once—SEAL encrypts and safely stores
                them on the blockchain.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full h-full relative">
                {/* Placeholder for mobile devices image */}
                <div className="flex items-center justify-center">
                    <img
                        src={IpadMini}
                        alt="iPad Mini"
                        className="w-full-1/2 h-full object-cover"
                    />
                </div>
              </div>
            </div>
          </div>

          {/* Review and Submit */}
          <div className="grid grid-cols-2 gap-8 items-center">
            <div className="flex items-center justify-center">
              <div className="w-full h-full relative">
                {/* Placeholder for mobile devices image */}
                <div className="flex items-center justify-center">
                    <img
                        src={MonitorXDR}
                        alt="Monitor XDR"
                        className="w-[150%] h-[150%] object-cover"
                    />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">Store Your Data Securely</h3>
              <p className="text-xl text-gray-300">
                Check your pre-filled document, make edits if needed, and submit
                hassle-free.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowSealWorks;
