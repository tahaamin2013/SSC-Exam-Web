import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const questionsAndAnswers = [
  // Definition
  { question: "What is problem solving in computer science?", answer: "Problem solving is the process of analyzing a situation and behaving accordingly to generate a response." },

  // Simple Problem Solving Process
  { question: "What are the steps in a simple problem solving process?", answer: "1. Define and analyze a problem: Identify what the problem is and why it&apos;shappening.\n2. Design a plan: Determine the algorithm or approach to solve the problem.\n3. Implement the plan: Code the solution using a programming language.\n4. Evaluate: Assess if the plan worked as intended." },

  // Complex Problem Solving Process
  { question: "What are the steps in a complex problem solving process?", answer: "1. Define and analyze a problem.\n2. Decompose the problem: Break it down into manageable sub-problems.\n3. Identify potential plans for each sub-problem: Develop multiple approaches (e.g., plan A, plan B, plan C).\n4. Select and design the best plan.\n5. Implement that plan.\n6. Evaluate." },

  // Important Considerations
  { question: "What are some important considerations in problem solving?", answer: "Before taking action, thoroughly investigate the problem to capture all relevant aspects. Properly define and analyze the problem. Ensure clarity when defining a problem and specify the objectives." }
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
