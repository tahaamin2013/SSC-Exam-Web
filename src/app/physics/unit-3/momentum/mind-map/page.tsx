"use client";
import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import PlantUMLDiagram from '@/components/PlantUMLDiagram';

const MomentumImpulsePage = () => {
  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    mermaid.contentLoaded();
  }, []);

  const mindmapCode = `
@startmindmap
* Momentum and Impulse
left side
** Momentum (p)
*** Definition: p = mv
*** Vector quantity
*** SI unit: kg·m/s or N·s
** Force and Momentum
*** F = Δp / Δt
*** Newton's Second Law
right side
** Impulse (J)
*** Definition: J = F × Δt
*** Equals change in momentum
*** Area under force-time graph
** Conservation of Momentum
*** For isolated systems
*** Initial momentum = Final momentum
** Applications
*** Collisions
*** Recoil in firearms
*** Rocket propulsion
@endmindmap
`;

  return (
    <div className="container overflow-x-hidden mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Momentum and Impulse</h1>

      <h2 className="text-2xl font-semibold mb-4">Key Equations</h2>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Concept</th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Equation</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr><td className="px-6 py-4 whitespace-nowrap">Momentum</td><td className="px-6 py-4 whitespace-nowrap">p = mv</td></tr>
            <tr><td className="px-6 py-4 whitespace-nowrap">Force and Momentum</td><td className="px-6 py-4 whitespace-nowrap">F = Δp / Δt</td></tr>
            <tr><td className="px-6 py-4 whitespace-nowrap">Impulse</td><td className="px-6 py-4 whitespace-nowrap">J = F × Δt</td></tr>
            <tr><td className="px-6 py-4 whitespace-nowrap">Conservation of Momentum</td><td className="px-6 py-4 whitespace-nowrap">p_initial = p_final</td></tr>
            <tr><td className="px-6 py-4 whitespace-nowrap">Recoil Velocity</td><td className="px-6 py-4 whitespace-nowrap">V = - (m × v) / M</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Momentum and Impulse Concepts</h2>
      <div className="transition-transform duration-300">
        <PlantUMLDiagram code={mindmapCode} />
      </div>
    </div>
  );
};

export default MomentumImpulsePage;