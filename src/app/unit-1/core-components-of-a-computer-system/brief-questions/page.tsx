import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const page = () => {
    return (
        <section id="FAQ" className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6">
            <h1 className="font-bold text-3xl text-center mb-4">
                Brief Questions and Answers on Computer Systems (3 marks each)
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What is the primary device for text entry in a computer system?</AccordionTrigger>
                        <AccordionContent>
                            The keyboard.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Which input device is used to control the cursor on the screen?</AccordionTrigger>
                        <AccordionContent>
                            The mouse.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>What does a microphone do in a computer system?</AccordionTrigger>
                        <AccordionContent>
                            It captures audio input and converts sound waves into electrical signals.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>What is the function of a scanner in a computer system?</AccordionTrigger>
                        <AccordionContent>
                            It captures images from physical documents and converts them into digital formats.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>What is the purpose of a barcode reader?</AccordionTrigger>
                        <AccordionContent>
                            It reads barcodes to retrieve product information such as code, description, and price.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>What does a digital camera do?</AccordionTrigger>
                        <AccordionContent>
                            It captures images in digital format for editing or storage.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger>Which input device allows direct interaction with what is displayed on the screen?</AccordionTrigger>
                        <AccordionContent>
                            The touch screen.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-8">
                        <AccordionTrigger>What is the central component of a computer system that houses essential hardware elements?</AccordionTrigger>
                        <AccordionContent>
                            The system unit.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-9">
                        <AccordionTrigger>What is the function of the motherboard?</AccordionTrigger>
                        <AccordionContent>
                            It contains the microprocessor, main memory, expansion cards, and connectors, and facilitates communication between components.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-10">
                        <AccordionTrigger>What does the microprocessor (CPU) do?</AccordionTrigger>
                        <AccordionContent>
                            It executes instructions. It includes the Control Unit (CU), Arithmetic Logic Unit (ALU), and registers.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-11">
                        <AccordionTrigger>What is the function of RAM memory slots on the motherboard?</AccordionTrigger>
                        <AccordionContent>
                            They are used for installing RAM (Random Access Memory).
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-12">
                        <AccordionTrigger>What are expansion slots used for?</AccordionTrigger>
                        <AccordionContent>
                            They allow for the addition of expansion cards to enhance the computer&apos;s functionality.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-13">
                        <AccordionTrigger>What type of storage device is a hard disk?</AccordionTrigger>
                        <AccordionContent>
                            A magnetic storage device used for permanent data storage.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-14">
                        <AccordionTrigger>What is the capacity of a Compact Disk (CD)?</AccordionTrigger>
                        <AccordionContent>
                            About 700 MB.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-15">
                        <AccordionTrigger>How does a Digital Versatile Disk (DVD) differ from a CD?</AccordionTrigger>
                        <AccordionContent>
                            A DVD has a greater storage capacity (4 to 16 GB) compared to a CD.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-16">
                        <AccordionTrigger>What is the use of a memory card?</AccordionTrigger>
                        <AccordionContent>
                            To store data in laptops, cameras, and mobile devices.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-17">
                        <AccordionTrigger>What is the main purpose of a USB flash drive?</AccordionTrigger>
                        <AccordionContent>
                            To transfer and store data, with capacities up to 128 GB.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-18">
                        <AccordionTrigger>What type of monitor is energy-efficient and offers better display quality?</AccordionTrigger>
                        <AccordionContent>
                            The LED monitor.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-19">
                        <AccordionTrigger>What are the two main types of printers?</AccordionTrigger>
                        <AccordionContent>
                            Impact printers and non-impact printers.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-20">
                        <AccordionTrigger>What type of printer uses toner?</AccordionTrigger>
                        <AccordionContent>
                            The laser printer.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-21">
                        <AccordionTrigger>What is a plotter used for?</AccordionTrigger>
                        <AccordionContent>
                            Printing large-format graphics such as blueprints and maps.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-22">
                        <AccordionTrigger>What does a speaker do in a computer system?</AccordionTrigger>
                        <AccordionContent>
                            Produces audio output.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-23">
                        <AccordionTrigger>What is the purpose of USB ports?</AccordionTrigger>
                        <AccordionContent>
                            To connect external devices such as keyboards, mice, and USB drives.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-24">
                        <AccordionTrigger>What type of card enhances audio capabilities?</AccordionTrigger>
                        <AccordionContent>
                            The sound card.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-25">
                        <AccordionTrigger>Which card improves visual performance in a computer system?</AccordionTrigger>
                        <AccordionContent>
                            The graphics card.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-26">
                        <AccordionTrigger>What does a modem card do?</AccordionTrigger>
                        <AccordionContent>
                            Facilitates internet connectivity.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-27">
                        <AccordionTrigger>What type of card enables network connections?</AccordionTrigger>
                        <AccordionContent>
                            The network card.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-28">
                        <AccordionTrigger>What is the primary function of a keyboard?</AccordionTrigger>
                        <AccordionContent>
                            To input letters, numbers, and symbols.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-29">
                        <AccordionTrigger>Which input device is essential for voice commands and recording?</AccordionTrigger>
                        <AccordionContent>
                            The microphone.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-30">
                        <AccordionTrigger>What does a scanner do with physical documents?</AccordionTrigger>
                        <AccordionContent>
                            Converts them into digital formats.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-31">
                        <AccordionTrigger>Which device captures images and videos in digital format?</AccordionTrigger>
                        <AccordionContent>
                            The digital camera.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-32">
                        <AccordionTrigger>What type of input device allows direct interaction with the screen?</AccordionTrigger>
                        <AccordionContent>
                            The touch screen.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-33">
                        <AccordionTrigger>What is housed within the system unit?</AccordionTrigger>
                        <AccordionContent>
                            Essential hardware elements including the motherboard, CPU, and RAM.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-34">
                        <AccordionTrigger>What does the Control Unit (CU) in the CPU do?</AccordionTrigger>
                        <AccordionContent>
                            Directs operations within the CPU.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-35">
                        <AccordionTrigger>What is the function of the Arithmetic Logic Unit (ALU) in the CPU?</AccordionTrigger>
                        <AccordionContent>
                            Performs arithmetic and logical operations.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-36">
                        <AccordionTrigger>What do registers in the CPU store?</AccordionTrigger>
                        <AccordionContent>
                            Temporary data.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-37">
                        <AccordionTrigger>What are RAM memory slots used for?</AccordionTrigger>
                        <AccordionContent>
                            Installing RAM modules.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-38">
                        <AccordionTrigger>What is the purpose of expansion slots on the motherboard?</AccordionTrigger>
                        <AccordionContent>
                            To add expansion cards for enhanced functionality.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-39">
                        <AccordionTrigger>What does the hard disk store?</AccordionTrigger>
                        <AccordionContent>
                            Data permanently.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-40">
                        <AccordionTrigger>What is the storage capacity of a DVD compared to a CD?</AccordionTrigger>
                        <AccordionContent>
                            A DVD has a larger storage capacity (4 to 16 GB) than a CD (700 MB).
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-41">
                        <AccordionTrigger>What type of device is a USB flash drive?</AccordionTrigger>
                        <AccordionContent>
                            A portable storage device.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-42">
                        <AccordionTrigger>What is the difference between impact and non-impact printers?</AccordionTrigger>
                        <AccordionContent>
                            Impact printers use mechanical impact to print, while non-impact printers like inkjet and laser printers use other methods.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-43">
                        <AccordionTrigger>Which device prints large-format graphics?</AccordionTrigger>
                        <AccordionContent>
                            The plotter.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-44">
                        <AccordionTrigger>What is the role of a sound card in a computer system?</AccordionTrigger>
                        <AccordionContent>
                            Enhances audio capabilities.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-45">
                        <AccordionTrigger>What does a graphics card improve in a computer system?</AccordionTrigger>
                        <AccordionContent>
                            Visual performance.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-46">
                        <AccordionTrigger>What is the purpose of a network card?</AccordionTrigger>
                        <AccordionContent>
                            To enable network connections.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-47">
                        <AccordionTrigger>What does the socket for the microprocessor do?</AccordionTrigger>
                        <AccordionContent>
                            Holds the CPU (Central Processing Unit).
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-48">
                        <AccordionTrigger>What is the primary function of a memory card?</AccordionTrigger>
                        <AccordionContent>
                            To provide portable storage.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-49">
                        <AccordionTrigger>Which device produces audio output for multimedia applications?</AccordionTrigger>
                        <AccordionContent>
                            The speaker.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-50">
                        <AccordionTrigger>What is the primary use of expansion cards in a computer?</AccordionTrigger>
                        <AccordionContent>
                            To enhance the computer&apos;s functionality, such as adding sound or graphics capabilities.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}

export default page
