"use client";
import React, { useEffect, useState } from 'react';
import PlantUMLDiagram from '@/components/PlantUMLDiagram';

const NewtonLawsPage = () => {
  const mindmapCode = `
@startmindmap
* Newton's Laws of Motion
left side
** First Law
*** Objects at rest stay at rest
*** Objects in motion stay in motion
*** Unless acted upon by an external force
*** Concept of Inertia
** Second Law
*** F = ma
*** Force equals mass times acceleration
*** Defines the newton (N) as unit of force
right side
** Third Law
*** Action-Reaction Pairs
*** Equal and opposite forces
*** Act on different bodies
** Limitations
*** Not applicable at atomic scale
*** Not applicable at speeds close to light
*** Approximation for macroscopic scale
@endmindmap
`;

  const [zoomLevel, setZoomLevel] = useState(1);
  const zoomOut = () => setZoomLevel(prev => Math.max(prev - 0.1, 0.5));
  const zoomIn = () => setZoomLevel(prev => Math.min(prev + 0.1, 2));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Newton's Laws of Motion</h1>

      <h2 className="text-2xl font-semibold mb-4">Summary of Newton's Laws</h2>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Law</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Concept</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap font-medium">First Law</td>
              <td className="px-6 py-4">An object at rest stays at rest and an object in motion stays in motion unless acted upon by an external force.</td>
              <td className="px-6 py-4">Inertia</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap font-medium">Second Law</td>
              <td className="px-6 py-4">The acceleration of an object depends on the net force acting on it and its mass (F = ma).</td>
              <td className="px-6 py-4">Force, Mass, Acceleration</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap font-medium">Third Law</td>
              <td className="px-6 py-4">For every action, there is an equal and opposite reaction.</td>
              <td className="px-6 py-4">Action-Reaction Pairs</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Newton's Laws of Motion Mindmap</h2>
      <div className="transition-transform duration-300">
        <PlantUMLDiagram code={mindmapCode} />
      </div>
    </div>
  );
};

export default NewtonLawsPage;