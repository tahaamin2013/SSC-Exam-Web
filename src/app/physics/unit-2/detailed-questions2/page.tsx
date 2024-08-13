import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const QuestionDashboard = () => {
    return (
        <section
            id="Questions"
            className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6"
        >
            <h1 className="font-bold text-3xl text-center mb-4">
                Problem Solving Questions
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>

                    {/* Question 1 */}
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Q.No.1 Define Translatory motion and its types.</AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Ans:</strong> Translatory motion is a type of motion in which a body moves along a line without any rotation. The line may be straight or curved.</p>
                            <p><strong>Examples:</strong></p>
                            <ul>
                                <li>Motion of a car in a straight line</li>
                                <li>Motion of an electron around the nucleus</li>
                                <li>Motion of gas molecules</li>
                                <li>An airplane moving straight is in translatory motion</li>
                            </ul>
                            <p><strong>Types of Translatory Motion:</strong></p>
                            <p>There are three types of translatory motion:</p>
                            <ol>
                                <li><strong>Linear motion:</strong> If the motion of a body is in a straight line, it is known as linear motion.</li>
                                <li><strong>Circular motion:</strong> If a body moves in a circle, it is called circular motion.</li>
                                <li><strong>Random motion:</strong> The disorder or irregular motion of an object is called random motion.</li>
                            </ol>
                            <p><strong>Examples of Linear Motion:</strong></p>
                            <ul>
                                <li>The motion of freely falling bodies</li>
                                <li>A car moving along a straight road</li>
                            </ul>
                            <p><strong>Examples of Circular Motion:</strong></p>
                            <ul>
                                <li>A stone attached to a thread, when whirled, it moves along a circular path.</li>
                                <li>A bicycle or car moving along a circular track</li>
                                <li>Earth moving around the sun in the solar system</li>
                            </ul>
                            <p><strong>Examples of Random Motion:</strong></p>
                            <ul>
                                <li>The flight of an insect and birds</li>
                                <li>Brownian motion of gas or liquid molecules</li>
                                <li>Motion of dust or smoke particles in the air</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 2 */}
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Q.No.2 Explain Distance-Time Graph.</AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Ans:</strong> In a distance-time graph, time is plotted along the horizontal axis while distance is plotted along the vertical axis.</p>
                            <p><strong>Object at Rest:</strong></p>
                            <p>If the distance moved by the object with time is zero, the object is at rest. This is represented by a horizontal line parallel to the time axis on the distance-time graph, indicating zero speed.</p>
                            <p><strong>Object Moving with Constant Speed:</strong></p>
                            <p>The speed is constant if the object covers equal distances in equal intervals of time. On the distance-time graph, this is shown by a straight line with a constant slope, where the slope represents the speed of the object.</p>
                            <p><strong>Object Moving with Variable Speed:</strong></p>
                            <p>If the object does not cover equal distances in equal intervals of time, its speed is not constant. On the distance-time graph, this is shown by a curved line. The slope of the curve at any point represents the instantaneous speed, which can be found by calculating the slope of the tangent to the curve at that point.</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 3 */}
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Q.No.3 Explain Speed-Time Graph.</AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Ans:</strong> In a speed-time graph, time is plotted along the x-axis and speed is plotted along the y-axis.</p>
                            <p><strong>Object Moving with Constant Speed:</strong></p>
                            <p>If the speed of the object is constant over time, the speed-time graph will be a horizontal line parallel to the time axis. This indicates that the object is moving with constant speed.</p>
                            <p><strong>Object Moving with Uniformly Changing Speed (Uniform Acceleration):</strong></p>
                            <p>If the speed of the object changes uniformly over time, the speed-time graph will be a straight line with a slope. The slope of this line represents the acceleration of the object.</p>
                            <p><strong>Distance Traveled by a Moving Object:</strong></p>
                            <p>The area under the speed-time graph represents the distance traveled by the object. For uniform motion, the area can be calculated using geometric formulas based on the shape of the graph. For example, the area of a rectangle represents distance traveled at constant speed, and the area of a trapezium represents distance traveled with changing speed.</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 4 */}
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Q.No.4 Derive the equations of motion for uniformly accelerated rectilinear motion.</AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Ans:</strong> There are three basic equations of motion for bodies moving with uniform acceleration. These equations relate initial velocity, final velocity, acceleration, time, and distance covered by a moving body.</p>
                            <p><strong>Important Points in Derivation:</strong></p>
                            <ul>
                                <li>The motion is assumed to be along a straight line.</li>
                                <li>Only the magnitudes of displacements, velocities, and acceleration are considered.</li>
                                <li>Acceleration is assumed to be uniform.</li>
                            </ul>
                            <p><strong>Case Study:</strong></p>
                            <p>Consider a body moving with an initial velocity <em>v<sub>0</sub></em> in a straight line with uniform acceleration <em>a</em>. Its velocity becomes <em>v</em> after time <em>t</em>. The motion of the body is described by the speed-time graph as shown by line AB. The slope of line AB represents acceleration <em>a</em>. The total distance covered by the body is shown by the shaded area under the line AB. The equations of motion can be derived from this graph.</p>

                            <p><strong>First Equation of Motion:</strong></p>
                            <p>The slope of line AB gives:</p>
                            <p><em>a = (v - v<sub>0</sub>) / t</em></p>
                            <p>Rearranging, we get:</p>
                            <p><em>v = v<sub>0</sub> + at</em></p>

                            <p><strong>Second Equation of Motion:</strong></p>
                            <p>The total distance <em>S</em> traveled by the body is equal to the area <em>OABD</em> under the graph, which includes the area of the rectangle and the triangle:</p>
                            <p><em>S = v<sub>0</sub>t + (1/2)at<sup>2</sup></em></p>

                            <p><strong>Third Equation of Motion:</strong></p>
                            <p>The total distance <em>S</em> traveled by the body can also be represented by:</p>
                            <p><em>S = (v<sup>2</sup> - v<sub>0</sub><sup>2</sup>) / (2a)</em></p>
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
            </div>
        </section>
    )
}

export default QuestionDashboard;
