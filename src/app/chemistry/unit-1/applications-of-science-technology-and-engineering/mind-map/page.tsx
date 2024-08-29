import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">Applications of Science, Technology, and Engineering</h1>
        <PlantUMLDiagram
          code={`
@startmindmap
<style>
mindmapDiagram {
    node {
        BackgroundColor lightGreen
    }
    :depth(1) {
      BackgroundColor lightBlue
    }
    :depth(2) {
      BackgroundColor pink
    }
    :depth(3) {
      BackgroundColor lightyellow
    }
}
</style>
* Applications of Science, Technology, and Engineering
** Example 1.1: Investigating Rusting of Iron
*** Chemical reactions between iron, water, and oxygen
*** Experiments to understand factors influencing rust
*** Strategies to prevent rust
** Example 1.2: Harnessing Solar Energy
*** Scientific study of photovoltaic cells
*** Technology development of solar panels
*** Engineering of large-scale renewable energy systems
**** Electrical engineer: wiring and connections
**** Civil engineer: infrastructure design
** Example 1.3: Designing a Water Filtration System
*** Chemical engineers: contaminant removal processes
*** Mechanical engineers: physical component design
*** Filtration
*** Post-Treatment
** Example 1.4: Organic Chemistry In Action
*** Scientists study carbohydrates
*** Food technologists extract oil from seeds
*** Chemical engineers design oil production equipment
** Example 1.5: Plastic Bags
*** Scientists study monomers and polymers
*** Engineers and technicians create durable, flexible bags
** Key Points
*** Chemistry is the study of matter
*** Organic chemistry: carbon compounds
*** Inorganic chemistry: elements and compounds (except organic)
*** Industrial chemistry: large-scale production
*** Physical chemistry: laws and theories of matter structure and changes
*** Science: study of nature
*** Technology: application of science
@endmindmap`}
        />
       
      </section>
    </div>
  );
};

export default MagneticMindmap;