import PlantUMLDiagram from '@/components/PlantUMLDiagram';
import React from 'react';

const ScalarsVectorsTable = () => {
    const umlCode = `
@startmindmap
* Scalars and Vectors
** Scalars
*** Described by magnitude only
*** Examples: Distance, Speed, Time, Mass, Energy, Temperature
** Vectors
*** Described by both magnitude and direction
*** Examples: Displacement, Force, Weight, Velocity, Acceleration
** Adding Vectors
*** Requires vector algebra
*** Geometrically add vectors by drawing to scale
@endmindmap

  `;
    return (
        <div className='px-6 flex items-center flex-col gap-3'>
            <h1 className='font-bold text-2xl my-1'>1.6 SCALARS AND VECTORS</h1>
            <div className="flex justify-center">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 bg-blue-200 text-blue-800 border-b">Quantity Type</th>
                            <th className="py-2 px-4 bg-blue-200 text-blue-800 border-b">Description</th>
                            <th className="py-2 px-4 bg-blue-200 text-blue-800 border-b">Examples</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border-b">Scalars</td>
                            <td className="py-2 px-4 border-b">Described by magnitude only</td>
                            <td className="py-2 px-4 border-b">Distance, Speed, Time, Mass, Energy, Temperature</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Vectors</td>
                            <td className="py-2 px-4 border-b">Described by both magnitude and direction</td>
                            <td className="py-2 px-4 border-b">Displacement, Force, Weight, Velocity, Acceleration</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <PlantUMLDiagram code={umlCode} />
        </div>
    );
};

export default ScalarsVectorsTable;
