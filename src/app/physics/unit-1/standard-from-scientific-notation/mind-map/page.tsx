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
*:Standard Form /
Scientific Notation;
left side
**:Width of
Observable Universe;
***:Standard Form:
880,000,000,000,000,000,000,000,000
meters;
*** Scientific Notation: 8.8 × 10^26 meters
*** Mantissa: 8.8
*** Exponent: 26
right side
** Mass of Earth
*** Standard Form: 5,980,000,000,000,000,000,000,000 kg
*** Scientific Notation: 5.98 × 10^24 kg
*** Mantissa: 5.98
*** Exponent: 24
** Diameter of a Hydrogen Nucleus
*** Standard Form: 0.0000000000000017 meters
*** Scientific Notation: 1.7 × 10^-15 meters
*** Mantissa: 1.7
*** Exponent: -15
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
        <div className="max-w-7xl mx-auto bg-white px-8 shadow-xl rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:px-6">
          </div>
          <h1 className="text-3xl font-bold mb-6">Standard Form / Scientific Notation</h1>

          <p className="mb-4">
            In physics, we often encounter numbers that are either very small or very large.
            For example, the width of the observable universe is approximately
            880,000,000,000,000,000,000,000,000 meters (88 with 25 zeros).
            Using such large numbers frequently can be time-consuming and prone to error.
          </p>

          <p className="mb-4">
            Scientific notation provides a convenient way to write very large or small numbers using powers of ten.
            This notation simplifies the representation and calculation with such numbers.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">Scientific Notation</h2>

          <p className="mb-4">
            Scientific notation represents a number as the product of a mantissa (a number greater than 1 and less than 10)
            and a power of 10 (the exponent). The general form is:
          </p>

          <pre className="bg-gray-100 p-4 rounded mb-4">
            number = mantissa × 10^exponent
          </pre>

          <p className="mb-4">For example:</p>

          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">
              The width of the observable universe can be written as 8.8 × 10<sup>26</sup> meters, where &apos;8.8&apos; is the mantissa and &apos;26&apos; is the exponent.
            </li>
            <li className="mb-2">
              The mass of Earth is 5,980,000,000,000,000,000,000,000 kg, which can be written as 5.98 × 10<sup>24</sup> kg.
            </li>
            <li>
              The diameter of a hydrogen nucleus is about 0.0000000000000017 meters, which can be written as 1.7 × 10<sup>-15</sup> meters.
            </li>
          </ul>

          <div className="overflow-x-auto mb-9">
            <table className="min-w-full bg-white border">
              <thead>
                <tr>
                  <th className="px-4 py-2 border">Example</th>
                  <th className="px-4 py-2 border">Standard Form</th>
                  <th className="px-4 py-2 border">Scientific Notation</th>
                  <th className="px-4 py-2 border">Mantissa</th>
                  <th className="px-4 py-2 border">Exponent</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border">Width of the observable universe</td>
                  <td className="px-4 py-2 border">880,000,000,000,000,000,000,000,000 meters</td>
                  <td className="px-4 py-2 border">8.8 × 10<sup>26</sup> meters</td>
                  <td className="px-4 py-2 border">8.8</td>
                  <td className="px-4 py-2 border">26</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Mass of Earth</td>
                  <td className="px-4 py-2 border">5,980,000,000,000,000,000,000,000 kg</td>
                  <td className="px-4 py-2 border">5.98 × 10<sup>24</sup> kg</td>
                  <td className="px-4 py-2 border">5.98</td>
                  <td className="px-4 py-2 border">24</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Diameter of a hydrogen nucleus</td>
                  <td className="px-4 py-2 border">0.0000000000000017 meters</td>
                  <td className="px-4 py-2 border">1.7 × 10<sup>-15</sup> meters</td>
                  <td className="px-4 py-2 border">1.7</td>
                  <td className="px-4 py-2 border">-15</td>
                </tr>
              </tbody>
            </table>
          </div>
          <PlantUMLDiagram code={umlCode} />
        </div>
      </div>

    </div>
  );
};

export default Page;