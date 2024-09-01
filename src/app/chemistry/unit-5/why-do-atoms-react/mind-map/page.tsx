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

      <div className="bg-gradient-to-r from-green-100 to-blue-100 p-10 font-sans">
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-[2rem]">
        <h1 className="text-4xl font-bold text-center text-black mb-8">Why Do Atoms React?</h1>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Noble Gases (Group VIIIA)</h2>
            <p className="text-lg text-gray-700">
                Noble gases are very stable and chemically inert. They have a general electronic configuration of <code>ns² np⁶</code> (except Helium: <code>1s²</code>) and completely filled valence shells, making them non-reactive in ordinary chemical reactions.
            </p>
        </section>

        <section className="mb-8">
            <h3 className="text-xl font-semibold text-black mb-4">Octet Rule (G. N. Lewis, 1916)</h3>
            <p className="text-lg text-gray-700">
                The octet rule states that an atom is most stable when its valence shell contains eight electrons. This rule applies to major group elements, involving s and p electrons. Examples include oxygen, nitrogen, and halogens.
            </p>
        </section>

        <section className="mb-8">
            <h3 className="text-xl font-semibold text-black mb-4">Duplet Rule</h3>
            <p className="text-lg text-gray-700">
                The duplet rule is the tendency of atoms to acquire two electrons in their outermost shell during bond formation, leading to a stable electronic configuration like helium. Examples include hydrogen, lithium, and beryllium.
            </p>
        </section>

        <section className="mb-8">
            <h3 className="text-xl font-semibold text-black mb-4">Atomic Stability and Reactivity</h3>
            <p className="text-lg text-gray-700">
                Unstable atoms with incomplete octets are reactive, while stable atoms with complete octets or duplets are less reactive. For example:
            </p>
            <ul className="list-disc pl-5 text-lg text-gray-700">
                <li>Na: 1s² 2s² 2p⁶ 3s¹ (unstable, reactive)</li>
                <li>Na⁺: 1s² 2s² 2p⁶ (stable, like Ne)</li>
                <li>Cl: 1s² 2s² 2p⁶ 3s² 3p⁵ (unstable, reactive)</li>
                <li>Cl⁻: 1s² 2s² 2p⁶ 3s² 3p⁶ (stable, like Ar)</li>
            </ul>
        </section>

        <section className="mb-8">
            <h3 className="text-xl font-semibold text-black mb-4">Exceptions to Octet Rule</h3>
            <p className="text-lg text-gray-700">
                Hydrogen, helium, and lithium follow the duplet rule. Their electrons lie in the s orbital, making them exceptions to the octet rule.
            </p>
        </section>

        <section>
            <h3 className="text-xl font-semibold text-black mb-4">Importance of Electronic Configuration</h3>
            <p className="text-lg text-gray-700">
                Electronic configuration determines the reactivity and stability of atoms and helps predict the chemical behavior of main group elements.
            </p>
        </section>
    </div>
</div>

    </div>
  );
};

export default MagneticMindmap;