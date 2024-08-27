import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const Mindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">Magnetism</h1>
        <PlantUMLDiagram
          code={`
       @startmindmap
*[#LightBlue] Magnetism
** History
***[#LightGreen] 600 BC: Loadstone discovered
***[#LightGreen] Name origin: Magnesia region
***[#LightGreen] 20th century: Understanding and technology development
** Basis of Magnetism
***[#Orange] Motion of charge particles
****[#Yellow] Electrons orbiting nucleus
****[#Yellow] Electric current in wires
left side
** Domain Theory of Magnetism
***[#Pink] Atomic Level
****[#LightPink] Electrons produce magnetism
****[#LightPink] Each electron creates tiny magnet
****[#LightPink] North and South poles
****[#LightPink] Nucleus contribution negligible
***[#Pink] Material Level
****[#LightPink] Domains: Groups of aligned atoms
****[#LightPink] Unmagnetized: Random domain orientation
****[#LightPink] Magnetized: Aligned domains
** Magnetic Forces
***[#Cyan] Like poles repel
***[#Cyan] Unlike poles attract
***[#Cyan] Magnets attract magnetic materials
** Applications
***[#Purple] Numerous technological applications
@endmindmap`}
        />
      </section>
    </div>
  );
};

export default Mindmap;
