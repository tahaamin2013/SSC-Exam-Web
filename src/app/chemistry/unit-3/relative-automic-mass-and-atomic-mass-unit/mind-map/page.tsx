import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">Relative Atomic Mass and Atomic Mass Unit
        </h1> 
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
    :depth(3) {
      BackgroundColor lightPink
    }
}
</style>
* Relative Atomic Mass and Atomic Mass Unit
** Historical Context
*** Early chemists' calculations
**** Based on element combinations in compounds
**** Dalton, Gay Lussac, Lavoisier, Avogadro, Berzelius
** Atomic Mass Measurement
*** Cannot be measured directly
*** Determined relative to a standard
** Standard: Carbon-12 Isotope
*** Chosen in 1961
*** Assigned value: 12 atomic mass units (amu)
** Atomic Mass Unit (amu)
*** Definition: 1/12 mass of carbon-12 atom
** Relative Atomic Mass
*** Mass compared to carbon-12 standard
*** Expressed in atomic mass units (amu)
** Examples
*** Hydrogen: ~1.008 amu
*** Oxygen: 15.9994 amu
*** Sodium: 22.9898 amu
*** Aluminum: 26.9815 amu
@endmindmap`}
        />
       
      </section>
       
    </div>
  );
};

export default MagneticMindmap;