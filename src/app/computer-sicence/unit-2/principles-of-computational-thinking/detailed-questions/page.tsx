import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const questionsAndAnswers = [
  // Logical Thinking
  { question: "What is logical thinking?", answer: "Logical thinking involves analyzing a situation or problem using reason and reaching sensible decisions based on gathered facts and evidence. It is a fundamental part of computational thinking and helps in problem-solving by aligning technology with reasoning." },

  // Example of Logical Thinking
  { question: "Can you provide an example of logical thinking?", answer: "Example: You enter your home and see water on the floor. To determine what happened, you need to use reasoning skills based on evidence and facts, such as checking if there is a leak or if someone accidentally spilled water." },

  // Computers and Logical Thinking
  { question: "Do computers use logical thinking?", answer: "Computers use logic in their computations, but they do not think logically on their own. They can only perform tasks based on programmed instructions. Enhancing our computational thinking involves aligning problem-solving with technology and focusing on the process and outcome." },

  // Algorithmic Thinking
  { question: "What is algorithmic thinking?", answer: "Algorithmic thinking is a problem-solving process that involves identifying the steps needed to reach a solution and implementing those steps in a logical and efficient manner. It involves breaking down complex problems into smaller, manageable parts and solving them step by step." },

  // Key Points Summary
  { question: "What are the key points of logical and algorithmic thinking?", answer: "1. **Logical Thinking**: Analyze situations using reason, gather relevant facts, make evidence-based decisions, and align problem-solving with technology.\n2. **Algorithmic Thinking**: Identify steps for problem-solving, implement steps logically and efficiently, break down complex problems, and solve problems step by step." }
];

const Page = () => {
  return (
    <section
      id="FAQ"
      className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6"
    >
      <h1 className="font-bold text-3xl text-center mb-4">
        Logical and Algorithmic Thinking
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
