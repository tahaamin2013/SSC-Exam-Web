import { NextPage } from 'next';
import Head from 'next/head';

const TransitionElements: NextPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Head>
        <title>Transition Elements</title>
        <meta name="description" content="Learn about the characteristic properties of transition elements, including their density, melting points, oxidation states, colors, and industrial uses." />
      </Head>

      <main className="p-6 max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-4">4.5 Transition Elements</h1>
          <p>
            Elements located in the d-block (Group 3 to 12) of the periodic table are known as transition elements. These elements exhibit several characteristic properties that distinguish them from other elements.
          </p>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. High Density</h2>
          <p>
            Transition elements generally possess high densities due to their higher atomic masses and closely packed structures. For example:
          </p>
          <ul className="list-disc ml-6">
            <li>Iron (Fe) has a density of 7.87 g/cm³.</li>
            <li>Tungsten (W) has a density of 19.3 g/cm³.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. High Melting Points</h2>
          <p>
            Transition elements have high melting points due to their strong metallic bonding, which arises from the presence of partially filled d-sub shells. For example:
          </p>
          <ul className="list-disc ml-6">
            <li>Tungsten (W) has a melting point of 3422°C.</li>
            <li>Platinum (Pt) has a melting point of 1768°C.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Variable Oxidation States</h2>
          <p>
            Transition elements exhibit multiple oxidation states because their d-sub shell can also participate in bonding along with the s-sub shell. For example:
          </p>
          <ul className="list-disc ml-6">
            <li>Iron (Fe) has oxidation states +2 and +3.</li>
            <li>Copper (Cu) has oxidation states +1 and +2.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Coloured Compounds</h2>
          <p>
            Transition elements often form vibrant colored compounds. For example:
          </p>
          <ul className="list-disc ml-6">
            <li>Copper compounds appear blue or green.</li>
            <li>Chromium compounds are often red or green.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Catalysts for Industrial Processes</h2>
          <p>
            Transition metals and their compounds are widely used as catalysts in various industrial processes. For example:
          </p>
          <ul className="list-disc ml-6">
            <li>Iron is used in the Haber Process for the synthesis of ammonia.</li>
            <li>Platinum and palladium are used as catalysts in catalytic converters to reduce harmful emissions in automobiles and industrial units.</li>
            <li>Nickel is used as a catalyst in the manufacture of margarine.</li>
            <li>Platinum is used as a catalyst in the contact process for the manufacture of sulfuric acid.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default TransitionElements;
