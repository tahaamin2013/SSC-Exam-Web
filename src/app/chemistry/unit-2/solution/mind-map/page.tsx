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

      <div className="p-8 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg shadow-xl">
    <h1 className="text-3xl font-extrabold text-teal-800 mb-6">Solution</h1>
    
    <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3">I. Solution</h2>
        <h3 className="text-xl font-bold text-teal-600 mb-2">A. Definition</h3>
        <p className="text-blue-900 bg-blue-100 p-4 rounded-lg">Homogeneous mixture of two or more substances.</p>
        
        <h3 className="text-xl font-bold text-teal-600 mt-4 mb-2">B. Key characteristics:</h3>
        <ul className="list-disc list-inside text-blue-900 ml-8">
            <li>1. One substance dissolved in another</li>
            <li>2. No visible particles of different substances</li>
            <li>3. Uniform appearance</li>
        </ul>
        
        <h3 className="text-xl font-bold text-teal-600 mt-4 mb-2">C. Components:</h3>
        <ul className="list-disc list-inside text-blue-900 ml-8">
            <li>1. Solute: Substance that is dissolved</li>
            <li>2. Solvent: Substance in which solute is dissolved</li>
        </ul>
        
        <h3 className="text-xl font-bold text-teal-600 mt-4 mb-2">D. Particle size:</h3>
        <p className="text-blue-900 bg-blue-100 p-4 rounded-lg">Microscopic ( 1 nm in diameter).</p>
        
        <h3 className="text-xl font-bold text-teal-600 mt-4 mb-2">E. Stability:</h3>
        <p className="text-blue-900 bg-blue-100 p-4 rounded-lg">Very stable, solute doesn't separate from solvent.</p>
    </div>
    
    <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3">II. Types of Solutions (based on physical states)</h2>
        <ul className="list-disc list-inside text-blue-900 ml-8">
            <li>A. Gaseous solutions</li>
            <li>B. Liquid solutions</li>
            <li>C. Solid solutions</li>
        </ul>
    </div>
    
    <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3">III. Gaseous Solutions</h2>
        <h3 className="text-xl font-bold text-teal-600 mb-2">A. Solvent:</h3>
        <p className="text-blue-900 bg-blue-100 p-4 rounded-lg">Gas.</p>
        
        <h3 className="text-xl font-bold text-teal-600 mt-4 mb-2">B. Solute:</h3>
        <p className="text-blue-900 bg-blue-100 p-4 rounded-lg">Can be gas, liquid, or solid.</p>
        
        <h3 className="text-xl font-bold text-teal-600 mt-4 mb-2">C. Examples:</h3>
        <ul className="list-disc list-inside text-blue-900 ml-8">
            <li>1. Mixture of nitrogen and hydrogen (Haber's process)</li>
            <li>2. Mixture of ammonia and carbon dioxide (urea preparation)</li>
            <li>3. Fog, clouds, mist (liquid water in air)</li>
            <li>4. Smoke (carbon particles in air)</li>
        </ul>
    </div>
    
    <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3">IV. Liquid Solutions</h2>
        <h3 className="text-xl font-bold text-teal-600 mb-2">A. Examples:</h3>
        <ul className="list-disc list-inside text-blue-900 ml-8">
            <li>1. Carbonated drinks (gaseous CO₂ in liquid water)</li>
            <li>2. Rectified spirit (liquid in liquid)</li>
            <li>3. Vinegar (acetic acid in water)</li>
            <li>4. Brine (solid salt in water)</li>
            <li>5. Sugar syrup (solid sugar in water)</li>
        </ul>
    </div>
    
    <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3">V. Solid Solutions</h2>
        <h3 className="text-xl font-bold text-teal-600 mb-2">A. Examples:</h3>
        <ul className="list-disc list-inside text-blue-900 ml-8">
            <li>1. Hydrogen gas on nickel metal surface (used in ghee industry)</li>
            <li>2. Amalgam (metal dissolved in liquid mercury)</li>
            <li>3. Alloys (mixture of different metals)</li>
            <li className="ml-8">a. Brass</li>
            <li className="ml-8">b. Bronze</li>
            <li className="ml-8">c. Steel</li>
        </ul>
    </div>
    
    <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3">VI. Real-life Examples</h2>
        <ul className="list-disc list-inside text-blue-900 ml-8">
            <li>A. Air: Gaseous solution (N₂ solvent; O₂, CO₂, trace gases as solutes)</li>
            <li>B. Seawater: Liquid solution</li>
            <li>C. Alloy: Solid solution</li>
        </ul>
    </div>
</div>



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

      <div className="p-8 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg shadow-xl">
    <h1 className="text-3xl font-extrabold text-indigo-800 mb-6">Aqueous Solutions</h1>
    
    <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3">I. Aqueous Solutions</h2>
        <h3 className="text-xl font-bold text-indigo-600 mb-2">A. Definition</h3>
        <p className="text-blue-900 bg-blue-100 p-4 rounded-lg">Solution formed by dissolving a substance in water.</p>
        
        <h3 className="text-xl font-bold text-indigo-600 mt-4 mb-2">B. Characteristics:</h3>
        <ul className="list-disc list-inside text-blue-900 ml-8">
            <li>1. Can contain dissolved solids, gases, or liquids</li>
            <li>2. Must be stable to be a true solution</li>
        </ul>
        
        <h3 className="text-xl font-bold text-indigo-600 mt-4 mb-2">C. Examples:</h3>
        <ul className="list-disc list-inside text-blue-900 ml-8">
            <li>1. Sugar in water</li>
            <li>2. Table salt in water</li>
        </ul>
        
        <h3 className="text-xl font-bold text-indigo-600 mt-4 mb-2">D. Water as a universal solvent</h3>
        <p className="text-blue-900 bg-blue-100 p-4 rounded-lg">Water is known as a universal solvent because it can dissolve many substances.</p>
        
        <h3 className="text-xl font-bold text-indigo-600 mt-4 mb-2">E. Common use:</h3>
        <p className="text-blue-900 bg-blue-100 p-4 rounded-lg">Laboratories</p>
    </div>
</div>


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

      <div className="p-8 bg-gradient-to-r from-green-100 to-teal-100 rounded-lg shadow-xl">
    <h1 className="text-3xl font-extrabold text-teal-800 mb-6">Types of Solutions Based on Concentration</h1>
    
    <div className="mb-8">
        <h2 className="text-2xl font-semibold text-green-700 mb-3">II. Types of Solutions Based on Concentration</h2>
        
        <h3 className="text-xl font-bold text-teal-600 mb-2">A. Saturated Solution</h3>
        <ul className="list-disc list-inside text-green-900 ml-8">
            <li>1. Definition: Contains maximum amount of solute at a given temperature</li>
            <li>2. Characteristics:
                <ul className="list-disc list-inside text-green-900 ml-8">
                    <li>a. No more solute can dissolve</li>
                    <li>b. Undissolved solute in equilibrium with dissolved solute</li>
                    <li>c. Dynamic equilibrium established</li>
                </ul>
            </li>
        </ul>
        
        <h3 className="text-xl font-bold text-teal-600 mt-4 mb-2">B. Unsaturated Solution</h3>
        <ul className="list-disc list-inside text-green-900 ml-8">
            <li>1. Definition: Contains less solute than required for saturation</li>
            <li>2. Characteristic: Can dissolve more solute</li>
        </ul>
        
        <h3 className="text-xl font-bold text-teal-600 mt-4 mb-2">C. Supersaturated Solution</h3>
        <ul className="list-disc list-inside text-green-900 ml-8">
            <li>1. Definition: Contains more solute than a saturated solution</li>
            <li>2. Characteristics:
                <ul className="list-disc list-inside text-green-900 ml-8">
                    <li>a. Unstable</li>
                    <li>b. Prepared by cooling a saturated solution from high temperature</li>
                </ul>
            </li>
            <li>3. Identification: Crystallization occurs when seed crystal is added</li>
        </ul>
    </div>
</div>

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

      <div className="p-8 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg shadow-xl">
    <h1 className="text-3xl font-extrabold text-orange-800 mb-6">Types of Solutions and Solubility</h1>
    
    <div className="mb-8">
        <h2 className="text-2xl font-semibold text-yellow-700 mb-3">D. Concentrated and Dilute Solutions</h2>
        <ul className="list-disc list-inside text-orange-900 ml-8">
            <li>1. Dilute: Relatively small amount of dissolved solute</li>
            <li>2. Concentrated: Relatively large amount of dissolved solute</li>
            <li>3. Example: Brine (concentrated salt solution)</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-yellow-700 mt-6 mb-3">III. Solubility</h2>
        <ul className="list-disc list-inside text-orange-900 ml-8">
            <li>A. Definition: Maximum amount of solute that dissolves in a specified amount of solvent at a specific temperature</li>
            <li>B. Factors affecting solubility:
                <ul className="list-disc list-inside text-orange-900 ml-8">
                    <li>1. Solvent used</li>
                    <li>2. Temperature</li>
                    <li>3. Pressure</li>
                </ul>
            </li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-yellow-700 mt-6 mb-3">IV. Effect of Temperature on Solubility</h2>
        <ul className="list-disc list-inside text-orange-900 ml-8">
            <li>A. Increase in solubility with temperature (e.g., KCl, NH₄Cl)</li>
            <li>B. Decrease in solubility with temperature (e.g., Ca(OH)₂)</li>
            <li>C. No change in solubility with temperature (e.g., NaCl)</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-yellow-700 mt-6 mb-3">V. Activity: Demonstrating Types of Solutions</h2>
        <ul className="list-disc list-inside text-orange-900 ml-8">
            <li>A. Unsaturated solution: Sugar dissolves in water</li>
            <li>B. Saturated solution: Sugar stops dissolving at a certain point</li>
            <li>C. Supersaturated solution: More sugar dissolves upon heating</li>
        </ul>
    </div>
</div>


    </div>
  );
};

export default MagneticMindmap;