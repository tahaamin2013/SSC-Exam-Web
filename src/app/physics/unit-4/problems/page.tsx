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
                        <AccordionTrigger>4.1 Find the resultant of the following forces.</AccordionTrigger>
                        <AccordionContent>
                            <p>(i) 10 N along x-axis</p>
                            <p>(ii) 6 N along y-axis</p>
                            <p>(iii) 4 N along negative x-axis</p>
                            <p><strong>Solution:</strong></p>
                            <p>Scale 2N = 1cm</p>
                            <p>10N = 5cm</p>
                            <p>6N = 3cm</p>
                            <p>4N = 2cm</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>4.2 Find the components of a force of 50 N making an angle of 30° with x-axis.</AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong></p>
                            <p>Force F = 50 N</p>
                            <p>Angle θ = 30°</p>
                            <p><strong>Required:</strong></p>
                            <p>Horizontal component of force Fx = ?</p>
                            <p>Vertical component of force Fy = ?</p>
                            <p><strong>Solution:</strong></p>
                            <p>As we know that: Fx = F cos θ</p>
                            <p>Fx = 50 x cos 30°</p>
                            <p>Fx = 50 x 0.866</p>
                            <p>Fx = 43.3 N</p>
                            <p>Also, Fy = F sin θ</p>
                            <p>Fy = 50 x sin 30°</p>
                            <p>Fy = 50 x 0.5</p>
                            <p>Fy = 25 N</p>
                            <p><strong>Result:</strong></p>
                            <p>Horizontal component of force Fx = 43.3 N</p>
                            <p>Vertical component of force Fy = 25 N</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>4.3 Find the magnitude and direction of a force if its x-component is 12 N and y-component is 5 N.</AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong></p>
                            <p>X-component of the force Fx = 12N</p>
                            <p>Y-component of the force Fy = 5N</p>
                            <p><strong>Required:</strong></p>
                            <p>Magnitude of the resultant force F = ?</p>
                            <p>Direction of the resultant force θ = ?</p>
                            <p><strong>Solution:</strong></p>
                            <p>According to Pythagoras theorem:</p>
                            <p>F = √(Fx² + Fy²)</p>
                            <p>F = √(12² + 5²)</p>
                            <p>F = √(144 + 25)</p>
                            <p>F = √169</p>
                            <p>F = 13 N</p>
                            <p>θ = tan⁻¹(Fy / Fx)</p>
                            <p>θ = tan⁻¹(5 / 12)</p>
                            <p>θ = 22.6° with x-axis</p>
                            <p><strong>Result:</strong></p>
                            <p>Magnitude of the resultant force F = 13 N</p>
                            <p>Direction of the resultant force θ = 22.6° with x-axis</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>4.4 A force of 100 N is applied perpendicularly on a spanner at a distance of 10 cm from a nut. Find the torque produced by the force.</AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong></p>
                            <p>Force acting on spanner F = 100 N</p>
                            <p>Distance from nut L = 10 cm = 0.1 m</p>
                            <p><strong>Required:</strong></p>
                            <p>Torque produced by the force τ = ?</p>
                            <p><strong>Solution:</strong></p>
                            <p>As we know that: τ = F x L</p>
                            <p>τ = 100 x 0.1</p>
                            <p>τ = 10 Nm</p>
                            <p><strong>Result:</strong></p>
                            <p>Torque produced by the force τ = 10 Nm</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger>4.5 A force is acting on a body making an angle of 30° with the horizontal. The horizontal component of force is 20 N. Find the force.</AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong></p>
                            <p>Horizontal component of the force Fx = 20 N</p>
                            <p>Angle formed with the horizontal θ = 30°</p>
                            <p><strong>Required:</strong></p>
                            <p>Force applied F = ?</p>
                            <p><strong>Solution:</strong></p>
                            <p>As we know that: Fx = F cos θ</p>
                            <p>20 = F x 0.866</p>
                            <p>F = 20 / 0.866</p>
                            <p>F = 23.09 N</p>
                            <p><strong>Result:</strong></p>
                            <p>Force applied F = 23.1 N</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6">
                        <AccordionTrigger>4.6 The steering of a car has a radius of 16 cm. Find the torque produced by a couple of 50 N.</AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong></p>
                            <p>Force of the couple F = 50 N</p>
                            <p>Radius of the steering r = 16 cm</p>
                            <p>Couple arm d = AB = 32 cm = 0.32 m</p>
                            <p><strong>Required:</strong></p>
                            <p>Torque produced by the couple τ = ?</p>
                            <p><strong>Solution:</strong></p>
                            <p>As we know that: τ = F x AB</p>
                            <p>τ = 50 x 0.32</p>
                            <p>τ = 16 Nm</p>
                            <p><strong>Result:</strong></p>
                            <p>Torque produced by the couple τ = 16 Nm</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-7">
                        <AccordionTrigger>4.7 A picture frame is hanging by two vertical strings. The tensions in the strings are 3.8 N and 4.4 N. Find the weight of the picture frame.</AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong></p>
                            <p>Tension in the first string T1 = 3.8 N</p>
                            <p>Tension in the second string T2 = 4.4 N</p>
                            <p><strong>Required:</strong></p>
                            <p>Weight of the picture frame w = ?</p>
                            <p><strong>Solution:</strong></p>
                            <p>From the first condition of equilibrium, we have:</p>
                            <p>Sum of downward forces = Sum of upward forces</p>
                            <p>w = T1 + T2</p>
                            <p>w = 3.8 N + 4.4 N</p>
                            <p>w = 8.2 N</p>
                            <p><strong>Result:</strong></p>
                            <p>Weight of the picture frame w = 8.2 N</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-8">
                        <AccordionTrigger>4.8 Two blocks of masses 5 kg and 3 kg are suspended by two strings. Find the tension in each string.</AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong></p>
                            <p>Mass of the upper block m1 = 5 kg</p>
                            <p>Mass of the lower block m2 = 3 kg</p>
                            <p>Weight of the upper block w1 = m1g = 5 x 10 = 50 N</p>
                            <p>Weight of the lower block w2 = m2g = 3 x 10 = 30 N</p>
                            <p><strong>Required:</strong></p>
                            <p>Tension in upper string T1 = ?</p>
                            <p>Tension in lower string T2 = ?</p>
                            <p><strong>Solution:</strong></p>
                            <p>From the second condition of equilibrium, we have:</p>
                            <p>Tension in the lower string = Weight of the lower block</p>
                            <p>T2 = w2</p>
                            <p>T2 = 30 N</p>
                            <p>Tension in the upper string = Weight of the lower block + Weight of the upper block</p>
                            <p>T1 = w1 + w2</p>
                            <p>T1 = 50 N + 30 N</p>
                            <p>T1 = 80 N</p>
                            <p><strong>Result:</strong></p>
                            <p>Tension in upper string T1 = 80 N</p>
                            <p>Tension in lower string T2 = 30 N</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-9">
                        <AccordionTrigger>4.9 A nut has been tightened by a force of 200 N using a 10 cm long spanner. What length of spanner is required to loosen the same nut with a 150 N force?</AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong></p>
                            <p>Initial force F1 = 200 N</p>
                            <p>Initial moment arm L1 = 10 cm = 0.1 m</p>
                            <p>Second force F2 = 150 N</p>
                            <p><strong>Required:</strong></p>
                            <p>Second moment arm L2 = ?</p>
                            <p><strong>Solution:</strong></p>
                            <p>According to the second condition of equilibrium:</p>
                            <p>Clockwise torque = Anticlockwise torque</p>
                            <p>F1 x L1 = F2 x L2</p>
                            <p>200 x 0.1 = 150 x L2</p>
                            <p>L2 = 200 x 0.1 / 150</p>
                            <p>L2 = 0.133 m</p>
                            <p>L2 = 13.3 cm</p>
                            <p><strong>Result:</strong></p>
                            <p>Second moment arm L2 = 13.3 cm</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-10">
                        <AccordionTrigger>4.10 A block of 10 kg is suspended at a distance of 20 cm from the center of a 1 m long uniform bar. What force is required to balance it at its center by applying the force at the other end of the bar?</AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong></p>
                            <p>Mass of block m = 10 kg</p>
                            <p>Weight of the block F1 = mg = 10 x 10 = 100 N</p>
                            <p>First moment arm L1 = 20 cm = 0.2 m</p>
                            <p>Second moment arm L2 = 50 cm = 0.5 m</p>
                            <p><strong>Required:</strong></p>
                            <p>Second force F2 = ?</p>
                            <p><strong>Solution:</strong></p>
                            <p>According to the second condition of equilibrium:</p>
                            <p>Clockwise torque = Anticlockwise torque</p>
                            <p>F2 x L2 = F1 x L1</p>
                            <p>F2 x 0.5 = 100 x 0.2</p>
                            <p>F2 = 100 x 0.2 / 0.5</p>
                            <p>F2 = 40 N</p>
                            <p><strong>Result:</strong></p>
                            <p>Second force F2 = 40 N</p>
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
            </div>
        </section>
    );
};

export default Page;
