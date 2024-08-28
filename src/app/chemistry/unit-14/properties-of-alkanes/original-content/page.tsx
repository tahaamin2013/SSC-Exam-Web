import React from 'react';

const AlkaneProperties: React.FC = () => {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">14.3 PROPERTIES OF ALKANES</h1>
            <p className="mb-4">
                Alkane molecules are essentially non-polar. They are less dense than water and do not dissolve in it. Chemically, alkanes do not react with most ionic compounds. The lack of reactivity makes them useful solvents. For example, hexane is used to extract vegetable oils from corn, soybeans, cotton seeds, etc. Alkanes containing up to four carbon atoms are colourless and odourless gases. Alkanes, containing five to seventeen atoms, are colourless and odourless liquids. Higher alkanes are solids that are also colourless and odourless.
            </p>

            <h2 className="text-xl font-semibold mb-4">1. Halogenation</h2>
            <p className="mb-4">
                Although unreactive towards ionic substances, alkanes readily react with halogens in sunlight. A chemical reaction that takes place in the presence of sunlight is called a photochemical reaction.
            </p>
            <p className="mb-4">
                The reaction of an alkane and a halogen is a substitution reaction. In this reaction, a halogen atom substitutes for one or more of the hydrogen atoms of an alkane. For example, the reaction of methane and chlorine in diffused sunlight occurs as follows:
            </p>
            <pre className="bg-gray-100 p-4 rounded">
                CH₄(g) + Cl₂(g) → CHCl₃ + HCl<br />
                (diffused sunlight)<br />
                Chloromethane
            </pre>
            <p className="mb-4">
                In direct sunlight, the reaction of methane with chlorine is explosive and forms carbon and HCl:
            </p>
            <pre className="bg-gray-100 p-4 rounded">
                CH₄(g) + 2Cl₂(g) → C + 4HCl<br />
                (direct sunlight)
            </pre>

            <h2 className="text-xl font-semibold mb-4">2. Combustion</h2>
            <p className="mb-4">
                A reaction of a substance with oxygen or air that causes the rapid release of heat and the appearance of a flame is called combustion. Complete combustion of an alkane produces carbon dioxide, water, and heat. Most alkanes burn with a blue flame. For example, the following reaction occurs when natural gas is burned:
            </p>
            <pre className="bg-gray-100 p-4 rounded">
                CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g) + heat
            </pre>
            <p className="mb-4">
                The lighter alkanes are widely used as fuel. This is because:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>Their combustion can be controlled.</li>
                <li>They produce a large amount of heat per gram.</li>
                <li>They are cheap and readily available.</li>
            </ul>
            <p className="mb-4">
                Incomplete combustion occurs in the presence of a limited supply of oxygen. Incomplete combustion of methane gives CO, C, and H₂O:
            </p>
            <pre className="bg-gray-100 p-4 rounded">
                3CH₄(g) + 4O₂(g) → 2CO(g) + C(s) + 6H₂O(g)
            </pre>

            <h2 className="text-xl font-semibold mb-4">KEY POINTS</h2>
            <ul className="list-disc list-inside mb-4">
                <li>Hydrocarbons are compounds that contain carbon and hydrogen only.</li>
                <li>The simplest hydrocarbon that is possible is CH₄.</li>
                <li>Alkanes are generally unreactive.</li>
                <li>Alkanes are saturated hydrocarbons.</li>
                <li>In a substitution reaction, one atom or a group of atoms is replaced by another atom or a group of atoms.</li>
                <li>Addition of a hydrogen molecule in an unsaturated hydrocarbon is called hydrogenation.</li>
            </ul>

            <h2 className="text-xl font-semibold mb-4">References for Additional Information</h2>
            <ul className="list-disc list-inside mb-4">
                <li>Longman Chemistry for IGCSE</li>
                <li>Chemistry, Addison, Wesley, Fifth Edition</li>
            </ul>
        </div>
    );
};

export default AlkaneProperties;
