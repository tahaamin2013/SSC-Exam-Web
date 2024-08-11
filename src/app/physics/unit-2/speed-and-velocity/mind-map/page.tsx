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
* Speed and Velocity
left side
** Speed
*** Definition: Measure of how fast an object is moving.
*** Formula: v = distance / time = Δs / Δt
*** SI Unit: m/s or ms⁻¹
*** Types
**** Average Speed: v_ave = total distance / total time
**** Instantaneous Speed: Speed at any specific instant of time.
**** Uniform Speed: Equal distances in equal intervals of time.
**** Variable Speed: Unequal distances in equal intervals of time.
right side  
** Velocity
*** Definition: Speed with a specified direction.
*** Formula: v = displacement / time = Δd / Δt
*** SI Unit: m/s
*** Types
**** Average Velocity: v_ave = total displacement / total time
**** Instantaneous Velocity: Velocity at a specific moment in time.
**** Uniform Velocity: Equal displacements in equal intervals of time.
**** Variable Velocity: A change in speed, direction, or both.
@endmindmap
`;


  const [zoomLevel, setZoomLevel] = useState(1);
  const zoomOut = () => setZoomLevel(prev => Math.max(prev - 0.1, 0.5));
  const zoomIn = () => setZoomLevel(prev => Math.min(prev + 0.1, 2));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">2.3 Speed and Velocity</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Example</th>
              <th className="py-2 px-4 border-b">Given</th>
              <th className="py-2 px-4 border-b">Required</th>
              <th className="py-2 px-4 border-b">Solution</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">Example 2.1: Reaction Time of a Batsman</td>
              <td className="py-2 px-4 border-b">
                Speed: 161.3 km/h <br />
                Distance: 17.5 m
              </td>
              <td className="py-2 px-4 border-b">Reaction time (t)</td>
              <td className="py-2 px-4 border-b">
                \( t = \\frac﹛17.5 \text﹛m﹜﹛44.8 \text﹛m/s﹜﹜ = 0.39 \text﹛s﹜ \)
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Example 2.2: Fastest Train in the World</td>
              <td className="py-2 px-4 border-b">
                Distance: 30 km <br />
                Time: 7 min 30 s
              </td>
              <td className="py-2 px-4 border-b">Speed (v)</td>
              <td className="py-2 px-4 border-b">
                \( v = \\frac﹛30,000 \text﹛m﹜﹛450 \text﹛s﹜﹜ = 66.67 \text﹛m/s﹜ \)
                <br />
                \( v = 240.01 \text﹛km/h﹜ \)
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Example 2.3: Velocity of a Car</td>
              <td className="py-2 px-4 border-b">
                Distance: 800 m <br />
                Displacement: 600 m
              </td>
              <td className="py-2 px-4 border-b">Average Speed and Velocity</td>
              <td className="py-2 px-4 border-b">
                Speed: \( v_ave = 20 \text﹛m/s﹜ \) <br />
                Velocity: \( v_ave = 15 \text﹛m/s﹜ \)
              </td>
            </tr>
          </tbody>
        </table>



      </div>


      <PlantUMLDiagram code={mindmapCode} />

    </div>
  );
};

export default KinematicsPage;
