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
* Graphical Analysis of Motion
left side
** Distance-Time Graph
*** Horizontal axis: Time (t)
*** Vertical axis: Distance (s)
*** Gradient = Δs / Δt (Speed)
*** Example 2.5: Peshawar to Islamabad
**** From Peshawar to Rest Area: 100 km / 1 hr = 100 km/hr = 27.78 m/s
**** From Rest Area to Islamabad: 75 km / 1.5 hr = 50 km/hr = 13.89 m/s
**** Total Distance: 175 km / 2.5 hr = 70 km/hr = 19.44 m/s
right side
** Speed-Time Graph
*** Horizontal axis: Time (t)
*** Vertical axis: Speed (v)
*** Slope = Δv / Δt (Acceleration)
*** Area under graph = Distance Traveled
*** Example 2.6: Speed of Car
**** Acceleration (0-20 s): (30-0) / (20-0) = 1.5 m/s²
**** Acceleration (20-50 s): (30-30) / (50-20) = 0 m/s²
**** Acceleration (50-60 s): (0-30) / (60-50) = -3 m/s²
**** Total Distance: 300 m + 900 m + 150 m = 1350 m
**** Average Speed: 1350 m / 60 s = 22.5 m/s
@endmindmap
`;


  const [zoomLevel, setZoomLevel] = useState(1);
  const zoomOut = () => setZoomLevel(prev => Math.max(prev - 0.1, 0.5));
  const zoomIn = () => setZoomLevel(prev => Math.min(prev + 0.1, 2));

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Graphical Analysis of Motion</h2>
      <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Topic</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Distance-Time Graph</td>
            <td className="px-6 py-4 whitespace-nowrap"></td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Horizontal Axis</td>
            <td className="px-6 py-4 whitespace-nowrap">Time (t)</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Vertical Axis</td>
            <td className="px-6 py-4 whitespace-nowrap">Distance (s)</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Gradient Formula</td>
            <td className="px-6 py-4 whitespace-nowrap">Gradient = Δs / Δt (Speed)</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Example 2.5</td>
            <td className="px-6 py-4 whitespace-nowrap"></td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">From Peshawar to Rest Area</td>
            <td className="px-6 py-4 whitespace-nowrap">100 km / 1 hr = 100 km/hr = 27.78 m/s</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">From Rest Area to Islamabad</td>
            <td className="px-6 py-4 whitespace-nowrap">75 km / 1.5 hr = 50 km/hr = 13.89 m/s</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Total Distance</td>
            <td className="px-6 py-4 whitespace-nowrap">175 km / 2.5 hr = 70 km/hr = 19.44 m/s</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Speed-Time Graph</td>
            <td className="px-6 py-4 whitespace-nowrap"></td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Horizontal Axis</td>
            <td className="px-6 py-4 whitespace-nowrap">Time (t)</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Vertical Axis</td>
            <td className="px-6 py-4 whitespace-nowrap">Speed (v)</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Slope Formula</td>
            <td className="px-6 py-4 whitespace-nowrap">Slope = Δv / Δt (Acceleration)</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Area Under Graph</td>
            <td className="px-6 py-4 whitespace-nowrap">Distance Traveled</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Example 2.6</td>
            <td className="px-6 py-4 whitespace-nowrap"></td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Acceleration (0-20 s)</td>
            <td className="px-6 py-4 whitespace-nowrap">1.5 m/s²</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Acceleration (20-50 s)</td>
            <td className="px-6 py-4 whitespace-nowrap">0 m/s²</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Acceleration (50-60 s)</td>
            <td className="px-6 py-4 whitespace-nowrap">-3 m/s²</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Total Distance</td>
            <td className="px-6 py-4 whitespace-nowrap">1350 m</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Average Speed</td>
            <td className="px-6 py-4 whitespace-nowrap">22.5 m/s</td>
          </tr>
        </tbody>
      </table>
      <PlantUMLDiagram code={mindmapCode} />
    </div>
  );
};

export default KinematicsPage;
