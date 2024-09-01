import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">ELECTRONIC CONFIGURATION
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
* Electronic Configuration
** Shells
*** Circular paths around nucleus
*** Fixed energy levels
*** Labeled by n values (1, 2, 3, ...)
**** K shell (n = 1)
**** L shell (n = 2)
**** M shell (n = 3)
*** Energy increases with n
** Sub-Shells
*** Subdivisions of shells
*** Types: s, p, d, f
*** Maximum electrons
**** s: 2 electrons
**** p: 6 electrons
**** d: 10 electrons
**** f: 14 electrons
*** Energy order
**** 1s < 2s < 2p < 3s < 3p < 4s < 3d ...
** Auf Bau Principle
*** Electrons fill lowest energy sub-shell first
left side
** Atomic Symbols
*** Element symbol
*** Mass number (left superscript)
*** Atomic number (left subscript)
*** Charge (right superscript)
*** Example: Mg12242+
** Key Points
*** Rutherford's planetary model
*** Bohr's circular orbits
*** Isotopes
*** Uranium isotope uses
*** Radioactive isotope applications
*** Sub-shell types
*** Auf Bau Principle
@endmindmap`}
        />
       
      </section>
      <div className="p-8 bg-gradient-to-r from-green-100 to-yellow-200 rounded-lg shadow-xl">
    <h1 className="text-3xl font-extrabold text-yellow-800 mb-6">3.7 Electronic Configuration</h1>

    <div className="mb-8">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Shells</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-600 mb-2">Definition</h3>
            <p className="text-green-900 mb-4">
                Based on Bohr's atomic theory, shells are circular paths where electrons revolve around the nucleus. Each shell has fixed energy, described by the quantum number <i>n</i> (n = 1, 2, 3, ...). As <i>n</i> increases, the distance from the nucleus and the energy of the shell increase.
            </p>
            <h3 className="text-xl font-semibold text-green-600 mb-2">Nomenclature</h3>
            <ul className="list-disc list-inside text-green-900 ml-6 mb-4">
                <li><strong>n = 1:</strong> K shell</li>
                <li><strong>n = 2:</strong> L shell</li>
                <li><strong>n = 3:</strong> M shell</li>
            </ul>
        </div>
    </div>

    <div className="mb-8">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Sub-Shells</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-600 mb-2">Definition and Distribution</h3>
            <p className="text-green-900 mb-4">
                Sub-shells are subdivisions of shells or energy levels. They are represented by combining the <i>n</i> value and sub-shell symbol.
            </p>
            <ul className="list-disc list-inside text-green-900 ml-6 mb-4">
                <li><strong>K shell (n = 1):</strong> 1s</li>
                <li><strong>L shell (n = 2):</strong> 2s, 2p</li>
                <li><strong>M shell (n = 3):</strong> 3s, 3p, 3d</li>
                <li><strong>N shell (n = 4):</strong> 4s, 4p, 4d, 4f</li>
            </ul>
            <h3 className="text-xl font-semibold text-green-600 mb-2">Electron Capacity and Energy Order</h3>
            <ul className="list-disc list-inside text-green-900 ml-6 mb-4">
                <li><strong>s sub-shell:</strong> 2 electrons</li>
                <li><strong>p sub-shell:</strong> 6 electrons</li>
                <li><strong>d sub-shell:</strong> 10 electrons</li>
                <li><strong>f sub-shell:</strong> 14 electrons</li>
            </ul>
            <p className="text-green-900 mb-4">
                Energy order: 1s &lt; 2s &lt; 2p &lt; 3s &lt; 3p &lt; 4s &lt; 3d ...
            </p>
        </div>
    </div>

    <div className="mb-8">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Electronic Configuration</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-600 mb-2">Definition</h3>
            <p className="text-green-900 mb-4">
                Electronic configuration refers to the arrangement of electrons in sub-shells. It follows the Auf Bau Principle, which states that electrons fill the lowest energy sub-shells first.
            </p>
            <h3 className="text-xl font-semibold text-green-600 mb-2">Symbols for Atoms and Ions</h3>
            <p className="text-green-900 mb-4">
                Format: [Mass number][Element symbol][Charge][Atomic number]. For example: Mg<sub>12</sub><sup>24</sup><sup>2+</sup> (Magnesium with mass number 24, charge +2, atomic number 12).
            </p>
        </div>
    </div>

    <div>
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Key Points</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
            <ul className="list-disc list-inside text-green-900 ml-6 mb-4">
                <li>Rutherford's planetary model: Nucleus (protons) surrounded by electrons.</li>
                <li>Bohr's model: Electrons in fixed circular orbits (shells).</li>
                <li>Isotopes: Atoms with the same number of protons but different numbers of neutrons.</li>
                <li>Uranium isotope: Used in nuclear reactors and atomic bombs.</li>
                <li>Radioactive isotopes: Various applications in science and medicine.</li>
                <li>Electronic configuration: Arrangement of electrons in sub-shells.</li>
                <li>Auf Bau Principle: Electrons fill lowest energy levels first.</li>
            </ul>
        </div>
    </div>

    <div>
        <h2 className="text-2xl font-semibold text-green-700 mb-4">References</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
            <ul className="list-disc list-inside text-green-900 ml-6">
                <li>B. Earl and LDR Wilford, "Introduction to Advanced Chemistry"</li>
                <li>Iain Brand and Richard Grime, "Chemistry (11-14)"</li>
            </ul>
        </div>
    </div>
</div>

    </div>
  );
};

export default MagneticMindmap;