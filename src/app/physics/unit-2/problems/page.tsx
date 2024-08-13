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
            id="problems"
            className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6"
        >
            <h1 className="font-bold text-3xl text-center mb-4">
                Physics Problems and Solutions
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    {/* Problem 1 */}
                    <AccordionItem value="item-1">
                        <AccordionTrigger>1. A train moves with a uniform velocity of 36 km/h for 10 s. Find the distance traveled by it.</AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong></p>
                            <ul>
                                <li>Velocity of train (V) = 36 km/h</li>
                                <li>Time taken (t) = 10 s</li>
                            </ul>
                            <p><strong>Required:</strong></p>
                            <ul>
                                <li>Distance traveled (S)</li>
                            </ul>
                            <p><strong>Solution:</strong></p>
                            <p>First, convert velocity from km/h to m/s:</p>
                            <p>V = 36 km/h × (1000 m / 1 km) × (1 h / 3600 s) = 10 m/s</p>
                            <p>Using the formula S = V × t, we have:</p>
                            <p>S = 10 m/s × 10 s = 100 m</p>
                            <p><strong>Result:</strong> Distance traveled by train = 100 m</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Problem 2 */}
                    <AccordionItem value="item-2">
                        <AccordionTrigger>2. A vehicle starts from rest. It moves through 1 km in 100 s with uniform acceleration. What will be its speed at the end of 100 s?</AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong></p>
                            <ul>
                                <li>Initial velocity (u) = 0 m/s</li>
                                <li>Distance covered (S) = 1 km = 1000 m</li>
                                <li>Time taken (t) = 100 s</li>
                            </ul>
                            <p><strong>Required:</strong></p>
                            <ul>
                                <li>Speed of the vehicle at the end of 100 s (v)</li>
                            </ul>
                            <p><strong>Solution:</strong></p>
                            <p>First, find the acceleration (a) using the equation S = ut + 0.5at²:</p>
                            <p>1000 = 0 × 100 + 0.5 × a × (100)²</p>
                            <p>1000 = 0.5 × a × 10000</p>
                            <p>a = 0.2 m/s²</p>
                            <p>Now, using the equation v = u + at:</p>
                            <p>v = 0 + 0.2 × 100</p>
                            <p>v = 20 m/s</p>
                            <p><strong>Result:</strong> Speed of the vehicle at the end of 100 s = 20 m/s</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Problem 3 */}
                    <AccordionItem value="item-3">
                        <AccordionTrigger>3. A car has a velocity of 10 m/s. It accelerates at 0.2 m/s² for 30 s. Find the distance traveled during this time and the final velocity of the car.</AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong></p>
                            <ul>
                                <li>Initial velocity (u) = 10 m/s</li>
                                <li>Acceleration (a) = 0.2 m/s²</li>
                                <li>Time (t) = 30 s</li>
                            </ul>
                            <p><strong>Required:</strong></p>
                            <ul>
                                <li>Final velocity (v)</li>
                                <li>Distance traveled (S)</li>
                            </ul>
                            <p><strong>Solution:</strong></p>
                            <p>First, calculate the final velocity (v) using the equation v = u + at:</p>
                            <p>v = 10 + 0.2 × 30</p>
                            <p>v = 16 m/s</p>
                            <p>Next, calculate the distance traveled (S) using the equation S = ut + 0.5at²:</p>
                            <p>S = 10 × 30 + 0.5 × 0.2 × (30)²</p>
                            <p>S = 300 + 0.5 × 0.2 × 900</p>
                            <p>S = 300 + 90</p>
                            <p>S = 390 m</p>
                            <p><strong>Result:</strong> Final velocity = 16 m/s, Distance traveled = 390 m</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Problem 4 */}
                    <AccordionItem value="item-4">
                        <AccordionTrigger>4. A ball is dropped from a height of 45 m. Find the time taken to reach the ground and the velocity of the ball just before hitting the ground. (Neglect air resistance.)</AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong></p>
                            <ul>
                                <li>Height (h) = 45 m</li>
                                <li>Initial velocity (u) = 0 m/s</li>
                                <li>Acceleration due to gravity (g) = 9.8 m/s²</li>
                            </ul>
                            <p><strong>Required:</strong></p>
                            <ul>
                                <li>Time taken (t)</li>
                                <li>Final velocity (v)</li>
                            </ul>
                            <p><strong>Solution:</strong></p>
                            <p>First, find the time taken (t) using the equation h = 0.5gt²:</p>
                            <p>45 = 0.5 × 9.8 × t²</p>
                            <p>t² = 45 / (0.5 × 9.8)</p>
                            <p>t² = 45 / 4.9</p>
                            <p>t² ≈ 9.18</p>
                            <p>t ≈ √9.18</p>
                            <p>t ≈ 3.03 s</p>
                            <p>Now, find the final velocity (v) using the equation v = u + gt:</p>
                            <p>v = 0 + 9.8 × 3.03</p>
                            <p>v ≈ 29.7 m/s</p>
                            <p><strong>Result:</strong> Time taken = 3.03 s, Final velocity = 29.7 m/s</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Problem 5 */}
                    <AccordionItem value="item-5">
                        <AccordionTrigger>5. A cyclist covers a distance of 500 m in 2 minutes. What is the average speed of the cyclist?</AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong></p>
                            <ul>
                                <li>Distance covered (S) = 500 m</li>
                                <li>Time taken (t) = 2 minutes = 120 s</li>
                            </ul>
                            <p><strong>Required:</strong></p>
                            <ul>
                                <li>Average speed (v)</li>
                            </ul>
                            <p><strong>Solution:</strong></p>
                            <p>Average speed (v) is given by the formula v = S / t:</p>
                            <p>v = 500 / 120</p>
                            <p>v ≈ 4.17 m/s</p>
                            <p><strong>Result:</strong> Average speed = 4.17 m/s</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Problem 6 */}
                    <AccordionItem value="item-6">
                        <AccordionTrigger>6. A car moves from 0 to 60 km/h in 10 s. Calculate the acceleration of the car.</AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong></p>
                            <ul>
                                <li>Initial velocity (u) = 0 km/h = 0 m/s</li>
                                <li>Final velocity (v) = 60 km/h = 16.67 m/s</li>
                                <li>Time taken (t) = 10 s</li>
                            </ul>
                            <p><strong>Required:</strong></p>
                            <ul>
                                <li>Acceleration (a)</li>
                            </ul>
                            <p><strong>Solution:</strong></p>
                            <p>Acceleration (a) is given by the formula a = (v - u) / t:</p>
                            <p>a = (16.67 - 0) / 10</p>
                            <p>a = 1.67 m/s²</p>
                            <p><strong>Result:</strong> Acceleration = 1.67 m/s²</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Problem 7 */}
                    <AccordionItem value="item-7">
                        <AccordionTrigger>7. A projectile is fired with an initial velocity of 20 m/s at an angle of 30° to the horizontal. Calculate the maximum height reached by the projectile.</AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given Data:</strong></p>
                            <ul>
                                <li>Initial velocity (u) = 20 m/s</li>
                                <li>Angle of projection (θ) = 30°</li>
                                <li>Acceleration due to gravity (g) = 9.8 m/s²</li>
                            </ul>
                            <p><strong>Required:</strong></p>
                            <ul>
                                <li>Maximum height (H)</li>
                            </ul>
                            <p><strong>Solution:</strong></p>
                            <p>First, find the vertical component of the initial velocity:</p>
                            <p>u_y = u × sin(θ)</p>
                            <p>u_y = 20 × sin(30°)</p>
                            <p>u_y = 20 × 0.5</p>
                            <p>u_y = 10 m/s</p>
                            <p>Using the formula H = (u_y²) / (2g):</p>
                            <p>H = (10²) / (2 × 9.8)</p>
                            <p>H = 100 / 19.6</p>
                            <p>H ≈ 5.10 m</p>
                            <p><strong>Result:</strong> Maximum height reached by the projectile = 5.10 m</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};

export default Page;
