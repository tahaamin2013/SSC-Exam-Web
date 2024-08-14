"use client";
import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import PlantUMLDiagram from '@/components/PlantUMLDiagram';

const DynamicsPage = () => {
    useEffect(() => {
        mermaid.initialize({ startOnLoad: true });
        mermaid.contentLoaded();
    }, []);

    const mindmapCode = `
@startmindmap
* Forces
right side
** Contact Forces
*** Normal Force
*** Thrust
*** Friction
*** Tension
*** Elastic Forces
** Non-Contact Forces
*** Gravitational Force
*** Electrostatic Force
*** Magnetic Force
left side
** Fundamental Forces
*** Strong Nuclear Force
*** Electromagnetic Force
*** Gravitational Force
*** Weak Nuclear Force
@endmindmap
`;

    const mindmapCode2 = `
@startmindmap
* Unification of Forces (Electroweak Theory)
right side
** Proposed in late 1960s
*** Abdus Salam
*** Steven Weinberg
*** Sheldon Lee Glashow
** Incorporates Quantum Electrodynamics
** Unifies Electromagnetic and Weak Forces
left side
** Four Carrier Particles (Gauge Bosons)
*** Photon
**** Associated with Electromagnetism
**** Massless
*** W+ Particle
**** Associated with Weak Force
**** Massive
**** Electrically Charged
*** W- Particle
**** Associated with Weak Force
**** Massive
**** Electrically Charged
*** Z Particle
**** Associated with Weak Force
**** Massive
**** Neutral
@endmindmap
`;

    const [zoomLevel, setZoomLevel] = useState(1);
    const zoomOut = () => setZoomLevel(prev => Math.max(prev - 0.1, 0.5));
    const zoomIn = () => setZoomLevel(prev => Math.min(prev + 0.1, 2));

    return (
        <div className="container overflow-x-hidden mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Dynamics - Forces</h1>

            <h2 className="text-2xl font-semibold mb-4">Fundamental Forces in Nature</h2>
            <div className="overflow-x-auto mb-8">
                <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Force</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Range (metre)</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Relative strength</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Function</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exchange Particles</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">Strong Force</td>
                            <td className="px-6 py-4 whitespace-nowrap">10⁻¹⁵ (diameter of proton)</td>
                            <td className="px-6 py-4 whitespace-nowrap">1</td>
                            <td className="px-6 py-4 whitespace-nowrap">Proton - Proton, Proton - Neutron</td>
                            <td className="px-6 py-4 whitespace-nowrap">Pions (Π) or others</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">Electromagnetic Force</td>
                            <td className="px-6 py-4 whitespace-nowrap">infinite</td>
                            <td className="px-6 py-4 whitespace-nowrap">7.3 x 10⁻³</td>
                            <td className="px-6 py-4 whitespace-nowrap">Proton - Electron</td>
                            <td className="px-6 py-4 whitespace-nowrap">Photons (massless)</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">Weak Force</td>
                            <td className="px-6 py-4 whitespace-nowrap">10⁻¹⁸</td>
                            <td className="px-6 py-4 whitespace-nowrap">10⁻¹³</td>
                            <td className="px-6 py-4 whitespace-nowrap">-</td>
                            <td className="px-6 py-4 whitespace-nowrap">W+, W-, Z0 (vector bosons)</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">Gravitational Force</td>
                            <td className="px-6 py-4 whitespace-nowrap">infinite</td>
                            <td className="px-6 py-4 whitespace-nowrap">6 x 10⁻³⁹</td>
                            <td className="px-6 py-4 whitespace-nowrap">Mass - Mass</td>
                            <td className="px-6 py-4 whitespace-nowrap">graviton (not yet detected)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Types of Forces Mindmap</h2>
            <div className="transition-transform duration-300">
                <PlantUMLDiagram code={mindmapCode} />
                <PlantUMLDiagram code={mindmapCode2} />
            </div>
        </div>
    );
};

export default DynamicsPage;