import React from 'react';

const AtomicMassInfo: React.FC = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">3.4 Relative Atomic Mass and Atomic Mass Unit</h1>

            <p className="mb-4">
                Atomic mass is a measurement of the mass of an atom relative to a standard. Early chemists, such as Dalton, Gay Lussac, Lavoisier, Avogadro, and Berzelius, made initial calculations based on the proportions in which elements combine to form compounds. Atoms are extremely small, so their exact masses cannot be measured directly. Instead, atomic mass is determined relative to a standard.
            </p>

            <p className="mb-4">
                In 1961, the carbon-12 isotope was chosen as the standard. Its mass was assigned a value of exactly 12 atomic mass units (amu). All other atomic masses are compared to this standard.
            </p>

            <p className="mb-4">
                Atomic mass (also known as atomic weight) is usually expressed in atomic mass units (amu). One atomic mass unit (amu) is defined as one-twelfth the mass of a carbon-12 atom. The relative atomic mass of an atom is the mass of the atom compared to the mass of the carbon-12 standard.
            </p>

            <p className="mb-4">
                For example, a hydrogen atom is approximately 1.008 amu because it is about 8.40% as massive as the carbon-12 atom. Oxygen has a relative atomic mass of 15.9994 amu. Sodium has a relative atomic mass of 22.9898 amu. Aluminum has a relative atomic mass of 26.9815 amu.
            </p>

           
        </div>
    );
};

export default AtomicMassInfo;
