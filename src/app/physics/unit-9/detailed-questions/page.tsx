import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Page = () => {
    return (
        <section
            id="FAQ"
            className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6"
        >
            <h1 className="font-bold text-3xl text-center mb-4">
                Detailed Questions and Answers on Physics (8 marks each)
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            1. Discuss the importance of physics in our daily life.
                        </AccordionTrigger>
                        <AccordionContent>
                            Physics plays a crucial role in our daily lives. It helps us understand the natural world, from the motion of vehicles to the way electronic devices work. Applications of physics are found in everyday activities such as cooking (heat transfer), driving a car (mechanics), and even using a smartphone (electromagnetism). Understanding the principles of physics enables us to develop new technologies and solve practical problems.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            2. Briefly discuss the importance of physics in other disciplines of science.
                        </AccordionTrigger>
                        <AccordionContent>
                            Physics is fundamental to many other disciplines of science. For example, in chemistry, physics principles explain atomic structure and chemical reactions. In biology, physics helps in understanding biophysical processes like diffusion and osmosis. In earth science, physics explains phenomena such as plate tectonics and the behavior of the atmosphere. Without physics, advancements in these sciences would be limited.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            3. Differentiate the terms &apos;science&apos;, &apos;technology&apos;, and &apos;engineering&apos; with suitable examples.
                        </AccordionTrigger>
                        <AccordionContent>
                            Science is the pursuit of knowledge about the natural world through systematic observation and experimentation. For example, studying the laws of motion in physics is science. Technology is the application of scientific knowledge for practical purposes, such as the development of smartphones or computers. Engineering is the process of designing and building systems or structures, often using scientific and technological knowledge, such as constructing bridges or developing software systems.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            4. Explain the terms, hypothesis, theory, and law with examples.
                        </AccordionTrigger> 
                        <AccordionContent>
                            A hypothesis is a proposed explanation for a phenomenon, which can be tested through experiments. For example, &quot;Increasing the temperature of a gas will increase its pressure&quot; is a hypothesis. A theory is a well-substantiated explanation of some aspect of the natural world, based on a body of evidence; for example, the theory of relativity. A law is a statement based on repeated experimental observations that describe some aspect of the world, like Newton&apos;s law of universal gravitation.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}

export default Page;
