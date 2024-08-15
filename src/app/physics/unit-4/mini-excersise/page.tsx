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
                        <AccordionTrigger>(1) Right-Angled Triangle</AccordionTrigger>
                        <AccordionContent>
                            <p>In a right-angled triangle, the length of the base is 4 cm, and its perpendicular is 3 cm. Find:</p>
                            <ul className="list-disc list-inside ml-4">
                                <li><strong>(i) Length of Hypotenuse:</strong> We know that (Hypotenuse)² = (Base)² + (Perpendicular)². So, Hypotenuse = √(4² + 3²) = √(16 + 9) = √25 = 5 cm</li>
                                <li><strong>(ii) sin θ:</strong> sin θ = Perpendicular / Hypotenuse = 3/5 = 0.6</li>
                                <li><strong>(iii) cos θ:</strong> cos θ = Base / Hypotenuse = 4/5 = 0.8</li>
                                <li><strong>(iv) tan θ:</strong> tan θ = Perpendicular / Base = 3/4 = 0.75</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>(2) Force Applied to Loosen a Nut</AccordionTrigger>
                        <AccordionContent>
                            <p>A force of 150 N can loosen a nut when applied at the end of a spanner 10 cm long. Find:</p>
                            <ul className="list-disc list-inside ml-4">
                                <li><strong>(i) Length of Spanner:</strong> To loosen the same nut with 60 N force, Length of Spanner = 15 Nm / 60 N = 0.25 m = 25 cm</li>
                                <li><strong>(ii) Required Force:</strong> To loosen it with a 6 cm long spanner, Required Force = 15 Nm / 0.06 m = 250 N</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>(3) Can a Small Child Play with a Fat Child on a See-Saw?</AccordionTrigger>
                        <AccordionContent>
                            <p>Yes, a fat child can play with a small child by adjusting the moment arm.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>(4) Net Torque on a See-Saw</AccordionTrigger>
                        <AccordionContent>
                            <p>When two children are sitting on the see-saw such that they cannot swing, the net torque would be zero because the second condition of equilibrium is satisfied.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger>(5) Ladder in Equilibrium</AccordionTrigger>
                        <AccordionContent>
                            <p>A ladder leaning against a wall is in equilibrium because it satisfies the second condition of equilibrium. The weight of the ladder produces an anticlockwise torque, and the wall pushes the ladder at its top end, producing a clockwise torque. These torques are equal in magnitude but opposite in direction.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6">
                        <AccordionTrigger>(6) Speed of a Ceiling Fan</AccordionTrigger>
                        <AccordionContent>
                            <p>The speed of a ceiling fan does not increase all the time. After reaching maximum speed, it moves with uniform speed.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-7">
                        <AccordionTrigger>(7) Ceiling Fan and Second Condition of Equilibrium</AccordionTrigger>
                        <AccordionContent>
                            <p>No, a ceiling fan does not satisfy the second condition of equilibrium when rotating at uniform speed because it is neither in a state of rest nor moving with uniform velocity.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-8">
                        <AccordionTrigger>(8) Ladder and Second Condition of Equilibrium</AccordionTrigger>
                        <AccordionContent>
                            <p>The ladder satisfies the second condition of equilibrium because both torques produced by the weight of the ladder and the wall&apos;s push are equal in magnitude and opposite in direction.</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};

export default Page;
