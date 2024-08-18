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
            className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6 bg-gradient-blue text-white"
        >
            <h1 className="font-bold text-3xl text-center mb-4">
                Brief Questions and Answers (3 marks each)
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    {/* Question 1 */}
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="bg-primary-bg text-white font-semibold rounded-md p-2 mb-1">
                            1. Can two magnetic field lines intersect each other? Justify your answer.
                        </AccordionTrigger>
                        <AccordionContent className="bg-white text-black rounded-md p-4 shadow-custom">
                            No, two magnetic field lines cannot intersect each other. If they did, it would imply that there are two different directions of the magnetic field at that point, which is impossible.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 2 */}
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="bg-primary-bg text-white font-semibold rounded-md p-2 mb-1">
                            2. A freely suspended magnet always points along north-south direction. Why?
                        </AccordionTrigger>
                        <AccordionContent className="bg-white text-black rounded-md p-4 shadow-custom">
                            A freely suspended magnet aligns itself along the Earth&apos;s magnetic field, which has a north-south direction. This alignment occurs because the magnet&apos;s poles align with the Earth&apos;s magnetic poles.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 3 */}
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="bg-primary-bg text-white font-semibold rounded-md p-2 mb-1">
                            3. What is the neutral zone or field-free region of the magnetic field?
                        </AccordionTrigger>
                        <AccordionContent className="bg-white text-black rounded-md p-4 shadow-custom">
                            The neutral zone or field-free region is a space where the magnetic field is very weak or nearly zero. This region is often found between the poles of a magnet or in the vicinity of magnetic shielding.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 4 */}
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="bg-primary-bg text-white font-semibold rounded-md p-2 mb-1">
                            4. Is there any material which does not have any magnetic behavior? Justify your answer.
                        </AccordionTrigger>
                        <AccordionContent className="bg-white text-black rounded-md p-4 shadow-custom">
                            Yes, there are materials that do not exhibit magnetic behavior under normal conditions, such as diamagnetic materials. These materials have a very weak and negative response to external magnetic fields.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 5 */}
                    <AccordionItem value="item-5">
                        <AccordionTrigger className="bg-primary-bg text-white font-semibold rounded-md p-2 mb-1">
                            5. A proton is also a charged particle and spins like an electron. Why is its effect neglected in the study of magnetism?
                        </AccordionTrigger>
                        <AccordionContent className="bg-white text-black rounded-md p-4 shadow-custom">
                            The effect of a proton is often neglected because its magnetic moment is much smaller compared to electrons, and its contribution to macroscopic magnetic phenomena is relatively insignificant.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 6 */}
                    <AccordionItem value="item-6">
                        <AccordionTrigger className="bg-primary-bg text-white font-semibold rounded-md p-2 mb-1">
                            6. What is the geomagnetic reversal phenomenon? Explain.
                        </AccordionTrigger>
                        <AccordionContent className="bg-white text-black rounded-md p-4 shadow-custom">
                            Geomagnetic reversal is the phenomenon where the Earth&apos;s magnetic field reverses its polarity. During a reversal, the magnetic north and south poles switch places, which occurs over long geological timescales.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 7 */}
                    <AccordionItem value="item-7">
                        <AccordionTrigger className="bg-primary-bg text-white font-semibold rounded-md p-2 mb-1">
                            7. Why does the Earth spin about its geographical axis instead of its magnetic axis? Explain.
                        </AccordionTrigger>
                        <AccordionContent className="bg-white text-black rounded-md p-4 shadow-custom">
                            The Earth spins about its geographical axis because this axis is aligned with the planet&apos;s rotation and is related to its angular momentum. The magnetic axis is not aligned with the rotational axis and changes over time.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 8 */}
                    <AccordionItem value="item-8">
                        <AccordionTrigger className="bg-primary-bg text-white font-semibold rounded-md p-2 mb-1">
                            8. Why are the Earth&apos;s geographical and magnetic axes not coincident? Explain.
                        </AccordionTrigger>
                        <AccordionContent className="bg-white text-black rounded-md p-4 shadow-custom">
                            The Earth&apos;s geographical and magnetic axes are not coincident due to the complex nature of Earth&apos;s core dynamics and the movement of molten iron, which generates the magnetic field but is not perfectly aligned with the rotation axis.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 9 */}
                    <AccordionItem value="item-9">
                        <AccordionTrigger className="bg-primary-bg text-white font-semibold rounded-md p-2 mb-1">
                            9. What is the difference between paramagnetic and ferromagnetic materials?
                        </AccordionTrigger>
                        <AccordionContent className="bg-white text-black rounded-md p-4 shadow-custom">
                            Paramagnetic materials have a weak and temporary magnetic response to external fields, while ferromagnetic materials have a strong and permanent magnetic response due to their aligned magnetic domains.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 10 */}
                    <AccordionItem value="item-10">
                        <AccordionTrigger className="bg-primary-bg text-white font-semibold rounded-md p-2 mb-1">
                            10. At what factors does the strength of the magnetic field of an electromagnet depend?
                        </AccordionTrigger>
                        <AccordionContent className="bg-white text-black rounded-md p-4 shadow-custom">
                            The strength of the magnetic field of an electromagnet depends on the number of coils (turns) of wire, the current flowing through the wire, and the core material used in the electromagnet.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 11 */}
                    <AccordionItem value="item-11">
                        <AccordionTrigger className="bg-primary-bg text-white font-semibold rounded-md p-2 mb-1">
                            11. Draw magnetic field lines of two solenoids placed near each other i) facing same poles to each other ii) facing opposite poles to each other.
                        </AccordionTrigger>
                        <AccordionContent className="bg-white text-black rounded-md p-4 shadow-custom">
                            i) When facing the same poles: The field lines will repel and form a pattern with lines spreading outward and avoiding each other.
                            <br />
                            ii) When facing opposite poles: The field lines will attract and form a continuous loop connecting the opposite poles.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};

export default Page;
