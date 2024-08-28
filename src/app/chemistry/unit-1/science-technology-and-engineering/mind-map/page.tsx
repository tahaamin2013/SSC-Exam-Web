import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">Science, Technology, and Engineering</h1>
        <PlantUMLDiagram
          code={`
@startmindmap
<style>
mindmapDiagram {
    node {
        BackgroundColor lightBlue
    }
    :depth(1) {
      BackgroundColor lightGreen
    }
    :depth(2) {
      BackgroundColor lightYellow
    }
}
</style>
* Science, Technology, and Engineering
** Science
*** Definition
**** Systematic process of constructing knowledge
**** Organizing knowledge about the universe
*** Purpose
**** Understand the natural world
*** Example in Chemistry
**** Study of material behavior and properties
**** Understanding chemical reactions
**** Exploring fundamental principles of matter
** Technology
*** Definition
**** Application of scientific knowledge
**** Creation of practical tools and techniques
*** Role in Chemistry
**** Provides tools and machines for research
**** Improves product quality
**** Enhances efficiency in analysis and identification
**** Benefits pharmaceutical and chemical industries
** Engineering
*** Definition
**** Application of science and math
**** Design and construction of systems and tools
*** Chemical Engineering
**** Development of manufacturing processes
**** Production of various products
***** Chemicals
***** Fuels
***** Food
***** Medicines
***** Polymers
***** Detergents
***** Paper
**** Goals
***** Maximize productivity
***** Improve product quality
@endmindmap`}
        />
       
      </section>
    </div>
  );
};

export default MagneticMindmap;