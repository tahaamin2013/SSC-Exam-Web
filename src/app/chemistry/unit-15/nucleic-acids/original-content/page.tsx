import React from 'react';

const BiochemistryUnit15: React.FC = () => {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Unit 15: Biochemistry</h1>

            <h2 className="text-xl font-semibold mb-4">15.6 NUCLEIC ACIDS</h2>
            <p className="mb-4">
                Nucleic acids are large biomolecules (macromolecules) that play essential roles in cells. They contain genetic information and are key to protein biosynthesis. Nucleic acids are macromolecules formed by nucleotides, which are the basic building blocks of nucleic acids (RNA and DNA).
            </p>

            <div className="mb-4">
                <img src="/path/to/nucleic-acids.png" alt="Nucleic Acids" />
                <p className="text-center">Figure 15.7: Nucleic Acids</p>
            </div>

            <h3 className="text-lg font-semibold mb-4">15.6.1 DNA</h3>
            <p className="mb-4">
                DNA (deoxyribonucleic acid) is a double-stranded form of nucleic acid that contains the genetic substance required for the growth and functioning of all living organisms.
            </p>

            <h3 className="text-lg font-semibold mb-4">15.6.2 RNA</h3>
            <p className="mb-4">
                RNA (ribonucleic acid) is a single-stranded nucleic acid that converts genetic information from genes into amino acid sequences of proteins.
            </p>

            <h3 className="text-lg font-semibold mb-4">CONCEPT ASSESSMENT EXERCISE 15.1</h3>
            <ol className="list-decimal list-inside mb-4">
                <li>Differentiate between DNA and RNA.</li>
                <li>Differentiate between proteins and lipids.</li>
            </ol>
        </div>
    );
};

export default BiochemistryUnit15;
