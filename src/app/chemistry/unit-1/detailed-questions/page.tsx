// pages/detailed-questions.tsx

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
                Detailed Questions and Answers (8 marks each)
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Define chemistry and its interactions with other matter and energy.</AccordionTrigger>
                        <AccordionContent>
                            Chemistry is the scientific study of matter, its properties, composition, and its interactions with other matter and energy. It explores how substances combine, react, and transform, impacting various processes in nature and technology. For example, chemistry helps us understand reactions like combustion and photosynthesis, which involve energy changes and interactions between substances.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Describe the applications of inorganic chemistry and its importance in our daily lives.</AccordionTrigger>
                        <AccordionContent>
                            Inorganic chemistry deals with compounds that do not contain carbon-hydrogen bonds. Applications include:
                            - **Catalysts**: Used in industrial processes to speed up reactions.
                            - **Materials**: Development of ceramics, metals, and alloys used in construction and technology.
                            - **Health**: Production of essential drugs and vitamins.
                            - **Environmental Protection**: Removal of pollutants through chemical reactions.
                            Inorganic chemistry is crucial for creating and understanding materials and processes that are foundational to modern life.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>With the help of a few examples, highlight the relation between science, technology, and engineering.</AccordionTrigger>
                        <AccordionContent>
                            - **Example 1**: **Medical Imaging**. Science (understanding of radiation), technology (development of imaging devices like MRI machines), and engineering (design and maintenance of the equipment) work together to advance medical diagnostics.
                            - **Example 2**: **Automobile Safety**. Science (study of materials and impact forces), technology (development of safety features like airbags), and engineering (design and integration of these features into vehicles) enhance vehicle safety.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Evaluate the role of chemistry in environmental science.</AccordionTrigger>
                        <AccordionContent>
                            Chemistry plays a vital role in environmental science by:
                            - **Analyzing Pollutants**: Identifying and measuring pollutants in air, water, and soil.
                            - **Developing Solutions**: Creating materials and methods for pollution control and waste management.
                            - **Understanding Processes**: Studying chemical cycles and reactions in ecosystems.
                            - **Sustainable Practices**: Promoting green chemistry to minimize environmental impact.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>How does geochemistry help us to solve problems such as pollution and climate change?</AccordionTrigger>
                        <AccordionContent>
                            Geochemistry helps address environmental issues by:
                            - **Pollution Monitoring**: Tracking the distribution and effects of pollutants in the environment.
                            - **Climate Change Studies**: Understanding the chemical processes affecting greenhouse gases and climate systems.
                            - **Resource Management**: Assessing and managing natural resources to reduce environmental impact.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>How is organic chemistry applied in medicines, biochemistry, and industrial science?</AccordionTrigger>
                        <AccordionContent>
                            - **Medicines**: Organic chemistry is used to design and synthesize pharmaceuticals, understanding how they interact with biological systems.
                            - **Biochemistry**: Studies the structure and function of biomolecules like proteins and DNA, crucial for understanding living organisms.
                            - **Industrial Science**: Develops processes for producing polymers, dyes, and other chemicals used in various industries.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <section className="mt-8">
                    <h2 className="font-bold text-2xl text-center mb-4">Projects</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold text-xl">1. Draw a figure of a tree showing different branches of chemistry.</h3>
                            <p>Illustrate a tree with branches labeled for various chemistry fields such as Organic, Inorganic, Physical, Analytical, Biochemistry, Environmental, Medicinal, Polymer, Geochemistry, Nuclear, and Astrochemistry.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-xl">2. Composting Project</h3>
                            <p>Create an indoor composter to recycle materials. Track how quickly different materials decompose, comparing their rates to understand the composting process better.</p>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Page;
