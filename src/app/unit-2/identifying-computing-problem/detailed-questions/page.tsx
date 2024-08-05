import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const questionsAndAnswers = [
  // Economic
  { question: "What to produce?", answer: "Deciding what to produce involves analyzing market demand, resource availability, and potential profitability." },
  { question: "What strategies can be used to address global water scarcity?", answer: "Strategies include improving water management, investing in desalination technology, and promoting water conservation practices." },
  { question: "How does human activity impact natural habitats?", answer: "Human activity impacts habitats through deforestation, pollution, and urbanization, which can lead to habitat destruction and loss of biodiversity." }
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
