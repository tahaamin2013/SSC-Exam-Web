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
                Problems
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>4.1 Resultant of Forces</AccordionTrigger>
                        <AccordionContent>
                            <p>Find the resultant of the following forces:</p>
                            <ul className="list-disc list-inside ml-4">
                                <li>(i) 10 N along x-axis</li>
                                <li>(ii) 6 N along y-axis</li>
                                <li>(iii) 4 N along negative x-axis</li>
                            </ul>
                            <p><strong>Solution:</strong></p>
                            <p>Scale 2N = 1cm</p>
                            <ul className="list-disc list-inside ml-4">
                                <li>10N = 5cm</li>
                                <li>6N = 3cm</li>
                                <li>4N = 2cm</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>4.2 Components of a Force</AccordionTrigger>
                        <AccordionContent>
                            <p>Find the components of a force of 50 N making an angle of 30° with the x-axis.</p>
                            <p><strong>Given Data:</strong></p>
                            <ul className="list-disc list-inside ml-4">
                                <li>Force \( F = 50 \) N</li>
                                <li>Angle \( \theta = 30° \)</li>
                            </ul>
                            <p><strong>Required:</strong></p>
                            <ul className="list-disc list-inside ml-4">
                                <li>Horizontal component of force \( F_x \)?</li>
                                <li>Vertical component of force \( F_y \)?</li>
                            </ul>
                            <p><strong>Solution:</strong></p>
                            <p>As we know that:</p>
                            <p>\( F_x = F \cos \theta \)</p>
                            <p>\( F_y = F \sin \theta \)</p>
                            <p>By putting the values, we have:</p>
                            <p>\( F_x = 50 \times \cos 30° = 50 \times 0.866 = 43.3 \) N</p>
                            <p>\( F_y = 50 \times \sin 30° = 50 \times 0.5 = 25 \) N</p>
                            <p><strong>Result:</strong></p>
                            <p>Horizontal component of force \( F_x = 43.3 \) N</p>
                            <p>Vertical component of force \( F_y = 25 \) N</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>4.3 Magnitude and Direction of a Force</AccordionTrigger>
                        <AccordionContent>
                            <p>Find the magnitude and direction of a force if its x-component is 12 N and y-component is 5 N.</p>
                            <p><strong>Given Data:</strong></p>
                            <ul className="list-disc list-inside ml-4">
                                <li>x-component of the force \( F_x = 12 \) N</li>
                                <li>y-component of the force \( F_y = 5 \) N</li>
                            </ul>
                            <p><strong>Required:</strong></p>
                            <ul className="list-disc list-inside ml-4">
                                <li>Magnitude of the resultant force \( F \)?</li>
                                <li>Direction of the resultant force \( \theta \)?</li>
                            </ul>
                            <p><strong>Solution:</strong></p>
                            <p>According to the Pythagoras theorem:</p>
                            <p>\( F = \sqrt｛F_x ^ 2 + F_y ^ 2｝ \)</p>
                            <p>\( \theta = \tan^｛-1｝ \left(\frac｛F_y｝｛F_x｝\right) \)</p>
                            <p>By putting the values, we have:</p>
                            <p>\( F = \sqrt｛12 ^ 2 + 5 ^ 2｝ = 13 \) N</p>
                            <p>\( \theta = \tan^｛-1｝ \left(\frac｛5｝｛12｝\right) = 22.6° \) with x-axis</p>
                            <p><strong>Result:</strong></p>
                            <p>Magnitude of the resultant force \( F = 13 \) N</p>
                            <p>Direction of the resultant force \( \theta = 22.6° \) with x-axis</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>4.4 Torque Produced by a Force</AccordionTrigger>
                        <AccordionContent>
                            <p>A force of 100 N is applied perpendicularly on a spanner at a distance of 10 cm from a nut. Find the torque produced by the force.</p>
                            <p><strong>Given Data:</strong></p>
                            <ul className="list-disc list-inside ml-4">
                                <li>Force acting on spanner \( F = 100 \) N</li>
                                <li>Distance from nut \( L = 10 \) cm \( = 0.1 \) m</li>
                            </ul>
                            <p><strong>Required:</strong></p>
                            <ul className="list-disc list-inside ml-4">
                                <li>Torque produced by the force \( \tau \)?</li>
                            </ul>
                            <p><strong>Solution:</strong></p>
                            <p>As we know that:</p>
                            <p>\( \tau = F \times L \)</p>
                            <p>By putting the values, we have:</p>
                            <p>\( \tau = 100 \times 0.1 = 10 \) Nm</p>
                            <p><strong>Result:</strong></p>
                            <p>Torque produced by the force \( \tau = 10 \) Nm</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger>4.5 Force Acting on a Body</AccordionTrigger>
                        <AccordionContent>
                            <p>A force is acting on a body making an angle of 30° with the horizontal. The horizontal component of force is 20 N. Find the force.</p>
                            <p><strong>Given Data:</strong></p>
                            <ul className="list-disc list-inside ml-4">
                                <li>Horizontal component of the force \( F_x = 20 \) N</li>
                                <li>Angle formed with the horizontal \( \theta = 30° \)</li>
                            </ul>
                            <p><strong>Required:</strong></p>
                            <ul className="list-disc list-inside ml-4">
                                <li>Force applied \( F \)?</li>
                            </ul>
                            <p><strong>Solution:</strong></p>
                            <p>As we know that:</p>
                            <p>\( F_x = F \cos \theta \)</p>
                            <p>By putting the values, we have:</p>
                            <p>\( F = \frac｛F_x｝｛\cos \theta｝ = \frac｛20｝｛0.866｝ = 23.1 \) N</p>
                            <p><strong>Result:</strong></p>
                            <p>Force applied \( F = 23.1 \) N</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6">
                        <AccordionTrigger>4.6 Torque Produced by a Couple</AccordionTrigger>
                        <AccordionContent>
                            <p>The steering of a car has a radius of 16 cm. Find the torque produced by a couple of 50 N.</p>
                            <p><strong>Given Data:</strong></p>
                            <ul className="list-disc list-inside ml-4">
                                <li>Force of the couple \( F = 50 \) N</li>
                                <li>Radius of the steering \( r = 16 \) cm</li>
                                <li>Couple arm \( d = 32 \) cm \( = 0.32 \) m</li>
                            </ul>
                            <p><strong>Required:</strong></p>
                            <ul className="list-disc list-inside ml-4">
                                <li>Torque produced by the couple \( \tau \)?</li>
                            </ul>
                            <p><strong>Solution:</strong></p>
                            <p>As we know that:</p>
                            <p>\( \tau = F \times d \)</p>
                            <p>By putting the values, we have:</p>
                            <p>\( \tau = 50 \times 0.32 = 16 \) Nm</p>
                            <p><strong>Result:</strong></p>
                            <p>Torque produced by the couple \( \tau = 16 \) Nm</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-7">
                        <AccordionTrigger>4.7 Weight of a Picture Frame</AccordionTrigger>
                        <AccordionContent>
                            <p>A picture frame is hanging by two vertical strings. The tensions in the strings are 3.8 N and 4.4 N. Find the weight of the picture frame.</p>
                            <p><strong>Given Data:</strong></p>
                            <ul className="list-disc list-inside ml-4">
                                <li>Tension in the first string \( T_1 = 3.8 \) N</li>
                                <li>Tension in the second string \( T_2 = 4.4 \) N</li>
                            </ul>
                            <p><strong>Required:</strong></p>
                            <ul className="list-disc list-inside ml-4">
                                <li>Weight of the picture frame \( w \)?</li>
                            </ul>
                            <p><strong>Solution:</strong></p>
                            <p>From the first condition of equilibrium, we have:</p>
                            <p>Sum of downward forces = Sum of upward forces</p>
                            <p>\( w = T_1 + T_2 \)</p>
                            <p>By putting the values, we have:</p>
                            <p>\( w = 3.8 \) N \( + 4.4 \) N \( = 8.2 \) N</p>
                            <p><strong>Result:</strong></p>
                            <p>Weight of the picture frame \( w = 8.2 \) N</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-8">
                        <AccordionTrigger>4.8 Tension in Strings</AccordionTrigger>
                        <AccordionContent>
                            <p>Two blocks of masses 5 kg and 3 kg are suspended by two strings. The weights of the two blocks are shown. Find the tension in each string.</p>
                            <p><strong>Given Data:</strong></p>
                            <ul className="list-disc list-inside ml-4">
                                <li>Mass of upper block \( m_1 = 5 \) kg</li>
                                <li>Mass of below block \( m_2 = 3 \) kg</li>
                                <li>Weight of the upper block \( w_1 = m_1 \times g = 5 \times 10 = 50 \) N</li>
                                <li>Weight of the below block \( w_2 = m_2 \times g = 3 \times 10 = 30 \) N</li>
                            </ul>
                            <p><strong>Required:</strong></p>
                            <ul className="list-disc list-inside ml-4">
                                <li>Tension in upper string \( T_1 \)?</li>
                                <li>Tension in lower string \( T_2 \)?</li>
                            </ul>
                            <p><strong>Solution:</strong></p>
                            <p>From the second condition of equilibrium, we have:</p>
                            <p>Tension in the lower string = weight of the lower block</p>
                            <p>\( T_2 = w_2 = 30 \) N</p>
                            <p>Tension in the upper string = weight of lower block + weight of upper block</p>
                            <p>\( T_1 = w_1 + w_2 = 50 \) N \( + 30 \) N \( = 80 \) N</p>
                            <p><strong>Result:</strong></p>
                            <p>Tension in upper string \( T_1 = 80 \) N</p>
                            <p>Tension in lower string \( T_2 = 30 \) N</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-9">
                        <AccordionTrigger>4.9 Spanner Length for Loosening a Nut</AccordionTrigger>
                        <AccordionContent>
                            <p>A nut has been tightened by a force of 200 N using a 10 cm long spanner. What length of spanner is required to loosen the same nut with 150 N force?</p>
                            <p><strong>Given Data:</strong></p>
                            <ul className="list-disc list-inside ml-4">
                                <li>Initial force \( F_1 = 200 \) N</li>
                                <li>Initial moment arm \( L_1 = 10 \) cm \( = 0.1 \) m</li>
                                <li>Second force \( F_2 = 150 \) N</li>
                            </ul>
                            <p><strong>Required:</strong></p>
                            <ul className="list-disc list-inside ml-4">
                                <li>Second moment arm \( L_2 \)?</li>
                            </ul>
                            <p><strong>Solution:</strong></p>
                            <p>According to the second condition of equilibrium, we have:</p>
                            <p>Clockwise torque = Anticlockwise torque</p>
                            <p>\( F_1 \times L_1 = F_2 \times L_2 \)</p>
                            <p>By putting the values, we have:</p>
                            <p>\( 200 \times 0.1 = 150 \times L_2 \)</p>
                            <p>\( L_2 = \frac｛200 \times 0.1｝｛150｝ = 0.133 \) m \( = 13.3 \) cm</p>
                            <p><strong>Result:</strong></p>
                            <p>Second moment arm \( L_2 = 13.3 \) cm</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-10">
                        <AccordionTrigger>4.10 Force Required to Balance a Bar</AccordionTrigger>
                        <AccordionContent>
                            <p>A block of 10 kg is suspended at a distance of 20 cm from the center of a 1 m long uniform bar. What force is required to balance it at its center by applying the force at the other end of the bar?</p>
                            <p><strong>Given Data:</strong></p>
                            <ul className="list-disc list-inside ml-4">
                                <li>Mass of block \( m = 10 \) kg</li>
                                <li>Weight of the block \( w = mg = 10 \times 10 = 100 \) N</li>
                                <li>First moment arm \( L_1 = 20 \) cm \( = 0.2 \) m</li>
                                <li>Second moment arm \( L_2 = 50 \) cm \( = 0.5 \) m</li>
                            </ul>
                            <p><strong>Required:</strong></p>
                            <ul className="list-disc list-inside ml-4">
                                <li>Second force \( F \)?</li>
                            </ul>
                            <p><strong>Solution:</strong></p>
                            <p>According to the second condition of equilibrium, we have:</p>
                            <p>Clockwise torque = Anticlockwise torque</p>
                            <p>\( F \times L_2 = w \times L_1 \)</p>
                            <p>By putting the values, we have:</p>
                            <p>\( F \times 0.5 = 100 \times 0.2 \)</p>
                            <p>\( F = \frac｛100 \times 0.2｝｛0.5｝ = 40 \) N</p>
                            <p><strong>Result:</strong></p>
                            <p>Second force \( F = 40 \) N</p>
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
            </div>
        </section>
    );
};

export default Page;
