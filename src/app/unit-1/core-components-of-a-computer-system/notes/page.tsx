import React from 'react'

const Page = () => {
    return (
        <div className="p-6 bg-white text-gray-900">
           
            <h1 className="text-3xl font-bold mb-6">1.3 Core Components of a Computer System</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1.3.1 Input Devices</h2>
                <p>Input devices are used to provide data to the computer system, enabling interaction between the user and the machine. Common input devices include:</p>
                <ul className="list-disc ml-6 space-y-2">
                    <li><strong>Keyboard:</strong> The primary device for text entry, allowing users to input letters, numbers, and symbols.</li>
                    <li><strong>Mouse:</strong> A hand-held device used to control the cursor and interact with the computer interface. It typically features buttons for selection and navigation.</li>
                    <li><strong>Microphone:</strong> Captures audio input, converting sound waves into electrical signals for processing by the computer.</li>
                    <li><strong>Scanner:</strong> Captures images from physical documents and converts them into digital formats for storage, editing, or display.</li>
                    <li><strong>Barcode Reader:</strong> Reads barcodes printed on products to retrieve product information such as code, description, and price, useful in retail environments.</li>
                    <li><strong>Digital Camera:</strong> Captures images in digital format, which can be transferred to a computer for editing or storage.</li>
                    <li><strong>Touch Screen:</strong> A display that responds to touch inputs, allowing users to interact directly with what is displayed on the screen. Common in mobile devices and tablets.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1.3.2 System Unit</h2>
                <p>The system unit is the central component of a computer, housing essential hardware elements. It includes:</p>
                <ul className="list-disc ml-6 space-y-2">
                    <li><strong>Motherboard:</strong> The main circuit board, containing the microprocessor, main memory, expansion cards, and connectors. It facilitates communication between various components.</li>
                    <li><strong>Microprocessor (CPU):</strong> The central processing unit, responsible for executing instructions. It contains:
                        <ul className="list-disc ml-6 space-y-2">
                            <li><strong>Control Unit (CU):</strong> Directs operations within the CPU.</li>
                            <li><strong>Arithmetic Logic Unit (ALU):</strong> Performs arithmetic and logical operations.</li>
                            <li><strong>Registers:</strong> Small storage locations for temporary data.</li>
                        </ul>
                    </li>
                </ul>
                <h1 className='text-lg font-semibold mb-2 mt-4'>Expansion Slots:</h1><p>Slots on the motherboard for adding expansion cards.</p>
                <h1 className='text-lg font-semibold mb-2 mt-4'>RAM Memory Slots:</h1><p>Slots for installing RAM.</p>
                <h1 className='text-lg font-semibold mb-2 mt-4'>Socket for Microprocessor:</h1><p>Holds the CPU.</p>
                <h1 className='text-lg font-semibold mb-2 mt-4'>Ports:</h1><p>For connecting input and output devices.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1.3.3 Storage Devices</h2>
                <p>Storage devices are used to save data and programs for long-term use. They include:</p>
                <ul className="list-disc ml-6 space-y-2">
                    <li><strong>Hard Disk:</strong> A magnetic storage device with a high storage capacity, used for permanent data storage.</li>
                    <li><strong>Compact Disk (CD):</strong> An optical storage medium with a capacity of about 700 MB, used for storing data, music, and software.</li>
                    <li><strong>Digital Versatile Disk (DVD):</strong> Similar in size to a CD but with greater storage capacity (4 to 16 GB), used for storing larger files and multimedia.</li>
                    <li><strong>Memory Card:</strong> A small, portable storage device with capacities ranging from a few GBs, used in laptops, cameras, and mobile devices.</li>
                    <li><strong>USB Flash Drive:</strong> A small, portable storage device connected via USB, with capacities up to 128 GB, used for transferring and storing data.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1.3.4 Output Devices</h2>
                <p>Output devices display or produce information from the computer. They include:</p>
                <ul className="list-disc ml-6 space-y-2">
                    <li><strong>Monitor:</strong> Displays visual output. Types include:
                        <ul className="list-disc ml-6 space-y-2">
                            <li><strong>CRT Monitor:</strong> Older technology, now largely obsolete.</li>
                            <li><strong>LED Monitor:</strong> Slim, energy-efficient, and offers better display quality.</li>
                        </ul>
                    </li>
                    <li><strong>Printer:</strong> Produces hard copies of text and images. Types include:
                        <ul className="list-disc ml-6 space-y-2">
                            <li><strong>Impact Printer:</strong> Uses mechanical impact to print, e.g., dot matrix printers. Known for noise and lower print quality.</li>
                            <li><strong>Non-Impact Printer:</strong> Includes inkjet and laser printers. Inkjet printers use ink cartridges, while laser printers use toner and are faster with higher print quality.</li>
                        </ul>
                    </li>
                    <li><strong>Plotter:</strong> Used for printing large-format graphics such as architectural blueprints and maps. Includes ink plotters and pen plotters.</li>
                    <li><strong>Speaker:</strong> Produces audio output, commonly used for multimedia applications and sound playback.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">1.3.5 Ports, Expansion Slots, and Expansion Cards</h2>
                <p>Ports, expansion slots, and expansion cards enhance the functionality of a computer system:</p>
                <ul className="list-disc ml-6 space-y-2">
                    <li><strong>Ports:</strong> Interfaces on the motherboard for connecting external devices such as keyboards, mice, monitors, and USB drives. Common types include USB, HDMI, DVI, Audio, and LAN ports.</li>
                    <li><strong>Expansion Slots and Expansion Cards:</strong> Slots on the motherboard for adding expansion cards to enhance functionality. Common cards include:
                        <ul className="list-disc ml-6 space-y-2">
                            <li><strong>Sound Card:</strong> Enhances audio capabilities.</li>
                            <li><strong>Graphics Card:</strong> Improves visual performance.</li>
                            <li><strong>Modem Card:</strong> Facilitates internet connectivity.</li>
                            <li><strong>Network Card:</strong> Enables network connections.</li>
                        </ul>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default Page
