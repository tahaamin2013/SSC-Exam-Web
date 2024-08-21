import { NextPage } from 'next';
import Head from 'next/head';

const Halogens: NextPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Head>
        <title>Halogens</title>
        <meta name="description" content="Learn about the Halogens including their properties, appearance, density, reactivity, and more." />
      </Head>

      <main className="p-6 max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-4">4.7 Halogens</h1>
          <p>
            The elements in Group 17 (or Group VII-A) are called halogens. The name &quot;halogen&quot; is derived from the Greek words &quot;halous&quot; meaning salt and &quot;gen&quot; meaning former. Halogens include fluorine, chlorine, bromine, iodine, astatine, and tennessine (astatine and tennessine are radioactive elements with less known properties). All halogens are reactive non-metals and exist as diatomic molecules.
          </p>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4.7.1 Appearance of Halogens</h2>
          <p>
            Halogens exist as diatomic, colored molecular substances. The color of halogens darkens as you go down the group:
          </p>
          <ul className="list-disc ml-6">
            <li>Fluorine (F₂): Pale yellow gas</li>
            <li>Chlorine (Cl₂): Yellow-green gas</li>
            <li>Bromine (Br₂): Red-brown liquid</li>
            <li>Iodine (I₂): Grey-black solid, turns into dark purple vapors on warming</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Electronic Configuration</h2>
          <p>
            Halogens possess 7 electrons in their valence shell with the general electronic configuration ns²np⁵. They need only one more electron to complete their valence shell, hence they tend to gain one electron to form univalent negative ions: F⁻, Cl⁻, Br⁻, I⁻.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Density of Halogens</h2>
          <p>
            As you move down the group, the number of electrons and protons increases, resulting in a larger atomic size and volume. However, the mass increase is greater than the volume increase, so density generally increases:
          </p>
          <table className="min-w-full bg-gray-100 border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Halogen</th>
                <th className="py-2 px-4 border-b">Density (g/cm³ at 25 °C)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">Fluorine</td>
                <td className="py-2 px-4 border-b">0.0017</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Chlorine</td>
                <td className="py-2 px-4 border-b">0.0032</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Bromine</td>
                <td className="py-2 px-4 border-b">3.1028</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Iodine</td>
                <td className="py-2 px-4 border-b">4.933</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Reactivity of Halogens</h2>
          <p>
            The reactivity of halogens is related to their ability to gain an electron and form halide ions (F⁻, Cl⁻, Br⁻, I⁻). Fluorine is the most reactive halogen due to its high tendency to gain electrons. Reactivity decreases down the group as electronegativity decreases:
          </p>
          <p>Order of decreasing reactivity: F₂ ≥ Cl₂ ≥ Br₂ ≥ I₂</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Displacement Reactions of Halogens</h2>
          <p>
            The oxidizing power of F₂ is the highest, and I₂ has the lowest. This means that a free halogen can oxidize or displace the ion of the halogen next to it in the group from their aqueous solutions. For example:
          </p>
          <ul className="list-disc ml-6">
            <li>F₂ can oxidize and displace all other halide ions.</li>
            <li>Cl₂ can oxidize Br⁻ and I⁻ ions.</li>
            <li>I₂ cannot oxidize any halide ion.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Hydrogen Halides and Their Thermal Stabilities</h2>
          <p>
            Halogens react with hydrogen to form hydrogen halides:
            <code className="bg-gray-100 p-1">H₂ + X₂ → 2HX</code>
            where X = F₂, Cl₂, Br₂, I₂. The strength of the hydrogen-halogen bond decreases from HF to HI due to the decreasing electronegativity difference between hydrogen and halogen:
          </p>
          <ul className="list-disc ml-6">
            <li>HF ≥ HCl ≥ HBr ≥ HI</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Concept Assessment Exercise 4.9</h2>
          <p>Which of the following displacement reactions will occur?</p>
          <ol className="list-decimal ml-6">
            <li>Cl₂ + 2NaF → 2NaCl + F₂</li>
            <li>Br₂ + 2KI → 2KBr + I₂</li>
            <li>I₂ + 2KBr → 2KI + Br₂</li>
            <li>Cl₂ + 2KBr → 2KCl + Br₂</li>
            <li>Cl₂ + 2NaI → 2NaCl + I₂</li>
          </ol>
        </section>
      </main>
    </div>
  );
};

export default Halogens;
