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
       
    </div>
  );
};

export default MagneticMindmap;