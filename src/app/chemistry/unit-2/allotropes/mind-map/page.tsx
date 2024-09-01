import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">ALLOTROPES</h1>
        <PlantUMLDiagram
          code={`
@startmindmap
skinparam monochrome false
* 2.3 ALLOTROPES
** Definition
*** Property of an element to exist in different physical forms
*** Different forms in the same physical state
*** Atoms of same element arranged differently
left side
** Carbon Allotropes
*** Graphite
**** Composition
***** Flat 2D layers
***** Hexagonally arranged carbon atoms
**** Bonding
***** Each C-atom covalently bonded to 3 others
***** Weak intermolecular bonds between layers
**** Properties
***** Soft and slippery
***** Good conductor of electricity
**** Uses
***** Lubricant
*** Diamond
**** Structure
***** Each C-atom covalently bonded to 4 others
***** Rigid network of tetrahedral shape
**** Properties
***** Hardest substance
***** Very high melting point
***** Non-conductor of electricity
*** Buckyballs (C-60)
**** Structure
***** Football-like fused hollow ring
***** 20 hexagons and 12 pentagons
**** Composition
***** 60 carbon atoms
***** Each atom bonded to 3 others
** Fig 2.2: Classification of matter
@endmindmap`}
        />

      </section>

      <div className="p-8 bg-gradient-to-r from-green-50 to-yellow-50 rounded-lg shadow-xl">
        <h1 className="text-3xl font-extrabold text-yellow-800 mb-6">Allotropy</h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">I. Allotropy</h2>
          <h3 className="text-xl font-bold text-yellow-600 mb-2">A. Definition</h3>
          <p className="text-green-900 bg-green-100 p-4 rounded-lg">Property of an element to exist in different physical forms.</p>

          <h3 className="text-xl font-bold text-yellow-600 mt-4 mb-2">B. Allotropes</h3>
          <p className="text-green-900 bg-green-100 p-4 rounded-lg">Different forms of the same element in the same physical state.</p>

          <h3 className="text-xl font-bold text-yellow-600 mt-4 mb-2">C. Characteristic</h3>
          <p className="text-green-900 bg-green-100 p-4 rounded-lg">Same element atoms arranged in different manners.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">II. Carbon Allotropes</h2>
          <h3 className="text-xl font-bold text-yellow-600 mb-2">A. Three important allotropes:</h3>
          <ul className="list-disc list-inside text-green-900 ml-8">
            <li>1. Graphite</li>
            <li>2. Diamond</li>
            <li>3. Buckyballs (C-60)</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">III. Graphite</h2>
          <h3 className="text-xl font-bold text-yellow-600 mb-2">A. Structure:</h3>
          <ul className="list-disc list-inside text-green-900 ml-8">
            <li>1. Flat two-dimensional layers</li>
            <li>2. Hexagonally arranged carbon atoms</li>
            <li>3. Each C-atom covalently bonded to three others</li>
          </ul>

          <h3 className="text-xl font-bold text-yellow-600 mt-4 mb-2">B. Inter-layer bonding:</h3>
          <ul className="list-disc list-inside text-green-900 ml-8">
            <li>1. Weak intermolecular bonds</li>
            <li>2. Allows layers to slide over one another</li>
          </ul>

          <h3 className="text-xl font-bold text-yellow-600 mt-4 mb-2">C. Properties:</h3>
          <ul className="list-disc list-inside text-green-900 ml-8">
            <li>1. Soft and slippery</li>
            <li>2. Good conductor of electricity</li>
          </ul>

          <h3 className="text-xl font-bold text-yellow-600 mt-4 mb-2">D. Application:</h3>
          <p className="text-green-900 bg-green-100 p-4 rounded-lg">Used as a lubricant.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">IV. Diamond</h2>
          <h3 className="text-xl font-bold text-yellow-600 mb-2">A. Structure:</h3>
          <ul className="list-disc list-inside text-green-900 ml-8">
            <li>1. Each C-atom covalently bonded to four others</li>
            <li>2. Rigid network of tetrahedral shape</li>
            <li>3. Three-dimensional arrangement</li>
          </ul>

          <h3 className="text-xl font-bold text-yellow-600 mt-4 mb-2">B. Properties:</h3>
          <ul className="list-disc list-inside text-green-900 ml-8">
            <li>1. Hardest crystalline allotrope of carbon</li>
            <li>2. Very high melting point</li>
            <li>3. Non-conductor of electricity</li>
          </ul>

          <h3 className="text-xl font-bold text-yellow-600 mt-4 mb-2">C. Reason for non-conductivity:</h3>
          <p className="text-green-900 bg-green-100 p-4 rounded-lg">No free electrons.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">V. Buckyballs (C-60)</h2>
          <h3 className="text-xl font-bold text-yellow-600 mb-2">A. Also known as fullerenes</h3>
          <h3 className="text-xl font-bold text-yellow-600 mt-4 mb-2">B. Structure:</h3>
          <ul className="list-disc list-inside text-green-900 ml-8">
            <li>1. Football-like fused hollow ring</li>
            <li>2. Composed of 20 hexagons and 12 pentagons</li>
            <li>3. 60 carbon atoms, each bonded to 3 others</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default MagneticMindmap;