import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">Nature of Science in Chemistry</h1>
        <PlantUMLDiagram
          code={`
@startmindmap
*:DEFINITION OF CHEMISTRY AND
ITS INTERACTION WITH OTHER MATTER
AND ENERGY;
** Definition
*** Science studying materials of the universe
*** Studies changes materials undergo
** Understanding
*** Composition of matter and energy
*** Structure of matter and energy
*** Properties of matter and energy
*** Behavior of matter and energy
*** Changes in matter and energy
left side
** Applications
*** Explaining natural phenomena
*** Development of essential substances
*** Development of drugs
*** Development of technologies
** Green Chemistry
*** Model for chemical products and processes
*** Reduces use of hazardous substances
*** Helps understand pollution
*** Aids in reducing pollution
@endmindmap`}
        />
       
      </section>
    </div>
  );
};

export default MagneticMindmap;