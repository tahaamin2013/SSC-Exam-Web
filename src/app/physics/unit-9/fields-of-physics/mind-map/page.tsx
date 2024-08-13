import React from "react";
import PlantUMLDiagram from "@/components/PlantUMLDiagram";

// const umlCode = `
// @startmindmap
// * Fields of Physics
// ** Biophysics
// ***:Study of various characteristics and
// systems of the living body;
// ** Astronomy
// ***:study of everything in the universe
// beyond Earth&apos;s atmosphere;
// ** Astrophysics
// ***:Study of celestical bodies
// e.g. stars, planets, and galaxies;
// ** Cosmology
// ***:study of the origin, development, structure,
// history, and future of the entire universe;
// ** Thermal Physics
// ***:collective study of statistical mechanics,
// thermodynamics, and kinetic theory of gases;
// ** Optics
// ***:study of nature & properties of light, its interactions with matter,
// and the construction of instruments that use or detect it;
// ** Nuclear Physics
// ***:study of the structure, properties,
// and behavior of atomic nuclei;
// ** Particle Physics(high energy physics)
// ***:study of fundamental particles and
// forces that create matter and radiation;
// left side
// ** Electromagnetism
// ***:study of electromagnetic forces
// between electrically charged particles;
// ** Acoustics
// ***:deals with the production, transmission,
// control, reception, and effects of sound;
// ** Computational Physics
// ***:study and implementation of numerical analysis
// to solve complex problems in physics;
// ** Geophysics
// ***:study of structure of the Earth, physical processes,
// and phenomena occurring especially in the Earth and in its vicinity;
// ** Climate Physics
// *** study of the Earth&apos;s climate
// ** Classical Mechanics
// ***:study of motion of macroscopic
// objects under the action of forces;
// ** Quantum Mechanics
// ***:study of mathematical description of motion
// and behavior of microscopic particles under different situations;
// ** Relativistic Mechanics
// ***:study of system of bodies whose relative velocities approach the speed of light,
// or whose kinetic energies are comparable with the product
// of their masses and the square of the velocity of light;
// @endmindmap
// `;

const umlCode = `
@startmindmap
* Fields of Physics
right side
** Fundamental Physics
*** Classical Mechanics
****:study of motion of macroscopic
objects under the action of forces;
*** Quantum Mechanics
****:study of mathematical description of motion
and behavior of microscopic particles under different situations;
*** Relativistic Mechanics
****:study of system of bodies whose relative velocities approach the speed of light,
or whose kinetic energies are comparable with the product
of their masses and the square of the velocity of light;
** Fields and Waves
*** Electromagnetism
****:study of electromagnetic forces
between electrically charged particles;
*** Acoustics
****:deals with the production, transmission,
control, reception, and effects of sound;
*** Optics
****:study of nature & properties of light, its interactions with matter,
and the construction of instruments that use or detect it;
** Earth and Environmental Sciences
*** Geophysics
****:study of structure of the Earth, physical processes,
and phenomena occurring especially in the Earth and in its vicinity;
*** Climate Physics
****:study of the Earth&apos;s climate;
** Universe Studies
*** Astronomy
****:study of everything in the universe
beyond Earth&apos;s atmosphere;
*** Astrophysics
****:Study of celestical bodies
e.g. stars, planets, and galaxies;
*** Cosmology
****:study of the origin, development, structure,
history, and future of the entire universe;
** Matter and Energy
*** Thermal Physics
****:collective study of statistical mechanics,
thermodynamics, and kinetic theory of gases;
*** Nuclear Physics
****:study of the structure, properties,
and behavior of atomic nuclei;
*** Particle Physics(high energy physics)
****:study of fundamental particles and
forces that create matter and radiation;
** Physics in Multiple Areas
*** Biophysics
****:Study of various characteristics and
systems of the living body;
*** Computational Physics
****:study and implementation of numerical analysis
to solve complex problems in physics;
@endmindmap
`;

const PhysicsFields = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-8 px-4">
      <div className="bg-white items-center flex flex-col p-8 rounded-lg shadow-lg  w-full mb-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Fields of Physics
        </h1>
        <PlantUMLDiagram code={umlCode} />
      </div>

      <div className="container mx-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-200 text-gray-600">
            <tr>
              <th className="px-6 py-3 text-left">Field</th>
              <th className="px-6 py-3 text-left">Description</th>
              <th className="px-6 py-3 text-left">Focus</th>
              <th className="px-6 py-3 text-left">Tools/Methods</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="px-6 py-4">Biophysics</td>
              <td className="px-6 py-4">
                Study of biological systems and characteristics, such as blood
                flow and radiation in medicine.
              </td>
              <td className="px-6 py-4">
                Living organisms and their physical processes
              </td>
              <td className="px-6 py-4">
                Experiments in physiology, medical imaging, and radiation
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-6 py-4">Astronomy</td>
              <td className="px-6 py-4">
                Study of celestial objects and the universe beyond Earth&apos;s
                atmosphere.
              </td>
              <td className="px-6 py-4">
                Celestial bodies and the universe as a whole
              </td>
              <td className="px-6 py-4">
                Telescopes, observations, and astrophysical data
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-6 py-4">Astrophysics</td>
              <td className="px-6 py-4">
                Study of physical nature of celestial bodies and application of
                physics to astronomical phenomena.
              </td>
              <td className="px-6 py-4">
                Physical properties and processes of celestial bodies
              </td>
              <td className="px-6 py-4">
                Theoretical models, observational data, and simulations
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-6 py-4">Cosmology</td>
              <td className="px-6 py-4">
                Study of the origin, structure, and evolution of the universe.
              </td>
              <td className="px-6 py-4">
                The entire universe from birth to future
              </td>
              <td className="px-6 py-4">
                Observational astronomy, theoretical models
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-6 py-4">Thermal Physics</td>
              <td className="px-6 py-4">
                Study of statistical mechanics, thermodynamics, and kinetic
                theory of gases.
              </td>
              <td className="px-6 py-4">
                Heat, energy, and the behavior of gases
              </td>
              <td className="px-6 py-4">
                Mathematical modeling and experimental thermodynamics
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-6 py-4">Optics</td>
              <td className="px-6 py-4">
                Study of light, its interactions with matter, and optical
                instruments.
              </td>
              <td className="px-6-4 py-4">Light and its behavior</td>
              <td className="px-6 py-4">
                Optical instruments, experiments with light and lenses
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-6 py-4">Nuclear Physics</td>
              <td className="px-6 py-4">
                Study of atomic nuclei and their interactions.
              </td>
              <td className="px-6 py-4">
                Atomic nuclei and subatomic particles
              </td>
              <td className="px-6 py-4">
                Particle accelerators, nuclear reactors
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-6 py-4">Particle Physics</td>
              <td className="px-6 py-4">
                Study of fundamental particles and forces that create matter and
                radiation.
              </td>
              <td className="px-6 py-4">Fundamental particles and forces</td>
              <td className="px-6 py-4">
                High-energy particle collisions, detectors
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-6 py-4">Electromagnetism</td>
              <td className="px-6 py-4">
                Study of electromagnetic forces between charged particles.
              </td>
              <td className="px-6 py-4">Electric and magnetic fields</td>
              <td className="px-6 py-4">
                Electromagnetic theory, experiments with fields and charges
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-6 py-4">Acoustics</td>
              <td className="px-6 py-4">
                Study of sound production, transmission, and effects.
              </td>
              <td className="px-6 py-4">Sound waves and their interactions</td>
              <td className="px-6 py-4">
                Sound measurements, acoustic engineering
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-6 py-4">Computational Physics</td>
              <td className="px-6 py-4">
                Use of numerical methods and computer simulations to solve
                physical problems.
              </td>
              <td className="px-6 py-4">
                Complex physical systems and numerical analysis
              </td>
              <td className="px-6 py-4">
                Computer simulations, numerical analysis
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-6 py-4">Geophysics</td>
              <td className="px-6 py-4">
                Study of Earth&apos;s physical processes and structure.
              </td>
              <td className="px-6 py-4">
                Earth&apos;s interior and surface processes
              </td>
              <td className="px-6 py-4">
                Seismic data, gravitational studies, and magnetic surveys
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-6 py-4">Climate Physics</td>
              <td className="px-6 py-4">
                Study of Earth&apos;s climate and its physical aspects.
              </td>
              <td className="px-6 py-4">Climate systems and processes</td>
              <td className="px-6 py-4">Climate models, observational data</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-6 py-4">Classical Mechanics</td>
              <td className="px-6 py-4">
                Study of macroscopic objects and their motion under forces.
              </td>
              <td className="px-6 py-4">Motion of large objects</td>
              <td className="px-6 py-4">
                Mathematical models of motion and forces
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="px-6 py-4">Quantum Mechanics</td>
              <td className="px-6 py-4">
                Study of microscopic particles and their behavior under various
                conditions.
              </td>
              <td className="px-6 py-4">
                Behavior of particles at quantum scales
              </td>
              <td className="px-6 py-4">
                Quantum theory, experiments with particles
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4">Relativistic Mechanics</td>
              <td className="px-6 py-4">
                Study of objects moving close to the speed of light and
                relativistic effects.
              </td>
              <td className="px-6 py-4">
                High-speed objects and relativistic effects
              </td>
              <td className="px-6 py-4">
                Theory of relativity, high-speed particle experiments
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PhysicsFields;
