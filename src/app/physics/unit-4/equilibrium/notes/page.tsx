import Head from 'next/head';

const EquilibriumPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 py-12">
      <Head>
        <title>Equilibrium in Physics</title>
        <meta name="description" content="Learn about Equilibrium, Conditions of Equilibrium, and Types of Equilibrium in Physics" />
      </Head>

      <main className="bg-white shadow-xl rounded-lg p-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-10">Equilibrium in Physics</h1>
        
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">Forces and Moments</h2>
          <p className="text-lg text-gray-700">
            Forces produce changes in translational motion, while the moment of force produces changes in rotational motion.
            Equilibrium is the state where the net force and net torque on an object are zero.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">Conditions of Equilibrium</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-medium text-blue-600 mb-3">First Condition of Equilibrium</h3>
            <ul className="list-disc pl-8 text-lg text-gray-700 space-y-2">
              <li>The vector sum of all forces acting on the body is zero.</li>
              <li>The force polygon must close.</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-medium text-blue-600 mb-3">Second Condition of Equilibrium</h3>
            <ul className="list-disc pl-8 text-lg text-gray-700 space-y-2">
              <li>The vector sum of all torques acting on the body is zero.</li>
              <li>Also called the Principle of Moments.</li>
              <li>The sum of clockwise and anti-clockwise moments about a pivot must be zero.</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">Principle of Moments</h2>
          <p className="text-lg text-gray-700">
            The sum of the clockwise moments about a pivot must be equal to the sum of the anti-clockwise moments.
            The perpendicular distance from the axis of rotation plays an important role.
            Anti-clockwise torques are positive, while clockwise torques are negative.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">Types of Equilibrium</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-medium text-blue-600 mb-3">Static Equilibrium</h3>
            <p className="text-lg text-gray-700">
              A body is at rest under the action of several forces and torques.
              <br />
              <span className="font-semibold text-gray-800">Example:</span> A book resting on a table.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-medium text-blue-600 mb-3">Dynamic Equilibrium</h3>
            <p className="text-lg text-gray-700">
              A body is moving at uniform velocity under the action of several forces.
              Dynamic equilibrium is further divided into:
            </p>
            <ul className="list-disc pl-8 text-lg text-gray-700 space-y-2">
              <li><span className="font-semibold text-gray-800">Dynamic Translational Equilibrium:</span> Body moving with uniform linear velocity.</li>
              <li><span className="font-semibold text-gray-800">Dynamic Rotational Equilibrium:</span> Body moving with uniform rotation.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EquilibriumPage;
