export default function MolecularMassAndFormulaMass() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">6.2 MOLECULAR MASS AND FORMULA MASS</h1>

      <p className="mb-4">
        Molecular mass is the sum of the atomic masses of all the atoms present in the molecule. All you have to do is add up the atomic masses of all the atoms in the compound. For example, the molecular mass of water (H₂O) is calculated as follows:
      </p>
      <p className="mb-4">
        Molecular mass of H₂O = 2 (atomic mass of H) + atomic mass of O = 2 × 1.008 + 16.00 = 2.016 + 16.00 = 18.016 amu
      </p>

      <h2 className="text-2xl font-semibold mb-2">Example 6.1: Determining Molecular Mass</h2>
      <ol className="list-decimal ml-6 mb-4">
        <li>Determine the molecular mass of glucose (C₆H₁₂O₆), which is also known as blood sugar.</li>
        <li>Determine the molecular mass of naphthalene (C₁₀H₈), which is used in mothballs.</li>
      </ol>
      <p className="mb-4">Problem solving strategy: Multiply atomic masses of carbon, hydrogen, and oxygen by their subscripts and add.</p>
      <p className="mb-4">Solution:</p>
      <ul className="list-disc ml-6 mb-4">
        <li>
          Molecular mass of C₆H₁₂O₆ = 6 × 12.00 + 12 × 1.008 + 6 × 16.00 = 180.096 amu
        </li>
        <li>
          Molecular mass of C₁₀H₈ = 10 × 12.00 + 8 × 1.008 = 120 + 8.064 = 128.064 amu
        </li>
      </ul>

      <p className="mb-4">
        The term &quot;molecular mass&quot; is used for molecular compounds, whereas the term &quot;formula mass&quot; is used for ionic compounds. Ionic compounds consist of arrays of oppositely charged ions rather than separate molecules. Thus, we represent an ionic compound by its formula unit. A formula unit indicates the simplest ratio between cations and anions in an ionic compound. For example, common salt consists of Na<sup>+</sup> and Cl<sup>-</sup> ions. It has one Na<sup>+</sup> ion for every Cl<sup>-</sup> ion. So, the formula unit for common salt is NaCl.
      </p>
      <p className="mb-4">
        The sum of the atomic masses of all the atoms in the formula unit of a substance is called formula mass.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Example 6.2: Determining Formula Mass</h2>
      <ol className="list-decimal ml-6 mb-4">
        <li>Sodium chloride (NaCl), also known as table salt, is used to flavor food, preserve meat, and in the preparation of a large number of compounds. Determine its formula mass.</li>
        <li>Milk of magnesia, which contains Mg(OH)₂, is used to treat acidity. Determine its formula mass.</li>
      </ol>
      <p className="mb-4">Problem solving strategy: Add the atomic masses of all the atoms in the formula unit.</p>
      <p className="mb-4">Solution:</p>
      <ul className="list-disc ml-6 mb-4">
        <li>
          Formula mass of NaCl = 1 × Atomic mass of Na + 1 × Atomic mass of Cl = 1 × 23 + 1 × 35.5 = 58.5 amu
        </li>
        <li>
          Formula mass of Mg(OH)₂ = 24 + (16 × 2) + 1 × 2 = 24 + 32 + 2 = 58 amu
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">CONCEPT ASSESSMENT EXERCISE 6.3</h2>
      <ol className="list-decimal ml-6 mb-4">
        <li>Potassium chlorate (KClO₃) is used commonly for the laboratory preparation of oxygen gas. Calculate its formula mass.</li>
        <li>When baking soda (NaHCO₃) is heated, carbon dioxide is released, which is responsible for the rising of cookies and bread. Determine the formula masses of baking soda and carbon dioxide.</li>
        <li>Following compounds are used as fertilizers. Determine their formula masses:
          <ul className="list-disc ml-6">
            <li>(i) Urea, (NH₂)₂CO</li>
            <li>(ii) Ammonium nitrate, NH₄NO₃</li>
          </ul>
        </li>
      </ol>
    </div>
  );
}
