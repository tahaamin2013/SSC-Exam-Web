import React from "react"

const page = () => {
  return (
    <div className="mx-auto my-4 max-w-4xl">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">3.4 Gravitational Field</h2>

      <p className="mb-4">The region around a non-contact force where a magnetic force is operative is termed as a <strong>magnetic field</strong>. Whereas, the region around a massive object (such as Earth, Sun, etc.) where gravitational force is operative is termed as a <strong>gravitational field</strong>.</p>

      <p className="mb-4">The gravitational field strength is the amount of force per unit mass acting on objects in the gravitational field. The value of &apos;g&apos; is equal to the magnitude of the gravitational force exerted on a unit mass at that point, mathematically:</p>

      <p className="mb-4">The gravitational field strength (g) is a vector with a magnitude of &apos;g&apos; that points in the direction of the gravitational force.</p>

      <p className="mb-4">The gravitational field strength &apos;g&apos; for Earth is shown in figure 3.17. Since, from Newton&apos;s second law of motion:</p>

      <p className="mb-4">Similarly:</p>

      <p className="mb-4">In SI units, gravitational field strength is measured in newtons per kilogram (N/kg). It is a vector quantity that has the direction downward or toward the center of Earth.</p>

      <p className="mb-4">Since the gravitational field strength and the acceleration due to gravity are equal in magnitude, the same symbol, g, is used for both. Therefore, on Earth&apos;s surface, g = 9.8 N/kg [1] or g = 9.8 m/s² [2].</p>

      <p className="mb-4"><strong>Gravitational field strength &quot;g&quot;</strong></p>
      <h2 className="text-2xl font-bold text-blue-700 mb-4">TABLE 3.2: Gravitational Field Strength in the Solar System</h2>

      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="px-6 py-3 border-b border-gray-300 text-left">Planet</th>
            <th className="px-6 py-3 border-b border-gray-300 text-left">g (N/kg)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 border-b border-gray-300">Mercury</td>
            <td className="px-6 py-4 border-b border-gray-300">3.7</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 border-b border-gray-300">Venus</td>
            <td className="px-6 py-4 border-b border-gray-300">8.9</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 border-b border-gray-300">Earth</td>
            <td className="px-6 py-4 border-b border-gray-300">9.8</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 border-b border-gray-300">Mars</td>
            <td className="px-6 py-4 border-b border-gray-300">3.7</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 border-b border-gray-300">Jupiter</td>
            <td className="px-6 py-4 border-b border-gray-300">24.7</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 border-b border-gray-300">Saturn</td>
            <td className="px-6 py-4 border-b border-gray-300">9.0</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 border-b border-gray-300">Uranus</td>
            <td className="px-6 py-4 border-b border-gray-300">8.7</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 border-b border-gray-300">Neptune</td>
            <td className="px-6 py-4 border-b border-gray-300">11.0</td>
          </tr>
          <tr className="hover:bg-gray-100">
            <td className="px-6 py-4 border-b border-gray-300">Sun</td>
            <td className="px-6 py-4 border-b border-gray-300">274</td>
          </tr>
        </tbody>
      </table>
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Gravitational Field Strength</h2>

      <p className="mb-4">The gravitational field strength is not the same everywhere. Gravitational force decreases as we move away from the surface of Earth, and therefore, gravitational field strength also decreases. Additionally, different planets have different gravitational field strengths as shown in Table 3.2.</p>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">Example: Gravitational Field Strength on an Unknown Planet</h3>
      <p className="mb-4">A box weighs 400 N on Earth while 150 N on an unknown planet. Find the gravitational field strength on that planet.</p>

      <h4 className="font-bold text-gray-700">Given:</h4>
      <ul className="list-disc list-inside mb-4">
        <li>Weight on Earth: W = 400 N</li>
        <li>Weight on unknown planet: W = 150 N</li>
        <li>Gravitational field strength on Earth: g = 9.8 N/kg</li>
      </ul>

      <h4 className="font-bold text-gray-700 mb-2">Required:</h4>
      <p className="mb-4">Gravitational field strength on the unknown planet: g?</p>

      <h4 className="font-bold text-gray-700 mb-2">Solution:</h4>
      <p className="mb-4">Since weight of a body is the product of its mass and acceleration due to gravity, given by:</p>
      <pre className="bg-gray-200 p-4 rounded mb-4">
        W = mg
        or
        W = g * m
      </pre>
      <p className="mb-4">Since the mass of a body remains constant, therefore:</p>
      <pre className="bg-gray-200 p-4 rounded mb-4">
        W₁ / g₁ = W₂ / g₂
      </pre>
      <p className="mb-4">Putting values:</p>
      <pre className="bg-gray-200 p-4 rounded mb-4">
        150 N / g = 400 N / 9.8 N/kg
      </pre>
      <p className="mb-4">Solving for g:</p>
      <pre className="bg-gray-200 p-4 rounded mb-4">
        g = (150 N * 9.8 N/kg) / 400 N
        = 3.675 N/kg
      </pre>
      <p className="mb-4">The value 3.675 agrees with the numerical value of gravitational field strength on the surface of Mars. So, the unknown planet is Mars (the red planet), the nearest planet to Earth.</p>

    </div >
  )
}

export default page