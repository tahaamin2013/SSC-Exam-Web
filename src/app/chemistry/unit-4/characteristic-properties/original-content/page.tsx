import { NextPage } from 'next';
import Head from 'next/head';

const CharacteristicProperties: NextPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Head>
        <title>Characteristic Properties</title>
        <meta name="description" content="Explore the characteristic properties of elements, including metallic character, reactivity, density, and more." />
      </Head>

      <main className="p-6 max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-4">4.4 Characteristic Properties</h1>
          <p>
            Characteristic properties of an element in a given group are based on periodicity and chemical reactivity. For example, in Group 1 (alkali metals) such as lithium, sodium, and potassium, the reactivity trend increases as you move down the group. Lithium, being at the top of the group, is the least reactive metal among alkali metals. As you move down the group, the atomic size increases, and the outermost electron is further from the nucleus, making it easier to be lost. Therefore, sodium is more reactive than lithium. Similarly, sodium is less reactive than potassium. In Group 2 (alkaline earth metals), the trend is similar. Magnesium is less reactive than calcium.
          </p>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4.4.1 Metallic Character</h2>
          <p>
            Metallic nature refers to a property of elements in the periodic table that determines how easily they can lose electrons and form positive ions (cations). Elements with metallic character have a strong tendency to lose electrons and easily form cations. The metallic character of an element is affected by its position in the periodic table.
          </p>
          <p>
            Metallic character increases as you move down a group in the periodic table due to the addition of new electronic shells. The outermost electrons are farther from the nucleus and experience weaker attractive forces, making it easier for them to be lost. Conversely, metallic character decreases as you move across a period from left to right due to the increase in effective nuclear charge, which makes it more difficult for valence electrons to be lost.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mt-4">
            <h3 className="text-xl font-semibold mb-2">Example 4.6: Identifying the Element with Higher Metallic Character</h3>
            <p>Choose the element you expect to have higher metallic character in each of the following pairs:</p>
            <ul className="list-disc ml-6">
              <li>(a) Na or K</li>
              <li>(b) Na or Mg</li>
            </ul>
            <p className="mt-4"><strong>Solution:</strong></p>
            <ul className="list-disc ml-6">
              <li>(a) K</li>
              <li>(b) Mg</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg mt-4">
            <h3 className="text-xl font-semibold mb-2">Concept Assessment Exercise 4.8</h3>
            <p>Which element has lower metallic character?</p>
            <ul className="list-disc ml-6">
              <li>(a) Li or K</li>
              <li>(b) Mg or Ca</li>
              <li>(c) Compare and contrast ionization energy and electron affinity</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4.4.2 Reactivity</h2>
          <p>
            Reactivity refers to the capability of an element to react with other elements to form new compounds. The reactivity of elements generally increases as you move down a group due to the increase in atomic size. The outermost electrons are farther from the nucleus and experience weaker attractive forces, making it easier for them to participate in chemical reactions.
          </p>
          <p>
            Reactivity varies across a period. Elements on the left side of a period (Groups 1 and 2) are highly reactive due to their strong tendency to lose electrons and form positive ions. Elements on the right side of a period (Groups 16 and 17) are also highly reactive but tend to gain electrons to form negative ions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4.4.3 Density</h2>
          <p>
            Density of elements generally increases as you move down a group due to the increasing atomic mass and larger size of atoms. As the number of protons and neutrons in the nucleus increases, the atomic mass increases, resulting in higher density.
          </p>
          <p>
            Density can vary across a period. In general, density tends to increase from left to right until it reaches a maximum around the middle of the period, and then it starts to decrease.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4.4.4 Characteristic Properties of Alkali Metals</h2>
          <p>
            Some characteristic properties of alkali metals are:
          </p>
          <ul className="list-disc ml-6">
            <li>Highly reactive metals: Alkali metals are highly reactive and readily lose valence electrons to form +1 cations. Reactivity increases down the group.</li>
            <li>Softness and low density: Alkali metals are soft and have low densities, allowing them to be easily cut with a knife. This trend increases down the group.</li>
            <li>Excellent conductors: They are excellent conductors of electricity and heat.</li>
            <li>Low melting points: Alkali metals have low melting points compared to other metals.</li>
            <li>Reaction with water: Alkali metals react with water to form metal hydroxides and hydrogen gas.</li>
          </ul>
          <div className="bg-gray-100 p-4 rounded-lg mt-4">
            <h3 className="text-xl font-semibold mb-2">Example 4.8: Identifying the Softer Metal</h3>
            <p>Which is softer, Na or K?</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4.4.5 Prediction of Properties of Other Elements in Group 1</h2>
          <p>
            In Group 1, alkali metals such as lithium, sodium, and potassium are soft metals showing trends in melting points and reactions with water. The metals in Group 1 are known for their high reactivity, which increases down the group. When alkali metals react with water, they produce a metal hydroxide and hydrogen gas:
            <pre className="bg-gray-100 p-4 rounded-lg mt-4">
              <code>metal + water → metal hydroxide + hydrogen</code>
            </pre>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4.4.6 Position of Unknown Element in the Periodic Table</h2>
          <p>
            To place an unknown element accurately in the periodic table, you can use its electronic configuration to determine its position and predict its properties. Elements within the same group have similar electronic configurations and thus similar properties. By examining the electronic configuration of an unknown element and comparing it to known elements, you can estimate its position and general properties.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mt-4">
            <h3 className="text-xl font-semibold mb-2">Example 4.7: Identifying Position of an Unknown Element</h3>
            <p>Suppose you have an unknown element with atomic number 19. Determine its position in the periodic table:</p>
            <p><strong>Solution:</strong> The electronic configuration is 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹. This indicates it is an alkali metal in the 4th period.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CharacteristicProperties;
