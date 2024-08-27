// pages/organic-chemistry.tsx

import React from 'react';

const OrganicChemistry: React.FC = () => {
    return (
        <div className="p-6">
        
            <h2 className="text-xl font-semibold mb-2">13.2 Homologous Series</h2>
            <p className="mb-4">
                There exists a close relationship between different organic compounds. This similarity in behavior has made the study of millions of organic compounds easier. They can be classified into few families. A series of related compounds in which any two adjacent molecules differ by -CH₂- group is called homologous series. For example, consider alkanes;
            </p>
            <p className="mb-4">
                CH₄ <br />
                CH₃-CH₃ <br />
                CH₃-CH₂-CH₃ <br />
                CH₃-CH₂-CH₂-CH₃ <br />
                Methane <br />
                Ethane <br />
                Propane <br />
                Butane <br />
                Note the difference between adjacent alkanes, they differ by the same unit -CH₂-. This means you can represent next member by simply adding -CH₂- unit. A series of related compounds in which adjacent member differ by -CH₂- is called a homologous series. Similarly alcohols also form homologous series.
            </p>
            <p className="mb-4">
                CH₃-OH <br />
                CH₃-CH₂-OH <br />
                CH₃-CH₂-CH₂-OH <br />
                Methanol <br />
                Ethanol <br />
                Propanol <br />
                These compounds also differ by the same unit -CH₂-. All the classes of organic compounds including alkanes, alkenes, alkynes, alcohols, aldehydes, ketones, carboxylic acids etc. form homologous series.
            </p>

            <h3 className="text-lg font-semibold mb-2">13.2.1 General Characteristics of a Homologous Series</h3>
            <ul className="list-disc list-inside mb-4">
                <li>The family members of a homologous series have the same functional group.</li>
                <li>The family members have same general formula.</li>
                <li>The adjacent family members differ by a -CH₂- unit.</li>
                <li>The family members display a trend in their physical properties.</li>
                <li>The family members possess similar chemical properties.</li>
            </ul>
            <p className="mb-4">
                Table 13.1 shows the general formulae of some homologous series
            </p>
            <table className="min-w-full border-collapse border border-gray-200 mb-4">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">Homologous series</th>
                        <th className="border border-gray-300 px-4 py-2">General formula</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">Alkanes</td>
                        <td className="border border-gray-300 px-4 py-2">CₙH₂ₙ₊₂</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">Alkenes</td>
                        <td className="border border-gray-300 px-4 py-2">CₙH₂ₙ</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">Alkynes</td>
                        <td className="border border-gray-300 px-4 py-2">CₙH₂ₙ₋₂</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">Alcohols</td>
                        <td className="border border-gray-300 px-4 py-2">CₙH₂ₙ₊₁OH</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">Carboxylic acids</td>
                        <td className="border border-gray-300 px-4 py-2">CₙH₂ₙ₊₁COOH</td>
                    </tr>
                </tbody>
            </table>

            <p className="mb-4">
                From the general formula you can easily determine the molecular formula of any member of the series. For examples,
            </p>
            <p className="mb-4">
                Alkanes have general formula CₙH₂ₙ₊₂ which can be used to determine the molecular formula for any member of alkane series by putting number of carbon atoms in the general formula.
            </p>
            <p className="mb-4">
                Examples:
            </p>
            <p className="mb-4">
                Methane <br />
                C₁H₄ <br />
                Ethane <br />
                C₂H₆ <br />
                Propane <br />
                C₃H₈ <br />
                Note that n=1 for methane, n=2 for ethane and n=3 for propane
            </p>
            <p className="mb-4">
                Alkenes have general formula CₙH₂ₙ which can be used to determine the molecular formula for any member of alkene series.
            </p>
            <p className="mb-4">
                Examples:
            </p>
            <p className="mb-4">
                Ethene <br />
                C₂H₄ <br />
                Note that n=2
            </p>
            <p className="mb-4">
                Alcohols have general formula CₙH₂ₙ₊₁OH which can be used to determine the molecular formula for any member of alcohol series.
            </p>
            <p className="mb-4">
                Examples:
            </p>
            <p className="mb-4">
                Methanol <br />
                C₁H₃OH <br />
                Note that n=1
            </p>

            <h2 className="text-xl font-semibold mb-2">CONCEPT ASSESSMENT EXERCISE 13.1</h2>
            <p className="mb-4">
                Write the molecular formulae of the following compounds using general formulae
            </p>
            <ol className="list-decimal list-inside mb-4">
                <li>Alkane containing <br />
                    (i) 4 carbon atoms <br />
                    (ii) 6 carbon atoms
                </li>
                <li>Alkene containing <br />
                    (i) 3 carbon atoms <br />
                    (ii) 4 carbon atoms
                </li>
                <li>Alkyne containing <br />
                    (i) 3 carbon atoms <br />
                    (ii) 4 carbon atoms
                </li>
                <li>Alcohol containing <br />
                    (i) 2 carbon atoms <br />
                    (ii) 3 carbon atoms
                </li>
            </ol>

           

        </div>
    );
};

export default OrganicChemistry;
