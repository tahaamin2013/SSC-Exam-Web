import Head from 'next/head';

const ChemicalEquations = () => {
  return (
    <>
      <Head>
        <title>Chemical Equations and Balancing</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">6.6 CHEMICAL EQUATION AND BALANCING</h1>

        <p className="mb-4">
          The symbolic representation of a chemical reaction is called a chemical equation. The reactants in a chemical equation are the substances that initiate the chemical reaction, and the products are the substances that are formed during the chemical reaction. Reactants are always written on the left of the equation and products on the right; an arrow between them is used to show the direction of the chemical change.
        </p>

        <p className="mb-4">
          For writing a chemical equation, follow these steps:
        </p>

        <ol className="list-decimal ml-8 mb-4">
          <li>Identify reactants and products and write the word equation for the reaction. Represent the chemical equation as follows:</li>
          <p className="ml-8 mb-4">
            Reactants &rarr; Products
          </p>
          <li>Write the symbols and formulae of reactants and products. Indicate their physical states in parentheses. Use <code>s</code> for solid, <code>l</code> for liquid, <code>g</code> for gas, and <code>aq</code> for aqueous.</li>
        </ol>

        <p className="mb-4">
          <strong>Example 6.11:</strong> The burning of coal is represented as follows:
        </p>

        <p className="mb-4">
          Coal + Oxygen &rarr; Carbon dioxide<br />
          <code>C + O₂ &rarr; CO₂</code>
        </p>

        <h2 className="text-2xl font-semibold mb-4">CONCEPT ASSESSMENT EXERCISE 6.6</h2>

        <p className="mb-4">
          Represent the following chemical reactions by chemical equations:
        </p>

        <ol className="list-decimal ml-8 mb-4">
          <li>Burning of hydrogen (H₂) to produce water.</li>
          <li>Burning of magnesium (Mg) to produce magnesium oxide (MgO).</li>
        </ol>

        <h2 className="text-2xl font-semibold mb-4">6.6.1 Balancing a Chemical Equation</h2>

        <p className="mb-4">
          A chemical reaction only changes the arrangements of atoms. The number of atoms remains the same. Count the number of atoms of each type in the following equation:
        </p>

        <p className="mb-4">
          <code>C + O₂ &rarr; CO₂</code><br />
          Reactants:<br />
          1 C-atom<br />
          2 O-atoms<br />
          Products:<br />
          1 C-atom<br />
          2 O-atoms<br />
          Note that the number of atoms of each type are the same on the reactant side and the product side. Such a chemical equation is called a balanced chemical equation. If the product chemical reaction is unbalanced, consider the following reaction:
        </p>

        <p className="mb-4">
          <code>CH₄ + O₂ &rarr; CO₂ + H₂O</code><br />
          Reactants:<br />
          1 C-atom<br />
          4 H-atoms<br />
          2 O-atoms<br />
          Products:<br />
          1 C-atom<br />
          2 H-atoms<br />
          3 O-atoms<br />
          C-atoms are balanced, but H and O atoms are unbalanced. Balance one element at a time. To balance the chemical equation, use coefficients. Always start with the lowest coefficient. Remember that you should not change subscripts in a chemical formula.
        </p>

        <p className="mb-4">
          Step 1: Put a coefficient 2 before H₂O to balance H-atoms.<br />
          <code>CH₄ + O₂ &rarr; CO₂ + 2H₂O</code>
        </p>

        <p className="mb-4">
          Step 2: Now balance O-atoms. There are 4 O-atoms on the left side and 4 O-atoms on the right side.<br />
          <code>CH₄ + 2O₂ &rarr; CO₂ + 2H₂O</code>
        </p>

        <p className="mb-4">
          Step 3: Now check the equation again; it is balanced.
        </p>

        <h2 className="text-2xl font-semibold mb-4">6.6.2 Exploring Ionic Equations</h2>

        <p className="mb-4">
          A chemical equation in which substances dissolved in water are written as individual ions is called an ionic equation. For example:
        </p>

        <p className="mb-4">
          <code>HCl(aq) + NaOH(aq) &rarr; NaCl(aq) + H₂O(l)</code><br />
          Write the substances that are soluble in water in their dissociated form.<br />
          <code>H⁺(aq) + Cl⁻(aq) + Na⁺(aq) + OH⁻(aq) &rarr; Na⁺(aq) + Cl⁻(aq) + H₂O(l)</code>
        </p>

        <p className="mb-4">
          Remove common ions from both sides. These ions do not actually take part in the chemical reaction and are called spectator ions. Write the net ionic equation.<br />
          <code>H⁺(aq) + OH⁻(aq) &rarr; H₂O(l)</code>
        </p>

        <p className="mb-4">
          <strong>Example 6.12:</strong> Transform the following chemical equations into ionic equations:
        </p>

        <ol className="list-decimal ml-8 mb-4">
          <li><code>Mg + H₂SO₄ &rarr; MgSO₄ + H₂</code></li>
          <li><code>Mg + H₂SO₄ &rarr; MgSO₄ + H₂</code></li>
        </ol>

        <h2 className="text-2xl font-semibold mb-4">CONCEPT ASSESSMENT EXERCISE 6.7</h2>

        <p className="mb-4">
          Transform the following chemical equations into ionic equations:
        </p>

        <ol className="list-decimal ml-8 mb-4">
          <li><code>AgNO₃ + NaCl &rarr; AgCl + NaNO₃</code></li>
          <li><code>Zn + 2HCl &rarr; ZnCl₂ + H₂</code></li>
        </ol>
      </div>
    </>
  );
}

export default ChemicalEquations;
