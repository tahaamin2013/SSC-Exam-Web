import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from 'next/image'

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500"> WHY DO ATOMS REACT?
        </h1>
        <PlantUMLDiagram
          code={`
@startmindmap
* Why Do Atoms React?
** Periodic Table Groups
*** Group VIIIA (Noble Gases)
**** Characteristics
***** Stable and Chemically Inert
***** Exist in Atomic Form
***** General Electronic Configuration: ns2 np6
***** Helium Exception: 1s2
*** Noble Gases' Complete Valence Shell
**** Filled s and p Subshells
**** Complete Octet (8 Electrons in Valence Shell)
**** Inert Gases
** G. N. Lewis and Octet Rule (1916)
*** Octet Rule Explained
**** Atoms Are Most Stable with 8 Electrons in Valence Shell
**** Major Group Elements Follow Octet Rule
**** Chemical Behavior Prediction
*** Examples
**** Oxygen, Nitrogen, Halogens
**** Hydrogen, Helium, Lithium (Follow Duplet Rule)
*** Octet Rule in Action
**** Sodium (Na)
***** Unstable: 1s2, 2s2, 2p6, 3s1
***** Becomes Stable: 1s2, 2s2, 2p6 (Like Ne)
**** Chlorine (Cl)
***** Unstable: 1s2, 2s2, 2p6, 3s2, 3p5
***** Becomes Stable: 1s2, 2s2, 2p6, 3s2, 3p6 (Like Ar)
** Duplet Rule
*** Duplet Rule Explained
**** Atoms Acquire Two Electrons in Valence Shell
**** Achieve Electronic Configuration Like Helium
*** Examples
**** Lithium (Li)
***** Unstable: 1s2, 2s1
***** Becomes Stable: Li+ (1s2)
**** Beryllium (Be)
***** Unstable: 1s2, 2s2
***** Becomes Stable: Be2+ (1s2)
**** Elements Close to Helium
***** Tend to Achieve Two-Electron Configuration
@endmindmap


`}
        />

      </section>
       
    </div>
  );
};

export default MagneticMindmap;