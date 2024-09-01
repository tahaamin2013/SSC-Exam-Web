import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from 'next/image'

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">INTERMOLECULAR FORCES
        </h1>
        <PlantUMLDiagram
          code={`
@startmindmap
* 5.4 INTERMOLECULAR FORCES
** Definition
*** An attractive force existing between molecules.
** Dipole-Dipole Forces
*** Occur between polar molecules.
*** Slightly negative end of one molecule attracts the slightly positive end of another.
*** Examples:
**** Resins used in paints and dyes for protection and visual appeal.
**** Resins provide toughness, flexibility, adhesion, and chemical resistance.
**** Synthetic resins offer water resistance and involve dipole-dipole interactions.
** Hydrogen Bonding
*** Occurs when hydrogen is covalently bonded to highly electronegative atoms (O, N, F).
*** Hydrogen becomes electron-deficient and bonds to a lone pair on a nearby electronegative atom.
*** Importance:
**** Determines properties of water, proteins, DNA, and synthetic materials.
**** Adhesive action in paints and resins due to hydrogen bonding.
** Society, Technology, and Science
*** Epoxy Adhesives:
**** Excellent chemical resistance, good adhesion, and heat resistance.
**** Used in propellers, aircraft parts, boats, cars, and trucks.
**** Contains partially positively charged H-atoms and oxygen atoms with lone pairs.
**** Forms H-bonds, making them sticky and strong.
**** Used in modern aircraft, boats, automobiles, and spacecraft.
**** Essential in daily life for various applications.
@endmindmap

`}
        />

      </section>
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-10 font-sans">
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-[2rem]">
        <h1 className="text-4xl font-bold text-center text-black mb-8">Intermolecular Forces</h1>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Definition</h2>
            <p className="text-lg text-gray-700">
                Attractive forces existing between molecules.
            </p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Dipole-Dipole Forces</h2>
            <ul className="list-disc pl-5 text-lg text-gray-700">
                <li>Occur between polar molecules.</li>
                <li>Slightly negative end of one molecule attracts slightly positive end of another.</li>
                <li>Applications:
                    <ul className="list-disc pl-5">
                        <li>Paints and dyes for protection and visual appeal.</li>
                        <li>Resins for coating materials (toughness, flexibility, adhesion, chemical resistance).</li>
                        <li>Synthetic resins for water resistance.</li>
                    </ul>
                </li>
            </ul>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Hydrogen Bonding</h2>
            <p className="text-lg text-gray-700">
                Occurs when hydrogen is covalently bonded to very electronegative atoms (O, N, F).
            </p>
            <ul className="list-disc pl-5 text-lg text-gray-700">
                <li>Interaction between electron-deficient hydrogen and lone pair on nearby electronegative atom.</li>
                <li>Can occur within same molecule or between nearby molecules.</li>
                <li>Example: Hydrogen bonding in water molecules.</li>
            </ul>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Importance of Intermolecular Forces</h2>
            <ul className="list-disc pl-5 text-lg text-gray-700">
                <li>Determine properties of:
                    <ul className="list-disc pl-5">
                        <li>Water</li>
                        <li>Biological molecules (proteins, DNA)</li>
                        <li>Synthetic materials (glue, paints, resins)</li>
                    </ul>
                </li>
                <li>Crucial for adhesive action of paints and dyes.</li>
                <li>Enable synthetic resins to bind surfaces.</li>
            </ul>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Applications in Society and Technology</h2>
            <ul className="list-disc pl-5 text-lg text-gray-700">
                <li>Epoxy adhesives:
                    <ul className="list-disc pl-5">
                        <li>Excellent chemical resistance</li>
                        <li>Good adhesion properties</li>
                        <li>Heat resistance</li>
                        <li>Used in propellers, aircraft parts, boats, cars, trucks</li>
                    </ul>
                </li>
                <li>Mechanism: Contains partially positively charged H-atoms and O atoms with lone pairs.</li>
                <li>Benefits:
                    <ul className="list-disc pl-5">
                        <li>Cost savings</li>
                        <li>Weight reduction in vehicles and aircraft</li>
                    </ul>
                </li>
                <li>Widespread use in daily life and industry.</li>
            </ul>
        </section>
    </div>
</div>
    </div>
  );
};

export default MagneticMindmap;