"use client";
import React, { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import Image from 'next/image'

const Page = () => {
  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    mermaid.contentLoaded();
  }, []);
  const umlCode = `
@startmindmap
* Precision and Accuracy
** Precision
*** Consistency
*** Repeatability
*** Consistently reads the same value
*** tightly grouped cluster of darts
*** Tightly Grouped
*** measurement process is consistent
*** Increasing the number of significant digits increased perceived precision?
*** Significant digits indicate the level of precision in a measurement
*** Significant digits in a number, contribute to its precision
*** The degree of agreement between repeated measurements
*** Example: Scale with consistent but inaccurate readings
** Not Precision
*** vary widely
*** Measurements are scattered
** Accuracy
*** Closeness to True Value
*** Average to the true value
*** Absence of Systematic Errors
*** measurement process is reliable
*** How close a measured value is to the true value
*** Example: Thermometer consistently off by a fixed amount
** Not Accurate
*** Consistently off-center
*** Cluster of darts not hitting the bullseye
** Differences
*** Precision: Consistent Results
*** Accuracy: Close to True Value
** Scenarios
*** Accurate and Precise: Bullseye (ideal scenario for measurements)
*** Accurate but Not Precise: Scattered Around Center
*** Precise but Not Accurate: Tight Cluster Off-Center
** Practical Application
*** Calibration
*** Experimental Conditions
*** Sources of Error
@endmindmap
`;
  const [zoomLevel1, setZoomLevel1] = useState(1);
  const [zoomLevel2, setZoomLevel2] = useState(1);
  const mermaidContainerRef = useRef<HTMLDivElement>(null);

  const mermaidContainerRef1 = useRef<HTMLDivElement>(null);
  const mermaidContainerRef2 = useRef<HTMLDivElement>(null);
  const zoomOut1 = () => setZoomLevel1((prev) => Math.max(prev - 0.1, 0.5));

  const zoomIn1 = () => setZoomLevel1((prev) => Math.min(prev + 0.1, 2));
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
          <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Precision and Accuracy</h1>
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="py-2 px-4 border-b border-gray-300">Aspect</th>
                  <th className="py-2 px-4 border-b border-gray-300">
                    Definition
                  </th>
                  <th className="py-2 px-4 border-b border-gray-300">
                    Example
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-300 font-semibold">
                    Precision
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    Consistency and repeatability of measurements
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    Scale that always shows the same weight (e.g., 0.1 kg
                    variation)
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-300 font-semibold">
                    Accuracy
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    Closeness of a measured value to the true value
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    Thermometer consistently reads 2°C higher than actual
                    temperature
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-300 font-semibold">
                    Differences
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    Precision is about consistency; Accuracy is about closeness
                    to the true value
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    Precision: Tight cluster; Accuracy: Center of the target
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-300 font-semibold">
                    Scenarios
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    Various combinations of precision and accuracy
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    Accurate and precise, accurate but not precise, precise but
                    not accurate
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-300 font-semibold">
                    Practical Application
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    Requires calibration, control of conditions, and error
                    consideration
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    Measurement instruments and experimental setups
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <PlantUMLDiagram code={umlCode} />
          <Image src="/dard-land-bullseye.png" width={600} height={600} alt="All four darts land in the bullseye Image" />
        </div>
      </div>
    </div>
  );
};

export default Page;
