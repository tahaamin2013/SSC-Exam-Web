import React from 'react';

const OrganicChemistry: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-2">13.4 SATURATED AND UNSATURATED HYDROCARBONS</h2>
      <p className="mb-4">
        Hydrocarbons are compounds containing carbon and hydrogen only. Hydrocarbons whose carbon-carbon bonds are all single bonds are called saturated. Saturated hydrocarbons are also called alkanes. In alkanes, each carbon atom is bonded to four other atoms. Methane is the simplest alkane. Other examples are ethane, propane, butane etc. The general formula of alkanes is CₙH₂ₙ₊₂ where n is the number of carbon atoms.
      </p>
      <p className="mb-4">
        <span className="font-bold">Methane</span><br />
        H<br />
        H-C-H<br />
        H<br />
      </p>
      <p className="mb-4">
        Hydrocarbons containing carbon-carbon multiple bonds are called unsaturated. Unsaturated hydrocarbons are further divided into:
        <ul className="list-disc list-inside mb-4">
          <li><span className="font-bold">Alkenes:</span> Unsaturated hydrocarbons containing at least one carbon-carbon double bond. General formula: CₙH₂ₙ, e.g., ethene.</li>
          <li><span className="font-bold">Alkynes:</span> Unsaturated hydrocarbons that have at least one carbon-carbon triple bond. General formula: CₙH₂ₙ₋₂, e.g., ethyne.</li>
        </ul>
      </p>
      <p className="mb-4">
        <span className="font-bold">Ethene</span><br />
        H<br />
        H-C=C-H<br />
        H<br />
      </p>
      <p className="mb-4">
        <span className="font-bold">Ethyne</span><br />
        H<br />
        H-C≡C-H<br />
        H<br />
      </p>

      <h2 className="text-xl font-semibold mb-2">CONCEPT ASSESSMENT EXERCISE 13.3</h2>
      <p className="mb-4">
        Choose saturated and unsaturated compounds from the following.
      </p>
      <ol className="list-decimal list-inside mb-4">
        <li>CH₃-CH₂-CH₃</li>
        <li>CH₃-C≡C-CH₃</li>
        <li>CH₂=CH-CH₃</li>
        <li>CH₂=CH-CH=CH₂</li>
      </ol>

      <h2 className="text-xl font-semibold mb-2">13.5 CHEMICAL DIVERSITY OF ORGANIC COMPOUNDS</h2>
      <p className="mb-4">
        Carbon has four bonding electrons in its valence shell. Carbon, therefore, forms four bonds with other atoms. The chemical diversity of organic compounds arises from carbon&apos;s ability to bond to each other to form long chains, branched chains, and rings. This self-linking ability of carbon is called catenation. There appears to be almost no limit to the number of different structures that carbon can form. No other element can compete with carbon in this regard. Silicon and a few other elements can form chains, but only short ones. Carbon chains may contain thousands of carbon atoms. Another reason for the large number of organic compounds is the phenomenon of isomerism.
      </p>
      <p className="mb-4">
        The compounds that have the same molecular formula but different arrangement of atoms in their molecules are called structural isomers. This phenomenon is called isomerism. For example, two compounds have the molecular formula C₄H₁₀ but different structures:
        <ul className="list-disc list-inside mb-4">
          <li><span className="font-bold">n-Butane:</span> CH₃-CH₂-CH₂-CH₃</li>
          <li><span className="font-bold">iso-Butane:</span> CH₃-CH(CH₃)-CH₂</li>
        </ul>
      </p>
      <p className="mb-4">
        Alkenes also show structural isomerism. For example, two alkenes have the same molecular formula C₄H₈ but different structures:
        <ul className="list-disc list-inside mb-4">
          <li><span className="font-bold">1-Butene:</span> CH₂=CH-CH₂-CH₃</li>
          <li><span className="font-bold">2-Butene:</span> CH₃-CH=CH-CH₃</li>
        </ul>
      </p>
    </div>
  );
};

export default OrganicChemistry;
