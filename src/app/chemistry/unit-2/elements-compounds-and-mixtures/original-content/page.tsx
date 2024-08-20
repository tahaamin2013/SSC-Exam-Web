import React from 'react';

const ElementsCompoundsMixtures = () => {
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">2.2 ELEMENTS, COMPOUNDS AND MIXTURES</h2>
            <p>Matter can be described with both physical properties and chemical properties. Matter can be classified as:</p>
            <ol className="list-decimal list-inside">
                <li>Pure substance</li>
                <ul className="list-disc ml-8">
                    <li>Element</li>
                    <li>Compound</li>
                </ul>
                <li>Mixture</li>
                <ul className="list-disc ml-8">
                    <li>Homogeneous</li>
                    <li>Heterogeneous mixtures are</li>
                    <ul className="list-disc ml-8">
                        <li>Colloid</li>
                        <li>Suspension</li>
                    </ul>
                </ul>
            </ol>
            <p>
                Earlier, we talked about the atom and how atoms make up all of matter. Same types of atoms are called elements. An element consists of atoms that have the same atomic number, also known as the proton number. This is the simplest form of matter which cannot be broken down through chemical means. While a physical change alters the physical properties of a substance, a chemical change forms a new substance completely.
            </p>
            <p><strong>Element:</strong> The simplest form of matter made up of the same type of atoms.</p>
            <p>
                So we have learned that matter is made up of atoms, and the atoms that have the same proton number are called elements. The combination of these different elements makes up the diversity of objects we see around us. When two or more elements chemically combine, meaning undergo a chemical reaction to form a new substance, this is called a compound. As this is a completely new substance, it is completely different from the elements that were used to make it.
            </p>
            <p><strong>Compound:</strong> A substance formed when two or more different atoms chemically combine.</p>
            <p>
                Mixtures are the physical combinations of substances. A mixture does not contain the same types of particles. If you were to examine the chemical composition of the particles in a mixture, the particles would be chemically different from each other. Tea is an example of a mixture. Tea is made up of milk, water, tea leaves, and sugar, all of which have different chemical compositions.
            </p>
            <p><strong>Mixture:</strong> It is a substance formed when two or more substances physically combine.</p>
        </div>
    );
};

export default ElementsCompoundsMixtures;
