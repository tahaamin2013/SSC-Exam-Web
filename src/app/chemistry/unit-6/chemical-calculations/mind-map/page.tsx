import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from "next/image";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
        Chemical Calculations        </h1>
        <PlantUMLDiagram
          code={`
@startmindmap
*[#LightBlue] Chemical Calculations
** Mole-Mass Calculations
*** Calculating molar mass
**** Elements (metals)
**** Molecular substances
**** Examples
***** Na: 23 g/mol
***** N2: 28 g/mol
***** C12H22O11: 342 g/mol
*** Mass from moles
**** Example: Ozone in thunderstorms
***** 9.05 moles O3 = 434.4 g
**** Example: CO2 from burning natural gas
***** 0.25 moles CO2 = 11 g
*** Moles from mass
**** Example: Hydrogen in balloon
***** 5 g H2 = 2.48 moles
**** Example: Ice block
***** 100 g H2O = 5.55 moles
** Mole-Particles Calculations
*** Atoms from moles
**** Example: Zinc
***** 1.25 moles Zn = 7.53 x 10^23 atoms
**** Example: Aluminum foil
***** 0.2 moles Al = 1.2044 x 10^23 atoms
*** Molecules from moles
**** Example: Methane
***** 0.5 moles CH4 = 3.011 x 10^23 molecules
**** Example: Hydrogen peroxide
***** 1.6 moles H2O2 = 9.635 x 10^23 molecules
*** Moles from particles
**** Example: Methane
***** 1.2 x 10^23 molecules CH4 = 0.199 moles
**** Example: Sulfuric acid
***** 5.1 x 10^22 molecules H2SO4 = 0.0847 moles
** Concept Assessment Exercises
*** Mole-Mass problems
**** H2O2 calculations
**** NaCl calculations
**** BaSO4 molar mass
*** Mole-Particles problems
**** CH4 and NH3 molecule calculations
**** Moles from CH4 and H2SO4 molecules
@endmindmap`}
        />
      </section>

      <div className="p-6 bg-gray-50 text-gray-800">
  <h2 className="text-3xl font-bold mb-4">6.5 Chemical Calculations</h2>

  <h3 className="text-2xl font-semibold mb-3">6.5.1 Mole-Mass Calculations</h3>

  <p className="text-lg font-medium mb-2"><strong>Example 6.3: Calculating Mass of One Mole of a Substance</strong></p>
  <ul className="list-disc pl-5 mb-4">
    <li><strong>Sodium (Na)</strong>: 1 mole = 23 g</li>
    <li><strong>Nitrogen (N₂)</strong>: 1 mole = 28 g</li>
    <li><strong>Sucrose (C₁₂H₂₂O₁₁)</strong>: 1 mole = 342 g</li>
  </ul>

  <p className="text-lg font-medium mb-2"><strong>Problem-solving Strategy:</strong></p>
  <ul className="list-disc pl-5 mb-4">
    <li>For metals: Molar mass = Atomic mass in grams</li>
    <li>For molecular elements: Molar mass = Molecular mass in grams</li>
  </ul>

  <p className="text-lg font-medium mb-2"><strong>Example 6.4: Calculating Mass of Given Moles</strong></p>
  <p className="mb-2"><strong>Problem:</strong> 9.05 moles of ozone (O₃)</p>
  <p className="font-medium mb-4"><strong>Solution:</strong></p>
  <ul className="list-disc pl-5 mb-4">
    <li>Molar mass of O₃ = 48 g</li>
    <li>Mass = Molar mass × Number of moles</li>
    <li>Mass of 9.05 moles O₃ = 48 g × 9.05 = 434.4 g</li>
  </ul>

  <p className="text-lg font-medium mb-2"><strong>Example 6.5: CO₂ Formation from Natural Gas Combustion</strong></p>
  <p className="mb-2"><strong>Problem:</strong> Mass of 0.25 moles CO₂</p>
  <p className="font-medium mb-4"><strong>Solution:</strong></p>
  <ul className="list-disc pl-5 mb-4">
    <li>Molar mass of CO₂ = 44 g</li>
    <li>Mass of 0.25 moles CO₂ = 44 g × 0.25 = 11 g</li>
  </ul>

  <p className="text-lg font-medium mb-2"><strong>Example 6.6: Converting Grams to Moles</strong></p>
  <ul className="list-disc pl-5 mb-4">
    <li><strong>a) 5 g of hydrogen (H₂)</strong></li>
    <li>Molar mass of H₂ = 2.016 g/mol</li>
    <li>Moles = 5 g ÷ 2.016 g/mol = 2.48 moles</li>
    <li><strong>b) 100 g of ice (H₂O)</strong></li>
    <li>Molar mass of H₂O = 18.016 g/mol</li>
    <li>Moles = 100 g ÷ 18.016 g/mol = 5.55 moles</li>
  </ul>

  <h3 className="text-2xl font-semibold mb-3">6.5.2 Mole-Particles Calculations</h3>

  <p className="text-lg font-medium mb-2"><strong>Example 6.7: Calculating Number of Atoms in Given Moles</strong></p>
  <ul className="list-disc pl-5 mb-4">
    <li><strong>1.25 moles of Zn</strong></li>
    <li>Number of atoms = 6.022 × 10²³ × 1.25 = 7.53 × 10²³ Zn atoms</li>
    <li><strong>0.2 moles of Al</strong></li>
    <li>Number of atoms = 6.022 × 10²³ × 0.2 = 1.2044 × 10²³ Al atoms</li>
  </ul>

  <p className="text-lg font-medium mb-2"><strong>Example 6.8: Calculating Number of Molecules in Given Moles</strong></p>
  <ul className="list-disc pl-5 mb-4">
    <li><strong>0.5 moles of methane (CH₄)</strong></li>
    <li>Number of molecules = 6.022 × 10²³ × 0.5 = 3.011 × 10²³ molecules</li>
    <li><strong>1.6 moles of H₂O₂</strong></li>
    <li>Number of molecules = 6.022 × 10²³ × 1.6 = 9.635 × 10²³ molecules</li>
  </ul>

  <p className="text-lg font-medium mb-2"><strong>Key Concepts:</strong></p>
  <ul className="list-disc pl-5 mb-4">
    <li>Mole-mass conversions use molar mass (g/mol)</li>
    <li>Mole-particle conversions use Avogadro&apos;s number (6.022 × 10²³)</li>
    <li>For metals, molar mass equals gram atomic mass</li>
    <li>For molecular substances, molar mass equals gram molecular mass</li>
  </ul>

  <p className="text-lg font-medium mb-2"><strong>Problem-solving Steps:</strong></p>
  <ul className="list-disc pl-5">
    <li>Identify the substance (metal, molecular, ionic)</li>
    <li>Determine molar mass</li>
    <li>Use appropriate conversion factor (molar mass or Avogadro&apos;s number)</li>
    <li>Perform calculations</li>
  </ul>
</div>

    </div>
  );
};

export default MagneticMindmap;
