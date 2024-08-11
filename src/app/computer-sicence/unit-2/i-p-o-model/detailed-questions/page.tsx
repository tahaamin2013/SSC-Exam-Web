import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const questionsAndAnswers = [
  // Definition
  { question: "What is the Input-Process-Output (IPO) model?", answer: "The IPO model is a framework that describes how computer systems operate by breaking down processes into three core components: Input, Process, and Output." },

  // Components
  { question: "What are the components of the IPO model?", answer: "1. **Input**: Data given to the system.\n2. **Process**: Operations performed by the system.\n3. **Output**: Results presented by the system." },

  // Key Aspects
  { question: "What are the key aspects of each component?", answer: "1. **Input**: Refers to the data or requirements received from the environment.\n2. **Process**: Involves the computation or operations performed based on the input requirements.\n3. **Output**: Represents the results or responses provided by the system back to the environment." },

  // Purpose
  { question: "What is the purpose of the IPO model?", answer: "The IPO model helps in breaking down problems into three core components—Input, Process, and Output—for easier analysis and understanding of system operations." }
];

const Page = () => {
  return (
    <section
      id="FAQ"
      className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6"
    >
      <h1 className="font-bold text-3xl text-center mb-4">
        Understanding the Input-Process-Output Model
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