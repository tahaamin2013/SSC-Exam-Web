import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MindmapFriction = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
        Internal Energy and Temperature of a Substance        </h1>
        <PlantUMLDiagram
          code={`@startmindmap
<style>
mindmapDiagram {
    node {
        BackgroundColor lightBlue
        BorderColor darkBlue
        FontColor black
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
    .important {
      BackgroundColor orange
      FontStyle bold
    }
    .definition {
      BackgroundColor lightCoral
      FontStyle italic
    }
}
</style>

*:Internal Energy and
Temperature of a Substance;
** Internal Energy <<definition>>
*** Total energy of particles
*** Components
**** Kinetic Energy (K.E.)
***** Translational K.E.
***** Rotational K.E.
***** Vibrational K.E.
**** Potential Energy (P.E.)
***** Due to attractive forces
** Ideal Gas <<important>>
*** Only translational K.E.
*** Internal energy = K.E. of particles
** Temperature Relation <<important>>
*** Proportional to average K.E.
** Heating Effects
*** Increased particle speed
*** Increased K.E.
*** Increased internal energy
** Internal Energy Change
*** Indicates temperature change
*** Methods of increase
**** Adding heat
**** Other methods
***** (User prompted to think of examples)
@endmindmap`}
        />
      </section>
    </div>
  );
};

export default MindmapFriction;
