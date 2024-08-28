import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MindmapFriction = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
        Fixed Points in Calibration of Thermometer
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

*:Fixed Points in
Thermometer Calibration;
** Purpose of Calibration <<important>>
*** Create proper scale
*** Enable accurate measurement
** Fixed Points <<definition>>
*** Standard degrees of hotness/coldness
*** Also called reference points
**** Lower reference point
**** Upper reference point
** Characteristics of Fixed Points
*** Accessible
*** Reproducible
** Temperature Scales
*** Celsius Scale
**** Lower Reference Point: 0°C
***** Melting point of ice
**** Upper Reference Point: 100°C
***** Boiling point of water
**** Number of Divisions: 100
*** Fahrenheit Scale
**** Lower Reference Point: 32°F
***** Melting point of ice
**** Upper Reference Point: 212°F
***** Boiling point of water
**** Number of Divisions: 180
*** Kelvin Scale
**** Lower Reference Point: 273 K
***** Melting point of ice
**** Upper Reference Point: 373 K
***** Boiling point of water
**** Number of Divisions: 100
** Scale Creation Process
*** Identify fixed points
*** Mark reference points on thermometer
*** Divide gap into equal divisions
** Importance of Fixed Points <<important>>
*** Ensures consistency across thermometers
*** Allows for accurate temperature conversion between scales
@endmindmap`}
        />
      </section>
    </div>
  );
};

export default MindmapFriction;
