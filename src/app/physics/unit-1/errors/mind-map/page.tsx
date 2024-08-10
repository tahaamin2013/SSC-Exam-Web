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
* #FFA500 Errors
** #FF6347 Systematic Errors
*** #FF4500 Instrumental errors: imperfections in the design or calibration of the measuring instrument, zero errors
*** #FF4500 Imperfections in experimental technique: changes in external conditions like temperature, humidity, or wind velocity
*** #FF4500 Personal errors: individual bias, improper setup, carelessness in observations
** #8A2BE2 Random Errors
*** #9370DB Unpredictable and uncontrollable errors
*** #9370DB Caused by fluctuations in experimental conditions, imperfections in measuring instruments
*** #9370DB Introduced by variability in technique or reaction time
*** #9370DB Minimization: take repeated measurements, use statistical analysis
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
                    <div className="container mx-auto">
                        <table className="min-w-full border-collapse border border-blue-600">
                            <thead>
                                <tr className="bg-yellow-400 text-black">
                                    <th className="border border-blue-600 px-4 py-2">Error Type</th>
                                    <th className="border border-blue-600 px-4 py-2">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-yellow-100 text-black">
                                    <td className="border border-blue-600 px-4 py-2">Systematic Errors</td>
                                    <td className="border border-blue-600 px-4 py-2">Consistently occur in one direction, either positive or negative.</td>
                                </tr>
                                <tr className="bg-teal-100 text-black">
                                    <td className="border border-blue-600 px-4 py-2">Instrumental Errors</td>
                                    <td className="border border-blue-600 px-4 py-2">Result from imperfections in the design or calibration of the measuring instrument.</td>
                                </tr>
                                <tr className="bg-yellow-100 text-black">
                                    <td className="border border-blue-600 px-4 py-2">Imperfections in Experimental Technique</td>
                                    <td className="border border-blue-600 px-4 py-2">Errors due to changes in external conditions like temperature, humidity, or wind velocity.</td>
                                </tr>
                                <tr className="bg-teal-100 text-black">
                                    <td className="border border-blue-600 px-4 py-2">Personal Errors</td>
                                    <td className="border border-blue-600 px-4 py-2">Arise from individual bias, improper setup, or carelessness.</td>
                                </tr>
                                <tr className="bg-yellow-100 text-black">
                                    <td className="border border-blue-600 px-4 py-2">Random Errors</td>
                                    <td className="border border-blue-600 px-4 py-2">Unpredictable and uncontrollable errors.</td>
                                </tr>
                                <tr className="bg-teal-100 text-black">
                                    <td className="border border-blue-600 px-4 py-2">Causes of Random Errors</td>
                                    <td className="border border-blue-600 px-4 py-2">Fluctuations in experimental conditions, imperfections in measuring instruments, or variability in technique.</td>
                                </tr>
                                <tr className="bg-yellow-100 text-black">
                                    <td className="border border-blue-600 px-4 py-2">Minimizing Random Errors</td>
                                    <td className="border border-blue-600 px-4 py-2">Take repeated measurements and use statistical analysis.</td>
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