import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from 'next/image'

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">Characteristic Properties
        </h1>
        <PlantUMLDiagram
          code={`
@startmindmap
*[#FFFF00] Periodicity and Characteristic Properties
**[#FF9933] Periodic Trends
***[#66CCFF] Shielding Effect
****_ Increases down a group
****_ Constant across a period
***[#66CCFF] Atomic Size
****_ Decreases across a period
****_ Increases down a group
***[#66CCFF] Ionization Energy
****_ Increases across a period
****_ Decreases down a group
***[#66CCFF] Electron Affinity
****_ Increases (magnitude) across a period
****_ Decreases down a group
***[#66CCFF] Electronegativity
****_ Increases across a period
****_ Decreases down a group
**[#99CC00] Characteristic Properties
***[#FF6666] Metallic Character
****_ Increases down a group
****_ Decreases across a period
***[#FF6666] Reactivity
****_ Generally increases down a group
****_ Varies across a period
***[#FF6666] Density
****_ Generally increases down a group
****_ Varies across a period
***[#FF6666] Alkali Metals (Group 1)
****_ Highly reactive
****_ Soft and low density
****_ Excellent conductors
****_ Low melting points
****_ React with water
***[#FF6666] Predicting Properties
****_ Based on group trends
****_ Electronic configuration
@endmindmap`}
        />

      </section>
       
    </div>
  );
};

export default MagneticMindmap;