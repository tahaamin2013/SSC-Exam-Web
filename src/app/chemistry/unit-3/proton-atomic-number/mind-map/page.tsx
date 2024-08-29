import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">Proton or Atomic Number
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
* Proton or Atomic Number
** What Determines Element Identity
*** Proton number (Z)
*** Equal to number of electrons in neutral atoms
*** Examples
**** H atom: 1 proton, atomic number 1
**** He atom: 2 protons, atomic number 2
**** C atom: 6 protons, atomic number 6
** Uniqueness of Proton Number
*** Distinguishes elements
*** Determines element properties
*** Determines position in periodic table
*** Examples
**** Carbon: 6 protons
**** Sodium: 11 protons
**** Nitrogen: 7 protons
**** Oxygen: 8 protons
left side
** Nucleon Number or Atomic Mass
*** Total protons + neutrons
*** Isotopes: atoms with different neutron numbers
*** Neutron calculation: mass number - atomic number
** Example Problem
*** Atomic number: 17, Mass number: 35
*** Solution
**** Protons: 17
**** Neutrons: 18
** Radioactivity
*** Unbalanced nuclear forces
*** Radioactive decay
*** Changes in proton number can change element identity
*** Examples
**** Carbon-14 decay to Nitrogen-14
**** Uranium-238 decay to Lead-206
@endmindmap`}
        />
       
      </section>
       
    </div>
  );
};

export default MagneticMindmap;