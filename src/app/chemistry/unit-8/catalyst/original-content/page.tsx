import React from 'react';

const Catalyst = () => {
  return (
    <div className="bg-white text-black min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Energetics</h1>

        <h2 className="text-2xl font-semibold mb-4">8.6 CATALYST</h2>
        <p className="mb-4">
          Many industrial reactions are carried out at high temperatures over a period of time to maximize the amount of product that can be synthesized. High temperature reactions cause safety problems and many chemicals are not stable at high temperatures. So it would be useful to use another method to increase the speed of chemical reactions.
        </p>
        <p className="mb-4">
          Another way to increase the reaction rate is to change the mechanism in a way that lowers the activation energy. This can be done by adding a catalyst. A substance that accelerates a chemical reaction, but remains chemically unchanged at the end of the reaction, is called a catalyst, and the phenomenon is called catalysis. The catalyst provides a new mechanism for the reaction with low activation energy (Figure 8.3). Thus, a catalyst increases the rate of a reaction by lowering its activation energy. The catalyst does not affect the overall thermodynamics or enthalpy of the reaction.
        </p>

        <h3 className="text-xl font-semibold mb-4">Reaction Progress with and without Catalyst</h3>
        <div className="mb-4">
          <img src="/images/catalyst-diagram.png" alt="Catalyst Diagram" className="w-full h-auto" />
        </div>
        <p className="mb-4">
          In the bodies of living organisms, enzymes catalyze chemical reactions.
        </p>
      </div>
    </div>
  );
};

export default Catalyst;
