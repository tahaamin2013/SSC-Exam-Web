import React from 'react';

const BondEnergy = () => {
  return (
    <div className="bg-white text-black min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Energetics</h1>

        <h2 className="text-2xl font-semibold mb-4">8.4 BOND ENERGY AND BOND DISSOCIATION ENERGY</h2>
        <p className="mb-4">
          When a chemical reaction occurs, old bonds are broken and new bonds are formed. Breaking bonds always requires energy, and forming a bond always releases energy. The amount of energy required to break one mole of a particular bond to form neutral atoms is called the bond dissociation energy. In contrast, the amount of energy released when neutral atoms form one mole of a bond is called bond energy. The difference between the bond dissociation energy and the bond energy determines whether the reaction absorbs or releases energy.
        </p>
        <p className="mb-4">
          The enthalpy change in a chemical reaction is the sum of energies absorbed and released in bond breaking and bond forming:
        </p>
        <pre className="bg-gray-100 p-4 rounded mb-4">
          ΔH° = Sum of bond dissociation energies of reactants - Sum of bond energies of products
        </pre>

        <h3 className="text-xl font-semibold mb-4">Example 8.1: Calculate the enthalpy of the reaction between hydrogen and iodine to form hydrogen iodide from the given bond energy data.</h3>
        <p className="mb-4">
          Bond energy of H-H, I-I, and H-I bonds are 436 kJ/mol, 151 kJ/mol, and 299 kJ/mol respectively.
        </p>
        <p className="mb-4">
          <strong>Problem Solving Strategy:</strong>
          <ol className="list-decimal pl-6 mb-4">
            <li>Write the balanced chemical equation.</li>
            <li>Show all the reactants and the products in the gaseous state.</li>
            <li>Substitute the relevant bond energy values in the formula and solve.</li>
          </ol>
        </p>
        <pre className="bg-gray-100 p-4 rounded mb-4">
          ΔH° = Sum of bond dissociation energies of reactants - Sum of bond energies of products
          ΔH° = [B.E of H-H + B.E. of I-I] - [2 × B.E of H-I]
          ΔH° = [436 + 151] - [2 × 299]
          ΔH° = 587 - 598
          ΔH° = -11 kJ/mol
        </pre>
        <p className="mb-4">
          Note that the enthalpy of reaction calculated using bond energy data is often different from values determined experimentally.
        </p>

        <h3 className="text-xl font-semibold mb-4">CONCEPT ASSESSMENT EXERCISE 8.2</h3>
        <p className="mb-4">
          Example: Calculate the enthalpy of the following reaction from the given bond energy data. Bond energy of H-H, F-F, and H-F bonds are 436 kJ/mol, 155 kJ/mol, and 567 kJ/mol respectively.
        </p>
      </div>
    </div>
  );
};

export default BondEnergy;