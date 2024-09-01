import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const questionsAndAnswers = [
    {
        question: "What is computational thinking?",
        answer: "Computational thinking is a problem-solving process that involves thinking in ways that are conducive to solving problems using computation. It encompasses techniques such as breaking down problems, identifying patterns, and designing algorithms."
    },
    {
        question: "Why is computational thinking important?",
        answer: "Computational thinking is important because it encourages clear reflection on problems, helps define repeatable solutions, and aims to create automated systems to solve similar problems. It can be considered an extension of logical thinking, providing a structured approach to problem-solving."
    },
    {
        question: "What are the properties of computational thinking?",
        answer: "The key properties of computational thinking are: \n1. **Decomposition**: Breaking down larger problems into smaller, manageable sub-problems. \n2. **Abstraction**: Removing unnecessary details to focus on essential information. \n3. **Pattern Recognition**: Identifying similarities or patterns between problems. \n4. **Algorithm Design**: Creating a step-by-step plan to solve the problem."
    },
    {
        question: "What does decomposition involve in computational thinking?",
        answer: "Decomposition involves breaking down a large problem into smaller, more manageable sub-problems. By solving each sub-problem individually, you simplify the overall problem and make it easier to address."
    },
    {
        question: "How does abstraction help in problem-solving?",
        answer: "Abstraction helps by removing unnecessary details and focusing only on the essential aspects of the problem. This allows you to concentrate on the key information needed to solve the problem effectively."
    },
    {
        question: "What is pattern recognition in computational thinking?",
        answer: "Pattern recognition involves examining a problem to identify similarities or patterns that have been encountered in previous problems. Recognizing these patterns can help in applying known solutions to new problems."
    },
    {
        question: "What is algorithm design in the context of computational thinking?",
        answer: "Algorithm design involves creating a detailed step-by-step plan to solve a problem. It outlines the sequence of actions or computations needed to achieve the desired outcome."
    },
    {
        question: "Can you provide an example of applying computational thinking to creating a computer game?",
        answer: "Certainly! Example: \n1. **Decomposition**: Break down the game into parts such as level design, character movement, and enemy behavior. \n2. **Abstraction**: Focus on necessary details like enemy locations and player objectives, while ignoring irrelevant details like weather. \n3. **Pattern Recognition**: Identify that multiple enemies should be treated similarly to a single enemy in terms of game mechanics. \n4. **Algorithm Design**: Develop a step-by-step plan for how characters move, how levels are completed, and how enemies interact with the player."
    },
    {
        question: "What is a tip for learning programming related to computational thinking?",
        answer: "Before diving into programming, it&apos;sbeneficial to understand and practice computational thinking. This foundational approach will help you tackle problems more effectively and design better solutions."
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
