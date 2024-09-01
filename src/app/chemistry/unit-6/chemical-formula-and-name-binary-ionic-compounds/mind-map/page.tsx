import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from "next/image";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
          6.3 Chemical Formula and Name of Binary Ionic Compounds        </h1>
        <PlantUMLDiagram
          code={`
@startmindmap
*[#LightBlue] Binary Ionic Compounds
** Definition
*** Composed of mono-atomic metal cations
*** and mono-atomic non-metal anions
** Naming Convention
*** Cation named first
*** Then anion
*** Cation name = metal name
*** Anion name = root name + "-ide" suffix
*** Examples
**** Sodium chloride
**** Magnesium oxide
**** Aluminium nitride
** Writing Chemical Formula
*** Step 1: Write symbols and charges
**** Cation first, then anion
*** Step 2: Balance charges
**** Use smallest coefficient
**** Total cation charge = Total anion charge
*** Step 3: Write coefficients as subscripts
*** Step 4: Write final formula
**** Omit charge subscripts of 1
*** Examples
**** Sodium chloride: Na Cl +1 -1 → NaCl
**** Aluminium oxide: Al O +3 -2 → Al2O3
** Common Ions Table
*** Cations
**** Lithium
**** Sodium
**** Potassium
**** Magnesium
**** Calcium
**** Copper
*** Anions
**** Fluoride
**** Chloride
**** Bromide
**** Nitrite
**** Nitrate
**** Sulfate
@endmindmap`}
        />
      </section>

      <div className="p-6 bg-white text-gray-900 border border-gray-200 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4">6.3 Chemical Formula and Name of Binary Ionic Compounds</h2>

        <h3 className="text-2xl font-semibold mb-4">Binary Ionic Compounds:</h3>
        <p className="mb-4">
          Composed of mono-atomic metal cations and mono-atomic non-metal anions.<br />
          <strong>Naming convention:</strong> Cation name first, followed by anion name.<br />
          <strong>Cation name:</strong> Same as the metal name.<br />
          <strong>Anion name:</strong> Root name of the element + suffix <strong>&apos;ide&apos;</strong>.<br />
          <strong>Examples:</strong> Sodium chloride, magnesium oxide, aluminium nitride.
        </p>

        <h3 className="text-2xl font-semibold mb-4">Steps to Write Chemical Formula of Binary Ionic Compounds:</h3>
        <ol className="list-decimal pl-5 mb-4">
          <li>Write symbols for cation first, then anion, including their charges.</li>
          <li>Balance charges using smallest coefficients (compound must be neutral).</li>
          <li>Write coefficients as subscripts for each ion.</li>
          <li>Omit charge subscripts of 1 in the final formula.</li>
        </ol>

        <h4 className="text-xl font-medium mb-4">Examples:</h4>
        <ul className="list-disc pl-5 mb-4">
          <li><strong>Sodium chloride:</strong> Na⁺ Cl⁻ → NaCl</li>
          <li><strong>Aluminium oxide:</strong> Al³⁺ O²⁻ → Al₂O₃</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4">Common Cations and Anions:</h3>
        <div className="grid grid-cols-2 gap-6 mb-4">
          <div>
            <h4 className="text-xl font-medium mb-2">Cations:</h4>
            <ul className="list-disc pl-5">
              <li>Lithium</li>
              <li>Sodium</li>
              <li>Potassium</li>
              <li>Magnesium</li>
              <li>Calcium</li>
              <li>Copper</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-medium mb-2">Anions:</h4>
            <ul className="list-disc pl-5">
              <li>Fluoride</li>
              <li>Chloride</li>
              <li>Bromide</li>
              <li>Nitrite</li>
              <li>Nitrate</li>
              <li>Sulfate</li>
            </ul>
          </div>
        </div>

        <p className="mt-6 text-lg font-medium">
          <strong>Note:</strong> This section covers the basics of naming and writing formulas for binary ionic compounds. It emphasizes the importance of charge balancing and provides a list of common cations and anions for reference.
        </p>
      </div>

    </div>
  );
};

export default MagneticMindmap;
