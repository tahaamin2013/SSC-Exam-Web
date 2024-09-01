import React from 'react';
import { elements } from './data/elements';
import Element from './Element';

const PeriodicTable: React.FC = () => {
  const grid = Array(10).fill(null).map(() => Array(18).fill(null));

  elements.forEach((element) => {
    let row = Math.floor((element.atomicNumber - 1) / 18);
    let col = (element.atomicNumber - 1) % 18;

    if (element.atomicNumber >= 57 && element.atomicNumber <= 71) {
      row = 8;
      col = element.atomicNumber - 57;
    } else if (element.atomicNumber >= 89 && element.atomicNumber <= 103) {
      row = 9;
      col = element.atomicNumber - 89;
    }

    grid[row][col] = element;
  });

  return (
    <div className="flex flex-col items-center bg-gray-900 p-4">
      <h1 className="text-2xl font-bold mb-4 text-white">Periodic Table</h1>
      <div className="grid grid-cols-18 gap-px">
        {grid.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {row.map((element, colIndex) => (
              <div key={`${rowIndex}-${colIndex}`} className="w-14 h-14">
                {element && <Element element={element} />}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
      <Legend />
    </div>
  );
};

const Legend: React.FC = () => {
  const categories = [
    { name: 'Alkali metals', color: 'bg-teal-700' },
    { name: 'Alkaline earth metals', color: 'bg-blue-700' },
    { name: 'Transition metals', color: 'bg-purple-800' },
    { name: 'Post-transition metals', color: 'bg-green-700' },
    { name: 'Metalloids', color: 'bg-yellow-700' },
    { name: 'Reactive non-metals', color: 'bg-orange-700' },
    { name: 'Noble gases', color: 'bg-pink-700' },
    { name: 'Lanthanides', color: 'bg-blue-900' },
    { name: 'Actinides', color: 'bg-purple-900' },
    { name: 'Unknown properties', color: 'bg-gray-700' },
  ];

  return (
    <div className="mt-4 grid grid-cols-5 gap-2">
      {categories.map((category, index) => (
        <div key={index} className="flex items-center">
          <div className={`w-3 h-3 ${category.color} mr-2 rounded-full`}></div>
          <span className="text-xs text-white">{category.name}</span>
        </div>
      ))}
    </div>
  );
};

export default PeriodicTable;