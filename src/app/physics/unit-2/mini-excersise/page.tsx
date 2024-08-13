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
                Mini Excersise
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    {/* Question 1 */}
                    <AccordionItem value="item-1">
                        <AccordionTrigger>1. When is a body said to be at rest?</AccordionTrigger>
                        <AccordionContent>
                            When a body does not change its position with respect to its surroundings, then it is said to be in the state of rest.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 2 */}
                    <AccordionItem value="item-2">
                        <AccordionTrigger>2. Give an example of a body that is at rest and is in motion at the same time.</AccordionTrigger>
                        <AccordionContent>
                            If a person is sitting in a car, he will be in the state of rest with respect to the other person sitting in the car and he will be in the state of motion with respect to the person standing on the roadside at the same time.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 3 */}
                    <AccordionItem value="item-3">
                        <AccordionTrigger>3. Mention the type of motion in each of the following:</AccordionTrigger>
                        <AccordionContent>
                            <ul>
                                <li>(i) A ball moving vertically upward: Linear motion (Translatory motion)</li>
                                <li>(ii) A child moving down a slide: Linear motion (Translatory motion)</li>
                                <li>(iii) Movement of a player in a football ground: Random motion (Translatory motion)</li>
                                <li>(iv) The flight of a butterfly: Random motion (Translatory motion)</li>
                                <li>(v) An athlete running in a circular track: Circular motion (Translatory motion)</li>
                                <li>(vi) The motion of a wheel: Rotatory motion</li>
                                <li>(vii) The motion of a cradle: Vibratory motion</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};

export default Page;
