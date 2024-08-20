// pages/electronic-configuration.tsx

import React from 'react';

const ElectronicConfiguration = () => {
    return (
        <div className="min-h-screen bg-white p-8">
            <div className="container mx-auto bg-gray-50 p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4">3.7 ELECTRONIC CONFIGURATION</h1>

                <h2 className="text-xl font-semibold mb-4">Shells</h2>
                <p className="mb-4">
                    According to Bohr's atomic theory, the electron in an atom revolves around the nucleus in one of the circular paths called shells or orbits. Each shell has a fixed energy and is also known as an energy level. Each shell is described by an <i>n</i> value, where <i>n</i> can have values 1, 2, 3, etc.
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li><i>n = 1</i>, it is the K shell</li>
                    <li><i>n = 2</i>, it is the L shell</li>
                    <li><i>n = 3</i>, it is the M shell</li>
                    <li>As the value of <i>n</i> increases, the distance of the electron from the nucleus and the energy of the shell increases.</li>
                </ul>

                <h2 className="text-xl font-semibold mb-4">Sub-Shells</h2>
                <p className="mb-4">
                    A shell or energy level is subdivided into sub-shells or sub-energy levels. The <i>n</i> value of a shell is placed before the symbol for a sub-shell. For instance:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>For <i>n = 1</i> (K shell), it has only one sub-shell which is represented by 1s.</li>
                    <li>For <i>n = 2</i> (L shell), it has two sub-shells: 2s and 2p.</li>
                    <li>For <i>n = 3</i> (M shell), it has three sub-shells: 3s, 3p, and 3d.</li>
                    <li>For <i>n = 4</i> (N shell), it has four sub-shells: 4s, 4p, 4d, and 4f.</li>
                </ul>
                <p className="mb-4">
                    The maximum number of electrons that each sub-shell can accommodate is:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>s sub-shell: 2 electrons</li>
                    <li>p sub-shell: 6 electrons</li>
                    <li>d sub-shell: 10 electrons</li>
                    <li>f sub-shell: 14 electrons</li>
                </ul>
                <p className="mb-4">
                    The increasing order of energy of the sub-shells is as follows:
                </p>
                <p className="mb-4">
                    <i>1s &lt; 2s &lt; 2p &lt; 3s &lt; 3p &lt; 4s &lt; 3d ...</i>
                </p>
                <p className="mb-4">
                    The arrangement of electrons in sub-shells is called the electronic configuration. According to the Auf Bau Principle, electrons fill the lowest energy sub-shell that is available first. This means electrons will fill 1s first, then 2s, then 2p, and so on.
                </p>

                <h2 className="text-xl font-semibold mb-4">Symbols for Atoms and Ions</h2>
                <p className="mb-4">
                    The symbol for an atom represents the element. It consists of one or two letters, with the mass number as a left superscript, the atomic number as a left subscript, and the charge as a right superscript. For example:
                </p>
                <p className="mb-4">
                    Mg<sub>12</sub><sup>24</sup><sup>2+</sup>
                </p>
                <p className="mb-4">
                    The number is often omitted. This symbol stands for magnesium. The number to the upper left of the symbol is the mass number (24), the number to the upper right is the charge (+2), and the number to the lower left is the atomic number (12).
                </p>

                <h2 className="text-xl font-semibold mb-4">Key Points</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>Rutherford proposed a planetary model for an atom. The nucleus of an atom is composed of protons, while electrons surround the nucleus and occupy most of the volume of the atom.</li>
                    <li>According to Bohr's atomic model, electrons revolve around the nucleus in fixed circular orbits called shells.</li>
                    <li>Isotopes are atoms of an element that differ in the number of neutrons.</li>
                    <li>Uranium isotope is used in nuclear reactors and atomic bombs.</li>
                    <li>Radioactive isotopes have various applications in science and medicine, such as killing cancer cells, diagnosing thyroid problems, imaging the brain, detecting circulatory system obstructions, and dating rocks, soils, and mummies.</li>
                    <li>A shell or energy level is divided into sub-shells.</li>
                    <li>There are four types of sub-shells: s, p, d, and f.</li>
                    <li>The arrangement of electrons in sub-shells is known as electronic configuration.</li>
                    <li>According to the Auf Bau Principle, electrons fill the lowest energy levels first.</li>
                </ul>

                <h2 className="text-xl font-semibold mb-4">References for Additional Information</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>B. Earl and LDR Wilford, <i>Introduction to Advanced Chemistry</i></li>
                    <li>Iain Brand and Richard Grime, <i>Chemistry (11-14)</i></li>
                </ul>
            </div>
        </div>
    );
};

export default ElectronicConfiguration;
