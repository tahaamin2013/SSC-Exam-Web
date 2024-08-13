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
                Brief Questions and Answers Physics (3 marks each)
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>

                    {/* Question 1 */}
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Q1. Define Kinematics.</AccordionTrigger>
                        <AccordionContent>
                            The study of motion of an object without discussing the cause of motion is called kinematics.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 2 */}
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Q2. Define Dynamics.</AccordionTrigger>
                        <AccordionContent>
                            Dynamics deals with forces and their action on the motion of bodies.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 3 */}
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Q3. Differentiate between Kinematics and Dynamics.</AccordionTrigger>
                        <AccordionContent>
                            <strong>Kinematics:</strong> The study of motion of bodies without the reference of force and mass.<br />
                            <strong>Dynamics:</strong> Deals with forces and their action on the motion of bodies.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 4 */}
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Q4. How would you define rest?</AccordionTrigger>
                        <AccordionContent>
                            If a body does not change its position with respect to surroundings, then it is said to be in a state of rest. Surroundings are the places in its neighborhood where various objects are present.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 5 */}
                    <AccordionItem value="item-5">
                        <AccordionTrigger>Q5. How would you define motion?</AccordionTrigger>
                        <AccordionContent>
                            If a body continuously changes its position with respect to surroundings, then it is said to be in a state of motion.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 6 */}
                    <AccordionItem value="item-6">
                        <AccordionTrigger>Q6. How can we say that rest and motion are relative states?</AccordionTrigger>
                        <AccordionContent>
                            The state of rest or motion of a body is relative. For example, a passenger sitting in a moving bus is at rest because they are not changing their position with respect to other passengers in the bus. But to an observer outside the bus, the passengers and objects are in motion because they are changing their positions.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 7 */}
                    <AccordionItem value="item-7">
                        <AccordionTrigger>Q7. Define Rotatory motion.</AccordionTrigger>
                        <AccordionContent>
                            The spinning motion of a body around its axis is called rotatory motion.
                            <br /><strong>Examples:</strong><br />
                            - Motion of Earth around its geographic axis<br />
                            - Motion of a wheel and steering wheel around its axis<br />
                            - Motion of a ceiling electric fan<br />
                            - The axis of rotation is a line around which a body rotates.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 8 */}
                    <AccordionItem value="item-8">
                        <AccordionTrigger>Q8. Differentiate between circular motion and rotatory motion.</AccordionTrigger>
                        <AccordionContent>
                            <strong>Circular Motion:</strong> The point about which a body moves around is outside the body.<br />
                            <strong>Rotatory Motion:</strong> The line around which a body moves about passes through the body itself.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 9 */}
                    <AccordionItem value="item-9">
                        <AccordionTrigger>Q9. Define Vibratory motion.</AccordionTrigger>
                        <AccordionContent>
                            When a body moves to and fro about its mean position, it is called vibratory motion. The motion of the body repeats from one extreme position to the other.
                            <br /><strong>Examples:</strong><br />
                            - Motion of a swing back and forth<br />
                            - Motion of the pendulum of a wall clock<br />
                            - Motion of a see-saw<br />
                            - Motion of the hammer of a ringing electric bell<br />
                            - Motion of the strings of a sitar
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 10 */}
                    <AccordionItem value="item-10">
                        <AccordionTrigger>Q10. What do you know about scalar and vector quantities?</AccordionTrigger>
                        <AccordionContent>
                            A physical quantity that can be completely described by its magnitude only is called a scalar. The magnitude of a quantity means its numerical value with an appropriate unit.
                            <br /><strong>Examples of Scalars:</strong> Mass, length, time, speed, volume, area, energy, etc.
                            <br /><strong>Vector:</strong> A physical quantity that can be completely described by its magnitude along with its direction.
                            <br /><strong>Examples of Vectors:</strong> Velocity, force, displacement, momentum, torque, etc.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 11 */}
                    <AccordionItem value="item-11">
                        <AccordionTrigger>Q11. How are vector quantities important to us in our daily life?</AccordionTrigger>
                        <AccordionContent>
                            It would be meaningless to describe vectors without direction. For example, the distance of a place from a reference point is insufficient to locate that place. The direction of that place from the reference point is also necessary to locate it.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 12 */}
                    <AccordionItem value="item-12">
                        <AccordionTrigger>Q12. What do you know about Vector Representation?</AccordionTrigger>
                        <AccordionContent>
                            <strong>Symbolic Representation:</strong> To represent vectors, we generally use bold letters like F, a, d, or a bar/arrow over their symbols.
                            <br /><strong>Graphical Representation:</strong> Graphically, a vector can be represented by a segment with an arrowhead. The length of the line gives the magnitude of the vector, and the direction of the line gives the direction of the vector.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 13 */}
                    <AccordionItem value="item-13">
                        <AccordionTrigger>Q13. What is Position?</AccordionTrigger>
                        <AccordionContent>
                            The term position describes the location of a place or a point with respect to some reference point. This reference point is called the origin.
                            <br /><strong>Example:</strong> If you want to describe the position of your school from your home, the position will be represented by a straight line from your home (H) to the school (S).
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 14 */}
                    <AccordionItem value="item-14">
                        <AccordionTrigger>Q14. What is meant by distance?</AccordionTrigger>
                        <AccordionContent>
                            The total length/separation of a path between two points is known as distance between those points.
                            <br /><strong>Quantity:</strong> It is a scalar quantity.
                            <br /><strong>Unit:</strong> Its unit is meter (m).
                            <br /><strong>Representation:</strong> It is represented by &quot;S&quot;.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 15 */}
                    <AccordionItem value="item-15">
                        <AccordionTrigger>Q15. What is meant by displacement?</AccordionTrigger>
                        <AccordionContent>
                            The shortest path between two points is called displacement.
                            <br /><strong>Quantity:</strong> It is a vector quantity.
                            <br /><strong>Unit:</strong> The unit of displacement is meter (m).
                            <br /><strong>Representation:</strong> It is represented by &quot;d.&quot;
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 16 */}
                    <AccordionItem value="item-16">
                        <AccordionTrigger>Q16. What is speed?</AccordionTrigger>
                        <AccordionContent>
                            The distance covered by a moving body in unit time is called speed.
                            <br /><strong>Quantity:</strong> It is a scalar quantity.
                            <br /><strong>Unit:</strong> Its SI unit is meter per second (m/s).
                            <br /><strong>Representation:</strong> It is represented by &quot;v&quot;.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 17 */}
                    <AccordionItem value="item-17">
                        <AccordionTrigger>Q17. What is average speed?</AccordionTrigger>
                        <AccordionContent>
                            The average speed of a body is the total distance covered divided by the total time taken.
                            <br /><strong>Formula:</strong> Average speed = Total distance / Total time.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 18 */}
                    <AccordionItem value="item-18">
                        <AccordionTrigger>Q18. What do you know about instantaneous speed?</AccordionTrigger>
                        <AccordionContent>
                            The speed of a body at any particular instant of time is called instantaneous speed.
                            <br /><strong>Example:</strong> Speedometer reading in a car shows the instantaneous speed of the car at any particular instant.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 19 */}
                    <AccordionItem value="item-19">
                        <AccordionTrigger>Q19. Define velocity.</AccordionTrigger>
                        <AccordionContent>
                            The rate of change of displacement of a body with respect to time is called velocity.
                            <br /><strong>Quantity:</strong> It is a vector quantity.
                            <br /><strong>Unit:</strong> SI unit of velocity is meter per second (m/s).
                            <br /><strong>Mathematical Form:</strong> Velocity = Displacement / Time.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 20 */}
                    <AccordionItem value="item-20">
                        <AccordionTrigger>Q20. Define uniform velocity.</AccordionTrigger>
                        <AccordionContent>
                            If a body covers equal displacement in equal intervals of time, then it is said to have uniform velocity.
                            <br /><strong>Example:</strong> A car moving in a straight line with constant speed.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 21 */}
                    <AccordionItem value="item-21">
                        <AccordionTrigger>Q21. What is variable velocity?</AccordionTrigger>
                        <AccordionContent>
                            If a body covers unequal displacements in equal intervals of time, or both change with time, then the body is said to be moving with variable velocity.
                            <br /><strong>Example:</strong> A car moving on a curved path with uniform speed.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 22 */}
                    <AccordionItem value="item-22">
                        <AccordionTrigger>Q22. Define acceleration.</AccordionTrigger>
                        <AccordionContent>
                            The rate of change of velocity of a body with respect to time is called acceleration. It is represented by &quot;a.&quot;
                            <br /><strong>Mathematical Form:</strong> Acceleration = Change in velocity / Time taken.
                            <br /><strong>Quantity:</strong> It is a vector quantity.
                            <br /><strong>Unit:</strong> SI unit of acceleration is meter per second squared (m/s²).
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 23 */}
                    <AccordionItem value="item-23">
                        <AccordionTrigger>Q23. What do you know about uniform acceleration?</AccordionTrigger>
                        <AccordionContent>
                            If the velocity of a body increases or decreases by equal amounts in equal intervals of time, then the body is said to have uniform acceleration.
                            <br /><strong>Example:</strong> Motion of a ball rolling down an inclined plane.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 24 */}
                    <AccordionItem value="item-24">
                        <AccordionTrigger>Q24. What is Retardation?</AccordionTrigger>
                        <AccordionContent>
                            If the velocity of a body decreases with time, then its acceleration is negative, and it is known as retardation.
                            <br /><strong>Example:</strong> Motion of a car when brakes are applied.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 25 */}
                    <AccordionItem value="item-25">
                        <AccordionTrigger>Q25. Define momentum.</AccordionTrigger>
                        <AccordionContent>
                            Momentum is the product of mass and velocity of a body. It is represented by &quot;p&quot;.
                            <br /><strong>Mathematical Form:</strong> Momentum = Mass x Velocity.
                            <br /><strong>Quantity:</strong> It is a vector quantity.
                            <br /><strong>Unit:</strong> SI unit of momentum is kilogram meter per second (kg m/s).
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 26 */}
                    <AccordionItem value="item-26">
                        <AccordionTrigger>Q26. What is the law of conservation of momentum?</AccordionTrigger>
                        <AccordionContent>
                            The law states that the total momentum of an isolated system remains constant if no external force acts on it.
                            <br /><strong>Example:</strong> During a collision, the total momentum of two colliding bodies before and after collision remains the same.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 27 */}
                    <AccordionItem value="item-27">
                        <AccordionTrigger>Q27. Define force.</AccordionTrigger>
                        <AccordionContent>
                            A force is a push or pull acting on an object as a result of its interaction with another object.
                            <br /><strong>Mathematical Form:</strong> Force = Mass x Acceleration.
                            <br /><strong>Quantity:</strong> It is a vector quantity.
                            <br /><strong>Unit:</strong> SI unit of force is Newton (N).
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 28 */}
                    <AccordionItem value="item-28">
                        <AccordionTrigger>Q28. What is Newton&apos;s First Law of Motion?</AccordionTrigger>
                        <AccordionContent>
                            Newton&apos;s First Law of Motion states that an object will remain at rest or in uniform motion in a straight line unless acted upon by an external force.
                            <br /><strong>Example:</strong> A book lying on a table will remain at rest until someone pushes it.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 29 */}
                    <AccordionItem value="item-29">
                        <AccordionTrigger>Q29. Define inertia.</AccordionTrigger>
                        <AccordionContent>
                            Inertia is the tendency of an object to resist a change in its state of motion or rest.
                            <br /><strong>Example:</strong> When a car suddenly stops, the passengers tend to move forward due to inertia.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 30 */}
                    <AccordionItem value="item-30">
                        <AccordionTrigger>Q30. What is Newton&apos;s Second Law of Motion?</AccordionTrigger>
                        <AccordionContent>
                            Newton&apos;s Second Law of Motion states that the rate of change of momentum of an object is directly proportional to the applied force and occurs in the direction of the force.
                            <br /><strong>Mathematical Form:</strong> Force = Mass x Acceleration.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 31 */}
                    <AccordionItem value="item-31">
                        <AccordionTrigger>Q31. What is Newton&apos;s Third Law of Motion?</AccordionTrigger>
                        <AccordionContent>
                            Newton&apos;s Third Law of Motion states that for every action, there is an equal and opposite reaction.
                            <br /><strong>Example:</strong> When you jump off a small boat into water, the boat moves in the opposite direction.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 32 */}
                    <AccordionItem value="item-32">
                        <AccordionTrigger>Q32. Define work.</AccordionTrigger>
                        <AccordionContent>
                            Work is said to be done when a force is applied to an object and the object moves in the direction of the force.
                            <br /><strong>Mathematical Form:</strong> Work = Force x Displacement.
                            <br /><strong>Unit:</strong> SI unit of work is Joule (J).
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 33 */}
                    <AccordionItem value="item-33">
                        <AccordionTrigger>Q33. What is energy?</AccordionTrigger>
                        <AccordionContent>
                            Energy is the ability to do work. It is a scalar quantity.
                            <br /><strong>Unit:</strong> SI unit of energy is Joule (J).
                            <br /><strong>Forms:</strong> Energy can exist in various forms, such as kinetic energy, potential energy, thermal energy, etc.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 34 */}
                    <AccordionItem value="item-34">
                        <AccordionTrigger>Q34. What is power?</AccordionTrigger>
                        <AccordionContent>
                            Power is the rate at which work is done or energy is transferred.
                            <br /><strong>Mathematical Form:</strong> Power = Work / Time.
                            <br /><strong>Unit:</strong> SI unit of power is Watt (W).
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
            </div>
        </section>
    );
}

export default Page;
