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
                Physics Problems
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            3.1 20 N force moves a body with an acceleration of 2 m/s². What is its mass?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong><br />
                                Force acting on the body F = 20 N<br />
                                Acceleration of the body a = 2 m/s²</p>
                            <p><strong>Required:</strong><br />
                                Mass of the body m = ?</p>
                            <p><strong>Solution:</strong><br />
                                From Newton&apos;s second law of motion, F = ma<br />
                                m = F / a = 20 / 2 = 10 kg</p>
                            <p><strong>Result:</strong><br />
                                Mass of the body m = 10 kg</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            3.2 The weight of a body is 147 N. What is its mass?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong><br />
                                Weight of the body W = 147 N<br />
                                Gravitational acceleration g = 10 m/s²</p>
                            <p><strong>Required:</strong><br />
                                Mass of the body m = ?</p>
                            <p><strong>Solution:</strong><br />
                                As we know that W = mg<br />
                                m = W / g = 147 / 10 = 14.7 kg</p>
                            <p><strong>Result:</strong><br />
                                Mass of the body m = 14.7 kg</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            3.3 How much force is needed to prevent a body of mass 10 kg from falling?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong><br />
                                Mass of the body = 10 kg<br />
                                Gravitational acceleration g = 10 m/s²</p>
                            <p><strong>Required:</strong><br />
                                Force required to prevent the body from falling?</p>
                            <p><strong>Solution:</strong><br />
                                Force required R = mg = 10 x 10 = 100 N</p>
                            <p><strong>Result:</strong><br />
                                Force required to prevent the body from falling R = 100 N</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            3.4 Find the acceleration produced by a force of 100 N in a mass of 50 kg.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong><br />
                                Force acting on the body F = 100 N<br />
                                Mass of the body m = 50 kg</p>
                            <p><strong>Required:</strong><br />
                                Acceleration of the body a = ?</p>
                            <p><strong>Solution:</strong><br />
                                From Newton&apos;s second law of motion, F = ma<br />
                                a = F / m = 100 / 50 = 2 m/s²</p>
                            <p><strong>Result:</strong><br />
                                Acceleration of the body a = 2 m/s²</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            3.5 A body has weight 20 N. How much force is required to move it vertically upwards with an acceleration of 2 m/s²?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong><br />
                                Weight of the body W = 20 N<br />
                                Acceleration of the body a = 2 m/s²<br />
                                Gravitational acceleration g = 10 m/s²</p>
                            <p><strong>Required:</strong><br />
                                Force acting on the body moving vertically upward F = ?</p>
                            <p><strong>Solution:</strong><br />
                                Mass of the body m = W / g = 20 / 10 = 2 kg<br />
                                From Newton&apos;s second law of motion, F = ma + W<br />
                                F = (2 x 2) + 20 = 4 + 20 = 24 N</p>
                            <p><strong>Result:</strong><br />
                                Force acting on the body moving vertically upward F = 24 N</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>
                            3.6 Two masses 52 kg and 48 kg are attached to the ends of a string that passes over a frictionless pulley. Find the tension in the string and acceleration in the bodies.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong><br />
                                Mass of the first body m₁ = 52 kg<br />
                                Mass of the second body m₂ = 48 kg<br />
                                Gravitational acceleration g = 10 m/s²</p>
                            <p><strong>Required:</strong><br />
                                Acceleration of the bodies a = ?<br />
                                Tension in the string T = ?</p>
                            <p><strong>Solution:</strong><br />
                                Acceleration of the bodies a = (m₁ - m₂)g / (m₁ + m₂)<br />
                                a = (52 - 48) x 10 / (52 + 48) = 40 / 100 = 0.4 m/s²<br />
                                Tension in the string T = (2m₁m₂g) / (m₁ + m₂)<br />
                                T = (2 x 52 x 48 x 10) / (52 + 48) = 49920 / 100 = 499.2 N ≈ 500 N</p>
                            <p><strong>Result:</strong><br />
                                Acceleration of the bodies a = 0.4 m/s²<br />
                                Tension in the string T = 500 N</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger>
                            3.7 Two masses 26 kg and 24 kg are attached to the ends of a string which passes over a frictionless pulley. 26 kg is lying over a smooth horizontal table. 24 kg mass is moving vertically downward. Find the tension in the string and the acceleration in the bodies.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong><br />
                                Mass of the block moving vertically m₁ = 24 kg<br />
                                Mass of the block moving along the table m₂ = 26 kg<br />
                                Gravitational acceleration g = 10 m/s²</p>
                            <p><strong>Required:</strong><br />
                                Acceleration of the bodies a = ?<br />
                                Tension in the string T = ?</p>
                            <p><strong>Solution:</strong><br />
                                Acceleration of the bodies a = m₁g / (m₁ + m₂)<br />
                                a = (24 x 10) / (24 + 26) = 240 / 50 = 4.8 m/s²<br />
                                Tension in the string T = (m₁ x g) - (m₂ x a)<br />
                                T = (24 x 10) - (26 x 4.8) = 240 - 124.8 = 115.2 N ≈ 125 N</p>
                            <p><strong>Result:</strong><br />
                                Acceleration in the bodies a = 4.8 m/s²<br />
                                Tension in the string T = 125 N</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-8">
                        <AccordionTrigger>
                            3.8 How much time is required to change 22 Ns momentum by a force of 20 N?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong><br />
                                Change in momentum ΔP = 22 Ns<br />
                                Force applied F = 20 N</p>
                            <p><strong>Required:</strong><br />
                                Time required t = ?</p>
                            <p><strong>Solution:</strong><br />
                                Using the formula ΔP = F x t<br />
                                t = ΔP / F = 22 / 20 = 1.1 s</p>
                            <p><strong>Result:</strong><br />
                                Time required t = 1.1 s</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-9">
                        <AccordionTrigger>
                            3.9 How much is the force of friction between a wood block of mass 5 kg and the horizontal marble floor? The coefficient of friction between wood and marble is 0.6.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong><br />
                                Mass of the block m = 5 kg<br />
                                Coefficient of friction μ = 0.6</p>
                            <p><strong>Required:</strong><br />
                                Force of friction F = ?</p>
                            <p><strong>Solution:</strong><br />
                                Force of friction F = μmg<br />
                                F = 0.6 x 5 x 10 = 30 N</p>
                            <p><strong>Result:</strong><br />
                                Force of friction F = 30 N</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-10">
                        <AccordionTrigger>
                            3.10 How much centripetal force is needed to make a body of 0.5 kg move in a circle of radius 50 cm with a speed of 3 m/s?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong><br />
                                Mass of the body m = 0.5 kg<br />
                                Radius of the circle r = 50 cm = 0.5 m<br />
                                Speed of the body v = 3 m/s</p>
                            <p><strong>Required:</strong><br />
                                Centripetal force F = ?</p>
                            <p><strong>Solution:</strong><br />
                                Centripetal force F = mv² / r<br />
                                F = (0.5 x 3²) / 0.5 = 4.5 / 0.5 = 9 N</p>
                            <p><strong>Result:</strong><br />
                                Centripetal force F = 9 N</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};

export default Page;
