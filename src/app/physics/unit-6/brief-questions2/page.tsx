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
                    {/* Question 1 */}
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Q.1 Define work and its unit.</AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Definition:</strong> The product of force and distance covered in the direction of force is equal to the work done.</p>
                            <p>Work is done when force acting on a body displaces it in the direction of the force.</p>
                            <p><strong>Unit of work:</strong> Joule</p>
                            <p>&quot;The amount of work done will be one joule if a force of one Newton displaces a body through a distance of one meter in the direction of the force.&quot;</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 2 */}
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Q.2 Define Energy and write down its unit.</AccordionTrigger>
                        <AccordionContent>
                            <p>A body possesses energy if it is capable to do work.</p>
                            <p><strong>OR</strong></p>
                            <p>Ability of a body to do work is known as energy.</p>
                            <p><strong>Unit:</strong> Joule is the unit of energy, the same as that of work.</p>
                            <p><strong>Types of Energy:</strong> Energy exists in various forms such as mechanical energy, heat energy, light energy, sound energy, electrical energy, chemical energy, and nuclear energy.</p>
                            <p><strong>Types of Mechanical Energy:</strong></p>
                            <ul>
                                <li>(i) Kinetic Energy</li>
                                <li>(ii) Potential Energy</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 3 */}
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Q.3 Define kinetic energy and give at least one example.</AccordionTrigger>
                        <AccordionContent>
                            <p>&quot;The energy possessed by a body due to its motion is called kinetic energy.&quot;</p>
                            <p><strong>Example:</strong> Moving water in a river can carry wooden logs through large distances and can also be used to drive turbines for generating electricity.</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 4 */}
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Q.4 Define Potential Energy and give examples.</AccordionTrigger>
                        <AccordionContent>
                            <p>The energy possessed by a body due to its position is known as its potential energy.</p>
                            <p><strong>Examples:</strong></p>
                            <ul>
                                <li>Stored water in a dam</li>
                                <li>A hammer raised up to some height has the ability to do work</li>
                                <li>A stretched bow has potential energy due to its stretched position</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 5 */}
                    <AccordionItem value="item-5">
                        <AccordionTrigger>Q.5 Define Gravitational Potential Energy and give at least one example.</AccordionTrigger>
                        <AccordionContent>
                            <p>The energy present in a body due to its height is called gravitational potential energy.</p>
                            <p><strong>Example:</strong></p>
                            <ul>
                                <li>Stored water in a dam</li>
                                <li>Energy of a stone lying on the roof</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 6 */}
                    <AccordionItem value="item-6">
                        <AccordionTrigger>Q.6 Define Efficiency.</AccordionTrigger>
                        <AccordionContent>
                            <p>Efficiency of a system is the ratio of the required form of energy obtained from a system as output to the total energy given to it as input.</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 7 */}
                    <AccordionItem value="item-7">
                        <AccordionTrigger>Q.7 What do you know about Ideal machine?</AccordionTrigger>
                        <AccordionContent>
                            <p>An ideal machine is one that gives an output equal to the total energy used by it. In other words, its efficiency is 100%. Practically, such a system does not exist.</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 8 */}
                    <AccordionItem value="item-8">
                        <AccordionTrigger>Q.8 Can we say that practical systems can be 100% efficient?</AccordionTrigger>
                        <AccordionContent>
                            <p>No, practical systems cannot be 100% efficient. Energy losses due to friction, heat, and noise mean that the energy in the required form obtained from a working system is always less than the energy given to it as input.</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 9 */}
                    <AccordionItem value="item-9">
                        <AccordionTrigger>Q.9 Define Power. Write down its unit and define it.</AccordionTrigger>
                        <AccordionContent>
                            <p>&quot;Rate of doing work with respect to time is called power.&quot;</p>
                            <p><strong>Unit of power:</strong> Watt (W)</p>
                            <p>&quot;If a body does work of one joule in one second, then its power will be one watt.&quot;</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 10 */}
                    <AccordionItem value="item-10">
                        <AccordionTrigger>Q.10 Do we do any work when we lift a load from the Earth to some height?</AccordionTrigger>
                        <AccordionContent>
                            <p>Yes, we do work when we lift a load from the Earth to some height because we work against the gravitational pull of the Earth. Mathematically, it can be expressed as W = F × S = mgh.</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 11 */}
                    <AccordionItem value="item-11">
                        <AccordionTrigger>Q.11 How much power is used by a 40 kg athlete by climbing 10m high ladder in 10s?</AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Given:</strong> Mass m = 40 kg, Height h = 10 m, Time t = 10 s</p>
                            <p>Force F = m × g = 40 × 10 = 400 N</p>
                            <p>Work W = F × S = 400 × 10 = 4000 J</p>
                            <p>Power P = W/t = 4000/10 = 400 W</p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 12 */}
                    <AccordionItem value="item-12">
                        <AccordionTrigger>Q.12 Give some examples of energies used in our body?</AccordionTrigger>
                        <AccordionContent>
                            <p>There are many kinds of energies used in our body. Some of them are:</p>
                            <ul>
                                <li><strong>Mechanical Energy:</strong> For the movement of our body.</li>
                                <li><strong>Chemical Energy:</strong> For making body molecules.</li>
                                <li><strong>Electrical Energy:</strong> For the propagation of electrical signals in the body.</li>
                                <li><strong>Heat Energy:</strong> For maintaining body temperature.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 13 */}
                    <AccordionItem value="item-13">
                        <AccordionTrigger>Q.13 How much work is done when a body moves with uniform velocity?</AccordionTrigger>
                        <AccordionContent>
                            <p>When a body moves with uniform velocity, it means it is moving with zero acceleration. Therefore, the work done will be zero because, according to Newton&apos;s second law of motion, if a = 0, then the net resultant force acting on the body is zero.</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};

export default Page;