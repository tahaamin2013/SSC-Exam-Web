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
                        <AccordionTrigger>
                            1. A car is moving with a constant speed along a straight road. Is there any work done on the car?
                        </AccordionTrigger>
                        <AccordionContent>
                            No, if a car is moving with a constant speed along a straight road, the work done on it is zero. This is because the force applied is balanced by the resistive forces such as friction, and there is no change in the car’s kinetic energy.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 2 */}
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            2. Does the work done in raising a box up in a building depend upon how fast it is raised up? Through which path? To how much height?
                        </AccordionTrigger>
                        <AccordionContent>
                            No, the work done in raising a box up in a building does not depend on how fast it is raised or the path taken. It depends only on the height to which the box is raised and the weight of the box. The work done is calculated as W = mgh, where m is the mass, g is the acceleration due to gravity, and h is the height.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 3 */}
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            3. Work done on the body either speeds it up or slows it down. Keeping this in mind, explain how much work is done by centripetal force on an orbiting satellite?
                        </AccordionTrigger>
                        <AccordionContent>
                            The centripetal force acting on an orbiting satellite does no work on the satellite because it only changes the direction of the satellite’s velocity, not its speed. Since work is defined as the force times the displacement in the direction of the force, and the centripetal force is always perpendicular to the direction of the satellite’s motion, the work done by the centripetal force is zero.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 4 */}
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            4. A car has kinetic energy &apos;E&apos;. By what factor does its kinetic energy change if its velocity is doubled?
                        </AccordionTrigger>
                        <AccordionContent>
                            If the velocity of a car is doubled, its kinetic energy increases by a factor of four. This is because kinetic energy is proportional to the square of the velocity (E = 1/2 mv^2). So, if velocity v is doubled, the kinetic energy becomes E = 1/2 m (2v)^2 = 4 × (1/2 mv^2) = 4E.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 5 */}
                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            5. A bullet is fired from a gun, and it penetrates into a sand wall and stops. Where is its kinetic energy used?
                        </AccordionTrigger>
                        <AccordionContent>
                            The kinetic energy of the bullet is used to do work against the resistive forces of the sand wall. It is converted into heat energy, sound energy, and deformation energy (both in the bullet and the sand). Most of the energy is converted into heat due to friction and deformation.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 6 */}
                    <AccordionItem value="item-6">
                        <AccordionTrigger>
                            6. An LED light bulb has an efficiency of 80%. Does it violate the conservation of energy principle?
                        </AccordionTrigger>
                        <AccordionContent>
                            No, an LED light bulb with 80% efficiency does not violate the conservation of energy principle. It means that 80% of the electrical energy is converted into light energy, and the remaining 20% is lost as heat. The total energy is conserved, and the principle is upheld.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 7 */}
                    <AccordionItem value="item-7">
                        <AccordionTrigger>
                            7. How does using renewable energy sources contribute to reducing environmental impact compared to non-renewable sources?
                        </AccordionTrigger>
                        <AccordionContent>
                            Using renewable energy sources reduces environmental impact because they generate energy without depleting natural resources or producing greenhouse gases. Renewable sources like solar, wind, and hydro power have minimal to no emissions compared to non-renewable sources like coal and oil, which contribute to pollution and climate change.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 8 */}
                    <AccordionItem value="item-8">
                        <AccordionTrigger>
                            8. Will we eventually rely entirely on renewable energy sources? Why or why not?
                        </AccordionTrigger>
                        <AccordionContent>
                            It is possible that we may rely entirely on renewable energy sources in the future as technology advances and becomes more cost-effective. However, challenges such as energy storage, infrastructure, and intermittency must be addressed. The transition will depend on technological, economic, and policy developments.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 9 */}
                    <AccordionItem value="item-9">
                        <AccordionTrigger>
                            9. How can increasing the power of a machine impact its energy consumption?
                        </AccordionTrigger>
                        <AccordionContent>
                            Increasing the power of a machine generally increases its energy consumption because higher power output requires more energy input. The relationship is linear if efficiency remains constant. However, more energy consumption can lead to higher operational costs and greater environmental impact if not managed properly.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 10 */}
                    <AccordionItem value="item-10">
                        <AccordionTrigger>
                            10. A perpetual engine has an efficiency equal to 1. Why will it not work?
                        </AccordionTrigger>
                        <AccordionContent>
                            A perpetual engine with 100% efficiency is not feasible due to the second law of thermodynamics, which states that no machine can be 100% efficient because some energy is always lost as waste heat. Such an engine would violate the conservation of energy principle and the laws of thermodynamics, making it impossible to achieve.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};

export default Page;
