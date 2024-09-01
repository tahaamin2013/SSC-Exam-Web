import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";
import Image from "next/image";

const MagneticMindmap = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <section>
        <h1 className="text-4xl font-bold text-blue-500">
        Molecular and Structural Formula        </h1>
        Mindmap here
      </section>

      <div className="p-6 bg-white text-gray-900 border border-gray-200 rounded-lg shadow-md">
  <h1 className="text-4xl font-bold mb-6">Molecular and Structural Formula</h1>

  <section className="mb-6">
    <h2 className="text-3xl font-semibold mb-4">I. Definitions:</h2>
    <h3 className="text-2xl font-semibold mb-2">A. Structural Formula:</h3>
    <p className="mb-4">
      Shows the arrangement of atoms in a compound.
    </p>
    <h3 className="text-2xl font-semibold mb-2">B. Molecular Formula:</h3>
    <p className="mb-4">
      Shows the number of atoms of each element in a compound.
    </p>
  </section>

  <section className="mb-6">
    <h2 className="text-3xl font-semibold mb-4">II. Example:</h2>
    <p className="mb-4">
      <strong>n-Butane</strong><br />
      - Structural formula: <span className="font-mono">CH₃-CH₂-CH₂-CH₃</span><br/>
      - Molecular formula: <span className="font-mono">C₄H₁₀</span>
    </p>
  </section>

  <section className="mb-6">
    <h2 className="text-3xl font-semibold mb-4">III. Steps to Write Molecular Formula from Structural Formula:</h2>
    <ol className="list-decimal pl-5 space-y-2 mb-4">
      <li>Identify different types of elements in the structural formula.</li>
      <li>Write symbols of these elements side by side.</li>
      <li>Count the number of atoms of each element.</li>
      <li>Show this number as subscripts for each element symbol.</li>
    </ol>
  </section>

  <section className="mb-6">
    <h2 className="text-3xl font-semibold mb-4">IV. Example 6.13: Writing the Molecular Formula</h2>
    <p className="mb-4">
      Given structural formula: <span className="font-mono">CH₃-CH₂-CH₂-OH</span><br/>
      Molecular formula: <span className="font-mono">C₃H₈O</span>
    </p>
  </section>

  <section className="mb-6">
    <h2 className="text-3xl font-semibold mb-4">V. Practice Exercise:</h2>
    <ul className="list-disc pl-5 space-y-2 mb-4">
      <li>Write molecular formulae for:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><span className="font-mono">CH₃-CH₂-OH</span></li>
          <li><span className="font-mono">CH₃-CH₂-NH₂</span></li>
          <li><span className="font-mono">CH₃-CO-CH₃</span></li>
        </ul>
      </li>
    </ul>
  </section>

  <section className="mb-6">
    <h2 className="text-3xl font-semibold mb-4">VI. Key Points:</h2>
    <ul className="list-disc pl-5 space-y-2 mb-4">
      <li><strong>Chemistry:</strong> Science of materials of the universe</li>
      <li><strong>Physical Chemistry:</strong> Deals with laws and theories of matter structure and changes</li>
      <li><strong>Element:</strong> Substance with atoms of the same atomic number</li>
      <li><strong>Compound:</strong> Two or more elements in fixed proportions held by chemical bonds</li>
      <li><strong>Empirical Formula:</strong> Simplest whole-number ratio of atoms in a compound</li>
      <li><strong>Molecular Formula:</strong> Exact number of atoms in a molecule</li>
      <li><strong>Molecular Mass:</strong> Sum of atomic masses of all atoms in a molecule</li>
      <li><strong>Avogadro's Number:</strong> Number of particles in one mole of a substance</li>
      <li><strong>Mole:</strong> Amount of matter containing Avogadro's number of particles</li>
      <li><strong>Gram Atomic Mass:</strong> Atomic mass in grams</li>
      <li><strong>Gram Molecular Mass:</strong> Molecular mass in grams</li>
      <li><strong>Gram Formula Mass:</strong> Formula mass in grams</li>
    </ul>
  </section>

  <section>
    <h2 className="text-3xl font-semibold mb-4">VII. Additional References:</h2>
    <ul className="list-disc pl-5">
      <li>Zumdahl, Introductory Chemistry</li>
      <li>Raymond Chang, Essential Chemistry</li>
    </ul>
    <p className="mt-4 text-lg font-medium">
      <strong>Note:</strong> This section covers the relationship between structural and molecular formulas, providing a method to derive molecular formulas from structural representations. It also summarizes key concepts in chemistry, emphasizing the importance of understanding molecular structure and composition.
    </p>
  </section>
</div>

    </div>
  );
};

export default MagneticMindmap;
