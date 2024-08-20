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
                Long Questions and Answers (8 mark each)
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            3. The electronic configurations listed are incorrect. Explain what mistake have been made in each and write correct electronic configurations.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                (a) x = 1s² 2s² 2p⁶ 3s² 3p¹ - Mistake: The 3p orbital should only have 6 electrons (2s² 2p⁶ 3s² 3p¹ is correct for Aluminium, not for the configuration given).
                                Correct configuration: 1s² 2s² 2p⁶ 3s² 3p¹ for Aluminium.
                            </p>
                            <p>
                                (b) y = 1s² 2s² 2p⁶ - Mistake: The configuration seems to be incomplete or missing electrons from higher orbitals.
                                Correct configuration for Argon: 1s² 2s² 2p⁶.
                            </p>
                            <p>
                                (c) z = 1s² 2s² 2p⁶ 3s² - Mistake: This configuration is missing 3p electrons, which should be included.
                                Correct configuration for Silicon: 1s² 2s² 2p⁶ 3s² 3p².
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            5. Which orbital in each of the following pairs is lower in energy?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                (a) 2s, 2p - The 2s orbital is lower in energy compared to 2p.
                            </p>
                            <p>
                                (b) 3p, 2p - The 2p orbital is lower in energy compared to 3p.
                            </p>
                            <p>
                                (c) 3s, 4s - The 3s orbital is lower in energy compared to 4s.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            7. Draw Bohr&apos;s Model for the following atoms indicating the location for electron, protons and neutrons:
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                (a) Potassium (Atomic No 19, Mass No. 39): Potassium has 19 protons, 19 electrons, and 20 neutrons. The Bohr model will have 3 shells with 2, 8, and 9 electrons respectively.
                            </p>
                            <p>
                                (b) Silicon (Atomic No. 14 Mass No. 28): Silicon has 14 protons, 14 electrons, and 14 neutrons. The Bohr model will have 3 shells with 2, 8, and 4 electrons respectively.
                            </p>
                            <p>
                                (c) Argon (Atomic No. 18 Mass No. 39): Argon has 18 protons, 18 electrons, and 21 neutrons. The Bohr model will have 3 shells with 2, 8, and 8 electrons respectively.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            9. Write electronic configuration for the following elements:
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                (a) Si (Silicon): 1s² 2s² 2p⁶ 3s² 3p²
                            </p>
                            <p>
                                (b) Mg (Magnesium): 1s² 2s² 2p⁶ 3s²
                            </p>
                            <p>
                                (c) Al (Aluminium): 1s² 2s² 2p⁶ 3s² 3p¹
                            </p>
                            <p>
                                (d) Ar (Argon): 1s² 2s² 2p⁶ 3s² 3p⁶
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            11. State the importance and uses of isotopes in various fields of life.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Isotopes have several important uses in various fields:
                                - **Medicine**: Used in diagnostic imaging (e.g., iodine-131 for thyroid imaging) and cancer treatment (e.g., cobalt-60).
                                - **Industry**: Utilized in radiography for detecting structural faults.
                                - **Research**: Employed in studies of biochemical processes and tracing mechanisms.
                                - **Archaeology**: Used in carbon dating to determine the age of artifacts.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>
                            12. The atomic number of an element is 23 and its mass number is 56.
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                (a) The number of protons and electrons in this element is 23 each.
                            </p>
                            <p>
                                (b) The number of neutrons is given by the mass number minus the atomic number, so 56 - 23 = 33 neutrons.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger>
                            13. The atomic symbol of aluminium is written as Al. What information do you get from it?
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>
                                The atomic symbol &quot;Al&quot; represents the element Aluminium. The symbol tells us the following:
                                - **Element Name**: Aluminium.
                                - **Atomic Number**: 13 (the number of protons in the nucleus).
                                - **Mass Number**: Not directly provided by the symbol, but typically the most common isotope has a mass number of 27.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}

export default Page;
