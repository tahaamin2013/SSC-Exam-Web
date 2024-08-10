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
*:Physical and
Non-Physical
Quantities;
  right side
**:Physical
Quantities;
*** Definition
****:Quantifiable and measurable
(e.g., length, mass, time);
*** Examples
**** Length (measured in meters)
**** Mass (measured in kilograms)
**** Time (measured in seconds)
**** Density
**** Temperature
*** Base and Derived Quantities
**** Base Quantities
***** Mass
***** Length
***** Time
**** Derived Quantities
*****:Obtained by
multiplying
or dividing
base quantities;
left side
** Non-Physical Quantities
*** Definition
****:Cannot be measured
in standard
units;
*** Examples
**** Taste
**** Feeling
**** Color
** Point to Ponder
***:Measurement involves
comparing to a standard;
*** Unit is the standard used for comparison
*** Example: Length of 1.65 meters
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
          <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="px-4 py-5 sm:px-6">
              <h1 className="text-3xl font-bold leading-6 text-gray-900">Physical and Non-Physical Quantities</h1>
            </div>
            <div className="border-t border-gray-200">
              <div className="px-4 py-5 sm:px-6">
              </div>
              <div className="overflow-x-auto">
                <table className="w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Physical Quantities</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Quantifiable and measurable quantities like length, mass, time, density, and temperature.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Base Quantities</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Fundamental quantities such as mass, length, and time. All other physical quantities are derived from these.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Derived Quantities</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Quantities obtained by multiplying or dividing base quantities.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Non-Physical Quantities</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Cannot be measured in standard units. Examples include taste, feeling, and color.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Point to Ponder</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Measurement involves comparing to a standard. Example: Length of 1.65 meters (1.65 is the numerical magnitude, meter is the unit).
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <PlantUMLDiagram code={umlCode} />
        </div>
      </div>

    </div>
  );
};

export default Page;
