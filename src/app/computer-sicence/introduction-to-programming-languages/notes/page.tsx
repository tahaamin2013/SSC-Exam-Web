import React from 'react';

const page: React.FC = () => {
    return (
        <main className="max-w-4xl mx-auto py-8 px-4">

            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Introduction to Programming Languages</h1>
                <p className="mb-4">
                    Programming languages are used to create software and control computer operations. They can be classified into three levels:
                </p>

                <h2 className="text-2xl font-semibold mt-4">High-Level Languages</h2>
                <p className="mb-2">
                    <strong>Description:</strong> Closer to human language and easier to learn. They provide more abstraction from hardware details.
                </p>
                <p className="mb-2">
                    <strong>Examples:</strong> Python, Java, C++, JavaScript.
                </p>
                <p className="mb-4">
                    <strong>Purpose:</strong> Used for general-purpose programming.
                </p>

                <h2 className="text-2xl font-semibold mt-4">Medium-Level Languages</h2>
                <p className="mb-2">
                    <strong>Description:</strong> Blend features of high-level and low-level languages. They offer some abstraction while allowing hardware control.
                </p>
                <p className="mb-2">
                    <strong>Example:</strong> C.
                </p>
                <p className="mb-4">
                    <strong>Purpose:</strong> Provide good control over hardware while being easier to read than low-level languages.
                </p>

                <h2 className="text-2xl font-semibold mt-4">Low-Level Languages</h2>
                <p className="mb-2">
                    <strong>Description:</strong> Closer to machine language, providing direct hardware control.
                </p>
                <p className="mb-2">
                    <strong>Examples:</strong> Assembly language, Machine code.
                </p>
                <p className="mb-4">
                    <strong>Purpose:</strong> Give the programmer precise control over the hardware.
                </p>
                <h1 className="text-3xl font-bold mb-6">Types of Low-Level Languages</h1>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Machine Language</h2>
                    <p className=" mb-2"><strong>Description:</strong> The lowest-level programming language, consisting of binary code (1s and 0s).</p>
                    <h3 className="text-xl font-medium mb-2">Characteristics:</h3>
                    <ul className="list-disc list-inside  mb-4">
                        <li>Directly executable by the computer&apos;s CPU</li>
                        <li>Specific to the computer&apos;s hardware architecture</li>
                        <li>Extremely difficult for humans to read or write</li>
                    </ul>
                    <h3 className="text-xl font-medium mb-2">Advantages:</h3>
                    <ul className="list-disc list-inside  mb-4">
                        <li>Fastest execution speed</li>
                        <li>Most direct control over hardware</li>
                    </ul>
                    <h3 className="text-xl font-medium mb-2">Disadvantages:</h3>
                    <ul className="list-disc list-inside  mb-4">
                        <li>Very difficult to program in</li>
                        <li>Not portable across different hardware architectures</li>
                    </ul>
                    <p className=" mb-4"><strong>Use:</strong> Rarely written directly by programmers today, but is the final form of all programs executed by computers.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Assembly Language</h2>
                    <p className=" mb-2"><strong>Description:</strong> A symbolic representation of machine language instructions.</p>
                    <h3 className="text-xl font-medium mb-2">Characteristics:</h3>
                    <ul className="list-disc list-inside  mb-4">
                        <li>Uses mnemonics and symbols to represent machine instructions and memory locations</li>
                        <li>Specific to a particular computer architecture, but human-readable</li>
                        <li>Requires an assembler to convert to machine language</li>
                    </ul>
                    <h3 className="text-xl font-medium mb-2">Advantages:</h3>
                    <ul className="list-disc list-inside  mb-4">
                        <li>More readable than machine language</li>
                        <li>Allows for direct hardware control</li>
                        <li>Can be optimized for specific hardware</li>
                    </ul>
                    <h3 className="text-xl font-medium mb-2">Disadvantages:</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li>Still complex and time-consuming to program in</li>
                        <li>Not portable across different architectures</li>
                    </ul>
                    <p className=" mb-4"><strong>Use:</strong> System programming, device drivers, real-time systems, and performance-critical code.</p>
                </section>
                <h2 className="text-2xl font-semibold mt-4">Key Concepts</h2>
                <h3 className="text-xl font-medium mt-2">Compiler</h3>
                <p className="mb-2">
                    <strong>Function:</strong>A program that translates an entire high-level language code into machine code all at once before execution. It produces an executable file of machine code. It produces a file that does not need any type of translator to run.
                </p>
                <p className="mb-4">
                    <strong>Examples:</strong> GCC compiler for C and C++.
                </p>

                <h3 className="text-xl font-medium mt-2">Interpreter</h3>
                <p className="mb-2">
                    <strong>Function:</strong> A program that translates and executes high-level language code line by line as the program runs. It is used at testing/development stage of a program. It converts source code into machine code line by line.
                </p>
                <p className="mb-4">
                    <strong>Examples:</strong> Python and JavaScript often use interpreters.
                </p>

                <h3 className="text-xl font-medium mt-2">Assembler</h3>
                <p className="mb-2">
                    <strong>Function:</strong> A program that translates assembly language into machine code.
                </p>
                <p>
                    <strong>Purpose:</strong> Assembly language is a low-level programming language specific to a computer&apos;s architecture.
                </p>
            </div>
        </main>

    );
};

export default page;
