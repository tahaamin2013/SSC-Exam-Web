import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from 'next/image'

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">TYPES OF BONDS
        </h1>
        <PlantUMLDiagram
          code={`
@startmindmap
* 5.3 TYPES OF BONDS
** Ionic Bonds
*** Formed when one atom loses an electron to form a cation and the other gains an electron to form an anion.
*** Example 5.1: Formation of Cations
**** Na: Na (1s² 2s² 2p⁶ 3s¹) → Na⁺ (1s² 2s² 2p⁶)
**** Mg: Mg (1s² 2s² 2p⁶ 3s²) → Mg²⁺ (1s² 2s² 2p⁶)
*** Concept Assessment Exercise 5.1
**** Cations formation for Li (atomic no. 3) and Al (atomic no. 13)
**** Electron dot structures for K and Ca.
*** Example 5.2: Formation of Anions
**** O (1s² 2s² 2p⁴) + 2e⁻ → O²⁻ (1s² 2s² 2p⁶)
**** F (1s² 2s² 2p⁵) + e⁻ → F⁻ (1s² 2s² 2p⁶)
*** Concept Assessment Exercise 5.2
**** Anions formation for S (atomic No. 16) and Cl (atomic No. 17)
**** Electron dot structures for N, P, Br, H.
*** Ionic Bond Characteristics
**** Opposite charges attract (Anions and Cations).
**** Strong electrostatic attraction forms ionic bonds.
**** Ionic compounds are electrically neutral.
*** Example 5.3: Representing Ionic Bond Formation
**** Na + Cl → NaCl (Sodium Chloride)
**** Mg + F₂ → MgF₂ (Magnesium Fluoride)
*** Concept Assessment Exercise 5.3
**** Ionic compounds formation for K & Br, Al & O, Li & S.
**** Writing formulae for Calcium & Fluoride, Lithium & Chloride, Potassium & Oxide.
** Covalent Bonds
@endmindmap
`}
        />

      </section>
       
    </div>
  );
};

export default MagneticMindmap;