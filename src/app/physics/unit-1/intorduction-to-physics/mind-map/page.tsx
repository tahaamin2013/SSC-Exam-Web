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
* Physical Quantities and Measurement
left side
** Introduction to Physics
*** In the 19th century, physical sciences were divided into five distinct disciplines:
**** Physics
**** Chemistry
**** Astronomy
**** Geology
**** Meteorology
*** Physics studies matter, energy, and their interactions
*** Laws and principles of physics help us understand nature
** Physics in Science
*** Foundation of all sciences
*** Essential for studying biology, chemistry, and other natural sciences
*** Examples:
**** Biology: Blood flow in cardiovascular system
**** Chemistry: Atomic interactions and chemical reactions
** Physics and Technology
*** Deeply rooted in physics principles
*** Everyday devices:
**** Computers
**** Smartphones
**** Internet
*** Advanced technologies:
**** Rockets
**** Magnetic levitation trains
**** Medical innovations (e.g., PET scans, cancer-fighting nanobots)
right side
** Branches of Physics
*** Major branches:
**** Mechanics
**** Optics
**** Oscillation and Waves
**** Thermodynamics
**** Electromagnetism
**** Astrophysics
**** Quantum Physics
**** Atomic Physics
**** Nuclear Physics
** Did You Know?
*** The cubit was used by Egyptians to build the pyramids
*** Measurement: From elbow to the tip of the middle finger when the arm is extended
** The Role of Mathematics in Physics
*** Strong connection with mathematics
*** Mathematics helps to understand nature and the physical world
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
            <h1 className="text-3xl font-bold leading-6 text-gray-900">Physical Quantities and Measurement</h1>
          </div>
          <div className="border-t border-gray-200">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Section</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Content</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Introduction to Physics</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      In the 19th century, physical sciences were divided into five distinct disciplines: physics, chemistry, astronomy, geology, and meteorology. The most fundamental of these is physics. In physics, we study matter, energy, and their interactions. The laws and principles of physics help us understand nature.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Physics in Science</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Physics is the foundation of all sciences. To study biology, chemistry, or any other natural science, a firm understanding of the principles of physics is essential. Examples include understanding blood flow in biology and atomic interactions in chemistry.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Physics and Technology</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Technology is deeply rooted in physics principles. Everyday devices such as computers, smartphones, and the internet rely on physics. Advanced technologies like rockets, magnetic levitation trains, and medical innovations are based on physics.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Branches of Physics</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Major branches of physics include Mechanics, Optics, Oscillation and Waves, Thermodynamics, Electromagnetism, Astrophysics, Quantum Physics, Atomic Physics, and Nuclear Physics.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Did You Know?</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      The cubit was the measurement unit used by Egyptians to build the pyramids. It is the distance from your elbow to the tip of your middle finger when your arm is extended.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">The Role of Mathematics in Physics</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Physics has a strong connection with mathematics. Mathematics is used as a tool to understand nature and the physical world. Learning physics requires a solid understanding of mathematical concepts.
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
  );
};

export default Page;
