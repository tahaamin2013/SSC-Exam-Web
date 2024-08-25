// pages/Unit10Additional.js
import React from 'react';

const Unit10Additional = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">10.2 STRENGTH OF ACIDS AND BASES</h2>
        <p className="mb-4">
          All the acids and bases do not ionize in aqueous solutions to the same degree. Therefore, they have different strengths.
        </p>

        <h3 className="text-lg font-semibold mb-2">10.2.1 Strong and Weak Acids</h3>
        <p className="mb-4">
          An acid that ionizes completely in aqueous solution is called a strong acid. For example, HCl, HNO₃, H₂SO₄, etc. are strong acids. They ionize 100% in aqueous solution. All the molecules of strong acids ionize in water.
        </p>
        <p className="mb-4">
          HCl (aq) → H⁺ (aq) + Cl⁻ (aq)
        </p>
        <p className="mb-4">
          HNO₃ (l) → H⁺ (aq) + NO₃⁻ (aq)
        </p>
        <p className="mb-4">
          H₂SO₄ (l) → 2H⁺ (aq) + SO₄²⁻ (aq)
        </p>
        <p className="mb-4">
          Acids that do not ionize completely in aqueous solutions are called weak acids. Fewer molecules of weak acids ionize in water. For example, ethanoic acid (acetic acid), which is found in vinegar, ionizes only up to 5% in water. So, ethanoic acid is a weak acid.
        </p>
        <p className="mb-4">
          CH₃COOH ⇌ H⁺ + CH₃COO⁻
        </p>

        <h3 className="text-lg font-semibold mb-2">10.2.2 Strong and Weak Bases</h3>
        <p className="mb-4">
          Like acids, bases can also ionize in water to different degrees. A base that ionizes completely or 100% in aqueous solution is termed a strong base. For example, NaOH, KOH, Ca(OH)₂, etc. are strong bases.
        </p>
        <p className="mb-4">
          NaOH (s) → Na⁺ (aq) + OH⁻ (aq)
        </p>
        <p className="mb-4">
          KOH (s) → K⁺ (aq) + OH⁻ (aq)
        </p>
        <p className="mb-4">
          A base that ionizes to a little extent is called a weak base. Such bases produce fewer OH⁻ ions in aqueous solution. Al(OH)₃, NH₃, etc. are weak bases.
        </p>
        <p className="mb-4">
          H₂O + NH₃ ⇌ NH₄⁺ + OH⁻
        </p>

        <h3 className="text-lg font-semibold mb-2">Alkalis</h3>
        <p className="mb-4">
          A base which is soluble in water is called an alkali. This means that all the bases are not alkalis. On the other hand, all the alkalis are bases. Which is an alkali: KOH or NaOH?
        </p>
        <p className="mb-4">
          Many bases do not dissolve in water. For example, copper hydroxide (Cu(OH)₂), aluminum hydroxide (Al(OH)₃), and ferric hydroxide (Fe(OH)₃). All hydroxides are bases and only water-soluble bases are alkalis. Many household items such as soaps, detergents, shampoos, toothpaste contain alkali.
        </p>
      </section>
    </div>
  );
};

export default Unit10Additional;
