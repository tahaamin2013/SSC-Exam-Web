import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">ELEMENTS, COMPOUNDS AND MIXTURES</h1>
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
* Matter Classification
** Pure Substance
*** Element
**** Simplest form of matter
**** Made up of same type of atoms
**** Same atomic number (proton number)
**** Cannot be broken down chemically
*** Compound
**** Formed when two or more different atoms chemically combine
**** New substance with different properties
** Mixture
*** Homogeneous
*** Heterogeneous
**** Colloid
**** Suspension
*** Physical combination of substances
*** Particles have different chemical compositions
*** Example: Tea (milk, water, tea leaves, sugar)
left side
** Properties of Matter
*** Physical Properties
*** Chemical Properties
** Changes in Matter
*** Physical Change
**** Alters physical properties
*** Chemical Change
**** Forms a new substance
@endmindmap`}
        />
       
      </section>
    </div>
  );
};

export default MagneticMindmap;