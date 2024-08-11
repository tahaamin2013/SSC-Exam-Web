// pages/history.tsx

import React from 'react';

const page: React.FC = () => {
    return (
        <div className="bg-white text-gray-900 font-sans leading-relaxed">
            <div className="container mx-auto p-6">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold mb-4">Brief History of Computer Systems</h1>
                </header>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Early Computing Devices</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Abacus</li>
                        <li>Napier’s Bones</li>
                        <li>Pascaline</li>
                        <li>Stepped Reckoner or Leibniz wheel</li>
                        <li>Difference Engine</li>
                        <li>Analytical Engine</li>
                        <li>Tabulating machine</li>
                        <li>Differential Analyzer</li>
                        <li>Mark 1</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Computer Generations</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>First Generation Computers (1940 -1956)</li>
                        <li>Second Generation Computers (1957 -1963)</li>
                        <li>Third Generation Computers (1963 -1971)</li>
                        <li>Fourth Generation Computers (1971 - Present)</li>
                        <li>Fifth Generation Computers</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Understanding Systems and their Types</h2>
                    <h3 className="text-xl font-semibold mb-2">Natural And Artificial Systems</h3>
                    <div className="space-y-4">
                        <div>
                            <h4 className="text-lg font-semibold mb-2">Natural Systems</h4>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Ecosystems</li>
                                <li>Forest Ecosystems</li>
                                <li>Aquatic Ecosystems</li>
                                <li>Grassland Ecosystems</li>
                                <li>Weather Systems</li>
                                <li>Geological Systems</li>
                                <li>Plate Tectonics</li>
                                <li>Mountain Systems</li>
                                <li>Hydrological Systems</li>
                                <li>Solar Systems</li>
                                <li>Biological Systems</li>
                                <li>Human Body</li>
                                <li>Coral Reef</li>
                                <li>Rainforest Canopy</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-2">Artificial Systems</h4>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Communication Systems</li>
                                <li>Telephone Networks</li>
                                <li>Internet and Computer Networks</li>
                                <li>Satellite Communication Systems</li>
                                <li>Information Systems</li>
                                <li>Databases</li>
                                <li>Software Applications</li>
                                <li>Transportation Systems</li>
                                <li>Automobiles</li>
                                <li>Aircraft</li>
                                <li>Trains and Rail Systems</li>
                                <li>Subways and Mass Transit</li>
                                <li>Energy Systems</li>
                                <li>Power Plants</li>
                                <li>Renewable Energy Systems</li>
                                <li>Electrical Grids</li>
                                <li>Manufacturing Systems</li>
                                <li>Factory Automation</li>
                                <li>Assembly Lines</li>
                                <li>Healthcare Systems</li>
                                <li>Hospital Information Systems (HIS)</li>
                                <li>Medical Devices</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Core Components of a Computer System</h2>
                    <h3 className="text-xl font-semibold mb-2">Input Devices</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Microphone</li>
                        <li>Scanner</li>
                        <li>Barcode Reader</li>
                        <li>Digital Camera</li>
                        <li>Touch Screen</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">System Unit</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Motherboard</li>
                        <li>Microprocessor</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">Storage Devices</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Hard Disk</li>
                        <li>Compact Disk (CD)</li>
                        <li>Digital Versatile Disk (DVD)</li>
                        <li>Memory Card</li>
                        <li>USB Flash Drive</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">Output Devices</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Monitor</li>
                        <li>Printer</li>
                        <li>Impact Printer</li>
                        <li>Non-Impact Printer</li>
                        <li>Plotter</li>
                        <li>Speaker</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">Ports, Expansion Slots and Expansion Cards</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Ports</li>
                        <li>Expansion Slots and Expansion Cards</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">Von Neumann Architecture</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Central Processing Unit (CPU)</li>
                        <li>Registers</li>
                        <li>Arithmetic and Logic Unit (ALU)</li>
                        <li>Control Unit (CU)</li>
                        <li>Buses</li>
                        <li>Memory Unit</li>
                        <li>Input/Output (I/O) Controller</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">Data Transmission within a Computer System</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Bus Architecture</li>
                        <li>Data Paths</li>
                        <li>Registers</li>
                        <li>Memory Hierarchy</li>
                        <li>Instruction Cycle</li>
                        <li>Pipeline Processing</li>
                        <li>Interrupts and I/O</li>
                        <li>Parallelism</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Types and Hierarchy of Computer Memory</h2>
                    <h3 className="text-xl font-semibold mb-2">Memory Terminology</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Bit</li>
                        <li>Byte</li>
                        <li>Memory Word</li>
                        <li>Word Size</li>
                        <li>Memory Built-up and Retention Power</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">Chip Memory</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Magnetic Memory</li>
                        <li>Optical Memory</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">Main Memory</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>ROM (Read Only Memory)</li>
                        <li>RAM (Random Access Memory)</li>
                        <li>Cache Memory</li>
                        <li>Volatile and Non-Volatile Memory</li>
                        <li>Volatile Memory</li>
                        <li>Non-Volatile Memory</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Software Engineering and Hardware Engineering</h2>
                    <h3 className="text-xl font-semibold mb-2">Software Engineering</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Application Software Engineering</li>
                        <li>System Software Engineering</li>
                        <li>Embedded Software Engineering</li>
                        <li>Enterprise Software Engineering</li>
                        <li>Game Development</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">Hardware Engineering</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Digital Hardware Engineering</li>
                        <li>Integrated Circuit (IC) Design</li>
                        <li>Computer Architecture</li>
                        <li>Embedded Systems Design</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Computer Software</h2>
                    <h3 className="text-xl font-semibold mb-2">System Software</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Operating System (OS)</li>
                        <li>Device Drivers</li>
                        <li>Utilities</li>
                        <li>Compiler and Assembler</li>
                        <li>Linkers and Loaders</li>
                        <li>Firmware</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">Application Software</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Productivity Software</li>
                        <li>Business Software</li>
                        <li>Entertainment Software</li>
                        <li>Educational Software</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Programming Languages</h2>
                    <h3 className="text-xl font-semibold mb-2">Low Level Languages</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Machine Language</li>
                        <li>Assembly Language</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">High Level Languages (HLLs)</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Procedural and Structured Language</li>
                        <li>Object-Oriented Programming Languages</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">Uses of Low Level Languages</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Operating System Development</li>
                        <li>Device Drivers</li>
                        <li>Embedded Systems</li>
                        <li>Firmware Development</li>
                        <li>Real-Time Systems</li>
                        <li>Security Tools</li>
                        <li>Game Development</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">Uses of High Level Languages</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Applications (Apps) Development</li>
                        <li>Web Development</li>
                        <li>Data Analysis and Science</li>
                        <li>Machine Learning and AI</li>
                        <li>Automation and Scripting</li>
                        <li>Game Development</li>
                        <li>Database Management</li>
                        <li>Scientific and Engineering Simulations</li>
                        <li>Business Software</li>
                        <li>Educational Tools</li>
                        <li>Data Communication</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default page;
