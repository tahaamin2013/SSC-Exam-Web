import Head from 'next/head';

const MolecularAndStructuralFormula = () => {
    return (
        <>
            <Head>
                <title>Molecular and Structural Formula</title>
            </Head>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">6.7 MOLECULAR AND STRUCTURAL FORMULA</h1>

                <p className="mb-4">
                    A structural formula of a compound shows the arrangement of atoms present in it. Whereas a molecular formula shows the number of atoms of each element. For example:
                </p>

                <p className="mb-4">
                    Structural formula of n-Butane is <code>CH₃-CH₂-CH₂-CH₃</code> and its molecular formula is <code>C₄H₁₀</code>.
                </p>

                <p className="mb-4">
                    How can you write the molecular formula of a compound from its structural formula? Follow these steps:
                </p>

                <ol className="list-decimal ml-8 mb-4">
                    <li>Identify different types of elements present in the structural formula.</li>
                    <li>Write symbols of these elements side by side in a line.</li>
                    <li>Count the number of atoms of each element from the structural formula.</li>
                    <li>Show this number of atoms as subscripts of the symbol of the corresponding element.</li>
                </ol>

                <p className="mb-4">
                    <strong>Example 6.13:</strong> Writing the molecular formula of the following compound:
                </p>

                <p className="mb-4">
                    <code>CH₃-CH₂-CH₂-OH</code>
                </p>

                <p className="mb-4">
                    <strong>Solution:</strong> <code>C₃H₇OH</code>
                </p>

                <h2 className="text-2xl font-semibold mb-4">CONCEPT ASSESSMENT EXERCISE 6.8</h2>

                <p className="mb-4">
                    Write the molecular formulae of the following compounds:
                </p>

                <ol className="list-decimal ml-8 mb-4">
                    <li><code>CH₃-CH₂-OH</code></li>
                    <li><code>CH₃-CH₂-CH₂-NH₂</code></li>
                    <li><code>CH₃-CO-CH₃</code></li>
                </ol>

                <h2 className="text-2xl font-semibold mb-4">KEY POINTS</h2>

                <ul className="list-disc ml-8 mb-4">
                    <li>Chemistry is the science of materials of the universe.</li>
                    <li>The branch of Chemistry that deals with laws and theories to understand the structure and changes of matter is called Physical Chemistry.</li>
                    <li>An element is a substance all the atoms of which have the same atomic number.</li>
                    <li>A compound consists of two or more elements held together in fixed proportions by chemical bonds.</li>
                    <li>Chemical formula of a compound that gives the simplest whole-number ratio between atoms is called empirical formula.</li>
                    <li>Molecular formula of a compound gives the exact number of atoms present in a molecule.</li>
                    <li>Molecular mass is the sum of atomic masses of all the atoms present in the molecule.</li>
                    <li>The number of representative particles in one mole of the substance is known as Avogadro&apos;s number.</li>
                    <li>The amount of matter that contains as many atoms, ions or molecules as the number of atoms in exactly 12g of C-12 is called mole. Mole can also be defined as atomic mass, molecular mass or formula mass expressed in grams.</li>
                    <li>Atomic mass of an element expressed in grams is called gram atomic mass.</li>
                    <li>Molecular mass of an element or a compound expressed in grams is its gram molecular mass.</li>
                    <li>Gram formula mass is the formula mass of a substance in grams.</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4">References for Additional Information</h2>

                <ul className="list-disc ml-8 mb-4">
                    <li>Zumdahl, Introductory Chemistry.</li>
                    <li>Raymond Chang, Essential Chemistry.</li>
                </ul>
            </div>
        </>
    );
}

export default MolecularAndStructuralFormula;
