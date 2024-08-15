import React from 'react'
import FundamentalForcesComponent from '../mind-map/fundamentalforcecomponent'

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="bg-blue-600 py-6 px-8">
          <h1 className="text-3xl font-extrabold text-white">
            Dynamics: Forces and Motion
          </h1>
        </div>

        <div className="p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Introduction to Dynamics</h2>
            <p className="text-gray-600">
              Dynamics is the study of the connection between force and motion. Forces cause objects to:
            </p>
            <ul className="list-disc pl-5 mt-2 text-gray-600">
              <li>Start or stop moving</li>
              <li>Speed up or slow down</li>
              <li>Change direction</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Force</h2>
            <p className="text-gray-600 mb-2">
              Definition: A vector quantity that changes or tends to change the state of a body.
            </p>
            <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-2">Types of Forces:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-blue-600">A. Contact Forces</h4>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Normal force</li>
                  <li>Thrust</li>
                  <li>Friction</li>
                  <li>Tension</li>
                  <li>Elastic forces</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-600">B. Non-Contact Forces</h4>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Gravitational force</li>
                  <li>Electrostatic force</li>
                  <li>Magnetic force</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Fundamental Forces in Nature</h2>
            {/* <div className="space-y-4">
              {[
                { name: "Strong Nuclear Force", description: "Strongest fundamental force, keeps protons together in nucleus, very short range. Exchange particles: pions." },
                { name: "Electromagnetic Force", description: "Acts between electric charges, includes electric and magnetic forces, infinite range. Exchange particle: photon." },
                { name: "Gravitational Force", description: "Weakest fundamental force, attraction between all objects with mass, infinite range. Theoretical exchange particle: graviton (not yet detected)." },
                { name: "Weak Nuclear Force", description: "Very weak, short-range force, responsible for radioactive decay. Exchange particles: vector bosons (W+, W-, Z0)." }
              ].map((force, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-600 mb-2">{force.name}</h3>
                  <p className="text-gray-600">{force.description}</p>
                </div>
              ))}
            </div> */}
            <FundamentalForcesComponent />
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Force Diagrams</h2>
            <ul className="list-disc pl-5 text-gray-600">
              <li><span className="font-semibold">System Diagrams (SD):</span> Visual representation of all objects involved</li>
              <li><span className="font-semibold">Free-Body Diagrams (FBD):</span> Schematic of single object with force vectors</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Net Force</h2>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Sum of all forces acting on an object</li>
              <li>Determines if forces are balanced or unbalanced</li>
              <li>Balanced forces: Net force = 0 N (no change in motion)</li>
              <li>Unbalanced forces: Net force ≠ 0 N (change in motion)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Vector Addition of Forces</h2>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Like parallel forces: Add magnitudes</li>
              <li>Unlike parallel forces: Subtract magnitudes</li>
              <li>Non-parallel forces: Use head-to-tail rule or coordinate system</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Page