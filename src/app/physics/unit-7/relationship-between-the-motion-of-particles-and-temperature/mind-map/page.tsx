import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MindmapFriction = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
        RELATIONSHIP BETWEEN THE MOTION OF PARTICLES AND TEMPERATURE
        </h1>
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

*:Relationship between
Particle Motion and Temperature;
** Heating Effects <<important>>
*** Decrease in attractive forces
**** Bond breaking (melting, boiling)
*** Increase in particle speed
**** Increased kinetic energy (K.E.)
** Temperature Definition <<definition>>
*** Measure of hotness or coldness
*** Directly proportional to average K.E.
** Heating Process
*** Increased particle speed
*** Increased K.E.
*** Temperature rise
left side
** Cooling Process
*** Decreased particle speed
*** Decreased K.E.
*** Temperature drop
** Absolute Zero <<important>>
*** Definition <<definition>>
**** Lowest possible temperature
**** Particles have least/no K.E.
*** Characteristics
**** No particle movement
**** No particle collisions
**** No pressure (P=0 Pa)
*** Values
**** 0 Kelvin (0 K)
**** -273.15°C
*** No heat energy available

@endmindmap`}
        />
      </section>
    </div>
  );
};

export default MindmapFriction;
