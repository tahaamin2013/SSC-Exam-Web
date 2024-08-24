import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MindmapFriction = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
        LIQUID PRESSURE
        </h1>
        <PlantUMLDiagram
          code={`@startmindmap
* Liquid Pressure
** Principles
*** Pressure due to liquid weight
*** Increases with depth
** Derivation
*** Consider liquid column
**** Height 'h'
**** Base area 'A'
**** Density 'ρ'
*** Force equation
**** F = W = mg
*** Mass calculation
**** m = ρV
**** V = Ah
*** Final equation
**** P = ρgh
left side
** Factors affecting liquid pressure
*** Depth (h)
*** Density of liquid (ρ)
*** Gravitational acceleration (g)
** Example: Submarine Depth
*** Given
**** Depth: 8.5 km
**** Water density: 1000 kg/m³
**** g = 9.8 m/s²
*** Calculation
**** P = ρgh
**** P = 8.33 x 10⁷ Pa
*** Result
**** Pressure on submarine: 83.3 MPa
** Applications
*** Submarine design
*** Underwater structures
*** Hydraulic systems
@endmindmap`}
        />
      </section>
    </div>
  );
};

export default MindmapFriction;
