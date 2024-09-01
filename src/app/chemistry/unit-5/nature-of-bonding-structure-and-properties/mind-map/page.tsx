import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from 'next/image'

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">NATURE OF BONDING, STRUCTURE, AND PROPERTIES
        </h1>
        <PlantUMLDiagram
          code={`
@startmindmap
* 5.5 NATURE OF BONDING, STRUCTURE, AND PROPERTIES
** Three Main Factors Determining Properties
*** 1. Type of Particles
**** Atoms, ions, or molecules present in a substance.
**** Example: Sodium chloride conducts electricity when melted or dissolved in water.
**** Water solubility depends on the presence of ions or polar molecules.
*** 2. Type of Bonding
**** Types of bonds include ionic, covalent, metallic, or weak intermolecular forces.
**** Stronger bonds lead to higher melting/boiling points and hardness.
**** Example: SiO₂ (silicon dioxide) has strong covalent bonds; CO₂ has weak intermolecular forces.
*** 3. Arrangement of Particles
**** Particles arranged in planes (e.g., polymers), layers (e.g., graphite), or 3D networks (e.g., diamonds).
**** Example: Graphite’s layers slide over each other, while diamonds form a 3D network, making them extremely hard.
** Conduction of Electricity
*** Ionic Compounds
**** Cannot conduct electricity in solid form; conduct when melted or dissolved due to free ions.
*** Acids
**** Covalent compounds do not generally conduct electricity, except for acids like HCl, H₂SO₄ when ionized in water.
*** Metals
**** Excellent conductors due to free-moving electrons.
** Properties and Uses of Diamond
*** Strong covalent bonds in a cubic crystal lattice structure.
*** Hardest known material, used in:
**** Ornaments (rings, necklaces).
**** Cutting and drilling tools.
**** Medical tools and beauty products.
**** High-quality sound production (DJ equipment, recorders).
** Properties and Uses of Graphite
*** 2D layered structure with weak van der Waals forces between layers.
**** Allows layers to slide, making it useful for:
***** High-temperature refractory items.
***** Electrical metallurgical furnaces.
***** Nuclear reactors, lubricants, paints, and pencils.
** Contrasting Ionic and Covalent Compounds
*** Ionic Compounds:
**** Strong in compression, brittle, poor conductors in solid form.
**** Conduct electricity when melted or dissolved.
*** Covalent Compounds (e.g., diamond, quartz):
**** Strong and hard with giant structures, usually poor conductors of electricity.
@endmindmap

`}
        />

      </section>
      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-10 font-sans">
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-[2rem]">
        <h1 className="text-4xl font-bold text-center text-black mb-8">Nature of Bonding, Structure, and Properties</h1>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Key Factors Determining Substance Properties</h2>
            <ul className="list-disc pl-5 text-lg text-gray-700">
                <li>Type of Particles</li>
                <li>Type of Bonding</li>
                <li>Arrangement of Particles</li>
            </ul>
        </section>

        <section className="mb-8">
            <h3 className="text-xl font-semibold text-black mb-4">Type of Particles</h3>
            <p className="text-lg text-gray-700">
                Particles can be atoms, ions, or molecules. Ionic substances conduct electricity when melted or dissolved, and water solubility requires ions or polar molecules.
            </p>
        </section>

        <section className="mb-8">
            <h3 className="text-xl font-semibold text-black mb-4">Type of Bonding</h3>
            <p className="text-lg text-gray-700">
                Bonding can be ionic, covalent, metallic, or involve weak intermolecular forces. Stronger bonds lead to higher melting/boiling points and hardness.
                Example: SiO₂ (strong covalent bonds) vs. CO₂ (weak intermolecular forces).
            </p>
        </section>

        <section className="mb-8">
            <h3 className="text-xl font-semibold text-black mb-4">Arrangement of Particles</h3>
            <p className="text-lg text-gray-700">
                Particles can be arranged in planes, layers, or 3D networks, affecting properties like hardness and conductivity.
                Example: Graphite (2D layers) vs. Diamond (3D network).
            </p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Electrical Conductivity</h2>
            <ul className="list-disc pl-5 text-lg text-gray-700">
                <li><strong>Ionic Compounds:</strong> Non-conductive in solid state but conductive when melted or dissolved.</li>
                <li><strong>Acids:</strong> Conduct electricity when dissolved due to ionization.</li>
                <li><strong>Metals:</strong> Good conductors due to free electrons.</li>
            </ul>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Diamond Properties and Uses</h2>
            <p className="text-lg text-gray-700">
                Diamond is the hardest known material, used in ornaments, cutting tools, medical instruments, and audio equipment.
            </p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Graphite Properties and Uses</h2>
            <p className="text-lg text-gray-700">
                Graphite has a 2D layered structure with weak van der Waals forces between layers. It is used in refractory items, nuclear reactors, lubricants, and pencils.
            </p>
        </section>

        <section>
            <h2 className="text-2xl font-semibold text-black mb-4">Comparing Ionic and Covalent Compounds</h2>
            <ul className="list-disc pl-5 text-lg text-gray-700">
                <li><strong>Ionic:</strong> Strong in compression, brittle, poor solid conductors.</li>
                <li><strong>Covalent (giant structures):</strong> Strong, hard, typically poor conductors.</li>
            </ul>
        </section>
    </div>
</div>
    </div>
  );
};

export default MagneticMindmap;