'use client'

import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Force {
  name: string;
  description: string;
  exchangeParticles: string;
  range: string;
  relativeStrength: string;
}

const forces: Force[] = [
  {
    name: "Strong Nuclear Force",
    description: "it binds the fundamental particles of matter together to form larger particles. It holds together the quarks that make up protons and neutrons, and part of the strong force also keeps the protons and neutrons of an atom&apos;snucleus together. The strongest force, but also has a short range. It governs nuclear interactions inside atoms. Strongest force, keeps protons packed in atomic nucleus.",
    exchangeParticles: "Pions and other heavy particles",
    range: "10^-15 m (≈ diameter of a proton)",
    relativeStrength: "1",
  },
  {
    name: "Electromagnetic Force",
    description: "Stronger than gravity, but also has infinite range. For example, the electromagnetic force keeps a book from falling off a table because the electrons in the table&apos;satoms repel the electrons in the book&apos;satoms. Acts between electric charges, includes electric and magnetic forces.",
    exchangeParticles: "Photons",
    range: "Infinite",
    relativeStrength: "7.3 x 10^-3",
  },
  {
    name: "Gravitational Force",
    description: "The weakest force, but has infinite range. It&apos;salways attractive and acts between any two pieces of matter in the universe. For example, gravity causes the moon to revolve around the Earth and tides to form in the ocean. Force of attraction between all objects, weakest of the four.",
    exchangeParticles: "Graviton (not yet detected)",
    range: "Infinite",
    relativeStrength: "6 x 10^-39",
  },
  {
    name: "Weak Nuclear Force",
    description: "The weak force, also called the weak nuclear interaction, is responsible for particle decay. The next weakest force, but has a short range. It&apos;sresponsible for radioactive decay and neutrino interactions, and is also critical for the nuclear fusion reactions that power the sun. Responsible for radioactive decay, changes flavor of quarks.",
    exchangeParticles: "W+, W-, Z0 (vector bosons)",
    range: "10^-18 m",
    relativeStrength: "10^-13",
  },
];

const FundamentalForcesComponent: React.FC = () => {
  const [selectedForce, setSelectedForce] = useState<Force>(forces[0]);

  return (
    <div className="p-4 max-w-4xl mx-auto">
        <iframe width="600" height="500" scrolling="yes" frameBorder="0" data-lazy-priority="low" data-lazy-src="https://view.genial.ly/61c460b39d7e660de754a3cf" data-lazy-report="lazily loaded with low priority" src="https://view.genial.ly/61c460b39d7e660de754a3cf"></iframe>
      <Tabs defaultValue={forces[0].name} className="mb-6">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          {forces.map((force) => (
            <TabsTrigger
              key={force.name}
              value={force.name}
              onClick={() => setSelectedForce(force)}
              className="text-sm"
            >
              {force.name}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {forces.map((force) => (
          <TabsContent key={force.name} value={force.name}>
            <div className="mt-4">
              <h2 className="text-2xl font-semibold mb-2">{force.name}</h2>
              <p className="mb-2">{force.description}</p>
              <ul className="list-disc list-inside mb-4">
                <li>Exchange Particles: {force.exchangeParticles}</li>
                <li>Range: {force.range}</li>
                <li>Relative Strength: {force.relativeStrength}</li>
              </ul>
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Comparison Table</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Force</TableHead>
              <TableHead>Range</TableHead>
              <TableHead>Relative Strength</TableHead>
              <TableHead>Exchange Particles</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {forces.map((force) => (
              <TableRow key={force.name}>
                <TableCell>{force.name}</TableCell>
                <TableCell>{force.range}</TableCell>
                <TableCell>{force.relativeStrength}</TableCell>
                <TableCell>{force.exchangeParticles}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Unification Attempts</h2>
        <p>
          The most successful unification attempt is the electroweak theory, proposed by Abdus Salam, Steven Weinberg, and Sheldon Lee Glashow. It combines electromagnetic and weak forces, incorporating quantum electrodynamics with four carrier particles: photon, W+, W-, and Z particles.
        </p>
      </div>
    </div>
  );
};

export default FundamentalForcesComponent;