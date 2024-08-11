import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const questionsAndAnswers = [
  // Importance of Computational Thinking
  { question: "What is the importance of computational thinking?", answer: "Computational thinking encourages clear reflection on problems, helps define repeatable solutions, aims for automated systems to solve similar problem instances, and can be considered an extension of logical thinking." },

  // Properties of Computational Thinking
  { question: "What are the properties of computational thinking?", answer: "1. **Decomposition**: Breaking down larger problems into smaller, manageable sub-problems to simplify and solve them easily.\n2. **Abstraction**: Removing unnecessary details to focus on essential information.\n3. **Pattern Recognition**: Examining the problem for patterns or similarities with previously solved problems.\n4. **Algorithm Design**: Creating a step-by-step plan to solve the problem." },

  // Example: Creating a Computer Game
  { question: "How do the properties of computational thinking apply to creating a computer game?", answer: "1. **Decomposition**: Breaking down tasks such as where to go and how to complete the level.\n2. **Abstraction**: Identifying necessary information like the location of the exit and enemies, while ignoring irrelevant details like weather.\n3. **Pattern Recognition**: Recognizing that six enemies can be handled similarly to a single enemy.\n4. **Algorithm Design**: Developing a step-by-step plan for actions such as movement and interactions in the game." },

  // Tip
  { question: "What is a tip before learning programming?", answer: "Before you learn programming, understand computational thinking. It helps in approaching problems methodically and designing effective solutions." }
];

const Page = () => {
  return (
    <section
      id="FAQ"
      className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6"
    >
      <h1 className="font-bold text-3xl text-center mb-4">
        Computational Thinking
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
