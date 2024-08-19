// pages/science-technology-engineering.tsx

import { NextPage } from 'next';
import Head from 'next/head';

const ScienceTechnologyEngineering: NextPage = () => {
  return (
    <>
      <Head>
        <title>Science, Technology, and Engineering</title>
        <meta name="description" content="Science, Technology, and Engineering: Definitions and Differences" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-8 bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">1.5 Science, Technology, and Engineering</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Science</h2>
            <p>
              Science is the systematic process of constructing and organizing knowledge about the universe. Thus, science seeks to understand the natural world. For example, chemists seek to understand the behavior and properties of materials, chemical reactions, and the fundamental principles that control the behavior of matter.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Technology</h2>
            <p>
              Technology is the process of applying systems that translate scientific knowledge into practical applications, resulting in the creation of tools, machines, and techniques that enhance our lives. Science and technology play a major role by providing tools, machines, techniques, and methods which can help in the discovery and development of new materials. These also help in improving the quality of products. Technology has revolutionized the field of chemistry, making research and applications more efficient. It has enabled chemists to more effectively analyze and identify substances. Their work is beneficial for chemists working in pharmaceutical and other chemical industries.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Engineering</h2>
            <p>
              Engineering is the use of science and mathematics to design and construct systems, structures, and tools for various processes. Chemical engineers develop and design manufacturing processes for the production of chemicals, fuels, food, medicines, polymers, detergents, paper, etc. They often work to maximize productivity and product quality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Definitions</h2>
            <ul className="list-disc list-inside space-y-4">
              <li>
                <strong>Science:</strong> Science is the systematic study to explore the natural world. Science intends to recognize the fundamental principles and processes of the natural world.
              </li>
              <li>
                <strong>Technology:</strong> The integration of scientific knowledge for human needs is known as technology. This integration provides a pathway to the development of systems, techniques, and tools.
              </li>
              <li>
                <strong>Engineering:</strong> Engineering is the application of scientific principles to construct and improve systems, structures, and machines.
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
};

export default ScienceTechnologyEngineering;
