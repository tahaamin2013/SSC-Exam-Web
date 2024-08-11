import React from "react";

const Page = () => {
  return (
    <div className="bg-gray-100 text-gray-900 font-sans">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">
          Identifying Computing Problems
        </h1>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-2">Definition</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              In computer science, a computing problem is a challenge or
              situation that needs to be overcome using computation.
            </li>
            <li>It is solved step-by-step using computation.</li>
            <li>
              Can include any type of calculation such as arithmetical or
              logical.
            </li>
            <li>
              Usually has a well-defined input and some desired properties that
              output must satisfy.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-2">
            Types of Computing Problems
          </h2>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">
              1. Decision Problems
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Requires a binary response (Yes/No, True/False)</li>
              <li>
                Can be simple or complex, involving multiple decision factors
                and criteria
              </li>
              <li>
                Examples:
                <ul className="list-disc list-inside pl-5 mt-2 space-y-1">
                  <li>Determining if a given number is odd or even</li>
                  <li>Checking if a given number is prime</li>
                  <li>
                    Finding if there&apos;s any occurrence of &quot;aa&quot; in a sequence of
                    English alphabets
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">2. Search Problems</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Common in science and engineering</li>
              <li>Involves searching for a solution among a set of objects</li>
              <li>Often represented using graphs with nodes and links</li>
              <li>
                Key components:
                <ul className="list-disc list-inside pl-5 mt-2 space-y-1">
                  <li>Initial State: Starting point of the search</li>
                  <li>Operations: Moves to transition between nodes</li>
                  <li>Goal: Target or end condition</li>
                </ul>
              </li>
              <li>
                Example: Route Finding Problem
                <ul className="list-disc list-inside pl-5 mt-2 space-y-1">
                  <li>
                    Finding a path between two cities in a graph representing a
                    map
                  </li>
                  <li>
                    Nodes represent cities, links represent routes between
                    cities
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">
              3. Counting Problems
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Based on the principle of combinations</li>
              <li>
                If event A has X choices and event B has Y choices, total
                possible combinations = X * Y
              </li>
              <li>
                Example:
                <ul className="list-disc list-inside pl-5 mt-2 space-y-1">
                  <li>
                    Calculating possible outfit combinations from a set of
                    shirts and pants
                  </li>
                  <li>
                    Solution: Total combinations = (number of shirts) * (number
                    of pants)
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-2">
            Real-world Applications
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Google Maps
              <ul className="list-disc list-inside pl-5 mt-2 space-y-1">
                <li>An example of a search problem application</li>
                <li>Finds optimal routes between locations</li>
              </ul>
            </li>
            <li>
              Computer System Configuration
              <ul className="list-disc list-inside pl-5 mt-2 space-y-1">
                <li>A more complex counting problem</li>
                <li>
                  Example: Choosing components for a computer system
                  <ul className="list-disc list-inside pl-5 mt-2 space-y-1">
                    <li>4 monitors, 2 keyboards, 4 computers, 3 printers</li>
                    <li>Total possible combinations = 4 * 2 * 4 * 3 = 96</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-2">
            Problem-Solving Approach
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Identify the type of problem (Decision, Search, or Counting)
            </li>
            <li>Define the inputs and desired outputs</li>
            <li>Break down the problem into smaller steps or components</li>
            <li>
              Apply appropriate algorithms or methods based on the problem type
            </li>
            <li>
              Verify the solution against the desired properties or constraints
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Page;
