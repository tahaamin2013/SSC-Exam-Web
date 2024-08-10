"use client"
import React, { useState } from 'react';
import Head from 'next/head';

const Section = ({ title, content }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-6 border-l-4 border-green-500 pl-4">
      <h2
        className="text-xl font-bold cursor-pointer hover:text-green-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title} {isOpen ? '▼' : '▶'}
      </h2>
      {isOpen && <div className="mt-2">{content}</div>}
    </div>
  );
};

const Table = ({ data, headers }: any) => (
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          {headers.map((header: any, index: any) => (
            <th key={index} className="py-2 px-4 border-b">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row: any, rowIndex: any) => (
          <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
            {row.map((cell: any, cellIndex: any) => (
              <td key={cellIndex} className="py-2 px-4 border-b">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default function SIUnitsNotes() {
  const baseUnits = [
    ['Length (l)', 'Meter (m)'],
    ['Mass (m)', 'Kilogram (kg)'],
    ['Time (t)', 'Second (s)'],
    ['Electric Current (I)', 'Ampere (A)'],
    ['Temperature (T)', 'Kelvin (K)'],
    ['Amount of Substance (n)', 'Mole (mol)'],
    ['Light Intensity (I)', 'Candela (cd)']
  ];

  const derivedUnits = [
    ['Area (A)', 'Square meter (m²)'],
    ['Volume (V)', 'Cubic meter (m³)'],
    ['Speed, Velocity (v)', 'Meter per second (m/s)'],
    ['Acceleration (a)', 'Meter per second squared (m/s²)'],
    ['Density (ρ)', 'Kilogram per cubic meter (kg/m³)'],
    ['Force (F)', 'Newton (N) (kg·m/s²)'],
    ['Pressure (P)', 'Pascal (Pa) (kg/m·s²)'],
    ['Energy (E, U)', 'Joule (J) (kg·m²/s²)']
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <Head>
        <title>International System of Units (SI) Notes</title>
      </Head>

      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
            International System of Units (SI)
          </h1>

          <Section
            title="Introduction to SI Units"
            content={
              <p>
                The International System of Units, known as &quot;Système International&quot; (SI) in French,
                is a complete set of units for all physical quantities. It stands for &quot;Système
                International d&apos;Unités,&quot; meaning &quot;International System of Units.&quot;
              </p>
            }
          />

          <Section
            title="SI Base Units"
            content={
              <div>
                <p className="mb-2">
                  In the SI system, seven physical quantities are chosen as base quantities.
                  These units are defined and standardized to ensure accurate and reproducible measurements.
                </p>
                <Table
                  headers={['SI Base Quantity', 'SI Base Unit']}
                  data={baseUnits}
                />
              </div>
            }
          />

          <Section
            title="SI Derived Units"
            content={
              <div>
                <p className="mb-2">
                  Units of derived quantities are obtained by multiplying and/or dividing base quantities.
                  In SI units, all other physical quantities can be derived from the seven base units.
                </p>
                <p className="mb-2">
                  For example:
                  <ul className="list-disc list-inside ml-4">
                    <li>Area: m² (square meters)</li>
                    <li>Velocity: m/s (meters per second)</li>
                    <li>Acceleration: m/s² (meters per second squared)</li>
                  </ul>
                </p>
                <p className="mb-2">
                  Some derived units are given special names and symbols. For instance, force has
                  the derived unit of &quot;kg·m/s²,&quot; which is named &quot;newton&quot; and symbolized as &quot;N.&quot;
                </p>
                <Table
                  headers={['Derived Quantity', 'SI Derived Unit']}
                  data={derivedUnits}
                />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}