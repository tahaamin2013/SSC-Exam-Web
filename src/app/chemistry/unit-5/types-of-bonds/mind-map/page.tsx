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
            <div className="bg-gradient-to-r from-blue-100 to-green-100 p-10 font-sans">
                <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-[2rem]">
                    <h1 className="text-4xl font-bold text-center text-black mb-8">Types of Bonds: Ionic Bonds</h1>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-black mb-4">Two Main Types of Bonds</h2>
                        <ul className="list-disc pl-5 text-lg text-gray-700">
                            <li>Ionic bonds</li>
                            <li>Covalent bonds</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h3 className="text-xl font-semibold text-black mb-4">Ionic Bond Formation</h3>
                        <p className="text-lg text-gray-700">
                            Ionic bonds occur between two atoms, where one atom loses electron(s) to form a cation and the other atom gains electron(s) to form an anion.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h3 className="text-xl font-semibold text-black mb-4">Cation Formation</h3>
                        <ul className="list-disc pl-5 text-lg text-gray-700">
                            <li>Example: Na → Na⁺ (1s² 2s² 2p⁶)</li>
                            <li>Example: Mg → Mg²⁺ (1s² 2s² 2p⁶)</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h3 className="text-xl font-semibold text-black mb-4">Anion Formation</h3>
                        <ul className="list-disc pl-5 text-lg text-gray-700">
                            <li>Example: O + 2e⁻ → O²⁻ (1s² 2s² 2p⁶)</li>
                            <li>Example: F + e⁻ → F⁻ (1s² 2s² 2p⁶)</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h3 className="text-xl font-semibold text-black mb-4">Ionic Bond Characteristics</h3>
                        <p className="text-lg text-gray-700">
                            Ionic bonds are characterized by a strong electrostatic attraction between oppositely charged ions, resulting in compounds that are electrically neutral overall.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h3 className="text-xl font-semibold text-black mb-4">Ionic Compound Formation</h3>
                        <ul className="list-disc pl-5 text-lg text-gray-700">
                            <li>Example: Na + Cl → NaCl (Sodium Chloride)</li>
                            <li>Example: Mg + F₂ → MgF₂ (Magnesium Fluoride)</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h3 className="text-xl font-semibold text-black mb-4">Key Concepts</h3>
                        <ul className="list-disc pl-5 text-lg text-gray-700">
                            <li>Metal atoms form cations, non-metal atoms form anions.</li>
                            <li>Electrons lost by metals in groups IA, IIA, IIIA equal the group number.</li>
                            <li>The final compound formula is based on the simplest ratio of cations to anions.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h3 className="text-xl font-semibold text-black mb-4">Representation Methods</h3>
                        <ul className="list-disc pl-5 text-lg text-gray-700">
                            <li>Electron dot structures</li>
                            <li>Electron cross structures</li>
                            <li>Chemical equations</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-black mb-4">Practice Exercises</h3>
                        <ul className="list-disc pl-5 text-lg text-gray-700">
                            <li>Formation of various cations and anions</li>
                            <li>Representation of ionic compounds using different structures</li>
                            <li>Writing formulas for ionic compounds</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default MagneticMindmap;