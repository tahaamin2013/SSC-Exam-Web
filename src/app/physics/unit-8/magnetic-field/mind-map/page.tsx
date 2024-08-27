import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">MAGNETIC FIELD</h1>
        <PlantUMLDiagram
          code={`
   @startmindmap
*[#LightBlue] Magnetic Field
** Definition
***[#LightGreen] Region around magnet exerting force
** Characteristics
***[#Orange] Always bipolar (N-pole and S-pole)
***[#Orange] Intensity measured in tesla (T)
***[#Orange] Represented by field lines
left side
** Field Line Properties
***[#Yellow] Curved in general
***[#Yellow] Direction found by tangent
** Current-carrying Wire
***[#Pink] Concentric circles around wire
***[#Pink] Direction found by right-hand rule
@endmindmap`}
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-blue-500">Magnetic Field of a Bar Magnet</h1>
        <PlantUMLDiagram
          code={`
@startmindmap
*[#LightBlue] Magnetic Field of Bar Magnet
** Visualization Methods
***[#LightGreen] Compass needles
***[#LightGreen] Iron filings
** Field Line Pattern
***[#Orange] Originate from N-pole
***[#Orange] Terminate at S-pole
***[#Orange] Travel S-pole to N-pole inside magnet
** Demonstration
***[#Yellow] Figure 8.4: Compass needle pattern
***[#Yellow] Figure 8.5: Iron filings pattern
@endmindmap`}
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-blue-500">Direction of Magnetic Field at a Point</h1>
        <PlantUMLDiagram
          code={`
@startmindmap
*[#LightBlue] Direction of Magnetic Field
** Definition
***[#LightGreen] Map of magnetic force distribution
** Determination Method
***[#Orange] Place test north-pole at point
***[#Orange] Observe force on test pole
** Behavior
***[#Yellow] Repulsion from N-pole of material
***[#Yellow] Direction shown by test magnet movement
** Visualization
***[#Pink] Figure 8.6: Test magnet movement
@endmindmap`}
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-blue-500">Relative Strength of Magnetic Field</h1>
        <PlantUMLDiagram
          code={`
@startmindmap
*[#LightBlue] Relative Strength of Magnetic Field
** Definition
***[#LightGreen] Degree of closeness of field lines
** Field Strength Indicators
***[#Orange] Closer lines: Stronger field
***[#Orange] Farther lines: Weaker field
** Manipulation
***[#Yellow] Decrease: Place like poles close
***[#Yellow] Increase: Place unlike poles close
** Visualization
***[#Pink] Figure 8.7: Field strength due to pole arrangements
@endmindmap`}
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-blue-500">Magnetic Shielding</h1>
        <PlantUMLDiagram
          code={`
@startmindmap
*[#LightBlue] Magnetic Shielding
** Neutral Zone
***[#LightGreen] Field-free region
***[#LightGreen] Created by specific magnet arrangements
** Purpose
***[#Orange] Protect devices from external magnetic fields
** Shield Materials
***[#Yellow] Iron
***[#Yellow] Nickel
***[#Yellow] Cobalt
left side
** Shield Design
***[#Pink] Rounded corners
***[#Pink] Avoids 90° angles for field lines
** Applications
***[#Cyan] Power inverters
***[#Cyan] Magnetic immunity
***[#Cyan] Magnetic sensors
***[#Cyan] EMI protection
@endmindmap`}
        />
      </section>
    </div>
  );
};

export default MagneticMindmap;