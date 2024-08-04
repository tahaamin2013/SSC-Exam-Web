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
    BackgroundColor pink
  }
  :depth(2) {
    BackgroundColor lightyellow
  }
  :depth(3) {
    BackgroundColor lightblue
  }
  :depth(4) {
    BackgroundColor plum
  }
}
</style>
* Computational Thinking
** Definition
*** Using computation to solve problems
*** Requires specific thinking approach
** Properties
*** Decomposition
**** Breaking down larger problems
**** Working on sub-problems
**** Simplifies problem-solving
*** Abstraction
**** Removing unnecessary details
**** Identifying essential information
*** Pattern Recognition
**** Examining for similarities
**** Comparing to solved problems
*** Algorithm Design
**** Creating step-by-step plans
**** Designing problem solutions
left side
** Importance
*** Clear problem reflection
*** Repeatable solutions
*** Automated problem-solving
*** Extension of logical thinking
** Application Example
*** Computer Game Creation
**** Decomposition
***** Determine game progression
***** Level completion strategy
**** Abstraction
***** Necessary: Exit and enemy locations
***** Unnecessary: Weather conditions
**** Pattern Recognition
***** Treat multiple enemies as one entity
**** Algorithm Design
***** Step-by-step movement plan
@endmindmap
`;

  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Computational Thinking
          </h1>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="w-1/4 text-left py-3 px-4 uppercase font-semibold text-sm">
                    Concept
                  </th>
                  <th className="w-3/4 text-left py-3 px-4 uppercase font-semibold text-sm">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="highlight">
                  <td className="w-1/4 text-left py-3 px-4 border-b border-gray-200">
                    Computational Thinking
                  </td>
                  <td className="w-3/4 text-left py-3 px-4 border-b border-gray-200">
                    Problem-solving approach using computation
                  </td>
                </tr>
                <tr>
                  <td className="w-1/4 text-left py-3 px-4 border-b border-gray-200">
                    Importance
                  </td>
                  <td className="w-3/4 text-left py-3 px-4 border-b border-gray-200">
                    Encourages clear thinking, repeatable solutions, and
                    automation
                  </td>
                </tr>
                <tr className="highlight">
                  <td className="w-1/4 text-left py-3 px-4 border-b border-gray-200">
                    Decomposition
                  </td>
                  <td className="w-3/4 text-left py-3 px-4 border-b border-gray-200">
                    Breaking problems into smaller, manageable parts
                  </td>
                </tr>
                <tr>
                  <td className="w-1/4 text-left py-3 px-4 border-b border-gray-200">
                    Abstraction
                  </td>
                  <td className="w-3/4 text-left py-3 px-4 border-b border-gray-200">
                    Removing unnecessary details, focusing on essential
                    information
                  </td>
                </tr>
                <tr className="highlight">
                  <td className="w-1/4 text-left py-3 px-4 border-b border-gray-200">
                    Pattern Recognition
                  </td>
                  <td className="w-3/4 text-left py-3 px-4 border-b border-gray-200">
                    Identifying similarities with previously solved problems
                  </td>
                </tr>
                <tr>
                  <td className="w-1/4 text-left py-3 px-4 border-b border-gray-200">
                    Algorithm Design
                  </td>
                  <td className="w-3/4 text-left py-3 px-4 border-b border-gray-200">
                    Creating step-by-step problem solutions
                  </td>
                </tr>
                <tr className="highlight">
                  <td className="w-1/4 text-left py-3 px-4">
                    Application in Game Design
                  </td>
                  <td className="w-3/4 text-left py-3 px-4">
                    Applies all properties to create game mechanics and
                    structure
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <PlantUMLDiagram code={umlCode} />
      </div>
    </div>
  );
};

export default Page;
