import React from 'react';

const ConditionsForEquilibriumPage = () => {
  return (
    <div className="p-6 bg-white text-black">
      <h1 className="text-2xl font-bold mb-4">9.2 CONDITIONS FOR EQUILIBRIUM</h1>

      <p className="mb-4">
        Equilibrium is achieved when pure reactants, pure products, or a mixture of reactants and products are first placed in a closed container, in each such case, forward and backward movement in the tank occurs at the same speed. This leads to a situation where the concentrations of reactants and products remain the same indefinitely, as long as the following physical conditions are met:
      </p>

      <ol className="list-decimal list-inside mb-4">
        <li>The concentration of reactant or product remains unchanged.</li>
        <li>The temperature of the system remains constant.</li>
        <li>The pressure or volume of the system remains constant.</li>
      </ol>
    </div>
  );
};

export default ConditionsForEquilibriumPage;
