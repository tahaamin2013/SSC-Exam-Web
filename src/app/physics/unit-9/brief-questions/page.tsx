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
                Brief Questions and Answers for 9th Grade Physics (3 marks each)
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            3. Why do scientists develop a hypothesis before conducting research?
                        </AccordionTrigger>
                        <AccordionContent>
                            Scientists develop a hypothesis before conducting research to predict outcomes and define the parameters of the research
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            4. The Branch of Physics that is most important when studying how glasses help people see:
                        </AccordionTrigger>
                        <AccordionContent>
                            The branch of physics most important for studying how glasses help people see is Optics.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            5. When studying how air conditioners cool your house, then it is:
                        </AccordionTrigger>
                        <AccordionContent>
                            When studying how air conditioners cool your house, the relevant branch of physics is Thermodynamics.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            6. The branch of Physics that deals with particles such as neutrons and protons:
                        </AccordionTrigger>
                        <AccordionContent>
                            The branch of physics that deals with particles such as neutrons and protons is Nuclear Physics.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            7. Which branch of science plays an important role in engineering?
                        </AccordionTrigger>
                        <AccordionContent>
                            The branch of science that plays an important role in engineering is Physics.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6">
                        <AccordionTrigger>
                            8. Physics is one of the branches of:
                        </AccordionTrigger>
                        <AccordionContent>
                            Physics is one of the branches of Physical sciences.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}

export default Page
