import React from 'react';

interface FeatureItemProps {
  text: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ text }) => {
  return (
    <div className="flex items-start mb-2">
      <img
        src="/assets/icons/check_icon.png"
        alt="Check"
        className="w-5 h-5 mr-3 mt-1"
      />
      <p className="text-gray-400 text-sm font-bold">{text}</p>
    </div>
  );
};

export default FeatureItem;