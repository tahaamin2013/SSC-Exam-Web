import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">ISOTOPES
        </h1> 
        <PlantUMLDiagram
          code={`
@startmindmap
<style>
mindmapDiagram {
    node {
        BackgroundColor lightBlue
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
* Isotopes
** Definition
*** Same atomic number, different mass numbers
*** Same number of protons, different number of neutrons
** Characteristics
*** Chemically alike
*** Differ in physical properties
*** Contradicts Dalton's atomic theory
** Examples
*** Hydrogen Isotopes
**** Protium (H-1)
**** Deuterium (H-2)
**** Tritium (H-3)
*** Carbon Isotopes
**** Carbon-12
**** Carbon-13
**** Carbon-14
*** Chlorine Isotopes
**** Chlorine-35
**** Chlorine-37
*** Uranium Isotopes
**** Uranium-234
**** Uranium-235
**** Uranium-238
** Relative Atomic Mass
*** Calculated from isotope masses and abundances
*** Example: Carbon calculation
** Uses
*** Medical applications
**** Thyroid diagnostics (I-131)
**** Blood flow tracing (Na-24)
**** Brain imaging (I-123)
**** Cancer treatment (Co-60)
*** Scientific applications
**** Photosynthesis tracing (C-14)
**** Chemical reaction studies
**** Archaeological dating
** Carbon Dating
*** Uses C-14 decay
*** Estimates age of carbon-containing substances
@endmindmap`}
        />
       
      </section>
       
    </div>
  );
};

export default MagneticMindmap;