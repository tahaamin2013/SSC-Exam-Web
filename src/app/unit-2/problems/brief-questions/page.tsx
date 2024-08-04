import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const Page = () => {
    return (
        <section id="FAQ" className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6">
            <h1 className="font-bold text-3xl text-center mb-4">
                Brief Questions and Answers on Computer History (3 marks each)
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What was the Pascaline, and who invented it?</AccordionTrigger>
                        <AccordionContent>
                            The Pascaline was invented in 1642 by Blaise Pascal, a French mathematician. It is considered the first mechanical and automated calculator, consisting of a wooden box with gears and wheels.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>Describe the main characteristics of First Generation Computers.</AccordionTrigger>
                        <AccordionContent>
                            First Generation Computers (1940-1956) were characterized by vacuum tube technology, slow processing speed, limited memory capacity, massive size (occupying entire rooms), high cost, unreliability, significant power consumption, and heat generation. They used punched cards for input and electric typewriters for output, and were programmed using machine language.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>What was the Analytical Engine, and who invented it?</AccordionTrigger>
                        <AccordionContent>
                            The Analytical Engine was invented by Charles Babbage in 1830. It was a mechanical computer that took input from punch cards and was capable of solving mathematical problems and storing data in memory.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>How did Second Generation Computers differ from First Generation Computers?</AccordionTrigger>
                        <AccordionContent>
                            Second Generation Computers (1956-1963) differed from First Generation Computers by using transistors instead of vacuum tubes. This led to enhanced efficiency, smaller size, improved speed and memory capacity, increased reliability, and cost-effectiveness. They also introduced the use of assembly language and high-level programming languages like FORTRAN and COBOL.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger>What was the key innovation of Fourth Generation Computers?</AccordionTrigger>
                        <AccordionContent>
                            The key innovation of Fourth Generation Computers (1971-Present) was the development of the microprocessor, capable of handling all processing tasks. This led to exceptional speed, large storage capacity, small size, high reliability, low power consumption, and affordability.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6">
                        <AccordionTrigger>Describe the main focus of Fifth Generation Computers.</AccordionTrigger>
                        <AccordionContent>
                            Fifth Generation Computers focus on Artificial Intelligence (AI) technologies. They aim to create machines with the capability to learn, think, innovate, reason, and solve problems. They incorporate advanced parallel processing, Natural Language Processing, and Expert Systems to replicate human-like decision-making abilities.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-7">
                        <AccordionTrigger>What was the Difference Engine, and who created it?</AccordionTrigger>
                        <AccordionContent>
                            The Difference Engine was created by Charles Babbage in the early 1820s. It was a mechanical computer capable of basic computations and was designed as a steam-powered calculating machine for solving numerical problems.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-8">
                        <AccordionTrigger>What were the main characteristics of Third Generation Computers?</AccordionTrigger>
                        <AccordionContent>
                            Third Generation Computers (1963-1971) were characterized by the use of integrated circuits (ICs). This led to enhanced speed and memory, improved energy efficiency, size reduction, and increased reliability. They introduced interaction via keyboard and monitor and had the capability to run multiple application programs concurrently.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-9">
                        <AccordionTrigger>Who invented the Tabulating Machine, and what was its significance?</AccordionTrigger>
                        <AccordionContent>
                            The Tabulating Machine was invented by Herman Hollerith in 1890. It was a punch card-based mechanical calculator used for computing statistics and recording data. Its significance lies in the fact that Hollerith&apos;s company eventually became IBM in 1924, a major player in the computer industry.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-10">
                        <AccordionTrigger>What was the Mark 1, and what were its capabilities?</AccordionTrigger>
                        <AccordionContent>
                            The Mark 1 was invented by Howard Aiken in 1944. It was a digital computer that could add three numbers with eight digits in one second. It printed results on punched cards or an electric typewriter. The Mark 1 was massive, measuring 50 feet long, 8 feet high, and weighing about 5 tons.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-11">
                        <AccordionTrigger>What were Napier&apos;s Bones, and how were they used?</AccordionTrigger>
                        <AccordionContent>
                            Napier&apos;s Bones were developed by John Napier. They were a manually operated calculating device using 9 separate strips (bones) marked with numerals. Napier&apos;s Bones were used to multiply and divide and were the first machine to calculate using the decimal point system.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-12">
                        <AccordionTrigger>What advancements did Fourth Generation Computers bring in terms of user interaction?</AccordionTrigger>
                        <AccordionContent>
                            Fourth Generation Computers introduced operating systems with Graphical User Interfaces (GUIs), support for multimedia software and modern programming languages, and compatibility with portable and wireless input/output devices. This greatly enhanced user interaction and expanded the range of applications for computers.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-13">
                        <AccordionTrigger>What was the Pascaline, and who invented it?</AccordionTrigger>
                        <AccordionContent>
                            The Pascaline was invented by Blaise Pascal, a French mathematician, in 1642. It is considered the first mechanical and automated calculator, consisting of a wooden box with gears and wheels.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-14">
                        <AccordionTrigger>Describe two key characteristics of First Generation Computers (1940-1956).</AccordionTrigger>
                        <AccordionContent>
                            Two key characteristics of First Generation Computers (1940-1956) were:
                            1. They used vacuum tube technology.
                            2. They were massive in size, occupying entire rooms.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-15">
                        <AccordionTrigger>What major technological advancement marked the beginning of Second Generation Computers?</AccordionTrigger>
                        <AccordionContent>
                            The major technological advancement that marked the beginning of Second Generation Computers (1956-1963) was the transition from vacuum tubes to transistors. This led to enhanced efficiency, smaller size, and improved speed and memory capacity.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-16">
                        <AccordionTrigger>What is the key innovation of Fourth Generation Computers, and how did it impact computer design?</AccordionTrigger>
                        <AccordionContent>
                            The key innovation of Fourth Generation Computers is the microprocessor, capable of handling all processing tasks. This led to exceptional speed, large storage capacity, small size, high reliability, low power consumption, and affordability in computer design.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}

export default Page