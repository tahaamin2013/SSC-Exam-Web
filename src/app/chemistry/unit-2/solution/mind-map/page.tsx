import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">SOLUTION</h1>
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
* Allotropes of Carbon
** Graphite
*** Flat 2D layers of hexagonally arranged carbon atoms
*** Each C-atom covalently bonded to 3 others in a layer
*** Weak intermolecular bonds between layers
*** Properties
**** Soft and slippery
**** Good conductor of electricity
**** Used as lubricant
** Diamond
*** Hardest and purest crystalline allotrope
*** Each C-atom covalently bonded to 4 others
*** Rigid network of tetrahedral shape
*** Properties
**** Hardest substance
**** Very high melting point
**** Non-conductor of electricity
** Buckyballs (C-60)
*** Also known as fullerenes
*** Football-like fused hollow ring structure
*** 20 hexagons and 12 pentagons
*** Each of 60 carbon atoms bonded to 3 others

center footer Allotropes: Different structural forms of the same element in the same physical state
@endmindmap`}
        />
       
      </section>
      <section>
        <h1 className="text-4xl font-bold text-blue-500">Aqueous Solutions</h1>
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
* Aqueous Solutions
** Definition
*** Formed by dissolving a substance in water
** Dissolved substances
*** Solids
*** Gases
*** Other liquids
** Characteristics
*** Must be stable to be a true solution
** Examples
*** Sugar in water
*** Table salt in water
** Water as universal solvent
*** Dissolves majority of compounds in Earth's crust
** Usage
*** Mostly used in laboratories

center footer 2.4.1 Aqueous Solutions
@endmindmap`}
        />
       
      </section>
      <section>
        <h1 className="text-4xl font-bold text-blue-500">Saturated Solution</h1>
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
* Types of Solutions
** 2.4.2 Saturated Solution
*** Definition
**** Contains maximum amount of solute at given temperature
*** Characteristics
**** Solvent cannot dissolve more solute
**** Undissolved solute settles at bottom
**** Dynamic equilibrium between dissolved and undissolved solute
*** Particle Level
**** Undissolved solute in equilibrium with dissolved solute
*** Process
**** Dissolution and crystallization continue
**** Net amount of dissolved solute remains constant
** 2.4.3 Unsaturated Solution
*** Definition
**** Contains less solute than required for saturation
*** Characteristics
**** Can dissolve more solute
**** Can become saturated by adding more solute
** 2.4.5 Supersaturated Solution
*** Definition
**** More concentrated than saturated solution
*** Characteristics
**** Contains more solute than saturated solution
**** Not stable
*** Formation
**** Prepare saturated solution at high temperature
**** Cool to lower temperature
**** Excess solute crystallizes out
** Activity 2.1
*** Unsaturated Solution
**** Can dissolve more solute
*** Saturated Solution
**** Cannot dissolve more solute
**** Solute settles at bottom
*** Supersaturated Solution
**** Contains more solute than saturated solution
**** Formed by heating saturated solution
*** Distinguishing Supersaturated Solution
**** Add crystal of solute
**** Crystallization starts in supersaturated solution
** Fig 2.4: Different types of solutions
*** Unsaturated Solution
*** Saturated Solution
*** Supersaturated Solution
@endmindmap`}
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-blue-500">Solution Properties</h1>
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
* Solution Properties
** 2.4.6 Concentrated and Dilute Solution
*** Concentrated Solution
**** Contains relatively large amounts of dissolved solute
**** Example: Brine (concentrated salt solution)
*** Dilute Solution
**** Contains relatively small amounts of dissolved solute
*** Note
**** Adding more solvent dilutes the solution
**** Concentration decreases with dilution
** 2.4.7 Solubility
*** Definition
**** Maximum amount of solute that dissolves in a specified amount of solvent
*** Factors Affecting Solubility
**** Type of solvent
**** Temperature
**** Pressure
*** Reference: Table 2.2
** 2.4.8 Effect of Temperature on Solubility
*** Increase in solubility with temperature
**** Examples: KCl, NH₄Cl
*** Decrease in solubility with temperature
**** Example: Ca(OH)₂
*** No change in solubility with temperature
**** Example: NaCl
@endmindmap`}
        />
       
      </section>
    </div>
  );
};

export default MagneticMindmap;