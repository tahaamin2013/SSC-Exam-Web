import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">ELECTRONIC CONFIGURATION
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
* Electronic Configuration
** Shells
*** Circular paths around nucleus
*** Fixed energy levels
*** Labeled by n values (1, 2, 3, ...)
**** K shell (n = 1)
**** L shell (n = 2)
**** M shell (n = 3)
*** Energy increases with n
** Sub-Shells
*** Subdivisions of shells
*** Types: s, p, d, f
*** Maximum electrons
**** s: 2 electrons
**** p: 6 electrons
**** d: 10 electrons
**** f: 14 electrons
*** Energy order
**** 1s < 2s < 2p < 3s < 3p < 4s < 3d ...
** Auf Bau Principle
*** Electrons fill lowest energy sub-shell first
left side
** Atomic Symbols
*** Element symbol
*** Mass number (left superscript)
*** Atomic number (left subscript)
*** Charge (right superscript)
*** Example: Mg12242+
** Key Points
*** Rutherford's planetary model
*** Bohr's circular orbits
*** Isotopes
*** Uranium isotope uses
*** Radioactive isotope applications
*** Sub-shell types
*** Auf Bau Principle
@endmindmap`}
        />
       
      </section>
       
    </div>
  );
};

export default MagneticMindmap;