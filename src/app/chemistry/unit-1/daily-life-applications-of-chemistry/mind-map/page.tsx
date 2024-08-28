import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">Daily Life Applications of Chemistry</h1>
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
}
</style>
* Daily Life Applications of Chemistry
** Organic Chemistry
*** Synthesis of new medicines
*** Interaction with specific biological targets
**** Proteins
**** Enzymes
** Inorganic Chemistry
*** Lithium-ion (Li-ion) batteries
**** Rechargeable batteries for:
***** Electronics
***** Toys
***** Wireless headphones
***** Handheld power tools
***** Small and large appliances
***** Electrical storage devices
***** Electric vehicles
left side
** Analytical Chemistry
*** Forensic chemistry
**** Examination of physical traces
***** Body fluids
***** Bones
***** Fibers
***** Drugs
**** Identification of unknown compounds
***** Analysis of colored powders (e.g., drugs)
** Physical Chemistry
*** Everyday applications
**** Vehicle batteries
***** Based on electrochemistry principles
** Environmental Chemistry
*** Water protection methods
**** Sedimentation
**** Filtration
**** Disinfection
@endmindmap`}
        />
       
      </section>
    </div>
  );
};

export default MagneticMindmap;