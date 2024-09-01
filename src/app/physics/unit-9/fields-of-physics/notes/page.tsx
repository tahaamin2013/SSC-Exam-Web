import React from 'react';

const PhysicsFields = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="px-6 py-8">
                    <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">9.2 FIELDS OF PHYSICS</h1>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-indigo-800 mb-4">1. Importance of Physics</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Considered most fundamental of all sciences</li>
                            <li>Essential for understanding other natural sciences</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-indigo-800 mb-4">2. Interdisciplinary Applications</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><span className="font-medium">Biology:</span> Fluid dynamics in blood flow</li>
                            <li><span className="font-medium">Chemistry:</span> Subatomic particle interactions</li>
                            <li><span className="font-medium">Geology:</span> Seismic wave analysis</li>
                            <li><span className="font-medium">Astronomy/Cosmology:</span> Universal laws application</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-indigo-800 mb-4">3. Major Fields of Physics</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { name: 'Biophysics', description: 'Study of living body systems. Applications: Blood flow dynamics, radiation in medicine' },
                                { name: 'Astronomy', description: 'Study of celestial objects and universe beyond Earth\&apos;satmosphere. Requires nighttime observation with telescopes' },
                                { name: 'Astrophysics', description: 'Physical nature of celestial bodies. Investigates formation of stars, planets, galaxies' },
                                { name: 'Cosmology', description: 'Origin, development, structure, and future of the universe' },
                                { name: 'Thermal Physics', description: 'Encompasses statistical mechanics, thermodynamics, kinetic theory of gases' },
                                { name: 'Optics', description: 'Nature and properties of light. Light-matter interactions. Optical instrument construction' },
                                { name: 'Nuclear Physics', description: 'Structure and behavior of atomic nuclei. Studies radiation from unstable nuclei' },
                                { name: 'Particle Physics', description: 'Study of fundamental particles and forces' },
                                { name: 'Electromagnetism', description: 'Forces between electrically charged particles' },
                                { name: 'Acoustics', description: 'Production, transmission, and effects of sound' },
                                { name: 'Computational Physics', description: 'Numerical analysis for complex physics problems. Combines computer science, physics, and applied mathematics' },
                                { name: 'Geophysics', description: 'Earth\&apos;sstructure and physical phenomena' },
                                { name: 'Climate Physics', description: 'Study of Earth\&apos;sclimate' },
                                { name: 'Classical Mechanics', description: 'Motion of macroscopic objects under forces' },
                                { name: 'Quantum Mechanics', description: 'Behavior of microscopic particles' },
                                { name: 'Relativistic Mechanics', description: 'Systems with velocities approaching light speed. High kinetic energies relative to rest mass' },
                            ].map((field, index) => (
                                <div key={index} className="bg-indigo-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-indigo-700 mb-2">{field.name}</h3>
                                    <p className="text-sm">{field.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-indigo-800 mb-4">4. Role of Physicists</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Specialize in various fields of physics</li>
                            <li>Conduct in-depth research on diverse topics</li>
                            <li>Study matter-energy interactions across all scales</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PhysicsFields;