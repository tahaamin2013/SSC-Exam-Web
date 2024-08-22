import React from 'react';

const Unit05_5 = () => {
  return (
    <div className="p-8">
      <h3 className="text-lg font-semibold mt-8">5.5 NATURE OF BONDING, STRUCTURE, AND PROPERTIES</h3>

      <p className="mt-4">
        Three main factors are important when determining the properties of a substance:
      </p>

      <h4 className="text-md font-semibold mt-8">1. Type of Particles</h4>
      <p className="mt-4">
        The types of elementary particles contained in a substance can be atoms, ions, or molecules. For example, substances containing ions (like sodium chloride) conduct electricity when melted or dissolved in water. To be soluble in water, the substance must contain ions or polar molecules.
      </p>

      <h4 className="text-md font-semibold mt-8">2. Type of Bonding</h4>
      <p className="mt-4">
        The way elementary particles are connected to each other determines the strength of the substance. Particles may have ionic, covalent, metallic, or weak intermolecular forces. Stronger bonds result in higher melting/boiling points and hardness. For example, silicon dioxide (SiO₂) has strong covalent bonds forming a giant covalent structure, making it very hard and difficult to melt. In contrast, carbon dioxide (CO₂) has strong covalent bonds between C and O atoms, but weak intermolecular forces, resulting in a low melting/boiling point.
      </p>

      <h4 className="text-md font-semibold mt-8">3. Arrangement of Particles</h4>
      <p className="mt-4">
        Particles may be arranged in planes (e.g., polymers), layers (e.g., clays, graphite), or three-dimensional networks. Graphite&apos; s atoms are arranged in 2D layers, allowing them to slide over each other, which makes graphite useful for writing (e.g., pencils). Diamonds have a three-dimensional network of carbon atoms, making them the hardest substance on earth. Metals also have giant structures with strong metallic bonding, resulting in high melting/boiling points and thermal stability.
      </p>

      <h4 className="text-md font-semibold mt-8">Conduction of Electricity in Ionic Compounds</h4>
      <p className="mt-4">
        Ionic compounds cannot conduct electricity in the solid state because their ions are fixed in place. When melted or dissolved in water, the ions move freely, allowing electricity to pass through.
      </p>

      <h4 className="text-md font-semibold mt-8">Conduction of Electricity through Acids</h4>
      <p className="mt-4">
        Covalent compounds generally do not conduct electricity because they lack free charged particles. However, some covalent compounds like acids (e.g., HCl, H₂SO₄) conduct electricity when dissolved in water due to ionization, producing free ions that can move in solution.
      </p>

      <h4 className="text-md font-semibold mt-8">Metals and Electrical Conductivity</h4>
      <p className="mt-4">
        Metals are good conductors of electricity due to free electrons that move under the influence of an electric field. This property allows electricity to flow through metals efficiently.
      </p>

      <h4 className="text-md font-semibold mt-8">Properties and Uses of Diamond</h4>
      <p className="mt-4">
        Diamond is an allotrope of carbon with a diamond cubic crystal lattice structure. Its strong covalent bonds and rigid tetrahedral arrangement make it the hardest known material.
      </p>
      <img src="/images/diamond_structure.jpg" alt="Structure of diamond" className="w-full mt-4" />

      <p className="mt-4">
        Properties and uses of diamond include:
      </p>
      <ul className="list-disc pl-8 mt-4">
        <li>Used in ornaments like rings and necklaces due to its durability and lustre.</li>
        <li>Hardness makes it useful for cutting and drilling tools.</li>
        <li>Used in medical tools and beauty products.</li>
        <li>Produces high-quality sound, used in DJ equipment and recorders.</li>
      </ul>

      <h4 className="text-md font-semibold mt-8">Graphite</h4>
      <p className="mt-4">
        Graphite is an allotrope of carbon with a 2D layered structure. Each carbon atom bonds with three others, forming hexagonal rings. The weak van der Waals forces between layers allow them to slide, making graphite useful in various applications.
      </p>
      <img src="/images/graphite_structure.jpg" alt="Structure of graphite" className="w-full mt-4" />

      <p className="mt-4">
        Uses of graphite include:
      </p>
      <ul className="list-disc pl-8 mt-4">
        <li>Used in high-temperature refractory items and electrical metallurgical furnaces.</li>
        <li>Utilized in nuclear reactors and various engineering sectors.</li>
        <li>Commonly used in lubricants, paints, and pencils.</li>
      </ul>

      <h4 className="text-md font-semibold mt-8">Contrasting Ionic and Covalent Compounds</h4>
      <p className="mt-4">
        Ionic compounds are strong in compression but brittle and poor conductors in solid form. They conduct electricity when melted or dissolved in water. Covalent compounds with giant structures, like diamond and quartz, are typically strong and hard but usually poor conductors of electricity.
      </p>
    </div>
  );
};

export default Unit05_5;
