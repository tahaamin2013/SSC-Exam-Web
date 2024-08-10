import React from "react";
import PlantUMLDiagram from "@/components/PlantUMLDiagram";

const umlCode = `
@startmindmap
* Science, Technology & Engineering
left side
** Science
*** Pursuit of knowledge
**** Through Systematic study
*** Example
**** Physics: Study of motion and energy
** Technology
*** Application of scientific knowledge
**** To develop tools for practical use
**** To develop systems for practical use
*** Example
**** Smartphone development
right side
** Engineering
*** Creatively uses scientific and math knowledge
**** to design and build solutions to real-world problems
*** Example
**** Civil engineering: Infrastructure design
** Interconnection
*** Scientific advances lead to technological innovations
*** Engineers use scientific knowledge
*** New technologies drive further scientific exploration
@endmindmap
`;

const ScienceTechnologyEngineeringComponent = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-8 px-4">
      <div className="bg-white items-center flex flex-col p-8 rounded-lg shadow-lg max-w-4xl w-full mb-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Science, Technology, and Engineering
        </h1>
        <PlantUMLDiagram code={umlCode} />
      </div>

      <div className="max-w-4xl mx-auto">
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            1. Branch of Physics Studying Materials and Their Electronic
            Properties:
          </h2>
          <p className="mb-4">
            The branch of physics that primarily deals with the study of
            materials and their electronic properties is{" "}
            <strong>Solid State Physics</strong>, which is often considered a
            subfield of <strong>Condensed Matter Physics</strong>. This field is
            indeed foundational to the development of microchips and processors
            used in smartphones.
          </p>
          <p className="mb-4">
            <strong>Solid State Physics</strong> focuses on:
          </p>
          <ul className="list-disc list-inside ml-6 space-y-2">
            <li>The electronic structure of materials</li>
            <li>Electrical, magnetic, and optical properties of solids</li>
            <li>Semiconductor physics</li>
            <li>Quantum behavior in solid materials</li>
          </ul>
          <p className="mt-4">
            This field laid the groundwork for the development of transistors,
            integrated circuits, and other semiconductor devices that are
            crucial for modern electronics, including smartphones.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            2. Branch of Engineering for Designing Electronic Components:
          </h2>
          <p className="mb-4">
            The branch of engineering that focuses on designing and developing
            electronic circuits, communication systems, and power supplies for
            smartphones is <strong>Electrical Engineering</strong>, specifically
            the subfield of <strong>Electronic Engineering</strong>.
          </p>
          <p className="mb-4">
            <strong>Electronic Engineering</strong> involves:
          </p>
          <ul className="list-disc list-inside ml-6 space-y-2">
            <li>Design of integrated circuits</li>
            <li>
              Development of communication systems (e.g., wireless technologies)
            </li>
            <li>Power management systems</li>
            <li>Signal processing</li>
            <li>Embedded systems design</li>
          </ul>
          <p className="mt-4">
            Electronic engineers play a crucial role in developing the hardware
            components that make smartphones function.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            3. Technology That Developed Smartphones:
          </h2>
          <p className="mb-4">
            Smartphones weren&apos;t developed by a single technology, but rather
            through the convergence of multiple technologies and innovations.
            Key technologies include:
          </p>
          <ul className="list-disc list-inside ml-6 space-y-2">
            <li>Mobile computing: Miniaturization of computer components</li>
            <li>Wireless communication: Cellular networks, Wi-Fi, Bluetooth</li>
            <li>Touchscreen technology: Capacitive touch sensing</li>
            <li>Battery technology: Lithium-ion batteries</li>
            <li>Operating systems: iOS, Android</li>
            <li>App ecosystems: App stores and development platforms</li>
            <li>Internet technologies: Mobile web browsers, cloud computing</li>
            <li>Sensor technologies: GPS, accelerometers, gyroscopes</li>
          </ul>
          <p className="mt-4">
            The development of smartphones has been an evolutionary process,
            building on advances in these various fields. The first widely
            recognized smartphone, the iPhone, was introduced by Apple in 2007,
            but it built upon earlier attempts at combining mobile phones with
            computer-like functionality.
          </p>
          <p className="mt-4">
            It&apos;s worth noting that while these specific fields (Solid State
            Physics, Electronic Engineering) and technologies were crucial, the
            development of smartphones has been a highly interdisciplinary
            effort, involving contributions from many areas of science,
            engineering, and design.
          </p>
        </section>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h2 className="text-2xl font-bold mb-4">Comparison Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Aspect</th>
                <th className="border p-2">Science</th>
                <th className="border p-2">Technology</th>
                <th className="border p-2">Engineering</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2 font-semibold">Definition</td>
                <td className="border p-2">
                  System of knowledge concerned with establishing accurate
                  conclusions about the behavior of everything in the universe
                </td>
                <td className="border p-2">
                  Field that uses scientific knowledge to develop material
                  products or processes that satisfy human needs and desires
                </td>
                <td className="border p-2">
                  Practical use of scientific and mathematical principles to
                  create and construct structures, devices, and processes
                </td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Focus</td>
                <td className="border p-2">
                  Pursuit of knowledge and understanding
                </td>
                <td className="border p-2">
                  Application of scientific knowledge for practical purposes
                </td>
                <td className="border p-2">Solving real-world problems</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Methods</td>
                <td className="border p-2">
                  Systematic study, experimentation, and observation
                </td>
                <td className="border p-2">
                  Creation and use of tools, machines, systems, and techniques
                </td>
                <td className="border p-2">
                  Application of knowledge in a creative and organized manner
                </td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Example</td>
                <td className="border p-2">
                  Studying principles of motion and energy in physics
                </td>
                <td className="border p-2">Development of smartphones</td>
                <td className="border p-2">
                  Designing and building infrastructure like bridges and roads
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ScienceTechnologyEngineeringComponent;
