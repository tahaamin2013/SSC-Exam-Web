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
    </div>
  );
};

export default MagneticMindmap;