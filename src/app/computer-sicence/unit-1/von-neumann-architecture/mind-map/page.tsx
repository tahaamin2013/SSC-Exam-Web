"use client"
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
*[#Orange] Von Neumann Architecture
left side
**[#lightgreen] Central Processing Unit (CPU)
***[#FFBBCC] Arithmetic and Logic Unit (ALU)
***[#FFBBCC] Control Unit (CU)
****[#lightblue] Instruction Decoder
****[#lightblue] Timing and Control Logic
****[#lightblue] Instruction Register
***[#FFBBCC] Registers
****[#lightblue] Memory Address Register (MAR)
****[#lightblue] Memory Data Register (MDR)
****[#lightblue] Accumulator (AC)
****[#lightblue] Program Counter (PC)
****[#lightblue] Current Instruction Register (CIR)
***[#FFBBCC] L1 Cache
***[#FFBBCC] L2 Cache
right side
**[#lightgreen] Buses
***[#FFBBCC] Address Bus
***[#FFBBCC] Data Bus
***[#FFBBCC] Control Bus
**[#lightgreen] Memory Unit
***[#FFBBCC] RAM (Random Access Memory)
***[#FFBBCC] Cache Memory
**[#lightgreen] Input/Output (I/O) Controller
@endmindmap
`;
    const umlCode3 = `
@startmindmap
<style>
mindmapDiagram {
    .cpu {
        BackgroundColor lightblue
    }
    .alu {
        BackgroundColor lightgreen
    }
    .cu {
        BackgroundColor pink
    }
    .buses {
        BackgroundColor yellow
    }
    .memory {
        BackgroundColor lightcoral
    }
    .io {
        BackgroundColor lightskyblue
    }
}
</style>
* Von Neumann Architecture
** Central Processing Unit (CPU) <<cpu>>
*** ALU
*** Control Unit
*** Registers
**** MAR
**** MDR
**** AC
**** PC
**** CIR
*** L1 Cache
*** L2 Cache
left side
** Arithmetic and Logic Unit (ALU) <<alu>>
*** Addition
*** Subtraction
*** Multiplication
*** Division
*** Comparisons
*** Bitwise operations
** Control Unit (CU) <<cu>>
*** Controls ALU
*** Manages memory operations
*** Coordinates I/O operations
*** Provides timing and control signals
right side
** Buses <<buses>>
*** Address Bus
*** Data Bus
*** Control Bus
** Memory Unit <<memory>>
*** RAM
*** Cache Memory
** Input/Output (I/O) Controller <<io>>
*** Handles data transfers
*** Command executions for peripherals
@endmindmap
`;


    const umlCode2 = `
@startmindmap
<style>
mindmapDiagram {
    .control_unit {
        BackgroundColor lightblue
    }
    .alu {
        BackgroundColor lightgreen
    }
    .memory {
        BackgroundColor pink
    }
    .io {
        BackgroundColor lightyellow
    }
    .bus {
        BackgroundColor lightgray
    }
}
</style>
* Von Neumann Architecture
left side
** Control Unit <<control_unit>>
*** Instruction Register
*** Program Counter
*** Control Circuits
** Arithmetic Logic Unit (ALU) <<alu>>
*** Arithmetic Operations
*** Logical Operations
right side
** Memory <<memory>>
*** RAM
*** ROM
** Input/Output <<io>>
*** Input Devices
*** Output Devices
** Bus System <<bus>>
*** Data Bus
*** Address Bus
*** Control Bus
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
    const diagramDefinition = `
graph TD
    A[Von Neumann Architecture]
    A --> B[CPU]
    A --> C[Memory Unit]
    A --> D[I/O Controller]
    A --> E[Buses]

    B --> B1[ALU]
    B --> B2[Control Unit]
    B --> B3[Registers]
    B3 --> B3a[MAR]
    B3 --> B3b[MDR]
    B3 --> B3c[AC]
    B3 --> B3d[PC]
    B3 --> B3e[CIR]
    B --> B4[L1 Cache]
    B --> B5[L2 Cache]

    C --> C1[RAM]
    C --> C2[Cache Memory]

    E --> E1[Address Bus]
    E --> E2[Data Bus]
    E --> E3[Control Bus]

    D --> D1[External Devices]
    `;
    return (
        <div className="p-6 bg-white text-gray-900">
            <h1 className="text-3xl font-bold mb-6">1.4 Von Neumann Architecture</h1>

            <div className="overflow-x-auto mb-8">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 border-b">Component</th>
                            <th className="py-2 px-4 border-b">Description</th>
                            <th className="py-2 px-4 border-b">Subcomponents/Functions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">Central Processing Unit (CPU)</td>
                            <td className="py-2 px-4 border-b">Core component executing instructions</td>
                            <td className="py-2 px-4 border-b">ALU, Control Unit, Registers (MAR, MDR, AC, PC, CIR), L1 Cache, L2 Cache</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">Arithmetic and Logic Unit (ALU)</td>
                            <td className="py-2 px-4 border-b">Performs arithmetic and logical operations</td>
                            <td className="py-2 px-4 border-b">Addition, subtraction, multiplication, division, comparisons, bitwise operations</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">Control Unit (CU)</td>
                            <td className="py-2 px-4 border-b">Orchestrates overall operation</td>
                            <td className="py-2 px-4 border-b">Controls ALU, manages memory operations, coordinates I/O operations, provides timing and control signals</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">Buses</td>
                            <td className="py-2 px-4 border-b">Communication pathways</td>
                            <td className="py-2 px-4 border-b">Address Bus, Data Bus, Control Bus</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">Memory Unit</td>
                            <td className="py-2 px-4 border-b">Stores data and instructions</td>
                            <td className="py-2 px-4 border-b">RAM, Cache Memory</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">Input/Output (I/O) Controller</td>
                            <td className="py-2 px-4 border-b">Manages data flow between CPU and external devices</td>
                            <td className="py-2 px-4 border-b">Handles data transfers and command executions for peripherals</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <PlantUMLDiagram code={umlCode} />
            <PlantUMLDiagram code={umlCode2} />
            <PlantUMLDiagram code={umlCode3} />

        </div>
    )
}

export default Page