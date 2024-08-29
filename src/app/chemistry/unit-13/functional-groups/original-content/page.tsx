import React from "react";

const OrganicChemistry: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-2">13.7 FUNCTIONAL GROUPS</h2>
      <p className="mb-4">
        Most organic compounds contain elements other than carbon and hydrogen. Most of these compounds are considered hydrocarbon derivatives. That is, they are essentially hydrocarbons, but instead of one or more hydrogen atoms, they have an additional atom or groups of atoms called functional groups. In many simple molecules, the functional group is attached to an alkyl group.
      </p>
      <p className="mb-4">
        An atom or groups of atoms that give a family of organic compounds its characteristic chemical and physical properties is called a functional group.
      </p>
      <p className="mb-4">
        What is the difference in the following compounds?
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><span className="font-bold">CH₄:</span> Methane</li>
        <li><span className="font-bold">H₂C-OH:</span> Methyl alcohol</li>
        <li><span className="font-bold">HC-Cl:</span> Methyl Chloride</li>
      </ul>
      <p className="mb-4">
        Research in organic chemistry is organized around functional groups. Each functional group defines a family of organic compounds. Although there are millions of organic compounds, there are only a few functional groups. Functional groups, therefore, facilitate the study of millions of organic compounds. Each functional group determines the characteristic properties of a homologous series. The properties of organic compounds are predominantly determined by the properties of the functional group present in a compound. The concept of functional group is important in organic chemistry for three reasons:
      </p>
      <ol className="list-decimal list-inside mb-4">
        <li>Functional group serves as the basis for naming organic compounds.</li>
        <li>Functional group serves to classify organic compounds into different classes. All compounds with the same functional group belong to the same class.</li>
        <li>A functional group is a site of chemical reactivity in a molecule.</li>
      </ol>

      <h3 className="text-lg font-semibold mb-2">Common Functional Groups</h3>
      <table className="min-w-full bg-white border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="py-2 px-4 text-left">Name of Class</th>
            <th className="py-2 px-4 text-left">Functional Group</th>
            <th className="py-2 px-4 text-left">General Formula</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-2 px-4">Alkane</td>
            <td className="py-2 px-4">None</td>
            <td className="py-2 px-4">R-H</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-4">Alkyne</td>
            <td className="py-2 px-4">-C≡C-</td>
            <td className="py-2 px-4">R-C≡C-R</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-4">Alcohol</td>
            <td className="py-2 px-4">-OH</td>
            <td className="py-2 px-4">R-OH</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-4">Ether</td>
            <td className="py-2 px-4">-O-</td>
            <td className="py-2 px-4">R-O-R&apos;</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-4">Aldehyde</td>
            <td className="py-2 px-4">-CHO</td>
            <td className="py-2 px-4">R-CHO</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-4">Ketone</td>
            <td className="py-2 px-4">-CO-</td>
            <td className="py-2 px-4">R-CO-R&apos;</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-4">Carboxylic Acid</td>
            <td className="py-2 px-4">-COOH</td>
            <td className="py-2 px-4">R-COOH</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-4">Ester</td>
            <td className="py-2 px-4">-COO-</td>
            <td className="py-2 px-4">R-COO-R&apos;</td>
          </tr>
          <tr className="border-b">
            <td className="py-2 px-4">Amide</td>
            <td className="py-2 px-4">-CONH₂</td>
            <td className="py-2 px-4">R-CONH₂</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-lg font-semibold mb-2">13.7.1 Functional Haloalkanes</h3>
      <p className="mb-4">
        Groups containing Carbon, Hydrogen, and Halogens: Haloalkanes are characterized by the presence of the halogen atom. The haloalkane is a compound in which one hydrogen atom of an alkane is substituted by one halogen atom. Which of the following molecules are haloalkanes?
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><span className="font-bold">CH₄:</span> Methane</li>
        <li><span className="font-bold">HC-Br:</span> Bromomethane</li>
        <li><span className="font-bold">H₃C-Cl:</span> Chloromethane</li>
        <li><span className="font-bold">CH₃CH₂-I:</span> Iodoethane</li>
        <li><span className="font-bold">CH₃CH₂-Cl:</span> Chloroethane</li>
      </ul>

      <h3 className="text-lg font-semibold mb-2">13.7.2 Alcohols</h3>
      <p className="mb-4">
        Alcohols are characterized by the presence of the hydroxyl group (-OH) attached to a hydrocarbon chain.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><span className="font-bold">CH₃CH₂-OH:</span> Ethanol (Ethyl alcohol)</li>
        <li><span className="font-bold">H₂C-OH:</span> Methanol (Methyl alcohol)</li>
        <li>OH is the general formula for alcohols. Which of the following compounds is alcohol?</li>
        <li><span className="font-bold">CH₂CH₂CH₂OH:</span> 1-Propanol</li>
        <li><span className="font-bold">CH₂CH₂CH₂CH₂OH:</span> 1-Butanol</li>
      </ul>

      <h3 className="text-lg font-semibold mb-2">13.7.3 Phenols</h3>
      <p className="mb-4">
        When an -OH group is attached to a benzene ring, the compound is called a phenol.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><span className="font-bold">C₆H₅-OH:</span> Phenol</li>
      </ul>
      <p className="mb-4">
        Phenol was the first antiseptic used in an operation theatre.
      </p>

      <h3 className="text-lg font-semibold mb-2">13.7.4 Ethers</h3>
      <p className="mb-4">
        Organic compounds that have two alkyl groups attached to the same oxygen atom are called ethers. These compounds have a C-O-C linkage in their molecules.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><span className="font-bold">CH₃-O-CH₃:</span> Dimethyl ether</li>
        <li><span className="font-bold">CH₃-O-CH₂CH₃:</span> Ethyl methyl ether</li>
        <li><span className="font-bold">CH₃-CH₂-O-CH₂-CH₃:</span> Diethyl ether</li>
      </ul>
      <p className="mb-4">
        The general formula for ethers is R-O-R&apos;, where R and R&apos; are alkyl groups which may be the same or different.
      </p>

      <h3 className="text-lg font-semibold mb-2">13.7.5 Aldehydes and Ketones</h3>
      <p className="mb-4">
        Aldehydes and ketones contain the carbonyl group. An aldehyde has at least one hydrogen atom attached to the carbonyl carbon atom. A ketone has two hydrocarbon groups (alkyl) bonded to the carbonyl carbon atom.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><span className="font-bold">H-CHO:</span> Methanal (Formaldehyde)</li>
        <li><span className="font-bold">CH₃-CHO:</span> Ethanal (Acetaldehyde)</li>
        <li><span className="font-bold">CH₃-CO-CH₃:</span> Propanone (Acetone)</li>
        <li><span className="font-bold">CH₃-CH₂-CO-CH₃:</span> Butanone</li>
      </ul>

      <h3 className="text-lg font-semibold mb-2">13.7.6 Carboxylic Acids</h3>
      <p className="mb-4">
        The functional group of organic acid is called the carboxyl group.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><span className="font-bold">HCOOH:</span> Formic acid (Methanoic acid)</li>
        <li><span className="font-bold">CH₃COOH:</span> Acetic acid (Ethanoic acid)</li>
      </ul>
      <p className="mb-4">
        The general formula for carboxylic acids is R-COOH, where R is H or an alkyl group.
      </p>

      <h3 className="text-lg font-semibold mb-2">13.7.7 Esters</h3>
      <p className="mb-4">
        Compounds having the general formula R-COO-R&apos; are called esters. R and R&apos; are alkyl groups which may be the same or different.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><span className="font-bold">CH₃-COO-CH₃:</span> Methyl acetate (Methyl ethanoate)</li>
        <li><span className="font-bold">CH₃-COO-CH₂-CH₃:</span> Ethyl acetate (Ethyl ethanoate)</li>
      </ul>

      <h3 className="text-lg font-semibold mb-2">13.7.8 Amides</h3>
      <p className="mb-4">
        Compounds having the general formula R-CONH₂ are called amides. R is an alkyl group.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><span className="font-bold">CH₃-CONH₂:</span> Ethanamide</li>
      </ul>

      <h3 className="text-lg font-semibold mb-2">Example 13.2: Differentiating Different Organic Compounds Based on Their Functional Groups</h3>
      <p className="mb-4">
        Classify the following compounds as an alcohol, ether, or phenol:
      </p>
      <ol className="list-decimal list-inside mb-4">
        <li>CH₃CH₂OCH₂CH₃ is an anesthetic, but its use as an anesthetic is now limited. This is because it is inflammable and causes nausea.</li>
        <li>C₆H₅OH is a strong germicide. It is commonly used as a disinfectant for floors, furniture, and washrooms.</li>
        <li>CH₃OH is poisonous and can cause blindness or death if taken internally.</li>
      </ol>
      <p className="mb-4">Solution:</p>
      <ul className="list-disc list-inside mb-4">
        <li><span className="font-bold">CH₃CH₂OCH₂CH₃:</span> Ether</li>
        <li><span className="font-bold">C₆H₅OH:</span> Phenol</li>
        <li><span className="font-bold">CH₃OH:</span> Alcohol</li>
      </ul>

      <h3 className="text-lg font-semibold mb-2">Example 13.3: Classify the Following Organic Compounds Based on Functional Group</h3>
      <p className="mb-4">
        Identify the following compounds as an aldehyde, ketone, or carboxylic acid:
      </p>
      <ol className="list-decimal list-inside mb-4">
        <li>CH₃COCH₃ is a common solvent for organic materials such as fats, rubbers, plastics, and varnishes.</li>
        <li>CH₃CH₂CHO has a foul irritating odor.</li>
        <li>CH₃COOH is present in vinegar and is used to flavor food and make a polymer called polyvinyl acetate.</li>
      </ol>
      <p className="mb-4">Solution:</p>
      <ul className="list-disc list-inside mb-4">
        <li><span className="font-bold">CH₃COCH₃:</span> Ketone</li>
        <li><span className="font-bold">CH₃CH₂CHO:</span> Aldehyde</li>
        <li><span className="font-bold">CH₃COOH:</span> Carboxylic acid</li>
      </ul>

      <p className="mb-4">
        Almost all synthesis involves the interconversion of at least one functional group to another. A functional group is the active portion of the molecule. It plays a key role in the synthesis of new compounds. The key to designing most organic synthesis is the functional group in the target molecules.
      </p>

      <h3 className="text-lg font-semibold mb-2">KEY POINTS</h3>
      <ul className="list-disc list-inside mb-4">
        <li>The study of carbon-containing compounds and their properties is called organic chemistry.</li>
        <li>Organic Compounds are also defined as the hydrocarbons and their derivatives.</li>
        <li>A series of related compounds in which any two adjacent molecules differ by a -CH₂- group is called a homologous series.</li>
        <li>A formula that describes the arrangement of atoms in a molecule is called a structural formula.</li>
        <li>Hydrocarbons whose carbon-carbon bonds are all single bonds are called saturated.</li>
        <li>Hydrocarbons containing carbon-carbon multiple bonds are called unsaturated.</li>
        <li>The compounds that have the same molecular formula but different arrangements of atoms in their molecules are called structural isomers.</li>
        <li>Open chain compounds contain an open chain of carbon atoms.</li>
        <li>Organic compounds which contain rings of carbon atoms are called cyclic compounds.</li>
        <li>An atom or groups of atoms that give a family of organic compounds its characteristic properties is called a functional group.</li>
      </ul>

      <h3 className="text-lg font-semibold mb-2">References for Additional Information</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Chemistry for Changing Times, John W. Hill, Doris K. Kolb.</li>
        <li>Longman Chemistry for IGCSE, Jin Clark and Ray Oliver.</li>
      </ul>
    </div>
  );
};

export default OrganicChemistry;