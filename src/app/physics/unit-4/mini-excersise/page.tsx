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
                Mini Exercise
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>(1) In a right angled triangle length of base is 4 cm and its perpendicular is 3 m. Find</AccordionTrigger>
                        <AccordionContent>
                            <p>(i) We know that (Hypotenuse) (Base) (4) 25 = By taking square root on both sides 16 (3) L 5cm</p>
                            <p>(ii) As we know that:</p>
                            <p>Hypotenuse = perpendicular / hypotemase = 3/5</p>
                            <p>So, sin θ = 3/5</p>
                            <p>(iii) As we know that:</p>
                            <p>Base / CosB = Hypotenuse</p>
                            <p>So, Cos θ = 4/5</p>
                            <p>(iv) As we know that:</p>
                            <p>Perpendicular / Base</p>
                            <p>So, tan θ = 3/4</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>(2) A force of 150 N can loosen a nut when applied at the end of a spanner 10cm long. What should be the length of the spanner to loosen the same nut with 60 N force? How much force would be sufficient to loosen it with a 6 cm long spanner?</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: As FxL = 150 x 0.1 = 15 Nm</p>
                            <p>For 60 N force:</p>
                            <p>60 x 0.25 = 15</p>
                            <p>So, L = 0.25 m = 25 cm</p>
                            <p>For 6 cm long spanner:</p>
                            <p>L = 6 cm = 0.06 m</p>
                            <p>F x 0.06 = 15</p>
                            <p>So, F = 250 N</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>(3) Can a small child play with a fat child on the see-saw? Explain how?</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: Yes, a fat child can play with a small child by adjusting the moment arm.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>(4) Two children are sitting on the see-saw, such that they cannot swing. What is the net torque in this situation?</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: When two children are sitting on the see-saw, such that they cannot swing. In this case, the net torque would be zero because the second condition of equilibrium is satisfied.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger>(5) A ladder leaning at a wall as shown in figure 4.31 is in equilibrium. How?</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: Ladder is in equilibrium because it satisfies the second condition of equilibrium.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6">
                        <AccordionTrigger>(6) The weight of the ladder in figure 4.31 produces an anticlockwise torque. The wall pushes the ladder at its top end thus produces a clockwise torque. Does the ladder satisfy the second condition for equilibrium?</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: Yes, it satisfies the second condition of equilibrium because both torques are equal in magnitude but opposite in direction.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-7">
                        <AccordionTrigger>(7) Does the speed of a ceiling fan go on increasing all the time?</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: The speed of a ceiling fan does not increase all the time. Upon acquiring maximum speed, it moves with uniform speed.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-8">
                        <AccordionTrigger>(8) Does the fan satisfy the second condition for equilibrium when rotating with uniform speed?</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: No, it does not satisfy the second condition of equilibrium because it is neither in the state of rest nor moving with uniform velocity.</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};

export default Page;
