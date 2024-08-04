"use client";
import React, { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import PlantUMLDiagram from "@/components/PlantUMLDiagram";

const Page = () => {
  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    mermaid.contentLoaded();
  }, []);

  const umlCode = `
@startmindmap
<style>
mindmapDiagram {
  node {
    BackgroundColor lightGreen
    FontColor black
    FontSize 14
  }
  :depth(1) {
    BackgroundColor lightBlue
  }
  :depth(2) {
    BackgroundColor pink
  }
  :depth(3) {
    BackgroundColor lightyellow
  }
  arrow {
    LineColor navy
  }
}
</style>
* Input-Processing-Output (I-P-O) Chart
** Input
*** Data entered in the system
*** Examples
**** Rectangle: Length & Width
**** Student Grades: Grade 1, 2, 3
** Process
*** Operations applied on input
*** Examples
**** Area = Length * Width
**** Sum grades, Divide by count
** Output
*** Data turned into information
*** Examples
**** Rectangle Area
**** Student Grade Average
left side
** Usage
*** Software designers
*** System analysis
** Components
*** Input column
*** Process column
*** Output column
** Benefits
*** Clear representation
*** Helps in system design
*** Simplifies complex processes
** Purpose
*** Visually represent IPO model
*** Handy tool for problem-solving
@endmindmap
`;
  return (
    <div className="max-w-4xl mx-auto my-20">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        2.5 Input-Processing-Output (I-P-O) Chart
      </h1>

      <div className="my-2 flex flex-col gap-8">
        <h1 className="text-xl font-bold">Overview</h1>

        <p>
          IPO charts visually represent the Inputs, Process, and Output in
          tabular form. They are considered a handy tool that software designers
          use to solve problems.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <table className="w-full border-collapse">
          <thead className="bg-green-500 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Input</th>
              <th className="py-3 px-4 text-left">Process</th>
              <th className="py-3 px-4 text-left">Output</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3 px-4">Data entered in the system</td>
              <td className="py-3 px-4">
                Operations that will be applied on the input
              </td>
              <td className="py-3 px-4">
                Data that has been turned into information
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <table className="w-full border-collapse">
          <thead className="bg-yellow-500 text-white">
            <tr>
              <th className="py-3 px-4 text-left" colSpan={2}>
                Example 1: Computing Rectangle Area
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-3 px-4 font-semibold">Input:</td>
              <td className="py-3 px-4">Length and Width of the rectangle</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4 font-semibold">Process:</td>
              <td className="py-3 px-4">Area = Length * Width</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-semibold">Output:</td>
              <td className="py-3 px-4">Area of the rectangle</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <table className="w-full border-collapse">
          <thead className="bg-purple-500 text-white">
            <tr>
              <th className="py-3 px-4 text-left" colSpan={2}>
                Example 2: Calculate Student&apos;s Average
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-3 px-4 font-semibold">Inputs:</td>
              <td className="py-3 px-4">Grade 1, Grade 2, Grade 3</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4 font-semibold">Process:</td>
              <td className="py-3 px-4">
                1. Sum all grades
                <br />
                2. Divide sum by number of grades
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-semibold">Output:</td>
              <td className="py-3 px-4">Student grade average</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-red-500 text-white">
            <tr>
              <th className="py-3 px-4 text-left" colSpan={2}>
                Key Points Summary
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-3 px-4 font-semibold">Purpose</td>
              <td className="py-3 px-4">Visually represent the IPO model</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4 font-semibold">Usage</td>
              <td className="py-3 px-4">
                Software designers use it to solve problems
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4 font-semibold">Input</td>
              <td className="py-3 px-4">Data entered into the system</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4 font-semibold">Process</td>
              <td className="py-3 px-4">Operations applied to the input</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-semibold">Output</td>
              <td className="py-3 px-4">Resulting information for the user</td>
            </tr>
          </tbody>
        </table>
      </div>

      <PlantUMLDiagram code={umlCode} />
    </div>
  );
};

export default Page;
