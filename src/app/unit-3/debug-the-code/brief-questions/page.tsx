import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const questionsAndAnswers = [
    {
        question: "What is the purpose of debugging in programming?",
        answer: "To locate and fix errors in the code."
    },
    {
        question: "Which feature allows you to pause and resume code execution?",
        answer: "Pause/Continue"
    },
    {
        question: "What does the 'Step Into' feature do during debugging?",
        answer: "It allows detailed line-by-line analysis of the code."
    },
    {
        question: "How can you pause code execution at specific lines in the code?",
        answer: "By setting breakpoints."
    },
    {
        question: "What information can you analyze with breakpoints?",
        answer: "Variable values and the flow of code execution."
    },
    {
        question: "In Visual Studio .Net, how do you access the debug menu?",
        answer: "By using the 'Run Debugging' option."
    },
    {
        question: "What is a breakpoint?",
        answer: "A marker in the code where execution is paused for debugging."
    },
    {
        question: "How can you use breakpoints to fix bugs?",
        answer: "By inspecting variable values and the execution flow at specific points."
    },
    {
        question: "What is the function of the 'Pause/Continue' feature?",
        answer: "To control the execution of the program during debugging."
    },
    {
        question: "What does the 'Step Into' function help with?",
        answer: "It helps to understand the detailed execution of each line of code."
    },
    {
        question: "How is a breakpoint set in code?",
        answer: "By clicking on the margin next to a line of code or using debugging tools."
    },
    {
        question: "What is the use of analyzing variable values during debugging?",
        answer: "To ensure they hold expected values and to identify issues."
    },
    {
        question: "Can you continue execution after hitting a breakpoint?",
        answer: "Yes, you can resume execution using the 'Continue' option."
    },
    {
        question: "What does the following code example demonstrate? 'let sum = a + b;  // Breakpoint here'",
        answer: "It shows where a breakpoint can be set to inspect the value of 'sum'."
    },
    {
        question: "Why is step-by-step debugging useful?",
        answer: "It helps in understanding the flow and pinpointing errors in the code."
    },
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
