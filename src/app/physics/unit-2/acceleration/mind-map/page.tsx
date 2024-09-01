"use client";
import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import PlantUMLDiagram from '@/components/PlantUMLDiagram';

const KinematicsPage = () => {
    useEffect(() => {
        mermaid.initialize({ startOnLoad: true });
        mermaid.contentLoaded();
    }, []);
    const mindmapCode = `
@startmindmap
* Point to Ponder
***:He discovered that objects of
different masses fall at the same rate;
* Acceleration
left side
** Definition
*** Change in velocity (Δv) over time (Δt)
*** Formula: a = Δv / Δt
*** Galileo Galilei was the first to relate speed to distance and time.
** Vector Quantity
*** Direction same as change in velocity
*** SI Unit: m/s²
** Types of Acceleration
*** Positive: Increase in velocity
*** Negative (Deceleration): Decrease in velocity
right side
** Uniform Acceleration
*** not steady over time
*** Equal changes in velocity in equal time intervals
*** Example: Constant acceleration
** Non-uniform Acceleration
*** Velocity changes at varying rates over time
*** Common in real-life scenarios
*** Constant Rate
***:If you walk at different speeds, sometimes fast
and sometimes slow, your movement is non-uniform because
it&apos;snot steady or consistent;
** Example 2.4: Acceleration of Cheetah
*** Given
**** Initial velocity (v₁): 0 m/s (East)
**** Final velocity (v₂): 26.8 m/s (East)
**** Time taken (Δt): 3 s
*** Required
**** Acceleration (a)
*** Solution
**** Formula: a = (v₂ - v₁) / Δt
**** Calculation: a = 8.93 m/s²
@endmindmap
`;


    const [zoomLevel, setZoomLevel] = useState(1);
    const zoomOut = () => setZoomLevel(prev => Math.max(prev - 0.1, 0.5));
    const zoomIn = () => setZoomLevel(prev => Math.min(prev + 0.1, 2));

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">2.4 ACCELERATION</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Given</th>
                            <th className="py-2 px-4 border-b">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border-b">Initial velocity (v₁)</td>
                            <td className="py-2 px-4 border-b">0 m/s (East)</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Final velocity (v₂)</td>
                            <td className="py-2 px-4 border-b">26.8 m/s (East)</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Time taken (Δt)</td>
                            <td className="py-2 px-4 border-b">3 s</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Required</td>
                            <td className="py-2 px-4 border-b">Acceleration (a)</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Solution</td>
                            <td className="py-2 px-4 border-b">
                                a = (v₂ - v₁) / Δt <br />
                                a = (26.8 m/s - 0 m/s) / 3 s <br />
                                a = 8.93 m/s²
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>


            <PlantUMLDiagram code={mindmapCode} />

        </div>
    );
};

export default KinematicsPage;
