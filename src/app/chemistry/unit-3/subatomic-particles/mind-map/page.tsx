import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">Subatomic Particles
        </h1>
        <PlantUMLDiagram
          code={`
@startmindmap
<style>
mindmapDiagram {
  node {
    BackgroundColor lightBlue
    FontColor black
    FontSize 14
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
  :depth(4) {
    BackgroundColor lightGray
  }
}
</style>

* Subatomic Particles
** Proton
*** Relative charge: +1
*** Relative mass: ~1 amu (1.6726 x 10-27 kg)
** Neutron
*** Relative charge: 0 (neutral)
*** Relative mass: ~1 amu (1.6749 x 10-27 kg)
** Electron
*** Relative charge: -1
*** Relative mass: ~1/1836 amu (9.11 x 10-31 kg)
** Location
*** Protons and neutrons in nucleus
*** Electrons orbit nucleus in energy levels/shells
** Strong nuclear force
*** Holds neutrons and protons together in nucleus
left side
** Relationships
*** Protons and neutrons have similar mass
*** Electrons have negligible mass contribution
*** Electron-proton interaction holds atoms together
** Behavior in Electric Field
*** Protons: Deflected towards negative plate
*** Electrons: Deflected towards positive plate
*** Neutrons: Go straight ahead
*** Electrons deflected more strongly than protons
** Charge Neutrality
*** Number of protons = Number of electrons
*** Net charge on atoms is zero
** Radioisotopes
*** Unstable combination of neutrons and protons
*** Show radioactive decay
*** Examples: hydrogen-3, carbon-14, uranium-238

@endmindmap`}
        />
       
      </section>
       
    </div>
  );
};

export default MagneticMindmap;