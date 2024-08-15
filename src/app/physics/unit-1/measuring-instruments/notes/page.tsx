"use client";

import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "lucide-react";
import Image from 'next/image'
import VernierCaliper from "./VernierCaliper";

interface Tab {
  id: string;
  label: string;
}

const MeasuringInstruments: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("introduction");

  const tabs: Tab[] = [
    { id: "introduction", label: "Introduction" },
    { id: "types", label: "Types of Instruments" },
    { id: "techniques", label: "Measurement Techniques" },
    { id: "concepts", label: "Important Concepts" },
    { id: "importance", label: "Importance in Physics" },
  ];

  const content: Record<string, JSX.Element> = {
    introduction: (
      <div className="space-y-4">
        <p>
          Physics relies on measurements of physical quantities. Measuring
          instruments range from simple (rulers) to complex (AFM, STEM). All
          instruments have measuring limitations.
        </p>
      </div>
    ),
    types: (
      <div className="space-y-6">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span>2.1 Metre Rule and Measuring Tape</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Metre rule: 1 meter long, typically divided into 1000
                    millimeters
                  </li>
                  <li>Least count of standard metre rule: 1 mm</li>
                  <li>
                    Measuring tape: Flexible ruler for larger distances
                    <ul className="list-disc list-inside ml-4">
                      <li>Materials: cloth, plastic, metal, or fiberglass</li>
                      <li>Common units: inches and centimeters</li>
                    </ul>
                  </li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span>2.2 Vernier Caliper</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <ul className="list-disc list-inside space-y-2">
                  <li>Measures lengths smaller than 1 mm</li>
                  <li>
                    Components:
                    <ul className="list-disc list-inside ml-4">
                      <li>Main scale (usually 1 mm divisions)</li>
                      <li>Sliding vernier scale</li>
                    </ul>
                  </li>
                  <li>
                    Least count = Smallest division on main scale / Total
                    divisions on vernier scale
                  </li>
                  <li>Typical least count: 0.1 mm</li>
                  <li>
                    Can measure thickness, diameter, and width of objects,
                    including internal and external diameters
                  </li>
                </ul>
                <VernierCaliper />
                <Image src="/vernier-calliper-1.jpg" alt="Vernier Caliper Full Image" width={500} height={500} />
                <Image src="/12362_Physics_62acc202e519b90dffc2272b_EL_Vernier_Caliper-22_065473.jpg_img_upload_solution_2022-09-21 17_50_30.486372.png" alt="Vernier Caliper" width={500} height={500} />
                <Image src="/original_9.png" alt="Vernier Caliper Error" width={500} height={500} />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span>2.3 Screw Gauge</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <ul className="list-disc list-inside space-y-2">
                  <li>Measures even smaller lengths than vernier caliper</li>
                  <li>
                    Key terms:
                    <ul className="list-disc list-inside ml-4">
                      <li>
                        Pitch: Distance traveled by circular scale on linear
                        scale in one rotation
                      </li>
                      <li>
                        Least count = Pitch / Total divisions on circular scale
                      </li>
                    </ul>
                  </li>
                  <li>Typical least count: 0.01 mm</li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span>2.4 Physical Balance</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <ul className="list-disc list-inside space-y-2">
                  <li>Sensitive balance for measuring mass in milligrams</li>
                  <li>
                    Components:
                    <ul className="list-disc list-inside ml-4">
                      <li>Vertical pillar with horizontal beam</li>
                      <li>Two pans</li>
                      <li>Pointer attached to beam</li>
                      <li>Leveling screws and adjusting screws</li>
                    </ul>
                  </li>
                  <li>Housed in a protective glass case</li>
                  <li>Uses standard weights for comparison</li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span>2.5 Measuring Cylinder</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Used to measure volume of liquids, chemicals, or solutions
                  </li>
                  <li>Also known as graduated cylinder</li>
                  <li>Materials: transparent plastic or glass</li>
                  <li>Scale in milliliters (ml) or cubic centimeters (cm³)</li>
                  <li>Typical least count: 1 cm³</li>
                  <li>Various sizes available</li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span>2.6 Stopwatch</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <ul className="list-disc list-inside space-y-2">
                  <li>Measures duration of time intervals</li>
                  <li>
                    Types:
                    <ul className="list-disc list-inside ml-4">
                      <li>
                        Mechanical/Analogue:
                        <ul className="list-disc list-inside ml-4">
                          <li>Two circular dials (seconds and minutes)</li>
                          <li>Controlled by a knob</li>
                        </ul>
                      </li>
                      <li>
                        Digital:
                        <ul className="list-disc list-inside ml-4">
                          <li>
                            Controlled by two buttons (start/stop and reset)
                          </li>
                          <li>Can record split times or lap times</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    ),
    techniques: (
      <div className="space-y-4">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span>3.1 Vernier Caliper</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <ol className="list-decimal list-inside space-y-2">
                  <li>Note least count and check for zero error</li>
                  <li>Fix object between jaws</li>
                  <li>Take main scale reading</li>
                  <li>Take vernier scale reading</li>
                  <li>Calculate final measurement</li>
                </ol>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span>3.2 Screw Gauge</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                <ol className="list-decimal list-inside space-y-2">
                  <li>Note pitch, least count, and zero error</li>
                  <li>Place object between spindle and anvil</li>
                  <li>Use ratchet to close gap gently</li>
                  <li>Read main scale</li>
                  <li>Read circular scale</li>
                  <li>
                    Add main and circular scale readings for total measurement
                  </li>
                </ol>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    ),
    concepts: (
      <div className="space-y-4">
        <ul className="list-disc list-inside space-y-2">
          <li>
            Least count: Minimum value measurable on an instrument&apos;s scale
          </li>
          <li>
            Zero error: When the zero of the vernier scale doesn&apos;t coincide
            with the zero of the main scale
          </li>
          <li>
            Precision comparison: Screw gauge (0.01 mm) &gt; Vernier caliper
            (0.1 mm) &gt; Ruler (1 mm)
          </li>
        </ul>
        <h3 className="text-lg font-semibold mt-4">Points to Ponder</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Limitations of metre rule for measurements smaller than 1 mm</li>
          <li>
            Choice between vernier caliper and screw gauge for specific
            measurements (e.g., page thickness, beaker diameter)
          </li>
        </ul>
      </div>
    ),
    importance: (
      <div className="space-y-4">
        <ul className="list-disc list-inside space-y-2">
          <li>
            Essential for accurate measurements in various experiments and
            applications
          </li>
          <li>Each instrument has specific purposes and limitations</li>
          <li>
            Understanding these instruments is crucial for conducting precise
            scientific investigations
          </li>
        </ul>
      </div>
    ),
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <h1 className="text-3xl font-bold leading-6 text-gray-900">
            Measuring Instruments in Physics
          </h1>
        </div>
        <div className="border-t border-gray-200">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === tab.id
                    ? "text-blue-700 border-b-2 border-blue-700"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="px-4 py-5 sm:px-6">{content[activeTab]}</div>
        </div>
      </div>
    </div>
  );
};

export default MeasuringInstruments;
