"use client";
import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import PlantUMLDiagram from '@/components/PlantUMLDiagram';

const GravitationalFieldPage = () => {
  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    mermaid.contentLoaded();
  }, []);

  const mindmapCode = `
@startmindmap
* Gravitational Field
right side
** Definition
*** Region around massive object
*** Where gravitational force is operative
** Gravitational Field Strength (g)
*** Force per unit mass
*** Vector quantity
*** Points toward center of Earth
*** Measured in N/kg or m/s²
left side
** Characteristics
*** Decreases with distance from surface
*** Varies for different planets
** Earth&apos;sg
*** 9.8 N/kg
*** 9.8 m/s²
** Applications
*** Weight calculations
*** Planetary comparisons
@endmindmap
`;

  const [zoomLevel, setZoomLevel] = useState(1);
  const zoomOut = () => setZoomLevel(prev => Math.max(prev - 0.1, 0.5));
  const zoomIn = () => setZoomLevel(prev => Math.min(prev + 0.1, 2));

  return (
    <div className="container overflow-x-hidden mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Gravitational Field</h1>

      <h2 className="text-2xl font-semibold mb-4">Gravitational Field Strength in the Solar System</h2>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Planet</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">g (N/kg)</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr><td className="px-6 py-4 whitespace-nowrap">Mercury</td><td className="px-6 py-4 whitespace-nowrap">3.7</td></tr>
            <tr><td className="px-6 py-4 whitespace-nowrap">Venus</td><td className="px-6 py-4 whitespace-nowrap">8.9</td></tr>
            <tr><td className="px-6 py-4 whitespace-nowrap">Earth</td><td className="px-6 py-4 whitespace-nowrap">9.8</td></tr>
            <tr><td className="px-6 py-4 whitespace-nowrap">Mars</td><td className="px-6 py-4 whitespace-nowrap">3.7</td></tr>
            <tr><td className="px-6 py-4 whitespace-nowrap">Jupiter</td><td className="px-6 py-4 whitespace-nowrap">24.7</td></tr>
            <tr><td className="px-6 py-4 whitespace-nowrap">Saturn</td><td className="px-6 py-4 whitespace-nowrap">9.0</td></tr>
            <tr><td className="px-6 py-4 whitespace-nowrap">Uranus</td><td className="px-6 py-4 whitespace-nowrap">8.7</td></tr>
            <tr><td className="px-6 py-4 whitespace-nowrap">Neptune</td><td className="px-6 py-4 whitespace-nowrap">11.0</td></tr>
            <tr><td className="px-6 py-4 whitespace-nowrap">Sun</td><td className="px-6 py-4 whitespace-nowrap">274</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Gravitational Field Mindmap</h2>
      <div className="transition-transform duration-300">
        <PlantUMLDiagram code={mindmapCode} />
      </div>
    </div>
  );
};

export default GravitationalFieldPage;