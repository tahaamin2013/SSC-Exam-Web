import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from 'next/image'

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">METALLIC BONDS
        </h1>
        <PlantUMLDiagram
          code={`
@startmindmap
* 5.6 METALLIC BONDS
** Definition
*** Special bonding in metals where valence electrons are free and delocalized.
*** Metal atoms lose electrons, forming positive ions.
*** Free electrons move throughout the metal structure, forming an electron sea.
** Delocalised Electrons
*** The electron sea consists of delocalized electrons that are not confined to individual atoms.
*** Strong electrostatic forces between metal cations and electron sea hold the structure together.
*** This type of bonding is called metallic bonding.
** Properties of Metals (Due to Metallic Bonding)
*** Malleability
**** Metals can be bent and shaped due to layers of atoms sliding over each other.
*** Ductility
**** Metals can be drawn into wires due to the same sliding layers.
*** High Melting and Boiling Points
**** Strong metallic bonds lead to high melting and boiling points, making metals thermally stable.
*** High Electrical Conductivity
**** Delocalized electrons allow metals to conduct electricity efficiently.
*** High Thermal Conductivity
**** Delocalized electrons transfer energy, making metals good conductors of heat.
*** Metallic Lustre
**** The electron sea reflects light, giving metals their shiny appearance.
** 5.6.1 Structure and Properties of Metals (Industrial Purposes)
*** Giant Structures
**** Metals have giant structures with strong metallic bonds, contributing to high thermal stability.
*** Sliding Layers
**** The ability of metal layers to slide over each other makes them malleable and ductile, suitable for industrial shaping into wires and sheets.
*** Conductivity
**** Metals are good conductors of electricity and thermal energy due to the mobility of delocalized electrons.
@endmindmap


`}
        />

      </section>
       
    </div>
  );
};

export default MagneticMindmap;