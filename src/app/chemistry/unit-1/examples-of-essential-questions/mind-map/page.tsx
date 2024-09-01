import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">Essential Questions in Chemistry Branches</h1>
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
* Essential Questions in Chemistry Branches
** Physical Chemistry
*** Atomic structure and chemical behavior
*** Formation and function of chemical bonds
** Organic Chemistry
*** Carbon as backbone of organic compounds
*** Functional groups and their effects
** Inorganic Chemistry
*** Distinction from organic compounds
*** Organization of elements in Periodic Table
** Analytical Chemistry
*** Methods for identifying and quantifying substances
** Biochemistry
*** Role of biomolecules in living organisms
left side
** Environmental Chemistry
*** Human activities and air pollution
*** Greenhouse gases and climate change
** Medicinal Chemistry
*** Drug design and development
** Polymer Chemistry
*** Structure and properties of polymers
** Geochemistry
*** Element distribution in Earth&apos;scrust
** Nuclear Chemistry
*** Nuclear vs chemical reactions
*** Applications of radioisotopes
** Astrochemistry
*** Reactions in astronomical environments
@endmindmap`}
        />
       
      </section>
    </div>
  );
};

export default MagneticMindmap;