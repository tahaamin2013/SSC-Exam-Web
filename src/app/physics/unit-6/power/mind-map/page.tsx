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
*[#LightBlue] POWER
**[#LightGreen] Definition
*** Time rate of work done
*** Rate of energy conversion
**[#LightYellow] Mathematical Formulas
*** P = W/t
*** P = E/t
**[#LightPink] Units
*** SI Unit: Watt (W)
**** 1 W = 1 J/s
*** Practical Unit: Horsepower (hp)
**** 1 hp = 746 W
*** Energy Unit: Kilowatt-hour (kWh)
**** 1 kWh = 3.6 × 10^6 J
**[#LightCyan] Applications
*** Light Bulbs
**** 100 W filament bulb
**** 40 W tube light
*** Electricity Bills
**** Measured in kWh
**[#LightSalmon] Example: Tesla Car Engine
*** Work: 3 × 10^6 J
*** Time: 1 minute
*** Power: 615 kW or 825 hp
@endmindmap`}
        />
      </section>
    </div>
  );
};

export default MindmapFriction;
