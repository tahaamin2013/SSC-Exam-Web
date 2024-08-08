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
    .terminology {
        BackgroundColor lightskyblue
    }
    .buildup {
        BackgroundColor lightgreen
    }
    .main {
        BackgroundColor lightpink
    }
    .volatile {
        BackgroundColor lightsalmon
    }
}
</style>
* Computer Memory
** Memory Terminology <<terminology>>
*** Bit
*** Byte
**** KB, MB, GB, TB, PB, EB
*** Memory Word
*** Word Size
** Memory Built-up and Retention Power <<buildup>>
*** Chip Memory
**** RAM
**** ROM
**** Cache Memory
**** Flash Memory Drives
**** Memory Cards
**** SSDs
*** Magnetic Memory
**** Magnetic Tapes
**** Magnetic Disks (HDDs)
*** Optical Memory
**** CDs
**** DVDs
**** Blu-ray Discs
left side
** Main Memory <<main>>
*** RAM
*** Cache Memory
*** ROM
** Volatile and Non-Volatile Memory <<volatile>>
*** Volatile Memory
**** RAM
**** Registers
**** Cache Memory
*** Non-Volatile Memory
**** ROM
**** Flash Memory
**** Magnetic Storage
**** Optical Storage
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
                            <th className="py-2 px-4 border-b">Category</th>
                            <th className="py-2 px-4 border-b">Type</th>
                            <th className="py-2 px-4 border-b">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold" rowSpan={4}>Memory Terminology</td>
                            <td className="py-2 px-4 border-b">Bit</td>
                            <td className="py-2 px-4 border-b">Smallest unit of memory, representing a binary digit (0 or 1)</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Byte</td>
                            <td className="py-2 px-4 border-b">Group of 8 bits, basic unit to store one character. Higher units: KB, MB, GB, TB, PB, EB</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Memory Word</td>
                            <td className="py-2 px-4 border-b">Smallest amount of data a computer can process as a unit</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Word Size</td>
                            <td className="py-2 px-4 border-b">Number of bits a CPU can process in a single operation (e.g., 32-bit, 64-bit)</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="py-2 px-4 border-b font-semibold" rowSpan={3}>Memory Built-up and Retention Power</td>
                            <td className="py-2 px-4 border-b">Chip Memory</td>
                            <td className="py-2 px-4 border-b">Fast memory in integrated circuits. Examples: RAM, ROM, Cache, Flash, Memory Cards, SSDs</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="py-2 px-4 border-b">Magnetic Memory</td>
                            <td className="py-2 px-4 border-b">Uses magnetized media. Examples: Magnetic Tapes, Magnetic Disks (HDDs)</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="py-2 px-4 border-b">Optical Memory</td>
                            <td className="py-2 px-4 border-b">Uses laser technology. Examples: CDs, DVDs, Blu-ray Discs</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold" rowSpan={3}>Main Memory</td>
                            <td className="py-2 px-4 border-b">RAM</td>
                            <td className="py-2 px-4 border-b">Volatile memory for temporary storage of data and instructions in use</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Cache Memory</td>
                            <td className="py-2 px-4 border-b">Smaller, faster volatile memory close to CPU for frequently used data</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">ROM</td>
                            <td className="py-2 px-4 border-b">Non-volatile memory for firmware and system software</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="py-2 px-4 border-b font-semibold" rowSpan={2}>Memory Types</td>
                            <td className="py-2 px-4 border-b">Volatile Memory</td>
                            <td className="py-2 px-4 border-b">Loses data when power is lost. Examples: RAM, Registers, Cache Memory</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="py-2 px-4 border-b">Non-Volatile Memory</td>
                            <td className="py-2 px-4 border-b">Retains data when power is off. Examples: ROM, Flash Memory, Magnetic Storage, Optical Storage</td>
                        </tr>
                    </tbody>
                </table>
                <PlantUMLDiagram code={umlCode} />

            </div>

        </div>
    );
};

export default Page;
