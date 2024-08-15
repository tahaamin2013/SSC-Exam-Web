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
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            1. While walking on a trampoline, do you feel more pressure when you stand still or jump up and down? Why does pressure change with movement?
                        </AccordionTrigger>
                        <AccordionContent>
                            When you jump up and down on a trampoline, you feel more pressure because you exert a greater force on the trampoline due to the additional downward acceleration. Pressure changes with movement because the force you exert increases with your acceleration, and pressure is the force applied per unit area.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            2. How does the shape of a thumb pin help it penetrate surfaces easily?
                        </AccordionTrigger>
                        <AccordionContent>
                            The shape of a thumb pin, with a pointed tip, helps it penetrate surfaces easily by concentrating the applied force onto a smaller area, increasing the pressure exerted on the surface and making it easier to puncture.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            3. If you blow up a balloon and then tie it closed, why does it stay inflated even though you stop blowing? How does pressure play a role here?
                        </AccordionTrigger>
                        <AccordionContent>
                            The balloon stays inflated because the air inside is at a higher pressure than the atmospheric pressure outside. When you tie it closed, the higher internal pressure keeps the balloon expanded, as the pressure difference maintains its shape.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            4. Why is an inner airtight layer of a space suit designed to maintain a constant pressure around the astronaut?
                        </AccordionTrigger>
                        <AccordionContent>
                            The airtight layer of a space suit maintains a constant pressure to protect the astronaut from the vacuum of space. Without this pressure, the lack of atmospheric pressure could lead to bodily harm or make it impossible for the astronaut to function.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            5. If a liquid has density twice the density of mercury, what will be the height of the liquid column in a barometer?
                        </AccordionTrigger>
                        <AccordionContent>
                            The height of the liquid column in a barometer would be half of the height of the mercury column, given that the pressure exerted by a liquid column is directly proportional to its density. Therefore, if the density is twice that of mercury, the height of the liquid column will be halved.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>
                            6. Why wouldn&apos;t we be able to sip water with a straw on the moon?
                        </AccordionTrigger>
                        <AccordionContent>
                            On the moon, the lack of atmospheric pressure makes it impossible to create the necessary pressure difference for drawing liquid up a straw. The reduced pressure prevents the liquid from being lifted effectively.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger>
                            7. How are we able to break a metal wire by bending it repeatedly?
                        </AccordionTrigger>
                        <AccordionContent>
                            Bending a metal wire repeatedly causes the metal to undergo repeated stress and strain, leading to the formation of microscopic cracks. Over time, these cracks accumulate and cause the wire to break.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-8">
                        <AccordionTrigger>
                            8. A spring, having a spring constant k, when loaded with mass &apos;m&apos;, is cut into two equal parts. One of the parts is loaded with the same mass m again. What will be its spring constant now?
                        </AccordionTrigger>
                        <AccordionContent>
                            When the spring is cut into two equal parts, each part will have a spring constant of 2k. If one part is loaded with the same mass, it will now exhibit a spring constant of 2k.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-9">
                        <AccordionTrigger>
                            9. Why do static fluids always exert a force perpendicular to the surface?
                        </AccordionTrigger>
                        <AccordionContent>
                            Static fluids exert force perpendicular to surfaces because pressure in a fluid is isotropic, meaning it acts equally in all directions. This results in forces being applied perpendicularly to surfaces.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-10">
                        <AccordionTrigger>
                            10. How can a small car lifter lift a load heavier than itself?
                        </AccordionTrigger>
                        <AccordionContent>
                            A small car lifter can lift a heavier load by using hydraulic systems that amplify force. According to Pascal&apos;s principle, the pressure applied to a smaller piston is transmitted to a larger piston, magnifying the force exerted and allowing the lifter to handle heavier loads.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};

export default Page;
