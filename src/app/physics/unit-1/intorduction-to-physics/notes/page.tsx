"use client"
import React, { useState } from 'react';
import Head from 'next/head';

const Section = ({ title, content, color }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`mb-4 border-l-4 ${color} pl-4`}>
      <h2
        className="text-xl font-bold cursor-pointer hover:text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title} {isOpen ? '▼' : '▶'}
      </h2>
      {isOpen && <div className="mt-2">{content}</div>}
    </div>
  );
};

export default function PhysicsNotes() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <Head>
        <title>Physics Notes: Introduction to Physics</title>
      </Head>

      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Physical Quantities and Measurement: Introduction to Physics
          </h1>

          <Section
            title="Historical Context"
            content={
              <p>In the 19th century, physical sciences were divided into five disciplines: physics, chemistry, astronomy, geology, and meteorology. Physics is considered the most fundamental.</p>
            }
            color="border-blue-500"
          />

          <Section
            title="Fundamentals of Physics"
            content={
              <ul className="list-disc list-inside">
                <li>Studies matter, energy, and their interactions</li>
                <li>Helps understand nature&apos;s laws and principles</li>
                <li>Foundation for other sciences (e.g., biology, chemistry)</li>
              </ul>
            }
            color="border-green-500"
          />

          <Section
            title="Physics and Technology"
            content={
              <ul className="list-disc list-inside">
                <li>Everyday devices: computers, smartphones, internet</li>
                <li>Advanced tech: rockets, maglev trains, PET scans</li>
                <li>Drives future innovations</li>
              </ul>
            }
            color="border-yellow-500"
          />

          <Section
            title="Major Branches of Physics"
            content={
              <ul className="grid grid-cols-2 gap-2">
                {["Mechanics", "Optics", "Oscillation and Waves", "Thermodynamics", "Electromagnetism", "Astrophysics", "Quantum Physics", "Atomic Physics", "Nuclear Physics"].map((branch, index) => (
                  <li key={index} className="bg-gray-200 rounded p-2 text-center">{branch}</li>
                ))}
              </ul>
            }
            color="border-red-500"
          />

          <Section
            title="Did You Know?"
            content={
              <p className="italic">The cubit, used by Egyptians to build the pyramids, is the measure from your elbow to the tip of your middle finger when your arm is extended.</p>
            }
            color="border-purple-500"
          />

          <Section
            title="The Role of Mathematics in Physics"
            content={
              <p>Physics has a strong connection with mathematics, using it as a tool to understand nature and the physical world. Learning physics requires a solid understanding of mathematical concepts.</p>
            }
            color="border-indigo-500"
          />
        </div>
      </div>
    </div>
  );
}