import React from 'react';
import PlantUMLDiagram from '@/components/PlantUMLDiagram';

const umlCode = `
@startmindmap
* Fields of Physics
** Biophysics
** Astronomy
** Astrophysics
** Cosmology
** Thermal Physics
** Optics
** Nuclear Physics
** Particle Physics
left side
** Electromagnetism
** Acoustics
** Computational Physics
** Geophysics
** Climate Physics
** Classical Mechanics
** Quantum Mechanics
** Relativistic Mechanics
@endmindmap
`;

const PhysicsFields = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-8 px-4">
      <div className="bg-white items-center flex flex-col p-8 rounded-lg shadow-lg max-w-4xl w-full mb-8">
        <h1 className="text-3xl font-bold text-center mb-8">Fields of Physics</h1>
        <PlantUMLDiagram code={umlCode} />
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h2 className="text-2xl font-bold mb-4">Summary of Physics Fields</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Field</th>
                <th className="border p-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2 font-semibold">Biophysics</td>
                <td className="border p-2">Study of characteristics and systems of living bodies</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Astronomy</td>
                <td className="border p-2">Study of everything in the universe beyond Earth&apos;s atmosphere</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Astrophysics</td>
                <td className="border p-2">Study of physical nature of celestial bodies and application of physics to astronomical observations</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Cosmology</td>
                <td className="border p-2">Study of the origin, development, structure, history, and future of the entire universe</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Thermal Physics</td>
                <td className="border p-2">Collective study of statistical mechanics, thermodynamics, and kinetic theory of gases</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Optics</td>
                <td className="border p-2">Study of nature and properties of light, its interactions with matter</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Nuclear Physics</td>
                <td className="border p-2">Study of structure, properties, and behavior of atomic nuclei</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Particle Physics</td>
                <td className="border p-2">Study of fundamental particles and forces that create matter and radiation</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Electromagnetism</td>
                <td className="border p-2">Study of electromagnetic forces between electrically charged particles</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Acoustics</td>
                <td className="border p-2">Study of production, transmission, control, reception, and effects of sound</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Computational Physics</td>
                <td className="border p-2">Implementation of numerical analysis to solve complex problems in physics</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Geophysics</td>
                <td className="border p-2">Study of Earth&apos;s structure, physical processes and phenomena</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Climate Physics</td>
                <td className="border p-2">Study of Earth&apos;s climate</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Classical Mechanics</td>
                <td className="border p-2">Study of motion of macroscopic objects under the action of forces</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Quantum Mechanics</td>
                <td className="border p-2">Mathematical description of motion and behavior of microscopic particles</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Relativistic Mechanics</td>
                <td className="border p-2">Study of systems with velocities approaching the speed of light</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PhysicsFields;