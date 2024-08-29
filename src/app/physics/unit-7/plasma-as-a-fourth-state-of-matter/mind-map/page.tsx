import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">PLASMA AS A FOURTH STATE OF MATTER</h1>
        <PlantUMLDiagram
          code={`
@startmindmap
<style>
mindmapDiagram {
  node {
    BackgroundColor lightBlue
  }
  :depth(1) {
    BackGroundColor lightGreen
  }
  :depth(2) {
    BackGroundColor lightYellow
  }
  :depth(3) {
    BackGroundColor lightPink
  }
}
</style>
* Plasma as the Fourth State of Matter
** Composition
*** Positive ions
*** Free electrons
*** Neutral atoms
** Conditions for Existence
*** Very high temperatures
*** High pressures
*** High electric and magnetic fields
** Occurrence in Universe
*** Sun
*** Stars
*** Nebulas
*** Auroras
*** Neon lights
*** Lightning
** Characteristics
*** Hot
*** Bright
*** Highly ionized
** Prevalence
*** 99% of visible universe
left side
** Formation Process
*** Continuous heating of gas
*** Increase in kinetic energy
*** Decrease in attractive forces
*** Powerful collisions
*** Electron removal
*** Formation of positive ions
** Properties
*** Highly conductive
** Related Phenomena
*** Auroras
**** Solar phenomenon
**** Colored lights in sky
**** Caused by charged particles from Sun
*** Nebulae
**** Massive clouds of dust and gas
**** Contains fundamental elements and ionized gases
**** Emit radiation of various colors
@endmindmap`}
        />
       
      </section>
    </div>
  );
};

export default MagneticMindmap;