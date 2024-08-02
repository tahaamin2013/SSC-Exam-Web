import React from 'react';

const page: React.FC = () => {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Chapter 2: Central Processing Unit (CPU)</h1>

            <h2 className="text-2xl font-bold mb-2">2.1 Overview of CPU</h2>
            <p className="mb-4">
                The Central Processing Unit, commonly known as the CPU, is often referred to as the &quot;brain&quot; of the computer.
                It&apos;s the primary component responsible for executing instructions of a computer program. These instructions
                involve performing basic arithmetic, logical, control, and input/output (I/O) operations specified by the instructions.
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>It&apos;s typically a small silicon chip encased in a ceramic or plastic package.</li>
                <li>Modern CPUs can perform billions of calculations per second.</li>
                <li>CPUs are produced by manufacturers like Intel, AMD, and ARM.</li>
                <li>The speed of a CPU is measured in Hertz (Hz), with modern CPUs operating in the Gigahertz (GHz) range.</li>
                <li>The CPU consists of several key components, primarily the Control Unit (CU) and the Arithmetic Logic Unit (ALU), which we&apos;ll explore in more detail in the following sections.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-2">2.2 Control Unit (CU)</h2>
            <p className="mb-4">
                The Control Unit is the component of the CPU that directs the operation of the processor. It tells the computer&apos;s memory,
                arithmetic and logic unit, and input and output devices how to respond to the instructions that have been sent to the processor.
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>Fetches instructions from memory</li>
                <li>Decodes these instructions</li>
                <li>Executes these instructions by directing the coordinated operations of the ALU, registers, and other components</li>
                <li>The CU uses electrical signals to direct the entire computer system to carry out stored program instructions.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-2">2.3 Arithmetic and Logic Unit (ALU)</h2>
            <p className="mb-4">
                The Arithmetic Logic Unit is the part of the CPU that carries out arithmetic and logical operations. It&apos;s essentially the mathematical brain of the computer.
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>Arithmetic operations: Addition, subtraction, multiplication, and division</li>
                <li>Logical operations: AND, OR, NOT, XOR</li>
                <li>Comparison operations: Greater than, less than, equal to</li>
                <li>The ALU takes data from the processor registers, performs the required operation, and returns the result to an appropriate register.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-2">2.4 Buses</h2>
            <p className="mb-4">
                Buses are communication systems that transfer data between components inside a computer or between computers. There are three main types of buses in a typical computer system:
            </p>
            <h3 className="text-xl font-bold mb-2">2.4.1 Data Bus</h3>
            <ul className="list-disc list-inside mb-4">
                <li>Carries data between the CPU and other components</li>
                <li>Bidirectional, allowing data to travel both to and from the CPU</li>
                <li>Width of the data bus (e.g., 32-bit, 64-bit) affects how much data can be transferred at once</li>
            </ul>

            <h3 className="text-xl font-bold mb-2">2.4.2 Address Bus</h3>
            <ul className="list-disc list-inside mb-4">
                <li>Carries memory addresses from the CPU to other components</li>
                <li>Unidirectional, only carrying addresses from the CPU to memory</li>
                <li>Width determines the maximum amount of memory that can be addressed</li>
            </ul>

            <h3 className="text-xl font-bold mb-2">2.4.3 Control Bus</h3>
            <ul className="list-disc list-inside mb-4">
                <li>Carries control signals from the CPU to other components</li>
                <li>Controls when devices can access the bus and when data should be read or written</li>
                <li>Includes signals like read/write, interrupt request, clock signals, etc.</li>
            </ul>

            <p className="mb-4">
                The bus system is crucial for the efficient operation of the computer, allowing different components to communicate and work together seamlessly.
            </p>

            <section>
                <h2 className="text-2xl font-semibold ">2.5 Registers</h2>
                <p className="mt-4">
                    Registers are small, high-speed storage locations directly within the CPU. They are the fastest form of data storage in a computer, allowing the CPU to access data almost instantly. Registers play a crucial role in the execution of instructions and the overall performance of the processor.
                </p>
                <p className="mt-4">
                    Key characteristics of registers:
                </p>
                <ul className="list-disc list-inside ml-4">
                    <li>Very fast access time (typically a single CPU clock cycle)</li>
                    <li>Limited in number and size</li>
                    <li>Directly accessible by the CPU</li>
                    <li>Used for temporary data storage during instruction execution</li>
                </ul>
            </section>
            <section>
                <h3 className="text-xl font-semibold ">Types of Registers:</h3>
                <div className="mt-4 space-y-6">
                    <div>
                        <h4 className="text-lg font-semibold ">2.5.1 General-Purpose Registers</h4>
                        <p>Used for a variety of operations, can hold data, memory addresses, or intermediate results. Examples: AX, BX, CX, DX in x86 architecture.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold ">2.5.2 Accumulator</h4>
                        <p>Primary register for arithmetic and logical operations. Stores the result of arithmetic and logical operations. Often designated as register A or AX.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold ">2.5.3 Program Counter (PC)</h4>
                        <p>Also known as the Instruction Pointer (IP). Holds the memory address of the next instruction to be executed. Automatically incremented after each instruction fetch.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold ">2.5.4 Instruction Register (IR)</h4>
                        <p>Holds the current instruction being executed. Contents are decoded by the control unit to determine the operation.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold ">2.5.5 Memory Address Register (MAR)</h4>
                        <p>Holds the memory address for a read or write operation. Connected to the address bus.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold ">2.5.6 Memory Data Register (MDR)</h4>
                        <p>Also known as Memory Buffer Register (MBR). Holds data being transferred to or from memory. Connected to the data bus.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold ">2.5.7 Stack Pointer (SP)</h4>
                        <p>Points to the top of the stack in memory. Used for managing subroutine calls and returns.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold ">2.5.8 Status Register (SR)</h4>
                        <p>Also known as Flags Register. Contains condition code bits or flags. Flags indicate the result of operations (e.g., zero, carry, overflow).</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold ">2.5.9 Index Registers</h4>
                        <p>Used for indexed addressing modes. Facilitate operations on arrays or other structured data.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold ">2.5.10 Base Registers</h4>
                        <p>Hold base addresses for relative addressing. Used in memory segmentation.</p>
                    </div>
                </div>
            </section>
            <section>
                <h3 className="text-xl font-semibold ">Importance of Registers</h3>
                <p className="mt-4">
                    Registers provide the fastest possible access to data, crucial for CPU performance. Many CPU instructions operate directly on data in registers. Registers like MAR and MDR facilitate efficient memory operations. PC and SP registers manage the flow of program execution. The status register provides essential information about operation results.
                </p>
            </section>
            <section>
                <h3 className="text-xl font-semibold ">Register Management</h3>
                <p className="mt-4">
                    The CPU&apos;s control unit manages the use of registers. Compilers and assemblers play a role in optimizing register usage. Some advanced processors use register renaming to avoid unnecessary data dependencies.
                </p>
                <p className="mt-4">
                    Registers are fundamental to the operation of the CPU, serving as the primary working memory for the processor. Their efficient use is critical for maximizing CPU performance and minimizing memory access times.
                </p>
            </section>
        </div>
    );
};

export default page;
