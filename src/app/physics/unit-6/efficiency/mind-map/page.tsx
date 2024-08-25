import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MindmapFriction = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
        EFFICIENCY  </h1>
        <PlantUMLDiagram
          code={`@startmindmap
*[#LightBlue] EFFICIENCY
**[#LightGreen] Definition
*** Ratio of useful output to input
*** η = Wout / Win
*** η = Eout / Ein
**[#LightYellow] Characteristics
*** No units (ratio)
*** Often expressed as percentage
*** Always less than 100% due to friction
**[#LightPink] Power Relation
*** Pout = η × Pin
**[#LightCyan] Importance
*** Optimal resource utilization
*** Minimizes energy wastage
**[#LightSalmon] Examples
*** Incandescent bulb: 5% efficient
*** Fluorescent lamp: 20% efficient
**[#Gold] Efficiency Table
*** Electric generator: 98%
*** Hydroelectric power plant: 95%
*** Automobile engine: 25%
*** Incandescent light: 5%
**[#Lavender] Example Problem
*** Petrol engine
*** Input: 400 J
*** Output: 120 J
*** Efficiency: 30%
@endmindmap`}
        />
      </section>
  
    </div>
  );
};

export default MindmapFriction;
