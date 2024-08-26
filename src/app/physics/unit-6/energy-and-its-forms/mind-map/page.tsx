import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MindmapFriction = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
          ENERGY AND ITS FORMS
        </h1>
        <PlantUMLDiagram
          code={`@startmindmap
<style>
mindmapDiagram {
    node {
        BackgroundColor lightBlue
        BorderColor darkBlue
        FontColor black
    }
    arrow {
        LineColor darkBlue
    }
    :depth(1) {
      BackgroundColor lightGreen
    }
    :depth(2) {
      BackgroundColor lightYellow
    }
    :depth(3) {
      BackgroundColor lightPink
    }
}
</style>
* Energy
** Definition
*** Capacity of a body to do work
** Unit
*** Joule (J)
**** Same as work
**** J = Nm
** Energy Transfer Examples
*** Boy pushing toy car
*** Child sharpening pencil
*** Riding a bicycle
left side
** Forms of Energy
*** Chemical Energy
**** Energy in atomic bonds
**** Examples
***** Food carbohydrates
***** Gasoline
*** Electromagnetic Energy
**** Energy from light or EM waves
**** Example
***** Solar energy
*** Electrical Energy
**** Energy associated with charges
**** Example
***** Electron movement
*** Sonic Energy
**** Energy of sound waves
**** Example
***** Eardrum vibrations
*** Nuclear Energy
**** Energy from atomic nuclei changes
**** Example
***** Nuclear power stations
@endmindmap`}
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-blue-500">KINETIC ENERGY</h1>
        <PlantUMLDiagram
          code={`@startmindmap
<style>
mindmapDiagram {
    node {
        BackgroundColor lightBlue
        BorderColor darkBlue
        FontColor black
    }
    arrow {
        LineColor darkBlue
    }
    :depth(1) {
      BackgroundColor lightGreen
    }
    :depth(2) {
      BackgroundColor lightYellow
    }
    :depth(3) {
      BackgroundColor lightPink
    }
}
</style>
* Kinetic Energy
** Definition
*** Energy due to motion
** Characteristics
*** Scalar quantity
*** Depends on mass and speed
** Examples
*** Moving bullet
*** Kicked football
*** Tennis ball vs football
** Calculation
*** Work done = Force × Displacement
*** Area under force-displacement graph
** Change in Kinetic Energy
*** E = (F)(d) = (ma)(vt)
*** Average speed: vave = (v₁ + v₂) / 2
** Formula
*** E = ½ mv²
** Example Problem
*** Cricket ball hit by Babar Azam
**** Given: m = 120g, E = 50J
**** Solution: v = √(2E / m) = 28.9 m/s
** Interesting Facts
*** Energy conversion in light bulbs
*** Comparison of football and cricket ball energies
@endmindmap`}
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-blue-500">POTENTIAL ENERGY</h1>
        <PlantUMLDiagram
          code={`@startmindmap
<style>
mindmapDiagram {
    node {
        BackgroundColor lightBlue
        BorderColor darkBlue
        FontColor black
    }
    arrow {
        LineColor darkBlue
    }
    :depth(1) {
      BackgroundColor lightGreen
    }
    :depth(2) {
      BackgroundColor lightYellow
    }
    :depth(3) {
      BackgroundColor lightPink
    }
}
</style>
* Potential Energy
** Definition
*** Energy due to position or configuration
** Types
*** Gravitational Potential Energy
**** Book on a shelf example
**** Can be converted to kinetic energy
*** Elastic Potential Energy
**** Stretched spring
**** Examples
***** Slingshot
***** Shock absorber
***** Winding spring in toys and watches
*** Chemical Potential Energy
**** Stored in food
**** Batteries
*** Electrical Potential Energy
**** Batteries
**** Capacitors
** Mathematical Expression
*** Ep = mgh
**** m = mass of the body
**** g = gravitational field strength (9.8 ms⁻²)
**** h = height above reference point
** Characteristics
*** Stored energy
*** Can be converted to other forms
** Examples of Energy Conversion
*** Book falling from shelf
*** Battery powering a device
@endmindmap`}
        />
      </section>
    </div>
  );
};

export default MindmapFriction;
