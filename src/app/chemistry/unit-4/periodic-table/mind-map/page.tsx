import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from 'next/image'

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">Periodic Table and Periodicity
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
                       <Image alt='fd' height={7000} src='/table.jpg' width={700} />

      </section>
       
    </div>
  );
};

export default MagneticMindmap;