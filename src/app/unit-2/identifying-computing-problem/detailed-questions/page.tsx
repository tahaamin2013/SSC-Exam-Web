import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const questionsAndAnswers = [
  // Decision Problems
  { question: "What is a decision problem?", answer: "A decision problem requires a binary response (Yes/No, True/False) and can be simple or complex, involving multiple decision factors and criteria." },
  { question: "How to determine if a number is odd or even?", answer: "A number is odd if it is not divisible by 2, and even if it is divisible by 2." },
  { question: "How to check if a number is prime?", answer: "A number is prime if it has no positive divisors other than 1 and itself." },
  { question: "How to find if 'aa' occurs in a sequence of alphabets?", answer: "Check each pair of consecutive letters in the sequence to see if both are 'a'." },

  // Search Problems
  { question: "What is a search problem?", answer: "A search problem involves finding a solution among a set of objects, often represented using graphs with nodes and links." },
  { question: "How does route finding work in a map?", answer: "In route finding, nodes represent cities and links represent routes. The goal is to find a path between two nodes." },
  { question: "What are the key components of a search problem?", answer: "The key components include the initial state, operations to transition between nodes, and the goal or end condition." },

  // Counting Problems
  { question: "What is a counting problem?", answer: "A counting problem involves calculating the total number of possible combinations or arrangements based on given choices." },
  { question: "How to calculate outfit combinations?", answer: "Multiply the number of choices for each item. For example, if there are 3 shirts and 2 pants, total combinations = 3 * 2." },
  { question: "How to determine total possible computer system configurations?", answer: "Multiply the number of choices for each component. For example, 4 monitors, 2 keyboards, 4 computers, 3 printers = 4 * 2 * 4 * 3 = 96." },

  // General Problem-Solving Approach
  { question: "How to identify the type of computing problem?", answer: "Determine if it is a Decision, Search, or Counting problem based on its nature and requirements." },
  { question: "How to define inputs and desired outputs?", answer: "Clearly specify what data will be provided (inputs) and what result or solution is expected (outputs)." },
  { question: "What is the approach to breaking down a problem?", answer: "Decompose the problem into smaller, manageable steps or components to simplify the solution process." },
  { question: "How to apply algorithms or methods to a problem?", answer: "Choose appropriate algorithms or methods based on the problem type and the steps defined." },
  { question: "How to verify a solution?", answer: "Ensure that the solution meets all desired properties or constraints and accurately solves the problem." }
];

const Page = () => {
  return (
    <section
      id="FAQ"
      className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6"
    >
      <h1 className="font-bold text-3xl text-center mb-4">
        Long Answer Questions (8 marks each)
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
