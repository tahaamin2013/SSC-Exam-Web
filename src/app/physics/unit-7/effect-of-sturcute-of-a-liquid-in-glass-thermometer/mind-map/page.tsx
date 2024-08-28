import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MindmapFriction = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
          Effect of Diameter of Tube on Sensitivity of Thermometer
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

* Effect of Tube Diameter on Thermometer Sensitivity
** Sensitivity Definition <<definition>>
*** Ability to detect smallest temperature change
** Liquid-in-Glass Thermometer Structure
*** Long capillary tube
*** Small diameter
*** Filled with liquid (mercury or alcohol)
** Relationship <<important>>
*** Smaller diameter
**** Higher sensitivity
*** Larger diameter
**** Lower sensitivity
** Reason for Higher Sensitivity
*** Smaller volume of liquid
*** Quicker reaction to absorbed heat
*** More rapid rise in tube
** Practical Implication
*** Thermometers with narrower tubes
**** Can detect smaller temperature changes
@endmindmap`}
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
          Effect of Nature of Liquid Used in Thermometer on Its Sensitivity{" "}
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

* Effect of Liquid Nature on Thermometer Sensitivity
** Expansion Properties <<important>>
*** Some liquids expand more when heated
**** Mercury
**** Alcohol
*** Compared to other liquids
**** Water
** Impact on Sensitivity
*** Thermometers with mercury or alcohol
**** More sensitive to temperature changes
** Reason
*** Greater expansion per unit temperature change
*** Results in larger observable movement in tube
** Practical Implication
*** Choice of liquid affects thermometer sensitivity
@endmindmap`}
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
          Effect of Size of Bulb of Thermometer on Its Range{" "}
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

* Effect of Bulb Size on Thermometer Range
** Range Definition <<definition>>
*** Span of temperatures a thermometer can measure
** Relationship <<important>>
*** Larger bulb
**** Wider temperature range
*** Smaller bulb
**** Narrower temperature range
** Reason
*** Larger bulb holds more liquid
*** Allows for greater expansion
** Practical Implication
*** Bulb size can be adjusted to achieve desired range
@endmindmap`}
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
          Effect of Nature of Liquid Used in Thermometer on Its Range{" "}
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

* Effect of Liquid Nature on Thermometer Range
** Mercury Properties <<important>>
*** Low melting point
*** High boiling point
*** Provides wide range of temperature measurement
** Boiling Point Range
*** Liquids with broader boiling point range
**** Offer wider measurement range
*** Liquids with narrower boiling point range
**** Offer narrower measurement range
** Practical Implication
*** Choice of liquid affects thermometer range
*** Mercury often used for wide-range thermometers
@endmindmap`}
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
          Effect of Type of Glass Used in Thermometer on Its Linearity{" "}
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

* Effect of Glass Type on Thermometer Linearity
** Factors Affecting Linearity <<important>>
*** Expansion and contraction
*** Transparency
*** Chemical stability
*** Uniformity
*** Durability
*** Thermal conductivity
** Glass Types
*** Borosilicate glass
**** More linear expansion coefficient
**** Results in more linear thermometer
*** Soda lime glass
**** Less linear expansion coefficient
**** Results in less linear thermometer
** Practical Implication
*** Choice of glass affects thermometer linearity
*** Borosilicate glass preferred for precise measurements
@endmindmap`}
        />
      </section>
    </div>
  );
};

export default MindmapFriction;
