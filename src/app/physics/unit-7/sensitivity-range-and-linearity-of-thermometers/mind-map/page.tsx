import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MindmapFriction = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
        Sensitivity of a Thermometer
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

* Sensitivity of a Thermometer
** Definition <<definition>>
*** Ability to detect small temperature changes
*** Smallest variation a thermometer can measure
** Comparison to Other Concepts
*** Analogous to least count of measuring instruments
** Examples
*** 0.1°C sensitivity
**** Can detect 0.1°C changes
*** 1°C sensitivity
**** Can only detect 1°C or larger changes
** Mercury Thermometer <<important>>
*** Considered a sensitive thermometer
** Demonstration
*** Place in room temperature water
*** Add few drops of hot water
*** Observe quick rise in mercury
@endmindmap`}
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
        Range of a Thermometer
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

* Range of a Thermometer
** Definition <<definition>>
*** Span of temperatures a thermometer can measure
*** Defined by lowest and highest detectable temperatures
** Examples
*** Clinical Mercury Thermometer
**** Celsius scale: 35°C to 42°C
**** Fahrenheit scale: 94°F to 108°F
*** Digital Thermometer <<important>>
**** Wider range
**** Can measure from very cold to very hot
** Demonstration
*** Measure melting point of ice (0°C)
**** Place digital thermometer in ice
*** Measure boiling point of water (100°C)
**** Place digital thermometer in boiling water
** Importance
*** Determines suitability for specific applications
*** Affects versatility of the thermometer
@endmindmap`}
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
        Linearity of a Thermometer
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

* Linearity of a Thermometer
** Definition <<definition>>
*** Uniformity in displaying temperature variations
*** Consistent increase in divisions for same temperature change
** Characteristics
*** Equally spaced marks on scale
*** Consistent accuracy across different ranges
** Example
*** Linear Thermometer
**** Measures 0°C to 50°C increase with same accuracy as 50°C to 100°C
** Bimetallic Thermometers <<important>>
*** Example of linear thermometers
*** Measure temperature equally accurately across range
** Demonstration
*** Place in room temperature water
*** Gradually heat water
*** Observe consistent pointer movement
** Importance
*** Ensures reliable measurements across entire range
*** Simplifies interpretation of readings
@endmindmap`}
        />
      </section>
    </div>
  );
};

export default MindmapFriction;
