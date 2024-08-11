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
  }
  :depth(1) {
    BackgroundColor lightBlue
  }
  :depth(2) {
    BackgroundColor lightYellow
  }
  :depth(3) {
    BackgroundColor lightPink
  }
}
</style>
* Computational Thinking
** Logical Thinking
*** Analyze situations
*** Use reason
*** Gather facts
*** Make decisions
*** Evidence-based reasoning
left side
** Algorithmic Thinking
*** Problem-solving
*** Step identification
*** Efficient implementation
*** Break down complex problems
*** Solve parts one at a time
@endmindmap
`;
  return (
    <div>
      <div className="container mx-auto p-4">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Principle</th>
              <th className="border border-gray-300 p-2">Description</th>
              <th className="border border-gray-300 p-2">Key Points</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2 font-semibold">
                Logical Thinking
              </td>
              <td className="border border-gray-300 p-2">
                Analyzing situations or problems using reason to reach sensible
                decisions
              </td>
              <td className="border border-gray-300 p-2">
                <ul className="list-disc list-inside">
                  <li>Gather relevant facts</li>
                  <li>Decide based on reasons</li>
                  <li>Use evidence-based reasoning</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 font-semibold">
                Algorithmic Thinking
              </td>
              <td className="border border-gray-300 p-2">
                A problem-solving approach that involves identifying and
                implementing steps in a logical and efficient manner
              </td>
              <td className="border border-gray-300 p-2">
                <ul className="list-disc list-inside">
                  <li>Break down complex problems</li>
                  <li>Solve problems step by step</li>
                  <li>Improve problem-solving skills</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <PlantUMLDiagram code={umlCode} />
      </div>
    </div>
  );
};

export default Page;
