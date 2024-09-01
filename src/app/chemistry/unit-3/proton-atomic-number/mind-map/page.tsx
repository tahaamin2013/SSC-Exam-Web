import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">Proton or Atomic Number
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
* Proton or Atomic Number
** What Determines Element Identity
*** Proton number (Z)
*** Equal to number of electrons in neutral atoms
*** Examples
**** H atom: 1 proton, atomic number 1
**** He atom: 2 protons, atomic number 2
**** C atom: 6 protons, atomic number 6
** Uniqueness of Proton Number
*** Distinguishes elements
*** Determines element properties
*** Determines position in periodic table
*** Examples
**** Carbon: 6 protons
**** Sodium: 11 protons
**** Nitrogen: 7 protons
**** Oxygen: 8 protons
left side
** Nucleon Number or Atomic Mass
*** Total protons + neutrons
*** Isotopes: atoms with different neutron numbers
*** Neutron calculation: mass number - atomic number
** Example Problem
*** Atomic number: 17, Mass number: 35
*** Solution
**** Protons: 17
**** Neutrons: 18
** Radioactivity
*** Unbalanced nuclear forces
*** Radioactive decay
*** Changes in proton number can change element identity
*** Examples
**** Carbon-14 decay to Nitrogen-14
**** Uranium-238 decay to Lead-206
@endmindmap`}
        />
       
      </section>
      <div className="p-8 bg-gradient-to-r from-yellow-100 to-orange-200 rounded-lg shadow-xl">
    <h1 className="text-3xl font-extrabold text-orange-800 mb-6">3.3 Proton or Atomic Number</h1>

    <div className="mb-8">
        <h2 className="text-2xl font-semibold text-yellow-700 mb-4">Identity of an Element</h2>
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-semibold text-orange-700 mb-2">Proton Number (Atomic Number)</h3>
            <ul className="list-disc list-inside text-yellow-900 ml-6">
                <li>Symbol: Z</li>
                <li>Refers to the number of protons in the nucleus</li>
                <li>Determines the identity of an element</li>
                <li>Equal to the number of electrons in a neutral atom</li>
            </ul>
        </div>
    </div>

    <div className="mb-8">
        <h2 className="text-2xl font-semibold text-yellow-700 mb-4">Uniqueness of Proton Number</h2>
        <ul className="list-disc list-inside text-yellow-900 ml-6">
            <li>Each element has a unique proton number</li>
            <li>Determines:
                <ul className="list-disc list-inside text-yellow-900 ml-6">
                    <li>Element&apos;sproperties</li>
                    <li>Position in the periodic table</li>
                </ul>
            </li>
        </ul>
        <div className="bg-white p-4 rounded-lg shadow-md mt-4">
            <h3 className="text-xl font-semibold text-orange-700 mb-2">Examples:</h3>
            <ul className="list-disc list-inside text-yellow-900 ml-6">
                <li>Carbon: 6 protons</li>
                <li>Sodium: 11 protons</li>
                <li>Nitrogen: 7 protons</li>
                <li>Oxygen: 8 protons</li>
            </ul>
        </div>
    </div>

    <div className="mb-8">
        <h2 className="text-2xl font-semibold text-yellow-700 mb-4">Nucleon Number (Mass Number)</h2>
        <ul className="list-disc list-inside text-yellow-900 ml-6">
            <li>Total number of protons and neutrons in an atom</li>
            <li>Calculation: No. of neutrons = mass number - atomic number</li>
            <li>Isotopes: Atoms of an element with different numbers of neutrons</li>
        </ul>
        <div className="bg-white p-4 rounded-lg shadow-md mt-4">
            <h3 className="text-xl font-semibold text-orange-700 mb-2">Example 3.1: Determining Protons and Neutrons</h3>
            <p className="text-yellow-900">
                Given:<br />
                Atomic number = 17<br />
                Mass number = 35
            </p>
            <p className="text-yellow-900">
                Solution:<br />
                Number of protons = atomic number = 17<br />
                Number of neutrons = mass number - atomic number = 35 - 17 = 18
            </p>
        </div>
    </div>

    <div className="mb-8">
        <h2 className="text-2xl font-semibold text-yellow-700 mb-4">Radioactivity</h2>
        <ul className="list-disc list-inside text-yellow-900 ml-6">
            <li>Occurs in elements with unbalanced nuclear forces</li>
            <li>Radioactive decay: Process of nucleus decay to become another atom</li>
            <li>Effects on atomic identity:
                <ul className="list-disc list-inside text-yellow-900 ml-6">
                    <li>Neutron emission: Changes to another isotope of the same element</li>
                    <li>Proton emission: Changes to a different element</li>
                </ul>
            </li>
        </ul>
        <div className="bg-white p-4 rounded-lg shadow-md mt-4">
            <h3 className="text-xl font-semibold text-orange-700 mb-2">Examples:</h3>
            <ul className="list-disc list-inside text-yellow-900 ml-6">
                <li>Carbon-14 decay to Nitrogen-14</li>
                <li>Uranium-238 decay to Lead-206</li>
            </ul>
        </div>
    </div>
</div>

    </div>
  );
};

export default MagneticMindmap;