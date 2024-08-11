"use client";
import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import Image from 'next/image';

const Page = () => {
  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    mermaid.contentLoaded();
  }, []);

  const [zoomLevel1, setZoomLevel1] = useState(1);
  const [zoomLevel2, setZoomLevel2] = useState(1);
  const mermaidContainerRef = useRef<HTMLDivElement>(null);

  const mermaidContainerRef1 = useRef<HTMLDivElement>(null);
  const mermaidContainerRef2 = useRef<HTMLDivElement>(null);

  const zoomIn1 = () => setZoomLevel1(prev => Math.min(prev + 0.1, 2));
  const zoomIn2 = () => setZoomLevel2(prev => Math.min(prev + 0.1, 2));
  const zoomOut2 = () => setZoomLevel2(prev => Math.max(prev - 0.1, 0.5));
  useEffect(() => {
    if (mermaidContainerRef1.current) {
      mermaid.contentLoaded();
    }
  }, [zoomLevel1]);

  useEffect(() => {
    if (mermaidContainerRef2.current) {
      mermaid.contentLoaded();
    }
  }, [zoomLevel2]);
  const diagramDefinition = `
graph TD
    DB[Data Bus] --> IR[Instruction Register]
    IR --> ID[Instruction Decoder]
    ID --> TCL[Timing and Control Logic]
    TCL --> CB[Control Bus]

    subgraph Control Unit
        ID
        TCL
    end

    style DB fill:#f9f,stroke:#333,stroke-width:2px
    style CB fill:#9ff,stroke:#333,stroke-width:2px
    style Control Unit fill:#ffe,stroke:#333,stroke-width:2px
    style IR fill:#fcc,stroke:#333,stroke-width:2px
    `;
  const diagramDefinition2 = `
graph TD
    subgraph CPU[Central Processing Unit]
        CU[Control Unit]
        ALU[Arithmetic Logic Unit]
        Registers[Registers]
        L1[L1 Cache]
    end

    L2[L2 Cache]
    RAM[Main Memory/RAM]
    SecondaryStorage[Secondary Storage]
    IO[Input/Output]

    CU <--> ALU
    CU <--> Registers
    ALU <--> Registers

    Registers <--> L1

    CPU <-->|Data Bus| L2
    CPU <-->|Control Bus| L2
    CPU <-->|Address Bus| L2

    L2 <-->|Data Bus| RAM
    L2 <-->|Control Bus| RAM
    L2 <-->|Address Bus| RAM

    RAM <-->|Data Bus| SecondaryStorage
    RAM <-->|Control Bus| SecondaryStorage
    RAM <-->|Address Bus| SecondaryStorage

    CPU <-->|Data Bus| IO
    CPU <-->|Control Bus| IO
    CPU <-->|Address Bus| IO

    style CPU fill:#f9f,stroke:#333,stroke-width:2px
    style L2 fill:#fcf,stroke:#333,stroke-width:2px
    style RAM fill:#bfb,stroke:#333,stroke-width:2px
    style SecondaryStorage fill:#ffc,stroke:#333,stroke-width:2px
    style IO fill:#bbf,stroke:#333,stroke-width:2px 
    `;

  const zoomOut1 = () => setZoomLevel1(prev => Math.max(prev - 0.1, 0.5));

  return (
    <div className="p-6 bg-white">
      <h1 className="text-3xl font-bold mb-6">1.4 Von Neumann Architecture</h1>
      <p>
        Von Neumann Architecture is a fundamental model in computer science that describes the design and operation of most modern computers. Proposed by John von Neumann in 1945, this architecture outlines the structure and functioning of computer systems where data and instructions are stored in the same memory. It consists of several key components including the Central Processing Unit (CPU), memory unit, registers, Arithmetic and Logic Unit (ALU), Control Unit (CU), and Input/Output (I/O) Controller.
      </p>

      <div className="relative p-6 pt-2 my-3 h-[300px] overflow-scroll flex flex-col  border border-gray-300 rounded-lg shadow-md bg-white">
        <div className="bg-white top-2 items-end justify-end right-2 flex space-x-2">
          <button
            onClick={zoomIn1}
            className="px-3 py-1 text-white bg-gradient-to-r from-purple-600 to-indigo-600"
          >
            Zoom In
          </button>
          <button
            onClick={zoomOut1}
            className="px-3 py-1 text-white bg-gradient-to-r from-purple-600 to-indigo-600"
          >
            Zoom Out
          </button>
      
        </div>
        <div
          className="mermaid-container"
          ref={mermaidContainerRef}
          style={{ transform: `scale(${zoomLevel1})`, transformOrigin: 'top left' }}
        >
          <div className="mermaid">
            {diagramDefinition2}
          </div>
        </div>
      </div>
      <Image src="/von neumann.png" alt='von neumann' width={800} height={800} />
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Central Processing Unit (CPU)</h2>
        <p>
          The Central Processing Unit (CPU) is the core component responsible for executing instructions from a computer program. It encompasses several subcomponents:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Arithmetic and Logic Unit (ALU):</strong> Performs arithmetic operations (such as addition and subtraction) and logical operations (such as AND, OR, and NOT).</li>
          <li><strong>Control Unit (CU):</strong> Directs the operation of the CPU, controlling the ALU, memory, and I/O devices. It interprets program instructions and provides the necessary timing and control signals.</li>
          <li><strong>Registers:</strong> High-speed storage locations within the CPU used to hold data and instructions temporarily. Key registers include:
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Memory Address Register (MAR):</strong> Holds the address of the data that needs to be accessed.</li>
              <li><strong>Memory Data Register (MDR):</strong> Holds the data being transferred to or from memory.</li>
              <li><strong>Accumulator (AC):</strong> Stores intermediate arithmetic and logic results.</li>
              <li><strong>Program Counter (PC):</strong> Contains the address of the next instruction to be executed.</li>
              <li><strong>Current Instruction Register (CIR):</strong> Holds the current instruction being processed.</li>
              <li><strong>L1 Cache</strong> A small, extremely fast memory cache that is located within the CPU itself. It stores frequently accessed data and instructions to speed up the processing.</li>
              <li><strong>L2 Cache</strong> A slightly larger but still fast memory cache that may be located within the CPU or on a separate chip close to the CPU. It also stores frequently accessed data and instructions, acting as an intermediary between the L1 cache and the main memory.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Arithmetic and Logic Unit (ALU)</h2>
        <p>
          The Arithmetic and Logic Unit (ALU) is responsible for carrying out all arithmetic operations (such as addition, subtraction, multiplication, and division) and logical operations (such as comparisons and bitwise operations). It is a crucial part of the CPU that performs the computations and decision-making tasks.
        </p>
      </section>

      <section className="mb-8 grid grid-cols-1 sm:grid-cols-2">
        <div>  <h2 className="text-2xl font-semibold mb-4">Control Unit (CU)</h2>
          <p>
            The Control Unit (CU) orchestrates the overall operation of the computer. It:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Controls the ALU: Directs it to perform the required operations.</li>
            <li>Manages memory operations: Oversees reading from and writing to memory.</li>
            <li>Coordinates I/O operations: Sends and receives data to and from peripheral devices.</li>
            <li>Provides timing and control signals: Ensures that all components operate in sync with the system&apos;s clock.</li>
          </ul></div>
        <div>
          <div className=" border h-[300px] pt-[160px] overflow-y-scroll flex justify-center items-center border-gray-300 rounded-lg shadow-md bg-white">
            <div className="mermaid">
              {diagramDefinition}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Buses</h2>
        <p>
          Buses are communication pathways used to transmit data between different components of the computer. A standard CPU system bus includes:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Address Bus:</strong> Carries the addresses of data from the CPU to memory but does not carry the data itself.</li>
          <li><strong>Data Bus:</strong> Transports data between the CPU, memory unit, and I/O devices.</li>
          <li><strong>Control Bus:</strong> Delivers control signals from the CPU to manage and coordinate the activities of all computer components.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Memory Unit</h2>
        <p>
          In the Von Neumann architecture, the Memory Unit consists of:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>RAM (Random Access Memory):</strong> Main memory that is fast and directly accessible by the CPU. It is used to store data and instructions currently being used by the computer.</li>
          <li><strong>Cache Memory:</strong> A smaller, faster type of volatile memory located close to the CPU to reduce the time it takes to access frequently used instructions and data. It speeds up processing by storing copies of frequently accessed memory locations.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Input/Output (I/O) Controller</h2>
        <p>
          The Input/Output (I/O) Controller manages the flow of data between the CPU and external devices, such as hard drives, USB devices, and network interfaces. It ensures smooth communication between the computer and peripheral devices, handling data transfers and command executions.
        </p>
      </section>
    </div>
  );
}

export default Page;
