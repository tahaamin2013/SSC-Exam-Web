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
<style>
mindmapDiagram {
    .bus {
        BackgroundColor lightblue
    }
    .paths {
        BackgroundColor lightgreen
    }
    .registers {
        BackgroundColor pink
    }
    .memory {
        BackgroundColor lightyellow
    }
    .cycle {
        BackgroundColor lightcoral
    }
    .pipeline {
        BackgroundColor lightskyblue
    }
    .interrupts {
        BackgroundColor plum
    }
    .parallelism {
        BackgroundColor lightseagreen
    }
}
</style>
* Data Transmission in Computer Systems
** Bus Architecture <<bus>>
*** System Buses
**** Control Bus
**** Data Bus
**** Address Bus
*** Microprocessor Bus Architecture
**** Internal Address Bus
**** Internal Data Bus
**** Internal Control Bus
left side
** Data Paths <<paths>>
*** Internal CPU pathways
*** Connect ALU, registers, and cache
** Registers <<registers>>
*** Memory Address Register (MAR)
*** Memory Data Register (MDR)
*** Accumulator (AC)
*** Program Counter (PC)
*** Current Instruction Register (CIR)
right side
** Memory Hierarchy <<memory>>
*** Cache Memory
*** RAM
*** Secondary Storage
** Instruction Cycle <<cycle>>
*** Fetching
*** Decoding
*** Executing
*** Storing
** Pipeline Processing <<pipeline>>
*** Multiple instructions
*** Simultaneous processing
** Interrupts and I/O <<interrupts>>
*** Signal handling
*** I/O management
** Parallelism <<parallelism>>
*** Multi-core CPUs
*** Distributed Systems
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
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 border-b">Component</th>
                            <th className="py-2 px-4 border-b">Subcomponents</th>
                            <th className="py-2 px-4 border-b">Description</th>
                            <th className="py-2 px-4 border-b">Function</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">Bus Architecture</td>
                            <td className="py-2 px-4 border-b">
                                <ul className="list-disc list-inside">
                                    <li>Data Bus</li>
                                    <li>Address Bus</li>
                                    <li>Control Bus</li>
                                </ul>
                            </td>
                            <td className="py-2 px-4 border-b">System of communication pathways for data and control signals</td>
                            <td className="py-2 px-4 border-b">Transfers data and control signals between components</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="py-2 px-4 border-b font-semibold">Data Paths</td>
                            <td className="py-2 px-4 border-b">
                                <ul className="list-disc list-inside">
                                    <li>Internal Address Bus</li>
                                    <li>Internal Data Bus</li>
                                    <li>Internal Control Bus</li>
                                </ul>
                            </td>
                            <td className="py-2 px-4 border-b">Internal routes for data movement within the CPU</td>
                            <td className="py-2 px-4 border-b">Enables data movement within the processor</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">Registers</td>
                            <td className="py-2 px-4 border-b">
                                <ul className="list-disc list-inside">
                                    <li>Memory Address Register (MAR)</li>
                                    <li>Memory Data Register (MDR)</li>
                                    <li>Accumulator (AC)</li>
                                    <li>Program Counter (PC)</li>
                                    <li>Current Instruction Register (CIR)</li>
                                </ul>
                            </td>
                            <td className="py-2 px-4 border-b">Small, high-speed storage units within the CPU</td>
                            <td className="py-2 px-4 border-b">Facilitates rapid data access and manipulation</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="py-2 px-4 border-b font-semibold">Memory Hierarchy</td>
                            <td className="py-2 px-4 border-b">
                                <ul className="list-disc list-inside">
                                    <li>Cache Memory</li>
                                    <li>RAM</li>
                                    <li>Secondary Storage</li>
                                </ul>
                            </td>
                            <td className="py-2 px-4 border-b">Structured approach to balance speed and storage capacity</td>
                            <td className="py-2 px-4 border-b">Optimizes data access times and storage efficiency</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">Instruction Cycle</td>
                            <td className="py-2 px-4 border-b">
                                <ul className="list-disc list-inside">
                                    <li>Fetching</li>
                                    <li>Decoding</li>
                                    <li>Executing</li>
                                    <li>Storing</li>
                                </ul>
                            </td>
                            <td className="py-2 px-4 border-b">Process of executing a program&apos;s instructions</td>
                            <td className="py-2 px-4 border-b">Fetches, decodes, executes, and stores instructions</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="py-2 px-4 border-b font-semibold">Pipeline Processing</td>
                            <td className="py-2 px-4 border-b">-</td>
                            <td className="py-2 px-4 border-b">Technique to enhance efficiency by processing multiple instructions simultaneously</td>
                            <td className="py-2 px-4 border-b">Improves CPU utilization and speeds up execution</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">Interrupts and I/O</td>
                            <td className="py-2 px-4 border-b">-</td>
                            <td className="py-2 px-4 border-b">Signals for managing urgent events and I/O operations</td>
                            <td className="py-2 px-4 border-b">Handles interactions with peripheral devices</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="py-2 px-4 border-b font-semibold">Parallelism</td>
                            <td className="py-2 px-4 border-b">
                                <ul className="list-disc list-inside">
                                    <li>Multi-core CPUs</li>
                                    <li>Distributed Systems</li>
                                </ul>
                            </td>
                            <td className="py-2 px-4 border-b">Simultaneous execution of multiple tasks to improve processing speed</td>
                            <td className="py-2 px-4 border-b">Enhances data transmission speed and overall system performance</td>
                        </tr>
                    </tbody>
                </table>
                <PlantUMLDiagram code={umlCode} />
            </div>

        </div>
    );
};

export default Page;
