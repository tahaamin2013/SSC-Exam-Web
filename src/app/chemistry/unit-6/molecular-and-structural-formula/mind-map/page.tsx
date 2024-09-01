import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from "next/image";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
          Periodic Table and Periodicity
        </h1>
        <PlantUMLDiagram
          code={`
@startmindmap
<style>
mindmapDiagram {
    node {
        BackgroundColor lightBlue
    }
    :depth(1) {
      BackgroundColor lightGreen
    }
    :depth(2) {
      BackgroundColor lightYellow
    }
    :depth(3) {
      BackgroundColor lightPink
    }
}
</style>
* Periodic Table and Periodicity
** Structure
*** Periods (horizontal rows)
**** 7 periods
**** Short periods (1-3)
**** Long periods (4-7)
*** Groups (vertical columns)
*** Blocks
**** s-block (Groups 1-2)
**** p-block (Groups 13-18)
**** d-block (Transition elements)
**** f-block (Lanthanides and Actinides)
** Element Properties
*** Group 1 (Alkali Metals)
**** Soft metals
**** Decreasing melting point
**** Increasing density
**** Increasing reactivity
*** Group 7 (Halogens)
**** Diatomic non-metals
**** Increasing density
**** Decreasing reactivity
**** Appearances at room temperature
*** Group 18 (Noble Gases)
**** Unreactive monoatomic gases
*** Transition Elements
**** High densities
**** High melting points
**** Variable oxidation numbers
**** Colored compounds
**** Catalytic properties
** Periodic Law
*** Elements arranged by atomic number
*** Properties repeat periodically
** Predicting Properties
*** Based on group trends
*** Based on period trends
** Metal vs Non-metal Properties
*** Thermal conductivity
*** Electrical conductivity
*** Malleability and ductility
*** Melting and boiling points
** Applications
*** Predicting reactivity
*** Understanding bonding
*** Catalysts in industrial processes
@endmindmap`}
        />
        <Image alt="fd" height={7000} src="/table.jpg" width={700} />
      </section>

      <div class="bg-gradient-to-r from-gray-100 to-blue-300 text-gray-900">
    <div class="max-w-4xl mx-auto p-8">
        <h1 class="text-4xl font-bold text-center mb-8">Chemical Formula and Avogadro's Number</h1>

        <div class="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <h2 class="text-3xl font-semibold mb-4">6.3 Chemical Formula and Name of Binary Ionic Compounds</h2>
            <p class="text-lg mb-4">Binary ionic compound: Composed of mono-atomic metal cations and mono-atomic non-metal anions.</p>
            <p class="text-lg mb-4">Naming convention: Cation name + anion name (with -ide suffix).</p>
            <p class="text-lg mb-4">Steps to write chemical formula:</p>
            <ol class="list-decimal list-inside space-y-2 text-lg">
                <li>Write symbols for cation and anion with charges</li>
                <li>Balance charges using smallest coefficients</li>
                <li>Write coefficients as subscripts</li>
                <li>Omit charge subscripts of 1</li>
            </ol>
            <p class="text-lg mt-4">Examples:</p>
            <ul class="list-disc list-inside space-y-2 text-lg">
                <li><strong>NaCl:</strong> Sodium chloride</li>
                <li><strong>Al₂O₃:</strong> Aluminium oxide</li>
            </ul>
        </div>

        <div class="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <h2 class="text-3xl font-semibold mb-4">6.4 Avogadro's Number and Mole</h2>
            <p class="text-lg mb-4">Mole: Amount of substance containing 6.022 x 10<sup>23</sup> particles</p>
            <p class="text-lg mb-4">Avogadro's number (N<sub>A</sub>): 6.022 x 10<sup>23</sup></p>
            <p class="text-lg mb-4">Molar mass: Mass of one mole of a substance</p>
            
            <div class="bg-gray-50 p-4 rounded-lg mt-6">
                <h3 class="text-2xl font-semibold mb-4">6.4.1 Gram Atomic Mass, Gram Molecular Mass, and Gram Formula Mass</h3>
                <p class="text-lg mb-4">Gram atomic mass: Atomic mass of an element expressed in grams</p>
                <p class="text-lg mb-4">Gram molecular mass: Molecular mass of a substance expressed in grams</p>
                <p class="text-lg mb-4">Gram formula mass: Formula mass of a substance expressed in grams</p>
                <p class="text-lg mt-4">Examples:</p>
                <ul class="list-disc list-inside space-y-2 text-lg">
                    <li><strong>Gram atomic mass of C:</strong> 12 g</li>
                    <li><strong>Gram molecular mass of H₂O:</strong> 18.016 g</li>
                    <li><strong>Gram formula mass of NaCl:</strong> 58.5 g</li>
                </ul>
            </div>

            <div class="bg-gray-50 p-4 rounded-lg mt-6">
                <h3 class="text-2xl font-semibold mb-4">6.4.2 Differences between Gram Atomic Mass, Gram Molecular Mass, and Gram Formula Mass</h3>
                <p class="text-lg mb-4">Representation:</p>
                <ul class="list-disc list-inside space-y-2 text-lg">
                    <li><strong>Gram atomic mass:</strong> One mole of atoms</li>
                    <li><strong>Gram molecular mass:</strong> One mole of molecules</li>
                    <li><strong>Gram formula mass:</strong> One mole of ionic formula units</li>
                </ul>
                <p class="text-lg mb-4">Particle count: All contain 6.022 x 10<sup>23</sup> particles</p>
                <p class="text-lg mb-4">Molar mass: All represent molar mass (mass of one mole of substance in grams)</p>
            </div>
        </div>
    </div>
</body>
    </div>
  );
};

export default MagneticMindmap;
