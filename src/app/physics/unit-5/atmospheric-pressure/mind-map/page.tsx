import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MindmapFriction = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
        ATMOSPHERIC PRESSURE
        </h1>
        <PlantUMLDiagram
          code={`@startmindmap
* Atmospheric Pressure
** Definition
*** Pressure exerted by atmospheric particles
*** Acts on Earth&apos;ssurface and objects
** Characteristics
*** Varies with weather
*** Varies with altitude
** Standard Values
*** At sea level: 1.013 x 10⁵ Pa
*** 1 atmosphere (atm) = 1.013 x 10⁵ Pa
*** 1 bar = 1.000 x 10⁵ Pa
** Units
*** Pascal (Pa)
*** Atmosphere (atm)
*** Bar
left side
** Examples and Applications
*** Swimming pool pressure analogy
*** Suction cups
*** Collapsing sealed can experiment
** Historical Note
*** Otto Von Guricke&apos;sexperiment
**** 17th century
**** Hemispheres and horse teams
** Key Concepts
*** Pressure in all directions
*** Relationship to altitude
*** Effects on objects
@endmindmap`}
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
        5.3.1 MEASUREMENT OF ATMOSPHERIC PRESSURE
        </h1>
        <PlantUMLDiagram
          code={`@startmindmap
* Measurement of Atmospheric Pressure
** Liquid Barometer
*** Principle
**** Hydrostatic equilibrium
*** Mercury Barometer
**** Inverted tube in mercury container
**** Mercury column height = atmospheric pressure
**** Sea level reading
***** 760 mmHg
***** 29.92 inches
***** 1 atm
**** Pressure units
***** 1 atm = 760 mmHg = 101.325 kPa
***** 1 atm = 760 torr
*** Advantages
**** Precise measurements
*** Disadvantages
**** Mercury toxicity
*** Alternatives
**** Aneroid barometers
**** Digital barometers
** Applications
*** Altitude Measurement
**** Used in aviation
**** Altimeter calibration
*** Weather Forecasting
**** Pressure changes indicate weather patterns
***** Falling pressure: approaching storm
***** Rising pressure: improving weather
*** Industrial Applications
**** Precise pressure measurements for processes
@endmindmap`}
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
        5.3.2 ATMOSPHERIC PRESSURE AND HEIGHT FROM SURFACE OF EARTH
        </h1>
        <PlantUMLDiagram
          code={`@startmindmap
* Atmospheric Pressure and Height
** Relationship
*** Pressure decreases with altitude
*** Pressure reaches zero in space
** Effects at High Altitudes
*** Lower atmospheric pressure
*** Thinner air
*** Breathing difficulties
**** Due to lower oxygen levels
** Examples
*** Sea Level
**** Standard atmospheric pressure (implied)
*** Mount Everest
**** Height: 8.8 km above sea level
**** Pressure: 33 kPa
*** Boeing 747 cruising altitude
**** Pressure: ~23 kPa
** Implications
*** Challenges for mountain climbers
*** Considerations for aviation
@endmindmap`}
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
        5.3.3 ATMOSPHERIC PRESSURE AND WEATHER
        </h1>
        <PlantUMLDiagram
          code={`@startmindmap
* Atmospheric Pressure and Weather
** Barometer Readings
*** Vary from day to day
*** Measured at constant location and height
** Weather Maps
*** Show pressure variations
*** Use isobars
**** Lines joining places with same pressure
** Pressure Units
*** Millibar (mbar) used in weather maps
**** 1 mbar = 100 Pa
** Typical Pressure Range
*** High: 1040 mbar
*** Low: 950 mbar
** Wind Patterns
*** Move from high to low pressure areas
*** Wind strength
**** Determined by pressure difference
*** Isobar Interpretation
**** Closely packed isobars
***** Indicate high pressure difference
***** Suggest strong winds
@endmindmap`}
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
        5.3.4 APPLICATIONS OF ATMOSPHERIC PRESSURE
        </h1>
        <PlantUMLDiagram
          code={`@startmindmap
* Applications of Atmospheric Pressure
** Drinking by Straw
*** Process
**** Lowering pressure in mouth
**** Increasing lung volume
**** Reducing air pressure in lungs and mouth
*** Result
**** Atmospheric pressure forces liquid up the straw
** Drawing Liquid by Syringe
*** Process
**** Drawing piston upwards
**** Decreasing pressure in cylinder
*** Result
**** Atmospheric pressure forces liquid into syringe
** Cooking at High Altitudes
*** Challenges
**** Lower atmospheric pressure
**** Lower boiling point of water
*** Effects
**** Longer cooking times required
**** Increasing heat doesn't help
*** Reason
**** Boiling point decreases with altitude
left side
** Point to Ponder
*** Why cooking is difficult at high altitudes
**** Due to lower boiling point of water
**** Requires longer cooking times
@endmindmap`}
        />
      </section>
     
    </div>
  );
};

export default MindmapFriction;
