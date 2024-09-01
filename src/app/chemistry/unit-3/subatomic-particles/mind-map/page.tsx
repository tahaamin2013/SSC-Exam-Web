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
      <div className="p-8 bg-gradient-to-r from-indigo-100 to-blue-200 rounded-lg shadow-xl">
    <h1 className="text-3xl font-extrabold text-blue-800 mb-6">3.2 Subatomic Particles</h1>

    <div className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Main Subatomic Particles</h2>
        
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">1. Proton</h3>
            <ul className="list-disc list-inside text-blue-900 ml-6">
                <li>Relative charge: +1</li>
                <li>Relative mass: ~1 atomic mass unit (amu) or 1.6726 x 10<sup>-27</sup> kg</li>
            </ul>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">2. Neutron</h3>
            <ul className="list-disc list-inside text-blue-900 ml-6">
                <li>Relative charge: 0 (neutral)</li>
                <li>Relative mass: ~1 atomic mass unit (amu) or 1.6749 x 10<sup>-27</sup> kg</li>
            </ul>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">3. Electron</h3>
            <ul className="list-disc list-inside text-blue-900 ml-6">
                <li>Relative charge: -1</li>
                <li>Relative mass: ~1/1836 amu or 9.11 x 10<sup>-31</sup> kg</li>
            </ul>
        </div>
    </div>

    <div className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Location and Interactions</h2>
        <ul className="list-disc list-inside text-blue-900 ml-6">
            <li>Protons and neutrons: Found in the nucleus</li>
            <li>Electrons: Orbit around the nucleus in energy levels or shells</li>
            <li>Nuclear force: Holds neutrons and protons together in the nucleus
                <ul className="list-disc list-inside text-blue-900 ml-6">
                    <li>Exists between: neutron-neutron, proton-proton, and neutron-proton</li>
                </ul>
            </li>
        </ul>
    </div>

    <div className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Mass and Charge Relationships</h2>
        <ul className="list-disc list-inside text-blue-900 ml-6">
            <li>Protons and neutrons: Similar mass (~1 amu), significant contribution to total atomic mass</li>
            <li>Electrons: Much less mass, negligible contribution to total atomic mass</li>
            <li>Atom cohesion: Interaction between negatively charged electrons and positively charged protons</li>
        </ul>
    </div>

    <div className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Behavior in Electric Fields</h2>
        <ul className="list-disc list-inside text-blue-900 ml-6">
            <li>Protons: Deflected towards negative plate</li>
            <li>Electrons: Deflected towards positive plate (more strongly than protons at same speed)</li>
            <li>Neutrons: No deflection, travel straight</li>
        </ul>
    </div>

    <div className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Charge Neutrality</h2>
        <ul className="list-disc list-inside text-blue-900 ml-6">
            <li>Atoms are electrically neutral</li>
            <li>Number of protons = Number of electrons in a neutral atom</li>
        </ul>
    </div>

    <div>
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Radioisotopes</h2>
        <ul className="list-disc list-inside text-blue-900 ml-6">
            <li>Definition: Atoms with unstable combination of neutrons and protons or excess energy in nucleus</li>
            <li>Isotopes: Same number of protons, different number of neutrons</li>
            <li>Examples: hydrogen-3 (protium), carbon-14, uranium-238</li>
        </ul>
    </div>
</div>

    </div>
  );
};

export default MagneticMindmap;