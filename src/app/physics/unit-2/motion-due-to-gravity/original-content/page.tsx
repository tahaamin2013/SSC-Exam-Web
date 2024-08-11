// pages/motion-due-to-gravity.js

import Head from 'next/head';

const GravityPage = () => {
  return (
    <>
      <Head>
        <title>Motion Due to Gravity</title>
        <meta name="description" content="Learn about motion due to gravity, acceleration, and related examples." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">2.5 MOTION DUE TO GRAVITY</h1>

        <section className="mb-6">
          <p className="text-lg mb-4">
            If you drop a ball and a large stone from the roof of your school building, which of them will reach the bottom first? All freely falling objects have the same acceleration called the acceleration due to gravity (g) and this is independent of their masses.
          </p>
          <p className="text-lg mb-4">
            The acceleration due to gravity is directed downward, toward the center of the Earth. Near the Earth&apos;s surface, g is approximately <strong>g = 9.80 m/s²</strong> or <strong>32.2 ft/s²</strong>.
          </p>
          <p className="text-lg mb-4">
            For a large object, the presence of air resistance is neglected. However, if we drop a small piece of paper and a coin, the coin will fall faster than a sheet of paper due to air resistance, as shown in Figure 2.11 (a). However, when air is removed, as in Figure 2.11 (b), the coin and the paper will experience the same acceleration due to gravity, and both will fall at the same rate.
          </p>
          <p className="text-lg mb-4">
            When an object moves with gravity, acceleration due to gravity is taken as positive (+g), and when an object moves against gravity (like an object thrown up), acceleration due to gravity is taken as negative (-g).
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">EXAMPLE 2.5: ACCELERATION DUE TO GRAVITY</h2>
          <p className="text-lg mb-4">
            A block of mass 2 kg is dropped from the top of a building. How much time will the block take to reach the ground if it strikes the ground with a speed of 78.5 m/s? (Ignore air resistance).
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg">
            {`GIVEN`}
            <br />
            {`Mass of the block 'm' = 2 kg`}
            <br />
            {`Initial speed 'v₁' = 0 m/s`}
            <br />
            {`Final speed 'v₂' = 78.5 m/s`}
            <br />
            {`Acceleration due to gravity 'g' = 9.8 m/s²`}
            <br />
            {`REQUIRED`}
            <br />
            {`Time to reach the ground '∆t' = ?`}
            <br />
            {`SOLUTION`}
            <br />
            {`From the definition of acceleration, acceleration due to gravity can also be written as`}
            <br />
            {`a = (v₂ - v₁) / ∆t`}
            <br />
            {`Rearranging for time: ∆t = (v₂ - v₁) / g`}
            <br />
            {`Putting values: ∆t = (78.5 m/s - 0 m/s) / 9.8 m/s²`}
            <br />
            {`Therefore, ∆t = 8 s`}
          </pre>
          <p className="text-lg mt-4">
            So, the block will reach the ground in 8 seconds.
          </p>
        </section>
      </div>
    </>
  );
};

export default GravityPage;
