import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MindmapFriction = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
        PASCAL&apos;S PRINCIPLE
        </h1>
        <PlantUMLDiagram
          code={`@startmindmap
* Pascal&apos;sPrinciple
** Definition
*** Pressure increase at one point
*** Transmitted equally throughout fluid
** Key Points
*** Applies to enclosed fluids
*** Pressure transmitted unchanged
*** Force acts perpendicular to surface
** Relationship
*** Pressure and Force
**** F = P x A
** Historical Context
*** Named after Blaise Pascal (1623-1662)
left side
** Principles
*** Uniform pressure distribution
*** Equal force distribution
*** Perpendicular force action
** Examples
*** Bicycle Tire Pumping
**** Force applied on pump
**** Pressure increases throughout tire
*** Balloon Inflation
**** Pressure spreads evenly
**** Force pushes outward perpendicular to surface
*** Underwater Diving
**** Pressure increases with depth
**** Force perpendicular to diver&apos;sbody
***** Affects ears
***** Requires specialized suits for deep-sea diving
** Implications
*** Hydraulic systems
*** Fluid dynamics
*** Engineering applications
@endmindmap`}
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
        HYDRAULIC LIFT
        </h1>
        <PlantUMLDiagram
          code={`@startmindmap
* Hydraulic Lift
** Components
*** Two cylinders
**** Cylinder 1: Area A₁
**** Cylinder 2: Area A₂
*** Connecting tube
*** Hydraulic fluid
*** Pistons in each cylinder
** Pascal&apos;sPrinciple Application
*** P₁ = P₂
** Pressure Equations
*** P₁ = F₁ / A₁
*** P₂ = F₂ / A₂
** Force Relationship
*** F₂ = F₁ * (A₂ / A₁)
** Key Concept
*** Force Magnification
**** Depends on area ratio (A₂/A₁)
** Example
*** If A₂ = 100 * A₁
**** F₂ = 100 * F₁
** Advantage
*** Small effort overcomes larger load
left side
** Applications (implied)
*** Car jacks
*** Elevators
*** Industrial machinery
** Principles
*** Incompressible fluid
*** Enclosed system
*** Pressure transmission
@endmindmap`}
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
        HYDRAULIC CAR BRAKE SYSTEM

        </h1>
        <PlantUMLDiagram
          code={`@startmindmap
* Hydraulic Car Brake System
** Components
*** Brake Pedal
**** Force Input
*** Master Cylinder
**** Pressure Increase
*** Brake Lines
**** Pressure Transmission
*** Brake Calipers/Wheel Cylinders
**** Force Application to Brake Pads
** Operation (Pascal&apos;sPrinciple)
*** 1. Pedal Press
*** 2. Master Cylinder Pressure Increase
*** 3. Equal Pressure Transmission
*** 4. Force Application at Wheels
left side
** Example: Pascal&apos;sPrinciple
*** Given
**** Narrow cylinder area: 0.002 m²
**** Wider cylinder area: 0.9 m²
**** Car mass: 1800 kg
*** Calculation
**** Car weight: 17,640 N
**** Force ratio: F₁/A₁ = F₂/A₂
*** Result
**** Required force (F₁): 39.2 N
*** Conclusion
**** Small force lifts large weight
@endmindmap`}
        />
      </section>
     
    </div>
  );
};

export default MindmapFriction;
