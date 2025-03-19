import React from 'react';

const GetStarted: React.FC = () => {
  const scrollToProducts = () => {
    window.location.href = '/products';
  };

  return (
    <button
      onClick={scrollToProducts}
      className="w-full py-3 px-6 mb-6 rounded-xl border-2 border-[#1a1a1a] text-white hover:bg-[#1a1a1a] transition-all"
    >
      Get Started
    </button>
  );
};

export default GetStarted;