"use client";
import React, { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import PlantUMLDiagram from "@/components/PlantUMLDiagram";

const Page = () => {
  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    mermaid.contentLoaded();
  }, []);
  const umlCode = `
@startmindmap
* Errors
** Systematic Errors
*** Instrumental errors: imperfections in the design or calibration of the measuring instrument, zero errors
*** Imperfections in experimental technique: changes in external conditions like temperature, humidity, or wind velocity
*** Personal errors: individual bias, improper setup, carelessness in observations
** Random Errors
*** Unpredictable and uncontrollable errors
*** Caused by fluctuations in experimental conditions, imperfections in measuring instruments
*** Introduced by variability in technique or reaction time
*** Minimization: take repeated measurements, use statistical analysis
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
          <div className="container mx-auto">
          <table className="min-w-full border-collapse border border-gray-300 bg-white shadow-md rounded-lg overflow-hidden">
    <thead className="bg-blue-600 text-white">
        <tr>
            <th className="border-b border-gray-200 px-6 py-3 text-left text-sm font-semibold">Error Type</th>
            <th className="border-b border-gray-200 px-6 py-3 text-left text-sm font-semibold">Description</th>
            <th className="border-b border-gray-200 px-6 py-3 text-left text-sm font-semibold">Example</th>
        </tr>
    </thead>
    <tbody className="divide-y divide-gray-200">
        <tr className="bg-gray-50 hover:bg-gray-100">
            <td className="px-6 py-4 text-sm text-gray-800">Systematic Errors</td>
            <td className="px-6 py-4 text-sm text-gray-600">Consistently occur in one direction, either positive or negative.</td>
            <td className="px-6 py-4 text-sm text-gray-600">A scale that consistently reads 0.5 grams too high.</td>
        </tr>
        <tr className="bg-white hover:bg-gray-100">
            <td className="px-6 py-4 text-sm text-gray-800">Instrumental Errors</td>
            <td className="px-6 py-4 text-sm text-gray-600">Result from imperfections in the design or calibration of the measuring instrument.</td>
            <td className="px-6 py-4 text-sm text-gray-600">A thermometer that consistently reads 2°C too low.</td>
        </tr>
        <tr className="bg-gray-50 hover:bg-gray-100">
            <td className="px-6 py-4 text-sm text-gray-800">Imperfections in Experimental Technique</td>
            <td className="px-6 py-4 text-sm text-gray-600">Errors due to changes in external conditions like temperature, humidity, or wind velocity.</td>
            <td className="px-6 py-4 text-sm text-gray-600">Variability in measurements due to fluctuating room temperature.</td>
        </tr>
        <tr className="bg-white hover:bg-gray-100">
            <td className="px-6 py-4 text-sm text-gray-800">Personal Errors</td>
            <td className="px-6 py-4 text-sm text-gray-600">Arise from individual bias, improper setup, or carelessness.</td>
            <td className="px-6 py-4 text-sm text-gray-600">A scientist consistently reading the meniscus of a liquid at the wrong point.</td>
        </tr>
        <tr className="bg-gray-50 hover:bg-gray-100">
            <td className="px-6 py-4 text-sm text-gray-800">Random Errors</td>
            <td className="px-6 py-4 text-sm text-gray-600">Unpredictable and uncontrollable errors.</td>
            <td className="px-6 py-4 text-sm text-gray-600">Slight variations in measurements due to minor fluctuations in experimental conditions.</td>
        </tr>
        <tr className="bg-white hover:bg-gray-100">
            <td className="px-6 py-4 text-sm text-gray-800">Causes of Random Errors</td>
            <td className="px-6 py-4 text-sm text-gray-600">Fluctuations in experimental conditions, imperfections in measuring instruments, or variability in technique.</td>
            <td className="px-6 py-4 text-sm text-gray-600">Small changes in air pressure affecting the measurements.</td>
        </tr>
        <tr className="bg-gray-50 hover:bg-gray-100">
            <td className="px-6 py-4 text-sm text-gray-800">Minimizing Random Errors</td>
            <td className="px-6 py-4 text-sm text-gray-600">Take repeated measurements and use statistical analysis.</td>
            <td className="px-6 py-4 text-sm text-gray-600">Averages of multiple readings to reduce the impact of random fluctuations.</td>
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
