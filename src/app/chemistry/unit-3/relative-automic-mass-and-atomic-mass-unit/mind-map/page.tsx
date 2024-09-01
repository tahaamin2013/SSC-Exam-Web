import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">Relative Atomic Mass and Atomic Mass Unit
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
* Relative Atomic Mass and Atomic Mass Unit
** Historical Context
*** Early chemists' calculations
**** Based on element combinations in compounds
**** Dalton, Gay Lussac, Lavoisier, Avogadro, Berzelius
** Atomic Mass Measurement
*** Cannot be measured directly
*** Determined relative to a standard
** Standard: Carbon-12 Isotope
*** Chosen in 1961
*** Assigned value: 12 atomic mass units (amu)
** Atomic Mass Unit (amu)
*** Definition: 1/12 mass of carbon-12 atom
** Relative Atomic Mass
*** Mass compared to carbon-12 standard
*** Expressed in atomic mass units (amu)
** Examples
*** Hydrogen: ~1.008 amu
*** Oxygen: 15.9994 amu
*** Sodium: 22.9898 amu
*** Aluminum: 26.9815 amu
@endmindmap`}
        />
       
      </section>
      <div className="p-8 bg-gradient-to-r from-blue-100 to-teal-200 rounded-lg shadow-xl">
    <h1 className="text-3xl font-extrabold text-teal-800 mb-6">3.4 Relative Atomic Mass and Atomic Mass Unit</h1>

    <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Historical Context</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
            <ul className="list-disc list-inside text-blue-900 ml-6">
                <li>Early chemists (Dalton, Gay Lussac, Lavoisier, Avogadro, Berzelius) made initial calculations based on element combination proportions in compounds</li>
                <li>Direct measurement of atomic masses not possible due to the extremely small size of atoms</li>
            </ul>
        </div>
    </div>

    <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Standardization of Atomic Mass</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
            <ul className="list-disc list-inside text-blue-900 ml-6">
                <li>1961: Carbon-12 isotope chosen as the standard</li>
                <li>Carbon-12 assigned a value of exactly 12 atomic mass units (amu)</li>
                <li>All other atomic masses compared to this standard</li>
            </ul>
        </div>
    </div>

    <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Atomic Mass Unit (amu)</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-blue-900">
                Definition: One-twelfth the mass of a carbon-12 atom<br />
                Used to express atomic mass (also known as atomic weight)
            </p>
        </div>
    </div>

    <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Relative Atomic Mass</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-blue-900">
                The mass of an atom compared to the mass of the carbon-12 standard<br />
                Expressed in atomic mass units (amu)
            </p>
        </div>
    </div>

    <div>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Examples of Relative Atomic Masses</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
            <ul className="list-disc list-inside text-blue-900 ml-6">
                <li>Hydrogen: ~1.008 amu (about 8.40% as massive as carbon-12)</li>
                <li>Oxygen: 15.9994 amu</li>
                <li>Sodium: 22.9898 amu</li>
                <li>Aluminum: 26.9815 amu</li>
            </ul>
        </div>
    </div>
</div>

    </div>
  );
};

export default MagneticMindmap;