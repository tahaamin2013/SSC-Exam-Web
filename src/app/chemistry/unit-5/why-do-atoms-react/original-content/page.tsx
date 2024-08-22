import React from 'react';

const Unit05 = () => {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">UNIT 05</h1>
            <h2 className="text-xl font-semibold mt-4">CHEMICAL BONDING</h2>

            <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Explain the properties of compounds in terms of bonding and structure.</li>
                <li>
                    Compare properties and use of materials such as strength and conductivity as determined by the type of chemical bond present between their atoms.
                </li>
                <li>
                    Interpret the strength of forces of attraction and their impact on melting and boiling points of ionic and covalent compounds.
                </li>
                <li>
                    Justify the availability of free charged particles (electrons or ions) for conduction of electricity in lonic compounds (solid and molten) covalent compounds and metallic bonds.
                </li>
                <li>
                    Recognize some substances can ionize when dissolved in water (e.g. acids dissolve in water and conduct electricity).
                </li>
                <li>
                    Justify the suitability of usage of graphite, diamond and metals for industrial purposes (some example may include;
                    <ul className="list-inside mt-2 ml-4">
                        <li>a. graphite as lubricant or an electrode,</li>
                        <li>b. diamond in cutting tools.</li>
                        <li>c. metals for wires, and sheets).</li>
                    </ul>
                </li>
                <li>
                    Draw the structure of ionic and covalent compounds along with their formation.
                    <ul className="list-inside mt-2 ml-4">
                        <li>a. tonic bonds in binary compounds such as NaBr, NaF, CaCl<sub>2</sub>, using dot-and-cross diagrams and Lewis-dot structures.</li>
                        <li>
                            b. simple molecules including H<sub>2</sub>, Cl<sub>2</sub>, O<sub>2</sub>, N<sub>2</sub>, H<sub>2</sub>O, CH<sub>4</sub>, NH<sub>3</sub>, HCl, CH<sub>3</sub>OH, C<sub>2</sub>H<sub>4</sub>, CO<sub>2</sub>, HCN, and similar molecules using dot-and-cross diagrams and Lewis-structures.
                        </li>
                    </ul>
                </li>
            </ul>

            <h3 className="text-lg font-semibold mt-8">INTRODUCTION</h3>
            <p className="mt-4">
                All the matter in this world is composed of almost entirely compounds and their mixtures. Human, animal and plant bodies, rocks, soil, petroleum, coal etc. are all complex mixtures of compounds. In compounds different kinds of atom are bounded together. Few elements also consist of unbounded atoms. For instance, helium, neon, argon, xenon and krypton present in the atmosphere consist of unbounded atoms. The manner in which various atoms are bonded together has a profound effect on the properties of substances.
            </p>
            <p className="mt-4">
                Some substances are hard and tough, others are soft and flexible why? Resins are widely used to paint dams, bridges, buildings and automobiles. What makes them sticky? How do adhesives such as glue bind two surfaces together? What is the nature of such linkages? The answer lies in the nature of bonding and structure of their molecules. Therefore, to understand the behaviour of various substances, you must understand the nature of chemical bonding and structure of molecules.
            </p>

            <h3 className="text-lg font-semibold mt-8">5.1 WHY DO ATOMS REACT?</h3>
            <p className="mt-4">
                There are eight groups of normal elements (IA, IIA, IIIA, IVA, VA, VIA VIIA VIIIA) in the periodic table. Group VIIIA consist of the noble gases or zero group elements because they are all very stable and chemically inert under ordinary condition. They exist in atomic form in the atmosphere. They have general electronic configuration = ns², np⁶ (8 electrons in valence shell) except He (1s²). These noble gases have completely filled valence shells (s and p subshells). Their octet is complete, so they do not participate in ordinary chemical reactions and are called inert gases. They have eight electrons in their valence shell, except He, which has two electrons in its valence shell.
            </p>

            <p className="mt-4">
                <strong>He</strong> = 1s² <strong>Ne</strong> = 1s², 2s², 2p⁶ <strong>Ar</strong> = 1s², 2s², 2p⁶, 3s², 3p⁶
            </p>

            <h4 className="text-md font-semibold mt-8">Octet Rule</h4>
            <p className="mt-4">
                The octet rule states that an atom is most stable when its valence shell contains eight electrons. This principle is derived from the observation that atoms of the major group elements tend to participate in chemical bonding in the form of eight electrons per atom in the resulting molecule. This rule only applies to the major group element. The chemical behaviour of the main group elements can be predicted with the help of the octet rule. This is because the rule only involves s and p electrons. Molecules such as oxygen, nitrogen, and halogens follow the octet principle. Hydrogen, helium, and lithium follow the duplet rule because their electrons lie in s orbital.
            </p>
            <p className="mt-4">
                Na = 1s², 2s², 2p⁶, 3s¹ (unstable, reactive, incomplete octet)
                <br /> Loss of one electron Na = 1s², 2s², 2p⁶ (same as Ne)
                <br /> Cl = 1s², 2s², 2p⁶, 3s², 3p⁵ (unstable, reactive, incomplete octet)
                <br /> Cl- = 1s², 2s², 2p⁶, 3s², 3p⁶ (same as Ar)
            </p>

            <h4 className="text-md font-semibold mt-8">Duplet Rule</h4>
            <p className="mt-4">
                The tendency of atoms to acquire two electronic configurations in their outermost shell during bond formation is called the duplet rule. They attain an electronic configuration like helium.
            </p>
            <p className="mt-4">
                For Example:
                <br />
                Li = 1s², 2s¹ loses 1 electron to form Li⁺ (1s²)
                <br />
                Be = 1s², 2s² loses two electrons to form Be²⁺ (1s²)
            </p>
            <p className="mt-4">
                Helium has two electrons in its valence shell and is also chemically inert. Some elements that are close to He on the periodic table tend to achieve two electronic configurations in their valence shell. For example, hydrogen, lithium, and beryllium tend to achieve two electron configurations in the valence shell.
            </p>
        </div>
    );
};

export default Unit05;
