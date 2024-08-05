import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const questionsAndAnswers = [
  // Flowcharts
  { question: "What is a flowchart?", answer: "A flowchart is a diagrammatic representation of an algorithm. It illustrates the sequence of operations required to solve a problem, helps in analyzing and finding solutions, facilitates writing computer programs, and communicates the problem-solving method to others." },

  { question: "What are the steps for drawing a flowchart?", answer: "1. **Start of the flowchart**: Indicate the beginning of the process.\n2. **Input**: Show the data or information entering the system.\n3. **Processing**: Describe the type of processing required.\n4. **Decision**: Illustrate any decision points in the process.\n5. **Output**: Display the result of the operations.\n6. **End**: Indicate the end of the process." },

  { question: "What are the software tools for designing flowcharts?", answer: "Software tools for designing flowcharts include:\n- **Microsoft Visio**: A popular tool for creating detailed flowcharts.\n- **LARP (Logics of Algorithms and Resolution of Problems)**: A tool designed specifically for algorithm visualization and flowchart creation." },

  { question: "What is a concept map?", answer: "A concept map is a graphical tool that represents concepts and the relationships between them. Concepts are shown as boxes or circles, and relationships are indicated with lines or arrows, which are labeled with linking words or phrases." },

  { question: "What are the key features of concept maps?", answer: "Key features of concept maps include:\n- **Concepts**: Represented as boxes or circles.\n- **Relationships**: Shown with lines or arrows.\n- **Linking Words/Phrases**: Used to label the relationships between concepts.\n- **Purpose**: Helps in visualizing connections between different concepts." },

  { question: "What are some software tools for concept mapping?", answer: "Software tools for concept mapping include:\n- **CmapTools**: A tool designed for creating and managing concept maps.\n- **Mind Manager**: A versatile tool for concept mapping and mind mapping." },

  { question: "What are the key points of flowcharts and concept maps?", answer: "1. **Flowcharts**: Diagrammatic representation of algorithms, illustrating the sequence of operations, aiding in problem analysis and solution, facilitating program writing and communication.\n2. **Concept Maps**: Graphical representation of concepts and relationships, using boxes/circles for concepts and labeled lines/arrows for relationships, helpful for visualizing concept connections." }
];

const Page = () => {
  return (
    <section
      id="FAQ"
      className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6"
    >
      <h1 className="font-bold text-3xl text-center mb-4">
        Methods to Design a Solution
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
