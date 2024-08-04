"use client";
import React, { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import PlantUMLDiagram from "@/components/PlantUMLDiagram";

const Page = () => {
  const [zoomLevel2, setZoomLevel2] = useState(1);
  const umlCode = `
@startmindmap
*[#ff9800] Identifying Computing Problems
**[#2196f3] Types of Computing Problems
***[#ffc107] Decision Problems
****[#ffeb3b] Requires binary response (Yes/No, True/False)
****[#ffd54f] Simple or complex
****[#ffe082] Examples
*****[#fff9c4] Is a number odd or even?
*****[#fff59d] Is a number prime?
*****[#fff176] Is "aa" in a sequence of English alphabets?
***[#8bc34a] Search Problems
****[#aed581] Common in science and engineering
****[#c5e1a5] Searches for solutions among a set of objects
****[#dcedc8] Often represented as graphs
****[#f1f8e9] Components
*****[#e8f5e9] Initial State
*****[#c8e6c9] Operations
*****[#a5d6a7] Goal
****[#81c784] Example
*****[#66bb6a] Route Finding Problem (e.g., Google Maps)
***[#e91e63] Counting Problems
****[#f06292] Based on principle of combinations
****[#f48fb1] Total combinations = X * Y
****[#f8bbd0] Examples
*****[#fce4ec] Outfit combinations = (number of shirts) * (number of pants)
*****[#f3e5f5] Complex example: Computer system configurations
left side
**[#4caf50] Definition
***[#66bb6a] Challenge or situation in computer science
***[#81c784] Solved step-by-step using computation
***[#a5d6a7] Well-defined input and desired output properties
**[#9e9e9e] Real-world Applications
***[#3f51b5] Google Maps
****[#5c6bc0] Search problem application
****[#7986cb] Finds optimal routes between locations
***[#4caf50] Computer System Configuration
****[#66bb6a] More complex counting problem
****[#81c784] Example
*****[#a5d6a7] 4 monitors, 2 keyboards, 4 computers, 3 printers
*****[#c8e6c9] Total possible combinations = 4 * 2 * 4 * 3 = 96
**[#ff5722] Problem-Solving Approach
***[#ff7043] Identify problem type
***[#ff8a65] Define inputs and desired outputs
***[#ffab91] Break down into smaller steps
***[#ffccbc] Apply appropriate algorithms
***[#fbe9e7] Verify solution against constraints
@endmindmap
`;

  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    mermaid.contentLoaded();
  }, []);

  return (
    <div className="p-4">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th
              colSpan={2}
              className="text-center py-4 text-lg font-bold border-b"
            >
              Identifying Computing Problems
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={2} className="px-6 py-4 border-b">
              <strong>Definition:</strong> A challenge or situation in computer
              science that needs to be overcome using computation, solved
              step-by-step, usually with well-defined input and desired output
              properties.
            </td>
          </tr>
          <tr>
            <td className="w-1/3 px-6 py-4 border-b font-semibold bg-gray-100">
              Types of Problems
            </td>
            <td className="w-2/3 px-6 py-4 border-b font-semibold bg-gray-100">
              Description and Examples
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 border-b font-medium">
              1. Decision Problems
            </td>
            <td className="px-6 py-4 border-b">
              <ul className="list-disc list-inside space-y-2">
                <li>Requires binary response (Yes/No, True/False)</li>
                <li>Can be simple or complex</li>
                <li>
                  Examples:
                  <ul className="list-disc list-inside pl-5 mt-2 space-y-1">
                    <li>Is a number odd or even?</li>
                    <li>Is a number prime?</li>
                    <li>Is "aa" in a sequence of English alphabets?</li>
                  </ul>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 border-b font-medium">
              2. Search Problems
            </td>
            <td className="px-6 py-4 border-b">
              <ul className="list-disc list-inside space-y-2">
                <li>Common in science and engineering</li>
                <li>Searches for solution among a set of objects</li>
                <li>Often represented as graphs</li>
                <li>
                  Components:
                  <ul className="list-disc list-inside pl-5 mt-2 space-y-1">
                    <li>Initial State</li>
                    <li>Operations</li>
                    <li>Goal</li>
                  </ul>
                </li>
                <li>Example: Route Finding Problem (e.g., Google Maps)</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 border-b font-medium">
              3. Counting Problems
            </td>
            <td className="px-6 py-4 border-b">
              <ul className="list-disc list-inside space-y-2">
                <li>Based on principle of combinations</li>
                <li>
                  If A has X choices and B has Y choices, total combinations = X
                  * Y
                </li>
                <li>
                  Example: Outfit combinations = (number of shirts) * (number of
                  pants)
                </li>
                <li>Complex example: Computer system configurations</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 border-b font-semibold bg-gray-100">
              Problem-Solving Approach
            </td>
            <td className="px-6 py-4 border-b">
              <ol className="list-decimal list-inside space-y-2">
                <li>Identify problem type</li>
                <li>Define inputs and desired outputs</li>
                <li>Break down into smaller steps</li>
                <li>Apply appropriate algorithms</li>
                <li>Verify solution against constraints</li>
              </ol>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="p-4">
        {/* Table content remains the same */}
        <PlantUMLDiagram code={umlCode} />
      </div>
    </div>
  );
};

export default Page;
