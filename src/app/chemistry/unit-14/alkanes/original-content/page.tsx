import React from 'react';

const OrganicCompounds: React.FC = () => {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">INTRODUCTION</h1>
            <p className="mb-4">
                The simplest organic compounds are hydrocarbons. Organic compounds types of hydrocaly two elements, carbon and hydrogen, are called hydrocarbons. There are many types of hydrocarbons. They are classified according to the type of bond between the carbon atoms. In the previous chapter, you learned the differences between alkanes, alkenes, and alkynes.
            </p>
            <h2 className="text-xl font-semibold mb-4">14.1 ALKANES</h2>
            <p className="mb-4">
                Alkanes are saturated hydrocarbons. They have general formula C<sub>n</sub>H<sub>2n+2</sub>. Each carbon atom forms four bonds and each hydrogen atom forms only one bond. So the simplest alkane molecule that is possible is CH<sub>4</sub>. It is called methane. Methane is the main component of natural gas. Electron dot and cross structure for methane is as follows.
            </p>
            <div className="mb-4">
                <img src="/path/to/methane-structure.png" alt="Methane Structure" />
            </div>
            <p className="mb-4">
                So the structural formula for methane is
            </p>
            <div className="mb-4">
                <img src="/path/to/methane-structural-formula.png" alt="Methane Structural Formula" />
            </div>
            <p className="mb-4">
                Recall that structural formula shows which atoms are bonded to each other. The next member of alkane series is ethane, C<sub>2</sub>H<sub>6</sub>. Ethane molecules has following structure:
            </p>
            <div className="mb-4">
                <img src="/path/to/ethane-structure.png" alt="Ethane Structure" />
            </div>
        </div>
    );
};

export default OrganicCompounds;
