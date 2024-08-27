// pages/organic-chemistry.tsx

import React from 'react';

const OrganicChemistry: React.FC = () => {
  return (
    <div className="p-6">
      {/* Previous sections here */}

      <h2 className="text-xl font-semibold mb-2">13.6 CLASSIFICATION OF ORGANIC COMPOUNDS</h2>
      <p className="mb-4">
        There are millions of organic compounds. It is not possible to study each compound separately. To facilitate learning, they are divided into different groups and sub-groups. It is useful to choose those compounds with a similar structure. So here you will learn the classification of organic compounds based on the carbon skeleton. They are broadly divided into two main groups:
      </p>
      <p className="font-semibold mb-2">DO YOU KNOW</p>
      <p className="mb-4">
        Alkyl radical contains one less hydrogen than its parent alkane.
      </p>

      <h3 className="text-lg font-semibold mb-2">(1) Open Chain Compounds</h3>
      <p className="mb-4">
        Open chain compounds contain an open chain of carbon atoms. In these compounds, carbon atoms are linked in a linear pattern. For instance:
      </p>
      <p className="mb-4">
        <span className="font-bold">Propane</span><br />
        CH₃-CH₂-CH₃
      </p>
      <p className="mb-4">
        <span className="font-bold">Butane</span><br />
        CH₃-CH₂-CH₂-CH₃
      </p>
      <p className="mb-4">
        Is the compound having the following structure an open chain compound?<br />
        CH₂-CH₂-CH₂-CH₂
      </p>
      <p className="mb-4">
        Open chain compounds may be either straight-chain or branched-chain. Those compounds which contain any number of carbon atoms joined one after the other in a chain or row are called straight chain compounds. In these compounds, carbon atoms are connected in one continuous chain.
      </p>
      <p className="mb-4">
        <span className="font-bold">Examples:</span><br />
        <span className="font-bold">Propane</span><br />
        CH₃-CH₂-CH₃
      </p>
      <p className="mb-4">
        <span className="font-bold">Butane</span><br />
        CH₃-CH₂-CH₂-CH₃
      </p>
      <p className="mb-4">
        <span className="font-bold">Pentane</span><br />
        CH₃-CH₂-CH₂-CH₂-CH₃
      </p>
      <p className="mb-4">
        Those compounds which contain carbon atoms on the sides of the chain are called branched chain compounds. In these compounds, branches of carbon atoms are attached to a chain of carbon atoms. Which of the following is a branched chain compound?<br />
        CH₃-CH(CH₃)-CH₂-CH₃<br />
        CH₃-CH₂-CH₂-CH₃<br />
        CH₃-CH-CH₃
      </p>
      <p className="mb-4">
        Open chain compounds are also called alicyclic compounds.
      </p>

      <h3 className="text-lg font-semibold mb-2">(2) Closed Chain or Cyclic Compounds</h3>
      <p className="mb-4">
        Organic compounds which contain rings of atoms are called closed chain or cyclic compounds. For example:
      </p>
      <p className="mb-4">
        <span className="font-bold">Cyclopropane</span><br />
        CH₃-CH₂-CH₂
      </p>
      <p className="mb-4">
        <span className="font-bold">Cyclobutane</span><br />
        CH₂-CH₂-CH₂-CH₂
      </p>
      <p className="mb-4">
        <span className="font-bold">Cyclohexane</span><br />
        CH₃-CH₂-CH₂-CH₂-CH₂-CH₂
      </p>
      <p className="mb-4">
        <span className="font-bold">Benzene</span><br />
        C₆H₆
      </p>
      <p className="mb-4">
        Cyclic compounds which contain rings of carbon atoms are called homocyclic or carbocyclic compounds. Which of the above cyclic compounds are carbocyclic? Cyclic compounds that contain one or more atoms other than carbon atoms in the ring are called heterocyclic compounds:
        <ul className="list-disc list-inside mb-4">
          <li>Pyridine</li>
          <li>Furan</li>
          <li>Thiophene</li>
        </ul>
      </p>

      <h2 className="text-xl font-semibold mb-2">CONCEPT ASSESSMENT EXERCISE 13.4</h2>
      <p className="mb-4">
        A to E are the structural formulas of some organic compounds.
      </p>
      <div className="mb-4">
        <img src="/images/structural-formulas.png" alt="Structural Formulas" className="w-full" />
      </div>
      <p className="mb-4">
        Give the letters which represent:
        <ol className="list-decimal list-inside mb-4">
          <li>A branched chain compound.</li>
          <li>A cyclic compound.</li>
          <li>Two straight chain compounds.</li>
        </ol>
      </p>
    </div>
  );
};

export default OrganicChemistry;
