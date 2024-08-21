import { NextPage } from 'next';
import Head from 'next/head';

const NobleGases: NextPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Head>
        <title>Noble Gases</title>
        <meta name="description" content="Learn about Noble Gases including their properties, electronic configurations, and applications." />
      </Head>

      <main className="p-6 max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-4">4.8 Noble Gases</h1>
          <p>
            Noble gases, also known as inert gases, are a group of chemical elements found in Group 18 (or Group VIII-A) of the periodic table. They have the general electron configuration ns²np⁶, except for helium (He), which has 1s². These gases are characterized by their unique properties: they are odorless, colorless, monoatomic gases with very low reactivity. Their low reactivity is due to the presence of a complete valence shell, making them stable and unlikely to form chemical bonds with other elements under normal conditions. The noble gases include Helium (He), Neon (Ne), Argon (Ar), Krypton (Kr), Xenon (Xe), Radon (Rn), and Oganesson (Og).
          </p>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Applications of Noble Gases</h2>
          <p>
            Due to their non-reactive nature, noble gases are used in various applications:
          </p>
          <ul className="list-disc ml-6">
            <li>Lighting (e.g., neon signs)</li>
            <li>Refrigeration systems</li>
            <li>Welding</li>
            <li>Filling gas exhaust lines</li>
            <li>Shielding gas in certain industrial processes</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Table 4.1: Electronic Configuration of Noble Gases</h2>
          <table className="min-w-full bg-gray-100 border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Element</th>
                <th className="py-2 px-4 border-b">Atomic Number</th>
                <th className="py-2 px-4 border-b">Electronic Configuration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">Helium</td>
                <td className="py-2 px-4 border-b">2</td>
                <td className="py-2 px-4 border-b">1s²</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Neon</td>
                <td className="py-2 px-4 border-b">10</td>
                <td className="py-2 px-4 border-b">1s² 2s² 2p⁶</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Argon</td>
                <td className="py-2 px-4 border-b">18</td>
                <td className="py-2 px-4 border-b">1s² 2s² 2p⁶ 3s² 3p⁶</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Krypton</td>
                <td className="py-2 px-4 border-b">36</td>
                <td className="py-2 px-4 border-b">1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Xenon</td>
                <td className="py-2 px-4 border-b">54</td>
                <td className="py-2 px-4 border-b">1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Radon</td>
                <td className="py-2 px-4 border-b">86</td>
                <td className="py-2 px-4 border-b">1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Oganesson</td>
                <td className="py-2 px-4 border-b">118</td>
                <td className="py-2 px-4 border-b">1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶ 6s² 4f¹⁴ 5d¹⁰ 6p⁶ 7s² 5f¹⁴ 6d¹⁰ 7p⁶</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default NobleGases;