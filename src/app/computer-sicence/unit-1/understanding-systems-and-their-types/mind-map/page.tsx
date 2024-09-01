"use client"
import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import PlantUMLDiagram from '@/components/PlantUMLDiagram';

const Page = () => {
    const [zoomLevel1, setZoomLevel1] = useState(1);
    const [zoomLevel2, setZoomLevel2] = useState(1);
    const umlCode = `
@startmindmap
*[#FFD700] Systems
**[#FF6347] What is a System?
***_ Collection of interconnected components
***_ Works together for a specific purpose
***_ Accepts inputs, processes them, produces outputs
--[#32CD32] Artificial Systems
---[#90EE90] Communication Systems
----_ Telephone Networks: Long-distance voice communication
----_ Internet and Computer Networks: Global data sharing, digital communication
----_ Satellite Communication Systems: Long-distance, wireless communication
---[#90EE90] Information Systems
----_ Databases: Efficient data storage and retrieval
----_ Software Applications: Word processors, spreadsheets, video editing software
---[#90EE90] Transportation Systems
----_ Automobiles: Personal and mass transportation on roads
----_ Aircraft: Air travel including airplanes, helicopters, drones
----_ Trains and Rail Systems: Land transportation on tracks
----_ Subways and Mass Transit: Urban area mass movement
---[#90EE90] Energy Systems
----_ Power Plants: Electricity generation from coal, natural gas, nuclear, renewable resources
----_ Renewable Energy Systems: Solar panels, wind turbines, hydroelectric plants
----_ Electrical Grids: Power distribution infrastructure
---[#90EE90] Manufacturing Systems
----_ Factory Automation: Robotics, conveyor systems for automation
----_ Assembly Lines: Mass production systems
---[#90EE90] Healthcare Systems
----_ Hospital Information Systems (HIS): Patient records, billing, healthcare data management
----_ Medical Devices: MRI machines, X-ray equipment, artificial organs
++[#4682B4] Natural Systems
+++[#87CEEB] Ecosystems
++++_ Forest Ecosystems: Tropical rainforests with diverse plant and animal species
++++_ Aquatic Ecosystems: Freshwater lakes, rivers, marine environments like coral reefs
++++_ Grassland Ecosystems: African savanna with grazing animals like zebras and wildebeests
+++[#87CEEB] Weather Systems
++++_ Atmospheric interactions: Rainfall, wind patterns, temperature changes
+++[#87CEEB] Geological Systems
++++_ Plate Tectonics: Movement of Earth&apos;splates causing earthquakes and volcanic eruptions
++++_ Mountain Systems: Formed by tectonic plate collisions, e.g., Himalayas
+++[#87CEEB] Hydrological Systems
++++_ Water movement and distribution: Rivers, lakes, water cycle
+++[#87CEEB] Solar System
++++_ Sun, planets, moons, asteroids, comets interacting under gravity
+++[#87CEEB] Biological Systems
++++_ Human Body: Organs, tissues, cells, biochemical processes
++++_ Coral Reef: Ecosystem formed by coral colonies hosting various marine species
++++_ Rainforest Canopy: Upper layer of rainforest with specialized plants and animals
@endmindmap
`;
    const markdownContent = `
  # UML Diagram
  \`\`\`plantuml
  ${umlCode}
  \`\`\`
  `;
    const mermaidContainerRef1 = useRef(null);
    const mermaidContainerRef2 = useRef(null);

    useEffect(() => {
        mermaid.initialize({ startOnLoad: true });
        mermaid.contentLoaded();
    }, []);

    const zoomIn2 = () => setZoomLevel2(prev => Math.min(prev + 0.1, 2));
    const zoomOut2 = () => setZoomLevel2(prev => Math.max(prev - 0.1, 0.5));

    return (
        <div className="p-4">
            <h2 className='text-xl mb-3 font-bold'>1.2 Understanding Systems and Their Types</h2>
            <table className="min-w-full border border-gray-300 mb-6">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2">System Type</th>
                        <th className="border border-gray-300 p-2">Sub-Category</th>
                        <th className="border border-gray-300 p-2">Examples</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 p-2 align-top">Natural Systems</td>
                        <td className="border border-gray-300 p-2 align-top">Ecosystems</td>
                        <td className="border border-gray-300 p-2">
                            <ul className="list-disc list-inside">
                                <li>Forest Ecosystems: Tropical rainforests with diverse plant and animal species</li>
                                <li>Aquatic Ecosystems: Freshwater lakes, rivers, marine environments like coral reefs</li>
                                <li>Grassland Ecosystems: African savanna with grazing animals like zebras and wildebeests</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2 align-top"></td>
                        <td className="border border-gray-300 p-2 align-top">Weather Systems</td>
                        <td className="border border-gray-300 p-2">
                            <ul className="list-disc list-inside">
                                <li>Atmospheric interactions: Rainfall, wind patterns, temperature changes</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2 align-top"></td>
                        <td className="border border-gray-300 p-2 align-top">Geological Systems</td>
                        <td className="border border-gray-300 p-2">
                            <ul className="list-disc list-inside">
                                <li>Plate Tectonics: Movement of Earth&apos;s plates causing earthquakes and volcanic eruptions</li>
                                <li>Mountain Systems: Formed by tectonic plate collisions, e.g., Himalayas</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2 align-top"></td>
                        <td className="border border-gray-300 p-2 align-top">Hydrological Systems</td>
                        <td className="border border-gray-300 p-2">
                            <ul className="list-disc list-inside">
                                <li>Water movement and distribution: Rivers, lakes, water cycle</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2 align-top"></td>
                        <td className="border border-gray-300 p-2 align-top">Solar System</td>
                        <td className="border border-gray-300 p-2">
                            <ul className="list-disc list-inside">
                                <li>Sun, planets, moons, asteroids, comets interacting under gravity</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2 align-top"></td>
                        <td className="border border-gray-300 p-2 align-top">Biological Systems</td>
                        <td className="border border-gray-300 p-2">
                            <ul className="list-disc list-inside">
                                <li>Human Body: Organs, tissues, cells, biochemical processes</li>
                                <li>Coral Reef: Ecosystem formed by coral colonies hosting various marine species</li>
                                <li>Rainforest Canopy: Upper layer of rainforest with specialized plants and animals</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2 align-top">Artificial Systems</td>
                        <td className="border border-gray-300 p-2 align-top">Communication Systems</td>
                        <td className="border border-gray-300 p-2">
                            <ul className="list-disc list-inside">
                                <li>Telephone Networks: Long-distance voice communication</li>
                                <li>Internet and Computer Networks: Global data sharing, digital communication</li>
                                <li>Satellite Communication Systems: Long-distance, wireless communication</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2 align-top"></td>
                        <td className="border border-gray-300 p-2 align-top">Information Systems</td>
                        <td className="border border-gray-300 p-2">
                            <ul className="list-disc list-inside">
                                <li>Databases: Efficient data storage and retrieval</li>
                                <li>Software Applications: Word processors, spreadsheets, video editing software</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2 align-top"></td>
                        <td className="border border-gray-300 p-2 align-top">Transportation Systems</td>
                        <td className="border border-gray-300 p-2">
                            <ul className="list-disc list-inside">
                                <li>Automobiles: Personal and mass transportation on roads</li>
                                <li>Aircraft: Air travel including airplanes, helicopters, drones</li>
                                <li>Trains and Rail Systems: Land transportation on tracks</li>
                                <li>Subways and Mass Transit: Urban area mass movement</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2 align-top"></td>
                        <td className="border border-gray-300 p-2 align-top">Energy Systems</td>
                        <td className="border border-gray-300 p-2">
                            <ul className="list-disc list-inside">
                                <li>Power Plants: Electricity generation from coal, natural gas, nuclear, renewable resources</li>
                                <li>Renewable Energy Systems: Solar panels, wind turbines, hydroelectric plants</li>
                                <li>Electrical Grids: Power distribution infrastructure</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2 align-top"></td>
                        <td className="border border-gray-300 p-2 align-top">Manufacturing Systems</td>
                        <td className="border border-gray-300 p-2">
                            <ul className="list-disc list-inside">
                                <li>Factory Automation: Robotics, conveyor systems for automation</li>
                                <li>Assembly Lines: Mass production systems</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2 align-top"></td>
                        <td className="border border-gray-300 p-2 align-top">Healthcare Systems</td>
                        <td className="border border-gray-300 p-2">
                            <ul className="list-disc list-inside">
                                <li>Hospital Information Systems (HIS): Patient records, billing, healthcare data management</li>
                                <li>Medical Devices: MRI machines, X-ray equipment, artificial organs</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="p-4">
                {/* Table content remains the same */}
                <PlantUMLDiagram code={umlCode} />

            </div>
        </div>
    );
};

export default Page;
