import React from 'react';

const AlkanePreparation: React.FC = () => {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">14.2 GENERAL METHODS OF PREPARATION OF ALKANES</h1>

            <h2 className="text-xl font-semibold mb-4">1. By the Hydrogenation of Alkenes and Alkynes</h2>
            <p className="mb-4">
                Addition of hydrogen molecule across carbon-carbon multiple-bond is called hydrogenation. Hydrogenation takes place in presence of finely divided nickel at 200-300°C and high pressure. Hydrogenation can also be done in presence of Pt or Pd at room temperature. Alkynes add two molecules of hydrogen. Why?
            </p>
            <p className="mb-4">
                CH≡CH + H₂ → Ethyne <br />
                CH₂=CH₂ + H₂ → Ethene <br />
                CH₂=CH₂ (NL 200-300°C) <br />
                CH₃-CH₃ (NL 200-300°C)
            </p>

            <h2 className="text-xl font-semibold mb-4">CONCEPT ASSESSMENT EXERCISE 14.1</h2>
            <p className="mb-4">
                Complete the following reactions:
            </p>
            <p className="mb-4">
                CH₃-CH=CH₂ + H₂ → CH₃-CH₂-CH₃ <br />
                CH≡CH + 2H₂ → CH₃-CH₃ (NL 200-300°C)
            </p>

            <h2 className="text-xl font-semibold mb-4">2. By the Reduction of Alkyl Halides</h2>
            <p className="mb-4">
                When an alkyl halide is treated with Zn in presence of an aqueous acid, an alkane is produced. Usually aqueous solution of HCl or CH₃COOH is used. Zn reacts with aqueous acid to liberate atomic hydrogen called nascent hydrogen. Nascent hydrogen reduces alkyl halide. Addition of nascent hydrogen is called reduction.
            </p>

            <h2 className="text-xl font-semibold mb-4">CONCEPT ASSESSMENT EXERCISE 14.2</h2>
            <p className="mb-4">
                Complete the following reactions:
            </p>
            <p className="mb-4">
                (a) CH₂CH₂Cl + 2[H] → CH₃-CH₃ <br />
                Zn/HCl(a) <br />
                (b) CH₃-CHCl-CH₃ + 2[H] → CH₃-CH₂-CH₃
            </p>

            <h2 className="text-xl font-semibold mb-4">3. By the Cracking of Larger Hydrocarbons</h2>
            <p className="mb-4">
                A large hydrocarbon (alkane) molecule breaks into smaller hydrocarbons when heated at high temperatures such as 450-750°C and high pressure. This process is called thermal cracking. This process produces a mixture of alkanes and alkenes. For example, when decane is heated at high temperature and high pressure, it breaks down into octane and ethene.
            </p>
            <p className="mb-4">
                C₁₀H₂₂ (Decane) → C₈H₁₈ (Octane) + C₂H₄ (Ethene)
            </p>
        </div>
    );
};

export default AlkanePreparation;
