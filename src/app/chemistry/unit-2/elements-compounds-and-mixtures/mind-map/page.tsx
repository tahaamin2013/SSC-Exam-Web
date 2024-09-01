import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
    return (
        <div className="p-8 flex flex-col gap-8">
            <section>
                <h1 className="text-4xl font-bold text-blue-500">ELEMENTS, COMPOUNDS AND MIXTURES</h1>
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
    :depth(3) {
      BackgroundColor lightyellow
    }
}
</style>
* Matter Classification
** Pure Substance
*** Element
**** Simplest form of matter
**** Made up of same type of atoms
**** Same atomic number (proton number)
**** Cannot be broken down chemically
*** Compound
**** Formed when two or more different atoms chemically combine
**** New substance with different properties
** Mixture
*** Homogeneous
*** Heterogeneous
**** Colloid
**** Suspension
*** Physical combination of substances
*** Particles have different chemical compositions
*** Example: Tea (milk, water, tea leaves, sugar)
left side
** Properties of Matter
*** Physical Properties
*** Chemical Properties
** Changes in Matter
*** Physical Change
**** Alters physical properties
*** Chemical Change
**** Forms a new substance
@endmindmap`}
                />
                <PlantUMLDiagram
                    code={`
@startmindmap
* Dispersed Substances / Mixture
** Colloid
*** Definition
**** Microscopic particles dispersed in a medium
**** Particles not dissolved
*** Characteristics
**** Particles do not settle if undisturbed
*** Example
**** Pumice (air in stone)
** Emulsion
*** Definition
**** Type of colloid
**** Liquid particles in another liquid
*** Example
**** Milk (butterfat in water-based medium)
** Suspension
*** Definition
**** Similar to colloid, but larger particles
*** Characteristics
**** Particles eventually settle
*** Example
**** Sand in water
@endmindmap`}
                />
            </section>

            <div className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow-xl">
                <h1 className="text-3xl font-extrabold text-purple-800 mb-6">Classification of Matter</h1>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-blue-700 mb-3">I. Classification of Matter</h2>
                    <h3 className="text-xl font-bold text-purple-600 mb-2">A. Pure Substances</h3>
                    <ul className="list-disc list-inside text-blue-900 ml-8">
                        <li>1. Elements</li>
                        <li>2. Compounds</li>
                    </ul>

                    <h3 className="text-xl font-bold text-purple-600 mt-4 mb-2">B. Mixtures</h3>
                    <ul className="list-disc list-inside text-blue-900 ml-8">
                        <li>1. Homogeneous</li>
                        <li>2. Heterogeneous</li>
                        <ul className="list-disc list-inside text-blue-700 ml-8">
                            <li>a. Colloid</li>
                            <li>b. Suspension</li>
                        </ul>
                        <div className="p-6 bg-white text-gray-900 border border-gray-200 rounded-lg shadow-md">
  <h1 className="text-4xl font-bold mb-6">Colloids, Emulsions, and Suspensions</h1>

  <section className="mb-6">
    <h2 className="text-3xl font-semibold mb-4">1. Colloid</h2>
    <p className="mb-4">
      <strong>Definition:</strong> A substance with microscopic particles dispersed in a medium, not dissolved.
    </p>
    <p className="mb-4">
      <strong>Characteristics:</strong>
      <ul className="list-disc pl-5 space-y-2">
        <li>Dispersed particles do not settle or form sediment if left undisturbed.</li>
      </ul>
    </p>
    <p>
      <strong>Example:</strong> Pumice (air particles dispersed in solid stone).
    </p>
  </section>

  <section className="mb-6">
    <h2 className="text-3xl font-semibold mb-4">2. Emulsion</h2>
    <p className="mb-4">
      <strong>Definition:</strong> A specific type of colloid.
    </p>
    <p className="mb-4">
      <strong>Characteristics:</strong>
      <ul className="list-disc pl-5 space-y-2">
        <li>Microscopic particles of liquid dispersed in another liquid.</li>
      </ul>
    </p>
    <p>
      <strong>Example:</strong> Milk (lipophilic butterfat particles dispersed in a water-based medium).
    </p>
  </section>

  <section className="mb-6">
    <h2 className="text-3xl font-semibold mb-4">3. Suspension</h2>
    <p className="mb-4">
      <strong>Definition:</strong> Similar to a colloid, but with larger dispersed particles.
    </p>
    <p className="mb-4">
      <strong>Characteristics:</strong>
      <ul className="list-disc pl-5 space-y-2">
        <li>Dispersed particles will eventually settle or form sediment.</li>
      </ul>
    </p>
    <p>
      <strong>Example:</strong> Sand in water (when shaken, sand disperses; when left alone, it settles at the bottom).
    </p>
  </section>

  <section>
    <h2 className="text-3xl font-semibold mb-4">## Key Differences</h2>
    <ul className="list-disc pl-5 space-y-4 mb-4">
      <li>
        <strong>Particle Size:</strong>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Colloids and Emulsions: Microscopic particles</li>
          <li>Suspensions: Larger particles</li>
        </ul>
      </li>
      <li>
        <strong>Settling Behavior:</strong>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Colloids and Emulsions: Do not settle</li>
          <li>Suspensions: Will settle over time</li>
        </ul>
      </li>
      <li>
        <strong>Medium:</strong>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Colloids: Any medium (solid, liquid, or gas)</li>
          <li>Emulsions: Specifically liquid in liquid</li>
          <li>Suspensions: Typically solid in liquid</li>
        </ul>
      </li>
    </ul>
  </section>
</div>

                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-blue-700 mb-3">II. Elements</h2>
                    <h3 className="text-xl font-bold text-purple-600 mb-2">A. Definition</h3>
                    <p className="text-blue-900 bg-blue-100 p-4 rounded-lg">Simplest form of matter made up of the same type of atoms.</p>

                    <h3 className="text-xl font-bold text-purple-600 mt-4 mb-2">B. Characteristics</h3>
                    <ul className="list-disc list-inside text-blue-900 ml-8">
                        <li>1. Consist of atoms with the same atomic number (proton number).</li>
                        <li>2. Cannot be broken down through chemical means.</li>
                    </ul>

                    <h3 className="text-xl font-bold text-purple-600 mt-4 mb-2">C. Physical vs. Chemical Changes</h3>
                    <ul className="list-disc list-inside text-blue-900 ml-8">
                        <li>1. Physical change: Alters physical properties.</li>
                        <li>2. Chemical change: Forms a new substance.</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-blue-700 mb-3">III. Compounds</h2>
                    <h3 className="text-xl font-bold text-purple-600 mb-2">A. Definition</h3>
                    <p className="text-blue-900 bg-blue-100 p-4 rounded-lg">Substance formed when two or more different atoms chemically combine.</p>

                    <h3 className="text-xl font-bold text-purple-600 mt-4 mb-2">B. Key Points</h3>
                    <ul className="list-disc list-inside text-blue-900 ml-8">
                        <li>1. Result of a chemical reaction.</li>
                        <li>2. New substance with properties different from constituent elements.</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-blue-700 mb-3">IV. Mixtures</h2>
                    <h3 className="text-xl font-bold text-purple-600 mb-2">A. Definition</h3>
                    <p className="text-blue-900 bg-blue-100 p-4 rounded-lg">Substance formed when two or more substances physically combine.</p>

                    <h3 className="text-xl font-bold text-purple-600 mt-4 mb-2">B. Characteristics</h3>
                    <ul className="list-disc list-inside text-blue-900 ml-8">
                        <li>1. Does not contain the same types of particles.</li>
                        <li>2. Particles have different chemical compositions.</li>
                    </ul>

                    <h3 className="text-xl font-bold text-purple-600 mt-4 mb-2">C. Example</h3>
                    <p className="text-blue-900 bg-blue-100 p-4 rounded-lg">Tea (combination of milk, water, tea leaves, and sugar).</p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-blue-700 mb-3">V. Properties of Matter</h2>
                    <ul className="list-disc list-inside text-blue-900 ml-8">
                        <li>A. Physical properties</li>
                        <li>B. Chemical properties</li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default MagneticMindmap;