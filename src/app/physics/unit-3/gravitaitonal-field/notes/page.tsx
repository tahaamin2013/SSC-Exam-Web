import React from 'react';

const GravitationalField = () => {
  const planetData = [
    { planet: 'Mercury', g: 3.7 },
    { planet: 'Venus', g: 8.9 },
    { planet: 'Earth', g: 9.8 },
    { planet: 'Mars', g: 3.7 },
    { planet: 'Jupiter', g: 24.7 },
    { planet: 'Saturn', g: 9.0 },
    { planet: 'Uranus', g: 8.7 },
    { planet: 'Neptune', g: 11.0 },
    { planet: 'Sun', g: 274 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="bg-indigo-600 py-6 px-8">
          <h1 className="text-3xl font-extrabold text-white">Gravitational Field</h1>
        </div>

        <div className="p-8 space-y-8">
          <section className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">Definition</h2>
            <p className="text-gray-700">
              The region around a massive object (such as Earth, Sun, etc.) where gravitational force is operative is termed as a <strong>gravitational field</strong>.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">Gravitational Field Strength</h2>
            <p className="text-gray-700 mb-4">
              The amount of force per unit mass acting on objects in the gravitational field.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <p className="text-xl font-semibold text-indigo-600">g = F / m</p>
              <p className="text-gray-600 mt-2">Where: g = Gravitational field strength, F = Force, m = Mass</p>
            </div>
            <ul className="list-disc pl-5 mt-4 text-gray-700 space-y-2">
              <li>Measured in newtons per kilogram (N/kg)</li>
              <li>Vector quantity pointing toward the center of Earth</li>
              <li>On Earth&apos;s surface: g = 9.8 N/kg or g = 9.8 m/s²</li>
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">Gravitational Field Strength in the Solar System</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-indigo-100">
                  <tr>
                    <th className="px-4 py-2 text-left">Planet</th>
                    <th className="px-4 py-2 text-left">g (N/kg)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {planetData.map((planet, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-2">{planet.planet}</td>
                      <td className="px-4 py-2">{planet.g}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-indigo-800 mb-4">Example: Gravitational Field Strength on an Unknown Planet</h2>
            <div className="space-y-4">
              <p className="text-gray-700"><strong>Given:</strong></p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Weight on Earth: W = 400 N</li>
                <li>Weight on unknown planet: W = 150 N</li>
                <li>Gravitational field strength on Earth: g = 9.8 N/kg</li>
              </ul>
              <p className="text-gray-700"><strong>Solution:</strong></p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-indigo-600 font-semibold">W₁ / g₁ = W₂ / g₂</p>
                <p className="text-gray-700 mt-2">150 N / g = 400 N / 9.8 N/kg</p>
                <p className="text-gray-700 mt-2">g = (150 N * 9.8 N/kg) / 400 N = 3.675 N/kg</p>
              </div>
              <p className="text-gray-700">The unknown planet is Mars (the red planet), the nearest planet to Earth.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GravitationalField;