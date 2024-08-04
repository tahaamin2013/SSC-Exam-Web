import React from 'react';

const Page = () => {
  return (
    <body className="bg-gradient-to-r from-blue-100 to-purple-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
          <h1 className="text-3xl font-bold text-white">2.7 Principles of Computational Thinking</h1>
        </div>
        <div className="p-6 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">2.7.1 Logical Thinking</h2>
            <p className="text-gray-600 mb-4">
              Logical thinking refers to analyzing a particular situation or problem using reason and accordingly reaching up to one or more decisions that are sensible. The situation analysis requires gathering of relevant facts and then deciding the best way based on the reasons.
            </p>
            <div className="bg-yellow-100 rounded-lg p-4 mb-4">
              <h3 className="font-semibold mb-2">Example:</h3>
              <p>You enter your home and see water on the floor. What do you think has happened?</p>
              <p className="mt-2">To solve such problems, you need reasoning skills that are based on evidence and facts.</p>
            </div>
            <p className="text-gray-600">
              One of the fundamental parts of computational thinking is to think logically. The computers use logic in their computation but it does not mean that they think logically. The computers themselves can't perform logical thinking unless they are programmed to do so. By developing the ability to align problem-solving with technology and focusing on the process as well as the outcome, we can enhance our computational thinking skills.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">2.7.2 Algorithmic Thinking</h2>
            <p className="text-gray-600 mb-4">
              Algorithmic thinking is about problem-solving. Computers do nothing by magic; algorithmic thinking is a way of getting to a solution. It is a process that involves identifying the steps needed and then implementing those steps in a logical and efficient manner. It is a way of thinking that involves breaking down complex problems into smaller, manageable parts and then solving those parts one at a time.
            </p>
            <div className="bg-green-100 rounded-lg p-4">
              <p className="font-semibold">By developing algorithmic thinking skills, you can become a better problem solver.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Key Points Summary</h2>
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border p-2 text-left">Principle</th>
                  <th className="border p-2 text-left">Key Aspects</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2 font-semibold">Logical Thinking</td>
                  <td className="border p-2">
                    <ul className="list-disc list-inside">
                      <li>Analyze situations using reason</li>
                      <li>Gather relevant facts</li>
                      <li>Make evidence-based decisions</li>
                      <li>Align problem-solving with technology</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="border p-2 font-semibold">Algorithmic Thinking</td>
                  <td className="border p-2">
                    <ul className="list-disc list-inside">
                      <li>Identify steps for problem-solving</li>
                      <li>Implement steps logically and efficiently</li>
                      <li>Break down complex problems</li>
                      <li>Solve problems step by step</li>
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
}

export default Page;