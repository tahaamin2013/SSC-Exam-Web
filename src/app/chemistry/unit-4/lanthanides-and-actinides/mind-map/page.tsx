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
       
    </div>
  );
};

export default MagneticMindmap;