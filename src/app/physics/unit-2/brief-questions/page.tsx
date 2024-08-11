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
                Brief Questions and Answers on Motion (3 marks each)
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>1. In a park, children are enjoying a ride on Ferris wheel as shown. What kind of motion the Ferris wheel has and what kind of motion the riders have?</AccordionTrigger>
                        <AccordionContent>
                            <p>The Ferris wheel undergoes circular motion, while the riders experience rotational motion as they move along the circular path.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>2. A boy moves for some time, give two situations in which his displacement is zero but the covered distance is not zero?</AccordionTrigger>
                        <AccordionContent>
                            <p>1. The boy walks in a circular path and returns to the starting point. <br />2. The boy moves from one end of a field to another and back, ending up where he started.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>3. A stone tied to a string is whirling in a circle, what is the direction of its velocity at any instant?</AccordionTrigger>
                        <AccordionContent>
                            <p>The velocity of the stone is always tangent to the circle at any given instant.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>4. Is it possible to accelerate an object without speeding it up or slowing it down?</AccordionTrigger>
                        <AccordionContent>
                            <p>Yes, acceleration can occur without changing the speed if the direction of velocity changes, such as in uniform circular motion.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>5. Can a car moving towards right have the direction of acceleration towards left?</AccordionTrigger>
                        <AccordionContent>
                            <p>Yes, if the car is turning left while moving right, the acceleration will be directed towards the left to change its direction.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>6. With the help of daily life examples, describe the situations in which:</AccordionTrigger>
                        <AccordionContent>
                            <p>a. Acceleration is in the direction of motion: A car speeding up on a straight road.<br />
                                b. Acceleration is against the direction of motion: A car braking to stop.<br />
                                c. Acceleration is zero and the body is in motion: A car moving at a constant speed on a straight, level road.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger>7. Explain translatory motion and give examples of various types of translatory motion.</AccordionTrigger>
                        <AccordionContent>
                            <p>Translatory motion is when all parts of a body move in the same direction. Examples include a car moving along a road (rectilinear motion) and a bicycle moving around a track (curvilinear motion).</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-8">
                        <AccordionTrigger>8. Differentiate between the following:</AccordionTrigger>
                        <AccordionContent>
                            <p>(i) Rest and motion: Rest is when an object does not change its position relative to its surroundings, while motion is when its position changes.<br />
                                (ii) Circular motion and rotatory motion: Circular motion is movement along a circular path, while rotatory motion is spinning around an internal axis.<br />
                                (iii) Distance and displacement: Distance is the total path length covered, while displacement is the shortest distance between the start and end points.<br />
                                (iv) Speed and velocity: Speed is the rate of change of distance, while velocity is the rate of change of displacement with direction.<br />
                                (v) Linear and random motion: Linear motion is along a straight line, while random motion is in unpredictable directions.<br />
                                (vi) Scalars and vectors: Scalars have magnitude only, while vectors have both magnitude and direction.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-9">
                        <AccordionTrigger>9. Define the terms speed, velocity, and acceleration.</AccordionTrigger>
                        <AccordionContent>
                            <p>Speed is the rate at which distance is covered, velocity is the rate of change of displacement with direction, and acceleration is the rate of change of velocity.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-10">
                        <AccordionTrigger>10. Can a body moving at a constant speed have acceleration?</AccordionTrigger>
                        <AccordionContent>
                            <p>Yes, if the body changes direction, such as in circular motion, it has acceleration even though the speed is constant.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-11">
                        <AccordionTrigger>11. How do riders in a Ferris wheel possess translatory motion but not rotatory motion?</AccordionTrigger>
                        <AccordionContent>
                            <p>The riders have translatory motion as they move along a circular path, but they do not rotate around their own axis.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-12">
                        <AccordionTrigger>12. Sketch a distance-time graph for a body starting from rest. How will you determine the speed of a body from this graph?</AccordionTrigger>
                        <AccordionContent>
                            <p>The graph will be a straight line starting from the origin. The speed is determined by calculating the slope of the line.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-13">
                        <AccordionTrigger>13. What would be the shape of a speed-time graph of a body moving with variable speed?</AccordionTrigger>
                        <AccordionContent>
                            <p>The graph will be a curve, representing changing speeds over time.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-14">
                        <AccordionTrigger>14. Which of the following can be obtained from the speed-time graph of a body?</AccordionTrigger>
                        <AccordionContent>
                            <p>(i) Initial speed.<br />
                                (ii) Final speed.<br />
                                (iii) Distance covered in time t.<br />
                                (iv) Acceleration of motion.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-15">
                        <AccordionTrigger>15. How can vector quantities be represented graphically?</AccordionTrigger>
                        <AccordionContent>
                            <p>Vector quantities can be represented graphically using arrows, where the length represents magnitude and the direction represents the direction of the vector.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-16">
                        <AccordionTrigger>16. Why vector quantities cannot be added and subtracted like scalar quantities?</AccordionTrigger>
                        <AccordionContent>
                            <p>Vector quantities cannot be simply added or subtracted because they have both magnitude and direction, requiring vector algebra for proper addition and subtraction.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-17">
                        <AccordionTrigger>17. How are vector quantities important to us in our daily life?</AccordionTrigger>
                        <AccordionContent>
                            <p>Vector quantities are important in navigation, force analysis, and describing motion, such as wind direction and speed, or the force applied to lift an object.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-18">
                        <AccordionTrigger>18. Derive equations of motion for uniformly accelerated rectilinear motion.</AccordionTrigger>
                        <AccordionContent>
                            <p>The three equations of motion are:<br />
                                1. \( v = u + at \)<br />
                                2. \( s = ut + \frac{1}{2}at^2 \)<br />
                                3. \( v^2 = u^2 + 2as \)<br />
                                where \( u \) is the initial velocity, \( v \) is the final velocity, \( a \) is acceleration, \( s \) is displacement, and \( t \) is time.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-19">
                        <AccordionTrigger>19. Sketch a velocity-time graph for the motion of the body. From the graph, explain each step, calculate the total distance covered by the body.</AccordionTrigger>
                        <AccordionContent>
                            <p>The velocity-time graph for uniformly accelerated motion will be a straight line. The total distance covered is the area under the graph. For a straight line, it&apos;s the area of the trapezoid formed by the graph.</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};

export default Page;
