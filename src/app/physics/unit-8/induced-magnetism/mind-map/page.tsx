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
         <PlantUMLDiagram code={`@startmindmap
* Flashlight with a Hand-Crank
** How It Works
*** Spinning Magnet
**** Turning the crank spins the magnet around the wire loops
*** Magic Change
**** Spinning changes the magnetic field around the wire loops
*** Making Light
**** The "magic change" creates an electric current
**** This current powers the flashlight&apos;slight
** Faraday’s Law of Induction
*** Formula: \(\mathcal{E} = -N \frac{\Delta \Phi}{\Delta t}\)
**** \( \mathcal{E} \)
***** Induced EMF or Voltage
***** Measured in volts (V)
***** Shows how strong the electricity is
**** \( N \)
***** Number of Turns
***** Unitless (count of wire loops)
***** More loops = more electricity
**** \( \Delta \Phi \)
***** Change in Magnetic Flux
***** Measured in Webers (Wb)
***** Indicates change in magnet’s power
**** \( \Delta t \)
***** Change in Time
***** Measured in seconds (s)
***** Faster changes = more power
** Putting It All Together
*** Magnetic Flux (\( \Delta \Phi \)) in Webers
*** Change in Time (\( \Delta t \)) in Seconds
*** Rate of Change of Flux
*** Number of Loops (\( N \))
*** Induced Voltage (\( \mathcal{E} \)) in Volts
@endmindmap
`} />
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
        <h1>Magnetic Recording</h1>
        <PlantUMLDiagram
          code={`
@startmindmap
* Magnetic Recording
** Definition
*** Saving sounds, pictures, and data
*** Electrical signals
*** Selective magnetization
** Process
*** Writing data
**** Magnetic tape head
**** Tape in motion
**** Alignment of magnetic domains
*** Reading data
**** Reverse process
** Materials
*** Iron-oxide
*** Cobalt
*** Chromium oxide
*** Pure iron
** Recording Media
*** Magnetic tape
*** Disk recorders
** Applications
*** Audio storage
*** Video storage
*** Computer data storage
** Other Devices
*** Magnetic drum
*** Core units
*** Bubble units
@endmindmap`}
        />
        <h1>Speakers</h1>
        <PlantUMLDiagram
          code={`
@startmindmap
* Speakers
** Function
*** Create vibrations in air
*** Produce sound
** Components
*** Permanent magnet
**** Strong magnetization
**** Fixed in center of cone
*** Electromagnet
**** Attached to center of permanent magnet
**** Can move to and fro
*** Cone (Diaphragm)
**** Conical structure
**** Made of flexible material
**** Produces vibrations
** Working Principle
*** Sound signal as electric current
*** Flows through electromagnet coil
*** Produces alternating magnetic field
*** Interacts with permanent magnet field
*** Causes vibration
*** Cone vibrates with electromagnet
*** Produces sound
** Factors affecting sound
*** Larger permanent magnet
**** Produces louder sound
** Materials
*** Neodymium
**** Commonly used for permanent magnet
** Related device
*** Microphone
**** Uses magnets in reverse order
**** Cone vibrates due to sound
**** Produces movement in electromagnet
**** Generates electric current
**** Acts as signal for speaker
@endmindmap`}
        />
        <h1>door locks</h1>
        <PlantUMLDiagram
          code={`
@startmindmap
* Magnetic Door Locks
** Components
*** Electromagnet
**** Fixed at door frame
*** Metal plate
**** Fixed with the door
** Working Principle
*** Door closed
**** Metal plate connects with electromagnet
*** Current flows through electromagnet
**** Attracts metal plate with huge force
**** Makes door difficult to open
*** To open door
**** Disconnect current from electromagnet
**** Releases metal plate
** Requirements
*** Continuous power supply
** Applications
*** Systems with constant electricity
@endmindmap`}
        />
      </section>

      
    </div>
  );
};

export default MagneticMindmap;