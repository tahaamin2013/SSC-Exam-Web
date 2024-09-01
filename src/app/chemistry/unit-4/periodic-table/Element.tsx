import React from 'react';

interface ElementProps {
  element: ElementType;
}

const Element: React.FC<any> = ({ element }) => {
  return (
    <div className={`w-14 h-14 border border-gray-700 flex flex-col items-center justify-center p-1 ${getCategoryColor(element.category)}`}>
      <div className="text-[0.6rem] text-gray-300">{element.atomicNumber}</div>
      <div className="font-bold text-base text-white">{element.symbol}</div>
      <div className="text-[0.5rem] truncate w-full text-center text-gray-300" title={element.name}>{element.name}</div>
    </div>
  );
};

function getCategoryColor(category: string): string {
  switch (category) {
    case 'alkali-metal': return 'bg-teal-700';
    case 'alkaline-earth-metal': return 'bg-blue-700';
    case 'transition-metal': return 'bg-purple-800';
    case 'post-transition-metal': return 'bg-green-700';
    case 'metalloid': return 'bg-yellow-700';
    case 'nonmetal': return 'bg-orange-700';
    case 'noble-gas': return 'bg-pink-700';
    case 'lanthanide': return 'bg-blue-900';
    case 'actinide': return 'bg-purple-900';
    default: return 'bg-gray-700';
  }
}

export default Element;