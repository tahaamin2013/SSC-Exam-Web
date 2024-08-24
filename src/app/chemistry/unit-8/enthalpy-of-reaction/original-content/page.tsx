import React from 'react';

const EnthalpyOfReaction = () => {
  return (
    <div className="bg-white text-black min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Energetics</h1>

        <h2 className="text-2xl font-semibold mb-4">8.3 ENTHALPY OF REACTION</h2>
        <p className="mb-4">
          The amount of heat or thermal energy evolved or absorbed in a chemical reaction is called enthalpy of reaction. Its sign is negative for exothermic and positive for endothermic reactions. Enthalpy of reaction measured at 25°C (or 298K) and one atmospheric pressure is known as standard enthalpy change. It is denoted by ΔH°.
        </p>

        <h3 className="text-xl font-semibold mb-4">Examples:</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>C(s) + O<sub>2</sub>(g) → CO<sub>2</sub>(g) &Delta;H° = -393.5 kJ</li>
          <li>H<sub>2</sub>(g) + 1/2 O<sub>2</sub>(g) → 2HI(g) &Delta;H° = +53.8 kJ</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Which of the above reactions is endothermic?</h3>
      </div>
    </div>
  );
};

export default EnthalpyOfReaction;
