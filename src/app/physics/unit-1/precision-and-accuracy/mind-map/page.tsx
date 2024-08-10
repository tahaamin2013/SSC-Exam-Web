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
* Precision and Accuracy
** Precision
*** Consistency
*** Repeatability
*** Example: Scale with consistent but inaccurate readings
** Accuracy
*** Closeness to True Value
*** Absence of Systematic Errors
*** Example: Thermometer consistently off by a fixed amount
** Differences
*** Precision: Consistent Results
*** Accuracy: Close to True Value
** Scenarios
*** Accurate and Precise: Bullseye
*** Accurate but Not Precise: Scattered Around Center
*** Precise but Not Accurate: Tight Cluster Off-Center
** Practical Application
*** Calibration
*** Experimental Conditions
*** Sources of Error
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
                    <div className="container mx-auto p-6">
                        <h1 className="text-2xl font-bold mb-4">Precision and Accuracy</h1>
                        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                            <thead>
                                <tr className="bg-blue-500 text-white">
                                    <th className="py-2 px-4 border-b border-gray-300">Aspect</th>
                                    <th className="py-2 px-4 border-b border-gray-300">Definition</th>
                                    <th className="py-2 px-4 border-b border-gray-300">Example</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2 px-4 border-b border-gray-300 font-semibold">Precision</td>
                                    <td className="py-2 px-4 border-b border-gray-300">Consistency and repeatability of measurements</td>
                                    <td className="py-2 px-4 border-b border-gray-300">Scale that always shows the same weight (e.g., 0.1 kg variation)</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border-b border-gray-300 font-semibold">Accuracy</td>
                                    <td className="py-2 px-4 border-b border-gray-300">Closeness of a measured value to the true value</td>
                                    <td className="py-2 px-4 border-b border-gray-300">Thermometer consistently reads 2°C higher than actual temperature</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border-b border-gray-300 font-semibold">Differences</td>
                                    <td className="py-2 px-4 border-b border-gray-300">Precision is about consistency; Accuracy is about closeness to the true value</td>
                                    <td className="py-2 px-4 border-b border-gray-300">Precision: Tight cluster; Accuracy: Center of the target</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border-b border-gray-300 font-semibold">Scenarios</td>
                                    <td className="py-2 px-4 border-b border-gray-300">Various combinations of precision and accuracy</td>
                                    <td className="py-2 px-4 border-b border-gray-300">Accurate and precise, accurate but not precise, precise but not accurate</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border-b border-gray-300 font-semibold">Practical Application</td>
                                    <td className="py-2 px-4 border-b border-gray-300">Requires calibration, control of conditions, and error consideration</td>
                                    <td className="py-2 px-4 border-b border-gray-300">Measurement instruments and experimental setups</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <PlantUMLDiagram code={umlCode} />
                </div>
            </div>

        </div>
    );
};

export default Page;