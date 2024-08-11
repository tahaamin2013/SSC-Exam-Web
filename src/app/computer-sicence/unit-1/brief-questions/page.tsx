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
                Brief Questions and Answers on Computer History (3 marks each)
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Describe Napier&apos;s Bone and Slide Rule</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                <strong>Napier&apos;s Bones:</strong> Invented by John Napier, these were rods used for multiplication and division. They had multiplication tables engraved on them, which made complex calculations quicker.
                            </p>
                            <p>
                                <strong>Slide Rule:</strong> A mechanical analog computer used for multiplication, division, and other mathematical functions. It consists of a fixed ruler and a sliding scale, with calculations done by aligning the scales.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>Compare 1st and 3rd Generation Computers</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                <strong>1st Generation Computers (1940s-1950s):</strong> Utilized vacuum tubes for circuitry and magnetic drums for memory. They were large, expensive, and generated significant heat. Notable examples include ENIAC and UNIVAC.
                            </p>
                            <p>
                                <strong>3rd Generation Computers (1960s-1970s):</strong> Employed integrated circuits (ICs), making them smaller, faster, and more reliable. They featured enhanced memory and processing capabilities. Examples include the IBM 360 and PDP-8.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>Differentiation between Analog and Digital Computers</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                <strong>Analog Computers:</strong> Use continuous values to represent data, often used for measuring physical quantities. Examples are oscilloscopes and analog meters.
                            </p>
                            <p>
                                <strong>Digital Computers:</strong> Represent data using discrete values (binary), suitable for computing and general-purpose tasks. Examples include PCs and laptops.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>Ahmed&apos;s CRT to LCD Monitor Replacement Justification</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                LCD monitors provide better resolution, consume less power, and are more compact than CRT monitors. They reduce eye strain and offer clearer images, benefiting Ahmed&apos;s studies and general computer use.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger>Impact of Removing Storage Devices from a Computer</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Removing storage devices (like hard drives or SSDs) makes the computer unable to store or access data. This results in the loss of operating system, applications, and user files, rendering the computer non-functional.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6">
                        <AccordionTrigger>Differentiation between Systems Software and Application Software</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                <strong>Systems Software:</strong> Includes operating systems and utility programs that manage hardware and provide a platform for running application software. Examples are Windows, macOS, and Linux.
                            </p>
                            <p>
                                <strong>Application Software:</strong> Programs designed for specific user tasks, such as word processing or data analysis. Examples include Microsoft Word, Photoshop, and Excel.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-7">
                        <AccordionTrigger>How a Student Can Use a Computer to Improve Academic Performance</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                A student can use a computer to access educational resources, conduct research, organize study materials, practice skills with educational software, and collaborate with peers on academic projects.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-8">
                        <AccordionTrigger>Three Uses of Computers in a School Library</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Computers in a school library can be used for cataloging and managing book inventories, providing access to digital resources and databases, and assisting students and staff with research and information retrieval.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-9">
                        <AccordionTrigger>Household Appliances with Microprocessors</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Examples of household appliances using microprocessors include microwave ovens, washing machines, and smart refrigerators.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-10">
                        <AccordionTrigger>Tasks Performed by an Operating System</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                An operating system manages hardware resources, provides a user interface, and executes applications. It handles file management, memory allocation, process scheduling, and device management.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-11">
                        <AccordionTrigger>Function and Significance of Napier&apos;s Bone in Early Computing</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Napier&apos;s Bones were a tool for simplifying multiplication and division, which was a major advancement in early computing technology by allowing faster and more efficient calculations.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-12">
                        <AccordionTrigger>Difference Between Charles Babbage&apos;s Difference Engine and Analytical Engine</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                The Difference Engine was designed for polynomial calculations, while the Analytical Engine was a more advanced, general-purpose mechanical computer with features like conditional branching and loops.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-13">
                        <AccordionTrigger>Primary Goal of Fifth-Generation Computers</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                The primary goal of fifth-generation computers is to achieve artificial intelligence (AI) capabilities, enabling computers to perform tasks requiring human-like reasoning and learning.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-14">
                        <AccordionTrigger>Three Types of Memory on the Motherboard in Von Neumann Architecture</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                The three types of memory are:
                                <ul>
                                    <li><strong>RAM (Random Access Memory):</strong> Volatile memory for temporary data storage.</li>
                                    <li><strong>ROM (Read-Only Memory):</strong> Non-volatile memory for storing firmware and system instructions.</li>
                                    <li><strong>Cache Memory:</strong> High-speed volatile memory to speed up access to frequently used data and instructions.</li>
                                </ul>
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-15">
                        <AccordionTrigger>Differentiation Between Volatile and Non-Volatile Memory</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                <strong>Volatile Memory:</strong> Loses data when power is off (e.g., RAM).
                            </p>
                            <p>
                                <strong>Non-Volatile Memory:</strong> Retains data when power is off (e.g., ROM, flash memory).
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-16">
                        <AccordionTrigger>Memory Hierarchy Diagram</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                The memory hierarchy includes:
                                <ul>
                                    <li><strong>Registers</strong></li>
                                    <li><strong>Cache Memory</strong></li>
                                    <li><strong>Main Memory (RAM)</strong></li>
                                    <li><strong>Secondary Storage (SSD/HDD)</strong></li>
                                </ul>
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-17">
                        <AccordionTrigger>Importance of Word Size and Its Effect on Performance</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                The word size of a processor determines how much data can be processed in a single operation. A larger word size allows for more data to be handled at once, which improves performance and enables the computer to handle more complex tasks efficiently.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-18">
                        <AccordionTrigger>What is Pipelining, and How Does It Improve CPU Efficiency?</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Pipelining is a technique where multiple instruction phases are overlapped in a CPU. It allows the CPU to work on several instructions simultaneously, increasing overall throughput and improving processing efficiency.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-19">
                        <AccordionTrigger>Considerations When Choosing Memory for a Custom Computer</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                When building a custom computer, consider the following:
                                <ul>
                                    <li><strong>Type of Memory:</strong> Choose between DDR4, DDR5, etc., based on compatibility and performance needs.</li>
                                    <li><strong>Size:</strong> Ensure sufficient capacity for the intended use, such as gaming, video editing, or general use.</li>
                                    <li><strong>Speed:</strong> Higher speed memory can improve performance, especially in memory-intensive applications.</li>
                                </ul>
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-20">
                        <AccordionTrigger>Improving Performance of an Older Computer with a Slow CPU</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                To improve an older computer’s performance without replacing the CPU, consider upgrading RAM, adding or replacing storage with a faster SSD, or optimizing system settings and software.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-21">
                        <AccordionTrigger>Advantages and Disadvantages of Impact and Non-Impact Printers</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                <strong>Impact Printers:</strong>
                                <ul>
                                    <li><strong>Advantages:</strong> Can print multi-part forms, often durable, and low-cost consumables.</li>
                                    <li><strong>Disadvantages:</strong> Noisy, slower, and lower print quality.</li>
                                </ul>
                            </p>
                            <p>
                                <strong>Non-Impact Printers:</strong>
                                <ul>
                                    <li><strong>Advantages:</strong> Quieter, faster, and better print quality.</li>
                                    <li><strong>Disadvantages:</strong> Higher cost of consumables and cannot print multi-part forms.</li>
                                </ul>
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-22">
                        <AccordionTrigger>Define &quot;Protocol&quot; in Data Communication</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                A protocol in data communication is a set of rules and conventions that determine how data is transmitted and received over a network. It ensures that devices can communicate effectively and reliably.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-23">
                        <AccordionTrigger>Define Simplex, Half-Duplex, and Full-Duplex Modes of Communication</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                <strong>Simplex:</strong> Data is transmitted in one direction only (e.g., keyboard to computer).
                            </p>
                            <p>
                                <strong>Half-Duplex:</strong> Data can be transmitted in both directions, but not simultaneously (e.g., walkie-talkies).
                            </p>
                            <p>
                                <strong>Full-Duplex:</strong> Data transmission is possible in both directions simultaneously (e.g., telephones).
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-24">
                        <AccordionTrigger>What Are Start and Stop Bits in Data Transmission?</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                Start and stop bits are used in serial communication to indicate the beginning and end of a data packet. The start bit signals the beginning of transmission, while the stop bit marks the end, ensuring data integrity and proper synchronization.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-25">
                        <AccordionTrigger>Difference Between a Switch and a Hub in a Network</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                A <strong>hub</strong> broadcasts data to all connected devices, which can cause network congestion. A <strong>switch</strong> directs data to the specific device that needs it, improving network efficiency and reducing collisions.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-26">
                        <AccordionTrigger>Asynchronous vs. Synchronous Transmission</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                <strong>Asynchronous Transmission:</strong> Data is sent one byte or character at a time with start and stop bits. It is used for applications where data transmission is irregular (e.g., keyboard input).
                            </p>
                            <p>
                                <strong>Synchronous Transmission:</strong> Data is sent in a continuous stream without start and stop bits, synchronized by a clock signal. It is used for high-speed data transfer (e.g., Ethernet).
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-27">
                        <AccordionTrigger>Peer-to-Peer vs. Client/Server Network</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                A <strong>peer-to-peer network</strong> allows each device to act as both a client and server, sharing resources directly without a central server. It is cost-effective but less secure and scalable.
                            </p>
                            <p>
                                A <strong>client/server network</strong> has a central server that provides resources and services to client devices. It is more secure and scalable but requires more infrastructure and management.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-28">
                        <AccordionTrigger>Compare and Contrast Star and Ring Network Topologies</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                <strong>Star Topology:</strong> All devices are connected to a central hub or switch. It is easy to manage and expand but can be affected by hub or switch failure.
                            </p>
                            <p>
                                <strong>Ring Topology:</strong> Devices are connected in a circular fashion, with each device connected to two others. It can be more reliable in terms of network continuity but is harder to manage and expand.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-29">
                        <AccordionTrigger>Why is Mesh Topology Considered Most Reliable but Expensive?</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                <strong>Mesh Topology:</strong> Provides high reliability due to multiple connections between devices, ensuring that failure of one connection does not disrupt the network. However, it is expensive to implement due to the large number of connections and cabling required.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-30">
                        <AccordionTrigger>Role of the Application Layer in the OSI Model</AccordionTrigger>
                        <AccordionContent>
                            <p>
                                The <strong>Application Layer</strong> is the top layer of the OSI model. It provides network services directly to end-users and applications, such as email, file transfer, and web browsing. It is responsible for ensuring that software applications can communicate over the network.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}

export default Page
