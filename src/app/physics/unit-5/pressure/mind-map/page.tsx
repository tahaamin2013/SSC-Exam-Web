import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MindmapFriction = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
        PRESSURE
        </h1>
        <PlantUMLDiagram
          code={`@startmindmap
* Pressure
** Definition
*** Force per unit area
*** P = F / A
** Units
*** Pascal (Pa)
*** 1 Pa = 1 N/m²
** Factors Affecting Pressure
*** Force applied
*** Area of application
** Examples
*** Balloon and pin
*** High-heeled vs flat shoes
*** Sharp vs blunt knife
left side
** Example Problem
*** Given
**** Mass = 50 kg
**** Area (two feet) = 400 cm² = 0.04 m²
*** Required
**** Pressure with both feet
**** Pressure with one foot
*** Solution Steps
**** Calculate weight
**** Apply pressure formula
**** Calculate for both feet
**** Calculate for one foot
*** Key Findings
**** Pressure doubles when area halves
** Practical Applications
*** Cutting tools
*** Footwear design
*** Safety considerations
@endmindmap`}
        />
      </section>
     
    </div>
  );
};

export default MindmapFriction;
