import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const questionsAndAnswers = [
    {
        question: "What is a dynamic website?",
        answer: "A website that generates content in real-time based on user input or other variables."
    },
    {
        question: "Which scripting language is commonly used for dynamic content in websites?",
        answer: "JavaScript."
    },
    {
        question: "What is DOM manipulation?",
        answer: "Modifying the Document Object Model to update content on a webpage in real-time."
    },
    {
        question: "How does event-driven programming contribute to dynamic websites?",
        answer: "It allows handling user interactions, such as clicks and inputs, to dynamically update content."
    },
    {
        question: "What does asynchronous data fetching enable in dynamic websites?",
        answer: "Seamless loading of content without requiring a full page reload."
    },
    {
        question: "In the given example, what does the function `changeOrder()` do?",
        answer: "It updates the content of the 'result' element based on the selected value from the dropdown menu."
    },
    {
        question: "What HTML tag is used to create a dropdown menu in the example?",
        answer: "The `<select>` tag."
    },
    {
        question: "Which event triggers the `changeOrder()` function in the example?",
        answer: "The `onchange` event of the `<select>` tag."
    },
    {
        question: "What is the significance of real-time content updates in dynamic websites?",
        answer: "They enhance user engagement by providing interactive and responsive experiences."
    },
    {
        question: "How do dynamic websites bridge client-side and server-side technologies?",
        answer: "By integrating client-side scripting with server-side data to create interactive and data-driven applications."
    },
    {
        question: "What role does client-side scripting play in dynamic website creation?",
        answer: "It enables real-time updates and interaction handling directly in the browser."
    },
    {
        question: "What is the academic significance of dynamic website creation?",
        answer: "It supports scalable and maintainable web applications and serves as a foundation for modern web development frameworks."
    },
    {
        question: "How does asynchronous data fetching improve user experience?",
        answer: "By allowing content to load without refreshing the entire webpage, leading to a smoother user experience."
    },
    {
        question: "What HTML element is used to display the result of the user&apos;sselection in the example?",
        answer: "The `<p>` tag with the id 'result'."
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
