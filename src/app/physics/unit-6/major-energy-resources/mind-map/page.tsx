import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MindmapFriction = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
        Major Energy Resources        </h1>
        <PlantUMLDiagram
          code={`@startmindmap
<style>
mindmapDiagram {
    node {
        BackgroundColor lightBlue
        BorderColor darkBlue
        FontColor black
    }
    arrow {
        LineColor darkBlue
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
}
</style>
* Major Energy Resources
** Classification
*** Non-renewable Resources
**** Fossil Fuels
***** Coal
***** Oil
***** Natural Gas
**** Nuclear Fuel
***** Uranium
***** Plutonium
*** Renewable Resources
**** Solar Energy
**** Wind Energy
**** Hydroelectric Power
**** Geothermal
**** Biofuels
**** Tides
**** Waves
**** Waste as fuel
** Energy Conversion
*** Transformation into useful forms
*** Focus on electrical energy
*** Energy converters
** Environmental Impact
*** Greenhouse gas emissions
*** Water resource use
*** Pollution discharge
*** Land use effects
*** Ecosystem impacts
** Social Concerns
*** Community impacts
*** Public health
*** Societal well-being
** Challenges
*** Sustainable development
*** Balancing energy needs and environmental concerns
*** Renewable energy infrastructure costs
*** Intermittency of some renewable sources
** Fossil Fuels
*** Combustion process
*** Chemical equation
*** Types: Coal, Oil, Natural Gas
** Nuclear Energy
*** Fission process
*** Advantages: High energy output, low CO2
*** Disadvantages: Accident risk, waste disposal
** Renewable Energy Sources
*** Solar
*** Wind
*** Hydroelectric
*** Advantages: Sustainable, lower environmental impact
*** Challenges: Intermittency, initial costs
@endmindmap`}
        />
      </section>
  
    </div>
  );
};

export default MindmapFriction;
