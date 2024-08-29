import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">Cations and Anions
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
* Cations and Anions
** Cations
*** Definition
**** Positively charged ions
**** Formed when atom loses electrons
*** Characteristics
**** Usually from metal atoms
**** Achieve noble gas configuration
**** More protons than electrons
*** Examples
**** Na+ formation
**** Mg2+ formation
** Anions
*** Definition
**** Negatively charged ions
**** Formed when atom gains electrons
*** Characteristics
**** Usually from non-metal atoms
**** High electron affinity
**** More electrons than protons
*** Examples
**** O2- formation
**** F- formation
** Formation Process
*** Cations
**** Lose valence electrons
**** Electronic configuration changes
*** Anions
**** Gain electrons to complete octet
**** Electronic configuration changes
** Representation Methods
*** Complete electronic configuration
*** Electron dot structure
** Concept Assessment Exercises
*** Cation formation (Li, Al)
*** Anion formation (S, Cl)
@endmindmap`}
        />
       
      </section>
       
    </div>
  );
};

export default MagneticMindmap;