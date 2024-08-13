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
            id="textbook-exercise"
            className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6"
        >
            <h1 className="font-bold text-3xl text-center mb-4">
                Textbook Exercise Questions and Answers
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>

                    {/* Question 1 */}
                    <AccordionItem value="item-2">
                        <AccordionTrigger>1. Explain translatory motion and give examples of various types of translatory motion.</AccordionTrigger>
                        <AccordionContent>
                            <p>Translatory motion is when a body moves in such a way that every point of the body travels the same distance in the same time. It is a type of motion where all parts of the object move in the same direction.</p>
                            <p>Examples of translatory motion:</p>
                            <ul>
                                <li>Linear motion (e.g., a car moving in a straight line)</li>
                                <li>Circular motion (e.g., a wheel rotating)</li>
                                <li>Random motion (e.g., a butterfly flying)</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 1 */}
                    <AccordionItem value="item-3">
                        <AccordionTrigger>2. Differentiate between the following:</AccordionTrigger>
                        <AccordionContent>
                            <p>(i) Rest and Motion:</p>
                            <ul>
                                <li>Rest: A body is at rest if it does not change its position with respect to its surroundings.</li>
                                <li>Motion: A body is in motion if it continuously changes its position with respect to its surroundings.</li>
                            </ul>

                            <p>(ii) Circular Motion and Rotatory Motion:</p>
                            <ul>
                                <li>Circular Motion: Motion of an object along a circular path (e.g., the motion of earth around the sun).</li>
                                <li>Rotatory Motion: Spinning motion of a body about its axis (e.g., the motion of a wheel).</li>
                            </ul>

                            <p>(iii) Distance and Displacement:</p>
                            <ul>
                                <li>Distance: The total length covered between two points. It is a scalar quantity.</li>
                                <li>Displacement: The shortest distance between two points, directed from the initial to the final point. It is a vector quantity.</li>
                            </ul>

                            <p>(iv) Speed and Velocity:</p>
                            <ul>
                                <li>Speed: The distance covered in unit time. It is a scalar quantity.</li>
                                <li>Velocity: The rate of displacement of a body with respect to time. It is a vector quantity.</li>
                            </ul>

                            <p>(v) Scalars and Vectors:</p>
                            <ul>
                                <li>Scalar: Physical quantities described only by magnitude (e.g., speed, distance).</li>
                                <li>Vector: Physical quantities described by both magnitude and direction (e.g., force, velocity).</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 1 */}
                    <AccordionItem value="item-4">
                        <AccordionTrigger>3. Define the terms speed, velocity, and acceleration.</AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Speed:</strong> The distance covered by an object in unit time. Formula: Speed = Distance / Time</p>
                            <p><strong>Velocity:</strong> The rate of displacement of a body with respect to time. Formula: Velocity = Displacement / Time</p>
                            <p><strong>Acceleration:</strong> The rate of change of velocity of a body. Formula: Acceleration = Change in Velocity / Time</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 1 */}
                    <AccordionItem value="item-5">
                        <AccordionTrigger>4. Can a body moving at a constant speed have acceleration?</AccordionTrigger>
                        <AccordionContent>
                            <p>Yes, a body moving at a constant speed can have acceleration if it changes direction. For instance, a body moving in a circular path at constant speed is accelerating due to the change in direction.</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 1 */}
                    <AccordionItem value="item-6">
                        <AccordionTrigger>5. How do riders in a Ferris wheel possess translatory motion but not circular motion?</AccordionTrigger>
                        <AccordionContent>
                            <p>Riders on a Ferris wheel are actually in circular motion relative to the wheel, but if you consider their motion relative to a fixed point outside the wheel, they also exhibit translatory motion as they move up and down.</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 1 */}
                    <AccordionItem value="item-7">
                        <AccordionTrigger>6. Sketch a distance-time graph for a body starting from rest. How will you determine the speed of a body from this graph?</AccordionTrigger>
                        <AccordionContent>
                            <p>The distance-time graph for a body starting from rest is a straight line passing through the origin, showing a linear relationship between distance and time. The slope of this line represents the speed of the body. Formula: Speed = Distance / Time.</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 1 */}
                    <AccordionItem value="item-8">
                        <AccordionTrigger>7. What would be the shape of a speed-time graph of a body moving with variable speed?</AccordionTrigger>
                        <AccordionContent>
                            <p>The speed-time graph for a body moving with variable speed is typically zigzag or curved, reflecting the changes in speed over time.</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 1 */}
                    <AccordionItem value="item-9">
                        <AccordionTrigger>8. Which of the following can be obtained from the speed-time graph of a body?</AccordionTrigger>
                        <AccordionContent>
                            <ul>
                                <li>(i) Initial speed</li>
                                <li>(ii) Final speed</li>
                                <li>(iii) Distance covered in time t</li>
                                <li>(iv) Acceleration of motion</li>
                            </ul>
                            <p>All of the above can be obtained from the speed-time graph.</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 10 */}
                    <AccordionItem value="item-10">
                        <AccordionTrigger>9. How can vector quantities be represented graphically?</AccordionTrigger>
                        <AccordionContent>
                            <p>Vector quantities can be represented graphically by drawing a straight line with an arrowhead at one end. The length of the line indicates the magnitude, and the direction of the arrowhead indicates the direction of the vector.</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 11 */}
                    <AccordionItem value="item-11">
                        <AccordionTrigger>10. Why vector quantities cannot be added and subtracted like scalar quantities?</AccordionTrigger>
                        <AccordionContent>
                            <p>Vectors cannot be added or subtracted like scalar quantities because they have both magnitude and direction. The addition or subtraction of vectors involves combining both these components, requiring vector-specific methods such as the parallelogram rule or triangle rule.</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 12 */}
                    <AccordionItem value="item-12">
                        <AccordionTrigger>11. How are vector quantities important to us in our daily life?</AccordionTrigger>
                        <AccordionContent>
                            <p>Vector quantities are crucial in daily life for describing physical phenomena accurately. For instance, directions are essential in navigation, and forces must be represented as vectors to understand their effects on objects properly.</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 13 */}
                    <AccordionItem value="item-13">
                        <AccordionTrigger>12. Derive equations of motion for uniformly accelerated rectilinear motion.</AccordionTrigger>
                        <AccordionContent>
                            <p>See Q.no.4 Long Question</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 14 */}
                    <AccordionItem value="item-14">
                        <AccordionTrigger>13. Sketch a velocity-time graph for the motion of the body. From the graph explaining each step, calculate total distance covered by the body.</AccordionTrigger>
                        <AccordionContent>
                            <p>The total distance traveled is the area under the velocity-time graph. For a trapezoid, the area can be calculated using the formula: Area = 1/2 * (Sum of parallel sides) * Height.</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};

export default Page;
