// pages/organic-chemistry.tsx

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
    </div>
  );
};

export default OrganicChemistry;
