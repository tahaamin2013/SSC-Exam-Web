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
