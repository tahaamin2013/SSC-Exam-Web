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
                Problem Solving and REST AND MOTION Questions
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>

                    {/* Question 1 */}
                    <AccordionItem value="item-1">
                        <AccordionTrigger>1. Differentiate between rest and motion. How are they relative?</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                **Rest**: An object is said to be at rest if it does not change its position with respect to its surroundings over time. For example, a book lying on a table is at rest relative to the table.
                            </p>
                            <p>
                                **Motion**: An object is in motion if it changes its position with respect to its surroundings over time. For example, a car moving on a road is in motion relative to a stationary observer on the road.
                            </p>
                            <p>
                                **Relativity of Rest and Motion**: Rest and motion are relative terms. This means that an object may be at rest relative to one observer and in motion relative to another. For instance, consider a passenger sitting in a moving train. To another passenger inside the train, the person is at rest. However, to an observer outside the train, the passenger is in motion.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 2 */}
                    <AccordionItem value="item-2">
                        <AccordionTrigger>2. What are different types of motion? Define each with examples.</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                **Types of Motion**:
                                <ul className="list-disc list-inside">
                                    <li>
                                        **Translational Motion**: Movement of an object in a straight line or along a curved path. Example: A car moving on a highway.
                                    </li>
                                    <li>
                                        **Rotational Motion**: Movement of an object around a fixed axis. Example: The rotation of the Earth around its axis.
                                    </li>
                                    <li>
                                        **Oscillatory Motion**: Movement of an object back and forth around a central point. Example: The swinging of a pendulum.
                                    </li>
                                    <li>
                                        **Circular Motion**: Movement of an object along a circular path. Example: A satellite orbiting the Earth.
                                    </li>
                                </ul>
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 3 */}
                    <AccordionItem value="item-3">
                        <AccordionTrigger>3. What are scalars and vectors? Provide examples and their representation.</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                **Scalars**: Quantities that have only magnitude and no direction. Examples include mass (e.g., 5 kg), temperature (e.g., 30°C), and speed (e.g., 60 km/h).
                            </p>
                            <p>
                                **Vectors**: Quantities that have both magnitude and direction. Examples include velocity (e.g., 60 km/h east), force (e.g., 10 N downward), and displacement (e.g., 5 meters north).
                            </p>
                            <p>
                                **Representation**:
                                <ul className="list-disc list-inside">
                                    <li>
                                        **Symbolic**: Vectors are often represented with bold letters (e.g., **v**) or with an arrow over the letter (e.g., \ ( \vec﹛v﹜ \)).
                                    </li>
                                    <li>
                                        **Graphical**: Vectors are represented as arrows, where the length represents magnitude and the arrowhead points in the direction of the vector.
                                    </li>
                                </ul>
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 4 */}
                    <AccordionItem value="item-4">
                        <AccordionTrigger>4. Define the term position. Differentiate between distance and displacement.</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                **Position**: The position of an object is its location relative to a reference point or origin.
                            </p>
                            <p>
                                **Distance**: The total length of the path traveled by an object, regardless of direction. It is a scalar quantity. Example: If you walk 3 meters east, then 4 meters north, the total distance traveled is 7 meters.
                            </p>
                            <p>
                                **Displacement**: The shortest straight-line distance between the initial and final positions of an object, taking direction into account. It is a vector quantity. Example: The displacement in the previous example is 5 meters northeast.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 5 */}
                    <AccordionItem value="item-5">
                        <AccordionTrigger>5. Differentiate between speed and velocity. Define related terms.</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                **Speed**: The rate at which an object covers distance, irrespective of direction. It is a scalar quantity. Example: 60 km/h.
                            </p>
                            <p>
                                **Velocity**: The rate at which an object changes its position, considering direction. It is a vector quantity. Example: 60 km/h north.
                            </p>
                            <p>
                                **Average Speed**: The total distance traveled divided by the total time taken.
                            </p>
                            <p>
                                **Uniform Speed**: Speed that does not change over time.
                            </p>
                            <p>
                                **Variable Speed**: Speed that changes over time.
                            </p>
                            <p>
                                **Average Velocity**: The total displacement divided by the total time taken.
                            </p>
                            <p>
                                **Uniform Velocity**: Velocity that does not change over time.
                            </p>
                            <p>
                                **Variable Velocity**: Velocity that changes over time.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 6 */}
                    <AccordionItem value="item-6">
                        <AccordionTrigger>6. What are freely falling bodies? Explain gravitational acceleration and related equations.</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                **Freely Falling Bodies**: Objects that fall under the influence of gravity alone, with no other forces acting on them (e.g., air resistance is negligible).
                            </p>
                            <p>
                                **Gravitational Acceleration (g)**: The acceleration experienced by an object due to the force of gravity. Near the Earth&apos;s surface, \( g \approx 9.8 \, \text﹛m / s﹜^2 \).
                            </p>
                            <p>
                                **Sign Conventions**: In the downward direction, \( g \) is positive, and in the upward direction, \( g \) is negative.
                            </p>
                            <p>
                                **Equations of Motion for Freely Falling Bodies**:
                                <ul className="list-disc list-inside">
                                    <li>\( v = u + gt \)</li>
                                    <li>\( h = ut + \frac{1}{2}gt^2 \)</li>
                                    <li>\( v^2 = u^2 + 2gh \)</li>
                                </ul>
                                where \( v \) is final velocity, \( u \) is initial velocity, \( g \) is gravitational acceleration, \( t \) is time, and \( h \) is height.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 7 */}
                    <AccordionItem value="item-7">
                        <AccordionTrigger>7. Draw distance-time graphs for different scenarios.</AccordionTrigger>
                        <AccordionContent>
                            <p>**Graphs**:
                                <ul className="list-disc list-inside">
                                    <li>**Rest**: A horizontal line on the distance-time graph, indicating no change in position.</li>
                                    <li>**Uniform Speed**: A straight line with a positive slope, indicating constant speed.</li>
                                    <li>**Increasing Speed**: A curve with an increasing slope, indicating acceleration.</li>
                                    <li>**Decreasing Speed**: A curve with a decreasing slope, indicating deceleration.</li>
                                </ul>
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 8 */}
                    <AccordionItem value="item-8">
                        <AccordionTrigger>8. Draw speed-time graphs for different scenarios and explain the area under the graph.</AccordionTrigger>
                        <AccordionContent>
                            <p>**Graphs**:
                                <ul className="list-disc list-inside">
                                    <li>**Zero Acceleration**: A horizontal line on the speed-time graph.</li>
                                    <li>**Uniform Acceleration**: A straight line with a positive slope.</li>
                                    <li>**Uniform Deceleration**: A straight line with a negative slope.</li>
                                </ul>
                            </p>
                            <p>
                                **Area Under Speed-Time Graph**: The area under the graph represents the distance covered by the object. For example, the area under a uniform acceleration graph is a triangle, which gives the distance traveled.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
            </div>
        </section>
    )
}

export default QuestionDashboard;
