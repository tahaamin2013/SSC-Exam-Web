"use client"
import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import PlantUMLDiagram from '@/components/PlantUMLDiagram';

const Page = () => {
    useEffect(() => {
        mermaid.initialize({ startOnLoad: true });
        mermaid.contentLoaded();
    }, []);
    const [zoomLevel1, setZoomLevel1] = useState(1);
    const [zoomLevel2, setZoomLevel2] = useState(1);

    const mermaidContainerRef1 = useRef(null);
    const mermaidContainerRef2 = useRef(null);
    const zoomIn1 = () => setZoomLevel1(prev => Math.min(prev + 0.1, 2));
    const zoomOut1 = () => setZoomLevel1(prev => Math.max(prev - 0.1, 0.5));
    const zoomIn2 = () => setZoomLevel2(prev => Math.min(prev + 0.1, 2));
    const zoomOut2 = () => setZoomLevel2(prev => Math.max(prev - 0.1, 0.5));

    const umlCode = `
@startmindmap
<style>
mindmapDiagram {
  node {
    BackgroundColor lightGreen
  }
  :depth(1) {
    BackgroundColor lightBlue
  }
  :depth(2) {
    BackgroundColor lightYellow
  }
  :depth(3) {
    BackgroundColor lightPink
  }
  :depth(4) {
    BackgroundColor lightGray
  }
}
</style>
*[#Orange] Core Components of a Computer System
**[#87CEFA] Input Devices
***[#FFFACD] Keyboard
***[#FFFACD] Mouse
***[#FFFACD] Microphone
***[#FFFACD] Scanner
***[#FFFACD] Barcode Reader
***[#FFFACD] Digital Camera
***[#FFFACD] Touch Screen
**[#87CEFA] System Unit
***[#FFFACD] Motherboard
****[#FFB6C1] Microprocessor (CPU)
*****[#D3D3D3] Control Unit (CU)
*****[#D3D3D3] Arithmetic Logic Unit (ALU)
*****[#D3D3D3] Registers
****[#FFB6C1] Expansion Slots
****[#FFB6C1] RAM Memory Slots
****[#FFB6C1] Socket for Microprocessor
****[#FFB6C1] Ports
**[#87CEFA] Storage Devices
***[#FFFACD] Hard Disk
***[#FFFACD] Compact Disk (CD)
***[#FFFACD] Digital Versatile Disk (DVD)
***[#FFFACD] Memory Card
***[#FFFACD] USB Flash Drive
--[#87CEFA] Output Devices
---[#FFFACD] Monitor
----[#FFB6C1] CRT Monitor
----[#FFB6C1] LED Monitor
---[#FFFACD] Printer
----[#FFB6C1] Impact Printer
----[#FFB6C1] Non-Impact Printer
---[#FFFACD] Plotter
---[#FFFACD] Speaker
--[#87CEFA] Ports, Expansion Slots, and Expansion Cards
---[#FFFACD] Ports
----[#FFB6C1] USB
----[#FFB6C1] HDMI
----[#FFB6C1] DVI
----[#FFB6C1] Audio
----[#FFB6C1] LAN
---[#FFFACD] Expansion Slots and Expansion Cards
----[#FFB6C1] Sound Card
----[#FFB6C1] Graphics Card
----[#FFB6C1] Modem Card
----[#FFB6C1] Network Card
@endmindmap
`;
    const markdownContent = `
  # UML Diagram
  \`\`\`plantuml
  ${umlCode}
  \`\`\`
  `;
    return (
        <div className="p-6 bg-white text-gray-900">
            <h1 className="text-3xl font-bold mb-6">1.3 Core Components of a Computer System</h1>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 border-b">Component</th>
                            <th className="py-2 px-4 border-b">Description</th>
                            <th className="py-2 px-4 border-b">Examples</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">1.3.1 Input Devices</td>
                            <td className="py-2 px-4 border-b">Provide data to the computer system</td>
                            <td className="py-2 px-4 border-b">Keyboard, Mouse, Microphone, Scanner, Barcode Reader, Digital Camera, Touch Screen</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">1.3.2 System Unit</td>
                            <td className="py-2 px-4 border-b">Central component housing essential hardware</td>
                            <td className="py-2 px-4 border-b">Motherboard, CPU (CU, ALU, Registers), Expansion Slots, RAM Slots, CPU Socket, Ports</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">1.3.3 Storage Devices</td>
                            <td className="py-2 px-4 border-b">Save data and programs for long-term use</td>
                            <td className="py-2 px-4 border-b">Hard Disk, CD, DVD, Memory Card, USB Flash Drive</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">1.3.4 Output Devices</td>
                            <td className="py-2 px-4 border-b">Display or produce information from the computer</td>
                            <td className="py-2 px-4 border-b">Monitor (CRT, LED), Printer (Impact, Non-Impact), Plotter, Speaker</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold">1.3.5 Ports, Expansion Slots, and Cards</td>
                            <td className="py-2 px-4 border-b">Enhance functionality of the computer system</td>
                            <td className="py-2 px-4 border-b">Ports (USB, HDMI, DVI, Audio, LAN), Expansion Cards (Sound, Graphics, Modem, Network)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <PlantUMLDiagram code={umlCode} />

        </div>
    )
}

export default Page