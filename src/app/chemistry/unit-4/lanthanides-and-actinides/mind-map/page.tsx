import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from 'next/image'

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500"> Lanthanides & Actinides
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
}
</style>
* Lanthanides & Actinides
** Lanthanides
*** Also known as "rare earth elements"
*** Series of 14 elements
*** Located at the bottom of the periodic table
*** Atomic numbers 57 to 71
** Actinides
*** Series of 14 elements
*** Located just below lanthanides
*** Atomic numbers 89 to 103
@endmindmap`}
        />

      </section>
      <div className="bg-gradient-to-r from-green-100 to-blue-100 text-gray-800">
        <div className="max-w-4xl mx-auto p-8">
          <h1 className="text-4xl font-bold text-center mb-8">Lanthanides & Actinides</h1>

          <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <h2 className="text-3xl font-semibold mb-4">Lanthanides</h2>
            <p className="text-lg mb-4">Also known as &quot;rare earth elements&quot;</p>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Series of 14 elements</li>
              <li>Located at the bottom of the periodic table</li>
              <li>Include elements with atomic numbers 57 to 71</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Actinides</h2>
            <p className="text-lg mb-4">Another series of 14 elements</p>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Located just below lanthanides</li>
              <li>Include elements with atomic numbers 89 to 103</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagneticMindmap;