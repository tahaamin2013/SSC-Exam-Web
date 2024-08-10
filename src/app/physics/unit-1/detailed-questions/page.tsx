import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const Page = () => {
    return (
        <section
            id="FAQ"
            className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6"
        >
            <h1 className="font-bold text-3xl text-center mb-4">
                Detailed Questions and Answers on Physics (8 marks each)
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            1. Define Physics. Describe its revolutionary role in technology.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Physics is the branch of science concerned with the nature and properties of matter and energy. It is a fundamental science that deals with the basic principles governing the universe. Physics explains how forces interact with matter, how energy is transferred and transformed, and how the fundamental particles of the universe behave.
                            </p>
                            <p>
                                Its revolutionary role in technology includes the development of numerous technologies such as electrical circuits, lasers, semiconductors, and advanced materials. For example, the understanding of electromagnetism has led to the development of modern electronics and telecommunications, while quantum mechanics has paved the way for advancements in computing and material science.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            2. List with brief description of different branches of physics.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Classical Mechanics:</strong> Studies the motion of objects and the forces that act upon them.</p>
                            <p><strong>Electromagnetism:</strong> Deals with electric and magnetic fields and their interactions.</p>
                            <p><strong>Thermodynamics:</strong> Focuses on the principles of heat, energy, and work.</p>
                            <p><strong>Quantum Mechanics:</strong> Explores the behavior of particles at the atomic and subatomic levels.</p>
                            <p><strong>Relativity:</strong> Examines the effects of gravity on space and time, particularly in high-speed conditions.</p>
                            <p><strong>Optics:</strong> Studies the behavior and properties of light and its interaction with matter.</p>
                            <p><strong>Astrophysics:</strong> Applies the principles of physics to understand celestial objects and phenomena.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            3. What are physical quantities? Distinguish between base physical quantities and derived physical quantities. Give at least three examples to show that derived physical quantities are derived from base physical quantities.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Physical quantities are properties of physical systems that can be measured. They are classified into base quantities and derived quantities.
                            </p>
                            <p><strong>Base Physical Quantities:</strong> Fundamental quantities that are independent and cannot be derived from other quantities. Examples include:
                                <ul className="list-disc ml-6">
                                    <li>Length (meter)</li>
                                    <li>Mass (kilogram)</li>
                                    <li>Time (second)</li>
                                </ul>
                            </p>
                            <p><strong>Derived Physical Quantities:</strong> Quantities derived from base quantities. Examples include:
                                <ul className="list-disc ml-6">
                                    <li>Force (Newton): Derived from mass and acceleration (F = m·a).</li>
                                    <li>Pressure (Pascal): Derived from force and area (P = F/A).</li>
                                    <li>Velocity (m/s): Derived from length and time (v = d/t).</li>
                                </ul>
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            4. What do you mean by unit of a physical quantity? Define base units and derived units.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                A unit of a physical quantity is a standard measure used to quantify that quantity. Units provide a way to express and compare measurements in a consistent manner.
                            </p>
                            <p><strong>Base Units:</strong> Fundamental units in which base quantities are measured. They include:
                                <ul className="list-disc ml-6">
                                    <li>Meter (m) for length</li>
                                    <li>Kilogram (kg) for mass</li>
                                    <li>Second (s) for time</li>
                                </ul>
                            </p>
                            <p><strong>Derived Units:</strong> Units derived from base units. Examples include:
                                <ul className="list-disc ml-6">
                                    <li>Newton (N) for force, which is kg·m/s²</li>
                                    <li>Pascal (Pa) for pressure, which is kg/(m·s²)</li>
                                    <li>Joule (J) for energy, which is kg·m²/s²</li>
                                </ul>
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            5. What are prefixes? What is their use in measurements?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Prefixes are used to denote multiples or fractions of units, making it easier to express large or small quantities. For example:
                                <ul className="list-disc ml-6">
                                    <li>Kilo- (k) represents 10³ (e.g., kilogram = 10³ grams)</li>
                                    <li>Centi- (c) represents 10⁻² (e.g., centimeter = 10⁻² meters)</li>
                                    <li>Milli- (m) represents 10⁻³ (e.g., milligram = 10⁻³ grams)</li>
                                    <li>Micro- (µ) represents 10⁻⁶ (e.g., micrometer = 10⁻⁶ meters)</li>
                                </ul>
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6">
                        <AccordionTrigger>
                            6. What is scientific notation or standard form of noting down a measurement? Give at least five examples.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Scientific notation is a method of writing numbers that are too large or too small in a more compact form. It expresses numbers as a product of a coefficient and a power of ten. For example:
                                <ul className="list-disc ml-6">
                                    <li>5,000 = 5 × 10³</li>
                                    <li>0.0004 = 4 × 10⁻⁴</li>
                                    <li>3,200,000 = 3.2 × 10⁶</li>
                                    <li>0.000012 = 1.2 × 10⁻⁵</li>
                                    <li>7,500 = 7.5 × 10³</li>
                                </ul>
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-7">
                        <AccordionTrigger>
                            7. Describe construction and working of vernier calipers in detail.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                A vernier caliper is a precision instrument used to measure internal and external dimensions as well as depths. It consists of a main scale and a sliding vernier scale.
                            </p>
                            <p>
                                The main scale is marked with units (usually in millimeters), and the vernier scale slides over it. The vernier scale has a smaller increment that allows for precise measurements.
                            </p>
                            <p>
                                To measure an object, you slide the vernier scale until it fits snugly against the object. The measurement is read by combining the main scale reading with the vernier scale reading, which indicates the fractional part of the smallest division on the main scale.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-8">
                        <AccordionTrigger>
                            8. What is screw gauge? What is its pitch and least count? How is it used to measure thickness of thin copper wire?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                A screw gauge (also known as a micrometer screw gauge) is used to measure small dimensions with high precision. It consists of a screw mechanism that moves a spindle relative to a scale.
                            </p>
                            <p>
                                The pitch of a screw gauge is the distance moved by the screw per complete rotation (e.g., 1 mm per turn). The least count is the smallest measurement it can read (e.g., 0.01 mm), calculated as pitch divided by the number of divisions on the circular scale.
                            </p>
                            <p>
                                To measure the thickness of a thin copper wire, place the wire between the anvil and the spindle, then rotate the screw until it just touches the wire. Read the measurement from the main scale and the circular scale to obtain the total thickness.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-9">
                        <AccordionTrigger>
                            9. Define error. Differentiate between random and systematic error. How can these errors be reduced?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                An error is the difference between a measured value and the true value. Errors can be classified as random or systematic.
                            </p>
                            <p><strong>Random Error:</strong> Caused by unpredictable variations in measurements. It can be reduced by taking multiple readings and averaging them.</p>
                            <p><strong>Systematic Error:</strong> Consistent inaccuracies due to faults in measurement instruments or procedures. It can be reduced by calibrating instruments and correcting procedural faults.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-10">
                        <AccordionTrigger>
                            10. Differentiate between scalars and vectors. Justify that distance, speed, mass and energy are scalars while displacement, velocity, acceleration and force are vectors.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                - **Scalars:** Quantities that have magnitude only. Examples include:
                                <ul className="list-disc ml-6">
                                    <li>Distance: Total length traveled without direction.</li>
                                    <li>Speed: Rate of change of distance without direction.</li>
                                    <li>Mass: Amount of matter in an object.</li>
                                    <li>Energy: Capacity to do work, without direction.</li>
                                </ul>
                            </p>
                            <p>
                                - **Vectors:** Quantities that have both magnitude and direction. Examples include:
                                <ul className="list-disc ml-6">
                                    <li>Displacement: Change in position with direction.</li>
                                    <li>Velocity: Rate of change of displacement with direction.</li>
                                    <li>Acceleration: Rate of change of velocity with direction.</li>
                                    <li>Force: Interaction that causes an object to accelerate, with direction.</li>
                                </ul>
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-11">
                        <AccordionTrigger>
                            11. Justify and illustrate the use of a measuring cylinder to measure the volume of a liquid.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                A measuring cylinder is used to accurately measure the volume of liquids. It has a marked scale that allows precise volume readings.
                            </p>
                            <p>
                                To measure the volume of a liquid, fill the cylinder with the liquid and read the level at the bottom of the meniscus (curved surface). The reading corresponds to the volume of the liquid.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-12">
                        <AccordionTrigger>
                            12. Differentiate between precision and accuracy.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                - **Precision:** Refers to the consistency or repeatability of measurements. It indicates how close multiple measurements are to each other.
                            </p>
                            <p>
                                - **Accuracy:** Refers to how close a measurement is to the true or accepted value. It indicates the correctness of the measurement.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}

export default Page;
