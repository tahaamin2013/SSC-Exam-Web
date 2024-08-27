import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">INDUCED MAGNETISM</h1>
        <PlantUMLDiagram
          code={`
@startmindmap
*[#LightBlue] Induced Magnetism
** Definition
***[#LightGreen] Non-magnetic material becomes magnetic
***[#LightGreen] Can also lose magnetization
** Methods
***[#Orange] Stroking Method
****[#Yellow] Rubbing with permanent magnet
****[#Yellow] Aligns poles of material
***[#Orange] Hammering Method
****[#Yellow] Place in strong magnetic field
****[#Yellow] Gently hammer
****[#Yellow] Can be enhanced by heating
***[#Orange] Heating Method
****[#Yellow] Usually for demagnetization
****[#Yellow] Can generate magnetic field (Seebeck effect)
***[#Orange] Solenoid Method
****[#Yellow] Most common method
****[#Yellow] Coil of wire around metal
****[#Yellow] Current creates magnetic field
left side
** Solenoid Details
***[#Pink] Resembles bar magnet field
***[#Pink] Magnetizes while current flows
***[#Pink] DC vs AC current effects
***[#Pink] Soft vs Hard magnetic materials
** Mathematical Formulas
***[#Cyan] Solenoid field: B = μ₀ n I
***[#Cyan] Turns per unit length: n = N / L
***[#Cyan] Wire field: B = μ₀ I / (2π r)
** Example 8.1
***[#Purple] Solenoid field calculation
** Additional Information
***[#Red] Induced magnet definition
***[#Red] Applications in electric motors
***[#Red] Temporary magnets
@endmindmap`}
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-blue-500">TEMPORARY AND PERMANENT MAGNETICS</h1>
        <PlantUMLDiagram
          code={`
@startmindmap
*[#LightBlue] Magnets
** Temporary Magnets (Electromagnets)
***[#LightGreen] Characteristics
****[#Yellow] Magnetic field due to electric current
****[#Yellow] Loses magnetism when current stops
****[#Yellow] Also called electromagnets
***[#LightGreen] Examples
****[#Yellow] Iron nails
****[#Yellow] Screws
****[#Yellow] Metal bolts
****[#Yellow] Kitchen utensils
left side
** Permanent Magnets
***[#Orange] Characteristics
****[#Pink] Permanently magnetized
****[#Pink] Made of hard magnetic materials
***[#Orange] Examples
****[#Pink] Iron ore
****[#Pink] Cobalt
****[#Pink] Nickel
****[#Pink] Alnico
** Comparison
***[#Cyan] Magnetization
****[#LightCyan] Permanent: Permanent
****[#LightCyan] Electromagnet: Temporary
***[#Cyan] Material
****[#LightCyan] Permanent: Hard magnetic
****[#LightCyan] Electromagnet: Soft magnetic
***[#Cyan] Strength
****[#LightCyan] Permanent: Fixed
****[#LightCyan] Electromagnet: Variable
***[#Cyan] Poles
****[#LightCyan] Permanent: Fixed
****[#LightCyan] Electromagnet: Changeable
@endmindmap`}
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-blue-500">USES OF PERMANENT MAGNETS AND ELECTROMAGNETS:</h1>
        <PlantUMLDiagram
          code={`
@startmindmap
*[#LightBlue] Uses of Magnets
** Permanent Magnets
***[#LightGreen] Characteristics
****[#Yellow] Retains magnetization
****[#Yellow] No continuous energy supply needed
****[#Yellow] Lower field strength than electromagnets
***[#LightGreen] Applications
****[#Yellow] Induction cooker
****[#Yellow] MRI machines
****[#Yellow] Particle accelerators
****[#Yellow] Transformers
****[#Yellow] Automotive industry
****[#Yellow] Aerospace industry
****[#Yellow] Medical industry
****[#Yellow] Semiconductor industry
****[#Yellow] Energy industry
left side
** Electromagnets
***[#Orange] Characteristics
****[#Pink] Magnetic field created by electric current
****[#Pink] Temporary magnetization
****[#Pink] Higher field strength possible
***[#Orange] Applications
****[#Pink] Electromechanical devices
****[#Pink] Electronics devices
****[#Pink] Home appliances
*****[#LightPink] Electric fan
*****[#LightPink] Electric motors
*****[#LightPink] Door bells
****[#Pink] Medical field (MRI scans)
****[#Pink] Communication devices
****[#Pink] Power circuits
** Additional Information
***[#Cyan] Resemblance between bar magnet and coil fields
@endmindmap`}
        />
      </section>
      <section>
        <h1 className="text-4xl font-bold text-blue-500">APPLICATIONS OF MAGNETS</h1>
        <PlantUMLDiagram
          code={`
@startmindmap
*[#LightBlue] Applications of Magnets
** Magnetic Recording
***[#LightGreen] Process
****[#Yellow] Selective magnetization of material
****[#Yellow] Electrical signals to magnetic patterns
***[#LightGreen] Components
****[#Yellow] Magnetic tape head
****[#Yellow] Moving tape
***[#LightGreen] Materials Used
****[#Yellow] Iron-oxide
****[#Yellow] Cobalt
****[#Yellow] Chromium oxide
****[#Yellow] Pure iron
***[#LightGreen] Storage Media
****[#Yellow] Magnetic tape
****[#Yellow] Disk recorders
****[#Yellow] Magnetic drum
****[#Yellow] Core units
****[#Yellow] Bubble units
left side
** Speakers
***[#Orange] Components
****[#Pink] Permanent magnet (strong)
****[#Pink] Electromagnet
****[#Pink] Cone (diaphragm)
***[#Orange] Functioning
****[#Pink] Electromagnet vibrates with current
****[#Pink] Cone vibrates to produce sound
***[#Orange] Material Used
****[#Pink] Neodymium (permanent magnet)
***[#Orange] Related Device
****[#Pink] Microphones (reverse process)
** Door Locks
***[#Cyan] Components
****[#LightCyan] Electromagnet (door frame)
****[#LightCyan] Metal plate (door)
***[#Cyan] Functioning
****[#LightCyan] Current attracts metal plate
****[#LightCyan] No current releases plate
***[#Cyan] Usage
****[#LightCyan] Systems with continuous power supply
@endmindmap`}
        />
      </section>
    </div>
  );
};

export default MagneticMindmap;