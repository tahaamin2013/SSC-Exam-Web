import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from 'next/image'

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">Characteristic Properties
        </h1>
        <PlantUMLDiagram
          code={`
@startmindmap
*[#FFFF00] Periodicity and Characteristic Properties
**[#FF9933] Periodic Trends
***[#66CCFF] Shielding Effect
****_ Increases down a group
****_ Constant across a period
***[#66CCFF] Atomic Size
****_ Decreases across a period
****_ Increases down a group
***[#66CCFF] Ionization Energy
****_ Increases across a period
****_ Decreases down a group
***[#66CCFF] Electron Affinity
****_ Increases (magnitude) across a period
****_ Decreases down a group
***[#66CCFF] Electronegativity
****_ Increases across a period
****_ Decreases down a group
**[#99CC00] Characteristic Properties
***[#FF6666] Metallic Character
****_ Increases down a group
****_ Decreases across a period
***[#FF6666] Reactivity
****_ Generally increases down a group
****_ Varies across a period
***[#FF6666] Density
****_ Generally increases down a group
****_ Varies across a period
***[#FF6666] Alkali Metals (Group 1)
****_ Highly reactive
****_ Soft and low density
****_ Excellent conductors
****_ Low melting points
****_ React with water
***[#FF6666] Predicting Properties
****_ Based on group trends
****_ Electronic configuration
@endmindmap`}
        />

      </section>

      <div className="bg-gradient-to-r from-blue-100 to-green-200 text-gray-900">
        <div className="max-w-4xl mx-auto p-8">
          <h1 className="text-4xl font-bold text-center mb-8">Characteristic Properties</h1>

          <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <h2 className="text-3xl font-semibold mb-4">General Trends</h2>
            <p className="text-lg mb-4">Group 1 (alkali metals) and Group 2 (alkaline earth metals) reactivity increases down the group. Atomic size increases down a group, leading to increased reactivity.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <h2 className="text-3xl font-semibold mb-4">Metallic Character</h2>
            <p className="text-lg mb-4">Definition: Tendency to lose electrons and form positive ions (cations). Trends:</p>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Increases down a group (new electronic shells, weaker nuclear attraction)</li>
              <li>Decreases across a period left to right (increased effective nuclear charge)</li>
            </ul>
            <p className="text-lg mt-4 font-semibold">Example 4.6:</p>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Higher metallic character: (a) K (over Na), (b) Na (over Mg)</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <h2 className="text-3xl font-semibold mb-4">Reactivity</h2>
            <p className="text-lg mb-4">Definition: Capability to react with other elements to form new compounds. Trends:</p>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Increases down a group (larger atomic size, weaker nuclear attraction)</li>
              <li>Varies across a period (high for Groups 1, 2, 16, and 17)</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <h2 className="text-3xl font-semibold mb-4">Density</h2>
            <p className="text-lg mb-4">Generally increases down a group (increased atomic mass and size). Varies across a period (tends to peak in the middle).</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <h2 className="text-3xl font-semibold mb-4">Characteristic Properties of Alkali Metals</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Highly reactive (increases down the group)</li>
              <li>Soft with low density (increases down the group)</li>
              <li>Excellent conductors of electricity and heat</li>
              <li>Low melting points</li>
              <li>React with water to form metal hydroxides and hydrogen gas</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <h2 className="text-3xl font-semibold mb-4">Prediction of Properties in Group 1</h2>
            <p className="text-lg mb-4">Reactivity increases down the group. General reaction with water: metal + water → metal hydroxide + hydrogen.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <h2 className="text-3xl font-semibold mb-4">Positioning Unknown Elements</h2>
            <p className="text-lg mb-4">Use electronic configuration to determine position and predict properties. Elements in the same group have similar electronic configurations and properties.</p>
            <p className="text-lg mt-4 font-semibold">Example 4.7:</p>
            <p className="text-lg">Unknown element (atomic number 19): Electronic configuration: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹. Position: Alkali metal in the 4th period.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <h2 className="text-3xl font-semibold mb-4">Concept Assessment Exercise 4.8</h2>
            <p className="text-lg mb-4">Lower metallic character:</p>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>(a) Li (compared to K)</li>
              <li>(b) Mg (compared to Ca)</li>
              <li>(c) Compare ionization energy (energy required to remove an electron) and electron affinity (energy released when an atom gains an electron)</li>
            </ul>
            <p className="text-lg mt-4 font-semibold">Example 4.8:</p>
            <p className="text-lg">Softer metal: K (compared to Na)</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Key Points</h2>
            <p className="text-lg mb-4">Characteristic properties are based on periodicity and chemical reactivity. Understanding trends in metallic character, reactivity, and density helps predict element behavior. Electronic configuration is crucial for determining an element's position and properties.</p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default MagneticMindmap;