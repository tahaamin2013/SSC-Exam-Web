// pages/unit06.js

import React from 'react';

export default function Unit06() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">UNIT 06</h1>

      <h2 className="text-xl font-semibold mb-3">6.3 CHEMICAL FORMULA AND NAME OF BINARY IONIC COMPOUNDS</h2>

      <p className="mb-2">
        A binary ionic compound is composed of mono-atomic metal cations and mono-atomic non-metal anions. To write the name of an ionic compound, the cation is named first followed by the name of anion. How do you name cations and anions? The name of the cation is the same as the name of the metal, but in the name of mono-atomic anion, the suffix ide is added to the root name of the element. For example, sodium chloride, magnesium oxide, aluminium nitride, etc.
      </p>

      <p className="mb-2">
        The following steps are used to write the chemical formula of a binary ionic compound.
      </p>

      <ol className="list-decimal pl-5 mb-2">
        <li>Write the symbols for the cation first and then the symbols for the anion and their charges.</li>
        <li>Balance the charges on the cations and anions using the smallest coefficient. The total charge on the cation must equal the total charge on the anion because an ionic compound is neutral.</li>
        <li>Write coefficients as subscripts for each ion.</li>
        <li>Write the formula of the ionic compound. For this, leave out all the charge subscripts which are 1.</li>
      </ol>

      <p className="mb-2">
        For example, the chemical formula of sodium chloride is written as follows;
      </p>
      <pre className="bg-gray-100 p-3 rounded">
        Na Cl <sup>+1</sup> <sup>-1</sup> → NaCl
      </pre>

      <p className="mb-2">
        Example 2, the chemical formula of aluminium oxide is written as follows;
      </p>
      <pre className="bg-gray-100 p-3 rounded">
        Al O <sup>+3</sup> <sup>-2</sup> → Al<sub>2</sub>O<sub>3</sub>
      </pre>

      <h4 className="text-lg font-semibold mb-2">Table indicating names and symbols for cations and anions</h4>

      <table className="table-auto w-full mb-4">
        <thead>
          <tr>
            <th className="border px-4 py-2">Cations</th>
            <th className="border px-4 py-2">Anions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Lithium</td>
            <td className="border px-4 py-2">Fluoride</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Sodium</td>
            <td className="border px-4 py-2">Chloride</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Potassium</td>
            <td className="border px-4 py-2">Bromide</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Magnesium</td>
            <td className="border px-4 py-2">Nitrite</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Calcium</td>
            <td className="border px-4 py-2">Nitrate</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Copper</td>
            <td className="border px-4 py-2">Sulfate</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
