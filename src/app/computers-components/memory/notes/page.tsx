import React from 'react'

const MemoryOverview: React.FC = () => {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Chapter 3: Memory</h1>
            <p className="mb-4">
                Computer memory is a crucial component that works in tandem with the CPU to store and retrieve data.
                In this chapter, we&apos;ll explore the two main categories of memory: primary (or main) memory and secondary memory.
            </p>

            <h2 className="text-2xl font-bold mb-2">3.1 Primary/Main Memory</h2>
            <p className="mb-4">
                Primary memory, also known as main memory, is directly accessible by the CPU. It&apos;s used to store data and instructions
                that are actively being used or processed.
            </p>

            <h3 className="text-xl font-bold mb-2">3.1.1 Random Access Memory (RAM)</h3>
            <p className="mb-4">
                RAM is a type of volatile memory, meaning it loses its contents when the power is turned off.
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>Provides fast read and write access to data</li>
                <li>Temporarily stores data and program code that the CPU is actively using</li>
                <li>Comes in different types, such as SRAM (Static RAM) and DRAM (Dynamic RAM)</li>
                <li>Measured in gigabytes (GB) in modern computers</li>
                <li>More RAM generally allows for faster computer performance, especially when multitasking</li>
            </ul>

            <h3 className="text-xl font-bold mb-2">3.1.2 Read-Only Memory (ROM)</h3>
            <p className="mb-4">
                Unlike RAM, ROM is non-volatile, retaining its contents even when power is removed.
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>Contains permanent data that doesn&apos;t change</li>
                <li>Typically stores essential instructions like the computer&apos;s BIOS (Basic Input/Output System)</li>
                <li>Slower than RAM but retains data without power</li>
                <li>Types include PROM, EPROM, and EEPROM</li>
            </ul>

            <h2 className="text-2xl font-bold mb-2">3.2 Secondary Memory</h2>
            <p className="mb-4">
                Secondary memory, also known as auxiliary memory or storage, is used for long-term data storage.
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>Non-volatile: retains data even when power is off</li>
                <li>Typically larger capacity than primary memory but slower to access</li>
                <li>Examples include:</li>
                <ul className="list-disc list-inside ml-4 mb-4">
                    <li>Hard Disk Drives (HDD): Use magnetic storage to retain data</li>
                    <li>Solid State Drives (SSD): Use flash memory, faster than HDDs but usually more expensive</li>
                    <li>Optical Drives: CD, DVD, Blu-ray</li>
                    <li>USB flash drives</li>
                    <li>Memory cards</li>
                </ul>
            </ul>

            <p className="mb-4">
                Secondary memory stores the operating system, applications, and user files when they&apos;re not in active use.
                When needed, this data is loaded into RAM for faster access by the CPU.
            </p>
            <p className="mb-4">
                The relationship between primary and secondary memory:
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>When you open a file, it&apos;s copied from secondary memory into RAM</li>
                <li>When you save a file, it&apos;s written from RAM back to secondary memory</li>
            </ul>
            <p className="mb-4">
                This system allows for both fast access to current data and long-term storage of large amounts of data.
            </p>
            <p className="mb-4">
                Understanding the interplay between these different types of memory is crucial for comprehending how a computer
                manages and processes data efficiently.
            </p>
            <p className="mb-4">
                In the next chapter, we&apos;ll explore input and output devices, which allow the computer to interact with the external world.
            </p>
        </div>
    );
};

export default MemoryOverview;
