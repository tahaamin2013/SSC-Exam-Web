import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">STATE OF MATTER</h1>
        <PlantUMLDiagram
          code={`
@startmindmap
<style>
mindmapDiagram {
    node {
        BackgroundColor lightGreen
    }
    :depth(1) {
      BackgroundColor lightBlue
    }
    :depth(2) {
      BackgroundColor pink
    }
    :depth(3) {
      BackgroundColor lightyellow
    }
}
</style>
* States of Matter
** Four Main States
*** Gas
*** Liquid
*** Solid
*** Plasma
** Characteristics
*** Determined by particle arrangement and movement
*** Influenced by intermolecular and atomic forces
*** Can change with energy input
** Energy and State Changes
*** Heating solids can turn them into liquids or gases
*** High temperatures or strong electric fields can create plasma
*** Normal conditions usually maintain one distinct state
** Special States
*** Liquid Crystal
**** Forms when some crystalline solids are heated
**** Has properties of both liquids and solids
**** Exists within a certain temperature range
*** Bose-Einstein Condensates (BEC)
**** Occurs at extremely low temperatures
**** Found in superfluids and superconductors
left side
** Macroscopic Properties
*** Density
*** Fluidity
*** Compressibility
** State Characteristics
*** Gas
**** Low density
**** Very compressible
**** Can flow
*** Liquid
**** High density
**** Moderately compressible
**** Can flow
*** Solid
**** High density
**** Not compressible
**** Cannot flow
** State Transitions
*** Can be achieved through physical techniques
*** Chemical composition remains unchanged
@endmindmap`}
        />
       
      </section>
    </div>
  );
};

export default MagneticMindmap;