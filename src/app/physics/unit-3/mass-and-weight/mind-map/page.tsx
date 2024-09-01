"use client";
import React, { useState } from 'react';
import PlantUMLDiagram from '@/components/PlantUMLDiagram';

const MassAndWeightNotes = () => {
    const [activeTab, setActiveTab] = useState('definitions');

    const mindmapCode = `
@startmindmap
* Mass and Weight
right side
** Mass
*** Amount of matter
*** Measure of inertia
*** Unit: Kilogram (kg)
** Weight
*** Gravitational force
*** Calculated using Newton&apos;s2nd law
*** Unit: Newton (N)
left side 
** Relationship
*** Formula: W = mg
**** W = Weight (N)
**** m = Mass (kg)
**** g = Acceleration due to gravity (m/s²)
*** On Earth&apos;s surface
**** g ≈ 9.8 m/s²
*** Varies by location
**** Less on Moon
**** More on Jupiter
@endmindmap
`;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Mass and Weight: Academic Notes</h1>

            <div className="mb-4">
                <button
                    onClick={() => setActiveTab('definitions')}
                    className={`px-4 py-2 mr-2 ${activeTab === 'definitions' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    Definitions
                </button>
                <button
                    onClick={() => setActiveTab('relationship')}
                    className={`px-4 py-2 ${activeTab === 'relationship' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                    Relationship
                </button>
            </div>

            {activeTab === 'definitions' && (
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">1. Definitions</h2>

                    <h3 className="text-xl font-semibold mb-2">1.1 Mass</h3>
                    <ul className="list-disc pl-5 mb-4">
                        <li>Definition: The amount of matter an object contains</li>
                        <li>Characteristic: A measure of an object&apos;s inertia</li>
                        <li>Unit: Kilogram (kg)</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">1.2 Weight</h3>
                    <ul className="list-disc pl-5 mb-4">
                        <li>Definition: The gravitational force acting on a mass or object</li>
                        <li>Calculation: Using Newton&apos;s second law</li>
                        <li>Unit: Newton (N)</li>
                    </ul>
                </div>
            )}

            {activeTab === 'relationship' && (
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">2. Relationship Between Mass and Weight</h2>

                    <h3 className="text-xl font-semibold mb-2">2.1 Formula</h3>
                    <p className="mb-4">W = mg</p>
                    <p className="mb-4">Where:</p>
                    <ul className="list-disc pl-5 mb-4">
                        <li>W = Weight (N)</li>
                        <li>m = Mass (kg)</li>
                        <li>g = Acceleration due to gravity (m/s²)</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">2.2 Earth&apos;s Surface</h3>
                    <p className="mb-4">Acceleration due to gravity (g) ≈ 9.8 m/s²</p>

                    <h3 className="text-xl font-semibold mb-2">2.3 Variation by Location</h3>
                    <ul className="list-disc pl-5 mb-4">
                        <li>Weight is less on the Moon due to lower gravity</li>
                        <li>Weight is more on Jupiter due to higher gravity</li>
                    </ul>
                </div>
            )}

            <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">Mindmap: Mass and Weight Concepts</h3>
                <PlantUMLDiagram code={mindmapCode} />
            </div>
        </div>
    );
};

export default MassAndWeightNotes;