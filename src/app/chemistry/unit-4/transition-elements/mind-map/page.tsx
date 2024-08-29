import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from 'next/image'

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">Transition Elements
        </h1>
        <PlantUMLDiagram
          code={`
@startmindmap
<style>
mindmapDiagram {
    node {
        BackgroundColor lightGreen
        BorderColor darkGreen
        FontColor black
    }
    :depth(1) {
      BackgroundColor lightBlue
    }
    :depth(2) {
      BackgroundColor lightYellow
    }
    :depth(3) {
      BackgroundColor lightPink
    }
}
</style>
* Transition Elements
** High Density
*** Due to higher atomic masses and closely packed structures
*** Examples
**** Iron (Fe): 7.87 g/cm³
**** Tungsten (W): 19.3 g/cm³
** High Melting Points
*** Due to strong metallic bonding
*** Examples
**** Tungsten (W): 3422°C
**** Platinum (Pt): 1768°C
** Variable Oxidation States
*** Due to participation of d-sub shell in bonding
*** Examples
**** Iron (Fe): +2 and +3
**** Copper (Cu): +1 and +2
** Coloured Compounds
*** Examples
**** Copper compounds: blue or green
**** Chromium compounds: red or green
** Catalysts for Industrial Processes
*** Iron
**** Haber Process (ammonia synthesis)
*** Platinum and Palladium
**** Catalytic converters
*** Nickel
**** Margarine manufacture
*** Platinum
**** Contact process (sulfuric acid manufacture)
@endmindmap`}
        />

      </section>
       
    </div>
  );
};

export default MagneticMindmap;