// pages/essential-questions.tsx

import { NextPage } from 'next';
import Head from 'next/head';

const EssentialQuestions: NextPage = () => {
  return (
    <>
      <Head>
        <title>Essential Questions in Chemistry</title>
        <meta name="description" content="Essential Questions for Different Branches of Chemistry" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-8 bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">UNIT 01</h1>
          <h2 className="text-2xl font-semibold mb-4">1.3 Examples of Essential Questions That Are Important for the Branches of Chemistry</h2>

          <p className="mb-4">
            Some essential questions for various branches of chemistry that can help enhance understanding are as follows:
          </p>

          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-semibold mb-4">Physical Chemistry</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>What is the structure of an atom, and how does it influence chemical behavior?</li>
                <li>How do different types of chemical bonds (ionic, covalent, metallic) form and function?</li>
              </ol>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Organic Chemistry</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Why is carbon considered the backbone of organic compounds?</li>
                <li>What are the major functional groups in organic molecules, and how do they affect chemical properties?</li>
              </ol>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Inorganic Chemistry</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>What distinguishes inorganic compounds from organic compounds?</li>
                <li>How does the Periodic Table help to organize elements?</li>
              </ol>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Analytical Chemistry</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>How are analytical methods used to identify and quantify chemical substances?</li>
              </ol>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Biochemistry</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>How do biomolecules such as carbohydrates, proteins, nucleic acids, and lipids contribute to the structure and function of living organisms?</li>
              </ol>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Environmental Chemistry</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>How do human activities contribute to air pollution, and what are the consequences for the environment?</li>
                <li>What role do greenhouse gases play in climate change, and how can we mitigate their effects?</li>
              </ol>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Medicinal Chemistry</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>How are drugs designed and developed for specific therapeutic purposes?</li>
              </ol>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Polymer Chemistry</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>What are polymers, and how do their structures affect their properties?</li>
              </ol>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Geochemistry</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>How do geological processes influence the distribution of elements in the Earth&apos;crust?</li>
              </ol>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Nuclear Chemistry</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>How do nuclear reactions differ from chemical reactions, and what are their applications?</li>
                <li>What is the role of radioisotopes in medicine and industry?</li>
              </ol>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Astronomy</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>What types of reactions occur in astronomical environments?</li>
              </ol>
            </section>
          </div>

          <p className="mt-8">
            These questions can serve as a foundation for exploring the key concepts within each branch of chemistry.
          </p>
        </div>
      </main>
    </>
  );
};

export default EssentialQuestions;
