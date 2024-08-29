import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">Colloids & Suspensions</h1>
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
* 2.5 Colloids & Suspensions
** Colloid
*** Definition
**** Heterogeneous mixture
**** Particles larger than in true solutions
**** Particles not visible to naked eye
*** Characteristics
**** Particle size: 1-1000 nm
**** Remains dispersed without settling
**** Scatters light (Tyndall effect)
*** Examples
**** Starch
**** Albumin
**** Soap solutions
**** Blood
**** Milk
**** Ink
**** Jelly
**** Toothpaste
** Suspension
*** Definition
**** Heterogeneous mixture
**** Solid particles spread in liquid without dissolving
*** Characteristics
**** Particle size: > 1000 nm
**** Visible to naked eye
**** Settles when stationary
*** Examples
**** Chalk in water
**** Paints
**** Milk of magnesia
** Comparison
*** Solution
**** Homogeneous mixture
**** Particle size < 1 nm
**** Passes through all filters
**** Cannot scatter light
**** Does not separate
**** Example: Sea water
*** Colloid
**** Heterogeneous mixture
**** Particle size 1-1000 nm
**** Passes through normal filter, not ultra-filter
**** Scatters light (Tyndall effect)
**** Does not separate
**** Example: Milk
*** Suspension
**** Heterogeneous mixture
**** Particle size > 1000 nm
**** Cannot pass through filters
**** Scatters light
**** Separates when stationary
**** Example: Muddy water
** Key Points
*** Matter: Has mass and occupies space
*** Plasma: Electrically charged gas
*** Allotropy: Element existing in different physical forms
*** Element: Simplest form of matter, same type of atoms
*** Compound: Two or more different atoms chemically combined
*** Solution: Homogeneous mixture of two or more components
*** Aqueous solution: Substance dissolved in water
*** Saturated solution: Maximum amount of solute at given temperature
*** Unsaturated solution: Less solute than required for saturation
*** Colloid: Mixture with particles 1-1000 nm in diameter
*** Suspension: Heterogeneous mixture, solid particles in liquid

center footer Comparison of Solution, Colloids, and Suspension
@endmindmap`}
        />
       
      </section>
       
    </div>
  );
};

export default MagneticMindmap;