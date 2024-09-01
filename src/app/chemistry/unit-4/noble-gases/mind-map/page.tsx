import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from 'next/image'

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">Noble Gases
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
* Noble Gases
** Characteristics
*** Group 18 (VIII-A) elements
*** General electron configuration: ns²np⁶
**** Exception: Helium (1s²)
*** Properties
**** Odorless
**** Colorless
**** Monoatomic
**** Low reactivity
**** Complete valence shell
** Elements
*** Helium (He)
*** Neon (Ne)
*** Argon (Ar)
*** Krypton (Kr)
*** Xenon (Xe)
*** Radon (Rn)
*** Oganesson (Og)
** Applications
*** Lighting (e.g., neon signs)
*** Refrigeration systems
*** Welding
*** Filling gas exhaust lines
*** Shielding gas in industrial processes
** Electronic Configuration
*** Helium: 1s²
*** Neon: 1s² 2s² 2p⁶
*** Argon: [Ne] 3s² 3p⁶
*** Krypton: [Ar] 4s² 3d¹⁰ 4p⁶
*** Xenon: [Kr] 5s² 4d¹⁰ 5p⁶
*** Radon: [Xe] 6s² 4f¹⁴ 5d¹⁰ 6p⁶
*** Oganesson: [Rn] 7s² 5f¹⁴ 6d¹⁰ 7p⁶
@endmindmap`}
        />

      </section>
      <div class="bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800">
    <div class="max-w-4xl mx-auto p-8">
        <h1 class="text-4xl font-bold text-center mb-8">Noble Gases (Group 18 / Group VIII-A)</h1>
        <div class="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <h2 class="text-3xl font-semibold mb-4">General Characteristics</h2>
            <ul class="list-disc list-inside space-y-2 text-lg">
                <li><strong>Electron configuration:</strong> ns²np⁶ (except He: 1s²)</li>
                <li><strong>Properties:</strong> Odorless, colorless, monoatomic gases</li>
                <li>Very low reactivity due to complete valence shell</li>
                <li>Stable and unlikely to form chemical bonds under normal conditions</li>
            </ul>
        </div>

        <div class="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <h2 class="text-3xl font-semibold mb-4">Elements</h2>
            <ul class="grid grid-cols-2 gap-4 text-lg">
                <li><strong>Helium (He)</strong></li>
                <li><strong>Neon (Ne)</strong></li>
                <li><strong>Argon (Ar)</strong></li>
                <li><strong>Krypton (Kr)</strong></li>
                <li><strong>Xenon (Xe)</strong></li>
                <li><strong>Radon (Rn)</strong></li>
                <li><strong>Oganesson (Og)</strong></li>
            </ul>
        </div>

        <div class="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <h2 class="text-3xl font-semibold mb-4">Applications</h2>
            <ul class="list-disc list-inside space-y-2 text-lg">
                <li>Lighting (e.g., neon signs)</li>
                <li>Refrigeration systems</li>
                <li>Welding</li>
                <li>Filling gas exhaust lines</li>
                <li>Shielding gas in industrial processes</li>
            </ul>
        </div>

        <div class="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <h2 class="text-3xl font-semibold mb-4">Electronic Configurations</h2>
            <ul class="list-none space-y-2 text-lg">
                <li><strong>Helium (2):</strong> 1s²</li>
                <li><strong>Neon (10):</strong> 1s² 2s² 2p⁶</li>
                <li><strong>Argon (18):</strong> 1s² 2s² 2p⁶ 3s² 3p⁶</li>
                <li><strong>Krypton (36):</strong> 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶</li>
                <li><strong>Xenon (54):</strong> 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶</li>
                <li><strong>Radon (86):</strong> 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶</li>
                <li><strong>Oganesson (118):</strong> 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d¹⁰ 7p⁶</li>
            </ul>
        </div>

        <div class="bg-white p-6 rounded-2xl shadow-lg">
            <h2 class="text-3xl font-semibold mb-4">Key Points</h2>
            <ul class="list-disc list-inside space-y-2 text-lg">
                <li>Noble gases are found in Group 18 of the periodic table</li>
                <li>Their stable electron configuration contributes to their low reactivity</li>
                <li>Applications utilize their inert nature and unique properties</li>
            </ul>
        </div>
    </div>
</div>
    </div>
  );
};

export default MagneticMindmap;