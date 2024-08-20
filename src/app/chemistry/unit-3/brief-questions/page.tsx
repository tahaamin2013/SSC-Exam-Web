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
                Brief Questions and Answers on Electronic Configuration
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Distinguish between shell and sub-shell</AccordionTrigger>
                        <AccordionContent>
                            A shell is an energy level around the nucleus where electrons are found, described by the principal quantum number <i>n</i>. A sub-shell is a division of a shell, characterized by the type of orbital (s, p, d, f) and has different energy levels within a shell.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Why is an atom electrically neutral?</AccordionTrigger>
                        <AccordionContent>
                            An atom is electrically neutral because it has an equal number of protons and electrons, which balance each other&apos;s charges.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>How many sub-shells are there in the N shell?</AccordionTrigger>
                        <AccordionContent>
                            The N shell has four sub-shells: 4s, 4p, 4d, and 4f.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Give notation for sub-shells of the M shell</AccordionTrigger>
                        <AccordionContent>
                            The sub-shells of the M shell are 3s, 3p, and 3d.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>List the sub-shells of the M Shell in order of increasing energy</AccordionTrigger>
                        <AccordionContent>
                            The sub-shells of the M shell in increasing order of energy are 3s, 3p, and 3d.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>Can you identify an atom without knowing the number of neutrons in it?</AccordionTrigger>
                        <AccordionContent>
                            Yes, you can identify an atom by knowing its atomic number, which indicates the number of protons and thus the element. The number of neutrons does not affect the element&apos;s identity.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}

export default Page;
