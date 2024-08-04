import React from "react";

const Page = () => {
  return (
    <body className="bg-gradient-to-r from-blue-100 to-purple-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
          <h1 className="text-3xl font-bold text-white">
            2.8 Methods to Design a Solution
          </h1>
        </div>
        <div className="p-6 space-y-6">
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
              2.8.1 Flowcharts
            </h3>
            <p className="text-gray-600 mb-4">
              A flowchart is a diagrammatic representation of an algorithm. It
              describes what operations are required to solve a given problem.
            </p>
            <div className="bg-blue-100 rounded-lg p-4 mb-4">
              <h4 className="font-semibold mb-2">
                Importance of flowcharts in solving a problem:
              </h4>
              <ul className="list-disc list-inside text-gray-600">
                <li>Illustrates the sequence of operations to be performed</li>
                <li>
                  Provides an easy way to analyze and find solutions to problems
                </li>
                <li>Facilitates writing computer programs</li>
                <li>
                  Helps in communicating the problem-solving method to others
                </li>
              </ul>
            </div>
            <div className="bg-green-100 rounded-lg p-4 mb-4">
              <h4 className="font-semibold mb-2">
                Steps for drawing a flowchart:
              </h4>
              <ol className="list-decimal list-inside text-gray-600">
                <li>Start of the flowchart</li>
                <li>Input to the flowchart</li>
                <li>Type of processing required</li>
                <li>Decision to be taken</li>
                <li>Output of the operation</li>
                <li>End of the flowchart</li>
              </ol>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
              2.8.2 Concept Maps
            </h3>
            <p className="text-gray-600 mb-4">
              A concept map is a graphical tool that represents concepts and
              relationships between them.
            </p>
            <div className="bg-yellow-100 rounded-lg p-4 mb-4">
              <h4 className="font-semibold mb-2">
                Key features of concept maps:
              </h4>
              <ul className="list-disc list-inside text-gray-600">
                <li>Concepts are represented as boxes or circles</li>
                <li>Relationships are shown with lines or arrows</li>
                <li>Lines are labeled with linking words and phrases</li>
                <li>Used to represent connections between concepts</li>
              </ul>
            </div>
            <p className="text-gray-600 mb-4">
              Software tools for concept mapping include CmapTools and Mind
              Manager.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
              Software Tools for Flowchart Designing
            </h3>
            <p className="text-gray-600 mb-4">
              Various software tools are available for designing flowcharts,
              including:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Microsoft Visio</li>
              <li>LARP (Logics of Algorithms and Resolution of Problems)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Key Points Summary
            </h2>
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border p-2 text-left">Principle</th>
                  <th className="border p-2 text-left">Key Aspects</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2 font-semibold">Flowcharts</td>
                  <td className="border p-2">
                    <ul className="list-disc list-inside">
                      <li>Diagrammatic representation of algorithms</li>
                      <li>Illustrates sequence of operations</li>
                      <li>Aids in problem analysis and solution</li>
                      <li>Facilitates program writing and communication</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="border p-2 font-semibold">Concept Maps</td>
                  <td className="border p-2">
                    <ul className="list-disc list-inside">
                      <li>
                        Graphical representation of concepts and relationships
                      </li>
                      <li>Uses boxes/circles for concepts</li>
                      <li>Shows relationships with labeled lines/arrows</li>
                      <li>Helpful for visualizing concept connections</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </body>
  );
};

export default Page;
