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
*** Newton&apos;sSecond Law
right side
** Impulse (J)
*** Definition: J = F x Δt
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
            <tr><td className="px-6 py-4 whitespace-nowrap">Impulse</td><td className="px-6 py-4 whitespace-nowrap">J = F x Δt</td></tr>
            <tr><td className="px-6 py-4 whitespace-nowrap">Conservation of Momentum</td><td className="px-6 py-4 whitespace-nowrap">p_initial = p_final</td></tr>
            <tr><td className="px-6 py-4 whitespace-nowrap">Recoil Velocity</td><td className="px-6 py-4 whitespace-nowrap">V = - (m x v) / M</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Momentum and Impulse Concepts</h2>
      <div className="transition-transform duration-300">
        <PlantUMLDiagram code={mindmapCode} />
      </div>

      <h2 className="text-2xl font-bold text-blue-500 mb-4">Mementum</h2>
        <PlantUMLDiagram code={`
          @startmindmap
* Momentum
** Definition
*** Product of mass 'm' and velocity 'v'
**** p = mv
** Properties
*** Vector quantity
*** Direction: Same as velocity
*** SI Unit: kg·m/s or Ns
** Newton&apos;sSecond Law
*** Relates force and momentum
** Example 3.4: Golf Ball Momentum
*** Given
**** Mass of ball 'm' = 45 g = 0.045 kg
**** Velocity of ball 'v' = 80 m/s
*** Required
**** Momentum of ball 'P'
*** Solution
**** Formula: p = mv
**** Magnitude: p = 0.045 kg x 80 m/s = 3.6 kg·m/s
*** Conclusion
**** Greater momentum needed to increase ball speed
@endmindmap
`} />
      <h2 className="text-2xl font-bold text-blue-500 mb-4">Force and Change in Momentum</h2>
        <PlantUMLDiagram code={`
          @startmindmap
* Momentum
** Definition
*** Product of mass 'm' and velocity 'v'
**** p = mv
** Properties
*** Vector quantity
*** Direction: Same as velocity
*** SI Unit: kg·m/s or Ns
** Newton&apos;sSecond Law
*** Relates force and momentum
** Force and Change in Momentum
*** Force 'F' produces acceleration 'a'
**** F = ma
*** Acceleration
**** a = Δv / Δt
*** Combining equations
**** F = m x Δv / Δt = Δp / Δt
*** Time rate of change of momentum
**** Equal to the net force acting on the body
**** Sudden change in momentum implies large force
**** Example: Catching a ball
***** Allowing hands to move with the ball reduces force and pain
** Example 3.4: Golf Ball Momentum
*** Given
**** Mass of ball 'm' = 45 g = 0.045 kg
**** Velocity of ball 'v' = 80 m/s
*** Required
**** Momentum of ball 'P'
*** Solution
**** Formula: p = mv
**** Magnitude: p = 0.045 kg x 80 m/s = 3.6 kg·m/s
*** Conclusion
**** Greater momentum needed to increase ball speed
** Example 3.5: Force Required to Stop a Truck and Car
*** Given
**** Mass of car m = 1200 kg
**** Mass of truck m₁ = 10,000 kg
**** Initial Velocity v₀ = 8 m/s
**** Change in time Δt = 5 s
**** Final Velocity v = 0 m/s
*** Required
**** (a) Average force required to stop car F
**** (b) Average force required to stop truck F₁
*** Solution
**** Car
***** F = (1200 kg x 0 m/s - 1200 kg x 8 m/s) / 5 s = -1920 N
***** Negative sign: Force opposite to motion
**** Truck
***** F₁ = (10,000 kg x 0 m/s - 10,000 kg x 8 m/s) / 5 s = -16,000 N
***** Negative sign: Force opposite to motion
@endmindmap
`} />
      <h2 className="text-2xl font-bold text-blue-500 mb-4">Impulse and Change in Momentum</h2>
        <PlantUMLDiagram code={`
         @startmindmap
* Momentum
** Definition
*** Product of mass 'm' and velocity 'v'
**** p = mv
** Properties
*** Vector quantity
*** Direction: Same as velocity
*** SI Unit: kg·m/s or Ns
** Newton&apos;sSecond Law
*** Relates force and momentum
** Force and Change in Momentum
*** Force 'F' produces acceleration 'a'
**** F = ma
*** Acceleration
**** a = Δv / Δt
*** Combining equations
**** F = m x Δv / Δt = Δp / Δt
*** Time rate of change of momentum
**** Equal to the net force acting on the body
**** Sudden change in momentum implies large force
**** Example: Catching a ball
***** Allowing hands to move with the ball reduces force and pain
** Impulse and Change in Momentum
*** Relation
**** F x Δt = Δp
*** Impulse
**** Product of force and time interval
**** Symbol: 'J'
**** Vector quantity
**** Direction: Same as force
**** SI Units: Same as momentum (kg·m/s or Ns)
*** Non-constant Forces
**** Net force may change non-linearly
**** Use average force for impulse calculation
*** Example: Hitting a Cricket Ball
**** Initial small force, increases, deforms ball, then drops
**** Impulse found by area under force-time curve
*** Impulse-Momentum Relationship
**** Analyze momentum before and after interaction
**** Useful for collisions and interactions
** Example 3.4: Golf Ball Momentum
*** Given
**** Mass of ball 'm' = 45 g = 0.045 kg
**** Velocity of ball 'v' = 80 m/s
*** Required
**** Momentum of ball 'P'
*** Solution
**** Formula: p = mv
**** Magnitude: p = 0.045 kg x 80 m/s = 3.6 kg·m/s
*** Conclusion
**** Greater momentum needed to increase ball speed
** Example 3.5: Force Required to Stop a Truck and Car
*** Given
**** Mass of car m = 1200 kg
**** Mass of truck m₁ = 10,000 kg
**** Initial Velocity v₀ = 8 m/s
**** Change in time Δt = 5 s
**** Final Velocity v = 0 m/s
*** Required
**** (a) Average force required to stop car F
**** (b) Average force required to stop truck F₁
*** Solution
**** Car
***** F = (1200 kg x 0 m/s - 1200 kg x 8 m/s) / 5 s = -1920 N
***** Negative sign: Force opposite to motion
**** Truck
***** F₁ = (10,000 kg x 0 m/s - 10,000 kg x 8 m/s) / 5 s = -16,000 N
***** Negative sign: Force opposite to motion
** Science Tidbits
*** System
**** Group of bodies or particles separated by a boundary
*** Isolated System
**** Net external force is zero
**** Bodies interact with each other but not with the environment
@endmindmap
`} />
      <h2 className="text-2xl font-bold text-blue-500 mb-4">Newton&apos;s Laws and Conservation of Momentum</h2>
        <PlantUMLDiagram code={`
         @startmindmap
* Momentum
** Definition
*** Product of mass 'm' and velocity 'v'
**** p = mv
** Properties
*** Vector quantity
*** Direction: Same as velocity
*** SI Unit: kg·m/s or Ns
** Newton&apos;sSecond Law
*** Relates force and momentum
** Force and Change in Momentum
*** Force 'F' produces acceleration 'a'
**** F = ma
*** Acceleration
**** a = Δv / Δt
*** Combining equations
**** F = m x Δv / Δt = Δp / Δt
*** Time rate of change of momentum
**** Equal to the net force acting on the body
**** Sudden change in momentum implies large force
**** Example: Catching a ball
***** Allowing hands to move with the ball reduces force and pain
** Impulse and Change in Momentum
*** Relation
**** F x Δt = Δp
*** Impulse
**** Product of force and time interval
**** Symbol: 'J'
**** Vector quantity
**** Direction: Same as force
**** SI Units: Same as momentum (kg·m/s or Ns)
*** Non-constant Forces
**** Net force may change non-linearly
**** Use average force for impulse calculation
*** Example: Hitting a Cricket Ball
**** Initial small force, increases, deforms ball, then drops
**** Impulse found by area under force-time curve
*** Impulse-Momentum Relationship
**** Analyze momentum before and after interaction
**** Useful for collisions and interactions
** Newton&apos;sLaws and Conservation of Momentum
*** Isolated System
**** No net force acting ('F = 0')
**** ΔP = 0
*** Conservation of Momentum
**** Momentum remains constant in an isolated system
**** Initial momentum 'P₀' = 0
**** Final momentum 'P' = 0
*** Example: Bullet and Gun
**** Before firing: Total initial momentum = 0
**** After firing:
***** Bullet moves with velocity 'v'
***** Gun recoils with velocity 'V'
**** Conservation of momentum:
***** mv + MV = 0
***** V = - (m x v) / M
**** Negative sign: Gun recoils opposite to bullet&apos;svelocity
**** Larger mass of gun results in smaller recoil velocity
*** Point to Ponder
**** Rockets in space accelerate by expelling hot gases
**** Momentum gained by gases equals the momentum gained by rocket
** Example 3.4: Golf Ball Momentum
*** Given
**** Mass of ball 'm' = 45 g = 0.045 kg
**** Velocity of ball 'v' = 80 m/s
*** Required
**** Momentum of ball 'P'
*** Solution
**** Formula: p = mv
**** Magnitude: p = 0.045 kg x 80 m/s = 3.6 kg·m/s
*** Conclusion
**** Greater momentum needed to increase ball speed
** Example 3.5: Force Required to Stop a Truck and Car
*** Given
**** Mass of car m = 1200 kg
**** Mass of truck m₁ = 10,000 kg
**** Initial Velocity v₀ = 8 m/s
**** Change in time Δt = 5 s
**** Final Velocity v = 0 m/s
*** Required
**** (a) Average force required to stop car F
**** (b) Average force required to stop truck F₁
*** Solution
**** Car
***** F = (1200 kg x 0 m/s - 1200 kg x 8 m/s) / 5 s = -1920 N
***** Negative sign: Force opposite to motion
**** Truck
***** F₁ = (10,000 kg x 0 m/s - 10,000 kg x 8 m/s) / 5 s = -16,000 N
***** Negative sign: Force opposite to motion
** Science Tidbits
*** System
**** Group of bodies or particles separated by a boundary
*** Isolated System
**** Net external force is zero
**** Bodies interact with each other but not with the environment
@endmindmap
`} />
    </div>
  );
};

export default MomentumImpulsePage;