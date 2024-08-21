import { NextPage } from 'next';
import Head from 'next/head';

const PeriodicityOfProperties: NextPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Head>
        <title>Periodicity of Properties</title>
        <meta name="description" content="Learn about the periodicity of properties including shielding effect, atomic size, ionization energy, electron affinity, and electronegativity." />
      </Head>

      <main className="p-6 max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-4">4.3 Periodicity of Properties</h1>
          <p>
            There is a periodic fluctuation in the electronic configuration of the elements as the atomic number increases. Therefore, the physical and chemical properties of the elements vary in a periodic manner. Elements with a similar valence shell electronic configuration are placed in the same group, one below the other. Chemical properties depend on the electronic configuration of the valence shell. Because all the elements in a given group have similar valence shell electronic configurations, they have similar chemical properties. Physical properties depend on the size of atoms. Because the sizes of atoms change gradually from top to bottom in a group, the elements show a gradation of physical properties within the same group. In the period of the periodic table, the number of electrons in the valence shell increases gradually from left to right. Their chemical and physical properties also differ in the same way. In this section, you will learn about the variation of physical properties of certain elements within a group and across a period.
          </p>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4.3.1 Shielding Effect</h2>
          <figure className="mb-4">
            <img src="/path-to-your-figure-4.3.png" alt="Electronic configuration of Li, Be and Mg" className="w-full max-w-lg mx-auto" />
            <figcaption className="text-center text-sm text-gray-500">Figure 4.3: Electronic configuration of Li, Be and Mg</figcaption>
          </figure>
          <p>
            Electrons present in the inner shells cut off attractive force between the nucleus and the valence electrons. The reduction in force of attraction between the nucleus and the valence electrons by the electrons present in the inner sub-shells is called shielding effect. As you move from left to right in a period, the number of electrons in the inner shells remains constant, therefore, shielding effect remains constant. As you move from top to bottom in a group, the number of electronic shells increases. So the number of electrons in the inner shell also increases. As a result, shielding effect increases.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mt-4">
            <h3 className="text-xl font-semibold mb-2">Example 4.4: Identifying the Element with Greater Shielding Effect</h3>
            <p>Choose the elements whose atoms you expect to have greater shielding effect:</p>
            <ul className="list-disc ml-6">
              <li>(a) Be or Mg</li>
              <li>(b) C or Si</li>
            </ul>
            <p className="mt-4"><strong>Solution:</strong></p>
            <ul className="list-disc ml-6">
              <li>(a) Mg atoms will have greater shielding effect.</li>
              <li>(b) Si atoms will have greater shielding effect.</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg mt-4">
            <h3 className="text-xl font-semibold mb-2">Concept Assessment Exercise 4.5</h3>
            <p>Choose the element whose atoms you expect to have smaller shielding effect:</p>
            <ul className="list-disc ml-6">
              <li>(a) Cl</li>
              <li>(b) Li or Na</li>
              <li>(c) B or Al</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4.3.2 Atomic Size</h2>
          <p>
            The size of an atom depends on its electronic configuration. Atomic size is the average distance between the atomic nucleus and the electronic outer shell. Figure 4.4 shows the atomic radii of the main group elements and the variation of atomic radii within a period and within a group. You can see two general trends in atomic radii:
          </p>
          <ol className="list-decimal ml-6">
            <li>
              The atomic radius decreases in each period as you move across the period. This is because, as you move from one element in the sequence to the next, another electron is added to the same valence shell. At the same time, the positive charge of the core also increases by one. The attraction of the nucleus to the electron in the valence shell increases. Therefore, the size of the shell and the radius of the atom decreases.
            </li>
            <li>
              Atomic radius increases in each main group as you move down the element group. This is because the size of an atom is determined by the size of its valence shell. As you move down the group to the next lower element, the atom has an additional shell of electrons. This increases the radius of the atom.
            </li>
          </ol>
          <div className="bg-gray-100 p-4 rounded-lg mt-4">
            <h3 className="text-xl font-semibold mb-2">Example 4.5: Identifying the Element with Greater Atomic Radius</h3>
            <p>Choose the element whose atom you expect to have larger atomic radius in each of the following pairs:</p>
            <ul className="list-disc ml-6">
              <li>(a) Mg, Al</li>
              <li>(b) C, Si</li>
            </ul>
            <p className="mt-4"><strong>Solution:</strong></p>
            <ul className="list-disc ml-6">
              <li>(a) The larger atom is Mg.</li>
              <li>(b) The larger atom is Si.</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg mt-4">
            <h3 className="text-xl font-semibold mb-2">Concept Assessment Exercise 4.6</h3>
            <p>Using the periodic table but without looking at Figure 4.4, choose the element whose atom you expect to have smaller atomic radius in each of the following pairs:</p>
            <ul className="list-disc ml-6">
              <li>(a) O or S</li>
              <li>(b) O or F</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4.3.3 Ionization Energy</h2>
          <p>
            Ionization energy is the minimum amount of energy required to remove the outermost electron from an isolated gaseous atom. Ionization energy is a measure of the extent to which the nucleus attracts the outermost electron. A high value of ionization energy means a stronger attraction between the nucleus and the outermost electron, whereas a low ionization energy indicates a weaker force of attraction.
          </p>
          <p>
            The value of the ionization energy decreases from top to bottom in a group due to increased shielding effects. As you move from left to right in a period, the ionization energy increases because the nuclear charge increases, leading to a stronger attraction between the nucleus and the valence electron.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mt-4">
            <h3 className="text-xl font-semibold mb-2">Example 4.6: Identifying the Element with Smaller Ionization Energy</h3>
            <p>Choose the element whose atom you expect to have smaller ionization energy in each of the following pairs:</p>
            <ul className="list-disc ml-6">
              <li>(a) B, C</li>
              <li>(b) N, P</li>
            </ul>
            <p className="mt-4"><strong>Solution:</strong></p>
            <ul className="list-disc ml-6">
              <li>(a) The atom with the smaller ionization energy is B.</li>
              <li>(b) The atom with the smaller ionization energy is P.</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg mt-4">
            <h3 className="text-xl font-semibold mb-2">Concept Assessment Exercise 4.7</h3>
            <p>Which atom has the smaller ionization energy?</p>
            <ul className="list-disc ml-6">
              <li>(a) Be or Mg</li>
              <li>(b) B or N</li>
              <li>(c) C or S</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4.3.4 Electron Affinity</h2>
          <p>
            Electron affinity is the energy change when an electron is added to an isolated gaseous atom to form a negative ion. It indicates how easily an atom can accept an electron. The magnitude of the electron affinity increases from left to right in a period due to an increase in nuclear charge, while it decreases down a group due to increased shielding effect.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mt-4">
            <h3 className="text-xl font-semibold mb-2">Example 4.7: Identifying the Element with Greater Electron Affinity</h3>
            <p>Choose the element with the greater electron affinity in each of the following pairs:</p>
            <ul className="list-disc ml-6">
              <li>(a) Cl, Br</li>
              <li>(b) F, Cl</li>
            </ul>
            <p className="mt-4"><strong>Solution:</strong></p>
            <ul className="list-disc ml-6">
              <li>(a) The element with the greater electron affinity is Cl.</li>
              <li>(b) The element with the greater electron affinity is F.</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg mt-4">
            <h3 className="text-xl font-semibold mb-2">Concept Assessment Exercise 4.8</h3>
            <p>Which atom has the greater electron affinity?</p>
            <ul className="list-disc ml-6">
              <li>(a) O or S</li>
              <li>(b) F or Cl</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4.3.5 Electronegativity</h2>
          <p>
            Electronegativity is a measure of the tendency of an atom to attract a bonding pair of electrons. It increases from left to right across a period and decreases down a group due to increased atomic size and decreased force of attraction.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mt-4">
            <h3 className="text-xl font-semibold mb-2">Example 4.8: Identifying the Element with Greater Electronegativity</h3>
            <p>Choose the element with the greater electronegativity in each of the following pairs:</p>
            <ul className="list-disc ml-6">
              <li>(a) F, Cl</li>
              <li>(b) O, N</li>
            </ul>
            <p className="mt-4"><strong>Solution:</strong></p>
            <ul className="list-disc ml-6">
              <li>(a) The element with the greater electronegativity is F.</li>
              <li>(b) The element with the greater electronegativity is O.</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg mt-4">
            <h3 className="text-xl font-semibold mb-2">Concept Assessment Exercise 4.9</h3>
            <p>Which atom has the greater electronegativity?</p>
            <ul className="list-disc ml-6">
              <li>(a) O or S</li>
              <li>(b) F or Cl</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PeriodicityOfProperties;
