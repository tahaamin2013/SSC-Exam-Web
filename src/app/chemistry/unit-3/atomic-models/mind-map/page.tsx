import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">Atomic Models and Concepts
        </h1>
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
* Atomic Models and Concepts
** Particle Paths
*** Illustrate paths of charged particles in uniform electric field
** Proton Number/Atomic Number
*** Definition: Number of protons in nucleus
*** Unique to each element
*** Used to arrange elements in periodic table
*** Can be changed by radioactivity
** Nucleon Number/Atomic Mass and Isotopes
*** Definition: Sum of protons and neutrons in nucleus
*** Isotopes
**** Same number of protons, different neutrons
**** Affect molecular mass but not chemical properties
**** Can exhibit radioactivity
**** Examples: Carbon dating, medical imaging
*** Relative Atomic Mass
**** Average mass of isotopes compared to 1/12th of carbon-12
** Formation of Ions
*** Positive ions (cations)
*** Negative ions (anions)
** Calculations
*** Relative atomic mass from isotope masses and abundance
*** Relative mass of an isotope given atomic mass and abundance
left side
** 3.1 Atomic Models
*** Dalton's Model (1803)
**** Postulates
***** Elements composed of indivisible atoms
***** Atoms of an element are identical
***** Atoms combine, separate, or rearrange in reactions
***** Atoms cannot be created or destroyed
**** Limitations
***** Later experiments showed atoms are divisible
*** Rutherford's Experiment (1911)
**** Gold foil experiment with alpha particles
**** Conclusions
***** Most of atom is empty space
***** Nucleus is small, dense, and positively charged
***** Electrons revolve around nucleus
**** Limitations
***** Classical physics predicts electron collapse into nucleus
***** Continuous spectrum not explained
*** Bohr's Atomic Theory (1913)
**** Postulates
***** Electrons in fixed energy orbits
***** Energy proportional to distance from nucleus
***** Angular momentum quantized
***** Light absorbed/emitted during electron jumps
**** Limitations
***** Does not depict 3D aspect of atom
*** Quantum Mechanical Model
**** Current model used in modern science
**** Treats electrons as wave-particle entities
**** Defines probability distributions (orbitals)
**** Explains complex phenomena
**** Limitation: Complex and involves probability
** Key Points
*** Matter: Anything with mass and occupies space
*** Plasma: Electrically charged gas
*** Allotropy: Element existing in different physical forms
*** Element: Simplest form of matter, same type of atoms
*** Compound: Substance formed by chemically combined different atoms
*** Solution: Homogeneous mixture of two or more components
*** Aqueous solution: Substance dissolved in water
*** Saturated solution: Maximum amount of solute at given temperature
*** Unsaturated solution: Less solute than required for saturation
*** Colloid: Mixture with particles 1-1000 nm in diameter
*** Suspension: Heterogeneous mixture of undissolved particles in liquid
@endmindmap`}
        />
       
      </section>
       
    </div>
  );
};

export default MagneticMindmap;