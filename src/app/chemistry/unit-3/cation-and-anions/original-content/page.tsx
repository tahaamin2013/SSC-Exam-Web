// pages/cations-and-anions.tsx

import React from 'react';

const CationsAndAnions = () => {
    return (
        <div className="min-h-screen bg-white p-8">
            <div className="container mx-auto bg-gray-50 p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4">3.6 CATIONS AND ANIONS</h1>

                <h2 className="text-xl font-semibold mb-4">Cations</h2>
                <p className="mb-4">
                    Cations are positively charged ions that form when an atom loses one or more electrons. Cations are usually formed from metal atoms that tend to lose electrons to achieve a stable electron configuration similar to a noble gas. When an atom loses one or more electrons, it forms a cation. The resulting cation has the electronic configuration of a noble gas. Neutral atoms have an equal number of protons and electrons. When an atom loses one or more electrons, the number of protons becomes greater than the number of electrons, resulting in a positive charge.
                </p>

                <h3 className="text-lg font-semibold mb-4">Example 3.1: Describing the Formation of Cations</h3>
                <p className="mb-4">
                    Describe the formation of Na<sup>+</sup> and Mg<sup>2+</sup> cations.
                </p>

                <p className="mb-4">
                    <strong>Problem Solving Strategy:</strong>
                </p>
                <ol className="list-decimal list-inside mb-4">
                    <li>Sodium belongs to Group IA on the periodic table. It has only one electron in the valence shell. Sodium atom loses its valence electron and is left with an octet. Represent this by drawing the complete electronic configuration or using an electron dot structure.</li>
                    <li>Magnesium belongs to Group IIA in the periodic table. It has two valence electrons. Magnesium atom loses these electrons to achieve noble gas configuration. Represent this by drawing the complete electronic configuration or using an electron dot structure. This number also corresponds to the Group number in the periodic table.</li>
                </ol>

                <h4 className="text-md font-semibold mb-4">Solution:</h4>
                <div className="mb-4">
                    <p className="font-semibold">Formation of Na<sup>+</sup> ion:</p>
                    <p>Na: 1s² 2s² 2p⁶ 3s¹ → Na<sup>+</sup>: 1s² 2s² 2p⁶</p>
                    <p>You can also represent this by the following electron dot structure:</p>
                </div>
                <div className="mb-4">
                    <p className="font-semibold">Formation of Mg<sup>2+</sup> ion:</p>
                    <p>Mg: 1s² 2s² 2p⁶ 3s² → Mg<sup>2+</sup>: 1s² 2s² 2p⁶</p>
                    <p>You can also represent this by the following electron dot structure:</p>
                </div>

                <h2 className="text-xl font-semibold mb-4">CONCEPT ASSESSMENT EXERCISE</h2>
                <p className="mb-4">
                    Describe the formation of cations for the following metal atoms:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>(a) Li (atomic number 3)</li>
                    <li>(b) Al (atomic number 13)</li>
                </ul>

                <h2 className="text-xl font-semibold mb-4">Anions</h2>
                <p className="mb-4">
                    Anions are negatively charged ions that form when an atom gains one or more electrons. This process usually occurs when an atom has a relatively high electron affinity, meaning that it can easily attract and capture more electrons to achieve a stable electron configuration similar to a noble gas. When an atom gains one or more electrons, the number of electrons becomes greater than the number of protons, so it acquires a negative charge.
                </p>

                <h3 className="text-lg font-semibold mb-4">Example 3.1: Describing the Formation of Anions</h3>
                <p className="mb-4">
                    Describe the formation of anions for the following non-metal atoms:
                </p>

                <p className="mb-4">
                    <strong>Problem Solving Strategy:</strong>
                </p>
                <ol className="list-decimal list-inside mb-4">
                    <li>Write the electronic configuration or dot structure.</li>
                    <li>Find the number of electrons needed to acquire an octet electron configuration.</li>
                    <li>Represent the addition of electrons.</li>
                </ol>

                <h4 className="text-md font-semibold mb-4">Solution:</h4>
                <div className="mb-4">
                    <p className="font-semibold">Formation of anion by oxygen atom:</p>
                    <p>Oxygen belongs to Group VIA on the periodic table. It has six electrons in its valence shell. It needs two electrons to achieve a noble gas configuration.</p>
                    <p>O: 1s² 2s² 2p⁴ + 2e⁻ → O<sup>2-</sup>: 1s² 2s² 2p⁶</p>
                    <p>You can also represent this by the following electron dot structure:</p>
                </div>
                <div className="mb-4">
                    <p className="font-semibold">Formation of anion by fluorine atom:</p>
                    <p>Fluorine belongs to Group VIIA on the periodic table. It has seven electrons in the valence shell. A fluorine atom therefore requires only one electron to complete its octet.</p>
                    <p>F: 1s² 2s² 2p⁵ + e⁻ → F<sup>-</sup>: 1s² 2s² 2p⁶</p>
                    <p>You can also represent this by the following electron dot structure:</p>
                </div>

                <h2 className="text-xl font-semibold mb-4">CONCEPT ASSESSMENT EXERCISE 3.3</h2>
                <p className="mb-4">
                    Describe the formation of anions by the following non-metals:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>(a) Sulphur (atomic number 16)</li>
                    <li>(b) Chlorine (atomic number 17)</li>
                </ul>
            </div>
        </div>
    );
};

export default CationsAndAnions;
