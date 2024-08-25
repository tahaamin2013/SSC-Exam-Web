// pages/Unit10Characteristics.js
import React from 'react';

const Unit10Characteristics = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">10.3 CHARACTERISTIC PROPERTIES OF ACIDS</h2>
        <p className="mb-4">General properties of acids are as follows:</p>

        <ul className="list-disc ml-6 mb-4">
          <li>Acids have sour taste.</li>
          <li>Acids change the colour of blue litmus paper to red.</li>
          <li>
            Acids react with most metals and corrode them. Acids combine with metals like zinc, magnesium, aluminium, and calcium to form their salts and hydrogen. The hydrogen gas is liberated in the form of bubbles. Zinc reacts with hydrochloric acid to produce zinc chloride with the liberation of hydrogen gas. Similarly, magnesium reacts with sulphuric acid to produce magnesium sulphate and hydrogen. The reaction of metals with acids can be described by the following equation.
            <table className="min-w-full bg-white border border-gray-300 mt-4 mb-4">
              <thead>
                <tr className="border-b">
                  <th className="py-2 px-4 text-left">Metal + Acid</th>
                  <th className="py-2 px-4 text-left">Salt + Hydrogen</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4">Zn + HCl</td>
                  <td className="py-2 px-4">ZnCl₂ + H₂</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">Mg + H₂SO₄</td>
                  <td className="py-2 px-4">MgSO₄ + H₂</td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            Acids react with metal carbonates to form salts, water with the liberation of carbon dioxide. The liberated carbon dioxide forms bubbles in water. For example, hydrochloric acid reacts with sodium carbonate to form sodium chloride, carbon dioxide, and water. Similarly, sulphuric acid reacts with calcium carbonate (limestone or marble) to produce calcium sulphate, carbon dioxide, and water. The reaction of metal carbonate with acids can be represented by the following general reaction.
            <table className="min-w-full bg-white border border-gray-300 mt-4 mb-4">
              <thead>
                <tr className="border-b">
                  <th className="py-2 px-4 text-left">Metal carbonate + Acid</th>
                  <th className="py-2 px-4 text-left">Salt + Water + Carbon dioxide</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4">Na₂CO₃ + HCl</td>
                  <td className="py-2 px-4">NaCl + H₂O + CO₂</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">CaCO₃ + H₂SO₄</td>
                  <td className="py-2 px-4">CaSO₄ + H₂O + CO₂</td>
                </tr>
              </tbody>
            </table>
            This reaction is used in the industrial preparation of glass, paper, and soap.
          </li>
          <li>
            Acids combine with bases to produce salt and water. This reaction is called a neutralization reaction. For example, hydrochloric acid neutralizes sodium hydroxide to form sodium chloride and water. Similarly, sulphuric acid combines with potassium hydroxide to produce potassium sulphate and water. Neutralization reaction can be represented by the following general reaction.
            <table className="min-w-full bg-white border border-gray-300 mt-4 mb-4">
              <thead>
                <tr className="border-b">
                  <th className="py-2 px-4 text-left">Acid + Base</th>
                  <th className="py-2 px-4 text-left">Salt + Water</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4">HCl + NaOH</td>
                  <td className="py-2 px-4">NaCl + H₂O</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 px-4">H₂SO₄ + KOH</td>
                  <td className="py-2 px-4">K₂SO₄ + H₂O</td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            Normal rain is slightly acidic due to dissolved carbon dioxide. As a result of human activity, many oxides enter the atmosphere, which makes rainwater more acidic, which falls as acid rain. Acid rain contains dissolved nitric and sulphuric acid. Due to the corrosive nature of acids, acid rain can damage structures, buildings, and statues containing metals and metal carbonates. You can learn about the consequences of acid rain in the chapter on environmental chemistry.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Unit10Characteristics;
