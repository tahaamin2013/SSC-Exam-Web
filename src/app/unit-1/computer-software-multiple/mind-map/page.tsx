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
    .software {
        BackgroundColor lightskyblue
    }
    .system {
        BackgroundColor lightgreen
    }
    .application {
        BackgroundColor lightpink
    }
    .languages {
        BackgroundColor lightsalmon
    }
    .uses {
        BackgroundColor plum
    }
}
</style>
* Computer Software
** System Software <<system>>
*** Operating System (OS)
**** Resource management
**** User interface
**** File organization
**** Security
*** Device Drivers
*** Utilities
*** Compiler and Assembler
*** Linkers and Loaders
*** Firmware
left side
** Application Software <<application>>
*** Productivity Software
**** Microsoft Office
**** Google Workspace
**** LibreOffice
*** Business Software
**** QuickBooks
**** Salesforce
**** Trello
*** Entertainment Software
**** Games
**** Multimedia players
**** Streaming services
*** Educational Software
**** Learning Management Systems
**** Interactive learning apps
** Programming Languages <<languages>>
*** Low Level Languages
**** Machine Language
**** Assembly Language
*** High Level Languages
**** Procedural and Structured
***** FORTRAN, Pascal, C
**** Object-Oriented
***** C++, Java, Visual Basic
right side
** Uses of Programming Languages <<uses>>
*** Low-Level Languages
**** OS Development
**** Device Drivers
**** Embedded Systems
**** Firmware Development
*** High-Level Languages
**** Applications Development
**** Web Development
**** Data Analysis
**** Machine Learning and AI
**** Automation and Scripting
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
                            <th className="py-2 px-4 border-b">Examples</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold" rowSpan={6}>System Software</td>
                            <td className="py-2 px-4 border-b">Operating System (OS)</td>
                            <td className="py-2 px-4 border-b">Manages hardware resources and provides services for computer programs</td>
                            <td className="py-2 px-4 border-b">Windows, macOS, Linux, Android</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Device Drivers</td>
                            <td className="py-2 px-4 border-b">Facilitate communication between OS and hardware devices</td>
                            <td className="py-2 px-4 border-b">Printer drivers, graphics card drivers</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Utilities</td>
                            <td className="py-2 px-4 border-b">Tools for managing and maintaining computer systems</td>
                            <td className="py-2 px-4 border-b">Disk defragmenters, antivirus software</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Compiler and Assembler</td>
                            <td className="py-2 px-4 border-b">Convert high-level languages to machine code</td>
                            <td className="py-2 px-4 border-b">GCC, MASM</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Linkers and Loaders</td>
                            <td className="py-2 px-4 border-b">Combine object files and load them into memory</td>
                            <td className="py-2 px-4 border-b">ld (Unix), link.exe (Windows)</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Firmware</td>
                            <td className="py-2 px-4 border-b">Software permanently stored on hardware devices</td>
                            <td className="py-2 px-4 border-b">BIOS, router firmware</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="py-2 px-4 border-b font-semibold" rowSpan={4}>Application Software</td>
                            <td className="py-2 px-4 border-b">Productivity Software</td>
                            <td className="py-2 px-4 border-b">Help users perform tasks efficiently and create content</td>
                            <td className="py-2 px-4 border-b">Microsoft Office, Google Workspace, LibreOffice</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="py-2 px-4 border-b">Business Software</td>
                            <td className="py-2 px-4 border-b">Meet business needs and streamline operations</td>
                            <td className="py-2 px-4 border-b">QuickBooks, Salesforce, Trello</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="py-2 px-4 border-b">Entertainment Software</td>
                            <td className="py-2 px-4 border-b">Designed for leisure and enjoyment</td>
                            <td className="py-2 px-4 border-b">Minecraft, Spotify, Netflix</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="py-2 px-4 border-b">Educational Software</td>
                            <td className="py-2 px-4 border-b">Support learning and skill development</td>
                            <td className="py-2 px-4 border-b">LMS (ULearn, Virtual Academy), Kahoot!, Duolingo</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold" rowSpan={2}>Programming Languages</td>
                            <td className="py-2 px-4 border-b">Low Level Languages</td>
                            <td className="py-2 px-4 border-b">Close to machine code, used for system-level programming</td>
                            <td className="py-2 px-4 border-b">Machine Language, Assembly Language</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">High Level Languages</td>
                            <td className="py-2 px-4 border-b">More abstract, easier for humans to read and write</td>
                            <td className="py-2 px-4 border-b">Procedural: FORTRAN, Pascal, C, ALGOL<br />Object-Oriented: C++, Java, Visual Basic</td>
                        </tr>
                    </tbody>
                </table>
                <PlantUMLDiagram code={umlCode} />
            </div>

        </div>
    );
};

export default Page;
