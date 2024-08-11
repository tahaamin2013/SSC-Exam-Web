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
    .hardware {
        BackgroundColor lightgreen
    }
}
</style>
* Engineering
right side
** Software Engineering <<software>>
*** Application Software Engineering
**** Web applications
**** Mobile apps
**** Desktop software
*** System Software Engineering
**** Operating systems
**** Compilers
**** Device drivers
*** Embedded Software Engineering
**** Automotive Embedded Systems
**** Digital home appliances
**** Industrial control systems
*** Enterprise Software Engineering
**** Process automation
**** Data management
**** Organizational communication
*** Game Development
**** Game engines
**** Graphics
**** Audio
**** Animation
left side
** Hardware Engineering <<hardware>>
*** Digital Hardware Engineering
**** Processors
**** Memory units
*** Integrated Circuit (IC) Design
**** CPUs
**** GPUs
*** Computer Architecture
**** CPU architecture
**** Memory hierarchy
*** Embedded Systems Design
**** Microcontrollers
**** Sensors
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
                            <th className="py-2 px-4 border-b">Engineering Field</th>
                            <th className="py-2 px-4 border-b">Type</th>
                            <th className="py-2 px-4 border-b">Focus</th>
                            <th className="py-2 px-4 border-b">Examples</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border-b font-semibold" rowSpan={5}>Software Engineering</td>
                            <td className="py-2 px-4 border-b">Application Software Engineering</td>
                            <td className="py-2 px-4 border-b">Developing software applications that fulfill specific user requirements</td>
                            <td className="py-2 px-4 border-b">Web applications, mobile apps, desktop software</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">System Software Engineering</td>
                            <td className="py-2 px-4 border-b">Designing and developing software that provides a platform for other software to run on</td>
                            <td className="py-2 px-4 border-b">Operating systems, compilers, device drivers</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Embedded Software Engineering</td>
                            <td className="py-2 px-4 border-b">Developing and testing software embedded within hardware devices or systems</td>
                            <td className="py-2 px-4 border-b">Automotive Embedded Systems, digital home appliances, industrial control systems</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Enterprise Software Engineering</td>
                            <td className="py-2 px-4 border-b">Developing software solutions for large-scale enterprises to automate processes, manage data, and facilitate communication</td>
                            <td className="py-2 px-4 border-b">Enterprise resource planning (ERP) systems, customer relationship management (CRM) software</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Game Development</td>
                            <td className="py-2 px-4 border-b">Creating video games, including game engines, graphics, audio, and animation</td>
                            <td className="py-2 px-4 border-b">Video games, game engines</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="py-2 px-4 border-b font-semibold" rowSpan={4}>Hardware Engineering</td>
                            <td className="py-2 px-4 border-b">Digital Hardware Engineering</td>
                            <td className="py-2 px-4 border-b">Designing and developing digital circuits and components</td>
                            <td className="py-2 px-4 border-b">Processors, memory units</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="py-2 px-4 border-b">Integrated Circuit (IC) Design</td>
                            <td className="py-2 px-4 border-b">Designing integrated circuits</td>
                            <td className="py-2 px-4 border-b">CPUs (Central Processing Units), GPUs (Graphics Processing Units)</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="py-2 px-4 border-b">Computer Architecture</td>
                            <td className="py-2 px-4 border-b">Designing the structure and organization of computer systems</td>
                            <td className="py-2 px-4 border-b">CPU architecture, memory hierarchy</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="py-2 px-4 border-b">Embedded Systems Design</td>
                            <td className="py-2 px-4 border-b">Designing hardware systems that are integrated into larger systems or devices</td>
                            <td className="py-2 px-4 border-b">Microcontrollers, sensors</td>
                        </tr>
                    </tbody>
                </table>
                <PlantUMLDiagram code={umlCode} />

            </div>

        </div>
    );
};

export default Page;
