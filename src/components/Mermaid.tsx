"use client";
import React, { useEffect } from 'react';
import mermaid from 'mermaid';

const Page = () => {
    useEffect(() => {
        mermaid.initialize({ startOnLoad: true });
        mermaid.contentLoaded();
    }, []);

    const diagramDefinition = `
        graph TD
            subgraph "Bus Architecture"
                BA1[Data Bus] --> BA2[Address Bus]
                BA2 --> BA3[Control Bus]
                                                                                                                                                                                                    
            subgraph "Data Paths"
                DP1[Internal Address Bus] --> DP2[Internal Data Bus]
                DP2 --> DP3[Internal Control Bus]
            end
            subgraph "Registers"
                R1[Memory Address Register (MAR)] --> R2[Memory Data Register (MDR)]
                R2 --> R3[Accumulator (AC)]
                R3 --> R4[Program Counter (PC)]
                R4 --> R5[Current Instruction Register (CIR)]
            end
            subgraph "Memory Hierarchy"
                MH1[Cache Memory] --> MH2[RAM]
                MH2 --> MH3[Secondary Storage]
            end
            subgraph "Instruction Cycle"
                IC1[Fetching] --> IC2[Decoding]
                IC2 --> IC3[Executing]
                IC3 --> IC4[Storing]
            end
            subgraph "Pipeline Processing"
                PP[Pipeline Stages]
            end
            subgraph "Interrupts and I/O"
                IO[Interrupt Handling]
            end
            subgraph "Parallelism"
                P1[Multi-core CPUs] --> P2[Distributed Systems]
            end
            
            BA1 --> DP1
            BA2 --> DP2
            BA3 --> DP3
            DP1 --> R1
            DP2 --> R2
            DP3 --> R3
            R1 --> MH1
            R2 --> MH2
            R3 --> MH3
            MH1 --> IC1
            MH2 --> IC2
            MH3 --> IC3
            IC1 --> IC2
            IC2 --> IC3
            IC3 --> IC4
            IC4 --> PP
            PP --> IO
            IO --> P1
            IO --> P2
    `;

    return (
        <div>
            <div className="container mx-auto p-4">
                <div className="mermaid">
                    {diagramDefinition}
                </div>
                <table className="min-w-full bg-white border border-gray-300 mt-4">
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
                                <ul>
                                    <li>Data Bus</li>
                                    <li>Address Bus</li>
                                    <li>Control Bus</li>
                                </ul>
                            </td>
                            <td className="py-2 px-4 border-b">System of communication pathways for data and control signals</td>
                            <td className="py-2 px-4 border-b">Transfers data and control signals between components</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">Data Paths</td>
                            <td className="py-2 px-4 border-b">
                                <ul>
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
                                <ul>
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
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">Memory Hierarchy</td>
                            <td className="py-2 px-4 border-b">
                                <ul>
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
                                <ul>
                                    <li>Fetching</li>
                                    <li>Decoding</li>
                                    <li>Executing</li>
                                    <li>Storing</li>
                                </ul>
                            </td>
                            <td className="py-2 px-4 border-b">Process of executing a program&apos;s instructions</td>
                            <td className="py-2 px-4 border-b">Fetches, decodes, executes, and stores instructions</td>
                        </tr>
                        <tr>
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
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">Parallelism</td>
                            <td className="py-2 px-4 border-b">
                                <ul>
                                    <li>Multi-core CPUs</li>
                                    <li>Distributed Systems</li>
                                </ul>
                            </td>
                            <td className="py-2 px-4 border-b">Simultaneous execution of multiple tasks to improve processing speed</td>
                            <td className="py-2 px-4 border-b">Enhances processing power and efficiency</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Page;
