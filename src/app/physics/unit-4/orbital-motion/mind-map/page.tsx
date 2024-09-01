import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MindmapFriction = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">ORBITAL MOTION</h1>
        <PlantUMLDiagram
          code={`@startmindmap
*[#LightBlue] Orbital Motion
** What is an orbit?
*** Regular, repeating path
*** One object moves around another
** Satellite
*** Object in orbit
*** Types
**** Natural
***** Earth
***** Moon
**** Artificial
***** International Space Station
** Cause of orbits
*** Gravity
** Examples of orbits
*** Moons orbiting planets
*** Planets orbiting stars
*** Comets orbiting stars
*** Asteroids orbiting stars
** Placing a satellite in orbit
*** Move to high altitude
*** Accelerate to required tangential speed
*** Use rockets
** Orbit types
*** Circular (typical)
*** Elliptical (if speed too high)
*** Escape (if speed too high)
*** Fall back to Earth (if speed too low)
@endmindmap`}
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-blue-500">AVERAGE ORBITAL SPEED OF SATELLITE</h1>
        <PlantUMLDiagram
          code={`@startmindmap
*[#LightBlue] Average Orbital Speed of Satellite
** Definition
***[#LightGreen] Speed at which body orbits around system center
***[#LightGreen] Usually around a massive object
** Orbital Distance
***[#LightYellow] Equal to circumference of orbit
***[#LightYellow] Formula: Distance = 2πr
****_ r is radius of orbit
** Orbital Period (T)
***[#LightPink] Time for one complete orbit
***[#LightPink] Examples
****_ Earth: 365 days
****_ Neptune: 165 years
***[#LightPink] Increases with distance from center
** Average Orbital Speed Formula
***[#Orange] vave = 2πr / T
***[#Orange] Same speed for all satellites at particular distance
****_ Irrespective of satellite size
** Quiz
***[#Cyan] Can a satellite catch up by increasing speed?
****_ No, increased speed increases orbit radius
** Example: Earth&apos;sOrbital Speed
***[#LightGray] Given
****_ T = 365.25 days = 3.16 × 10^7 s
****_ r = 150 million km = 1.5 × 10^11 m
***[#LightGray] Solution
****_ v = 2.98 × 10^4 m/s
****_ v = 29.8 km/s
****_ v = 107,280 km/h
***[#LightGray] Note
****_ High speed not felt due to relative rest
@endmindmap`}
        />
      </section>

    </div>
  );
};

export default MindmapFriction;
