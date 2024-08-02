// pages/history.tsx
import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div className="p-6 bg-white text-gray-900">
            <h1 className="text-3xl font-bold mb-6">Brief History of Computer Systems</h1>
        
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Early Computing Devices</h2>
                <div className="space-y-4">
                    <div className='flex flex-col mb-8 sm:flex-row gap-4'>
                        <Image src="/Abacus.png" className='rounded-xl' height={200} width={290} alt='Abacus' />
                        <div className='flex flex-col'>
                            <h3 className="text-xl font-medium">Abacus</h3>
                            <p className='max-w-[700px] mb-3'>The abacus is the earliest counting device. It is made with rods, stones, and beads Abacus is used for calculation.</p>
                            <p className='max-w-[700px] mb-3'>Husnain: The abacus was the earliest counting device. That was made using beads, stones on wires or bones. It&apos;s used for mathematical calculations.</p>
                            <ul className="list-disc  ml-6 space-y-2">
                                <li>One of the earliest counting devices.</li>
                                <li>Consists of beads or stones on rods or wires.</li>
                                <li>Used for arithmetic calculations by sliding beads to represent numerical values.</li>
                                <li>Used in various cultures for centuries.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-4'>
                        <Image src="/1200px-Napier's_calculating_tables.jfif" className='rounded-xl' height={200} width={290} alt='Abacus' />
                        <div className='flex flex-col'>
                            <h3 className="text-xl font-medium">Napier’s Bones</h3>
                            <p className='max-w-[700px] mt-3 mb-3'>The Napier&apos;s Bones was made in the Scotland 17th century, and John Napier invented this device and used it for Multiplication and Division.</p>
                            <p className='max-w-[700px] mt-3 mb-3'>Husnain: John Napier invented Napier&apos;s Bones in Scotland 17th Century.
                                It&apos;s only used for Multiplication and Division. Napier&apos;s Bones is the first decimal-calculating device.</p>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>Developed by John Napier.</li>
                                <li>Manually operated calculating device using 9 separate strips (bones) marked with numerals.</li>
                                <li>Used to multiply and divide.</li>
                                <li>First machine to calculate using the decimal point system.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-4'>
                        <Image src="/Pascaline.jpg" className='rounded-xl' height={200} width={290} alt='Abacus' />
                        <div className='flex flex-col'>
                            <h3 className="text-xl font-medium">Pascaline</h3>
                            <p className='max-w-[700px] my-3'>
                                Pascaline&apos;s concept started in 1642. Blase Pascal invented this machine. Blase Pascal is a French mathematician, and his father, Étienne Pascal, worked in a tax company, so he had a lot of calculations, so Blase Pascal made Pascaline.
                            </p>
                            <p className='max-w-[700px] mb-2'>
                                Husnain: Blase Pascal&apos;s Father works in a tax company. He needs to make a lot of calculations every day. For this problem, Pascal invented Pascaline, the world&apos;s first mechanical device, in 1642.
                                He starts to sell it, but people reject it. Pascal is a French mathematician and Physicist.
                            </p>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>Invented in 1642 by Blaise Pascal, a French mathematician.</li>
                                <li>Considered the first mechanical and automated calculator.</li>
                                <li>Consisted of a wooden box with gears and wheels.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-4'>
                        <Image src="/Leibnitzrechenmaschine.jpg" className='rounded-xl' height={200} width={290} alt='Abacus' />
                        <div className='flex flex-col'>
                            <h3 className="text-xl font-medium">Stepped Reckoner or Leibniz Wheel</h3>
                            <p className='max-w-[700px] mt-3 mb-3'>Gottfried Wilhelm Leibniz invented this in 1673. He is a German mathematician and Stepped Reckoner or Leibniz Wheel, made in German, and is a calculation & mechanical device.</p>
                            <p className='max-w-[700px] mt-3 mb-3'>Husnain: Stepped Reckoner or Leibniz Wheel was invented by German mathematician Wilhelm Leibniz in 1673.
                                It&apos;    s improved Pascals invention. It can do Addition, Subtraction, Multiplication, and Division. It&apos;s a Mechanical Device using grooved wheels.</p>

                            <ul className="list-disc ml-6 space-y-2">
                                <li>Created in 1673 by German mathematician Wilhelm Leibniz.</li>
                                <li>Improved on Pascal&apos;s invention.</li>
                                <li>A digital mechanical calculator using grooved wheels.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium">Difference Engine</h3>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Created by Charles Babbage in the early 1820s.</li>
                            <li>A mechanical computer capable of basic computations.</li>
                            <li>Steam-powered calculating machine for solving numerical problems.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium">Analytical Engine</h3>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Another invention by Charles Babbage in 1830.</li>
                            <li>A mechanical computer that took input from punch cards.</li>
                            <li>Capable of solving mathematical problems and storing data in memory.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium">Tabulating Machine</h3>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Invented by Herman Hollerith in 1890.</li>
                            <li>Punch card-based mechanical calculator.</li>
                            <li>Used for computing statistics and recording data.</li>
                            <li>Hollerith&apos;s company eventually became IBM in 1924.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium">Differential Analyzer</h3>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Introduced by Vannevar Bush in 1930.</li>
                            <li>The first electrical computer made up of vacuum tubes used as switches.</li>
                            <li>Capable of performing 25 calculations per minute.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium">Mark 1</h3>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Invented by Howard Aiken in 1944.</li>
                            <li>A digital computer that could add three numbers with eight digits in one second.</li>
                            <li>Printed results on punched cards or an electric typewriter.</li>
                            <li>Dimensions: 50 feet long, 8 feet high, and weighed about 5 tons.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Computer Generations</h2>
                <div className="space-y-8">
                    <div>
                        <h3 className="text-xl font-medium">First Generation Computers (1940-1956)</h3>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Characterized by vacuum tube technology.</li>
                            <li>Slow processing speed.</li>
                            <li>Limited memory capacity.</li>
                            <li>Massive size, occupying entire rooms.</li>
                            <li>High cost and unreliability.</li>
                            <li>Significant power consumption and heat generation.</li>
                            <li>Input via punched cards, output via electric typewriters.</li>
                            <li>Machine language programming.</li>
                            <li>Examples: ENIAC, UNIVAC I, IBM 604, Mark-1, and EDSAC.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium">Second Generation Computers (1956-1963)</h3>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Marked by the transition from vacuum tubes to transistors.</li>
                            <li>Enhanced efficiency.</li>
                            <li>Smaller size and improved speed and memory capacity.</li>
                            <li>Increased reliability and cost-effectiveness.</li>
                            <li>Input/output methods included punch card readers, magnetic tapes, and printers.</li>
                            <li>Use of assembly language and high-level programming languages like FORTRAN and COBOL.</li>
                            <li>Examples: UNIVAC II, IBM 7030, General Electric GE 635, CDC 1604.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium">Third Generation Computers (1963-1971)</h3>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Use of integrated circuits (ICs).</li>
                            <li>Enhanced speed and memory due to IC chips.</li>
                            <li>Improved energy efficiency, size reduction, and reliability.</li>
                            <li>Interaction via keyboard and monitor.</li>
                            <li>Capability to run multiple application programs concurrently.</li>
                            <li>Examples: IBM System/360, Control Data Corporation&apos;s 3300 and 6600.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium">Fourth Generation Computers (1971-Present)</h3>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Development of Large Scale Integration (LSI) and Very Large Scale Integration (VLSI) chips.</li>
                            <li>Key innovation: microprocessor, capable of handling all processing tasks.</li>
                            <li>Exceptional speed and large storage capacity.</li>
                            <li>Small size, high reliability, low power consumption, and affordability.</li>
                            <li>Availability of diverse software.</li>
                            <li>Operating systems with Graphical User Interfaces (GUIs).</li>
                            <li>Support for multimedia software and modern programming languages.</li>
                            <li>Compatibility with portable and wireless input/output devices.</li>
                            <li>Examples: Intel Pentium series, IBM ThinkPad series, HP Pavilion series, Dell Inspiron series, Apple&apos;s MacBook Pro and MacBook Air.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium">Fifth Generation Computers</h3>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Focus on Artificial Intelligence (AI) technologies.</li>
                            <li>Machines with the capability to learn, think, innovate, reason, and solve problems.</li>
                            <li>Advanced parallel processing capabilities.</li>
                            <li>Ability to understand and respond to human languages (Natural Language Processing).</li>
                            <li>Incorporation of Expert Systems (ES) for replicating decision-making abilities of human experts.</li>
                            <li>User interfaces with voice recognition and gesture-based controls.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default page;