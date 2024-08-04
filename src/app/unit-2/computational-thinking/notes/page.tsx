import React from "react";

const ComputationalThinkingNotes = () => {
  return (
    <body className="bg-gradient-to-r from-blue-100 to-purple-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
          <h1 className="text-3xl font-bold text-white">
            Computational Thinking
          </h1>
        </div>
        <div className="p-6 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              2.6 Computational Thinking
            </h2>
            <p className="text-gray-600">
              Using computation to solve problems requires the ability to think in a certain way, which is often referred to as &apos;computational thinking&apos;.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              2.6.1 Importance of Computational Thinking
            </h2>
            <div className="bg-blue-100 rounded-lg p-4">
              <ul className="list-disc list-inside space-y-2">
                <li>Encourages clear reflection on problems</li>
                <li>Helps define repeatable solutions</li>
                <li>Aims for automated systems to solve similar problem instances</li>
                <li>Can be thought of as an extension of logical thinking</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              2.6.2 Properties of Computational Thinking
            </h2>
            <div className="bg-green-100 rounded-lg p-4">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Decomposition:</strong> Breaking down the larger problems into smaller, manageable ones and working on them one by one. These smaller problems are referred to as sub-problems. This way we simplify the problem and solve it easily.
                </li>
                <li>
                  <strong>Abstraction:</strong> Removing the unnecessary details to solution, so you could be able to identify essential information.
                </li>
                <li>
                  <strong>Pattern Recognition:</strong> Examine the problem for a pattern or similarities between previously solved problems.
                </li>
                <li>
                  <strong>Algorithm Design:</strong> This is actual designing of solution. This involves creating step-by-step plan of the problem solution.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Example: Creating a Computer Game
            </h2>
            <div className="bg-yellow-100 rounded-lg p-4">
              <p className="text-gray-600 mb-2">
                If you want to create your own computer game, here&apos;s how these properties of computational thinking would apply:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Decomposition:</strong> where to go, how to complete the level
                </li>
                <li>
                  <strong>Abstraction:</strong>
                  <ul className="list-disc list-inside ml-4">
                    <li>Necessary Information: location of exit, where is enemy, etc.</li>
                    <li>Unnecessary Information: weather</li>
                  </ul>
                </li>
                <li>
                  <strong>Pattern recognition:</strong> Six enemies should be handled like a single enemy.
                </li>
                <li>
                  <strong>Algorithm Design:</strong> step by step plan of action e.g. movement
                </li>
              </ul>
            </div>
          </section>

          <section>
            <div className="bg-purple-100 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Tip</h3>
              <p className="text-gray-600">
                Before You Learn Programming, Understand Computational Thinking.
              </p>
            </div>
          </section>
        </div>
      </div>
    </body>
  );
};

export default ComputationalThinkingNotes;