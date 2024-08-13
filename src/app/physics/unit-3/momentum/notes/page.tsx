import React from 'react';

const AcademicNotes = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-indigo-800">Momentum and Impulse</h1>

      <section className="mb-12 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-700">3.5 Momentum</h2>
        <p className="mb-4">Momentum (p) is the product of an object&apos;s mass (m) and velocity (v):</p>
        <div className="bg-gray-200 p-3 rounded-md text-center mb-4">
          <code className="text-lg font-mono">p = mv</code>
        </div>
        <ul className="list-disc list-inside mb-4">
          <li>Momentum is a vector quantity</li>
          <li>SI unit: kilogram-meter per second (kg·m/s) or newton-second (N·s)</li>
        </ul>

        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-4">
          <h3 className="font-semibold text-lg mb-2">Example 3.4: Golf Ball Momentum</h3>
          <p>A 45g golf ball traveling at 80 m/s has a momentum of:</p>
          <p className="font-semibold mt-2">p = 0.045 kg × 80 m/s = 3.6 kg·m/s</p>
        </div>
      </section>

      <section className="mb-12 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-700">3.5.1 Force and Change in Momentum</h2>
        <p className="mb-4">Newton&apos;s Second Law relates force and momentum:</p>
        <div className="bg-gray-200 p-3 rounded-md text-center mb-4">
          <code className="text-lg font-mono">F = ma = m(Δv / Δt) = Δp / Δt</code>
        </div>
        <p className="mb-4">The time rate of change of linear momentum equals the net force acting on the body.</p>

        <div className="bg-green-100 border-l-4 border-green-500 p-4 mb-4">
          <h3 className="font-semibold text-lg mb-2">Key Insight</h3>
          <p>For a sudden change in momentum, force is large. Increasing the duration of impact reduces the force.</p>
        </div>
      </section>

      <section className="mb-12 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-700">3.5.2 Impulse and Change in Momentum</h2>
        <p className="mb-4">Impulse (J) is the product of force and time interval:</p>
        <div className="bg-gray-200 p-3 rounded-md text-center mb-4">
          <code className="text-lg font-mono">J = F × Δt = Δp</code>
        </div>
        <ul className="list-disc list-inside mb-4">
          <li>Impulse is a vector quantity</li>
          <li>Direction is the same as the force causing it</li>
          <li>SI units are the same as momentum</li>
        </ul>
      </section>

      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-700">3.5.3 Conservation of Momentum</h2>
        <p className="mb-4">For an isolated system with no net external force:</p>
        <div className="bg-gray-200 p-3 rounded-md text-center mb-4">
          <code className="text-lg font-mono">ΔP = 0</code>
        </div>
        <p className="font-semibold mb-2">Law of Conservation of Momentum:</p>
        <p className="italic mb-4">&quot;The momentum of an isolated system remains constant.&quot;</p>

        <div className="bg-blue-100 border-l-4 border-blue-500 p-4">
          <h3 className="font-semibold text-lg mb-2">Application: Rocket Propulsion</h3>
          <p>Rockets accelerate in space by expelling hot gases with large momentum, gaining an equal and opposite momentum.</p>
        </div>
      </section>
    </div>
  );
};

export default AcademicNotes;