// pages/unit06.js

import React from 'react';

export default function Unit06() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">UNIT 06</h1>
      <h2 className="text-xl font-semibold mb-3">STOICHIOMETRY</h2>

      <div className="mb-6">
        <h3 className="text-lg font-semibold">Student Learning Outcomes (SLOS)</h3>
        <p className="mb-2">After completing this lesson, the student will be able to:</p>
        <ul className="list-disc pl-5">
          <li>State the formulae of common elements and compounds.</li>
          <li>Define molecular formula of a compound as the number and type of different atoms in one molecule.</li>
          <li>Define empirical formula of a compound as the simplest whole number ratio of different atoms in a molecule.</li>
          <li>Deduce the formula and name of a binary compound from ions given relevant information.</li>
          <li>Deduce the formula of a molecular substance from a given structure of molecules.</li>
          <li>Use the relationship amount of substance = mass/molar mass to calculate number of moles, mass, molar mass, relative mass (atomic/molecular/formula) and number of particles.</li>
          <li>Define mole as amount of substance containing Avogadro&apos;s number (6.022 x 10&quot;) of particles.</li>
          <li>Explain the relationship between a mole and Avogadro&apos;s constant.</li>
          <li>Construct chemical equations and ionic equations to show reactants forming products, including state symbols.</li>
          <li>Deduce the symbol equation with state symbols for a chemical reaction given relevant information.</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold">INTRODUCTION</h3>
        <p className="mb-2">what are the simplest components of wood, rocks and living organisms? This is an age-old question. Ancient Greek Philosophers believed that everything was made of an elemental substance. Some believed that substance to be water, other thought it was air. Some other believed that there were four elemental substances.</p>
        <p className="mb-2">As 19" century began, John Dalton proposed an atomic theory. This theory led to rapid progress in chemistry. By the end of the century however, further observations exposed the need for a different atomic theory. 20&quot; century led to a picture of an atom with a complex internal structure.</p>
        <p className="mb-2">A major goal of this chapter is to acquaint you with the fundamental concepts about matter. In this chapter you will learn some basic definitions to understand matter. This knowledge will help you in grade XI.</p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold">6.1 EMPIRICAL FORMULA AND MOLECULAR FORMULA</h3>
        <p className="mb-2">Remember that the chemical formula of a compound tells you which elements it contains and the whole number ratio of those atoms. In a chemical formula, the elemental symbol and numerical subscripts indicate the type and number of each atom in the compound. The compound has several chemical formulas. Learn about the two types of chemical formulas.</p>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold">6.1.1 Empirical Formula</h4>
        <p className="mb-2">The empirical formula of a compound is the chemical formula that gives the simplest integer ratio of the atoms of each element. For example, the compound hydrogen peroxide has one H atom for every O atom. Therefore, the simplest ratio of hydrogen to oxygen is 1:1. The empirical formula for hydrogen peroxide is therefore written as HO.</p>
        <p className="mb-2">The simplest ratio between C, H and O atoms in glucose is 1: 2: 1. What is the empirical formula of glucose?</p>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold">6.1.2 Molecular Formula</h4>
        <p className="mb-2">A molecular formula is an expression that specifies the number of atoms of each element in one molecule of a compound. This shows the actual number of atoms in each molecule. For example, the molecular formula of hydrogen peroxide is H₂O,. It shows that each molecule of hydrogen peroxide is made up of two hydrogen atoms and two atoms of oxygen. Similarly C₂H₂O, is molecular formula of glucose. It shows that every molecule of glucose has 6 carbon atoms, 12 hydrogen atoms and 6 oxygen atoms. The molecular formula of a compound shows the simplest ratio between different atoms present in the compound.</p>
        <p className="mb-2">Benzene is a compound of carbon and hydrogen. It contains one C atom for every H atom. Each benzene molecule actually has six carbon atoms and six hydrogen atoms. Identify the empirical and molecular formulas of benzene from the following formulas.</p>
        <p className="mb-2">CH<br />CH</p>
        <p className="mb-2">Molecular formulas for water and carbon dioxide are H₂O and CO, respectively. What are empirical formulas for these compounds?</p>
        <p className="mb-2">For many compounds, empirical and molecular formulas are same. For example water (H₂O), carbon dioxide (CO,) ammonia (NH,), methane (CH,), sulphur dioxide (SO,) etc. Can you show it why?</p>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold">Table 6.1 Formulae of some common elements and compounds</h4>
        <table className="table-auto w-full mb-4">
          <thead>
            <tr>
              <th className="border px-4 py-2">Element</th>
              <th className="border px-4 py-2">Formula</th>
              <th className="border px-4 py-2">Compound</th>
              <th className="border px-4 py-2">Formula</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Hydrogen</td>
              <td className="border px-4 py-2">H₂</td>
              <td className="border px-4 py-2">Water</td>
              <td className="border px-4 py-2">H₂O</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Oxygen</td>
              <td className="border px-4 py-2">O₂</td>
              <td className="border px-4 py-2">Carbon dioxide</td>
              <td className="border px-4 py-2">CO₂</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Nitrogen</td>
              <td className="border px-4 py-2">N₂</td>
              <td className="border px-4 py-2">Hydrochloric acid</td>
              <td className="border px-4 py-2">HCL</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Fluorine</td>
              <td className="border px-4 py-2">F₂</td>
              <td className="border px-4 py-2">Sodium hydroxide</td>
              <td className="border px-4 py-2">NaOH</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Chlorine</td>
              <td className="border px-4 py-2">Cl₂</td>
              <td className="border px-4 py-2">Copper (II) sulphate</td>
              <td className="border px-4 py-2">CuSO₄</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Bromine</td>
              <td className="border px-4 py-2">Br₂</td>
              <td className="border px-4 py-2">Glucose</td>
              <td className="border px-4 py-2">C₆H₁₂O₆</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold">6.2 MOLECULAR MASS AND FORMULA MASS</h3>
        <p className="mb-2">Molecular mass is the sum of the atomic masses of all the atoms present in the molecule. All you have to do is to add up the atomic masses of all the atoms in the compound. For example, Molecular mass of water H₂O = 2(atomic mass of H) + atomic mass of oxygen 2(1.008)+16.00 = 2.016+16.00 = 18.016amu</p>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold">Example 6.1: Determining molecular mass</h4>
        <ol className="list-decimal pl-5">
          <li>Determine the molecular mass of glucose C₆H₁₂O₆, which is also known as blood sugar.</li>
          <li>Determine the molecular mass of naphthalene C₁₀H₈, which is used in mothballs.</li>
        </ol>
        <p className="mb-2">Problem solving strategy:<br />Multiply atomic masses of carbon, hydrogen and oxygen by their subscripts and add.</p>
        <p className="mb-2">Solution:</p>
        <ul className="list-disc pl-5">
          <li>Molecular mass of C₆H₁₂O₆ = 6(12.00) + 12(1.008) + 6(16.00) = 180.096 amu</li>
          <li>Molecular mass of C₁₀H₈ = 10(12.00) + 8(1.008) = 128.00 amu</li>
        </ul>
        <p className="mb-2">The term molecular mass is used for molecular compounds. Whereas, the term formula mass is used for ionic compounds. Ionic compounds consist of arrays of oppositely charged ions rather than separate molecules. So we represent an ionic compound by its formula unit. A formula unit indicates the simplest ratio between cations and anions in an ionic compound. For example, the common salt consists of Na⁺ and Cl⁻ ions. It has one Na⁺ ion for every Cl⁻ ion. So formula unit for common salt is NaCl.</p>
        <p className="mb-2">The sum of the atomic masses of all the atoms in the formula unit of a substance is called formula mass.</p>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold">Example 6.2: Determining formula mass</h4>
        <ol className="list-decimal pl-5">
          <li>Sodium Chloride, also called as table salt is used to flavour food, preserve meat, and in the preparation of large number of compounds. Determine its formula mass.</li>
          <li>Milk of magnesia which contains Mg(OH)₂, is used to treat acidity. Determine its formula mass.</li>
        </ol>
        <p className="mb-2">Problem solving strategy:<br />Add the atomic masses of all the atoms in the formula unit.</p>
        <p className="mb-2">Solution:</p>
        <ul className="list-disc pl-5">
          <li>Formula mass of NaCl = 1 x Atomic mass of Na + 1 x Atomic mass of Cl = 23 + 35.5 = 58.5 amu</li>
          <li>Formula mass of Mg(OH)₂ = 24 + 16 x 2 + 1 x 2 = 24 + 32 + 2 = 58 amu</li>
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold">CONCEPT ASSESSMENT EXERCISE 6.3</h4>
        <ol className="list-decimal pl-5">
          <li>Potassium Chlorate (KClO₃) is used commonly for the laboratory preparation of oxygen gas. Calculate its formula mass.</li>
          <li>When baking soda, NaHCO₃ is heated carbon dioxide is released, which is responsible for the rising of cookies and bread. Determine the formula masses of baking soda and carbon dioxide.</li>
          <li>Following compounds are used as fertilizers. Determine their formula masses.<br />
            (i) Urea, (NH₂)₂CO<br />
            (ii) Ammonium nitrate, NH₄NO₃</li>
        </ol>
      </div>
    </div>
  );
}
