import React from 'react';

interface SummaryItem {
  term: string;
  definition: string;
}

const summaryItems: SummaryItem[] = [
  {
    term: "Abstraction",
    definition: "Identifying essential information and Removal of the unnecessary details to solution."
  },
  {
    term: "Algorithm Design",
    definition: "This is actual designing of solution. This involves creating step-by-step plan of the problem solution."
  },
  {
    term: "Algorithmic Thinking",
    definition: "Is a way of getting to a solution."
  },
  {
    term: "Computing Problem",
    definition: "Is a problem that is solved step-by-step using computation."
  },
  {
    term: "Computational Thinking",
    definition: "Is a problem-solving method that computer scientists use as a skill to solve complex problems in a logical and systematic manner."
  },
  {
    term: "Concept Map",
    definition: "Is another way of representing knowledge."
  },
  {
    term: "Counting Principle",
    definition: "These problems work on the principle that if an event/decision has A number of choices and another decision/event has B number of choices then the total number of possible unique combinations would be A x B."
  },
  {
    term: "Decision Problems",
    definition: "A decision problem is the situation for a given input that has Yes-or-No Answer."
  },
  {
    term: "Decomposition",
    definition: "Breaking down the larger problems into smaller/ manageable ones and working on them one by one. These smaller problems are referred as sub-problems. This way we simplify the problem and solve it easily."
  },
  {
    term: "Flowchart",
    definition: "Is a diagrammatic representation of an algorithm."
  },
  {
    term: "IPO charts",
    definition: "Are considered a handy tool that software designers use to solve problems."
  },
  {
    term: "LARP",
    definition: "Logics of Algorithms and Resolution of Problems is a programming language for rapid development of prototypes"
  },
  {
    term: "Logical Thinking",
    definition: "Refers to analyzing a particular situation or problem using reason and accordingly reaching up to one or more decisions that are sensible."
  },
  {
    term: "Pattern Recognition",
    definition: "Examine the problem for a pattern or similarities between previously solved problems."
  },
  {
    term: "Problem",
    definition: "Is a challenge or situation that needs to be overcome using some action."
  },
  {
    term: "Problem Solving",
    definition: "Defines the process of analyzing some situation and accordingly behaving to generate some response."
  },
];

const SummaryNotes: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Summary Notes</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {summaryItems.map((item, index) => (
            <li key={index} className="p-4 hover:bg-gray-50 transition-colors duration-150">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">{item.term}</h2>
              <p className="text-gray-700">{item.definition}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SummaryNotes;