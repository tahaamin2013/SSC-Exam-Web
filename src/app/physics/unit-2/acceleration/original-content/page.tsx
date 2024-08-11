// pages/acceleration.js

import Head from 'next/head';

const AccelerationPage = () => {
  return (
    <>
      <Head>
        <title>Acceleration</title>
        <meta name="description" content="Learn about acceleration, its types, and examples." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">2.4 ACCELERATION</h1>

        <section className="mb-6">
          <p className="text-lg mb-4">
            Can we measure the change in velocity? Velocity is changed by changing speed, direction, or both. We would need one additional measurement to measure the change in velocity, which is how much time elapsed while the change was taking place.
            <strong>The measure of change in velocity ∆v with the passage of time ∆t is called acceleration a.</strong> Mathematically:
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg">
            {`acceleration = change in velocity ∆v / elapsed time ∆t`}
            <br />
            {`a = ∆v / ∆t`}
          </pre>
          <p className="text-lg mt-4">
            Acceleration is a vector quantity with the same direction as the change in velocity. The SI Unit of acceleration is meter per second squared or meter per square second (m/s²). Acceleration is a measure of how rapidly the velocity is changing.
          </p>
          <p className="text-lg mt-4">
            A positive acceleration means an increase in velocity with time, whereas negative acceleration (deceleration) means a decrease in velocity with time.
          </p>
          <p className="text-lg mt-4">
            Since velocity is a vector quantity, therefore only the change in direction of velocity can also produce acceleration. The drone in figure 2.10 is accelerating because it is changing directions.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Uniform and Non-uniform Acceleration:</h2>
          <p className="text-lg mb-4">
            When an object is changing its velocity at the same rate each second, we call it uniform acceleration. A body has uniform acceleration if it has equal changes in velocity in equal intervals of time.
          </p>
          <p className="text-lg mb-4">
            Non-uniform acceleration occurs when an object&apos;s velocity changes, but this change is not steady over time. In simple terms, the rate at which the object&apos;s velocity changes is not the same throughout its movement. Acceleration, which is the measure of velocity change, is therefore not constant in non-uniform acceleration. Understanding non-uniform acceleration is important in physics to explain the movement of objects affected by changing forces. This is a common and practical situation since many real-life scenarios involve forces that vary over time, resulting in non-uniform acceleration.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">CAN YOU TELL?</h2>
          <p className="text-lg mb-4">
            The initial velocity v₁ and final velocity v₂ of a tennis ball at two different points in time is shown below. The direction of the ball is indicated by the arrow. For each case, indicate if there is an acceleration and show the direction of acceleration.
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg">
            {`v₁ = 2 m/s`}
            <br />
            {`v₂ = 2 m/s`}
            <br />
            {`v₁ = 2 m/s`}
            <br />
            {`v₂ = 4 m/s`}
            <br />
            {`v₁ = 3 m/s`}
            <br />
            {`v₂ = 1 m/s`}
            <br />
            {`v₁ = 2 m/s`}
            <br />
            {`v₂ = 1 m/s`}
            <br />
            {`v₁ = 3 m/s`}
            <br />
            {`v₂ = 4 m/s`}
          </pre>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">EXAMPLE 2.4: ACCELERATION OF CHEETAH</h2>
          <p className="text-lg mb-4">
            Cheetah (fastest land animal) can accelerate its speed from zero to 26.8 m/s in just three seconds. Suppose the Cheetah has started running towards East, find its acceleration.
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg">
            {`GIVEN`}
            <br />
            {`Initial velocity v₁ = 0 m/s (East)`}
            <br />
            {`Final velocity v₂ = 26.8 m/s (East)`}
            <br />
            {`Time taken ∆t = 3 s`}
            <br />
            {`REQUIRED`}
            <br />
            {`Acceleration a = ?`}
            <br />
            {`SOLUTION`}
            <br />
            {`a = (v₂ - v₁) / ∆t`}
            <br />
            {`a = (26.8 m/s - 0 m/s) / 3 s`}
            <br />
            {`a = 8.93 m/s²`}
          </pre>
          <p className="text-lg mt-4">
            That is a big value, as typical cars have accelerations of only 3 to 4 m/s².
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">CAN YOU TELL?</h2>
          <p className="text-lg mb-4">
            The car is depicted after equal time intervals. Can you determine in which picture A, B, C, and D, the car is:
            <ul className="list-disc pl-6">
              <li>At rest</li>
              <li>Speeding up</li>
              <li>Moving at a constant speed</li>
              <li>Slowing down</li>
            </ul>
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">POINT TO PONDER</h2>
          <p className="text-lg mb-4">
            The first scientist to measure speed as distance over time was Galileo. He dropped various objects of different masses from the Leaning Tower of Pisa. He found that all of them reached the ground at the same time. The acceleration of freely falling bodies is called gravitational acceleration or acceleration due to gravity denoted by &apos;g&apos;.
          </p>
        </section>
      </div>
    </>
  );
};

export default AccelerationPage;