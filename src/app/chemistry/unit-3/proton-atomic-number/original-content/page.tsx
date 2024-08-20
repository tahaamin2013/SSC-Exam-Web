// src/pages/ProtonNumber.tsx

import React from 'react';

const ProtonNumber: React.FC = () => {
    return (
        <div className="p-4">
            <section>
                <h2 className="text-3xl font-bold mb-4">3.3 Proton or Atomic Number</h2>

                <h3 className="text-2xl font-semibold mb-2">What Determines the Identity of an Element?</h3>
                <p className="mb-4">
                    Proton number refers to the number of protons in the nucleus of an atom. It is also known as the atomic number and is indicated by the symbol &quot;Z&quot;.
                </p>
                <p className="mb-4">
                    Protons have a positive electrical charge. In neutral atoms, the number of protons is equal to the number of electrons. This balances the positive charge of the protons. This means that the proton number also indicates the number of electrons in the atom. For example, there is only one proton in the nucleus of a H atom; therefore its atomic number is 1. All the atoms of a given element have the same number of protons and therefore the same atomic number.
                </p>
                <p className="mb-4">
                    Do you think atomic number of He is 2? What is the proton number of C-atom?
                </p>

                <h3 className="text-2xl font-semibold mt-4 mb-2">Uniqueness of Proton Number</h3>
                <p className="mb-4">
                    Each element has a unique proton number that distinguishes it from other elements. It determines the various properties of an element and its position in the periodic table. In the periodic table, elements are arranged based on their atomic or proton number. Therefore, the number of protons is related to the position of the element in the periodic table. Thus, the number of protons determines each particular element. This will tell you what element you are talking about.
                </p>
                <p className="mb-4">
                    For example, if an atom has a proton number of 6, it must be carbon. If an atom has 11 protons, it must be sodium. Similarly, each nitrogen atom has 7 protons, each oxygen atom has 8 protons, etc. You can identify each atom by the number of protons.
                </p>

                <h3 className="text-2xl font-semibold mt-4 mb-2">Nucleon Number or Atomic Mass</h3>
                <p className="mb-4">
                    The total number of protons and neutrons in an atom is known as its mass number or nucleon number. Some atoms of an element have different number of neutrons, such atoms are called isotopes.
                    <br />
                    <strong>No. of neutrons = mass number - atomic number</strong>
                </p>

                <h4 className="text-xl font-semibold mt-4 mb-2">Example 3.1: Determining the Number of Protons and Neutrons in an Atom</h4>
                <p className="mb-4">
                    Atomic number of an element is 17 and mass number is 35. How many protons and neutrons are in the nucleus of an atom of this element?
                </p>
                <p className="mb-4">
                    <strong>Problem Solving Strategy:</strong><br />
                    Number of protons are equal to atomic number and Number of neutrons = mass number - atomic number
                </p>
                <p className="mb-4">
                    <strong>Solution:</strong><br />
                    Number of protons = atomic number = 17<br />
                    Number of neutrons = mass number - atomic number = 35 - 17 = 18
                </p>

                <h3 className="text-2xl font-semibold mt-4 mb-2">Radioactivity</h3>
                <p className="mb-4">
                    The proton number determines the identity of the element. In stable elements, the nuclear force is balanced. In some elements, the nuclear forces are not naturally balanced. The nucleus of these atoms decays and becomes another atom. This process is called radioactive decay and this phenomenon is called radioactivity. This process continues until the forces in the nuclear core are balanced. In radioactive decay, when an atom emits a neutron, it changes to another isotope of that atom. But when it emits a proton, it becomes another atom. This means that radioactivity can change the number of protons in an atom and thus change the identity of the atom.
                </p>
                <p className="mb-4">
                    For example:
                    <br />
                    1. Carbon-14 is a radioactive isotope of carbon. It is naturally present in the atmosphere. When any living organism takes in carbon dioxide from the air, it incorporates both C-14 and C-12 atoms into its tissues. The radioactive C-14 undergoes radioactive decay, transforms into nitrogen-14.
                    <br />
                    2. Uranium-238 is a radioactive isotope of uranium. It decays over time and finally transforms into stable lead-206 atom.
                </p>
            </section>
        </div>
    );
};

export default ProtonNumber;
