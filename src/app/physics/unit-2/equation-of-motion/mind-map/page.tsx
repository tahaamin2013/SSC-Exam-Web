import PlantUMLDiagram from '@/components/PlantUMLDiagram';
import React from 'react';

const MeasuringInstrumentsTable = () => {
    const tableData = [
        { name: 'First Equation', equation: 'v = vi + at', variables: 'v: final velocity, vi: initial velocity, a: acceleration, t: time' },
        {
            name: 'Second Equation', equation: 's = vi * t + 1 / 2 * a * t²', variables: 'S: distance, vi: initial velocity, a: acceleration, t: time'
        },
        { name: 'Third Equation', equation: 'v² = vi² + 2aS', variables: 'v: final velocity, vi: initial velocity, a: acceleration, S: distance' },
    ];
    const umlCode = `
@startmindmap
* Equations of Motion
right side
** Basic Concepts
*** Uniform Acceleration
*** Straight Line Motion
*** Magnitude of displacements, velocities, and acceleration
** Speed-Time Graph
*** Line AB represents motion
*** Slope of AB is acceleration
*** Area under AB is distance covered
left side
** Three Basic Equations
*** First Equation: v = vi + at
**** Relates velocity, acceleration, and time
**** v: final velocity
**** vi: initial velocity
**** a: acceleration
**** t: time
*** Second Equation: S = vi * t + 1/2 * a * t²
**** Relates distance, velocity, acceleration, and time
**** S: distance
**** vi: initial velocity
**** a: acceleration
**** t: time
*** Third Equation: v² = vi² + 2aS
**** Relates velocity, acceleration, and distance
**** v: final velocity
**** vi: initial velocity
**** a: acceleration
**** S: distance
** Applications
*** Calculating final velocity
*** Finding acceleration
*** Determining distance traveled
*** Computing time taken
** Conversion Factors
*** 1 m/s = 3.6 km/h
*** 1 km/h = 0.27778 m/s
@endmindmap
 `;
    
    return (
        <>
            <div className="flex justify-center my-8">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="py-3 px-4 text-left">Equation Name</th>
                            <th className="py-3 px-4 text-left">Equation</th>
                            <th className="py-3 px-4 text-left">Variables</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {tableData.map((row, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                                <td className="py-3 px-4 border-b">{row.name}</td>
                                <td className="py-3 px-4 border-b font-mono">{row.equation}</td>
                                <td className="py-3 px-4 border-b">{row.variables}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <PlantUMLDiagram code={umlCode} /></>
    );
};

export default MeasuringInstrumentsTable;
