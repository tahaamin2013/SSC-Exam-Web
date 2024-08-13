import React from 'react';

const MassAndWeight = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-cyan-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="bg-blue-600 py-6 px-8">
          <h1 className="text-3xl font-extrabold text-white">Mass and Weight</h1>
        </div>

        <div className="p-8 space-y-8">
          <section className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Key Concepts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Mass</h3>
                <p className="text-gray-700">Amount of matter an object contains; measure of its inertia.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Weight</h3>
                <p className="text-gray-700">Gravitational force acting on a mass or object.</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Weight Calculation</h2>
            <p className="text-gray-700 mb-4">On Earth&apos;s surface (g ≈ 9.80 m/s²):</p>
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <p className="text-xl font-semibold text-blue-600">W = mg</p>
              <p className="text-gray-600 mt-2">Where: W = Weight, m = Mass, g = Acceleration due to gravity</p>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Measuring Force and Mass</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Spring Scale</h3>
                <p className="text-gray-700">Uses a spring that stretches when force is applied. Measures force with a graduated scale.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-2">Force Sensor</h3>
                <p className="text-gray-700">Electronic gauge for high-accuracy force measurement. Provides digital readout or graph.</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Mass from Weight</h2>
            <p className="text-gray-700 mb-4">Converting weight to mass:</p>
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <p className="text-xl font-semibold text-blue-600">m = W / g</p>
              <p className="text-gray-600 mt-2">Where: m = Mass, W = Weight, g = Acceleration due to gravity</p>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Example: Weight on Earth vs Moon</h2>
            <div className="space-y-4">
              <p className="text-gray-700">Given: Mass of school bag = 8 kg</p>
              <p className="text-gray-700">Earth&apos;s g = 9.8 m/s², Moon&apos;s g = 1.625 m/s²</p>
              <div>
                <h3 className="text-lg font-semibold text-blue-600">Weight on Earth:</h3>
                <p className="text-gray-700">W₁ = 8 kg × 9.8 m/s² = 78.4 N</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-600">Weight on Moon:</h3>
                <p className="text-gray-700">W₂ = 8 kg × 1.625 m/s² = 13 N</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MassAndWeight;