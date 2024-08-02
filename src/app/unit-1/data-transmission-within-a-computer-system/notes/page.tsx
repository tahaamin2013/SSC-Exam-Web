// pages/data-transmission.tsx
import React from 'react';

const DataTransmission = () => {
    return (
        <div className="p-6 bg-white text-gray-900">
            <h1 className="text-3xl font-bold mb-6">1.5 Data Transmission within a Computer System</h1>
            <p>
                Data transmission within a computer system involves moving data between different components such as the CPU, memory, storage devices, and input/output devices. Effective data transmission is crucial for the efficient operation and performance of a computer. Key aspects of data transmission include Bus Architecture, Data Paths, Registers, Memory Hierarchy, Instruction Cycle, Pipeline Processing, Interrupts and I/O, and Parallelism.
            </p>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Bus Architecture</h2>
                <p>
                    Bus Architecture refers to the system of communication pathways used to transfer data and control signals between various components of a computer system. The main types of buses include:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                    <li><strong>Data Bus:</strong> Carries the actual data being transferred between components.</li>
                    <li><strong>Address Bus:</strong> Carries the addresses of data in memory, specifying where the data should be read from or written to.</li>
                    <li><strong>Control Bus:</strong> Transmits control signals to manage the operations of the CPU, memory, and I/O devices.</li>
                </ul>
                <p>
                    The bus architecture functions similarly to a highway system, providing routes for data and control signals within the computer.
                </p>
                <ul className="list-disc ml-6 space-y-2">
                    <li><strong>System Buses:</strong>
                        <ul className="list-disc ml-6 space-y-2">
                            <li><strong>Control Bus:</strong> Manages the flow of control signals to ensure coordinated operations among components.</li>
                            <li><strong>Data Bus:</strong> Facilitates the transfer of data between the CPU, memory, and I/O devices.</li>
                            <li><strong>Address Bus:</strong> Used to specify memory locations for data transfer.</li>
                        </ul>
                    </li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Data Paths</h2>
                <p>
                    Data Paths are internal pathways within the CPU that enable the movement of data between various functional units such as the Arithmetic Logic Unit (ALU), registers, and cache. Data paths are essential for performing operations on data, providing routes for data movement within the processor.
                </p>
                <ul className="list-disc ml-6 space-y-2">
                    <li><strong>Microprocessor Bus Architecture:</strong>
                        <ul className="list-disc ml-6 space-y-2">
                            <li><strong>Internal Address Bus:</strong> Carries memory addresses within the CPU.</li>
                            <li><strong>Internal Data Bus:</strong> Transfers data between the CPU&apos;s internal components.</li>
                            <li><strong>Internal Control Bus:</strong> Delivers control signals within the CPU.</li>
                        </ul>
                    </li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Registers</h2>
                <p>
                    Registers are small, high-speed storage units within the CPU that temporarily hold data and instructions. They facilitate rapid data access and manipulation during processing. Key registers include:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                    <li><strong>Memory Address Register (MAR):</strong> Holds the address of the data being accessed.</li>
                    <li><strong>Memory Data Register (MDR):</strong> Contains data being transferred to or from memory.</li>
                    <li><strong>Accumulator (AC):</strong> Stores intermediate results from arithmetic and logic operations.</li>
                    <li><strong>Program Counter (PC):</strong> Contains the address of the next instruction to be executed.</li>
                    <li><strong>Current Instruction Register (CIR):</strong> Holds the current instruction being processed.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Memory Hierarchy</h2>
                <p>
                    Memory Hierarchy is a structured approach to data storage, aiming to balance speed and storage capacity. It consists of several levels:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                    <li><strong>Cache Memory:</strong> Fast, small-sized memory close to the CPU for quick access to frequently used data.</li>
                    <li><strong>RAM (Random Access Memory):</strong> Larger but slower than cache memory, used for temporary data storage.</li>
                    <li><strong>Secondary Storage:</strong> Includes hard drives, SSDs, and other forms of long-term storage, which are slower but offer greater capacity.</li>
                </ul>
                <p>
                    Data is fetched from the highest level of the hierarchy first due to its faster access times.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Instruction Cycle</h2>
                <p>
                    The Instruction Cycle is the process by which a computer executes a program&apos;s instructions. It involves:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                    <li><strong>Fetching:</strong> Retrieving the next instruction from memory.</li>
                    <li><strong>Decoding:</strong> Interpreting the fetched instruction to determine the required operation.</li>
                    <li><strong>Executing:</strong> Performing the operation using the CPU’s ALU or other functional units.</li>
                    <li><strong>Storing:</strong> Saving the results back to memory or registers.</li>
                </ul>
                <p>
                    This cycle is also known as the fetch-decode-execute cycle.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Pipeline Processing</h2>
                <p>
                    Pipeline Processing is a technique used in modern CPUs to enhance efficiency. It involves breaking down the execution of instructions into separate stages, with multiple instructions being processed simultaneously at different stages. This method improves CPU utilization and speeds up instruction execution.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Interrupts and I/O</h2>
                <p>
                    Interrupts are signals that temporarily halt the current program’s execution to address urgent events or handle I/O operations. This allows the CPU to manage interactions with peripheral devices like keyboards, mice, and network interfaces effectively. When an interrupt occurs, the CPU pauses its current activities, processes the interrupt, and then resumes the previous task.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4">Parallelism</h2>
                <p>
                    Parallelism involves the simultaneous execution of multiple tasks to improve processing speed. It can be implemented in several ways:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                    <li><strong>Multi-core CPUs:</strong> Multiple processor cores within a single CPU chip allow for parallel task execution.</li>
                    <li><strong>Distributed Systems:</strong> Multiple interconnected computers work together to perform tasks, enhancing processing power and efficiency.</li>
                </ul>
                <p>
                    Parallelism enhances data transmission speed and overall system performance by leveraging multiple processing units or computers.
                </p>
            </section>
        </div>
    );
};

export default DataTransmission;
