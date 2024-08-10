import PlantUMLDiagram from '@/components/PlantUMLDiagram';
import React from 'react';

const MeasuringInstrumentsTable = () => {
    const umlCode = `
@startmindmap
* Measuring Instruments
** Metre Rule and Measuring Tape
*** Least count: 1 mm
** Vernier Caliper
*** Least count: 0.1 mm
*** Measures: thickness, diameter, width, internal/external diameter
** Screw Gauge
*** Least count: 0.01 mm
*** Measures: small lengths (thickness of wire, etc.)
left side
** Physical Balance
*** Measures: mass with high precision
** Measuring Cylinder
*** Least count: 1 cm³
*** Measures: volume of liquids
** Stopwatch
*** Types: Mechanical, Digital
*** Measures: time intervals
@endmindmap
 `;
    return (
        <>
            <div className="flex justify-center my-8">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 bg-blue-200 text-blue-800 border-b">Instrument</th>
                            <th className="py-2 px-4 bg-blue-200 text-blue-800 border-b">Description</th>
                            <th className="py-2 px-4 bg-blue-200 text-blue-800 border-b">Least Count</th>
                            <th className="py-2 px-4 bg-blue-200 text-blue-800 border-b">Usage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border-b">Metre Rule and Measuring Tape</td>
                            <td className="py-2 px-4 border-b">Used for measuring lengths and distances</td>
                            <td className="py-2 px-4 border-b">1 mm</td>
                            <td className="py-2 px-4 border-b">Lengths of objects, large distances</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Vernier Caliper</td>
                            <td className="py-2 px-4 border-b">Measures small lengths with high precision</td>
                            <td className="py-2 px-4 border-b">0.1 mm</td>
                            <td className="py-2 px-4 border-b">Thickness, diameter, internal/external diameters</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Screw Gauge</td>
                            <td className="py-2 px-4 border-b">Measures smaller lengths than vernier calipers</td>
                            <td className="py-2 px-4 border-b">0.01 mm</td>
                            <td className="py-2 px-4 border-b">Thickness of small objects like wires</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Physical Balance</td>
                            <td className="py-2 px-4 border-b">Measures mass with high precision</td>
                            <td className="py-2 px-4 border-b">N/A</td>
                            <td className="py-2 px-4 border-b">Mass of objects</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Measuring Cylinder</td>
                            <td className="py-2 px-4 border-b">Measures volume of liquids</td>
                            <td className="py-2 px-4 border-b">1 cm³</td>
                            <td className="py-2 px-4 border-b">Volume of liquids in ml or cm³</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Stopwatch</td>
                            <td className="py-2 px-4 border-b">Measures time intervals</td>
                            <td className="py-2 px-4 border-b">N/A</td>
                            <td className="py-2 px-4 border-b">Time intervals for experiments</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <PlantUMLDiagram code={umlCode} /></>
    );
};

export default MeasuringInstrumentsTable;
