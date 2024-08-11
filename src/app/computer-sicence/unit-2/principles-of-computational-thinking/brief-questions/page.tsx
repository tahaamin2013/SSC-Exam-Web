import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const questionsAndAnswers = [
    {
        question: "What is logical thinking?",
        answer: "Logical thinking involves analyzing a situation or problem using reason and evidence to make sensible decisions. It requires gathering relevant facts and determining the best course of action based on reasoning."
    },
    {
        question: "How is logical thinking used in problem-solving?",
        answer: "Logical thinking is used in problem-solving by systematically analyzing the situation, evaluating evidence, and making decisions based on reason. For example, if you find water on the floor when you enter your home, logical thinking helps you deduce the cause based on the evidence available."
    },
    {
        question: "How does logical thinking relate to computational thinking?",
        answer: "Logical thinking is a fundamental part of computational thinking. While computers use logic in their computations, they do not think logically on their own. Developing logical thinking skills enhances computational thinking by aligning problem-solving processes with technology and focusing on both the process and the outcome."
    },
    {
        question: "What is algorithmic thinking?",
        answer: "Algorithmic thinking is a problem-solving approach that involves identifying and implementing a series of steps to reach a solution. It includes breaking down complex problems into smaller, manageable parts and solving each part in a logical and efficient manner."
    },
    {
        question: "How does algorithmic thinking improve problem-solving?",
        answer: "Algorithmic thinking improves problem-solving by providing a structured approach to tackling complex issues. By breaking down problems into smaller steps and solving them one at a time, you can approach problems more systematically and effectively."
    },
    {
        question: "Can you give an example of algorithmic thinking?",
        answer: "Certainly! Example: If you need to prepare a meal, algorithmic thinking involves breaking down the process into steps such as gathering ingredients, following a recipe, cooking, and serving. Each step is handled sequentially to achieve the final result."
    },
    {
        question: "What are the key aspects of logical thinking?",
        answer: "Key aspects of logical thinking include analyzing situations using reason, gathering relevant facts, making evidence-based decisions, and aligning problem-solving with technology."
    },
    {
        question: "What are the key aspects of algorithmic thinking?",
        answer: "Key aspects of algorithmic thinking include identifying the steps needed for problem-solving, implementing these steps logically and efficiently, breaking down complex problems into smaller parts, and solving problems step by step."
    },
    {
        question: "How can developing logical thinking skills benefit you?",
        answer: "Developing logical thinking skills helps you analyze problems more effectively, make informed decisions based on evidence, and apply reasoning to solve various types of issues. It enhances your ability to tackle problems systematically and make sound judgments."
    },
    {
        question: "How can algorithmic thinking be applied in real-world scenarios?",
        answer: "Algorithmic thinking can be applied in various real-world scenarios, such as designing software, managing projects, or troubleshooting issues. It involves creating clear, step-by-step plans to address complex problems and ensure efficient solutions."
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
