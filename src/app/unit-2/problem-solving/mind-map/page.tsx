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
*[#ff9800] Problem Solving
**[#4caf50] Complex Problems
***[#2196f3] Define and Analyze
***[#f44336] Decompose Problem
***[#ffc107] Identify Potential Plans
***[#8bc34a] Select and Design Best Plan
***[#e91e63] Implement Plan
***[#9e9e9e] Evaluate
**[#03a9f4] Simple Problems
***[#4caf50] Define and Analyze
***[#ffeb3b] Design Plan
***[#ff5722] Implement Plan
***[#9e9e9e] Evaluate
left side
**[#ff5722] Important Considerations
***[#ffc107] Thoroughly Investigate
***[#4caf50] Properly Define and Analyze
***[#2196f3] Ensure Clarity and Specify Objectives
@endmindmap

`;
  const markdownContent = `
  # UML Diagram
  \`\`\`plantuml
  ${umlCode}
  \`\`\`
  `;
  return (
    <div className="p-6 bg-white text-gray-900">
      <h1 className="text-3xl font-bold mb-6">
        2.3 Problem Solving
      </h1>

      <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
  <thead>
    <tr className="bg-gray-100">
      <th className="py-2 px-4 border-b" colSpan={2}>Problem Solving in Computer Science</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="py-2 px-4 border-b font-semibold">Definition</td>
      <td className="py-2 px-4 border-b">Process of analyzing a situation and behaving accordingly to generate a response</td>
    </tr>
    <tr>
      <td className="py-2 px-4 border-b font-semibold">Simple Problem Solving (4 steps)</td>
      <td className="py-2 px-4 border-b">
        1. Define and analyze a problem<br />
        2. Design a plan (Algorithm)<br />
        3. Implement the plan (Code)<br />
        4. Evaluate
      </td>
    </tr>
    <tr>
      <td className="py-2 px-4 border-b font-semibold">Complex Problem Solving (6 steps)</td>
      <td className="py-2 px-4 border-b">
        1. Define and analyze a problem<br />
        2. Decompose the problem<br/>
        3. Identify potential plans for each sub-problem<br/>
        4. Select and design best plan<br/>
        5. Implement that plan<br/>
        6. Evaluate
      </td>
    </tr>
    <tr>
      <td className="py-2 px-4 border-b font-semibold">Important Considerations</td>
      <td className="py-2 px-4 border-b">
        - Thoroughly investigate before acting<br/>
        - Properly define and analyze the problem<br/>
        - Ensure clarity and specify objectives when defining
      </td>
    </tr>
  </tbody>
</table>
      </div>
      <PlantUMLDiagram code={umlCode} />
    </div>
  );
};

export default Page;
