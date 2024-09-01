import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">EARTH&apos;S MAGNETIC FIELD</h1>
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
    BackgroundColor lightYellow
  }
}
</style>
* Earth&apos;sMagnetic Field
** Origin
*** Core of Earth (molten iron)
*** "Dynamo effect"
**** Electrical currents in moving molten iron
** Characteristics
*** Also known as geomagnetic field
*** Extends millions of kilometers into space
*** Low magnetic field strength
*** Resembles field of a bar magnet
** Functions
*** Protective shield
**** Saves life from harmful cosmic rays
**** Protects from charged particles and radiations from Sun
** Geographical vs Magnetic Poles
*** Geographical Poles
**** North Pole (Arctic)
**** South Pole (Antarctic)
**** Earth spins on geographical axis
*** Magnetic Poles
**** Inclined 11.3° to geographical poles
**** Compass points to magnetic north
** Effects on Life
*** Aurora
**** Formed due to Earth&apos;smagnetic field pattern
**** Charged particles from Sun hit Earth at poles
**** Ionization of air atoms produces colorful lights
*** Bio-magnetism
**** Human organs
***** Heart and brain produce magnetic fields
***** Used in diagnostic techniques
**** Animal navigation
***** Pigeons
****** Iron crystals in beaks
****** Sense Earth&apos;smagnetic field
***** Migrating birds
****** Cryptochrome-4 molecule in eyes
****** Sensitive to magnetism
@endmindmap`}
        />
       
      </section>
    </div>
  );
};

export default MagneticMindmap;