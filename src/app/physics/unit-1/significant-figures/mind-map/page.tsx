"use client";
import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import PlantUMLDiagram from '@/components/PlantUMLDiagram';

const Page = () => {
    const [zoomLevel1, setZoomLevel1] = useState(1);
    const [zoomLevel2, setZoomLevel2] = useState(1);

    const umlCode = `
@startmindmap
* Significant Figures
** Types of Values
*** Exact Values
**** Counted Items (e.g., 3 pencils, 2 books)
*** Measured Values
**** Includes Uncertainty
** General Rules
*** All Nonzero Digits are Significant
**** Example: 23.457 (5 significant figures)
*** Leading Zeros Not Significant
**** Example: 0.0029 (2 significant figures)
*** Trailing Zeros After Decimal Are Significant
**** Example: 0.00290 (3 significant figures)
** Examples
*** 100.8 s: 4 Significant Figures (1.008 × 10² s)
*** 0.00580 km: 3 Significant Figures (5.80 × 10⁻³ km)
*** 210.0 g: 4 Significant Figures (2.100 × 10² g)
** Rounding Off Numbers
*** Whole Numbers
**** Round Down if Digit < 5
**** Round Up if Digit ≥ 5
*** Decimal Numbers
**** Round Down if Digits < 5
**** Round Up if Digits ≥ 5
** Examples
*** Two Decimal Points
**** 3.876 → 3.88
**** 657.873 → 657.87
**** 0.0857 → 0.09
*** Three Significant Digits
**** 24.68 → 24.7
**** 0.07683 → 0.0768
**** 7,847 → 7,850
@endmindmap
`;

    const mermaidContainerRef1 = useRef<HTMLDivElement>(null);
    const mermaidContainerRef2 = useRef<HTMLDivElement>(null);

    const zoomOut1 = () => setZoomLevel1(prev => Math.max(prev - 0.1, 0.5));
    const zoomIn1 = () => setZoomLevel1(prev => Math.min(prev + 0.1, 2));

    useEffect(() => {
        mermaid.initialize({ startOnLoad: true });
    }, []);

    useEffect(() => {
        if (mermaidContainerRef1.current) {
            // @ts-ignore
            mermaid.render('mermaidDiagram1', umlCode, (svgCode) => {
                if (mermaidContainerRef1.current) {
                    mermaidContainerRef1.current.innerHTML = svgCode;
                }
            });
        }
    }, [zoomLevel1]);

    useEffect(() => {
        if (mermaidContainerRef2.current) {
            // @ts-ignore
            mermaid.render('mermaidDiagram2', umlCode, (svgCode: any) => {
                if (mermaidContainerRef2.current) {
                    mermaidContainerRef2.current.innerHTML = svgCode;
                }
            });
        }
    }, [zoomLevel2]);

    return (
        <div>
            <div className="container mx-auto p-4">
                <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
                    <div className="container mx-auto p-6">
                        <h1 className="text-2xl font-bold mb-4">Significant Figures</h1>
                        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                            <thead>
                                <tr className="bg-green-500 text-white">
                                    <th className="py-2 px-4 border-b border-gray-300">Aspect</th>
                                    <th className="py-2 px-4 border-b border-gray-300">Details</th>
                                    <th className="py-2 px-4 border-b border-gray-300">Examples</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2 px-4 border-b border-gray-300 font-semibold">Types of Values</td>
                                    <td className="py-2 px-4 border-b border-gray-300">Exact (counted) vs Measured (contains uncertainty)</td>
                                    <td className="py-2 px-4 border-b border-gray-300">3 pencils (exact), 17.05 cm (measured)</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border-b border-gray-300 font-semibold">General Rules</td>
                                    <td className="py-2 px-4 border-b border-gray-300">Nonzero digits significant, leading zeros not significant, trailing zeros after decimal are significant</td>
                                    <td className="py-2 px-4 border-b border-gray-300">100.8 (4 significant figures), 0.00290 (3 significant figures)</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border-b border-gray-300 font-semibold">Examples</td>
                                    <td className="py-2 px-4 border-b border-gray-300">Scientific notation for clarity</td>
                                    <td className="py-2 px-4 border-b border-gray-300">100.8 = 1.008 × 10² s, 0.00580 = 5.80 × 10⁻³ km, 210.0 = 2.100 × 10² g</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border-b border-gray-300 font-semibold">Rounding Off Numbers</td>
                                    <td className="py-2 px-4 border-b border-gray-300">Rules for whole numbers and decimal numbers</td>
                                    <td className="py-2 px-4 border-b border-gray-300">
                                        Two Decimal Points: 3.876 → 3.88, 657.873 → 657.87, 0.0857 → 0.09<br />
                                        Three Significant Digits: 24.68 → 24.7, 0.07683 → 0.0768, 7,847 → 7,850
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div ref={mermaidContainerRef1} style={{ zoom: zoomLevel1 }}></div>
                <div ref={mermaidContainerRef2} style={{ zoom: zoomLevel2 }}></div>
                <PlantUMLDiagram code={umlCode} />
            </div>
        </div>
    );
};

export default Page;
