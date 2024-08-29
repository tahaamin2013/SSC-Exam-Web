import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from 'next/image'

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">Halogens
        </h1>
        <PlantUMLDiagram
          code={`
@startmindmap
<style>
mindmapDiagram {
    node {
        BackgroundColor lightGreen
        BorderColor darkGreen
        FontColor black
    }
    :depth(1) {
      BackgroundColor lightBlue
    }
    :depth(2) {
      BackgroundColor lightYellow
    }
    :depth(3) {
      BackgroundColor lightPink
    }
    :depth(4) {
      BackgroundColor lightGray
    }
}
</style>
* Periodic Table Elements
** Lanthanides & Actinides
*** Lanthanides
**** Also known as "rare earth elements"
**** Series of 14 elements
**** Atomic numbers 57 to 71
*** Actinides
**** Series of 14 elements
**** Atomic numbers 89 to 103
** Halogens (Group 17)
*** General Characteristics
**** Reactive non-metals
**** Exist as diatomic molecules
**** Electronic configuration: ns²np⁵
*** Appearance
**** Fluorine (F₂): Pale yellow gas
**** Chlorine (Cl₂): Yellow-green gas
**** Bromine (Br₂): Red-brown liquid
**** Iodine (I₂): Grey-black solid, purple vapor
*** Density
**** Increases down the group
**** Fluorine: 0.0017 g/cm³
**** Chlorine: 0.0032 g/cm³
**** Bromine: 3.1028 g/cm³
**** Iodine: 4.933 g/cm³
*** Reactivity
**** Decreases down the group
**** Order: F₂ ≥ Cl₂ ≥ Br₂ ≥ I₂
**** Related to electron gain tendency
*** Displacement Reactions
**** F₂ can displace all other halides
**** Cl₂ can displace Br⁻ and I⁻
**** I₂ cannot displace any halide
*** Hydrogen Halides
**** General formula: HX (X = F, Cl, Br, I)
**** Thermal stability: HF ≥ HCl ≥ HBr ≥ HI
**** Formation: H₂ + X₂ → 2HX
@endmindmap`}
        />

      </section>
       
    </div>
  );
};

export default MagneticMindmap;