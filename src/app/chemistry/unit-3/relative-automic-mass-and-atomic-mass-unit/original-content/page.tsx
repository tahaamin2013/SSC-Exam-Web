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

            <h2 className="text-2xl font-bold mb-4">3.5 ISOTOPES</h2>
            <p className="mb-4">
                Isotopes are atoms of an element that have the same number of protons but different numbers of neutrons. The number of neutrons affects the mass of the atom. As a result, isotopes of an element have different mass numbers but are chemically alike. The term "isotope" was first used by Soddy. It is derived from the Greek words "isos" (same) and "topos" (place), meaning isotopes are different forms of the same element that occupy the same position in the periodic table.
            </p>

            <p className="mb-4">
                The discovery of isotopes contradicted Dalton's atomic theory because Dalton's theory stated that all atoms of a given element were identical in mass. The existence of isotopes showed that atoms of the same element can have different masses due to varying numbers of neutrons.
            </p>

            <h3 className="text-xl font-semibold mb-4">3.5.1 Isotopes of Hydrogen</h3>
            <p className="mb-4">
                Hydrogen has three isotopes:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li><strong>Hydrogen-1 (Protium)</strong> has no neutrons. Almost all hydrogen is Hydrogen-1. Its symbol is H.</li>
                <li><strong>Hydrogen-2 (Deuterium)</strong> has one neutron. Its symbol is D.</li>
                <li><strong>Hydrogen-3 (Tritium)</strong> has two neutrons. Its symbol is T.</li>
            </ul>

            <p className="mb-4">
                Protium, or Hydrogen-1, has only one proton. Adding a neutron results in Deuterium. Adding another neutron results in Tritium. Protium is a colorless, odorless, and tasteless gas. Water containing Hydrogen-2 instead of Hydrogen-1 is known as heavy water.
            </p>

            <h3 className="text-xl font-semibold mb-4">Table 3.2: Physical Properties of Ordinary Water and Heavy Water</h3>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">Property</th>
                        <th className="border border-gray-300 px-4 py-2">Ordinary Water</th>
                        <th className="border border-gray-300 px-4 py-2">Heavy Water</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">Melting Point</td>
                        <td className="border border-gray-300 px-4 py-2">0.00°C</td>
                        <td className="border border-gray-300 px-4 py-2">3.81°C</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">Boiling Point</td>
                        <td className="border border-gray-300 px-4 py-2">100°C</td>
                        <td className="border border-gray-300 px-4 py-2">101.42°C</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">Density</td>
                        <td className="border border-gray-300 px-4 py-2">1.0 g/cm³</td>
                        <td className="border border-gray-300 px-4 py-2">1.107 g/cm³</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AtomicMassInfo;
