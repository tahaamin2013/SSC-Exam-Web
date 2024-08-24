import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MindmapFriction = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
        MANOMETER
        </h1>
        <PlantUMLDiagram
          code={`@startmindmap
* Manometer
** Definition
*** Device to measure fluid pressure
*** Works with gases and liquids
*** Used in laboratory experiments
** Formula
*** P = ρgh
**** P: Pressure of fluid
**** ρ: Density of fluid
**** g: Gravitational acceleration
**** h: Height of fluid column
** Working Principle
*** One end
**** Connected to seal-tight gas source
*** Other end
**** Open to atmospheric pressure
** Pressure Measurement
*** If pressure > 1 atm
**** Fluid forced down in one column
**** Equal rise in other column
** Applications
*** Laboratory experiments
**** Demonstrate air pressure on liquid
**** Demonstrate liquid pressure on air
left side
** Types (implied)
*** Open-end manometer
*** Closed-end manometer
** Advantages (implied)
*** Simple design
*** Easy to use
*** Visual pressure reading
@endmindmap`}
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
        APPLICATION OF MANOMETER
        </h1>
        <PlantUMLDiagram
          code={`@startmindmap
* Applications of Manometer
** Fluid Pressure Measurement
*** Uses mechanical properties of fluids
** Vacuum Measurement
** Fluid Flow Measurement
** Filter Pressure Drop Measurement
*** For fluids
** Meter Calibration
** Leak Testing
** Liquid Level Measurement
*** In tanks
left side
** Advantages (implied)
*** Versatile instrument
*** Used in various industries
*** Provides accurate measurements
** Industries (implied)
*** HVAC
*** Plumbing
*** Manufacturing
*** Chemical processing
@endmindmap`}
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
        DIFFERENCE BETWEEN MANOMETER AND BAROMETER
        </h1>
        <PlantUMLDiagram
          code={`@startmindmap
* Comparison: Manometer vs Barometer
** Manometer
*** Purpose
**** Measures fluid pressure
**** Relative to atmospheric pressure
*** Forms
**** Comes in different forms
*** Filling Material
**** Mercury
**** Heavy liquid material
**** Sometimes lighter liquid material
left side
** Barometer
*** Purpose
**** Measures air pressure
**** Accounts for altitude differences
*** Design
**** One basic design for all types
*** Filling Material
**** Only mercury or heavy liquid material
** Common Features (implied)
*** Both measure pressure
*** Both use liquid columns
*** Both rely on atmospheric pressure
@endmindmap`}
        />
      </section>
     
    </div>
  );
};

export default MindmapFriction;
