import React from "react";

const Page = () => {
  return (
    <div className="bg-gray-100 text-gray-900 font-sans p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          Problem Solving in Computer Science
        </h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Definition</h2>
          <p className="text-gray-700">
            Problem solving is the process of analyzing a situation and behaving
            accordingly to generate a response.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            Simple Problem Solving Process (4 steps)
          </h2>
          <ol className="list-decimal list-inside text-gray-700">
            <li>
              <strong>Define and analyze a problem:</strong> Identify what the
              problem is and why it&apos;s happening.
            </li>
            <li>
              <strong>Design a plan:</strong> Determine the algorithm or
              approach to solve the problem.
            </li>
            <li>
              <strong>Implement the plan:</strong> Code the solution using a
              programming language.
            </li>
            <li>
              <strong>Evaluate:</strong> Assess if the plan worked as intended.
            </li>
          </ol>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            Complex Problem Solving Process (6 steps)
          </h2>
          <ol className="list-decimal list-inside text-gray-700">
            <li>
              <strong>Define and analyze a problem</strong>
            </li>
            <li>
              <strong>Decompose the problem:</strong> Break it down into
              manageable sub-problems.
            </li>
            <li>
              <strong>Identify potential plans for each sub-problem:</strong>{" "}
              Develop multiple approaches (e.g., plan A, plan B, plan C).
            </li>
            <li>
              <strong>Select and design the best plan</strong>
            </li>
            <li>
              <strong>Implement that plan</strong>
            </li>
            <li>
              <strong>Evaluate</strong>
            </li>
          </ol>
        </section>

        <section className="important-considerations">
          <h2 className="text-xl font-semibold mb-2">Important Considerations</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              Before taking action, thoroughly investigate the problem to
              capture all relevant aspects.
            </li>
            <li>Properly define and analyze the problem.</li>
            <li>
              When defining a problem, ensure clarity and specify the
              objectives.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Page;
