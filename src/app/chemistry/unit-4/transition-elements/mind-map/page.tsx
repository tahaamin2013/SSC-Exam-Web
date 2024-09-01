import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from 'next/image'

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">Transition Elements
        </h1>
        <PlantUMLDiagram
          code={`
@startmindmap
<style>
mindmapDiagram {
    node {
        BackgroundColor lightGreen
        BorderColor darkGreen
        FontColor black
    }
    :depth(1) {
      BackgroundColor lightBlue
    }
    :depth(2) {
      BackgroundColor lightYellow
    }
    :depth(3) {
      BackgroundColor lightPink
    }
}
</style>
* Transition Elements
** High Density
*** Due to higher atomic masses and closely packed structures
*** Examples
**** Iron (Fe): 7.87 g/cm³
**** Tungsten (W): 19.3 g/cm³
** High Melting Points
*** Due to strong metallic bonding
*** Examples
**** Tungsten (W): 3422°C
**** Platinum (Pt): 1768°C
** Variable Oxidation States
*** Due to participation of d-sub shell in bonding
*** Examples
**** Iron (Fe): +2 and +3
**** Copper (Cu): +1 and +2
** Coloured Compounds
*** Examples
**** Copper compounds: blue or green
**** Chromium compounds: red or green
** Catalysts for Industrial Processes
*** Iron
**** Haber Process (ammonia synthesis)
*** Platinum and Palladium
**** Catalytic converters
*** Nickel
**** Margarine manufacture
*** Platinum
**** Contact process (sulfuric acid manufacture)
@endmindmap`}
        />

      </section>
       
      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-10 font-sans">
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-[2rem]">
        <h1 className="text-4xl font-bold text-center text-black mb-8">Transition Elements (d-block elements, Groups 3-12)</h1>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">High Density</h2>
            <p className="text-lg text-gray-700">
                Transition elements have high densities due to their higher atomic masses and closely packed structures. Examples include:
            </p>
            <ul className="list-disc pl-5 text-lg text-gray-700">
                <li>Iron (Fe): 7.87 g/cm³</li>
                <li>Tungsten (W): 19.3 g/cm³</li>
            </ul>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">High Melting Points</h2>
            <p className="text-lg text-gray-700">
                The strong metallic bonding from partially filled d-sub shells results in high melting points for transition elements. Examples include:
            </p>
            <ul className="list-disc pl-5 text-lg text-gray-700">
                <li>Tungsten (W): 3422°C</li>
                <li>Platinum (Pt): 1768°C</li>
            </ul>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Variable Oxidation States</h2>
            <p className="text-lg text-gray-700">
                Transition elements exhibit variable oxidation states due to the participation of d-sub shells in bonding along with s-sub shells. Examples include:
            </p>
            <ul className="list-disc pl-5 text-lg text-gray-700">
                <li>Iron (Fe): +2 and +3</li>
                <li>Copper (Cu): +1 and +2</li>
            </ul>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Colored Compounds</h2>
            <p className="text-lg text-gray-700">
                Transition elements often form vibrant colored compounds. Examples include:
            </p>
            <ul className="list-disc pl-5 text-lg text-gray-700">
                <li>Copper compounds: Blue or green</li>
                <li>Chromium compounds: Red or green</li>
            </ul>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Catalytic Properties</h2>
            <p className="text-lg text-gray-700">
                Transition elements are widely used as catalysts in various industrial processes. Examples include:
            </p>
            <ul className="list-disc pl-5 text-lg text-gray-700">
                <li>Iron: Haber Process (ammonia synthesis)</li>
                <li>Platinum and Palladium: Catalytic converters (emission reduction)</li>
                <li>Nickel: Margarine manufacture</li>
                <li>Platinum: Contact process (sulfuric acid production)</li>
            </ul>
        </section>
    </div>
</div>

    </div>
  );
};

export default MagneticMindmap;