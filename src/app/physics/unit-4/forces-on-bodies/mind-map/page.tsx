import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const ForcesonBodiesMindmap = () => {
  return (
    <div className="p-5">
      <section className="space-y-3">
        <h1 className="text-2xl font-bold text-blue-500">Forces on Bodies</h1>
        <PlantUMLDiagram
          code={`@startmindmap
*[#D0F0C0] Dynamics-II
**[#ADD8E6] In Dynamics I, we learnt about the force and Newton&apos;slaws of motion.
**[#FFD700] Dynamics II Concepts
***[#FFB6C1] Forces on Bodies
****[#87CEEB] Line of Action of Force
*****[#FF6347] Example: Moving Furniture
****[#4682B4] Parallel Forces
*****[#98FB98] Like Parallel Forces
******[#FFA07A] Example: Pushing a Cart
*****[#98FB98] Unlike Parallel Forces
******[#FFA07A] Example: Turning a Bike
**[#FF69B4] Effects of Force
***[#32CD32] Resistive Nature
***[#32CD32] Turning Effect
***[#32CD32] Ability to Rotate a Body in a Circle
**[#FFA500] Stability of Bodies
***[#8A2BE2] Role of Centre of Mass
***[#8A2BE2] Role of Centre of Gravity
@endmindmap
`}
        />
      </section>
    </div>
  );
};

export default ForcesonBodiesMindmap;
