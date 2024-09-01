import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from "next/image";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
        Chemical Equations and Balancing        </h1>
        <PlantUMLDiagram
          code={`
@startmindmap
*[#LightBlue] Chemical Equations and Balancing
** Definition
*** Symbolic representation of a chemical reaction
*** Reactants → Products
** Writing Chemical Equations
*** Step 1: Word equation
*** Step 2: Symbols and formulae
**** Physical states in parentheses
***** (s) for solid
***** (l) for liquid
***** (g) for gas
***** (aq) for aqueous
*** Example: Burning of Coal
**** C + O2 → CO2
** Balancing Chemical Equations
*** Principle
**** Number of atoms remains the same
**** Same number of each atom type on both sides
*** Steps for Balancing
**** Balance one element at a time
**** Use coefficients, not subscripts
**** Start with the lowest coefficient
*** Example: CH4 + O2 → CO2 + H2O
**** Step 1: Balance H atoms
**** Step 2: Balance O atoms
**** Step 3: Check final equation
** Ionic Equations
*** Definition
**** Substances in water written as individual ions
*** Steps
**** Write dissociated forms of soluble substances
**** Remove spectator ions
**** Write net ionic equation
*** Example
**** HCl(aq) + NaOH(aq) → NaCl(aq) + H2O(l)
**** Net: H+(aq) + OH-(aq) → H2O(l)
** Concept Assessment Exercises
*** Writing chemical equations
**** Burning of hydrogen
**** Burning of magnesium
*** Transforming to ionic equations
**** AgNO3 + NaCl reaction
**** Zn + HCl reaction
@endmindmap`}
        />
      </section>

      <div className="p-6 bg-white text-gray-900 border border-gray-200 rounded-lg shadow-md">
  <h2 className="text-3xl font-bold mb-4">Chemical Equations and Balancing</h2>

  <p className="text-lg mb-4"><strong>Definition:</strong></p>
  <p className="mb-4">
    A chemical equation is the symbolic representation of a chemical reaction.<br />
    <strong>Reactants:</strong> Substances initiating the reaction (left side of equation)<br />
    <strong>Products:</strong> Substances formed during the reaction (right side of equation)<br />
    Arrow (→) indicates the direction of chemical change
  </p>

  <h3 className="text-2xl font-semibold mb-4">Writing a Chemical Equation:</h3>
  <p className="mb-4"><strong>Step 1:</strong> Identify reactants and products, write a word equation</p>
  <p className="mb-4"><strong>Step 2:</strong> Write symbols and formulae, indicate physical states</p>
  <ul className="list-disc pl-5 mb-4">
    <li><strong>(s)</strong> for solid</li>
    <li><strong>(l)</strong> for liquid</li>
    <li><strong>(g)</strong> for gas</li>
    <li><strong>(aq)</strong> for aqueous</li>
  </ul>

  <p className="text-lg font-medium mb-4"><strong>Example: Burning of Coal</strong></p>
  <p className="mb-4">Word equation: Coal + Oxygen → Carbon Dioxide</p>
  <p className="mb-4">Chemical equation: C + O₂ → CO₂</p>

  <h3 className="text-2xl font-semibold mb-4">Balancing a Chemical Equation:</h3>
  <p className="mb-4"><strong>Principle:</strong> Number of atoms remains the same, only arrangement changes</p>
  <p className="mb-4"><strong>Example of Balanced Equation:</strong> C + O₂ → CO₂</p>
  <p className="mb-4"><strong>Steps for Balancing:</strong></p>
  <ul className="list-disc pl-5 mb-4">
    <li>Balance one element at a time using coefficients</li>
    <li>Start with the lowest coefficient</li>
    <li>Do not change subscripts in chemical formulas</li>
  </ul>

  <p className="text-lg font-medium mb-4"><strong>Example of Balancing:</strong></p>
  <p className="mb-4"><strong>Unbalanced:</strong> CH₄ + O₂ → CO₂ + H₂O</p>
  <p className="mb-4">Step 1: CH₄ + O₂ → CO₂ + 2H₂O (balance H atoms)</p>
  <p className="mb-4">Step 2: CH₄ + 2O₂ → CO₂ + 2H₂O (balance O atoms)</p>
  <p className="mb-4"><strong>Final Balanced Equation:</strong> CH₄ + 2O₂ → CO₂ + 2H₂O</p>

  <h3 className="text-2xl font-semibold mb-4">Ionic Equations:</h3>
  <p className="mb-4"><strong>Definition:</strong> Chemical equation where substances dissolved in water are written as individual ions</p>
  <p className="mb-4"><strong>Steps:</strong></p>
  <ul className="list-disc pl-5 mb-4">
    <li>Write soluble substances in dissociated form</li>
    <li>Remove spectator ions (common ions on both sides)</li>
  </ul>
  <p className="mb-4"><strong>Example:</strong></p>
  <p className="mb-4">Reaction: HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)</p>
  <p className="mb-4">Dissociated: H⁺(aq) + Cl⁻(aq) + Na⁺(aq) + OH⁻(aq) → Na⁺(aq) + Cl⁻(aq) + H₂O(l)</p>
  <p className="mb-4"><strong>Net Ionic Equation:</strong> H⁺(aq) + OH⁻(aq) → H₂O(l)</p>

  <h3 className="text-2xl font-semibold mb-4">Practice Exercises:</h3>
  <ul className="list-disc pl-5">
    <li>Writing chemical equations for given reactions</li>
    <li>Balancing chemical equations</li>
    <li>Transforming chemical equations into ionic equations</li>
  </ul>

  <p className="mt-6 text-lg font-medium"><strong>Note:</strong> This content covers the basics of chemical equations, balancing, and ionic equations. It provides a foundation for understanding chemical reactions and their symbolic representations.</p>
</div>

    </div>
  );
};

export default MagneticMindmap;
