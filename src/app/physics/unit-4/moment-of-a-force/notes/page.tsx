
import Head from 'next/head'

const TorquePage = () => {
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col items-center">
      <Head>
        <title>Torque and Rotational Concepts</title>
        <meta name="description" content="Learn about torque and rotational concepts" />
      </Head>

      <main className="max-w-4xl w-full p-8 bg-white shadow-md rounded-lg mt-10 mb-6 border border-blue-200">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-6 border-b-4 border-blue-600 pb-2">
          Moment of Force (Torque)
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          The turning effect produced in a body about a fixed point due to an applied force is called the moment of force or torque. It is a vector quantity with the SI unit Nm (Newton meter). Moment of force plays the same role in rotational motion as force in translational motion.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Mathematically, τ = F x d, where τ is the moment of force, F is the force, and d is the perpendicular distance from the axis of rotation to the line of action of the force (moment arm). Increasing the magnitude of force or moment arm increases the moment of force and vice versa.
        </p>

        <h2 className="text-2xl font-semibold text-blue-800 mt-6 mb-4 border-b-2 border-blue-300 pb-2">
          Axis of Rotation
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Rotational motion is the turning or spinning motion of an object about an axis that passes through it. The axis of rotation is a line about which rotation takes place and remains fixed during rotational motion. The axis of rotation can be a pivot, hinges, or any other support.
        </p>

        <h2 className="text-2xl font-semibold text-blue-800 mt-6 mb-4 border-b-2 border-blue-300 pb-2">
          Clockwise and Anticlockwise Moments
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          If the force is capable of rotating the body in a clockwise direction, the moment is known as a clockwise moment. If the force is capable of producing rotation in the anticlockwise direction, the moment is known as an anticlockwise moment. Conventionally, clockwise moment is taken as negative, while anticlockwise moment is taken as positive.
        </p>

        <h2 className="text-2xl font-semibold text-blue-800 mt-6 mb-4 border-b-2 border-blue-300 pb-2">
          Example 4.1
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          The teacher applied a force of 60 N to open a door. The moment arms were:
        </p>
        <ul className="list-disc ml-6 text-gray-700">
          <li><strong>d₁ = 0.40 m</strong>: The torque produced was T = 24.0 Nm (anticlockwise)</li>
          <li><strong>d₂ = 0.20 m</strong>: The torque produced was T = 12.0 Nm (anticlockwise)</li>
          <li><strong>d₃ = 0.0 m</strong>: The torque produced was T = 0 Nm (since the line of action of force passes through the axis of rotation)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-800 mt-6 mb-4 border-b-2 border-blue-300 pb-2">
          Key Concepts
        </h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Moment of force (or torque) is the vector product of force and moment arm.</li>
          <li>Moment of force plays a crucial role in rotational motion, similar to how force affects translational motion.</li>
          <li>The axis of rotation is the fixed line about which an object rotates.</li>
          <li>Clockwise and anticlockwise moments are distinguished and have different signs.</li>
        </ul>
      </main>
    </div>
  )
}

export default TorquePage
