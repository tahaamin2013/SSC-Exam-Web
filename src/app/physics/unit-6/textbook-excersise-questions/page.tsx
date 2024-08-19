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
                Text Book Exercise Questions
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    {/* Question 1 */}
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            The work done will be zero when the angle between force and distance is:
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>c) 90°</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 2 */}
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            If the direction of motion of the force is perpendicular to the direction of motion of the body, then work done will be:
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>c) zero</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 3 */}
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            If the velocity of a body becomes double, then its kinetic energy will:
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>c) become four times</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 4 */}
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            The work done in lifting a brick of mass 2 kg through a height of 5 m above the ground will be:
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>d) 100 J</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 5 */}
                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            The kinetic energy of a body of mass 2 kg is 25 J. Its speed is:
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>a) 5 m/s</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 6 */}
                    <AccordionItem value="item-6">
                        <AccordionTrigger>
                            Which one of the following converts light energy into electrical energy?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>c) photocell</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 7 */}
                    <AccordionItem value="item-7">
                        <AccordionTrigger>
                            When a body is lifted through a height &apos;h&apos;, the work done on it appears in the form of its:
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>b) potential energy</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 8 */}
                    <AccordionItem value="item-8">
                        <AccordionTrigger>
                            The energy stored in coal is:
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>c) chemical energy</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 9 */}
                    <AccordionItem value="item-9">
                        <AccordionTrigger>
                            The energy stored in a dam is:
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>b) potential energy</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 10 */}
                    <AccordionItem value="item-10">
                        <AccordionTrigger>
                            In Einstein&apos;s mass-energy equation, &apos;c&apos; is the:
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>b) speed of light</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 11 */}
                    <AccordionItem value="item-11">
                        <AccordionTrigger>
                            Rate of doing work is called:
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>c) power</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 12 */}
                    <AccordionItem value="item-12">
                        <AccordionTrigger>
                            Define work. What is its SI unit?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Work is done when a force acting on a body displaces it in the direction of the force. The unit of work in the International System (SI) is the joule (J). The amount of work done will be one joule if a force of one Newton displaces a body through a distance of one meter in the direction of the force.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 13 */}
                    <AccordionItem value="item-13">
                        <AccordionTrigger>
                            When does a force do work? Explain.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                A force does work when it acts on a body and the body covers some distance in the direction of the force. The work done can be calculated by the formula W = F * S.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 14 */}
                    <AccordionItem value="item-14">
                        <AccordionTrigger>
                            Why do we need energy?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                We need energy to perform different types of work in our daily lives. Energy enables us to move, stop moving objects, and perform various tasks. It is the ability to do work.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 15 */}
                    <AccordionItem value="item-15">
                        <AccordionTrigger>
                            Define energy; give two types of mechanical energy.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Energy is the ability of a body to do work. Mechanical energy is of two types:
                                <ul>
                                    <li>Kinetic Energy</li>
                                    <li>Potential Energy</li>
                                </ul>
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 16 */}
                    <AccordionItem value="item-16">
                        <AccordionTrigger>
                            Define K.E. and derive its relation.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Kinetic Energy (K.E.) is the energy possessed by a body due to its motion. The relation for kinetic energy is:
                                <br />
                                K.E. = (1/2) * m * v²
                                <br />
                                where m is the mass and v is the velocity of the body.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 17 */}
                    <AccordionItem value="item-17">
                        <AccordionTrigger>
                            Define potential energy and derive its relation.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Potential Energy (P.E.) is the energy possessed by a body due to its position or configuration. The relation for potential energy is:
                                <br />
                                P.E. = m * g * h
                                <br />
                                where m is the mass, g is the acceleration due to gravity, and h is the height.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 18 */}
                    <AccordionItem value="item-18">
                        <AccordionTrigger>
                            Why are fossil fuels called non-renewable forms of energy?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Fossil fuels are called non-renewable because they are consumed completely after giving energy. Once used, they cannot be replaced within a human time scale.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 19 */}
                    <AccordionItem value="item-19">
                        <AccordionTrigger>
                            Which form of energy is most preferred and why?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Solar energy is most preferred because it is the ultimate source of energy for life, does not pollute the environment, and is a vast source of energy. A suitable method to harness solar energy can fulfill our energy requirements.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 20 */}
                    <AccordionItem value="item-20">
                        <AccordionTrigger>
                            How is energy converted from one form to another? Explain.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Energy is converted from one form to another through various processes. For example, in a car engine, chemical energy from fuel is converted into mechanical energy. In a power plant, mechanical energy from steam turbines is converted into electrical energy.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 21 */}
                    <AccordionItem value="item-21">
                        <AccordionTrigger>
                            Name the five devices that convert electrical energy into mechanical energy.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                <ul>
                                    <li>Electric Motor</li>
                                    <li>Electric Fan</li>
                                    <li>Elevator</li>
                                    <li>Drill Machine</li>
                                    <li>Grinder</li>
                                    <li>Sewing Machine</li>
                                </ul>
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 22 */}
                    <AccordionItem value="item-22">
                        <AccordionTrigger>
                            Name a device that converts mechanical energy into electrical energy.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Electric Generator is a device that converts mechanical energy into electrical energy.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 23 */}
                    <AccordionItem value="item-23">
                        <AccordionTrigger>
                            What is meant by the efficiency of a system?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Efficiency of a system is the ratio of the useful output energy to the total input energy. It measures how well a system converts input energy into useful output energy.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 24 */}
                    <AccordionItem value="item-24">
                        <AccordionTrigger>
                            How can you find the efficiency of a system?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Efficiency can be calculated as:
                                <br />
                                Efficiency (%) = (Useful output energy / Total input energy) * 100
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 25 */}
                    <AccordionItem value="item-25">
                        <AccordionTrigger>
                            What is meant by the term power?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Power is the rate at which work is done with respect to time. It is calculated as:
                                <br />
                                Power (P) = Work (W) / Time (t)
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 26 */}
                    <AccordionItem value="item-26">
                        <AccordionTrigger>
                            Define watt.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                The unit of power in the International System (SI) is watt (W). One watt is defined as the power when one joule of work is done in one second.
                                <br />
                                1 W = 1 J/s
                                <br />
                                Larger units include:
                                <br />
                                1 kW = 1000 W
                                <br />
                                1 MW = 1,000,000 W
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};

export default Page;
