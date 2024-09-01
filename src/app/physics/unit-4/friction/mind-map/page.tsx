import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MindmapFriction = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">Friction</h1>
        <PlantUMLDiagram
          code={`@startmindmap
*[#LightBlue] FRICTION
** Symbol
*** f
** Definition
***[#LightGreen] Resistance to relative motion
*** Occurs between materials in contact
**** Solids
**** Liquids
**** Gases
** Properties
***[#Yellow] Vector quantity
*** Unit: Newton (N)
** Direction
***[#Pink] Opposes motion
**** Example 1
***** Push block right
***** Friction acts left
**** Example 2
***** Object falls down
***** Air resistance acts up
@endmindmap`}
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-blue-500">Microscopic description of friction</h1>
        <PlantUMLDiagram
          code={`@startmindmap
*[#LightBlue] Microscopic Description of Friction
** Surface Properties
***[#LightGreen] All surfaces are rough
**** Even polished surfaces
**** Visible under microscope
** Surface Contact
***[#Yellow] Limited actual contact area
***[#Yellow] Roughness interlocks
** Sliding Friction
***[#Pink] Resistance between sliding objects
**** Example: Bike brakes
***** Rim brakes
****** Most effective and popular
****** Controlled by hand levers
****** Pads press against rim
****** Causes wheel to slow down
@endmindmap`}
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-blue-500">ADVANTAGES AND DISADVANTAGES OF FRICTION</h1>
        <PlantUMLDiagram
          code={`@startmindmap
*[#LightBlue] Friction
** Advantages
***[#LightGreen] Helps us walk
***[#LightGreen] Enables car driving
***[#LightGreen] Holds screws and nails in wood
** Disadvantages
***[#Pink] Slows down moving objects
***[#Pink] Causes heating in machinery
***[#Pink] Wastes energy
***[#Pink] Produces wear and tear
@endmindmap`}
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-blue-500">METHODS OF REDUCING FRICTION</h1>
        <PlantUMLDiagram
          code={`@startmindmap
*[#LightBlue] Methods of Reducing Friction
** Polishing
***[#LightGreen] Smoothens rough surfaces
** Ball Bearings
***[#Yellow] Converts sliding friction to rolling friction
** Lubricants
***[#Pink] Apply oil or grease
***[#Pink] Reduces friction between machinery parts
@endmindmap`}
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-blue-500">ROLLING FRICTION</h1>
        <PlantUMLDiagram
          code={`@startmindmap
*[#LightBlue] Rolling Friction
** Definition
***[#LightGreen] Opposing force on rolling objects
** Characteristics
***[#Yellow] Much smaller than static or sliding friction
***[#Yellow] 2-3 orders of magnitude less
** Importance
***[#Pink] Discovery of wheel as major milestone
** Example
***[#Orange] Helps move heavy objects with wheels
****[#Orange] e.g., deep freezer
@endmindmap`}
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-blue-500">FLUID FRICTION</h1>
        <PlantUMLDiagram
          code={`@startmindmap
*[#LightBlue] Fluid Friction
** Fluid Definition
***[#LightGreen] Collection of molecules
***[#LightGreen] Held by weak cohesive forces
***[#LightGreen] Includes liquids and gases
** Drag Force
***[#Yellow] Retarding force on moving objects
***[#Yellow] Result of fluid friction
** Newton&apos;sThird Law
***[#Pink] Object pushes fluid
***[#Pink] Fluid pushes back equally
@endmindmap`}
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-blue-500">Frictional Dissipation</h1>
        <PlantUMLDiagram
          code={`@startmindmap
*[#LightBlue] Frictional Dissipation
** Definition
***[#LightGreen] Decreases mechanical energy in system
***[#LightGreen] Opposes motion of object
** Examples
***[#Yellow] Sky diver
**** Energy dissipated into air
**** Increases air temperature
***[#Pink] Rubbing hands in winter
**** Friction increases hand temperature
***[#Orange] Shooting stars (Meteors)
**** Heated by atmospheric friction
**** Intense heat vaporizes most meteors
@endmindmap`}
        />
      </section>

    </div>
  );
};

export default MindmapFriction;
