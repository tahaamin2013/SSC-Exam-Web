import React from "react";
import { ArrowRightIcon, LightbulbIcon, CodeIcon } from "lucide-react";

const PrinciplesOfComputationThinking = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 sm:p-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white text-center">
            2.7 Principles of Computational Thinking
          </h1>
        </div>
        <div className="p-6 sm:p-10 space-y-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Abstraction is a technique used in computational thinking to
            simplify complex systems by focusing on the essential features and
            ignoring the irrelevant details. It involves creating a simplified
            model of a complex system that highlights its important aspects
            while hiding the unnecessary complexities.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 flex items-center">
              <LightbulbIcon className="w-8 h-8 mr-2 text-yellow-500" />
              2.7.1 Logical Thinking
            </h2>
            <p className="text-gray-700">
              Logical thinking refers to analyzing a particular situation or
              problem using reason and accordingly reaching up to one or more
              decisions that are sensible. The situation analysis requires
              gathering of relevant facts and then deciding the best way based
              on the reasons.
            </p>
            <div className="bg-yellow-100 rounded-lg p-6 border-l-4 border-yellow-500">
              <h3 className="font-semibold text-xl mb-2">Example:</h3>
              <p className="mb-2">
                You enter your home and see water on the floor. What do you
                think has happened?
              </p>
              <p className="italic">
                To solve such problems, you need reasoning skills that are based
                on evidence and facts.
              </p>
            </div>
            <p className="text-gray-700">
              One of the fundamental parts of computational thinking is to think
              logically. The computers use logic in their computation but it
              does not mean that they think logically. The computers themselves
              can&apos;t perform logical thinking unless they are programmed to
              do so. By developing the ability to align problem-solving with
              technology and focusing on the process as well as the outcome, we
              can enhance our computational thinking skills.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 flex items-center">
              <CodeIcon className="w-8 h-8 mr-2 text-blue-500" />
              2.7.2 Algorithmic Thinking
            </h2>
            <p className="text-gray-700">
              Algorithmic thinking is about problem-solving. Computers do
              nothing by magic; algorithmic thinking is a way of getting to a
              solution. It is a process that involves identifying the steps
              needed and then implementing those steps in a logical and
              efficient manner. It is a way of thinking that involves breaking
              down complex problems into smaller, manageable parts and then
              solving those parts one at a time.
            </p>
            <div className="bg-green-100 rounded-lg p-6 border-l-4 border-green-500">
              <p className="font-semibold text-green-800">
                By developing algorithmic thinking skills, you can become a
                better problem solver.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-xl shadow-lg overflow-hidden">
              <div className="bg-indigo-600 p-4">
                <h3 className="text-2xl font-bold text-white text-center">
                  Algorithmic Thinking Table
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6">
                {["Input", "Process", "Output"].map((header, index) => (
                  <div key={header} className="space-y-2">
                    <h4 className="text-lg font-semibold text-indigo-600">
                      {header}
                    </h4>
                    <div className="bg-white rounded-lg p-4 h-full shadow-md">
                      {index === 0 && (
                        <>
                          <p className="font-medium">Three Numbers</p>
                          <p className="text-sm text-gray-600">
                            (e.g., 15, 7, 22)
                          </p>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <p className="font-medium">
                            Find largest among the three numbers
                          </p>
                          <ol className="list-decimal list-inside text-sm text-gray-600 mt-2 space-y-1">
                            <li>Compare first two numbers</li>
                            <li>Compare result with third number</li>
                            <li>Determine the largest</li>
                          </ol>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <p className="font-medium">Display largest number</p>
                          <p className="text-sm text-gray-600">(e.g., 22)</p>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800">
                Algorithm for Finding the Largest Number
              </h3>
              <div className="space-y-2 pl-4 border-l-2 border-red-500">
                {[
                  "Let three numbers be A=10, B=20 and C=30",
                  "Check if A is the largest?",
                  "Check if A > B and A > C then A is the largest.",
                  "If A is largest then Stop the process, otherwise proceed to next step.",
                  "Check if B is largest?",
                  "Check if B > A and B > C then B is the largest.",
                  "If B is largest then Stop the process, otherwise proceed to next step.",
                  "C is largest"
                ].map((step, index) => (
                  <p key={index} className="flex items-start">
                    <ArrowRightIcon className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-1" />
                    <span>{step}</span>
                  </p>
                ))}
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
              Key Points Summary
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border p-3 text-left">Principle</th>
                    <th className="border p-3 text-left">Key Aspects</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3 font-semibold">Logical Thinking</td>
                    <td className="border p-3">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Analyze situations using reason</li>
                        <li>Gather relevant facts</li>
                        <li>Make evidence-based decisions</li>
                        <li>Align problem-solving with technology</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-3 font-semibold">
                      Algorithmic Thinking
                    </td>
                    <td className="border p-3">
                      <ul className="list-disc list-inside space-y-1">
                        <li>Identify steps for problem-solving</li>
                        <li>Implement steps logically and efficiently</li>
                        <li>Break down complex problems</li>
                        <li>Solve problems step by step</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrinciplesOfComputationThinking;