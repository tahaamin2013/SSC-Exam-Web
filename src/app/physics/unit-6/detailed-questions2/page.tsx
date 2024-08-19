import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const QuestionDashboard = () => {
    return (
        <section
            id="Questions"
            className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6"
        >
            <h1 className="font-bold text-3xl text-center mb-4">
                Long Questions (8 marks each)
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    {/* Question 1 */}
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            Define work. Derive its mathematical formula.
                        </AccordionTrigger>
                        <AccordionContent>
                            Work is done when force acting on a body displaces it in the direction of a force. The product of force and distance covered in the direction of force is equal to the work done. For work, the following two conditions must be fulfilled: a force should act on a body, and the body should cover some distance under the action of this force. The formula is W = F * S * cos(θ), where θ is the angle between the force and displacement.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 2 */}
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            Define kinetic energy and derive its mathematical formula.
                        </AccordionTrigger>
                        <AccordionContent>
                            The energy possessed by a body due to its motion is called kinetic energy. The formula is K.E = 1/2 * m * v^2, where m is the mass and v is the velocity of the body.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 3 */}
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            Define Gravitational Potential Energy and derive its mathematical formula.
                        </AccordionTrigger>
                        <AccordionContent>
                            The energy present in a body due to its height is called gravitational potential energy. The formula is PE = m * g * h, where m is the mass, g is the acceleration due to gravity, and h is the height.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 4 */}
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            Explain different Forms of Energy.
                        </AccordionTrigger>
                        <AccordionContent>
                            Energy exists in various forms including mechanical, heat, electrical, sound, light, chemical, and nuclear energy. Each form has its specific sources and uses.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 5 */}
                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            Explain Inter Conversion of Energy.
                        </AccordionTrigger>
                        <AccordionContent>
                            Energy can be converted from one form to another, such as mechanical energy converting to heat energy when rubbing hands together. The total energy remains constant during these conversions.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 6 */}
                    <AccordionItem value="item-6">
                        <AccordionTrigger>
                            Explain Major Sources of Energy.
                        </AccordionTrigger>
                        <AccordionContent>
                            Major sources of energy include fossil fuels, nuclear fuels, and renewable sources like solar and wind energy. Each source has its benefits and limitations.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 7 */}
                    <AccordionItem value="item-7">
                        <AccordionTrigger>
                            Explain Renewable Energy Sources.
                        </AccordionTrigger>
                        <AccordionContent>
                            Renewable energy sources include solar energy, wind energy, and hydropower. These sources are sustainable and do not deplete over time.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 8 */}
                    <AccordionItem value="item-8">
                        <AccordionTrigger>
                            Explain Solar House Heating.
                        </AccordionTrigger>
                        <AccordionContent>
                            Solar house heating systems use solar collectors to absorb sunlight and convert it into heat, which is then used for heating water or air in buildings.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 9 */}
                    <AccordionItem value="item-9">
                        <AccordionTrigger>
                            What are the future hopes of the world about energy?
                        </AccordionTrigger>
                        <AccordionContent>
                            Future hopes include advancements in solar, wind, geothermal, and biomass energy to provide clean, sustainable power. Research is ongoing to improve these technologies and make them more efficient.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 10 */}
                    <AccordionItem value="item-10">
                        <AccordionTrigger>
                            Explain Mass-Energy Equation.
                        </AccordionTrigger>
                        <AccordionContent>
                            Einstein&apos;s mass-energy equation E = mc² shows the relationship between mass (m) and energy (E), where c is the speed of light. It indicates that a small amount of mass can be converted into a large amount of energy.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 11 */}
                    <AccordionItem value="item-11">
                        <AccordionTrigger>
                            Explain the electricity from fossil fuels with block diagram.
                        </AccordionTrigger>
                        <AccordionContent>
                            Fossil fuels are burned to produce heat, which converts water into steam. The steam drives a turbine connected to a generator, producing electricity. This process involves several energy conversions, from chemical energy to electrical energy.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 12 */}
                    <AccordionItem value="item-12">
                        <AccordionTrigger>
                            Explain the effect of consumption of Energy on Environment.
                        </AccordionTrigger>
                        <AccordionContent>
                            Energy consumption can lead to pollution (air, water, noise), thermal pollution, and nuclear pollution. Governments and individuals are working to mitigate these effects through regulations and sustainable practices.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 13 */}
                    <AccordionItem value="item-13">
                        <AccordionTrigger>
                            Draw the Flow Diagram Of An Energy Converter.
                        </AccordionTrigger>
                        <AccordionContent>
                            A flow diagram of an energy converter shows the conversion of input energy into useful work and the dissipation of remaining energy as heat or sound. It illustrates how energy is transformed in the system.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 14 */}
                    <AccordionItem value="item-14">
                        <AccordionTrigger>
                            What is Efficiency? Explain the ideal machine and practical systems.
                        </AccordionTrigger>
                        <AccordionContent>
                            Efficiency is the ratio of useful output energy to input energy. An ideal machine would have 100% efficiency, but practical systems always have some energy losses due to friction and other factors.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 15 */}
                    <AccordionItem value="item-15">
                        <AccordionTrigger>
                            What is Power? Write down its unit and define it.
                        </AccordionTrigger>
                        <AccordionContent>
                            Power is the rate of doing work or the rate at which energy is transferred. The formula is P = W / t, where W is work and t is time. The unit of power is the watt (W).
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};

export default QuestionDashboard;
