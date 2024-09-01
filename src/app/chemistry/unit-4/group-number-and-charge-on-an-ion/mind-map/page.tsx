import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from 'next/image'

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">Periodicity of Properties
       
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

* Periodicity of Properties
** Shielding Effect
*** Definition
**** Reduction in attraction between nucleus and valence electrons
*** Trends
**** Constant across a period
**** Increases down a group
*** Examples
**** Mg > Be
**** Si > C
** Atomic Size
*** Definition
**** Average distance between nucleus and outer shell
*** Trends
**** Decreases across a period
**** Increases down a group
*** Examples
**** Mg > Al
**** Si > C
** Ionization Energy
*** Definition
**** Energy to remove outermost electron
*** Trends
**** Increases across a period
**** Decreases down a group
*** Examples
**** B < C
**** P < N
** Electron Affinity
*** Definition
**** Energy change when atom accepts an electron
*** Trends
**** Increases across a period
**** Decreases down a group
*** Examples
**** Cl > Br
**** F > Cl
** Electronegativity
*** Definition
**** Tendency to attract bonding electrons
*** Trends
**** Increases across a period
**** Decreases down a group
*** Examples
**** F > Cl
**** O > N
@endmindmap`}
        />
      </section>
      <div className="bg-gradient-to-r from-green-100 to-yellow-100 p-10 font-sans">
    <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-[2rem]">
        <h1 className="text-4xl font-bold text-center text-black mb-8">Group Number and Charge on an Ion</h1>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">General Principles</h2>
            <p className="text-lg text-gray-700 mb-4">Group number relates to the number of valence electrons:</p>
            <ul className="list-disc pl-5 text-lg text-gray-700">
                <li>s-block: Group number = number of valence electrons</li>
                <li>p-block: Number of valence electrons = Group number - 10</li>
                <li>Elements tend to achieve stable electron configurations (like noble gases)</li>
            </ul>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Ion Formation Trends</h2>
            <ul className="list-disc pl-5 text-lg text-gray-700">
                <li>1-3 valence electrons: Tend to lose electrons, form +1, +2, +3 ions</li>
                <li>5-7 valence electrons: Tend to gain electrons, form -3, -2, -1 ions</li>
                <li>4 valence electrons: Can form +4 or -4 ions</li>
            </ul>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Group 1 (Alkali Metals)</h2>
            <ul className="list-disc pl-5 text-lg text-gray-700">
                <li>One valence electron</li>
                <li>Form +1 ions (monovalent cations)</li>
                <li>Examples: Li<sup>+</sup>, Na<sup>+</sup>, K<sup>+</sup></li>
            </ul>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Group 2 (Alkaline Earth Metals)</h2>
            <ul className="list-disc pl-5 text-lg text-gray-700">
                <li>Two valence electrons</li>
                <li>Form +2 ions (divalent cations)</li>
                <li>Examples: Be<sup>2+</sup>, Mg<sup>2+</sup>, Ca<sup>2+</sup></li>
            </ul>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Group 17 (Halogens)</h2>
            <ul className="list-disc pl-5 text-lg text-gray-700">
                <li>Seven valence electrons</li>
                <li>Gain one electron to form -1 ions (monovalent anions)</li>
                <li>Examples: F<sup>-</sup>, Cl<sup>-</sup>, Br<sup>-</sup></li>
            </ul>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Group 16 (Chalcogens)</h2>
            <ul className="list-disc pl-5 text-lg text-gray-700">
                <li>Six valence electrons</li>
                <li>Gain two electrons to form -2 ions (divalent anions)</li>
                <li>Examples: O<sup>2-</sup>, S<sup>2-</sup></li>
            </ul>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Group 18 (Noble Gases)</h2>
            <p className="text-lg text-gray-700">Full valence electron shells (except He). Chemically stable, do not typically form ions.</p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Determining Element Position from Electronic Configuration</h2>
            <ul className="list-disc pl-5 text-lg text-gray-700">
                <li>Write electronic configuration</li>
                <li>Identify valence shell configuration</li>
                <li>Period number: Coefficient of s or p sub-shell</li>
                <li>Group number: Total electrons in valence shell (+ 10 for p-block)</li>
            </ul>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Example</h2>
            <p className="text-lg text-gray-700 mb-4">
                Nitrogen (N): 1s² 2s² 2p³<br />
                Period: 2, Group: 15 (5 + 10)
            </p>
            <p className="text-lg text-gray-700">
                Oxygen (O): 1s² 2s² 2p⁴<br />
                Period: 2, Group: 16 (6 + 10)
            </p>
        </section>

        <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Practice Exercise</h2>
            <p className="text-lg text-gray-700">Obtain valence shell configuration of Al and S from their position in the periodic table.</p>
        </section>
    </div>
</div>
    </div>
  );
};

export default MagneticMindmap;