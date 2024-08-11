import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const questionsAndAnswers = [
    {
        question: "What is a flowchart?",
        answer: "A flowchart is a diagrammatic representation of an algorithm. It visually illustrates the sequence of operations required to solve a problem and helps in analyzing and finding solutions, as well as facilitating the communication of problem-solving methods."
    },
    {
        question: "Why are flowcharts important in problem-solving?",
        answer: "Flowcharts are important because they illustrate the sequence of operations to be performed, provide an easy way to analyze and solve problems, facilitate the writing of computer programs, and help communicate the problem-solving method to others."
    },
    {
        question: "What are the key steps in drawing a flowchart?",
        answer: "The key steps in drawing a flowchart are: \n1. Start of the flowchart \n2. Input to the flowchart \n3. Type of processing required \n4. Decision to be taken \n5. Output of the operation \n6. End of the flowchart."
    },
    {
        question: "What is a concept map?",
        answer: "A concept map is a graphical tool used to represent concepts and their relationships. Concepts are typically shown as boxes or circles, and relationships are represented with lines or arrows, which are labeled with linking words or phrases."
    },
    {
        question: "What are the key features of concept maps?",
        answer: "Key features of concept maps include: \n1. Concepts represented as boxes or circles \n2. Relationships shown with lines or arrows \n3. Lines labeled with linking words and phrases \n4. Used to represent connections between concepts."
    },
    {
        question: "What software tools are available for designing flowcharts?",
        answer: "Some software tools available for designing flowcharts include: \n1. Microsoft Visio \n2. LARP (Logics of Algorithms and Resolution of Problems)."
    },
    {
        question: "What software tools are available for creating concept maps?",
        answer: "Software tools for creating concept maps include CmapTools and Mind Manager."
    },
    {
        question: "How do flowcharts aid in writing computer programs?",
        answer: "Flowcharts aid in writing computer programs by providing a clear visual representation of the algorithm, which helps programmers understand the sequence of operations and logic needed to implement the solution effectively."
    },
    {
        question: "How can concept maps help in visualizing concept connections?",
        answer: "Concept maps help in visualizing concept connections by graphically representing the relationships between different concepts, making it easier to understand how various ideas are linked and interact with one another."
    },
    {
        question: "What is the main difference between flowcharts and concept maps?",
        answer: "The main difference is that flowcharts represent the sequence of operations or steps in a process, while concept maps illustrate the relationships between different concepts. Flowcharts are used for algorithmic problem-solving, and concept maps are used for organizing and visualizing knowledge."
    }
];

const Page = () => {
    return (
        <section
            id="FAQ"
            className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6"
        >
            <h1 className="font-bold text-3xl text-center mb-4">
                Brief Questions and Answers (3 marks each)
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
