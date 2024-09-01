import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from 'next/image'

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">comparison-of-general-physical-properties-of-metals-and-non-metals
        </h1>
        <PlantUMLDiagram
          code={`
@startmindmap
<style>
mindmapDiagram {
    node {
        BackgroundColor lightGreen
        BorderColor darkGreen
        FontColor black
    }
    :depth(1) {
      BackgroundColor lightBlue
    }
    :depth(2) {
      BackgroundColor lightYellow
    }
    :depth(3) {
      BackgroundColor lightPink
    }
}
</style>
* Metals vs Non-Metals
** Thermal Conductivity
*** Metals: High
*** Non-Metals: Poor
** Electrical Conductivity
*** Metals: Good conductors
**** Free electrons
*** Non-Metals: Poor conductors
**** Exceptions (e.g., graphite)
** Adaptability
*** Metals
**** Malleable
**** Ductile
*** Non-Metals
**** Brittle
**** Neither malleable nor ductile
** Melting and Boiling Points
*** Metals
**** Generally high
**** Strong metallic bonds
*** Non-Metals
**** Often lower
**** Weaker bonds (covalent, van der Waals, hydrogen)
** Key Points
*** Periodic arrangement of elements
*** Periods: Horizontal rows
*** Groups: Vertical columns
*** s-block elements: Group IA and IIA
*** p-block elements: Group IIIA to VIIIA
*** Shielding effect
*** Atomic size trends
*** Ionization energy
*** Electron affinity
@endmindmap`}
        />

      </section>
       
      <div className="bg-gradient-to-r from-gray-100 to-blue-200 text-gray-900">
    <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Comparison of General Physical Properties of Metals and Non-Metals</h1>

        <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <h2 className="text-3xl font-semibold mb-4">Thermal Conductivity</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
                <li><strong>Metals:</strong> High conductivity</li>
                <li><strong>Non-metals:</strong> Poor conductivity</li>
            </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <h2 className="text-3xl font-semibold mb-4">Electrical Conductivity</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
                <li><strong>Metals:</strong> Good conductors (free electrons)</li>
                <li><strong>Non-metals:</strong> Poor conductors (lack free electrons)</li>
                <li><strong>Exception:</strong> Graphite (non-metal, good conductor)</li>
            </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <h2 className="text-3xl font-semibold mb-4">Adaptability</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
                <li><strong>Metals:</strong> Malleable and ductile (can be hammered, drawn into wires, or thin sheets)</li>
                <li><strong>Non-metals:</strong> Brittle (not malleable or ductile)</li>
            </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <h2 className="text-3xl font-semibold mb-4">Melting and Boiling Points</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
                <li><strong>Metals:</strong> Generally high (strong metallic bonds)</li>
                <li><strong>Non-metals:</strong> Often lower (weaker bonds: covalent, van der Waals, or hydrogen)</li>
            </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <h2 className="text-3xl font-semibold mb-4">Key Points</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
                <li><strong>Periodic Arrangement:</strong> Elements' properties repeat when arranged by increasing atomic number</li>
                <li><strong>Period:</strong> Horizontal row in the periodic table</li>
                <li><strong>Group/Family:</strong> Column in the periodic table</li>
                <li><strong>s-block elements:</strong> Group IA and IIA (s sub-shell fills)</li>
                <li><strong>p-block elements:</strong> Group IIIA to VIIIA (valence p sub-shell fills)</li>
                <li><strong>Period Length:</strong> Depends on type of sub-shell filling</li>
                <li><strong>Shielding Effect:</strong> Decreased nuclear attraction due to inner electrons</li>
                <li><strong>Atomic Size:</strong> Average distance between nucleus and outer electronic shell</li>
                <li><strong>Atomic Radii Trends:</strong>
                    <ul className="list-disc list-inside ml-6 text-lg">
                        <li>Decrease left to right in a period</li>
                        <li>Increase top to bottom in a group</li>
                    </ul>
                </li>
                <li><strong>Ionization Energy:</strong> Energy to remove outermost electron from gaseous atom</li>
                <li><strong>Electron Affinity:</strong> Energy released when electron adds to valence shell of isolated atom</li>
            </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Concept Assessment Exercise 4.10</h2>
            <p className="text-lg mb-4">Compare general properties of metals and non-metals (covered in points 1-4 above)</p>
            <p className="text-lg">References:</p>
            <ul className="list-disc list-inside ml-6 text-lg">
                <li>B. Earl and LDR Wilford, Introduction to Advanced Chemistry</li>
                <li>Jain Brand and Richard Grime, Chemistry (11-14)</li>
                <li>Lawrie Ryan, Chemistry for You</li>
            </ul>
        </div>
    </div>
</div>

    </div>
  );
};

export default MagneticMindmap;