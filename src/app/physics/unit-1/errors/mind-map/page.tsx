"use client";

import React, { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import PlantUMLDiagram from "@/components/PlantUMLDiagram";

const Page: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'table' | 'mindmap'>('table');
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const mermaidContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    mermaid.contentLoaded();
  }, []);

  useEffect(() => {
    if (mermaidContainerRef.current) {
      mermaid.contentLoaded();
    }
  }, [zoomLevel]);

  const zoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.1, 0.5));
  const zoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.1, 2));

  const umlCode = `
   @startmindmap
<style>
mindmapDiagram {
  node {
    BackgroundColor lightblue
    BorderColor darkblue
    FontColor navy
    FontSize 14
  }
  :depth(1) {
    BackgroundColor pink
    BorderColor red
  }
  :depth(2) {
    BackgroundColor lightgreen
    BorderColor green
  }
  :depth(3) {
    BackgroundColor lightyellow
    BorderColor orange
  }
  :depth(4) {
    BackgroundColor lavender
    BorderColor purple
  }
}
</style>
* Errors
** Systematic Errors
***:Instrumental errors: imperfections in the design
or calibration of the measuring instrument, zero errors;
***:Imperfections in experimental technique: changes in external
conditions like temperature, humidity, or wind velocity;
*** Personal Errors
**** Arise from individual bias, improper setup, or carelessness.
** Random Errors
*** Unpredictable and uncontrollable errors
*** Caused by fluctuations in experimental conditions, imperfections in measuring instruments
*** Introduced by variability in technique or reaction time
****:Errors due to changes in external conditions like
temperature, humidity, or wind velocity.;
*** Minimization:
**** take repeated measurements
**** use statistical analysis
**** Finding the mean of multiple measurements
@endmindmap
  `;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-indigo-800 mb-8">Errors in Measurements</h1>
        
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="flex border-b border-gray-200">
            <button
              className={`flex-1 py-4 px-6 text-lg font-medium focus:outline-none ${
                activeTab === 'table' ? 'bg-indigo-600 text-white' : 'text-gray-500 hover:text-indigo-600'
              }`}
              onClick={() => setActiveTab('table')}
            >
              Table View
            </button>
            <button
              className={`flex-1 py-4 px-6 text-lg font-medium focus:outline-none ${
                activeTab === 'mindmap' ? 'bg-indigo-600 text-white' : 'text-gray-500 hover:text-indigo-600'
              }`}
              onClick={() => setActiveTab('mindmap')}
            >
              Mind Map
            </button>
          </div>
          
          <div className="p-6">
            {activeTab === 'table' && (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-indigo-600">
                    <tr>
                      {['Error Type', 'Description', 'Example'].map((header) => (
                        <th key={header} className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      ['Systematic Errors', 'Consistently occur in one direction, either positive or negative.', 'A scale that consistently reads 0.5 grams too high.'],
                      ['Instrumental Errors', 'Result from imperfections in the design or calibration of the measuring instrument.', 'A thermometer that consistently reads 2°C too low.'],
                      ['Imperfections in Experimental Technique', 'Errors due to changes in external conditions like temperature, humidity, or wind velocity.', 'Variability in measurements due to fluctuating room temperature.'],
                      ['Personal Errors', 'Arise from individual bias, improper setup, or carelessness.', 'A scientist consistently reading the meniscus of a liquid at the wrong point.'],
                      ['Random Errors', 'Unpredictable and uncontrollable errors.', 'Slight variations in measurements due to minor fluctuations in experimental conditions.'],
                      ['Causes of Random Errors', 'Fluctuations in experimental conditions, imperfections in measuring instruments, or variability in technique.', 'Small changes in air pressure affecting the measurements.'],
                      ['Minimizing Random Errors', 'Take repeated measurements and use statistical analysis.', 'Averages of multiple readings to reduce the impact of random fluctuations.'],
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        {row.map((cell, cellIdx) => (
                          <td key={cellIdx} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            
            {activeTab === 'mindmap' && (
              <div className="relative">
                <div className="flex justify-end space-x-2 mb-4">
                  <button onClick={zoomOut} className="bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700 transition-colors">
                    Zoom Out
                  </button>
                  <button onClick={zoomIn} className="bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700 transition-colors">
                    Zoom In
                  </button>
                </div>
                <div
                  ref={mermaidContainerRef}
                  style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top left' }}
                >
                  <PlantUMLDiagram code={umlCode} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;