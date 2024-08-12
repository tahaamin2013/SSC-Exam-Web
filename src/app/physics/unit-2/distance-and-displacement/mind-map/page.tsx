"use client";
import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import PlantUMLDiagram from '@/components/PlantUMLDiagram';

const KinematicsPage = () => {
  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    mermaid.contentLoaded();
  }, []);

  const umlCode = `
@startmindmap
<style>
mindmapDiagram {
  node {
    BackgroundColor lightGreen
  }
  :depth(1) {
    BackgroundColor lightBlue
  }
  :depth(2) {
    BackgroundColor lightYellow
  }
}
</style>
*[#FFD700] Distance and Displacement
left side
++[#FF6347] Distance
+++ always positive or zero because it measures the length between two points and cannot be negative
+++[#FFA07A] Definition
++++_ The length of the path traveled between two positions
++++_ Scalar quantity (no direction)
++++_ Denoted by \( \Delta x, \Delta r, \Delta s, \Delta d, \Delta l \)
++++_ SI Unit: Metre (m)
+++[#FFA07A] Example
++++_ Traveling from Faisal Masjid to Blue Area via a twisted path
right side
++[#FF8C00] Displacement
+++[#FFD700] Definition
++++_ Shortest distance from initial to final position
++++_ Vector quantity (has direction)
++++_ Denoted by \( \Delta d \)
++++_ SI Unit: Metre (m)
+++[#FFD700] Mathematical Representation
++++_ \( \Delta d = d_2 - d_1 \)
+++[#FFD700] Example
++++_ Moving from one point to another with a straight line path
++[#4682B4] Points to Ponder
+++[#87CEEB] Distance vs Displacement
++++_ Distance covered on a 400 m track with starting and ending point the same
++++_ Displacement: 0 meters
+++[#87CEEB] Can Displacement be Greater than Distance?
++++_ No, displacement cannot be greater than distance
+++[#87CEEB] Can Distance and Displacement be Equal?
++++_ Yes, if the path is a straight line
@endmindmap
`;

  const [zoomLevel, setZoomLevel] = useState(1);
  const zoomOut = () => setZoomLevel(prev => Math.max(prev - 0.1, 0.5));
  const zoomIn = () => setZoomLevel(prev => Math.min(prev + 0.1, 2));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">2.1 REST AND MOTION</h1>
      <table className="min-w-full bg-white border border-gray-300 mb-8">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">Aspect</th>
            <th className="py-2 px-4 border-b">Distance</th>
            <th className="py-2 px-4 border-b">Displacement</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b font-semibold">Definition</td>
            <td className="py-2 px-4 border-b">Length of the path traveled between two positions</td>
            <td className="py-2 px-4 border-b">Shortest distance from initial to final position</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b font-semibold">Characteristics</td>
            <td className="py-2 px-4 border-b">Scalar quantity (no direction)</td>
            <td className="py-2 px-4 border-b">Vector quantity (has direction)</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b font-semibold">Notation</td>
            <td className="py-2 px-4 border-b">\( \Delta x, \Delta r, \Delta s, \Delta d, \Delta l \)</td>
            <td className="py-2 px-4 border-b">\( \Delta d \)</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b font-semibold">SI Unit</td>
            <td className="py-2 px-4 border-b">Meter (m)</td>
            <td className="py-2 px-4 border-b">Meter (m)</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b font-semibold">Example</td>
            <td className="py-2 px-4 border-b">Traveling from Faisal Masjid to Blue Area via a twisted path</td>
            <td className="py-2 px-4 border-b">Moving directly from one point to another</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b font-semibold">Points to Ponder</td>
            <td className="py-2 px-4 border-b">Distance covered on a 400 m track with starting and ending point the same is 400 meters; Displacement is 0 meters.</td>
            <td className="py-2 px-4 border-b">Displacement cannot be greater than distance. Distance and displacement can be equal if the path is a straight line.</td>
          </tr>
        </tbody>
      </table>


      <PlantUMLDiagram code={umlCode} />

    </div>
  );
};

export default KinematicsPage;
