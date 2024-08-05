import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const questionsAndAnswers = [
  { question: "Define a computing problem.", answer: "In computer science, a computing problem is a challenge or situation that needs to be overcome using computation. It is solved step-by-step using computation and can include any type of calculation such as arithmetical or logical. Usually, it has a well-defined input and some desired properties that output must satisfy." },
  { question: "What are the key characteristics of a computing problem?", answer: "A computing problem usually has a well-defined input and some desired properties that the output must satisfy. It is solved step-by-step using computation." },
  { question: "What is a decision problem?", answer: "A decision problem requires a binary response (Yes/No, True/False). It can be simple or complex, involving multiple decision factors and criteria." },
  { question: "Give an example of a decision problem.", answer: "Examples of decision problems include determining if a given number is odd or even, checking if a given number is prime, and finding if there's any occurrence of 'aa' in a sequence of English alphabets." },
  { question: "What is a search problem?", answer: "A search problem involves searching for a solution among a set of objects. It is common in science and engineering and is often represented using graphs with nodes and links." },
  { question: "What are the key components of a search problem?", answer: "The key components of a search problem are the initial state (starting point of the search), operations (moves to transition between nodes), and the goal (target or end condition)." },
  { question: "Provide an example of a search problem.", answer: "An example of a search problem is the Route Finding Problem, where the goal is to find a path between two cities in a graph representing a map. Nodes represent cities, and links represent routes between cities." },
  { question: "What is a counting problem?", answer: "A counting problem is based on the principle of combinations. If event A has X choices and event B has Y choices, the total possible combinations are X * Y." },
  { question: "Give an example of a counting problem.", answer: "An example of a counting problem is calculating possible outfit combinations from a set of shirts and pants. The total combinations are the number of shirts multiplied by the number of pants." },
  { question: "How does Google Maps exemplify a search problem?", answer: "Google Maps is an example of a search problem application because it finds optimal routes between locations." },
  { question: "Describe a more complex counting problem with a real-world example.", answer: "A more complex counting problem example is choosing components for a computer system. For instance, if there are 4 monitors, 2 keyboards, 4 computers, and 3 printers, the total possible combinations are 4 * 2 * 4 * 3 = 96." },
  { question: "What is the first step in a problem-solving approach for computing problems?", answer: "The first step is to identify the type of problem, which can be a decision, search, or counting problem." },
  { question: "What should you do after identifying the type of problem?", answer: "After identifying the type of problem, you should define the inputs and desired outputs." },
  { question: "How can breaking down a problem into smaller steps help?", answer: "Breaking down a problem into smaller steps or components can make it easier to manage and solve." },
  { question: "What is the role of algorithms in solving computing problems?", answer: "Algorithms provide a step-by-step method for solving computing problems based on their type." },
  { question: "Why is it important to verify the solution against desired properties?", answer: "Verifying the solution ensures that it meets the desired properties or constraints and solves the problem correctly." },
  { question: "What is an algorithm?", answer: "An algorithm is a step-by-step procedure or formula for solving a problem." },
  { question: "Define a binary search algorithm.", answer: "A binary search algorithm is a method for finding an item from a sorted list by repeatedly dividing the search interval in half." },
  { question: "What is a sorting algorithm?", answer: "A sorting algorithm is a method for arranging elements in a list in a certain order, typically ascending or descending." },
  { question: "Give an example of a sorting algorithm.", answer: "An example of a sorting algorithm is the Quick Sort algorithm." },
  { question: "What is computational complexity?", answer: "Computational complexity is a branch of computer science that studies the resources required during computation to solve a given problem." },
  { question: "Define a polynomial-time algorithm.", answer: "A polynomial-time algorithm is an algorithm whose running time is upper-bounded by a polynomial expression in the size of the input." },
  { question: "What is an NP-complete problem?", answer: "An NP-complete problem is a type of problem for which no fast solution algorithm is known and is as hard as any problem in NP." },
  { question: "Give an example of an NP-complete problem.", answer: "An example of an NP-complete problem is the Traveling Salesman Problem." },
  { question: "What is a heuristic?", answer: "A heuristic is a practical approach to problem-solving that is not guaranteed to be perfect or optimal, but is sufficient for reaching an immediate goal." },
  { question: "Define a greedy algorithm.", answer: "A greedy algorithm is a simple, intuitive algorithm that is used in optimization problems and makes the optimal choice at each step as it attempts to find the overall optimal way to solve the entire problem." },
  { question: "What is a dynamic programming algorithm?", answer: "A dynamic programming algorithm is a method for solving complex problems by breaking them down into simpler subproblems and storing the solutions to these subproblems to avoid redundant work." },
  { question: "Give an example of a dynamic programming problem.", answer: "An example of a dynamic programming problem is the Fibonacci sequence." },
  { question: "What is backtracking in algorithm design?", answer: "Backtracking is a method of algorithm design that involves searching for a solution to a problem by trying out different possibilities and eliminating those that fail to satisfy the problem's constraints." },
  { question: "Define a recursive algorithm.", answer: "A recursive algorithm is an algorithm that calls itself with a subset of the original problem, solving it step by step." },
  { question: "Give an example of a recursive algorithm.", answer: "An example of a recursive algorithm is the Merge Sort algorithm." }
];

const Page = () => {
  return (
    <section
      id="FAQ"
      className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6"
    >
      <h1 className="font-bold text-3xl text-center mb-4">
        Long Answer Questions on Computing Problems (8 marks each)
      </h1>
      <div className="grid grid-cols-1 text-left gap-x-8 w-full">
        <Accordion type="single" collapsible>
          {questionsAndAnswers.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default Page