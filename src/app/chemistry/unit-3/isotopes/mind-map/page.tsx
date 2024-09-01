import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">ISOTOPES
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
* Isotopes
** Definition
*** Same atomic number, different mass numbers
*** Same number of protons, different number of neutrons
** Characteristics
*** Chemically alike
*** Differ in physical properties
*** Contradicts Dalton&apos;satomic theory
** Examples
*** Hydrogen Isotopes
**** Protium (H-1)
**** Deuterium (H-2)
**** Tritium (H-3)
*** Carbon Isotopes
**** Carbon-12
**** Carbon-13
**** Carbon-14
*** Chlorine Isotopes
**** Chlorine-35
**** Chlorine-37
*** Uranium Isotopes
**** Uranium-234
**** Uranium-235
**** Uranium-238
** Relative Atomic Mass
*** Calculated from isotope masses and abundances
*** Example: Carbon calculation
** Uses
*** Medical applications
**** Thyroid diagnostics (I-131)
**** Blood flow tracing (Na-24)
**** Brain imaging (I-123)
**** Cancer treatment (Co-60)
*** Scientific applications
**** Photosynthesis tracing (C-14)
**** Chemical reaction studies
**** Archaeological dating
** Carbon Dating
*** Uses C-14 decay
*** Estimates age of carbon-containing substances
@endmindmap`}
        />
       
      </section>
      <div className="p-8 bg-gradient-to-r from-green-100 to-yellow-200 rounded-lg shadow-xl">
    <h1 className="text-3xl font-extrabold text-yellow-800 mb-6">3.5 Isotopes</h1>

    <div className="mb-8">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Definition and Characteristics</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-green-900 mb-4">
                Isotopes: Atoms of an element with the same atomic number but different mass numbers
            </p>
            <p className="text-green-900 mb-4">
                <strong>Similarities:</strong><br/>
                a) Same number of protons<br/>
                b) Same number of electrons<br/>
                c) Same atomic number
            </p>
            <p className="text-green-900">
                <strong>Differences:</strong><br/>
                d) Different numbers of neutrons<br/>
                e) Different mass numbers
            </p>
        </div>
    </div>

    <div className="mb-8">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Historical Context</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-green-900">
                Term "isotope" first used by Soddy<br/>
                Greek origin: "isos" (same) + "tope" (place)<br/>
                Contradicts Dalton&apos;satomic theory of identical atoms for a given element
            </p>
        </div>
    </div>

    <div className="mb-8">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Isotopes of Hydrogen</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
            <ul className="list-disc list-inside text-green-900 ml-6">
                <li>Protium (H)</li>
                <li>Deuterium (D)</li>
                <li>Tritium (T)</li>
            </ul>
            <p className="text-green-900 mt-4">
                Heavy water: Contains Deuterium instead of Protium
            </p>
        </div>
    </div>

    <div className="mb-8">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Isotopes of Carbon</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
            <ul className="list-disc list-inside text-green-900 ml-6">
                <li>Carbon-12</li>
                <li>Carbon-13</li>
                <li>Carbon-14</li>
            </ul>
        </div>
    </div>

    <div className="mb-8">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Isotopes of Chlorine</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
            <ul className="list-disc list-inside text-green-900 ml-6">
                <li>Chlorine-35</li>
                <li>Chlorine-37</li>
            </ul>
            <p className="text-green-900 mt-4">
                Natural abundance details
            </p>
        </div>
    </div>

    <div className="mb-8">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Isotopes of Uranium</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
            <ul className="list-disc list-inside text-green-900 ml-6">
                <li>Uranium-234</li>
                <li>Uranium-235</li>
                <li>Uranium-238</li>
            </ul>
            <p className="text-green-900 mt-4">
                Natural abundance and applications<br/>
                Fission of Uranium-235
            </p>
        </div>
    </div>

    <div className="mb-8">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Determination of Relative Atomic Mass</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-green-900">
                Calculation method using isotopic masses and relative abundance<br/>
                Example with carbon
            </p>
        </div>
    </div>

    <div className="mb-8">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Uses of Isotopes</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
            <ul className="list-disc list-inside text-green-900 ml-6">
                <li>Medical applications (e.g., Iodine-131, Sodium-24, Cobalt-60)</li>
                <li>Scientific applications (e.g., Carbon-14 in photosynthesis research)</li>
                <li>Archaeological dating</li>
            </ul>
        </div>
    </div>

    <div>
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Carbon Dating</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-green-900">
                Process of using Carbon-14 to estimate age of carbon-containing substances<br/>
                Principle and application in archaeology
            </p>
        </div>
    </div>
</div>

    </div>
  );
};

export default MagneticMindmap;