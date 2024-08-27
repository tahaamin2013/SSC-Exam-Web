import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const Mindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">STATES OF MATTER</h1>
        <PlantUMLDiagram
          code={`
        @startmindmap
*[#LightBlue] States of Matter
** Fundamental States
***[#LightGreen] Solid
***[#LightGreen] Liquid
***[#LightGreen] Gas
** Composition
***[#Orange] Particles (atoms and molecules)
** Key Factors
***[#Pink] Gaps between particles
***[#Pink] Attractive forces between particles
** Impacts
***[#Yellow] Densities
***[#Yellow] Patterns of particle motion
@endmindmap`}
        />
      </section>
      <h2 className="text-2xl font-semibold mb-4">TABLE 7.2 STATES OF MATTER</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border-b px-6 py-3 text-left">State</th>
                            <th className="border-b px-6 py-3 text-left">Density</th>
                            <th className="border-b px-6 py-3 text-left">Arrangement of Particles</th>
                            <th className="border-b px-6 py-3 text-left">Movement of Particles</th>
                            <th className="border-b px-6 py-3 text-left">Energy of Particles</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border-b px-6 py-3">Solid</td>
                            <td className="border-b px-6 py-3">High</td>
                            <td className="border-b px-6 py-3">Regular pattern</td>
                            <td className="border-b px-6 py-3">Vibrate around a fixed position</td>
                            <td className="border-b px-6 py-3">Low energy</td>
                        </tr>
                        <tr>
                            <td className="border-b px-6 py-3">Liquid</td>
                            <td className="border-b px-6 py-3">Medium</td>
                            <td className="border-b px-6 py-3">Randomly arranged</td>
                            <td className="border-b px-6 py-3">Move around each other</td>
                            <td className="border-b px-6 py-3">Greater energy</td>
                        </tr>
                        <tr>
                            <td className="border-b px-6 py-3">Gas</td>
                            <td className="border-b px-6 py-3">Low</td>
                            <td className="border-b px-6 py-3">Randomly arranged</td>
                            <td className="border-b px-6 py-3">Move quickly in all directions</td>
                            <td className="border-b px-6 py-3">Highest energy</td>
                        </tr>
                    </tbody>
                </table>
            </div>
      <section>
        <h1 className="text-4xl font-bold text-blue-500">SOLIDS, LIQUIDS, GASES</h1>
        <PlantUMLDiagram
          code={`
       @startmindmap
*[#LightBlue] Properties of Matter States
** Solids
***[#LightGreen] Strong attractive force
***[#LightGreen] Closely packed particles
***[#LightGreen] Fixed lattice pattern
***[#LightGreen] Particles vibrate about mean positions
***[#LightGreen] Fixed shape
***[#LightGreen] High density
** Liquids
***[#Orange] Intermediate attractive force
***[#Orange] Particles closer than gases, farther than solids
***[#Orange] Particles flow and glide
***[#Orange] No fixed shape (adopts container shape)
***[#Orange] Intermediate density
left side
** Gases
***[#Yellow] Weak attractive force
***[#Yellow] Large distance between particles
***[#Yellow] Constant random motion
***[#Yellow] Negligible forces except during collisions
***[#Yellow] No fixed shape or volume
***[#Yellow] Lowest density
** Additional Information
***[#Pink] Fluids
****[#LightPink] Liquids and gases
****[#LightPink] Ability to flow
***[#Pink] Particle behavior
****[#LightPink] Liquids: stay at bottom
****[#LightPink] Gases: spread and fill container
@endmindmap`}
        />
      </section>
    </div>
  );
};

export default Mindmap;
