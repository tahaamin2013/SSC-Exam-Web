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
                Mini Excersise and Answers (3 marks each)
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    {/* Question 1 */}
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            The rope is parallel to the road.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                A crate is moved by pulling the rope attached to it. It moves 10m on a straight horizontal road by a force of 100 N. How much work will be done if:
                            </p>
                            <p>
                                As we know that W = F * S * cos(θ). If the rope is parallel to the road then θ = 0°, so:
                            </p>
                            <p>
                                W = 100 N * 10 m * cos(0°) = 1000 J (as cos(0°) = 1)
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 2 */}
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            The rope is making an angle of 30° with the road.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                A crate is moved by pulling the rope attached to it. It moves 10m on a straight horizontal road by a force of 100 N. How much work will be done if:
                            </p>
                            <p>
                                As we know that W = F * S * cos(θ). If the rope makes an angle of 30° with the road, then θ = 30°, so:
                            </p>
                            <p>
                                W = 100 N * 10 m * cos(30°) = 866 J (as cos(30°) = 0.866)
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};

export default Page;
