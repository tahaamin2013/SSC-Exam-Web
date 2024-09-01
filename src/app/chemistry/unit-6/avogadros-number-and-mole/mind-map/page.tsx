import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from "next/image";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
        Chemical Formulas and
        Mole Concept
                </h1>
        <PlantUMLDiagram
          code={`
@startmindmap
*[#LightBlue]:Chemical Formulas and
Mole Concept;
** Binary Ionic Compounds
*** Composed of metal cations and non-metal anions
*** Naming convention: cation first, then anion
*** Writing chemical formula
**** Steps to write formula
**** Examples: NaCl, Al2O3
** Avogadro&apos;s Number and Mole
*** Mole: 6.022 x 10^23 particles
*** Avogadro&apos;s number: NA
*** Molar mass
** Gram Atomic Mass
*** Atomic mass in grams
*** Examples: C, Na, Zn
left side
** Gram Molecular Mass
*** Molecular mass in grams
*** Examples: H2O, C6H12O6
** Gram Formula Mass
*** Formula mass in grams
*** Examples: NaCl, KCl
** Differences
*** Represents: atoms vs molecules vs formula units
*** Contains: 6.022 x 10^23 of respective units
*** All represent molar mass
@endmindmap`}
        />
      </section>

      <div>
         <div className="bg-gradient-to-r from-gray-100 to-blue-300 text-gray-900">
    <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Chemical Formula and Avogadro&apos;s Number</h1>

        <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <h2 className="text-3xl font-semibold mb-4">6.3 Chemical Formula and Name of Binary Ionic Compounds</h2>
            <p className="text-lg mb-4">Binary ionic compound: Composed of mono-atomic metal cations and mono-atomic non-metal anions.</p>
            <p className="text-lg mb-4">Naming convention: Cation name + anion name (with -ide suffix).</p>
            <p className="text-lg mb-4">Steps to write chemical formula:</p>
            <ol className="list-decimal list-inside space-y-2 text-lg">
                <li>Write symbols for cation and anion with charges</li>
                <li>Balance charges using smallest coefficients</li>
                <li>Write coefficients as subscripts</li>
                <li>Omit charge subscripts of 1</li>
            </ol>
            <p className="text-lg mt-4">Examples:</p>
            <ul className="list-disc list-inside space-y-2 text-lg">
                <li><strong>NaCl:</strong> Sodium chloride</li>
                <li><strong>Al₂O₃:</strong> Aluminium oxide</li>
            </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <h2 className="text-3xl font-semibold mb-4">6.4 Avogadro&apos;s Number and Mole</h2>
            <p className="text-lg mb-4">Mole: Amount of substance containing 6.022 x 10<sup>23</sup> particles</p>
            <p className="text-lg mb-4">Avogadro&apos;s number (N<sub>A</sub>): 6.022 x 10<sup>23</sup></p>
            <p className="text-lg mb-4">Molar mass: Mass of one mole of a substance</p>
            
            <div className="bg-gray-50 p-4 rounded-lg mt-6">
                <h3 className="text-2xl font-semibold mb-4">6.4.1 Gram Atomic Mass, Gram Molecular Mass, and Gram Formula Mass</h3>
                <p className="text-lg mb-4">Gram atomic mass: Atomic mass of an element expressed in grams</p>
                <p className="text-lg mb-4">Gram molecular mass: Molecular mass of a substance expressed in grams</p>
                <p className="text-lg mb-4">Gram formula mass: Formula mass of a substance expressed in grams</p>
                <p className="text-lg mt-4">Examples:</p>
                <ul className="list-disc list-inside space-y-2 text-lg">
                    <li><strong>Gram atomic mass of C:</strong> 12 g</li>
                    <li><strong>Gram molecular mass of H₂O:</strong> 18.016 g</li>
                    <li><strong>Gram formula mass of NaCl:</strong> 58.5 g</li>
                </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mt-6">
                <h3 className="text-2xl font-semibold mb-4">6.4.2 Differences between Gram Atomic Mass, Gram Molecular Mass, and Gram Formula Mass</h3>
                <p className="text-lg mb-4">Representation:</p>
                <ul className="list-disc list-inside space-y-2 text-lg">
                    <li><strong>Gram atomic mass:</strong> One mole of atoms</li>
                    <li><strong>Gram molecular mass:</strong> One mole of molecules</li>
                    <li><strong>Gram formula mass:</strong> One mole of ionic formula units</li>
                </ul>
                <p className="text-lg mb-4">Particle count: All contain 6.022 x 10<sup>23</sup> particles</p>
                <p className="text-lg mb-4">Molar mass: All represent molar mass (mass of one mole of substance in grams)</p>
            </div>
        </div>
    </div>
</div>
    </div>
    </div>
  );
};

export default MagneticMindmap;
