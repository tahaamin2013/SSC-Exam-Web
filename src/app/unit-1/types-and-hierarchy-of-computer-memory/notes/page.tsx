// pages/memory.tsx
import React from 'react';

const page = () => {
    const data = [
        { term: 'Byte (B)', size: '8 bits' },
        { term: 'Kilobyte (KB)', size: '1024 bytes / 10³ bytes' },
        { term: 'Megabyte (MB)', size: '1024 KB / 10⁶ bytes' },
        
        { term: 'Zettabyte (ZB)', size: '1024 EB / 10²¹ bytes' },
        { term: 'Yottabyte (YB)', size: '1024 ZB / 10²⁴ bytes' },
    ];
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">1.6 Types and Hierarchy of Computer Memory</h1>
            <p className="mb-4">
                Memory in computing refers to the physical devices used to store data and programs, both temporarily and permanently, for use by a computer. It is essential for the operation of the computer system and the execution of programs. The types and hierarchy of memory can be broadly classified into different categories.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
                <div>
                    <h2 className="text-2xl font-semibold mt-6 mb-2">Memory Terminology</h2>
                    <ul className="list-disc ml-6 mb-4">
                        <li><strong>Bit:</strong> The smallest unit of memory, representing a binary digit, either 0 or 1. Each bit corresponds to an electronic cell in memory which is either ON (1) or OFF (0).</li>
                        <li><strong>Byte:</strong> A group of 8 bits constitutes one byte. It is the basic unit of memory used to store one character of data, such as &apos;A&apos;, &apos;b&apos;, or &apos;*&apos;. Memory size is generally measured in bytes, with higher units including:
                            <ul className="list-disc ml-6">
                                <li>Kilobyte (KB): 1 KB = 1024 Bytes</li>
                                <li>Megabyte (MB): 1 MB = 1024 KB</li>
                                <li>Gigabyte (GB): 1 GB = 1024 MB</li>
                                <li>Terabyte (TB): 1 TB = 1024 GB</li>
                                <li>Petabyte (PB): 1 PB = 1024 TB</li>
                                <li>Exabyte (EB): 1 EB = 1024 PB</li>
                            </ul>
                        </li>
                        <li><strong>Memory Word:</strong> The smallest amount of data that a computer can process as a unit. The size of a memory word, known as word size, typically ranges from 16 to 64 bits. A larger word size allows the CPU to process more data per operation, enhancing performance.</li>
                        <li><strong>Word Size:</strong> Refers to the number of bits that a CPU can process or manipulate in a single operation. For example, a 32-bit CPU processes data in 32-bit chunks, whereas a 64-bit CPU handles 64-bit chunks. Larger word sizes enable handling of larger integers, more complex arithmetic operations, and greater memory addressing.</li>
                    </ul>
                </div>
                <div className="container p-4">
                    <h2 className="text-2xl font-bold mb-4 text-center">Memory Capacity Conversion Chart</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-300">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="py-2 px-4 border-b text-left">Term (Abbreviation)</th>
                                    <th className="py-2 px-4 border-b text-left">Approximate Size</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row, index) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                        <td className="py-2 px-4 border-b">{row.term}</td>
                                        <td className="py-2 px-4 border-b">{row.size}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-semibold mt-6 mb-2">Memory Built-up and Retention Power</h2>
            <ul className="list-disc ml-6 mb-4">
                <li><strong>Chip Memory:</strong> Refers to memory contained within integrated circuits (ICs) on a semiconductor chip. These chips are fast due to their lack of mechanical parts and reliance on electrical processes. Examples include:
                    <ul className="list-disc ml-6">
                        <li>RAM (Random Access Memory)</li>
                        <li>ROM (Read-Only Memory)</li>
                        <li>Cache Memory</li>
                        <li>Flash Memory Drives</li>
                        <li>Memory Cards</li>
                        <li>Solid State Drives (SSDs)</li>
                    </ul>
                </li>
                <li><strong>Magnetic Memory:</strong> Uses magnetized media to store data. Magnetic memory includes:
                    <ul className="list-disc ml-6">
                        <li>Magnetic Tapes: Data is stored as magnetized spots on a tape.</li>
                        <li>Magnetic Disks: Data is stored on disks coated with a magnetic material. Examples include hard disk drives (HDDs), which use a read/write head to detect and modify magnetized spots on the disk.</li>
                    </ul>
                    Magnetic memory is cost-effective and offers large storage capacities but has slower access times compared to other types of memory.
                </li>
                <li><strong>Optical Memory:</strong> Stores data using laser technology to encode data onto disks. Optical memory includes:
                    <ul className="list-disc ml-6">
                        <li>CDs (Compact Discs)</li>
                        <li>DVDs (Digital Versatile Discs)</li>
                        <li>Blu-ray Discs (BDs)</li>
                    </ul>
                    Data is encoded in the form of pits and lands on the disk&apos;s surface, which are read by a laser beam. Optical storage is relatively inexpensive and offers high capacity but is generally slower than chip memory.
                </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">Main Memory</h2>
            <ul className="list-disc ml-6 mb-4">
                <li><strong>RAM (Random Access Memory):</strong> Volatile memory that provides temporary storage for data and instructions in use.</li>
                <li><strong>Cache Memory:</strong> A smaller, faster type of volatile memory located close to the CPU, used to speed up access to frequently used data.</li>
                <li><strong>ROM (Read-Only Memory):</strong> A type of non-volatile memory that is used to store firmware and system software. Once written, it cannot be modified or can only be modified with difficulty.</li>
                <li><strong>Registers</strong></li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">Volatile and Non-Volatile Memory</h2>
            <ul className="list-disc ml-6 mb-4">
                <li><strong>Volatile Memory:</strong> Memory that loses its data when power is lost. Examples include:
                    <ul className="list-disc ml-6">
                        <li>RAM (Random Access Memory)</li>
                        <li>Cache Memory</li>
                    </ul>
                </li>
                <li><strong>Non-Volatile Memory:</strong> Memory that retains its data even when the power is turned off. Examples include:
                    <ul className="list-disc ml-6">
                        <li>ROM (Read-Only Memory)</li>
                        <li>Flash Memory</li>
                        <li>Magnetic Storage (e.g., HDDs)</li>
                        <li>Optical Storage (e.g., CDs, DVDs)</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default page;
