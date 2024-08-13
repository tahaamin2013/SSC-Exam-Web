"use client";
import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import PlantUMLDiagram from '@/components/PlantUMLDiagram';

const KinematicsPage = () => {
  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    mermaid.contentLoaded();
  }, []);
  const mindmapCode = `
@startmindmap
left side
* Motion Due to Gravity
** Acceleration due to Gravity (g)
*** Same for all objects regardless of mass
*** Directed downward towards Earth&apos;s center
*** Value: g ≈ 9.80 m/s² or 32.2 ft/s²
** Air Resistance
*** Large objects: Neglected
*** Small objects: Affects the fall rate
**** Coin vs. Paper (With Air)
**** Coin and Paper (Without Air)
** Direction of Acceleration
*** With Gravity: +g
*** Against Gravity: -g
right side
** Example 2.5: Acceleration due to Gravity
*** Given
**** Mass (m): 2 kg
**** Initial Speed (v₁): 0 m/s
**** Final Speed (v₂): 78.5 m/s
**** Acceleration (g): 9.8 m/s²
*** Required
**** Time (Δt) to reach the ground
*** Solution
**** Formula: Δt = (v₂ - v₁) / g
**** Calculation: Δt = 8 s
@endmindmap

`;


  const [zoomLevel, setZoomLevel] = useState(1);
  const zoomOut = () => setZoomLevel(prev => Math.max(prev - 0.1, 0.5));
  const zoomIn = () => setZoomLevel(prev => Math.min(prev + 0.1, 2));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Motion due to gravity</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-blue-100 text-blue-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Parameter</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Symbol</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Value</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Unit</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Mass of the block</td>
              <td className="px-6 py-4 whitespace-nowrap">m</td>
              <td className="px-6 py-4 whitespace-nowrap">2</td>
              <td className="px-6 py-4 whitespace-nowrap">kg</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Initial speed</td>
              <td className="px-6 py-4 whitespace-nowrap">v₁</td>
              <td className="px-6 py-4 whitespace-nowrap">0</td>
              <td className="px-6 py-4 whitespace-nowrap">m/s</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Final speed</td>
              <td className="px-6 py-4 whitespace-nowrap">v₂</td>
              <td className="px-6 py-4 whitespace-nowrap">78.5</td>
              <td className="px-6 py-4 whitespace-nowrap">m/s</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Acceleration due to gravity</td>
              <td className="px-6 py-4 whitespace-nowrap">g</td>
              <td className="px-6 py-4 whitespace-nowrap">9.8</td>
              <td className="px-6 py-4 whitespace-nowrap">m/s²</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Time to reach the ground</td>
              <td className="px-6 py-4 whitespace-nowrap">Δt</td>
              <td className="px-6 py-4 whitespace-nowrap">8</td>
              <td className="px-6 py-4 whitespace-nowrap">s</td>
            </tr>
          </tbody>
        </table></div>


      <PlantUMLDiagram code={mindmapCode} />

    </div>
  );
};

export default KinematicsPage;
