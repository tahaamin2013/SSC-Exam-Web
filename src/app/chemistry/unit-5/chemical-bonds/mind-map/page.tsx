import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from 'next/image'

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">CHEMICAL BONDING
        </h1>
        <PlantUMLDiagram
          code={`
@startmindmap
* UNIT 05: CHEMICAL BONDING
** Properties of Compounds
*** Explained in terms of bonding and structure
*** Strength and Conductivity
**** Determined by the type of chemical bond
*** Forces of Attraction
**** Impact on melting and boiling points
*** Conduction of Electricity
**** Availability of free charged particles
**** Ionic compounds (solid and molten)
**** Covalent compounds
**** Metallic bonds
*** Ionization in Water
**** Example: Acids dissolving in water
** Industrial Usage of Materials
*** Graphite
**** Lubricant
**** Electrode
*** Diamond
**** Cutting tools
*** Metals
**** Wires
**** Sheets
** Drawing Structures of Compounds
*** Ionic Bonds in Binary Compounds
**** NaBr, NaF, CaCl2
*** Simple Molecules
**** H2, Cl2, O2, N2, H2O, CH4, NH3, HCl, CH3OH, C2H4, CO2, HCN
** INTRODUCTION
*** Matter Composition
**** Compounds and mixtures
**** Example: Human, animal, plant bodies, rocks, soil, petroleum
*** Bonding of Atoms
**** Impact on properties of substances
*** Understanding Bonding
**** Key to understanding substance behavior
** 5.1 WHY DO ATOMS REACT?
*** Noble Gases
**** Stable and chemically inert
**** General electronic configuration
*** Octet Rule
**** Atoms are most stable with 8 electrons in valence shell
**** Example: Na, Cl
*** Duplet Rule
**** Tendency to acquire 2 electronic configurations
**** Example: Li, Be
@endmindmap
`}
        />

      </section>
       
    </div>
  );
};

export default MagneticMindmap;