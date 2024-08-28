import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MindmapFriction = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
        Liquid-in-Glass Thermometers        </h1>
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

* Liquid-in-Glass Thermometers
** Structure <<important>>
*** Long, thin glass tube
*** Bulb at one end
** Liquid Types
*** Mercury
*** Alcohol
** Operating Principle
*** Liquid expands when warmed
*** Liquid contracts when cooled
*** Measures expansion/contraction of liquid
** Temperature Reading
*** Calibrated scale on tube
*** Temperature corresponds to liquid height
** Temperature Change Process
*** In warm environment
**** Liquid expands
**** Rises in tube
*** In cold environment
**** Liquid contracts
**** Falls in tube
left side
** Applications
*** Homes
*** Schools
*** Laboratories
*** Some industrial uses
** Can You Tell? <<important>>
*** Question
**** Why doesn't temperature change at melting/boiling points?
*** Answer
**** Heat energy used to overcome intermolecular forces
**** Leads to change in state, not kinetic energy
**** States involved
***** Solid to liquid (melting)
***** Liquid to gas (boiling)
@endmindmap`}
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
        Thermocouple Thermometers
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

* Thermocouple Thermometers
** Structure <<important>>
*** Two wires of different metals
*** Hot junction
**** Where wires are joined
*** Cold junctions
**** Other ends of wires
*** Measuring device
**** E.g., Voltmeter
** Operating Principle
*** Measures voltage difference
**** Between hot and cold junctions
*** Seebeck effect
**** Free electrons flow across junction when heated
** Temperature-Voltage Relationship
*** Linear relationship
*** Increasing temperature
**** Increases voltage difference
*** Decreasing temperature
**** Decreases voltage difference
** Temperature Measurement Process
*** Hot junction is heated/cooled
*** Voltage difference changes
*** Voltmeter reads voltage
*** Calibrated to show temperature
** Applications <<important>>
*** Industrial
**** Furnaces
**** Kilns
**** Engines
*** Agriculture
**** Soil temperature measurement
**** Water temperature measurement
** Advantages
*** Wide temperature range
*** Fast response time
*** Durability in harsh environments
@endmindmap`}
        />
      </section>
    </div>
  );
};

export default MindmapFriction;
