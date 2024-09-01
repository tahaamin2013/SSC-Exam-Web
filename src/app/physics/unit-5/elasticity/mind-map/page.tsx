import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MindmapFriction = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
          PRESSURE AND DEFORMATION IN SOLIDS
        </h1>
        <PlantUMLDiagram
          code={`@startmindmap
                    * Pressure and Deformation in Solids
                      ** Matter Composition
                        *** Atoms
                        *** Molecules
                      ** External Forces
                        *** Weight
                        *** Pressure
                        *** Heat
                      ** Effects on Matter
                        *** Shape change
                        *** Dimension change
                        *** Americacion change
                      left side
                      ** Solid Matter
                        *** Tightly packed atoms/molecules
                        *** Small intermolecular spaces
                        *** Retains original shape
                        *** Returns to equilibrium after force removal
                      ** Liquids and Gases
                        *** Loosely packed atoms/molecules
                        *** Larger intermolecular spaces
                        *** Deforms with less force
                        *** Doesn't retain equilibrium without external force
                      ** Examples
                        *** Stretched rubber band
                        *** Bent metal rod
                        *** Shattered glass
                      @endmindmap`}
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-blue-500">5.1 ELASTICITY</h1>
        <PlantUMLDiagram
          code={`@startmindmap
* Elasticity vs Inelasticity
left side
** Elastic
*** Returns to original shape
*** Definition
**** Ability to return to original shape and size
**** Occurs when deforming forces are removed
*** Examples of Elastic Behavior
**** Stretched spring
**** Tennis ball after impact
**** Archer&apos;sbow
*** Elastic Limit
**** Maximum deformation before losing elasticity
**** Beyond this limit
***** Material won't return to original dimensions
** Inelastic
*** Remains deformed
*** Inelastic Materials
**** Definition: Don't return to original shape
**** Examples
***** Plasticine
***** Clay
***** Dough
right side
** Spring Chair Example
*** Given Information
**** Mass (m) = 50 kg
**** Spring compression (x) = 10 cm = 0.1 m
*** Required
**** Spring constant (k)
*** Solution Steps
**** Calculate Force (F)
***** F = mg
***** F = 50 kg * 9.8 m/s²
***** F = 490 N
**** Apply Hooke&apos;sLaw
***** k = F / x
***** k = 490 N / 0.1 m
*** Answer
**** Spring constant (k) = 4,900 N/m
*** Key Concepts
**** Weight calculation
**** Hooke&apos;sLaw application
**** Unit conversion
@endmindmap`}
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-blue-500">5.1.1 HOOKE&apos;S LAW</h1>
        <PlantUMLDiagram
          code={`@startmindmap
* Hooke&apos;sLaw
** Definition
*** Relationship between force and extension/compression
*** Applies within elastic limit
** Formula
*** F = k x X
**** F: Restoring force
**** k: Spring constant
**** x: Extension or compression
** Spring Constant (k)
*** Units: N/m
*** Ratio of restoring force to extension
left side
** Graphical Representation
*** Straight line through origin
*** Slope represents spring constant
** Limit of Proportionality
*** Point where Hooke&apos;sLaw no longer applies
*** Beyond this, relationship becomes non-linear
** Applications
*** Springs
*** Wires under tension
** Key Concepts
*** Direct proportionality
*** Elastic limits
*** Restoring force
@endmindmap`}
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-blue-500">5.1.2 APPLICATIONS OF HOOKE&apos;S LAW
        </h1> 
        <PlantUMLDiagram
          code={`@startmindmap
* Applications of Hooke&apos;sLaw
** Practical Applications
*** Balance Wheel
**** Used in mechanical watches
**** Components
***** Weighted wheel
***** Spiral torsion spring (hairspring)
***** Escapement
**** Function
***** Timekeeping
***** Oscillation controls watch hands
*** Spring Scale
**** Measures force or weight
**** Uses spring extension
**** Can have analog or digital gauge
*** Galvanometer
**** Detects current or voltage
**** Uses hairspring
**** Deflection proportional to force
left side
** Other Applications
*** Diving boards
*** Car suspension systems
*** Seismology
*** Acoustics
*** Molecular mechanics
*** Medical science
** Stress and Strain Curves
*** Measured by stress tester
**** Example: Rockwell hardness tester
*** Key Points on Curve
**** A: Limit of proportionality
**** B: Elastic limit (Yield strength)
**** C: Ultimate stress
**** D: Breaking point
*** Importance
**** Shows material behavior under stress
** Mini-Lab Question
*** Effect of multiple spring balances in series
@endmindmap`}
        />
      </section>
    </div>
  );
};

export default MindmapFriction;
