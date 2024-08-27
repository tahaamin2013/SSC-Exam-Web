import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const Mindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">DENSITY</h1>
        <PlantUMLDiagram
          code={`
        @startmindmap
*[#LightBlue] DENSITY
** Definition
***[#LightGreen] Mass per unit volume
***[#LightGreen] Formula: ρ = m / V
***[#LightGreen] SI unit: kg/m³
***[#LightGreen] Other units
****[#Yellow] g/cm³
****[#Yellow] g/mL (for liquids)
** Characteristics
***[#Pink] Scalar quantity
***[#Pink] Independent of amount
***[#Pink] Changes with temperature
left side
** Comparison
***[#Orange] Solids (highest)
***[#Orange] Liquids
***[#Orange] Gases (lowest)
** Interesting Facts
***[#Purple] Osmium: most dense at room temperature
**** 22.59 g/cm³
**** Harder than diamond
** Unit Conversion
***[#Cyan] 1 g/cm³ = 1000 kg/m³
** Examples
***[#Red] Table 7.1: Densities of various materials
***[#Red] Example 7.1: Density of regular shape (cube)
** Questions
***[#Gold] Why are liquids denser than gases?
***[#Gold] Increasing order of densities: Hydrogen, milk, mercury, gold
@endmindmap`}
        />
      </section>
    </div>
  );
};

export default Mindmap;
