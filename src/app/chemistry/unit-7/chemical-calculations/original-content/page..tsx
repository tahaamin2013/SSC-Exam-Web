import Head from 'next/head';

const ChemicalCalculations = () => {
    return (
        <>
            <Head>
                <title>Chemical Calculations</title>
            </Head>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">6.5 CHEMICAL CALCULATIONS</h1>

                <p className="mb-4">
                    In this section, you will learn about the chemical calculations based on the concept of mole and Avogadro's number.
                </p>

                <h2 className="text-2xl font-semibold mb-4">6.5.1 Mole-Mass Calculations</h2>

                <p className="mb-4">
                    We know that molecular mass is the sum of atomic masses of all the atoms present in one molecule. The molecular mass expressed in grams is known as molar mass and has the same numerical value as the molecular mass of the substance. We can use this information to calculate the mass of one mole of a substance.
                </p>

                <p className="mb-4">
                    <strong>Example 6.3:</strong> Calculate the mass of one mole of each of the following substances:
                </p>

                <ul className="list-disc ml-8 mb-4">
                    <li>(a) Sodium (Na)</li>
                    <li>(b) Nitrogen (N₂)</li>
                    <li>(c) Sucrose (C₁₂H₂₂O₁₁)</li>
                </ul>

                <p className="mb-4">
                    <strong>Solution:</strong>
                </p>

                <ul className="list-disc ml-8 mb-4">
                    <li>(a) Atomic mass of Na = 23 amu</li>
                    <li>Molar mass = 23 g mol⁻¹</li>
                    <li>Mass of 1 mole of Na = 23 g</li>
                    <li>(b) Molecular mass of N₂ = 28 amu</li>
                    <li>Molar mass = 28 g mol⁻¹</li>
                    <li>Mass of 1 mole of N₂ = 28 g</li>
                    <li>(c) Molecular mass of sucrose (C₁₂H₂₂O₁₁) = 342 amu</li>
                    <li>Molar mass = 342 g mol⁻¹</li>
                    <li>Mass of 1 mole of sucrose = 342 g</li>
                </ul>

                <p className="mb-4">
                    The calculations above show the mass of one mole of each substance, which is directly related to its atomic or molecular mass.
                </p>

                <h2 className="text-2xl font-semibold mb-4">6.5.2 Mole-Volume Calculations</h2>

                <p className="mb-4">
                    The volume of a gas depends on temperature and pressure. At standard temperature and pressure (STP), one mole of any gas occupies 22.4 liters. This volume is called the molar volume of a gas.
                </p>

                <p className="mb-4">
                    <strong>Example 6.4:</strong> Calculate the volume of 0.5 moles of oxygen gas at STP.
                </p>

                <p className="mb-4">
                    <strong>Solution:</strong> The volume of 1 mole of oxygen gas at STP is 22.4 liters. Therefore, the volume of 0.5 moles of oxygen gas is:
                </p>

                <p className="mb-4">
                    Volume = 0.5 moles × 22.4 liters/mole = 11.2 liters
                </p>

                <h2 className="text-2xl font-semibold mb-4">CONCEPT ASSESSMENT EXERCISE</h2>

                <p className="mb-4">
                    Try the following questions to assess your understanding of chemical calculations:
                </p>

                <ol className="list-decimal ml-8 mb-4">
                    <li>Calculate the number of moles in 50 g of NaOH.</li>
                    <li>Determine the mass of 0.5 moles of CO₂.</li>
                    <li>If you have 2.5 moles of H₂O, what is its mass?</li>
                    <li>Calculate the volume of 1 mole of nitrogen gas at STP.</li>
                </ol>

                <p className="mb-4">
                    These questions will help you apply the concepts you have learned in this section.
                </p>
            </div>
        </>
    );
}

export default ChemicalCalculations;
