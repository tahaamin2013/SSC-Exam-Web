import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const questionsAndAnswers = [
  { question: "Define a computing problem.", answer: "A computing problem is a challenge or situation that needs to be overcome using computation. It is solved step-by-step using computation and can include any type of calculation such as arithmetical or logical. Usually, it has a well-defined input and some desired properties that output must satisfy." },
  { question: "What are the key characteristics of a computing problem?", answer: "The key characteristics of a computing problem are a well-defined input, a desired output, and a step-by-step approach to solving it using computation." },
  { question: "Give an example of a decision problem.", answer: "An example of a decision problem is determining if a given number is odd or even." },
  { question: "What is required to solve a decision problem?", answer: "To solve a decision problem, a binary response (Yes/No, True/False) is required." },
  { question: "What are the main components of a search problem?", answer: "The main components of a search problem are the initial state, operations, and the goal." },
  { question: "Describe the initial state in a search problem.", answer: "The initial state in a search problem is the starting point of the search." },
  { question: "Provide an example of a search problem and explain it briefly.", answer: "An example of a search problem is the Route Finding Problem, where the goal is to find a path between two cities in a graph representing a map. Nodes represent cities, and links represent routes between cities." },
  { question: "Explain what a counting problem is.", answer: "A counting problem is based on the principle of combinations, where the total possible combinations of events are calculated." },
  { question: "How do you calculate the total possible combinations in a counting problem?", answer: "To calculate the total possible combinations in a counting problem, you multiply the number of choices for each event." },
  { question: "Give a real-world example of a counting problem.", answer: "A real-world example of a counting problem is calculating possible outfit combinations from a set of shirts and pants." },
  { question: "Explain how Google Maps is an example of a search problem application.", answer: "Google Maps is an example of a search problem application because it finds optimal routes between locations." },
  { question: "List the steps in a problem-solving approach for computing problems.", answer: "The steps in a problem-solving approach for computing problems are: Identify the type of problem, define the inputs and desired outputs, break down the problem into smaller steps or components, apply appropriate algorithms or methods based on the problem type, and verify the solution against the desired properties or constraints." },
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
  { question: "What is backtracking in algorithm design?", answer: "Backtracking is a method of algorithm design that involves searching for a solution to a problem by trying out different possibilities and eliminating those that fail to satisfy the problem&apos;sconstraints." },
  { question: "Define a recursive algorithm.", answer: "A recursive algorithm is an algorithm that calls itself with a subset of the original problem, solving it step by step." },
  { question: "Give an example of a recursive algorithm.", answer: "An example of a recursive algorithm is the Merge Sort algorithm." },
  { question: "What is the importance of problem decomposition?", answer: "Problem decomposition is important because it simplifies complex problems into manageable subproblems, making it easier to design, understand, and solve the problem." },
  { question: "What is the role of data structures in problem-solving?", answer: "Data structures are crucial in problem-solving as they provide efficient ways to store, organize, and manage data, enabling effective and optimized algorithms." },
  { question: "How does graph theory apply to computing problems?", answer: "Graph theory applies to computing problems by providing a framework to model relationships and structures using nodes and edges, which is useful in problems like network design, social networks, and route optimization." }
];

const Page = () => {
  return (
    <section
      id="FAQ"
      className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6"
    >
      <h1 className="font-bold text-3xl text-center mb-4">
        Brief Questions and Answers on Computing Problems (3 marks each)
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