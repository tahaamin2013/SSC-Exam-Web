"use client";
import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import PlantUMLDiagram from '@/components/PlantUMLDiagram';

const DynamicsPage = () => {
    useEffect(() => {
        mermaid.initialize({ startOnLoad: true });
        mermaid.contentLoaded();
    }, []);

    const mindmapCode1 = `
@startmindmap
* Force and Motion
right side
** Kinematics
*** Description of motion
**** Velocity
**** Acceleration
** Dynamics
*** Causes of motion
**** How objects begin to move
**** What causes acceleration/deceleration
**** What makes objects move in curved paths
left side
** Force
*** Vector quantity
*** Changes state of body
***:Affects motion
(start, stop, speed up, slow down, change direction);
*** Central concept in dynamics
*** Answers key questions about motion
** Applications of Force
*** Start motion from rest
*** Speed up objects
*** Slow down objects
*** Change direction of motion
** Examples
*** Moving a trolley
@endmindmap`

const mindmapCode3 = `
@startmindmap
* Types of Forces
left side
** Contact Forces
*** Normal Force
**** Perpendicular to contact surface
**** Prevents objects passing through each other
**** Example: Book on table
*** Thrust
**** Propels in direction of motion
**** Example: Car engine
*** Friction
**** Resists relative motion
**** Opposite to direction of motion
**** Example: Air resistance
*** Tension
**** Exerted through string, rope, cable, or spring
**** Example: Spider web
*** Elastic Forces
**** Resist change in shape
**** Arise from forces between particles
**** Example: Stretched spring or rubber band
right side
** Non-Contact Forces
*** Definition
**** Acts at a distance
**** No physical contact required
*** Gravitational Force
**** Attraction between objects with mass
**** Example: Earth's gravity on moon
*** Electrostatic Force
**** Between charged objects
**** Can be attractive or repulsive
**** Example: Nucleus and electron
*** Magnetic Force
**** Between magnetic poles
**** Can be attractive or repulsive
**** Example: Repulsion between two North poles
@endmindmap`

const mindmapCode4 = `
@startmindmap
* Fundamental Forces in Nature
right side
** Electromagnetic Force
*** Acts between electric charges
*** Includes electric and magnetic forces
*** Exchange particle: photon
*** Infinite range
*** Relative strength: 7.3 x 10^-3
*** Causes normal force, friction, tension
** Gravitational Force
*** Weakest fundamental force
*** Attraction between all objects
*** Theorized exchange particle: graviton (undetected)
*** Infinite range
*** Relative strength: 6 x 10^-39
*** Noticeable for large masses (stars, planets)
** Weak Nuclear Force
*** Weakest after gravitational force
*** Shortest range (~10^-18 m)
*** Exchange particles: W+, W-, Z0 (vector bosons)
*** Relative strength: 10^-13
*** Responsible for radioactive decay
*** Changes quark flavors
left side
** Strong Nuclear Force
*** Strongest of all forces
*** Keeps protons in nucleus
*** Exchange particles: pions
*** Very short range (~10^-15 m)
*** Relative strength: 1
** Unification Attempts
*** Electroweak theory
**** Unifies electromagnetic and weak forces
**** Proposed by Salam, Weinberg, Glashow
**** Incorporates quantum electrodynamics
**** Four carrier particles
***** Photon
***** W+, W-, Z particles
** Comparison Table
*** Range
*** Relative strength
*** Function
*** Exchange Particles
@endmindmap`

const mindmapCode5 = `
@startmindmap
* Force Diagrams
right side
** Types
*** System Diagrams (SD)
**** Visual expression of all objects involved
*** Free-Body Diagrams (FBD)
**** Schematic representation of single object
**** Shows all forces acting on the object
** Characteristics
*** Force vectors
**** Length proportional to force magnitude
**** Labeled with symbol 'F' and subscript
left side
** Force Labels
*** Fg: Force of gravity
*** Fn: Normal force
*** Ff: Friction
*** Ft: Tension
*** Fa: Applied force
** Purpose
*** Study forces and their effects on objects
** Examples
*** Figure 3.5
**** Three examples of SDs and FBDs
@endmindmap
`


    const [zoomLevel, setZoomLevel] = useState(1);
    const zoomOut = () => setZoomLevel(prev => Math.max(prev - 0.1, 0.5));
    const zoomIn = () => setZoomLevel(prev => Math.min(prev + 0.1, 2));

    return (
        <div className="container overflow-x-hidden mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Dynamics - Forces</h1>

            <h2 className="text-2xl font-semibold mb-4">Fundamental Forces in Nature</h2>
            <div className="overflow-x-auto mb-8">
                <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Force</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Range (metre)</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Relative strength</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Function</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exchange Particles</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">Strong Force</td>
                            <td className="px-6 py-4 whitespace-nowrap">10⁻¹⁵ (diameter of proton)</td>
                            <td className="px-6 py-4 whitespace-nowrap">1</td>
                            <td className="px-6 py-4 whitespace-nowrap">Proton - Proton, Proton - Neutron</td>
                            <td className="px-6 py-4 whitespace-nowrap">Pions (Π) or others</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">Electromagnetic Force</td>
                            <td className="px-6 py-4 whitespace-nowrap">infinite</td>
                            <td className="px-6 py-4 whitespace-nowrap">7.3 x 10⁻³</td>
                            <td className="px-6 py-4 whitespace-nowrap">Proton - Electron</td>
                            <td className="px-6 py-4 whitespace-nowrap">Photons (massless)</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">Weak Force</td>
                            <td className="px-6 py-4 whitespace-nowrap">10⁻¹⁸</td>
                            <td className="px-6 py-4 whitespace-nowrap">10⁻¹³</td>
                            <td className="px-6 py-4 whitespace-nowrap">-</td>
                            <td className="px-6 py-4 whitespace-nowrap">W+, W-, Z0 (vector bosons)</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">Gravitational Force</td>
                            <td className="px-6 py-4 whitespace-nowrap">infinite</td>
                            <td className="px-6 py-4 whitespace-nowrap">6 x 10⁻³⁹</td>
                            <td className="px-6 py-4 whitespace-nowrap">Mass - Mass</td>
                            <td className="px-6 py-4 whitespace-nowrap">graviton (not yet detected)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

                <PlantUMLDiagram code={mindmapCode1} />
                <PlantUMLDiagram code={mindmapCode3} />
                <PlantUMLDiagram code={mindmapCode4} />
                <h1 className='text-2xl text-blue-500 font-bold'>Force Diagrams</h1>
                <PlantUMLDiagram code={mindmapCode5} />
                <h1 className='text-2xl text-blue-500 font-bold'>Concept of Net Force</h1>
                <PlantUMLDiagram code={`
                    @startmindmap
* Concept of Net Force
right side
** Net Force
*** Definition
**** Total effect of all forces acting on an object
*** Calculation
**** Sum of all forces acting on the object
*** Significance
**** Determines if forces are balanced or unbalanced
** Balanced Forces
*** Net Force = 0 N
*** No change in object's motion
*** Example
**** Tug of war with equal forces
** Unbalanced Forces
*** Net Force ≠ 0 N
*** Produces change in object's motion
*** Example
**** Tug of war with unequal forces
left side
** Free-Body Diagrams
*** Purpose
**** Study effects of forces on objects
*** Representation
**** Forces drawn as vectors
** Resultant (Net) Force
*** Definition
**** Vector sum of all forces
*** Alternative name
**** Net Force
*** Symbol
**** F
** Vector Addition of Forces
*** Like parallel forces
**** Add magnitudes
*** Unlike parallel forces
**** Subtract magnitudes
*** Non-parallel forces
**** Use head-to-tail rule on coordinate axis
@endmindmap`} />

        </div>
    );
};

export default DynamicsPage;