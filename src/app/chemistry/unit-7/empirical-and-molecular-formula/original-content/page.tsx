export default function Unit06Stoichiometry() {
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">UNIT 06: STOICHIOMETRY</h1>

            <h2 className="text-2xl font-semibold mb-2">Student Learning Outcomes (SLOS)</h2>
            <ul className="list-disc ml-6 mb-4">
                <li>State the formulae of common elements and compounds.</li>
                <li>Define molecular formula of a compound as the number and type of different atoms in one molecule.</li>
                <li>Define empirical formula of a compound as the simplest whole number ratio of different atoms in a molecule.</li>
                <li>Deduce the formula and name of a binary compound from ions given relevant information.</li>
                <li>Deduce the formula of a molecular substance from a given structure of molecules.</li>
                <li>Use the relationship amount of substance = mass/molar mass to calculate number of moles, mass, molar mass, relative mass (atomic/molecular/formula) and number of particles.</li>
                <li>Define mole as amount of substance containing Avogadro&apos;s number (6.022 x 10<sup>23</sup>) of particles.</li>
                <li>Explain the relationship between a mole and Avogadro&apos;s constant.</li>
                <li>Construct chemical equations and ionic equations to show reactants forming products, including state symbols.</li>
                <li>Deduce the symbol equation with state symbols for a chemical reaction given relevant information.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-2">INTRODUCTION</h2>
            <p className="mb-4">
                What are the simplest components of wood, rocks, and living organisms? This is an age-old question. Ancient Greek philosophers believed that everything was made of an elemental substance. Some believed that substance to be water, others thought it was air, and some believed there were four elemental substances.
            </p>
            <p className="mb-4">
                As the 19th century began, John Dalton proposed an atomic theory. This theory led to rapid progress in chemistry. By the end of the century, however, further observations exposed the need for a different atomic theory. The 20th century brought a complex picture of an atom with an intricate internal structure.
            </p>
            <p className="mb-4">
                A major goal of this chapter is to acquaint you with the fundamental concepts about matter. In this chapter, you will learn some basic definitions to understand matter. This knowledge will help you in grade XI.
            </p>

            <h2 className="text-2xl font-semibold mb-2">6.1 EMPIRICAL FORMULA AND MOLECULAR FORMULA</h2>
            <p className="mb-4">
                Remember that the chemical formula of a compound tells you which elements it contains and the whole number ratio of those atoms. In a chemical formula, the elemental symbol and numerical subscripts indicate the type and number of each atom in the compound. The compound has several chemical formulas. Learn about the two types of chemical formulas.
            </p>

            <h3 className="text-xl font-semibold mb-2">6.1.1 Empirical Formula</h3>
            <p className="mb-4">
                The empirical formula of a compound is the chemical formula that gives the simplest integer ratio of the atoms of each element. For example, the compound hydrogen peroxide has one H atom for every O atom. Therefore, the simplest ratio of hydrogen to oxygen is 1:1. The empirical formula for hydrogen peroxide is therefore written as HO.
            </p>
            <p className="mb-4">
                The simplest ratio between C, H, and O atoms in glucose is 1:2:1. What is the empirical formula of glucose?
            </p>

            <h3 className="text-xl font-semibold mb-2">6.1.2 Molecular Formula</h3>
            <p className="mb-4">
                A molecular formula is an expression that specifies the number of atoms of each element in one molecule of a compound. This shows the actual number of atoms in each molecule. For example, the molecular formula of hydrogen peroxide is H₂O₂. It shows that each molecule of hydrogen peroxide is made up of two hydrogen atoms and two oxygen atoms. Similarly, C₆H₁₂O₆ is the molecular formula of glucose. It shows that every molecule of glucose has 6 carbon atoms, 12 hydrogen atoms, and 6 oxygen atoms. The molecular formula of a compound shows the simplest ratio between different atoms present in the compound.
            </p>
            <p className="mb-4">
                Benzene is a compound of carbon and hydrogen. It contains one C atom for every H atom. Each benzene molecule actually has six carbon atoms and six hydrogen atoms. Identify the empirical and molecular formulas of benzene from the following formulas:
                <br />
                CH <br />
                C<sub>6</sub>H<sub>6</sub>
            </p>
            <p className="mb-4">
                Molecular formulas for water and carbon dioxide are H₂O and CO₂, respectively. What are the empirical formulas for these compounds?
            </p>
            <p className="mb-4">
                For many compounds, empirical and molecular formulas are the same. For example, water (H₂O), carbon dioxide (CO₂), ammonia (NH₃), methane (CH₄), sulfur dioxide (SO₂), etc. Can you show why?
            </p>

            <h4 className="text-lg font-semibold mb-2">Table 6.1 Formulae of Some Common Elements and Compounds</h4>
            <table className="min-w-full divide-y divide-gray-200 mb-4">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Element/Compound</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Formula</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-4 py-2 text-sm text-gray-900">Hydrogen</td>
                        <td className="px-4 py-2 text-sm text-gray-900">H₂</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 text-sm text-gray-900">Water</td>
                        <td className="px-4 py-2 text-sm text-gray-900">H₂O</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 text-sm text-gray-900">Oxygen</td>
                        <td className="px-4 py-2 text-sm text-gray-900">O₂</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 text-sm text-gray-900">Carbon Dioxide</td>
                        <td className="px-4 py-2 text-sm text-gray-900">CO₂</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 text-sm text-gray-900">Nitrogen</td>
                        <td className="px-4 py-2 text-sm text-gray-900">N₂</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 text-sm text-gray-900">Hydrochloric Acid</td>
                        <td className="px-4 py-2 text-sm text-gray-900">HCl</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 text-sm text-gray-900">Fluorine</td>
                        <td className="px-4 py-2 text-sm text-gray-900">F₂</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 text-sm text-gray-900">Sodium Hydroxide</td>
                        <td className="px-4 py-2 text-sm text-gray-900">NaOH</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 text-sm text-gray-900">Chlorine</td>
                        <td className="px-4 py-2 text-sm text-gray-900">Cl₂</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 text-sm text-gray-900">Copper (II) Sulfate</td>
                        <td className="px-4 py-2 text-sm text-gray-900">CuSO₄</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 text-sm text-gray-900">Glucose</td>
                        <td className="px-4 py-2 text-sm text-gray-900">C₆H₁₂O₆</td>
                    </tr>
                </tbody>
            </table>

            <h4 className="text-lg font-semibold mb-2">CONCEPT ASSESSMENT EXERCISE 6.1</h4>
            <p className="mb-4">Write the empirical formulas for the compound containing carbon to hydrogen in the following ratios:</p>
            <ul className="list-disc ml-6 mb-4">
                <li>(a) 1:4</li>
                <li>(b) 2:6</li>
                <li>(c) 2:2</li>
                <li>(d) 6:6</li>
            </ul>

            <h4 className="text-lg font-semibold mb-2">CONCEPT ASSESSMENT EXERCISE 6.2</h4>
            <ol className="list-decimal ml-6 mb-4">
                <li>Aspirin is used as a mild pain killer. There are nine carbon atoms, eight hydrogen atoms, and four oxygen atoms in this compound. Write its empirical and molecular formulas.</li>
                <li>Vinegar is 5% acetic acid. It contains 2 carbon atoms, four hydrogen atoms, and 2 oxygen atoms. Write its empirical and molecular formulas.</li>
                <li>Caffeine (C₈H₁₀N₄O₂) is found in tea and coffee. Write the empirical formula for caffeine.</li>
            </ol>
        </div>
    );
}
