import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MindmapFriction = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">PLANETARY DATA</h1>
        <PlantUMLDiagram
          code={`@startmindmap
* Planetary Data
** Solar System
*** Sun
*** Planets
**** Mercury
**** Venus
**** Earth
**** Mars
**** Jupiter
**** Saturn
**** Uranus
**** Neptune
*** Dwarf Planets
**** Pluto
*** Other Bodies
**** Moons
**** Asteroids
**** Comets
**** Meteoroids
** Planet Parameters
*** Distance from Sun
*** Orbital Period
*** Average Surface Temperature
*** Mass
*** Density
*** Gravity
** Global Positioning System (GPS)
*** Network of 24 satellites
*** Position Determination
**** Single satellite
**** Two satellites
**** Three satellites
@endmindmap`}
        />
      </section>
    </div>
  );
};

export default MindmapFriction;
