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
       
    </div>
  );
};

export default MagneticMindmap;