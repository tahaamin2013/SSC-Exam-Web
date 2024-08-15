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
                Textbook Questions
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    {/* Question 4.1 */}
                    <AccordionItem value="item-1">
                        <AccordionTrigger>4.1 Multiple Choice Questions</AccordionTrigger>
                        <AccordionContent>
                            <p>Encircle the correct answer from the given choices:</p>
                            <ol className="list-decimal list-inside ml-4">
                                <li>
                                    Two equal but unlike parallel forces having different lines of action produce:
                                    <ul className="list-disc ml-6">
                                        <li>a) Torque</li>
                                        <li>b) Couple</li>
                                        <li>c) Equilibrium</li>
                                        <li>d) Neutral equilibrium</li>
                                    </ul>
                                </li>
                                <li>
                                    The number of forces that can be added by the head-to-tail rule is:
                                    <ul className="list-disc ml-6">
                                        <li>a) 2</li>
                                        <li>b) 3</li>
                                        <li>c) 4</li>
                                        <li>d) Any number</li>
                                    </ul>
                                </li>
                                <li>
                                    The number of perpendicular components of forces is:
                                    <ul className="list-disc ml-6">
                                        <li>a) 1</li>
                                        <li>b) 2</li>
                                        <li>c) 3</li>
                                        <li>d) 4</li>
                                    </ul>
                                </li>
                                <li>
                                    A force of 10 N is making an angle of 30° with the horizontal. Its horizontal component will be:
                                    <ul className="list-disc ml-6">
                                        <li>a) 4 N</li>
                                        <li>b) 5 N</li>
                                        <li>c) 7 N</li>
                                        <li>d) 8.7 N</li>
                                    </ul>
                                </li>
                                <li>
                                    A couple is formed by:
                                    <ul className="list-disc ml-6">
                                        <li>a) Two forces perpendicular to each other</li>
                                        <li>b) Two like parallel forces</li>
                                        <li>c) Two equal and opposite forces in the same line</li>
                                        <li>d) Two equal and opposite forces not in the same line</li>
                                    </ul>
                                </li>
                                <li>
                                    A body is in equilibrium when its:
                                    <ul className="list-disc ml-6">
                                        <li>a) Acceleration is uniform</li>
                                        <li>b) Speed is uniform</li>
                                        <li>c) Speed and acceleration are uniform</li>
                                        <li>d) Acceleration is zero</li>
                                    </ul>
                                </li>
                                <li>
                                    A body is in neutral equilibrium when its center of gravity:
                                    <ul className="list-disc ml-6">
                                        <li>a) Is at its highest position</li>
                                        <li>b) Is at the lowest position</li>
                                        <li>c) Keeps its height if displaced</li>
                                        <li>d) Is situated at its bottom</li>
                                    </ul>
                                </li>
                                <li>
                                    Racing cars are made stable by:
                                    <ul className="list-disc ml-6">
                                        <li>a) Increasing their speed</li>
                                        <li>b) Decreasing their mass</li>
                                        <li>c) Lowering their center of gravity</li>
                                        <li>d) Decreasing their width</li>
                                    </ul>
                                </li>
                            </ol>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 4.2 */}
                    <AccordionItem value="item-2">
                        <AccordionTrigger>4.2 Define the following:</AccordionTrigger>
                        <AccordionContent>
                            <p><strong>(i) Resultant Vector:</strong> A resultant force is a single force that has the same effect as the combined effect of all the forces to be added.</p>
                            <p><strong>(ii) Torque:</strong> The rotational effect of a force is measured by a quantity known as torque.</p>
                            <p><strong>(iii) Center of Mass:</strong> The center of mass of a system is such a point where an applied force causes the system to move without rotation.</p>
                            <p><strong>(iv) Center of Gravity:</strong> A point where the whole weight of the body appears to act vertically downward is called the center of gravity of a body.</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 4.3 */}
                    <AccordionItem value="item-3">
                        <AccordionTrigger>4.3 Differentiate the following:</AccordionTrigger>
                        <AccordionContent>
                            <p><strong>(i) Like and Unlike Parallel Forces</strong></p>
                            <p><strong>Like Parallel Forces:</strong> Forces that are parallel to each other and have the same direction.</p>
                            <p><strong>Unlike Parallel Forces:</strong> Forces that are parallel but have opposite directions.</p>
                            <p><strong>(ii) Torque and Couple</strong></p>
                            <p><strong>Torque:</strong> The rotational effect of a force is measured by a quantity known as torque.</p>
                            <p><strong>Couple:</strong> A couple is formed by two unlike parallel forces of the same magnitude but not along the same line.</p>
                            <p><strong>(iii) Stable and Neutral Equilibrium</strong></p>
                            <p><strong>Stable Equilibrium:</strong> A body is in stable equilibrium if, after a slight tilt, it returns to its
                                previous position.</p>
                            <p><strong>Neutral Equilibrium:</strong> A body is in neutral equilibrium if it remains in its new position when disturbed from its previous position.</p>
                        </AccordionContent>
                    </AccordionItem>

                    php
                    Copy code
                    {/* Question 4.4 */}
                    <AccordionItem value="item-4">
                        <AccordionTrigger>4.4 How does the head-to-tail rule help to find the resultant of forces?</AccordionTrigger>
                        <AccordionContent>
                            <p>In the head-to-tail rule, the resultant force is found by joining the tail of the first force with the head of the last force. This method helps to visually determine the combined effect of multiple forces.</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 4.5 */}
                    <AccordionItem value="item-5">
                        <AccordionTrigger>4.5 How can a force be resolved into its rectangular components?</AccordionTrigger>
                        <AccordionContent>
                            <p>This question is explained in detail in Q. no. 2 of the Long Questions section.</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 4.6 */}
                    <AccordionItem value="item-6">
                        <AccordionTrigger>4.6 When is a body said to be in equilibrium?</AccordionTrigger>
                        <AccordionContent>
                            <p>A body is said to be in equilibrium when no net force acts on it. A body in equilibrium remains at rest or moves with uniform velocity.</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 4.7 */}
                    <AccordionItem value="item-7">
                        <AccordionTrigger>4.7 Explain the first condition for equilibrium.</AccordionTrigger>
                        <AccordionContent>
                            <p>This question is explained in detail in Q. no. 8 of the Long Questions section.</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 4.8 */}
                    <AccordionItem value="item-8">
                        <AccordionTrigger>4.8 Why is there a need for the second condition for equilibrium if a body satisfies the first condition?</AccordionTrigger>
                        <AccordionContent>
                            <p>Two equal and opposite (unlike) forces having different lines of action form a couple, which produces angular acceleration. Although the first condition of equilibrium is being satisfied, the second condition is necessary to prevent rotation.</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 4.9 */}
                    <AccordionItem value="item-9">
                        <AccordionTrigger>4.9 What is the second condition of equilibrium?</AccordionTrigger>
                        <AccordionContent>
                            <p>A body satisfies the second condition of equilibrium when the resultant torque acting on it is zero, ensuring that there is no rotational motion.</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 4.10 */}
                    <AccordionItem value="item-10">
                        <AccordionTrigger>4.10 Give an example of a moving body that is in equilibrium.</AccordionTrigger>
                        <AccordionContent>
                            <p>(i) A body moving with uniform velocity in a straight line is in equilibrium.</p>
                            <p>(ii) A paratrooper descending with terminal velocity is also in equilibrium.</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 4.11 */}
                    <AccordionItem value="item-11">
                        <AccordionTrigger>4.11 Give an example where a body is at rest but not in equilibrium.</AccordionTrigger>
                        <AccordionContent>
                            <p>A ball thrown upward becomes at rest at the top of its trajectory. At this state, it is not in equilibrium, although it is at rest.</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 4.12 */}
                    <AccordionItem value="item-12">
                        <AccordionTrigger>4.12 When can a body not be in equilibrium due to a single force on it?</AccordionTrigger>
                        <AccordionContent>
                            <p>A single force acting on a body is not balanced and produces acceleration. Therefore, in the presence of a single force, a body cannot be in equilibrium.</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 4.13 */}
                    <AccordionItem value="item-13">
                        <AccordionTrigger>4.13 Why is the height of vehicles kept as low as possible?</AccordionTrigger>
                        <AccordionContent>
                            <p>Vehicles are made heavy at the bottom. This lowers their center of gravity and helps their stability, reducing the chance of toppling over.</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 4.14 */}
                    <AccordionItem value="item-14">
                        <AccordionTrigger>4.14 Explain what is meant by stable, unstable, and neutral equilibrium. Give one example in each case.</AccordionTrigger>
                        <AccordionContent>
                            <p>This question is explained in detail in Q. no. 9 of the Long Questions section.</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};

export default Page;