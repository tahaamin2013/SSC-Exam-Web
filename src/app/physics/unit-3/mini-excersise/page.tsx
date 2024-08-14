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
                Mini Exercise
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    {/* Question 1 */}
                    <AccordionItem value="item-1">
                        <AccordionTrigger>1. How much force you need to prevent the book from falling?</AccordionTrigger>
                        <AccordionContent>
                            Force equal to the weight of the book is needed to prevent the book from falling.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 2 */}
                    <AccordionItem value="item-2">
                        <AccordionTrigger>2. Which is action?</AccordionTrigger>
                        <AccordionContent>
                            Weight of the book is action in this case.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 3 */}
                    <AccordionItem value="item-3">
                        <AccordionTrigger>3. Is there any reaction? If yes, then what is its direction?</AccordionTrigger>
                        <AccordionContent>
                            Yes there is a reaction offered by hand. The direction of reaction is opposite to the weight.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 4 */}
                    <AccordionItem value="item-4">
                        <AccordionTrigger>4. Which shoe offer less friction?</AccordionTrigger>
                        <AccordionContent>
                            Shoe with flat sole will offer less friction.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 5 */}
                    <AccordionItem value="item-5">
                        <AccordionTrigger>5. Which shoe is better for walking on dry track?</AccordionTrigger>
                        <AccordionContent>
                            On dry track, shoe with flat sole is better for walking.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 6 */}
                    <AccordionItem value="item-6">
                        <AccordionTrigger>6. Which shoe is better for jogging?</AccordionTrigger>
                        <AccordionContent>
                            Shoe which has not flat sole is better for jogging.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 7 */}
                    <AccordionItem value="item-7">
                        <AccordionTrigger>7. Which sole will wear out early?</AccordionTrigger>
                        <AccordionContent>
                            Shoe with flat sole will wear out early.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 8 */}
                    <AccordionItem value="item-8">
                        <AccordionTrigger>8. Why is it easy to roll a cylindrical eraser on a paper sheet than to slide it?</AccordionTrigger>
                        <AccordionContent>
                            It is easy to roll a cylinder eraser on a paper sheet than to slide it because rolling friction is less than sliding friction.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 9 */}
                    <AccordionItem value="item-9">
                        <AccordionTrigger>9. Do we roll or slide the eraser to remove the pencil work from our notebook?</AccordionTrigger>
                        <AccordionContent>
                            We slide the eraser to remove the pencil work from our notebook because we need more friction to remove the work.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 10 */}
                    <AccordionItem value="item-10">
                        <AccordionTrigger>10. In which case do you need smaller force and why?</AccordionTrigger>
                        <AccordionContent>
                            (i) Rolling: In case of rolling friction we need smaller force because there is contact with earth on only a single point.<br />
                            (ii) Sliding: In case of sliding friction we need greater force because all the body is in contact with the earth.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 11 */}
                    <AccordionItem value="item-11">
                        <AccordionTrigger>11. In which case is it easy for the tire to roll over?</AccordionTrigger>
                        <AccordionContent>
                            (i) Rough ground: In case of rough ground it is difficult to roll over the tire because rough surface offer more friction.<br />
                            (ii) Smooth ground: In case of smooth ground it is easier to roll over the tire because smooth surface offer less friction.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};

export default Page;
