import React from "react";
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
                Problem Solving Questions
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    {/* Problem 6.1 */}
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            6.1 A man has pulled a cart through 35 m applying a force of 300 N. Find the work done by the man.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong> Force applied F=300 N, Distance moved by cart S=35 m</p>
                            <p><strong>Required:</strong> Work done by the man W?</p>
                            <p><strong>Solution:</strong> W = F × S = 300 × 35 = 10500 J</p>
                            <p><strong>Result:</strong> Work done by the man W = 10500 J</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Problem 6.2 */}
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            6.2 A block weighing 20 N is lifted 6 m vertically upward. Calculate the potential energy stored in it.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong> Weight of the block W=20 N, Distance moved vertically upward h=6 m</p>
                            <p><strong>Required:</strong> Potential energy of the block P.E.?</p>
                            <p><strong>Solution:</strong> P.E. = W × h = 20 × 6 = 120 J</p>
                            <p><strong>Result:</strong> Potential energy of the block P.E. = 120 J</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Problem 6.3 */}
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            6.3 A car weighing 12 kN has speed of 20 m/s. Find its kinetic energy stored in it.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong> Weight of car W = 12 kN, Speed of car v = 20 m/s</p>
                            <p><strong>Required:</strong> Kinetic energy stored in car K.E.?</p>
                            <p><strong>Solution:</strong> K.E. = 0.5 × m × v² = 0.5 × 1200 × 20² = 240000 J = 240 kJ</p>
                            <p><strong>Result:</strong> Kinetic energy stored in car K.E. = 240 kJ</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Problem 6.4 */}
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            6.4 A 500 g stone is thrown up with a velocity of 15 m/s. Find its
                            <br /> i) P.E. at its maximum height
                            <br /> ii) K.E. when it hits the ground
                        </AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong> Mass of the stone m = 500 g = 0.5 kg, Velocity of the stone v = 15 m/s</p>
                            <p><strong>Required:</strong> i) P.E. at its maximum height, ii) K.E. when it hits the ground</p>
                            <p><strong>Solution:</strong>
                                <br /> i) Potential energy at maximum height = 0.5 × 15² = 56.25 J
                                <br /> ii) K.E. when it hits the ground = P.E. at maximum height = 56.25 J
                            </p>
                            <p><strong>Result:</strong>
                                <br /> i) P.E. at its maximum height = 56.25 J
                                <br /> ii) K.E. when it hits the ground = 56.25 J
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Problem 6.5 */}
                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            6.5 On reaching the top of a slope 6 m high from its bottom, a cyclist has a speed of 1.5 m/s. Find the kinetic energy and the potential energy of the cyclist. The mass of the cyclist and his bicycle is 40 kg.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong> Speed of the cyclist v = 1.5 m/s, Height of slope h = 6 m, Mass of cyclist and bicycle m = 40 kg</p>
                            <p><strong>Required:</strong> Kinetic energy of the cyclist K.E., Potential energy of the cyclist P.E.</p>
                            <p><strong>Solution:</strong>
                                <br /> P.E. = m × g × h = 40 × 10 × 6 = 2400 J
                                <br /> K.E. = 0.5 × m × v² = 0.5 × 40 × 1.5² = 45 J
                            </p>
                            <p><strong>Result:</strong>
                                <br /> Kinetic energy of the cyclist K.E. = 45 J
                                <br /> Potential energy of the cyclist P.E. = 2400 J
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Problem 6.6 */}
                    <AccordionItem value="item-6">
                        <AccordionTrigger>
                            6.6 A motor boat moves at a steady speed of 4 m/s. Water resistance acting on it is 4000 N. Calculate the power of its engine.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong> Speed of the motor boat v = 4 m/s, Water resistance acting on boat F = 4000 N</p>
                            <p><strong>Required:</strong> Power of the engine of motor boat P?</p>
                            <p><strong>Solution:</strong> P = F × v = 4000 × 4 = 16000 W = 16 kW</p>
                            <p><strong>Result:</strong> Power of the engine of motor boat P = 16 kW</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Problem 6.7 */}
                    <AccordionItem value="item-7">
                        <AccordionTrigger>
                            6.7 A man pulls a block with a force of 300 N through 50 m in 60 s. Find the power used by him to pull the block.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong> Force applied on block F = 300 N, Distance covered by the block S = 50 m, Time taken t = 60 s</p>
                            <p><strong>Required:</strong> Power used to pull the block P?</p>
                            <p><strong>Solution:</strong> Work done W = F × S = 300 × 50 = 15000 J
                                <br /> P = W / t = 15000 / 60 = 250 W
                            </p>
                            <p><strong>Result:</strong> Power used to pull the block P = 250 W</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Problem 6.8 */}
                    <AccordionItem value="item-8">
                        <AccordionTrigger>
                            6.8 A 50 kg man moved 25 steps up in 20 seconds. Find his power, if each step is 16 cm high.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong> Mass of man m = 50 kg, Height of each step h = 16 cm = 0.16 m, Number of steps = 25, Time taken t = 20 s</p>
                            <p><strong>Required:</strong> Power of the man P?</p>
                            <p><strong>Solution:</strong>
                                <br /> Work done W = m × g × h × number of steps = 50 × 10 × 0.16 × 25 = 2000 J
                                <br /> P = W / t = 2000 / 20 = 100 W
                            </p>
                            <p><strong>Result:</strong> Power of the man P = 100 W</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Problem 6.9 */}
                    <AccordionItem value="item-9">
                        <AccordionTrigger>
                            6.9 Calculate the power of a pump which can lift 200 kg of water through a height of 6 m in 10 seconds.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong> Mass of the water m = 200 kg, Height h = 6 m, Time taken t = 10 s</p>
                            <p><strong>Required:</strong> Power of the pump P?</p>
                            <p><strong>Solution:</strong> Work done W = m × g × h = 200 × 10 × 6 = 12000 J
                                <br /> P = W / t = 12000 / 10 = 1200 W = 1.2 kW
                            </p>
                            <p><strong>Result:</strong> Power of the pump P = 1.2 kW</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Problem 6.10 */}
                    <AccordionItem value="item-10">
                        <AccordionTrigger>
                            6.10 A power of 2.5 kW is used to drive a lift. If the lift carries 500 kg of weight, find the height to which the lift can lift the weight in 30 seconds.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong> Power P = 2.5 kW = 2500 W, Mass of the weight m = 500 kg, Time t = 30 s</p>
                            <p><strong>Required:</strong> Height h?</p>
                            <p><strong>Solution:</strong>
                                <br /> Work done W = Power × Time = 2500 × 30 = 75000 J
                                <br /> h = W / (m × g) = 75000 / (500 × 10) = 15 m
                            </p>
                            <p><strong>Result:</strong> Height to which the lift can lift the weight h = 15 m</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};

export default Page;
