import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from 'next/image'

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">comparison-of-general-physical-properties-of-metals-and-non-metals
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
* Metals vs Non-Metals
** Thermal Conductivity
*** Metals: High
*** Non-Metals: Poor
** Electrical Conductivity
*** Metals: Good conductors
**** Free electrons
*** Non-Metals: Poor conductors
**** Exceptions (e.g., graphite)
** Adaptability
*** Metals
**** Malleable
**** Ductile
*** Non-Metals
**** Brittle
**** Neither malleable nor ductile
** Melting and Boiling Points
*** Metals
**** Generally high
**** Strong metallic bonds
*** Non-Metals
**** Often lower
**** Weaker bonds (covalent, van der Waals, hydrogen)
** Key Points
*** Periodic arrangement of elements
*** Periods: Horizontal rows
*** Groups: Vertical columns
*** s-block elements: Group IA and IIA
*** p-block elements: Group IIIA to VIIIA
*** Shielding effect
*** Atomic size trends
*** Ionization energy
*** Electron affinity
@endmindmap`}
        />

      </section>
       
    </div>
  );
};

export default MagneticMindmap;