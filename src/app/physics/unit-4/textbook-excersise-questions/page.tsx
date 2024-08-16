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
                TextBook Exercise Questions
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    {/* Definitions */}
                    <AccordionItem value="item-2">
                        <AccordionTrigger>4.2 Define the following</AccordionTrigger>
                        <AccordionContent>
                            <p><strong>(i) Resultant vector:</strong> A resultant force is a single force that has the same effect as the combined effect of all the forces to be added.</p>
                            <p><strong>(ii) Torque:</strong> The rotational effect of a force is measured by a quantity, known as torque.</p>
                            <p><strong>(iii) Centre of mass:</strong> Centre of mass of a system is such a point where an applied force causes the system to move without rotation.</p>
                            <p><strong>(iv) Centre of gravity:</strong> A point where the whole weight of the body appears to act vertically downward is called the centre of gravity of a body.</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Differentiations */}
                    <AccordionItem value="item-3">
                        <AccordionTrigger>4.3 Differentiate the following</AccordionTrigger>
                        <AccordionContent>
                            <p><strong>(i) Like and unlike parallel forces:</strong></p>
                            <p><strong>Like Parallel Forces:</strong> Like parallel forces are the forces that are parallel to each other and have the same direction.</p>
                            <p><strong>Unlike Parallel Forces:</strong> Unlike parallel forces are the forces that are parallel but have opposite directions to each other.</p>

                            <p><strong>(ii) Torque and Couple:</strong></p>
                            <p><strong>Torque:</strong> The rotational effect of a force is measured by a quantity, known as torque.</p>
                            <p><strong>Couple:</strong> A couple is formed by two unlike parallel forces of the same magnitude but not along the same line.</p>

                            <p><strong>(iii) Stable and Neutral Equilibrium:</strong></p>
                            <p><strong>Stable Equilibrium:</strong> A body is said to be in stable equilibrium if after a slight tilt it returns to its previous position.</p>
                            <p><strong>Neutral Equilibrium:</strong> If a body remains in its new position when disturbed from its previous position, it is said to be in a state of neutral equilibrium.</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Explanatory Answers */}
                    <AccordionItem value="item-4">
                        <AccordionTrigger>4.4 How head to tail rule helps to find the resultant of forces?</AccordionTrigger>
                        <AccordionContent>
                            <p>In head to tail rule, the resultant force is found by joining the tail of the first force with the head of the last force.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger>4.5 How can a force be resolved into its rectangular components?</AccordionTrigger>
                        <AccordionContent>
                            <p>See Q. no.2 Long Question</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6">
                        <AccordionTrigger>4.6 When is a body said to be in equilibrium?</AccordionTrigger>
                        <AccordionContent>
                            <p>A body is said to be in equilibrium if no net force acts on it. A body in equilibrium remains at rest or moves with uniform velocity.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-7">
                        <AccordionTrigger>4.7 Explain the first condition for equilibrium.</AccordionTrigger>
                        <AccordionContent>
                            <p>See Q. no.8 Long Question</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-8">
                        <AccordionTrigger>4.8 Why is there a need for a second condition for equilibrium if a body satisfies the first condition for equilibrium?</AccordionTrigger>
                        <AccordionContent>
                            <p>Two equal and opposite (unlike) forces having different lines of action form a couple, which produces angular acceleration, even though the first condition of equilibrium is being satisfied.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-9">
                        <AccordionTrigger>4.9 What is the second condition of equilibrium?</AccordionTrigger>
                        <AccordionContent>
                            <p>A body satisfies the second condition of equilibrium when the resultant torque acting on it is zero.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-10">
                        <AccordionTrigger>4.10 Give an example of a moving body that is in equilibrium.</AccordionTrigger>
                        <AccordionContent>
                            <p>(i) A body with uniform velocity in a straight line is in equilibrium.</p>
                            <p>(ii) A paratrooper coming down with terminal velocity is in equilibrium.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-11">
                        <AccordionTrigger>4.11 Think of a body that is at rest but not in equilibrium.</AccordionTrigger>
                        <AccordionContent>
                            <p>A ball thrown upward becomes at rest at the top. At this state, it is not in equilibrium although it is at rest.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-12">
                        <AccordionTrigger>4.12 When can a body not be in equilibrium due to a single force on it?</AccordionTrigger>
                        <AccordionContent>
                            <p>A single force acting on a body is not balanced and produces acceleration. Therefore, in the presence of a single force, the body cannot be in equilibrium.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-13">
                        <AccordionTrigger>4.13 Why is the height of vehicles kept as low as possible?</AccordionTrigger>
                        <AccordionContent>
                            <p>Vehicles are made heavy at the bottom. This lowers their center of gravity, which helps their stability and avoids the chance of toppling down.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-14">
                        <AccordionTrigger>4.14 Explain what is meant by stable, unstable, and neutral equilibrium. Give one example in each case.</AccordionTrigger>
                        <AccordionContent>
                            <p>See Q. no.9 Long Question</p>
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
            </div>
        </section>
    );
};

export default Page;
