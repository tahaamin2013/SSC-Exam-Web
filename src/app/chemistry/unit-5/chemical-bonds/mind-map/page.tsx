import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from 'next/image'

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">CHEMICAL BONDING
        </h1>
        <PlantUMLDiagram
          code={`
@startmindmap
* UNIT 05: CHEMICAL BONDING
** Properties of Compounds
*** Explained in terms of bonding and structure
*** Strength and Conductivity
**** Determined by the type of chemical bond
*** Forces of Attraction
**** Impact on melting and boiling points
*** Conduction of Electricity
**** Availability of free charged particles
**** Ionic compounds (solid and molten)
**** Covalent compounds
**** Metallic bonds
*** Ionization in Water
**** Example: Acids dissolving in water
** Industrial Usage of Materials
*** Graphite
**** Lubricant
**** Electrode
*** Diamond
**** Cutting tools
*** Metals
**** Wires
**** Sheets
** Drawing Structures of Compounds
*** Ionic Bonds in Binary Compounds
**** NaBr, NaF, CaCl2
*** Simple Molecules
**** H2, Cl2, O2, N2, H2O, CH4, NH3, HCl, CH3OH, C2H4, CO2, HCN
** INTRODUCTION
*** Matter Composition
**** Compounds and mixtures
**** Example: Human, animal, plant bodies, rocks, soil, petroleum
*** Bonding of Atoms
**** Impact on properties of substances
*** Understanding Bonding
**** Key to understanding substance behavior
** 5.1 WHY DO ATOMS REACT?
*** Noble Gases
**** Stable and chemically inert
**** General electronic configuration
*** Octet Rule
**** Atoms are most stable with 8 electrons in valence shell
**** Example: Na, Cl
*** Duplet Rule
**** Tendency to acquire 2 electronic configurations
**** Example: Li, Be
@endmindmap
`}
        />

      </section>
       
      <div class="bg-gradient-to-r from-purple-100 to-blue-100 p-10 font-sans">
    <div class="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-[2rem]">
        <h1 class="text-4xl font-bold text-center text-black mb-8">Chemical Bonds</h1>

        <section class="mb-8">
            <h2 class="text-2xl font-semibold text-black mb-4">Definition</h2>
            <p class="text-lg text-gray-700">
                Forces of attraction that hold atoms together in substances.<br />
                Electrical in nature.
            </p>
        </section>

        <section class="mb-8">
            <h2 class="text-2xl font-semibold text-black mb-4">Atomic Reactivity</h2>
            <ul class="list-disc pl-5 text-lg text-gray-700">
                <li>Most atoms (except noble gases) tend to react with other elements.</li>
                <li>Atoms gain stability by losing or gaining electrons.</li>
                <li>Goal: Acquire the electron configuration of the nearest noble gas.</li>
            </ul>
        </section>

        <section class="mb-8">
            <h2 class="text-2xl font-semibold text-black mb-4">Electropositivity and Electronegativity</h2>
            <ul class="list-disc pl-5 text-lg text-gray-700">
                <li><strong>Electropositivity:</strong> Tendency of metal atoms to lose electrons.</li>
                <li><strong>Electronegativity:</strong> Tendency of non-metal atoms to gain electrons.</li>
            </ul>
        </section>

        <section class="mb-8">
            <h2 class="text-2xl font-semibold text-black mb-4">Electron Sharing</h2>
            <p class="text-lg text-gray-700">
                Atoms can also achieve noble gas configuration by sharing electrons.
            </p>
        </section>

        <section class="mb-8">
            <h2 class="text-2xl font-semibold text-black mb-4">Electropositive Elements (Metals)</h2>
            <ul class="list-disc pl-5 text-lg text-gray-700">
                <li>Lose electrons from outermost shell.</li>
                <li>Become positively charged.</li>
                <li>Characteristics:
                    <ul class="list-decimal pl-5">
                        <li>Low ionization energy</li>
                        <li>Low electronegativity</li>
                    </ul>
                </li>
                <li>Form positive ions.</li>
                <li>Examples:
                    <ul class="list-none pl-5">
                        <li>Na → Na<sup>+</sup> + e<sup>-</sup></li>
                        <li>Mg → Mg<sup>2+</sup> + 2e<sup>-</sup></li>
                    </ul>
                </li>
            </ul>
        </section>

        <section class="mb-8">
            <h2 class="text-2xl font-semibold text-black mb-4">Electronegative Elements (Non-metals)</h2>
            <ul class="list-disc pl-5 text-lg text-gray-700">
                <li>Gain electrons.</li>
                <li>Become negatively charged.</li>
                <li>Characteristics:
                    <ul class="list-decimal pl-5">
                        <li>High electronegativity</li>
                        <li>High electron affinity</li>
                    </ul>
                </li>
                <li>Form negative ions.</li>
                <li>Example:
                    <ul class="list-none pl-5">
                        <li>F + e<sup>-</sup> → F<sup>-</sup></li>
                    </ul>
                </li>
            </ul>
        </section>
    </div>
</div>


    </div>
  );
};

export default MagneticMindmap;