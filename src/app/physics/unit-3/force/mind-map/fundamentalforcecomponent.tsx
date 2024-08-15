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
    description: "Strongest force, keeps protons packed in atomic nucleus.",
    exchangeParticles: "Pions and other heavy particles",
    range: "10^-15 m (≈ diameter of a proton)",
    relativeStrength: "1",
  },
  {
    name: "Electromagnetic Force",
    description: "Acts between electric charges, includes electric and magnetic forces.",
    exchangeParticles: "Photons",
    range: "Infinite",
    relativeStrength: "7.3 x 10^-3",
  },
  {
    name: "Gravitational Force",
    description: "Force of attraction between all objects, weakest of the four.",
    exchangeParticles: "Graviton (not yet detected)",
    range: "Infinite",
    relativeStrength: "6 x 10^-39",
  },
  {
    name: "Weak Nuclear Force",
    description: "Responsible for radioactive decay, changes flavor of quarks.",
    exchangeParticles: "W+, W-, Z0 (vector bosons)",
    range: "10^-18 m",
    relativeStrength: "10^-13",
  },
];

const FundamentalForcesComponent: React.FC = () => {
  const [selectedForce, setSelectedForce] = useState<Force>(forces[0]);

  return (
    <div className="p-4 max-w-4xl mx-auto">
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