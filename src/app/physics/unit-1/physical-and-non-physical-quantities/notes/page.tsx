"use client"
import React, { useState } from 'react';
import Head from 'next/head';

const Section = ({ title, content }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-6 border-l-4 border-blue-500 pl-4">
      <h2
        className="text-xl font-bold cursor-pointer hover:text-blue-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title} {isOpen ? '▼' : '▶'}
      </h2>
      {isOpen && <div className="mt-2">{content}</div>}
    </div>
  );
};

export default function PhysicalQuantitiesNotes() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <Head>
        <title>Physical and Non-Physical Quantities Notes</title>
      </Head>

      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Physical and Non-Physical Quantities
          </h1>

          <Section
            title="Physical and Non-Physical Quantities"
            content={
              <div>
                <p className="mb-2"><strong>Physical quantities:</strong> Can be measured (e.g., length, mass, time, density, temperature).</p>
                <p className="mb-2"><strong>Non-physical quantities:</strong> Cannot be measured in standard units (e.g., taste, feeling, color).</p>
                <p>Physical quantities can be defined and quantified, while non-physical quantities cannot.</p>
              </div>
            }
          />

          <Section
            title="Point to Ponder: Measurement"
            content={
              <div>
                <p className="mb-2">Measurement involves comparing an unknown physical quantity to a standard.</p>
                <p className="mb-2">Components of measurement:</p>
                <ul className="list-disc list-inside mb-2">
                  <li>Numerical magnitude</li>
                  <li>Unit</li>
                </ul>
                <p className="mb-2"><strong>Example:</strong> Length of 1.65 meters (1.65 is the magnitude, meter is the unit)</p>
                <p>To record a measurement:</p>
                <ol className="list-decimal list-inside">
                  <li>Choose an appropriate unit</li>
                  <li>Determine size using an instrument with a proper scale</li>
                </ol>
              </div>
            }
          />

          <Section
            title="Base and Derived Physical Quantities"
            content={
              <div>
                <p className="mb-2"><strong>Base (fundamental) physical quantities:</strong></p>
                <ul className="list-disc list-inside mb-2">
                  <li>Simplest forms of physical quantities (e.g., mass, length, time)</li>
                  <li>Selected because all other physical quantities can be derived from them</li>
                </ul>
                <p><strong>Derived physical quantities:</strong> Obtained by multiplying or dividing base physical quantities</p>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}