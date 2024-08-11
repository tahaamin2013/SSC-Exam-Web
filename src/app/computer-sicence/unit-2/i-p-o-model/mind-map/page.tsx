"use client";
import PlantUMLDiagram from "@/components/PlantUMLDiagram";

const Page = () => {
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
    BackgroundColor pink
  }
}
</style>
* Input-Processing-Output (I-P-O) Model
** Usage
*** Visual representation
*** Problem-solving tool
*** Used by software designers
** Process
*** Operations applied on input
*** Example: Area calculation
*** Example: Average calculation
left side
** Input
*** Data entered in the system
*** Example: Length, Width
*** Example: Grades
** Output
*** Data turned into information
*** Example: Rectangle area
*** Example: Student grade average
@endmindmap
`;
  return (
    <div className="p-6 bg-white text-gray-900">
      <h1 className="text-3xl font-bold mb-6">2.4 I-P-O Model Table</h1>

      <div className="overflow-x-auto mb-8">
        <div className="mb-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Input-Processing-Output (I-P-O) Chart Summary
            </h1>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="w-full border-collapse">
                <thead className="bg-blue-500 text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Aspect</th>
                    <th className="py-3 px-4 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-semibold">Purpose</td>
                    <td className="py-3 px-4">
                      Visually represent the IPO model
                    </td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="py-3 px-4 font-semibold">Usage</td>
                    <td className="py-3 px-4">
                      Software designers use it to solve problems
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-semibold">Input</td>
                    <td className="py-3 px-4">Data entered into the system</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="py-3 px-4 font-semibold">Process</td>
                    <td className="py-3 px-4">
                      Operations applied to the input
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold">Output</td>
                    <td className="py-3 px-4">
                      Resulting information for the user
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <PlantUMLDiagram code={umlCode} />
    </div>
  );
};

export default Page;
