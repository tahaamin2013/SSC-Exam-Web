import Image from 'next/image';
import React from 'react';

const PeriodicTablePage = () => {
    return (
        <div className="bg-white text-black p-8">
            <h1 className="text-3xl font-bold mb-4">Periodic Table and Periodicity</h1>

            <section className="mb-8">
                <p>Predict the characteristic properties of an element in a given group by using knowledge of chemical periodicity.</p>
                <p>Deduce the nature, possible position in the Periodic Table and the identity of unknown elements from given information about their physical and chemical properties.</p>
                <p>Define Group 1 Alkali metals as relatively soft metals with general trends down the group limited to decreasing melting point, increasing density and increasing reactivity.</p>
                <p>Predict properties of other elements in Group 1, given information about the elements.</p>
                <p>Predict properties of elements in Group 1 in order of reactivity given relevant information.</p>
                <p>Define Group VII halogens as diatomic non-metals with general trends limited to increasing density and decreasing reactivity.</p>
                <p>Identify the appearance of halogens at rtp as fluorine as pale yellow gas, chlorine as yellow-green gas, bromine as red-brown liquid, iodine as grey-black solid.</p>
                <p>Explain the displacement reactions of halogens with other halide ions and also as reducing agents.</p>
                <p>Predict the properties of elements in Group VII, given information about the elements.</p>
                <p>Analyze the relative thermal stabilities of the hydrogen halides and explain these in terms of bond strengths.</p>
                <p>Describe the transition elements as metals that: have high densities, high melting points, variable oxidation numbers, form coloured compounds and act as catalysts for industrial purposes. (Some examples include catalysts being used are the Haber process, catalytic converters, Contact process, and manufacturing of margarine).</p>
                <p>Define the Group 18 noble gases as unreactive monoatomic gases.</p>
                <p>Explain this in terms of electronic configuration.</p>
                <p>Compare the general physical properties of metals and non-metals. (Specifically in terms of:</p>
                <ul className="list-disc list-inside">
                    <li>Thermal conductivity</li>
                    <li>Electrical conductivity</li>
                    <li>Malleability and ductility</li>
                    <li>Melting points and boiling points</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                <p>Welcome to the exciting world of chemistry, where the elements come to life thanks to the remarkable periodic table. From its humble beginnings, where only 23 elements were known until the end of the 18th century, to its development of 118 elements today. It is very difficult and impossible to remember information about the reactions, properties, and atomic masses of elements. So we obviously need a way to organize our information about them. The periodic table is one of the most important tools in chemistry. It is very useful for understanding and predicting the properties of elements. For example, if you know the physical and chemical properties of one element in a group, you can predict the physical and chemical properties of any other element in the same group. The periodic table allows you to relate the reactivity tendencies of elements to their atomic structure. You can also predict which elements can form ionic or covalent bonds.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4.1 Periodic Table</h2>
                <p>One of the most important activities is the search for order. A large number of observations of objects can be arranged into groups according to common features they share, it becomes easier to describe them. After the discovery of atomic number by Moseley in 1913, it was noticed that atomic number could serve as a base for systematic arrangement of elements. Thus elements are arranged in the order of increasing atomic number. A table showing systematic arrangement of elements is called periodic table. It is based on the Periodic law that states if the elements are arranged in the order of their increasing atomic numbers, their properties are repeated in a periodic manner.</p>
<Image alt='fd' height={7000} src='/table.jpg' width={700} />

                <h3 className="text-xl font-semibold mb-2">4.1.1 Periods and Groups of Elements</h3>
                <p>The most commonly used form of the periodic table is shown in figure 4.1. Note that the elements are listed in order of increasing atomic numbers, from left to right and from top to bottom. Hydrogen (H) is in the top left corner. Helium (He), atomic number 2, is at the top right corner. Lithium (Li), atomic number 3, is at the left end of the second row.</p>
                <p>The horizontal rows of the periodic table are called periods. There are varying numbers of elements in periods. How many periods do you find in the periodic table? There are seven periods. The number of elements per period ranges from 2 in period 1 to 32 in period 6. The first three periods are called short periods and the remaining periods are called long periods. The properties of elements within a period change gradually as you move from left to right in it. But when you move from one period to the next, the pattern of properties within a period repeats. This is in accordance with the periodic law.</p>
                <p>International Union of Pure and Applied Chemistry (IUPAC) has recently renamed newly discovered elements and placed them on the periodic table.</p>
            </section>

            <section className="mb-8">
                <h3 className="text-xl font-semibold mb-2">4.1.2 s and p Blocks in the Periodic Table</h3>
                <p>Group 1 and Group 2 elements contain their valence electrons in the s sub-shell. Therefore, these elements are called s-block elements. Elements in groups 13 to 18 (except He) are known as p-block elements because their valence electrons are located in the p sub-shell. Lanthanides and actinides are known as f-block elements since their valence electrons lie in the f sub-shell. Figure 4.2 shows the blocks of the periodic table.</p>
                <p>Li 1,2s', as valence electron is in the s sub-shell, Li belongs to s-block. C-1s², 2s, 2p, as valence electron is in the sub-shell p, C belongs to p-block.</p>
            </section>
        </div>
    );
};

export default PeriodicTablePage;
