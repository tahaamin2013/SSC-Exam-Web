import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from 'next/image'

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">Periodicity of Properties
       
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

* Periodicity of Properties
** Shielding Effect
*** Definition
**** Reduction in attraction between nucleus and valence electrons
*** Trends
**** Constant across a period
**** Increases down a group
*** Examples
**** Mg > Be
**** Si > C
** Atomic Size
*** Definition
**** Average distance between nucleus and outer shell
*** Trends
**** Decreases across a period
**** Increases down a group
*** Examples
**** Mg > Al
**** Si > C
** Ionization Energy
*** Definition
**** Energy to remove outermost electron
*** Trends
**** Increases across a period
**** Decreases down a group
*** Examples
**** B < C
**** P < N
** Electron Affinity
*** Definition
**** Energy change when atom accepts an electron
*** Trends
**** Increases across a period
**** Decreases down a group
*** Examples
**** Cl > Br
**** F > Cl
** Electronegativity
*** Definition
**** Tendency to attract bonding electrons
*** Trends
**** Increases across a period
**** Decreases down a group
*** Examples
**** F > Cl
**** O > N
@endmindmap`}
        />
      </section>

    </div>
  );
};

export default MagneticMindmap;