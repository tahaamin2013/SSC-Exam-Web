import React from 'react';

const Unit05_3 = () => {
    return (
        <div className="p-8">
            <h3 className="text-lg font-semibold mt-8">5.3 TYPES OF BONDS</h3>
            <p className="mt-4">
                Depending on the tendency of an atom to lose, gain, or share electrons, there are two types of bonds:
            </p>
            <ol className="list-decimal ml-6 mt-2">
                <li>Ionic bonds</li>
                <li>Covalent bonds</li>
            </ol>

            <h4 className="text-md font-semibold mt-8">5.3.1 Ionic Bonds</h4>
            <p className="mt-4">
                Ionic bonds are formed between two atoms when one atom loses an electron to form a cation and the other atom gains this electron to form an anion.
            </p>

            <h5 className="text-sm font-semibold mt-6">Example 5.1: Describing the formation of cations</h5>
            <p className="mt-4">
                Describe the formation of Na<sup>+</sup> and Mg<sup>2+</sup> cations.
            </p>
            <p className="mt-4">
                <strong>Problem Solving Strategy:</strong>
            </p>
            <ol className="list-decimal ml-6 mt-2">
                <li>Sodium belongs to Group IA on the periodic table. It has only one electron in the valence shell. The sodium atom loses its valence electron and is left with an octet. Represent this by drawing the complete electronic configuration or using an electron dot structure.</li>
                <li>Magnesium belongs to Group IIA in the periodic table. It has two valence electrons. A magnesium atom loses these electrons to achieve noble gas configuration. Represent this by drawing the complete electronic configuration or using an electron dot structure.</li>
            </ol>
            <p className="mt-4">
                Na: Na (1s² 2s² 2p⁶ 3s¹) → Na<sup>+</sup> (1s² 2s² 2p⁶)
            </p>
            <p className="mt-4">
                Mg: Mg (1s² 2s² 2p⁶ 3s²) → Mg<sup>2+</sup> (1s² 2s² 2p⁶)
            </p>

            <h5 className="text-sm font-semibold mt-6">CONCEPT ASSESSMENT EXERCISE 5.1</h5>
            <ol className="list-decimal ml-6 mt-2">
                <li>Describe the formation of cations for the following metal atoms:
                    <ul className="list-disc ml-6 mt-2">
                        <li>(a) Li (atomic no 3)</li>
                        <li>(b) Al (atomic no. 13)</li>
                    </ul>
                </li>
                <li>Represent the formation of cations for the following metal atoms using electron dot structures:
                    <ul className="list-disc ml-6 mt-2">
                        <li>(a) K</li>
                        <li>(b) Ca</li>
                    </ul>
                </li>
            </ol>

            <h5 className="text-sm font-semibold mt-6">Example 5.2: Describing the formation of anions</h5>
            <p className="mt-4">
                Describe the formation of anions for the following non-metal atoms:
            </p>
            <ul className="list-disc ml-6 mt-2">
                <li>(a) Oxygen (atomic no. 8)</li>
                <li>(b) Fluorine (atomic no. 9)</li>
            </ul>
            <p className="mt-4">
                <strong>Problem Solving Strategy:</strong>
            </p>
            <ol className="list-decimal ml-6 mt-2">
                <li>Write electronic configuration or dot structure.</li>
                <li>Find the number of electrons needed to acquire eight-electron configuration.</li>
                <li>Represent addition of electrons.</li>
            </ol>
            <p className="mt-4">
                (a) Formation of anion by oxygen atom:
                <br />
                Oxygen belongs to Group VIA on the periodic table. It has six electrons in its valence shell. It needs two electrons to achieve noble gas configuration.
                <br />
                O (1s² 2s² 2p⁴) + 2e⁻ → O²⁻ (1s² 2s² 2p⁶)
            </p>
            <p className="mt-4">
                (b) Formation of anion by fluorine atom:
                <br />
                Fluorine belongs to Group VIIA on the periodic table. It has seven electrons in the valence shell. A fluorine atom therefore, requires only one electron to complete octet.
                <br />
                F (1s² 2s² 2p⁵) + e⁻ → F⁻ (1s² 2s² 2p⁶)
            </p>

            <h5 className="text-sm font-semibold mt-6">CONCEPT ASSESSMENT EXERCISE 5.2</h5>
            <ol className="list-decimal ml-6 mt-2">
                <li>Describe the formation of anions by the following non-metals:
                    <ul className="list-disc ml-6 mt-2">
                        <li>(a) Sulphur (atomic No. 16)</li>
                        <li>(b) Chlorine (atomic No. 17)</li>
                    </ul>
                </li>
                <li>Represent the formation of anions by the following non-metals using electron dot structures:
                    <ul className="list-disc ml-6 mt-2">
                        <li>(a) N</li>
                        <li>(b) P</li>
                        <li>(c) Br</li>
                        <li>(d) H</li>
                    </ul>
                </li>
                <li>Compare differences between the formation of cations and anions.</li>
            </ol>

            <p className="mt-4">
                Anions and cations have opposite charges. They attract one another by strong electrostatic forces. An ionic bond is a strong electrostatic attraction between positively charged metal ions and negatively charged non-metal ions. Compounds that consist of ions joined by electrostatic forces are called ionic compounds. The total positive charge of the cations must be equal to the total negative charge of the anions because ionic compounds are electrically neutral as a whole.
            </p>

            <h5 className="text-sm font-semibold mt-6">Example 5.3: Representing ionic bond formation</h5>
            <p className="mt-4">
                For each of the following pairs of atoms, use electron dot and electron cross structures to write the equation for the formation of an ionic compound:
            </p>
            <ul className="list-disc ml-6 mt-2">
                <li>(a) Na and Cl</li>
                <li>(b) Mg and F</li>
            </ul>
            <p className="mt-4">
                <strong>Problem Solving Strategy:</strong>
            </p>
            <ol className="list-decimal ml-6 mt-2">
                <li>The metal atoms form cations and non-metal atoms form anions.</li>
                <li>The number of electrons lost by metal atoms of group IA, IIA, and IIIA equals the group number.</li>
                <li>To write the final form of the equation, you need to know the simplest ratio of cations to anions that you require for the neutral compound.</li>
                <li>Write the equation using electron dot and electron cross structures.</li>
            </ol>
            <p className="mt-4">
                (a) Na is a metal and Cl is a non-metal.
                <br />
                Metal atom tends to lose electrons and non-metal atoms tend to gain electrons to acquire electronic configuration of the nearest noble gas. Since a Na atom has one electron in the outermost shell, it loses one electron to form Na<sup>+</sup> ion. Since a Cl atom has seven electrons in the outermost shell, it needs one electron to complete the octet. So it gains one electron to form Cl⁻ ion. For every Na<sup>+</sup> ion, you need one Cl⁻ ion.
                <br />
                Na + Cl → NaCl
                <br />
                2Na + Cl₂ → 2NaCl (Sodium Chloride)
            </p>
            <p className="mt-4">
                (b) Mg is a metal and F is a non-metal.
                <br />
                A Mg atom has two electrons in the outermost shell. It loses two electrons to form Mg<sup>2+</sup> ion. A F atom has seven electrons in the outermost shell, it needs one electron to complete the octet. Therefore, one F atom will accept one electron. Since one Mg atom can lose two electrons, two F atoms will be needed to accept these electrons. The final compound will be MgF₂.
                <br />
                Mg + F₂ → MgF₂
            </p>

            <h5 className="text-sm font-semibold mt-6">CONCEPT ASSESSMENT EXERCISE 5.3</h5>
            <ol className="list-decimal ml-6 mt-2">
                <li>For the following pairs of atoms, use electron dot and electron cross structures to write the equation for the formation of ionic compounds:
                    <ul className="list-disc ml-6 mt-2">
                        <li>(a) K and Br</li>
                        <li>(b) Al and O</li>
                        <li>(c) Li and S</li>
                    </ul>
                </li>
                <li>For the following ionic compounds, write their formulae:
                    <ul className="list-disc ml-6 mt-2">
                        <li>(a) Calcium and Fluoride</li>
                        <li>(b) Lithium and Chloride</li>
                        <li>(c) Potassium and Oxide</li>
                    </ul>
                </li>
            </ol>
        </div>
    );
};

export default Unit05_3;
