import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from "next/image";

const MindmapCentripetal = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">Centripetal Force</h1>
        <PlantUMLDiagram
          code={`@startmindmap
*[#LightBlue] Centripetal Force
** Uniform Circular Motion
*** Constant speed
*** Changing direction
*** Acceleration towards center
** Definition
*** Force pulling object into circular path
*** Center-seeking force
** Examples
*** Communications satellite
*** Ball on a string
*** Planets orbiting Sun
*** Moon orbiting Earth
** Formula
*** F = mv² / r
**** m: mass
**** v: velocity
**** r: radius
** Characteristics
*** Perpendicular to velocity
*** Directed towards center
*** Causes change in velocity
** Applications
*** Hammer throw
**** Example calculation
***** Mass: 5 kg
***** Radius: 1.5 m
***** Speed: 25 m/s
***** Force: 2083.3 N
@endmindmap`}
        />

        <Image
          src="/sentrypatternforce.png"
          alt="Centripetal Force Image for understanding"
          width={900}
          height={900}
        />
      </section>
    </div>
  );
};

export default MindmapCentripetal;
