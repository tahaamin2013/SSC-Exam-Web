// pages/brief-questions.tsx

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
                Brief Questions and Answers (3 marks each)
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>How does chemistry help a doctor to know about the chemical nature of medicine?</AccordionTrigger>
                        <AccordionContent>
                            Chemistry helps doctors understand the chemical composition and properties of medicines, which is crucial for determining their effects, dosages, interactions, and potential side effects.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>In what ways does technological innovation help to understand the development of new materials?</AccordionTrigger>
                        <AccordionContent>
                            Technological innovation aids in the development of new materials by providing advanced tools and techniques for analysis, synthesis, and testing, thus enabling scientists to explore and create materials with desired properties.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Differentiated between geochemistry and astrochemistry.</AccordionTrigger>
                        <AccordionContent>
                            Geochemistry focuses on the chemical composition and processes of the Earth&apos;s crust, while astrochemistry studies chemical processes and reactions in astronomical environments, such as stars and interstellar space.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>With the help of an example, correlate the use of science, technology, and engineering.</AccordionTrigger>
                        <AccordionContent>
                            Example: Solar Energy. Science provides the understanding of photovoltaic cells, technology develops solar panels based on this knowledge, and engineering designs and implements solar power systems on a large scale.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>With the help of a Venn diagram, compare and contrast organic and inorganic chemistry.</AccordionTrigger>
                        <AccordionContent>
                            Organic Chemistry studies carbon-containing compounds (excluding carbonates, oxides), while Inorganic Chemistry deals with elements and compounds excluding organic ones. Both fields overlap in areas like coordination chemistry, but they focus on different types of compounds and reactions.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>What are the uses of nuclear chemistry?</AccordionTrigger>
                        <AccordionContent>
                            Nuclear chemistry is used in medical applications (e.g., radiation therapy), energy production (nuclear reactors), environmental monitoring (tracing radioactive elements), and scientific research (studying nuclear reactions).
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};

export default Page;
