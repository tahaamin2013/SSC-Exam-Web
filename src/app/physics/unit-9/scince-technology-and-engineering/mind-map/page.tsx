import React from 'react';
import PlantUMLDiagram from '@/components/PlantUMLDiagram';

const umlCode = `
@startmindmap
* Science, Technology & Engineering
left side
** Science
*** Pursuit of knowledge
*** Systematic study
*** Example
**** Physics: Study of motion and energy
** Technology
*** Application of scientific knowledge
*** Practical purposes
*** Example
**** Smartphone development
right side
** Engineering
*** Practical use of scientific principles
*** Problem-solving
*** Example
**** Civil engineering: Infrastructure design
** Interconnection
*** Scientific advances lead to technological innovations
*** Engineers use scientific knowledge
*** New technologies drive further scientific exploration
@endmindmap
`;

const ScienceTechnologyEngineeringComponent = () => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 py-8 px-4">
            <div className="bg-white items-center flex flex-col p-8 rounded-lg shadow-lg max-w-4xl w-full mb-8">
                <h1 className="text-3xl font-bold text-center mb-8">Science, Technology, and Engineering</h1>
                <PlantUMLDiagram code={umlCode} />
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
                <h2 className="text-2xl font-bold mb-4">Comparison Table</h2>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border p-2">Aspect</th>
                                <th className="border p-2">Science</th>
                                <th className="border p-2">Technology</th>
                                <th className="border p-2">Engineering</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border p-2 font-semibold">Definition</td>
                                <td className="border p-2">System of knowledge concerned with establishing accurate conclusions about the behavior of everything in the universe</td>
                                <td className="border p-2">Field that uses scientific knowledge to develop material products or processes that satisfy human needs and desires</td>
                                <td className="border p-2">Practical use of scientific and mathematical principles to create and construct structures, devices, and processes</td>
                            </tr>
                            <tr>
                                <td className="border p-2 font-semibold">Focus</td>
                                <td className="border p-2">Pursuit of knowledge and understanding</td>
                                <td className="border p-2">Application of scientific knowledge for practical purposes</td>
                                <td className="border p-2">Solving real-world problems</td>
                            </tr>
                            <tr>
                                <td className="border p-2 font-semibold">Methods</td>
                                <td className="border p-2">Systematic study, experimentation, and observation</td>
                                <td className="border p-2">Creation and use of tools, machines, systems, and techniques</td>
                                <td className="border p-2">Application of knowledge in a creative and organized manner</td>
                            </tr>
                            <tr>
                                <td className="border p-2 font-semibold">Example</td>
                                <td className="border p-2">Studying principles of motion and energy in physics</td>
                                <td className="border p-2">Development of smartphones</td>
                                <td className="border p-2">Designing and building infrastructure like bridges and roads</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ScienceTechnologyEngineeringComponent;