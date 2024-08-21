// pages/group-number-and-charge.tsx

import React from 'react';

const GroupNumberAndCharge = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl font-bold">Group Number and Charge on an Ion</h1>
      </header>

      <main className="p-6">
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Introduction</h2>
          <p className="mb-4">
            The group number of an element in the periodic table can provide information about the charge of an ion formed by an element. Valence electrons are involved in the formation of ions. The relationship between group number and ions formed by elements is based on the number of valence electrons in the element.
          </p>
          <p className="mb-4">
            The group number of an s-block element in the periodic table corresponds to its number of valence electrons. Whereas in the case of p-block elements, the number of valence electrons is equal to Group number minus 10.
          </p>
          <p className="mb-4">
            Some elements tend to lose electrons. Why? Elements tend to achieve a stable electron configuration such as the noble gases. Remember that the 2 or 8 electron configuration is the most stable configuration. Elements with 1-3 electrons in their valence shell tend to lose those electrons and form +1, +2, +3 ions respectively. Elements with 5-7 electrons in their valence shell tend to gain 3, 2, 1 electrons respectively and form negatively charged ions with -3, -2, -1 charges respectively. Elements with 4 valence electrons can lose 4 electrons to form +4 ions. They can also gain 4 electrons and form -4 ions.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Group 1 (Alkali Metals)</h2>
          <p className="mb-4">
            Group 1 elements such as lithium (Li), sodium (Na), and potassium (K) have one valence electron and belong to s block. S block elements lose electrons equal to their group number. They tend to lose this electron to form a +1 ion, also known as a mono-valent cation.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Lithium (Li) loses one valence electron to form Li<sup>+</sup></li>
            <li>Sodium (Na) loses one valence electron to form Na<sup>+</sup></li>
            <li>Potassium (K) loses one valence electron to form K<sup>+</sup></li>
          </ul>
          <p className="mb-4">
            These elements after losing an electron acquire the 8-electron configuration of a noble gas.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Group 2 (Alkaline Earth Metals)</h2>
          <p className="mb-4">
            Group 2 elements such as beryllium (Be), magnesium (Mg), and calcium (Ca) have two valence electrons and are s block elements. They tend to lose these two electrons to form 2<sup>+</sup> ions, also called divalent cations.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Beryllium (Be) loses two valence electrons to form Be<sup>2+</sup></li>
            <li>Magnesium (Mg) loses two valence electrons to form Mg<sup>2+</sup></li>
            <li>Calcium (Ca) loses two valence electrons to form Ca<sup>2+</sup></li>
          </ul>
          <p className="mb-4">
            Magnesium will lose 2 electrons to achieve a stable configuration and this number is the same as its group number i.e., 2 Mg = 1s², 2s², 2p<sup>6</sup>
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Group 17 (Halogens)</h2>
          <p className="mb-4">
            Group 17 elements such as fluorine (F), chlorine (Cl), and bromine (Br) have seven valence electrons. They tend to gain one electron to reach a stable octet and form 1<sup>-</sup> ion, also called a monovalent anion.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Fluorine (F) gains one electron to form F<sup>-</sup></li>
            <li>Chlorine (Cl) gains one electron to form Cl<sup>-</sup></li>
            <li>Bromine (Br) gains one electron to form Br<sup>-</sup></li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Group 16 (Chalcogens)</h2>
          <p className="mb-4">
            Group 16 elements such as oxygen (O), sulfur (S), and selenium (Se) have six valence electrons. They tend to gain two electrons to reach a stable octet and form a -2 ion, also called a divalent anion.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Oxygen (O) gains two electrons to form O<sup>2-</sup></li>
            <li>Sulfur (S) gains two electrons to form S<sup>2-</sup></li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Group 18 (Noble Gases)</h2>
          <p className="mb-4">
            Group 18 elements such as helium (He), neon (Ne), and argon (Ar) have full valence electron shells (except helium, which has only two valence electrons). They are chemically stable and do not form ions under normal conditions. Noble gases are known for their low reactivity due to their stable electronic configuration.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Example 4.3: Obtaining the Position of Element in the Periodic Table from the Electronic Configuration</h2>
          <p className="mb-4">
            Find out the position of the following elements in the periodic table from the electronic configuration:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Nitrogen (atomic number: 7)</li>
            <li>Oxygen (atomic number: 8)</li>
          </ul>
          <h3 className="text-lg font-semibold mb-2">Problem Solving Strategy:</h3>
          <p className="mb-4">
            Write electronic configuration of the element. Identify the valence shell configuration, coefficient of s or p sub-shell represents period number, and total number of electrons in the valence shell is equal to the group number.
          </p>
          <h3 className="text-lg font-semibold mb-2">Solution:</h3>
          <p className="mb-4">
            <strong>a)</strong> Electronic configuration of N = 1s², 2s², 2p<sup>3</sup><br />
            Valence shell has configuration = 2s², 2p<sup>3</sup><br />
            Period number = 2<br />
            Number of valence electrons = 5<br />
            N belongs to p-block. So, Group number = 5 + 10 = 15<br />
            Nitrogen is present in the 2nd period of Group 15
          </p>
          <p className="mb-4">
            <strong>b)</strong> Electronic configuration of oxygen = 1s², 2s², 2p<sup>4</sup><br />
            Valence shell has configuration = 2s², 2p<sup>4</sup><br />
            Period number = 2<br />
            Number of valence electrons = 6<br />
            O belongs to p-block. So, Group number = 6 + 10 = 16<br />
            Oxygen is present in the 2nd period of Group 16
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Concept Assessment Exercise 4.4</h2>
          <p className="mb-4">
            Obtain the valence shell configuration of Al and S from their position in the periodic table.
          </p>
        </section>
      </main>
    </div>
  );
};

export default GroupNumberAndCharge;
