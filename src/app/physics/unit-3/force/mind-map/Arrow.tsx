import React from 'react';

interface ArrowProps {
  direction: 'left' | 'right';
  magnitude: number;
}

const Arrow: React.FC<ArrowProps> = ({ direction, magnitude }) => {
  const arrowClass = direction === 'left' ? 'transform rotate-180' : '';
  
  return (
    <div className="flex items-center">
      <svg className={`w-12 h-6 ${arrowClass}`} viewBox="0 0 24 12">
        <line x1="0" y1="6" x2="22" y2="6" stroke="black" strokeWidth="2" />
        <polygon points="22,6 18,2 18,10" fill="black" />
      </svg>
      <span className="text-sm font-bold">{magnitude}N</span>
    </div>
  );
};

export default Arrow;