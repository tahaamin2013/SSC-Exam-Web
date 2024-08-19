// pages/branches-of-chemistry.tsx

import { NextPage } from 'next';
import Head from 'next/head';

const BranchesOfChemistry: NextPage = () => {
  return (
    <>
      <Head>
        <title>Branches of Chemistry</title>
        <meta name="description" content="Branches of Chemistry - Unit 01" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-8 bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">UNIT 01</h1>
          <h2 className="text-2xl font-semibold mb-4">Branches of Chemistry</h2>

          <p className="mb-4">
            Chemistry is a diverse field of study, encompassing numerous sub-fields and interdisciplinary areas.
          </p>

          <ol className="list-decimal list-inside mb-8 space-y-4">
            <li>
              <h3 className="text-lg font-semibold mb-2">Organic Chemistry</h3>
              <p>
                Organic chemistry is a branch of chemistry that deals with substances containing carbon (except carbonates, bicarbonates, oxides, and carbides).
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold mb-2">Inorganic Chemistry</h3>
              <p>
                Inorganic chemistry is a branch of chemistry that deals with elements and their compounds except organic compounds.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold mb-2">Physical Chemistry</h3>
              <p>
                Physical chemistry is the branch of chemistry that deals with laws and theories to understand the structure and changes of matter.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold mb-2">Analytical Chemistry</h3>
              <p>
                Analytical chemistry is a branch of chemistry that deals with the methods and instruments for determining the composition and properties of matter.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold mb-2">Biochemistry</h3>
              <p>
                The branch of chemistry that deals with physical and chemical changes that occur in living organisms is called biochemistry.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold mb-2">Environmental Chemistry</h3>
              <p>
                Environmental chemistry is the branch of chemistry that deals with the study of chemical and toxic substances that pollute the environment and their adverse effects on human beings.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold mb-2">Industrial Chemistry</h3>
              <p>
                Industrial chemistry is the branch of chemistry that deals with the large-scale production of chemical substances.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold mb-2">Medicinal Chemistry</h3>
              <p>
                The branch of chemistry that deals with the study of the interaction between drugs and biological targets, as well as the development of new medicinal agents.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold mb-2">Polymer Chemistry</h3>
              <p>
                The branch of chemistry that focuses on the study of polymers, their types, properties, uses, importance, and types of polymerizations is called polymer chemistry. Examples of synthetic polymers include nylon bearings, plastic bags, polyethylene cups, polyester, Teflon-coated cookware, and epoxy glue, etc.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold mb-2">Geochemistry</h3>
              <p>
                Geochemistry is the branch of chemistry that deals with the study of chemical composition, distribution, and transformation of elements and compounds in the Earth&apos;s crust, such as rocks, minerals, soils, water, and the atmosphere.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold mb-2">Nuclear Chemistry</h3>
              <p>
                The branch of chemistry that deals with the changes that occur in atomic nuclei is called nuclear chemistry.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold mb-2">Astrochemistry</h3>
              <p>
                Astrochemistry is a branch of chemistry that deals with the study of chemical processes and reactions that occur in astronomical environments, such as stars, planets, comets, and interstellar space.
              </p>
            </li>
          </ol>
        </div>
      </main>
    </>
  );
};

export default BranchesOfChemistry;
