import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const questionsAndAnswers = [
  // Overview
  { question: "What are IPO charts?", answer: "IPO charts visually represent the Inputs, Process, and Output in tabular form. They are a handy tool that software designers use to solve problems." },

  // Components of an IPO Chart
  { question: "What are the components of an IPO chart?", answer: "1. **Input**: Data entered into the system.\n2. **Process**: Operations that will be applied on the input.\n3. **Output**: Data that has been turned into information." },

  // Example 1: Computing Rectangle Area
  { question: "Can you give an example of an IPO chart?", answer: "Example 1: Computing Rectangle Area\n\n**Input**: Length and Width of the rectangle.\n**Process**: Area = Length * Width.\n**Output**: Area of the rectangle.\n\nThe input column contains the length and width of the rectangle. The process column shows the multiplication operation to be performed. The output provides the calculated area to the user." },

  // Example 2: Calculate Student&apos;sAverage
  { question: "Can you provide another example of an IPO chart?", answer: "Example 2: Calculate Student&apos;sAverage\n\n**Inputs**: Grade 1, Grade 2, Grade 3.\n**Process**: Sum all grades and divide the sum by the number of grades.\n**Output**: Student grade average." },

  // Key Points Summary
  { question: "What are the key points of IPO charts?", answer: "1. **Purpose**: Visually represent the IPO model.\n2. **Usage**: Software designers use it to solve problems.\n3. **Input**: Data entered into the system.\n4. **Process**: Operations applied to the input.\n5. **Output**: Resulting information for the user." }
];

const Page = () => {
  return (
    <section
      id="FAQ"
      className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6"
    >
      <h1 className="font-bold text-3xl text-center mb-4">
        Understanding IPO Charts
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
