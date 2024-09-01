import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MindmapFriction = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
        Variation in Physical Properties as a Tool for Measuring Temperature of a Substance
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

*:Temperature Measurement
Methods;
** Thermometric Properties <<definition>>
*** Physical properties used in thermometers
** Expansion of Liquids
*** Liquid-in-glass thermometers
**** Mercury
**** Alcohol
*** Uniform expansion
*** Linear variation with temperature
** Variation of Volume and Pressure
*** Gas Thermometers
**** Constant Pressure Gas Thermometer
***** Uses Charles&apos;sLaw
***** Volume ∝ Temperature
**** Constant Volume Gas Thermometer
***** Uses Gay-Lussac&apos;sLaw
***** Pressure ∝ Temperature
** Variation in Colour of Crystals
*** Liquid crystal thermometers
**** Color changes with temperature
**** Applications
***** Fever thermometers
***** Aquariums
***** Baby bottles
** Resistance Thermometers
*** Thermistors
*** Measures changes in electrical resistance
** Bimetallic Strip Thermometers
*** Uses difference in expansion of two metals
** Thermocouples
*** Measures changes in electromotive force (emf)
** Thermometer Types and Properties <<important>>
*** Constant pressure gas thermometer
**** Volume expansion of a gas
*** Laboratory/clinical thermometer
**** Volume expansion of a liquid
*** Bimetallic strip thermometer
**** Volume expansion of a solid
*** Constant volume gas thermometer
**** Pressure change of fixed mass of gas
*** Thermocouple
**** Changes in e.m.f
*** Resistance thermometer/thermistor
**** Changes in electrical resistance
@endmindmap`}
        />
      </section>
    </div>
  );
};

export default MindmapFriction;
