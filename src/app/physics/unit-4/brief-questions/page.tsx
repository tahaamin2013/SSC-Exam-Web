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
                        <AccordionTrigger>Why is a long spanner used to open or tighten nuts of a vehicle&apos;s tire? Why is a small nut not suitable for an extra-long wrench?</AccordionTrigger>
                        <AccordionContent>
                            A long spanner provides greater leverage, making it easier to apply more torque to open or tighten nuts. For a small nut, an extra-long wrench might be cumbersome and less precise.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 2 */}
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Why are door knobs fixed at the edge of the door? What happens if the door knob is at the middle of the door?</AccordionTrigger>
                        <AccordionContent>
                            Door knobs are fixed at the edge to ensure easy operation and proper alignment with the latch. If placed in the middle, it would be inconvenient to reach and would disrupt the door&apos;s functionality.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 3 */}
                    <AccordionItem value="item-3">
                        <AccordionTrigger>If you drop a feather and a bowling ball from the same height, which will reach terminal velocity first? Which will hit the ground first?</AccordionTrigger>
                        <AccordionContent>
                            The feather will reach terminal velocity first due to its lower mass and higher air resistance. However, the bowling ball will hit the ground first as it is less affected by air resistance and accelerates faster due to gravity.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 4 */}
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Why do ice skates effortlessly slide on ice, while your shoes cause skidding?</AccordionTrigger>
                        <AccordionContent>
                            Ice skates slide easily due to the thin blade that reduces friction by creating a thin layer of water under the skate. Shoes, with a larger contact area, create more friction and cause skidding.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 5 */}
                    <AccordionItem value="item-5">
                        <AccordionTrigger>Explain why it&apos;s easier to push a car on flat tires than inflated ones. What happens to the frictional force between the tires and the road?</AccordionTrigger>
                        <AccordionContent>
                            Pushing a car on flat tires is easier due to reduced rolling resistance. Inflated tires have more contact with the road, increasing frictional force and making it harder to push.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 6 */}
                    <AccordionItem value="item-6">
                        <AccordionTrigger>When standing on a crowded school bus, which stance provides better stability: legs joined or legs spread apart?</AccordionTrigger>
                        <AccordionContent>
                            Legs spread apart provide better stability as they lower the center of gravity and increase the base of support, reducing the risk of being pushed over.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 7 */}
                    <AccordionItem value="item-7">
                        <AccordionTrigger>Why is a moving bicycle easier to balance? Relate this to the principles of rotational motion.</AccordionTrigger>
                        <AccordionContent>
                            A moving bicycle is easier to balance due to the gyroscopic effect of the wheels and the forward motion creating a stabilizing angular momentum, which helps maintain balance.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 8 */}
                    <AccordionItem value="item-8">
                        <AccordionTrigger>Why is a pencil standing on its tip unstable, and what factors affect the stability of an object balanced on a point?</AccordionTrigger>
                        <AccordionContent>
                            A pencil on its tip is unstable due to a small base of support and a high center of gravity. Stability depends on the base area and the height of the center of gravity relative to the base.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 9 */}
                    <AccordionItem value="item-9">
                        <AccordionTrigger>What happens if a driver takes a curve too fast? How does centripetal force play a role in keeping the car from skidding off the road?</AccordionTrigger>
                        <AccordionContent>
                            Taking a curve too fast can cause the car to skid as the required centripetal force exceeds the available frictional force. Centripetal force keeps the car moving in a circular path by pulling it towards the center of the curve.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 10 */}
                    <AccordionItem value="item-10">
                        <AccordionTrigger>Consider a situation where you swing a ball connected to a string in a circle. How does the tension in the string vary as the ball moves across different points in its circular path, and what forces are involved?</AccordionTrigger>
                        <AccordionContent>
                            The tension in the string varies with the speed of the ball and the radius of the circle. At higher speeds or tighter radii, the tension increases. Forces involved include centripetal force, provided by the tension in the string.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 11 */}
                    <AccordionItem value="item-11">
                        <AccordionTrigger>Why is it important for communication satellites in geostationary orbit to maintain a specific speed?</AccordionTrigger>
                        <AccordionContent>
                            Communication satellites in geostationary orbit must maintain a specific speed to stay above the same point on Earth. This ensures continuous communication with a fixed ground location.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};

export default Page;
