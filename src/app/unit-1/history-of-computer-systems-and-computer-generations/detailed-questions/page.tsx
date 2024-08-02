import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const Page = () => {
    return (
        <section id="FAQ" className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6">
            <h1 className="font-bold text-3xl text-center mb-4">Long Answer Questions on Computer History (8 marks each)</h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Describe the evolution of computer generations from the first generation to the fourth generation, highlighting the key technological developments and their impact on computing.</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                <strong>First Generation (1940s-1950s):</strong> Computers used vacuum tubes for circuitry and magnetic drums for memory. They were large, expensive, and prone to overheating. Examples include ENIAC and UNIVAC. They marked the beginning of electronic computing.
                            </p>
                            <p>
                                <strong>Second Generation (1950s-1960s):</strong> Transistors replaced vacuum tubes, making computers smaller, faster, and more reliable. Magnetic core memory was introduced. Notable examples include the IBM 1401 and the PDP-1. This generation paved the way for more accessible computing.
                            </p>
                            <p>
                                <strong>Third Generation (1960s-1970s):</strong> Integrated circuits (ICs) replaced transistors, further reducing size and cost while increasing speed and reliability. Examples include the IBM System/360 and the PDP-8. This generation introduced multiprogramming and time-sharing.
                            </p>
                            <p>
                                <strong>Fourth Generation (1970s-Present):</strong> Microprocessors, which integrate thousands of ICs on a single chip, became the standard. Personal computers and workstations emerged. Examples include the Intel 4004 and the Apple Macintosh. This generation has led to the widespread use of personal and networked computers.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>                                Compare and contrast the features and uses of Napier’s Bones and the Analytical Engine. Discuss how these early computing devices contributed to the development of modern computing.
                        </AccordionTrigger>
                        <AccordionContent>

                            <p>
                                <strong>Napier’s Bones</strong> and the <strong>Analytical Engine</strong> represent different stages in the evolution of computing devices.
                                <br />
                                <strong>Napier’s Bones</strong>: Developed by John Napier, this device was a manually operated calculating tool using nine separate strips (bones) marked with numerals. It was primarily used for multiplication and division, and it was the first machine to use the decimal point system. It represented a significant step in simplifying arithmetic operations.
                                <br />
                                <strong>Analytical Engine</strong>: Designed by Charles Babbage, this mechanical computer was far more advanced. It could take input from punch cards, perform mathematical computations, and store data in memory. It was a precursor to modern computers, demonstrating concepts like programmability and data storage.
                                <br />
                                <strong>Comparison</strong>: Napier’s Bones were limited to specific arithmetic functions and did not have storage capabilities, whereas the Analytical Engine was a more comprehensive computing device with programmable features and memory storage.
                                <br />
                                <strong>Contribution to Modern Computing</strong>: Napier’s Bones introduced the concept of using a decimal system for calculations, while the Analytical Engine laid the groundwork for programmable computing, influencing future developments such as computers&apos; ability to store and process data.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}

export default Page
