// pages/engineering.tsx
import React from 'react';

const page = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">1.7 Notes: Software Engineering and Hardware Engineering</h1>

            <h2 className="text-2xl font-semibold mt-6 mb-2">Software Engineering</h2>
            <p className="mb-4">
                Software Engineering is a systematic approach to the development, operation, and maintenance of software. It involves applying engineering principles to software development, encompassing techniques, methodologies, tools, and processes to ensure the quality, reliability, and efficiency of software systems.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">Common Types of Software Engineering</h3>
            <ul className="list-disc ml-6 mb-4">
                <li>
                    <strong>Application Software Engineering:</strong>
                    <p className="mt-1">Focus: Developing software applications that fulfill specific user requirements. Examples: Web applications, mobile apps, desktop software, etc.</p>
                </li>
                <li>
                    <strong>System Software Engineering:</strong>
                    <p className="mt-1">Focus: Designing and developing software that provides a platform for other software to run on. Examples: Operating systems, compilers, device drivers, etc.</p>
                </li>
                <li>
                    <strong>Embedded Software Engineering:</strong>
                    <p className="mt-1">Focus: Specialized field focusing on developing and testing software embedded within hardware devices or systems. Examples: Automotive Embedded Systems, digital home appliances, industrial control systems, etc.</p>
                </li>
                <li>
                    <strong>Enterprise Software Engineering:</strong>
                    <p className="mt-1">Focus: Developing software solutions for large-scale enterprises to automate processes, manage data, and facilitate communication within the organization.</p>
                </li>
                <li>
                    <strong>Game Development:</strong>
                    <p className="mt-1">Focus: Creating video games, including game engines, graphics, audio, and animation.</p>
                </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">Hardware Engineering</h2>
            <p className="mb-4">
                Hardware Engineering involves designing, developing, and testing the physical components of computer systems and electronic devices. It focuses on the design and construction of hardware components such as processors, memory devices, circuit boards, sensors, etc.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">Common Types of Hardware Engineering</h3>
            <ul className="list-disc ml-6 mb-4">
                <li>
                    <strong>Digital Hardware Engineering:</strong>
                    <p className="mt-1">Focus: Designing and developing digital circuits and components. Examples: Processors, memory units, etc.</p>
                </li>
                <li>
                    <strong>Integrated Circuit (IC) Design:</strong>
                    <p className="mt-1">Focus: Designing integrated circuits, including CPUs (Central Processing Units), GPUs (Graphics Processing Units), etc.</p>
                </li>
                <li>
                    <strong>Computer Architecture:</strong>
                    <p className="mt-1">Focus: Designing the structure and organization of computer systems. Key Aspects: CPU architecture, memory hierarchy, etc.</p>
                </li>
                <li>
                    <strong>Embedded Systems Design:</strong>
                    <p className="mt-1">Focus: Designing hardware systems that are integrated into larger systems or devices. Examples: Microcontrollers, sensors, etc.</p>
                </li>
            </ul>
        </div>
    );
};

export default page;
