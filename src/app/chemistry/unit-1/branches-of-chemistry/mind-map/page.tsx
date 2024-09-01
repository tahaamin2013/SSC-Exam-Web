import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">Branches of Chemistry</h1>
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
}
</style>
* Branches of Chemistry
** Organic Chemistry
*** Deals with carbon-containing substances
*** Excludes carbonates, bicarbonates, oxides, carbides
** Inorganic Chemistry
*** Studies elements and compounds
*** Excludes organic compounds
** Physical Chemistry
*** Focuses on laws and theories
*** Understands structure and changes of matter
** Analytical Chemistry
*** Methods for determining composition
*** Instruments for analyzing properties
** Biochemistry
*** Studies changes in living organisms
** Environmental Chemistry
*** Examines pollutants and their effects
left side
** Industrial Chemistry
*** Large-scale production of chemicals
** Medicinal Chemistry
*** Drug-biological target interactions
*** Development of new medicines
** Polymer Chemistry
*** Studies polymers and polymerization
*** Examples: nylon, plastic, polyester
** Geochemistry
*** Chemical composition of Earth&apos;s crust
*** Studies rocks, minerals, soil, water, atmosphere
** Nuclear Chemistry
*** Changes in atomic nuclei
** Astrochemistry
*** Chemical processes in space
*** Studies stars, planets, comets, interstellar space
@endmindmap`}
        />
       
      </section>
    </div>
  );
};

export default MagneticMindmap;