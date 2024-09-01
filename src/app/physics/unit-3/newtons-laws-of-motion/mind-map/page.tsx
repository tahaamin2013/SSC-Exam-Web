"use client";
import React, { useEffect, useState } from 'react';
import PlantUMLDiagram from '@/components/PlantUMLDiagram';

const NewtonLawsPage = () => {

  const mindmapCode = `
@startmindmap
* Newton&apos;sLaws of Motion
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

  const mindmapCode2 = `
@startmindmap
* Newton&apos;sLaws of Motion
** Published in 1686
** Book: Philosophiæ Naturalis Principia Mathematica
*** English title: Principles of Natural Mathematics
*** Considered one of the greatest scientific works
** Author: Sir Isaac Newton
*** Lived 1642-1727
*** English Scientist
** Contains three laws of motion
*** First Law
*** Second Law
*** Third Law
@endmindmap
`;
  const mindmapCode3 = `
@startmindmap
* Newton&apos;sFirst Law of Motion
right side
** Statement
*** Object maintains state of rest or uniform motion without external force
*** Mathematically: F = 0 then ΔV = 0
** Key Concepts
*** Inertia
**** Natural tendency to resist change in motion
**** Proportional to mass
*** External vs Internal Forces
** Applications
*** Soccer ball example
**** Ball continues moving after kick
*** Bus passenger example
**** Feeling pushed when bus starts/stops
**** Feeling sideways force during turns
left side
** Implications
*** Objects would move in straight line forever in space
*** Difficult to observe on Earth due to friction and gravity
** Related Concepts
*** Mass
**** Measure of amount of matter
**** Determines inertia
*** Velocity
**** Constant in absence of external forces
@endmindmap`;


  const mindmapCode4 = `
@startmindmap
* Newton&apos;sSecond Law of Motion
** Statement
*** a = F / m or F = ma
*** Acceleration is directly proportional to net force
*** Acceleration is inversely proportional to mass
** Key Concepts
*** Net Force (F)
**** Causes change in velocity (acceleration)
**** Directly proportional to acceleration
*** Mass (m)
**** Represents inertia
**** Inversely proportional to acceleration
*** Acceleration (a)
**** Change in velocity
**** Directly proportional to force
**** Inversely proportional to mass
left side
** Unit of Force
*** Newton (N)
**** 1 N = 1 kg · m/s²
**** Force needed to accelerate 1 kg mass at 1 m/s²
** Applications
*** Example: Bus vs Car
**** Same force, different masses
**** Results in different accelerations
** Implications
*** Doubling force doubles acceleration (mass constant)
*** Doubling mass halves acceleration (force constant)
@endmindmap
  `;


  const mindmapCode5 = `
@startmindmap
* Newton&apos;sThird Law of Motion
** Statement
*** For every action, there is an equal and opposite reaction
*** F = -F (opposite directions)
** Key Concepts
*** Action-Reaction Pairs
**** Equal in magnitude
**** Opposite in direction
**** Act on different bodies
*** Cannot cancel each other out
** Related Forces
*** Normal force
*** Tension force
left side
** Examples
*** Kicking a football
**** Foot exerts force on ball (action)
**** Ball exerts equal force on foot (reaction)
*** Jumping
**** Legs push on ground (action)
**** Ground pushes back (reaction)
*** Punching or kicking objects
**** Feel pain due to reaction force
*** Rocket propulsion
**** Exhaust creates downward force
**** Equal upward thrust on rocket
** Implications
*** Present in all force interactions
*** Explains many everyday phenomena
@endmindmap
  `;

  const mindmapCode6 = `
@startmindmap
* Limitations of Newton&apos;sLaws of Motion
** Small Scale
*** Not applicable at atomic scale
*** Quantum mechanics takes over
*** Position and acceleration not well defined
** High Speeds
*** Not applicable near speed of light
*** Relativistic effects come into play
*** Relativistic mechanics required
left side
** Applicability
*** Good approximation for macroscopic scale
*** Valid for vast range of practical energies and forces
*** Still widely used in physics and engineering
** Importance
*** Fundamental set of principles
*** Applied in variety of situations
*** Spectacularly effective in most cases
@endmindmap
  `;


  const [zoomLevel, setZoomLevel] = useState(1);
  const zoomOut = () => setZoomLevel(prev => Math.max(prev - 0.1, 0.5));
  const zoomIn = () => setZoomLevel(prev => Math.min(prev + 0.1, 2));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Newton&apos;s Laws of Motion</h1>

      <h2 className="text-2xl font-semibold mb-4">Summary of Newton&apos;s Laws</h2>
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

      <div className="transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-4">Newton&apos;s Laws of Motion Mindmap</h2>
        <PlantUMLDiagram code={mindmapCode2} />
        <PlantUMLDiagram code={mindmapCode} />
        <PlantUMLDiagram code={mindmapCode3} />
        <PlantUMLDiagram code={mindmapCode4} />
        <PlantUMLDiagram code={mindmapCode5} />
        <PlantUMLDiagram code={mindmapCode6} />
      </div>
    </div>
  );
};

export default NewtonLawsPage;