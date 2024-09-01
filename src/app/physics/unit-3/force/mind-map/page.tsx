"use client";
import React, { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import Image from 'next/image'
import ForcesDiagram from "./Conceptofnetforce";

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
@endmindmap`;

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
**** Example: Earth&apos;sgravity on moon
*** Electrostatic Force
**** Between charged objects
**** Can be attractive or repulsive
**** Example: Nucleus and electron
*** Magnetic Force
**** Between magnetic poles
**** Can be attractive or repulsive
**** Example: Repulsion between two North poles
@endmindmap`;

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
`;

  const [zoomLevel, setZoomLevel] = useState(1);
  const zoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.1, 0.5));
  const zoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.1, 2));

  return (
    <div className="container overflow-x-hidden mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Dynamics - Forces</h1>

      <h2 className="text-2xl font-semibold mb-4">Force and Motion</h2>
      <p className="text-lg">
        <span className="font-bold">Question For You:</span> What causes an
        object to start moving, change speed, or alter its direction? Define
        Kinematics, Dynamics, Force. Give applications and example of force
      </p>
      <PlantUMLDiagram code={mindmapCode1} />
      <h2 className="text-2xl font-semibold mb-4">Types of Forces</h2>
      <p className="text-lg">
        <span className="font-bold">Question For You: </span>
        Describe Types of forces i.e. contact forces and non contact forces in
        detail
      </p>

      <PlantUMLDiagram code={mindmapCode3} />
      <PlantUMLDiagram
        code={`@startmindmap
* Contact Forces
** Contact Forces
*** Definition
**** The force acting between two objects in physical contact.
**** Example: Batter hitting a cricket ball.
** Normal Force
*** Definition
**** Force perpendicular to the contact surface.
**** Keeps objects from passing through each other.
*** Example
**** Book lying on a table.
*** Representation
**** F₁₁
** Thrust
*** Definition
**** Force that propels a flying machine in the direction of motion.
*** Example
**** Engine thrust in a car.
** Friction
*** Definition
**** Force that resists relative motion of surfaces, fluid layers, and material elements.
**** Acts opposite to the direction of motion or attempted motion.
*** Example
**** Air resistance between air and an object.
** Tension
*** Definition
**** Force exerted by two or more physical objects in contact through a string, rope, cable, or spring.
*** Example
**** Tension in a spider web.
** Elastic Forces
*** Definition
**** Forces that resist a change in an object&apos;sshape due to forces between material particles.
*** Example
**** Stretching of a spring or rubber band.
*** Note
**** Tension is elastic only during extension, not compression.
@endmindmap
`}
      />
  
  <PlantUMLDiagram code={`
    @startmindmap
* Non-Contact Forces
** Non-Contact Forces
*** Definition
**** Forces that act at a distance without physical contact between bodies.
**** Also termed as action at a distance force.
*** Example
**** Magnets exerting push or pull on other magnets at some distance.
** Gravitational Force
*** Definition
**** Attractive force between two objects with mass.
*** Example
**** The force experienced by the moon due to the Earth.
** Electrostatic Force
*** Definition
**** Attractive or repulsive force experienced by charged objects.
*** Example
**** The attractive force between a positively charged nucleus and a negatively charged electron.
** Magnetic Force
*** Definition
**** Attractive or repulsive force experienced between magnetic poles.
*** Example
**** The repulsive force between two North poles of magnets.
@endmindmap
`} />
  
      <p className="text-lg">
        <span className="font-bold">Question For You: </span>
        Write down categories of fundamental forces of nature <br />
        On what bases this classification is made? Write down Froce mediators or
        exchange particles
      </p>
      <PlantUMLDiagram
        code={`
      @startmindmap
* Fundamental Forces of Nature
right side
** 4 categories of classification
*** Gravitational Force
*** Electromagnetic Force
*** Strong Nuclear Force
*** Weak Nuclear Force
** Basis of classification
*** How objects interact with one another
left side
** Exchange Particles
*** Explain fundamental forces
*** Elementary particles
*** Less massive than a proton
*** Travel between objects
*** "Carry" the force
** Force Mediation
*** Each force is carried or mediated
*** by the exchange of a particle
@endmindmap`}
      />
      <h1 className="text-2xl font-bold text-blue-500">Strong Nuclear Force</h1>
      <p className="text-lg">
        <span className="font-bold">Question For You: </span>
        Write a short note on strong nuclear force.
      </p>
      <PlantUMLDiagram
        code={`@startmindmap
* Strong Nuclear Force
** Strength
*** Strongest of all fundamental forces
** Function
*** Keeps positively charged protons
*** Tightly packed in nucleus
*** Overcomes repulsion between protons
left side
** Exchange Particles
*** Pions
*** Other heavy particles
** Range
*** Very short
*** Nearly equal to diameter of a proton
@endmindmap`}
      />
      <h1 className="text-2xl font-bold text-blue-500">
        Electromagnetic Force
      </h1>
      <p className="text-lg">
        <span className="font-bold">Question For You: </span>
        Write a short note on electromagnetic force.
      </p>
      <PlantUMLDiagram
        code={`@startmindmap
* Electromagnetic Force
** Nature/Function
*** Acts between electric charges
*** Includes electric and magnetic forces
** Interaction
*** Can exert attraction or repulsion
*** Forces tend to cancel out on average
*** Effect not always observed
left side
** Range
*** Effective range is infinite
*** Strength decreases rapidly with distance
** Exchange Particle/Mediation
*** Photon
**** Massless particle
** Related Forces
*** Normal force
*** Friction
*** Tension
**** Result from particle interactions on contact surfaces
**** Caused by electromagnetic force
@endmindmap`}
      />
      <h1 className="text-2xl font-bold text-blue-500">Gravitational Force</h1>
      <p className="text-lg">
        <span className="font-bold">Question For You: </span>
        Write a short note on gravitational force.
      </p>
      <PlantUMLDiagram
        code={`@startmindmap
* Gravitational Force
** Definition
*** Force of attraction between all objects in universe
** Characteristics
*** Weakest of four fundamental forces
*** Least relative strength
*** Noticeable with large mass objects
**** Stars
**** Planets
**** Moons
left side
** Functions
*** Holds objects together
*** Controls motions
**** Celestial bodies
**** Falling objects on Earth
** Theory
*** Exchange force
*** Mediating particle: Graviton
**** Massless
**** Allows infinite range
**** Not yet detected
** Range
*** Similar range to electromagnetic force
@endmindmap`}
      />
      <h1 className="text-2xl font-bold text-blue-500">Weak Nuclear Force</h1>
      <p className="text-lg">
        <span className="font-bold">Question For You: </span>
        Write a short note on weak nuclear force.
      </p>
      <PlantUMLDiagram
        code={`@startmindmap
* Weak Nuclear Force
** Strength
*** Very weak
*** 10,000 times weaker than strong nuclear force
** Range
*** Shortest range of fundamental forces
** Importance
*** Plays major role in universe structure
left side
** Mechanism
*** Exchange force
*** Mediated by vector bosons
**** Three different types
** Function
*** Responsible for radioactive decay
** Particle Interaction
*** Changes flavor (type) of quarks
*** Neutron transformation
**** Neutron in nucleus becomes proton
@endmindmap`}
      />
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Force
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Range (metre)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Relative strength
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Function
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Exchange Particles
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Strong Force</td>
              <td className="px-6 py-4 whitespace-nowrap">
                10⁻¹⁵ (diameter of proton)
              </td>
              <td className="px-6 py-4 whitespace-nowrap">1</td>
              <td className="px-6 py-4 whitespace-nowrap">
                Binds protons and neutrons in nuclei <br /> Strongest of all
                forces
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                Pions (Π) or others
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                Electromagnetic Force
              </td>
              <td className="px-6 py-4 whitespace-nowrap">infinite</td>
              <td className="px-6 py-4 whitespace-nowrap">7.3 x 10⁻³</td>
              <td className="px-6 py-4 whitespace-nowrap">
                Acts between charged particles <br /> Can be attractive or
                repulsive
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                Photons (massless)
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Weak Force</td>
              <td className="px-6 py-4 whitespace-nowrap">
                10<sup>-17</sup>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                10<sup>-5</sup>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                Responsible for radioactive decay <br /> Short-range force
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                W+, W-, Z<sub>0</sub> (vector bosons)
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                Gravitational Force
              </td>
              <td className="px-6 py-4 whitespace-nowrap">infinite</td>
              <td className="px-6 py-4 whitespace-nowrap">6 x 10⁻³⁹</td>
              <td className="px-6 py-4 whitespace-nowrap">
                Attractive force between masses <br /> Long-range force
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                graviton (not yet detected)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-lg">
        <span className="font-bold">Question For You: </span>
        Write a short note on unification of forces.
      </p>
      <PlantUMLDiagram
        code={`
        @startmindmap
* Unification of Forces
** Goal
*** Show four basic forces as manifestations of one fundamental force
** Most Successful Attempt
*** Electroweak Theory
**** Proposed late 1960s
**** Physicists involved
***** Abdus Salam (Pakistani)
***** Steven Weinberg
***** Sheldon Lee Glashow
** Electroweak Theory Details
*** Incorporates quantum electrodynamics
**** Quantum field theory of electromagnetism
*** Unifies electromagnetic and weak forces
**** Treated as aspects of more-basic electroweak force
*** Transmission
**** Four carrier particles (gauge bosons)
***** Photon
****** Associated with electromagnetism
****** Massless
***** W+ particle
****** Electrically charged
****** Massive
***** W- particle
****** Electrically charged
****** Massive
***** Z particle
****** Electrically neutral
****** Massive
*** Implications
**** Mass of weak gauge bosons
***** Limits effective range of weak force
@endmindmap`}
      />
      <h1 className="text-2xl text-blue-500 font-bold">Force Diagrams</h1>
      <p className="text-lg">
        <span className="font-bold">Question For You: </span>
        Write a short note on concept of force diagram.
      </p>
      <PlantUMLDiagram code={mindmapCode5} />
      <h1 className="text-2xl text-blue-500 font-bold">Concept of Net Force</h1>
     
          <ForcesDiagram />

      <p className="text-lg">
        <span className="font-bold">Question For You: </span>
        Write a short note on concept of net forces in detail.
      </p>
      <PlantUMLDiagram
        code={`
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
*** No change in object&apos;smotion
*** Example
**** Tug of war with equal forces
** Unbalanced Forces
*** Net Force ≠ 0 N
*** Produces change in object&apos;smotion
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
@endmindmap`}
      />
    </div>
  );
};

export default DynamicsPage;
