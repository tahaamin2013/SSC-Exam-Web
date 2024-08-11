"use client";
import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import PlantUMLDiagram from '@/components/PlantUMLDiagram';

const Page = () => {
  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    mermaid.contentLoaded();
  }, []);
  const umlCode = `
@startmindmap
*:International System
of Units (SI);
left side
**:Introduction to
SI Units;
***:Definition: System
of Units
for all physical quantities;
***:Known as "Système
International" (SI);
***:Meaning:"International
System of Units";
** SI Base Units
*** Length (l)
**** Unit: Meter (m)
*** Mass (m)
**** Unit: Kilogram (kg)
*** Time (t)
**** Unit: Second (s)
*** Electric Current (I)
**** Unit: Ampere (A)
*** Temperature (T)
**** Unit: Kelvin (K)
*** Amount of Substance (n)
**** Unit: Mole (mol)
*** Light Intensity (I)
**** Unit: Candela (cd)
right side
**:SI Derived
Units;
***:Derived from
Base Units;
**** Area (A)
***** Unit: Square meter (m²)
**** Volume (V)
***** Unit: Cubic meter (m³)
**** Speed, Velocity (v)
*****:Unit: Meter per
second (m/s);
**** Acceleration (a)
*****:Unit: Meter per
second squared (m/s²);
**** Density - rho (ρ)
*****:Unit: Kilogram per
cubic meter (kg/m³);
**** Force (F)
***** Unit: Newton (N) (kg·m/s²)
**** Pressure (P)
***** Unit: Pascal (Pa) (kg/m·s²)
**** Energy (E, U)
***** Unit: Joule (J) (kg·m²/s²)
**** Electric Charge
***** Unit: Coulomb (C)
**** Electrical Resistance
***** Unit: Ohm (Ω)
@endmindmap

`;
  const [zoomLevel1, setZoomLevel1] = useState(1);
  const [zoomLevel2, setZoomLevel2] = useState(1);
  const mermaidContainerRef = useRef<HTMLDivElement>(null);

  const mermaidContainerRef1 = useRef<HTMLDivElement>(null);
  const mermaidContainerRef2 = useRef<HTMLDivElement>(null);
  const zoomOut1 = () => setZoomLevel1(prev => Math.max(prev - 0.1, 0.5));

  const zoomIn1 = () => setZoomLevel1(prev => Math.min(prev + 0.1, 2));
  useEffect(() => {
    if (mermaidContainerRef1.current) {
      mermaid.contentLoaded();
    }
  }, [zoomLevel1]);

  useEffect(() => {
    if (mermaidContainerRef2.current) {
      mermaid.contentLoaded();
    }
  }, [zoomLevel2]);
  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:px-6">
          </div>


          <div className="px-4 py-5 sm:px-6">
            <h1 className="text-3xl font-bold leading-6 text-gray-900">International System of Units (SI)</h1>
          </div>
          <div className="border-t border-gray-200">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-xl font-semibold text-gray-900">SI Base Units</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SI Base Quantity</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SI Base Unit</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Length (l)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Meter (m)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Mass (m)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Kilogram (kg)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Time (t)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Second (s)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Electric Current (I)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Ampere (A)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Temperature (T)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Kelvin (K)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Amount of Substance (n)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mole (mol)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Light Intensity (I)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Candela (cd)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="border-t border-gray-200">
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-xl font-semibold text-gray-900">SI Derived Units</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Derived Quantity</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SI Derived Unit</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Area (A)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Square meter (m²)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Volume (V)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Cubic meter (m³)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Speed, Velocity (v)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Meter per second (m/s)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Acceleration (a)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Meter per second squared (m/s²)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Density (ρ)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Kilogram per cubic meter (kg/m³)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Force (F)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Newton (N) (kg·m/s²)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Pressure (P)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Pascal (Pa) (kg/m·s²)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Energy (E, U)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Joule (J) (kg·m²/s²)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <PlantUMLDiagram code={umlCode} />
        </div>
      </div>

    </div>
  );
};

export default Page;