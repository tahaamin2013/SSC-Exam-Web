import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const questionsAndAnswers = [
    { question: "What is problem-solving in computer science?", answer: "Problem-solving is the process of analyzing a situation and behaving accordingly to generate a response." },
    { question: "What are the four steps in the simple problem-solving process?", answer: "Define and analyze a problem, design a plan, implement the plan, and evaluate." },
    { question: "What is the first step in the simple problem-solving process?", answer: "Define and analyze a problem." },
    { question: "What does it mean to design a plan in problem-solving?", answer: "Determining the algorithm or approach to solve the problem." },
    { question: "What is the purpose of implementing the plan?", answer: "To code the solution using a programming language." },
    { question: "Why is evaluation important in problem-solving?", answer: "To assess if the plan worked as intended." },
    { question: "What additional steps are included in the complex problem-solving process?", answer: "Decompose the problem, identify potential plans for each sub-problem, select and design the best plan." },
    { question: "What is decomposition in problem-solving?", answer: "Breaking down a problem into manageable sub-problems." },
    { question: "Why is it important to develop multiple approaches to a problem?", answer: "To have alternatives (e.g., plan A, plan B, plan C) in case the primary plan fails." },
    { question: "What should be done before taking action on a problem?", answer: "Thoroughly investigate the problem to capture all relevant aspects." },
    { question: "What is crucial when defining a problem?", answer: "Ensuring clarity and specifying the objectives." },
    { question: "What is an algorithm?", answer: "A step-by-step procedure for solving a problem." },
    { question: "Why is it important to analyze a problem before solving it?", answer: "To understand the root cause and all relevant aspects of the problem." },
    { question: "What does it mean to evaluate a solution?", answer: "To determine if the implemented solution effectively resolves the problem." },
    { question: "What is a sub-problem?", answer: "A smaller, more manageable part of a larger problem." },
    { question: "Why is it beneficial to break a problem into sub-problems?", answer: "It makes complex problems easier to manage and solve." },
    { question: "What is a plan in problem-solving?", answer: "An approach or strategy for solving a problem." },
    { question: "What is the importance of selecting the best plan?", answer: "To ensure the most effective and efficient solution is implemented." },
    { question: "What is meant by 'capturing all relevant aspects' of a problem?", answer: "Identifying and understanding all factors that contribute to the problem." },
    { question: "How does proper definition of a problem help in solving it?", answer: "It ensures that the problem is well understood and the objectives are clear." },
    { question: "What is the difference between a simple and complex problem-solving process?", answer: "A complex process includes additional steps like decomposition and multiple potential plans." },
    { question: "Why is it important to evaluate multiple plans for a sub-problem?", answer: "To identify the most suitable solution for each part of the problem." },
    { question: "What role does clarity play in defining a problem?", answer: "It helps ensure that the problem and its objectives are well understood." },
    { question: "What is an objective in problem-solving?", answer: "A specific goal that the solution aims to achieve." },
    { question: "What should be considered when selecting a plan?", answer: "The effectiveness, efficiency, and feasibility of the plan." },
    { question: "What is the importance of coding a solution?", answer: "It translates the plan into a functional program that can solve the problem." },
    { question: "Why might a plan need to be adjusted during implementation?", answer: "To address unforeseen issues or improve the solution." },
    { question: "What is a root cause analysis?", answer: "A method of identifying the underlying cause of a problem." },
    { question: "How can multiple approaches improve problem-solving?", answer: "They provide alternative solutions, increasing the chances of success." },
    { question: "What is the final step in both simple and complex problem-solving processes?", answer: "Evaluation." },
];

const Page = () => {
    return (
        <section
            id="FAQ"
            className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6"
        >
            <h1 className="font-bold text-3xl text-center mb-4">
                Brief Questions and Answers on Computing Problems (3 marks each)
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
