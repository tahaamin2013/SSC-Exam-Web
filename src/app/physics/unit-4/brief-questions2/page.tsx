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
                Brief Questions and Answers (3 marks each)
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>

                    {/* Short Questions */}
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Q.1 What is meant by parallel forces?</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Ans: In a plane, if number of parallel forces act on a body such that points of action are different but lines of action are parallel to each other, then these forces are called parallel forces. In the given figure, the force Fi, Fi, Fs are acting at points A, B, C are parallel forces.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>Q.2 What is meant by like parallel forces? Also give examples.</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Ans: Like parallel forces are the forces that are parallel to each other and have the same direction. Examples: In the second figure, the direction of the parallel forces F₁ and F₂ is the same, so these are like parallel forces.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>Q.3 What are unlike parallel forces? Also give examples.</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Ans: Unlike parallel forces are the forces that are parallel but have direction opposite to each other. Example: In the second figure, the parallel forces F₁, F₂ and F₃ are acting in opposite directions, so these are unlike parallel forces.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>Q.4 Define head to tail rule.</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                According to this rule, vectors are drawn in such a way that the head of the first vector is joined with the tail of the second vector. When forces are added, we get the resultant force. A resultant force is a single force that has the same effect as the combined effect of all the forces to be added. The resultant vector is drawn in such a way that the tail of the first vector is joined with the head of the last vector.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger>Q.5 Define resolution of vectors.</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Ans: The decomposition or division of a vector into its rectangular components is called resolution of a vector. OR The splitting of a single vector into two mutually perpendicular components is called the resolution of that force.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6">
                        <AccordionTrigger>Q.6 Define torque or moment of force.</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Ans: The rotational effect of a force is measured by a quantity, known as torque.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-7">
                        <AccordionTrigger>Q.7 Define centre of mass.</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Ans: Centre of mass of a system is such a point where an applied force causes the system to move without rotation.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-8">
                        <AccordionTrigger>Q.8 Define centre of gravity.</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Ans: A point in a body where the weight of the body appears to act vertically downward is called the centre of gravity. The centre of gravity can exist inside a body or outside the body. Position of the centre of gravity depends upon the shape of the body.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-9">
                        <AccordionTrigger>Q.9 Define couple and give examples.</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Ans: A couple is formed by two unlike parallel forces of the same magnitude but not along the same line. Examples:
                                - While turning a car, the forces applied on the steering wheel by hands provide the necessary couple.
                                - While opening or closing a water tap.
                                - While locking or opening the stopper of a bottle or a jar.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-10">
                        <AccordionTrigger>Q.10 Define equilibrium.</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Ans: If no force is acting on the body or a number of forces act on a body in such a way that their resultant is zero, then if the body is at rest it will remain at rest and if the body is in motion, it will continue moving with a uniform velocity. This condition of the body is called equilibrium.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-11">
                        <AccordionTrigger>Q.11 State conditions of equilibrium.</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                First Condition of equilibrium: A body will be in equilibrium if the resultant of all the forces acting on it is zero. This is the first condition of equilibrium.
                                Second Condition of equilibrium: If a number of forces act on a body so that the total sum of the torques of these forces is zero, the body will be in equilibrium.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-12">
                        <AccordionTrigger>Q.12 Define stable equilibrium.</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Ans: A body is said to be in stable equilibrium if after a slight tilt it returns to its previous position. When a body is in stable equilibrium, its centre of gravity is at the lowest position. When it is tilted, its centre of gravity rises. It returns to its stable state by lowering its centre of gravity. A body remains in stable equilibrium as long as the centre of gravity acts through the base of the body. Examples: Table, chair, box and brick lying on a floor.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-13">
                        <AccordionTrigger>Q.13 Define unstable equilibrium.</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Ans: If a body does not return to its previous position after the slightest tilt, it is said to be in unstable equilibrium. The centre of gravity of the body is at its highest point in the state of unstable equilibrium. As the body topples over about its base, its centre of gravity moves towards its lower position and does not return to its previous position. Examples: A stick standing vertically on the tip of a finger, a cone standing on the tip of a finger.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-14">
                        <AccordionTrigger>Q.14 Define neutral equilibrium.</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Ans: If a body remains in its new position when disturbed from its previous position, it is said to be in a state of neutral equilibrium. Examples: A ball lying on the horizontal surface, motion of a wheel on a plane surface.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-15">
                        <AccordionTrigger>Q.15 Define rigid body and axis of rotation.</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Rigid Body: A body composed of a large number of particles. If the distance between all these pairs of particles of the body does not change by applying a force, then it is called a rigid body.
                                Axis of Rotation: During rotation, the particles of the rigid body move in circles with their centres all lying on a line. This straight line is called the axis of rotation of the body.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-16">
                        <AccordionTrigger>Q.16 What is meant by the principle of moments?</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Ans: In a balanced body, if the sum of the clockwise moments acting on the body is equal to the sum of the anticlockwise moments acting on it, then a body initially at rest does not rotate if the sum of all the clockwise moments acting on it is balanced by the sum of all the anticlockwise moments acting on it. This is known as the principle of moments. Examples: A pencil, a sphere, a cylinder, a roller, an egg lying horizontally on a flat surface.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-17">
                        <AccordionTrigger>Q.17 How is the stability of a body related to the position of its centre of mass?</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Ans: To make the body stable, its centre of mass must be kept as low as possible. For this reason, racing cars are made heavy at the bottom and their height is kept to a minimum.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-18">
                        <AccordionTrigger>Q.18 Differentiate between axis of rotation and point of rotation.</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Axis of Rotation: Axis of rotation is a line about which the whole body rotates. Example: When we open the door, the door will move about its hinges or axis of rotation.
                                Point of Rotation: Point of rotation is just a point about which the body rotates. Example: If we move a stick about its centre of gravity, then that point becomes the point of rotation.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-19">
                        <AccordionTrigger>Q.19 On what factors does rotation produced in a body depend?</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Ans: Rotation produced in a body depends on the following two factors:
                                (i) Magnitude of the force
                                (ii) The perpendicular distance between the line of action of the force and the axis of rotation, known as the moment arm.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-20">
                        <AccordionTrigger>Q.20 How can we increase torque by keeping the force constant?</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Ans: We can increase the torque by increasing the perpendicular distance from the line of action of the force to the point of rotation, known as the moment arm, by keeping the force constant, according to the relation: Torque = Force × Moment Arm.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-21">
                        <AccordionTrigger>Q.21 Can a moving body be in equilibrium? Explain.</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Ans: Yes, if a body is moving with uniform velocity, then the body is in equilibrium because neither linear nor rotational acceleration is produced in the body.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-22">
                        <AccordionTrigger>Q.22 Will a body be in equilibrium under the action of a single force?</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Ans: No, the body will not be in equilibrium because the first condition of equilibrium will not be fulfilled. Since a single force can never be zero and linear acceleration will be produced, therefore we can say that a body cannot be in equilibrium under the action of a single force.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-23">
                        <AccordionTrigger>Q.23 Can a body be in equilibrium if it is revolving clockwise under the action of a single force?</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Ans: No, the body will not be in equilibrium because the second condition of equilibrium will not be fulfilled. Since a single torque can never be zero and rotational acceleration will be produced, therefore we can say that a body cannot be in equilibrium under the action of a single torque.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-24">
                        <AccordionTrigger>Q.24 Give an example of a case when the resultant force is zero but resultant torque is not zero.</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Ans: In the case of a couple, two equal and opposite forces are acting on the same body, but the body still rotates. In this case, the resultant force is zero but the resultant torque is not zero. Example: While turning a car, the forces applied on the steering wheel by hands produce rotation in the steering wheel.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-25">
                        <AccordionTrigger>Q.25 How do we know whether a body is in stable or unstable equilibrium due to the position of its centre of gravity?</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Ans: If after disturbance, the centre of gravity of the body is raised compared to the initial position, then the body will be in a state of stable equilibrium. If after disturbance, the centre of gravity of the body is lowered compared to the initial position, then the body will be in a state of unstable equilibrium.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
            </div>
        </section>
    );
};

export default Page;
