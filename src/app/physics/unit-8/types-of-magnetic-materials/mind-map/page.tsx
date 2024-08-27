import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">INDUCED MAGNETISM</h1>
        <PlantUMLDiagram
          code={`
@startmindmap
* Types of Magnetic Materials
** Diamagnetic Materials
*** Characteristics
**** Net magnetic field at single atom level is zero
**** Slightly repelled by magnetic field
**** Do not retain magnetic properties when external field removed
**** Magnetic field intensity small and opposite to external field
*** Examples
**** Copper
**** Zinc
**** Bismuth
**** Silver
**** Gold
**** Marble
**** Water
**** Glass
**** Wood
left side
** Paramagnetic Materials
*** Characteristics
**** Electrons' spin and orbital axis cannot completely cancel
**** Align with external magnetic field
**** Feebly magnetized
**** Experience weak attraction to magnets
**** Magnetic field intensity small and along external field direction
*** Examples
**** Tungsten
**** Aluminum
**** Lithium
**** Sodium
** Ferromagnetic Materials
*** Characteristics
**** Net magnetism at atomic level even without external field
**** Strongly magnetized in parallel to applied field
**** Strongly attracted to magnets
**** Retain magnetization after removal of external field
**** Magnetic field intensity very large and along external field direction
*** Examples
**** Iron
**** Cobalt
**** Nickel
**** Some metallic alloys

@endmindmap`}
        />
      </section>

      <section>
        <h1 className="text-4xl font-bold text-blue-500">DIFFERENCE BETWEEN MAGNETIC AND NON-MAGNETIC MATERIALS:</h1>
        <PlantUMLDiagram
          code={`
@startmindmap
<style>
mindmapDiagram {
  node {
    BackgroundColor lightGreen
  }
  :depth(1) {
    BackgroundColor lightBlue
  }
  :depth(2) {
    BackgroundColor pink
  }
}
</style>
* Magnetic vs Non-Magnetic Materials
** Magnetic Materials
*** Attracted to a magnet
*** Atomic states are aligned
*** Respond to magnetic field
*** Have magnetic field around them
*** Can attract and repel other magnetic materials
*** Examples
**** Nickel
**** Cobalt
**** Steel
**** Iron
** Non-Magnetic Materials
*** Not attracted to a magnet
*** Atomic states are random
*** Do not respond to magnetic field
*** No magnetic field around them
*** Cannot attract or repel any magnetic material
*** Examples
**** Rubber
**** Plastic
**** Wood
**** Copper

@endmindmap`}
        />
      </section>
    </div>
  );
};

export default MagneticMindmap;