import React from "react";
import MermaidDiagram from "@/components/mermaiddiagram";
import PlantUMLDiagram from "@/components/PlantUMLDiagram";

const HistoryTable = () => {
  const umlCode = `
@startmindmap
*[#Orange] Problems
right side
**[#lightblue] Economic
***[#lightgreen] What to produce?
***[#lightgreen] How to manage limited budgets?
**[#lightblue] Healthcare
***[#lightgreen] How to expand access to medicines?
***[#lightgreen] How to stop infectious diseases?
**[#lightblue] Education
***[#lightgreen] How to increase literacy rate in Pakistan?
***[#lightgreen] What subject areas of education should be focused on more?
left side
**[#lightblue] Transportation
***[#lightgreen] Why is the number of vehicles growing up?
***[#lightgreen] Why are the accidents on motorways increasing?
**[#lightblue] Internet
***[#lightgreen] How to secure mobile banking transactions?
***[#lightgreen] Why do websites show unwanted advertisements?
**[#lightblue] Biology
***[#lightgreen] How do 5G cell phone signals harm humans?
***[#lightgreen] How do trees give earth all its oxygen?
@endmindmap
`;
  
  const markdownContent = `
  # UML Diagram
  \`\`\`plantuml
  ${umlCode}
  \`\`\`
  `;
 

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          Problems
        </h1>

        <section className="mb-16">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b">Field</th>
                    <th className="py-2 px-4 border-b">Problems</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">Economic</td>
                    <td className="py-2 px-4 border-b">
                      <ul className="list-disc pl-5">
                        <li>What to produce?</li>
                        <li>How to manage limited budgets?</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Healthcare</td>
                    <td className="py-2 px-4 border-b">
                      <ul className="list-disc pl-5">
                        <li>How to expand access to medicines?</li>
                        <li>How to stop infectious diseases?</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Education</td>
                    <td className="py-2 px-4 border-b">
                      <ul className="list-disc pl-5">
                        <li>How to increase literacy rate in Pakistan?</li>
                        <li>
                          What subject areas of education should be focused on
                          more?
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Transportation</td>
                    <td className="py-2 px-4 border-b">
                      <ul className="list-disc pl-5">
                        <li>Why is the number of vehicles growing up?</li>
                        <li>Why are the accidents on motorways increasing?</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Internet</td>
                    <td className="py-2 px-4 border-b">
                      <ul className="list-disc pl-5">
                        <li>How to secure mobile banking transactions?</li>
                        <li>Why do websites show unwanted advertisements?</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Biology</td>
                    <td className="py-2 px-4 border-b">
                      <ul className="list-disc pl-5">
                        <li>How do 5G cell phone signals harm humans?</li>
                        <li>How do trees give earth all its oxygen?</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              MindMap
            </h3>
            <PlantUMLDiagram code={umlCode} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HistoryTable;
