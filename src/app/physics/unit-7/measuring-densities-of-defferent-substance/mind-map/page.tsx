import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const Mindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">MEASURING DENSITIES OF DIFFERENT SUBSTANCES</h1>
        <PlantUMLDiagram
          code={`
       @startmindmap
*[#LightBlue] Measuring Densities
** Density of Liquids
***[#LightGreen] Steps
****[#Yellow] 1. Measure mass of empty cylinder
****[#Yellow] 2. Add liquid and measure volume
****[#Yellow] 3. Subtract empty cylinder mass
****[#Yellow] 4. Measure liquid volume
****[#Yellow] 5. Calculate density (mass/volume)
***[#LightGreen] Example 7.2
****[#Pink] Given data
****[#Pink] Solution steps
****[#Pink] Result: 1 g/mL (water)
@endmindmap`}
        />
      </section>
    
    
    
      <section>
        <h1 className="text-4xl font-bold text-blue-500">DENSITY OF REGULARLY SHAPED SOLIDS</h1>
        <PlantUMLDiagram
          code={`
        @startmindmap
*[#LightBlue] Density of Regularly Shaped Solids
** Steps
***[#LightGreen] 1. Find mass using balance
***[#LightGreen] 2. Calculate volume
****[#Yellow] Cuboid: L x W x H
****[#Yellow] Cube: (side length)³
****[#Yellow] Sphere: 4/3 πr³
***[#LightGreen] 3. Calculate density (mass/volume)
** Example 7.3: Density of Brick
***[#Orange] Given data
***[#Orange] Solution steps
****[#Pink] Calculate volume
****[#Pink] Calculate density
***[#Orange] Result: 2360 kg/m³
@endmindmap`}
        />
      </section>
    
      <section>
        <h1 className="text-4xl font-bold text-blue-500">DENSITY OF IRREGULAR SHAPED OBJECT (DISPLACEMENT METHOD)</h1>
        <PlantUMLDiagram
          code={`
      @startmindmap
*[#LightBlue] Density of Irregular Shaped Objects
** Displacement Method
***[#LightGreen] Steps
****[#Yellow] 1. Find mass of object
****[#Yellow] 2. Measure initial water volume (Vi)
****[#Yellow] 3. Immerse object in water
****[#Yellow] 4. Measure final volume (Vf)
****[#Yellow] 5. Calculate object volume (Vf - Vi)
****[#Yellow] 6. Calculate density (mass/volume)
** Example 7.4
***[#Orange] Given data
***[#Orange] Calculations
****[#Pink] Volume of object
****[#Pink] Density of object
***[#Orange] Result: 2.88 g/cm³
@endmindmap`}
        />
      </section>
    </div>
  );
};

export default Mindmap;
