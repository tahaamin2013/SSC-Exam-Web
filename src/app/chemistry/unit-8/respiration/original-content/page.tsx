import React from 'react';

const Respiration = () => {
  return (
    <div className="bg-white text-black min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Energetics</h1>

        <h2 className="text-2xl font-semibold mb-4">8.7 RESPIRATION</h2>
        <p className="mb-4">
          Where do we get energy for our body? Respiration is a biochemical process in which energy is released from food in a biological system. During this process, glucose is oxidized in the body of living organisms and energy is released. Therefore, respiration is an exothermic reaction. There are two types of respiration processes.
        </p>

        <h3 className="text-xl font-semibold mb-4">1. Aerobic Respiration</h3>
        <p className="mb-4">
          Respiration that requires oxygen to break down glucose to release energy is called aerobic respiration.
        </p>
        <p className="mb-4">
          <strong>Equation:</strong><br />
          Glucose + Oxygen → Carbon dioxide + Water + Energy
        </p>

        <h3 className="text-xl font-semibold mb-4">2. Anaerobic Respiration</h3>
        <p className="mb-4">
          Respiration that does not require oxygen to break down glucose to release energy is called anaerobic respiration.
        </p>
        <p className="mb-4">
          <strong>Equation:</strong><br />
          Glucose → Lactic acid + Energy
        </p>

        <p className="mb-4">
          Aerobic respiration releases more energy than anaerobic respiration. Lipids are important substances for building our body. They also act as reserve energy sources. Lipids can store very large amounts of energy in our body. When you exercise intensely, the oxidation of glucose is not enough for energy. At this stage, lipids are oxidized for energy.
        </p>

        <h3 className="text-xl font-semibold mb-4">KEY POINTS</h3>
        <ul className="list-disc list-inside mb-4">
          <li>The study of energy changes in chemical reactions is called chemical energetics.</li>
          <li>A chemical reaction that proceeds with the evolution of heat is called an exothermic reaction.</li>
          <li>The amount of heat or thermal energy evolved or absorbed in a chemical reaction is called enthalpy of reaction.</li>
          <li>The difference between the bond dissociation energy and the bond energy determines whether the reaction absorbs or releases energy.</li>
          <li>The minimum amount of energy that, in addition to the average kinetic energy, particles must have in effective collisions is called the activation energy.</li>
          <li>A substance that accelerates a chemical reaction, but remains chemically unchanged at the end of the reaction, is called a catalyst.</li>
          <li>The catalyst provides a new mechanism for the reaction with low activation energy.</li>
          <li>In the bodies of living organisms, enzymes catalyze chemical reactions.</li>
          <li>Respiration that requires oxygen to break down glucose to release energy is called aerobic respiration.</li>
          <li>Respiration that does not require oxygen to break down glucose to release energy is called anaerobic respiration.</li>
          <li>Lipids act as reserve energy sources.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">References for Additional Information</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Zumdahl, Introductory Chemistry.</li>
          <li>Raymond Chang, Essential Chemistry.</li>
        </ul>
      </div>
    </div>
  );
};

export default Respiration;
