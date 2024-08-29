import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from 'next/image'

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">Noble Gases
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
}
</style>
* Noble Gases
** Characteristics
*** Group 18 (VIII-A) elements
*** General electron configuration: ns²np⁶
**** Exception: Helium (1s²)
*** Properties
**** Odorless
**** Colorless
**** Monoatomic
**** Low reactivity
**** Complete valence shell
** Elements
*** Helium (He)
*** Neon (Ne)
*** Argon (Ar)
*** Krypton (Kr)
*** Xenon (Xe)
*** Radon (Rn)
*** Oganesson (Og)
** Applications
*** Lighting (e.g., neon signs)
*** Refrigeration systems
*** Welding
*** Filling gas exhaust lines
*** Shielding gas in industrial processes
** Electronic Configuration
*** Helium: 1s²
*** Neon: 1s² 2s² 2p⁶
*** Argon: [Ne] 3s² 3p⁶
*** Krypton: [Ar] 4s² 3d¹⁰ 4p⁶
*** Xenon: [Kr] 5s² 4d¹⁰ 5p⁶
*** Radon: [Xe] 6s² 4f¹⁴ 5d¹⁰ 6p⁶
*** Oganesson: [Rn] 7s² 5f¹⁴ 6d¹⁰ 7p⁶
@endmindmap`}
        />

      </section>
       
    </div>
  );
};

export default MagneticMindmap;