import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const questionsAndAnswers = [
    {
        question: "How did the WWW revolutionize information sharing?",
        answer: "The WWW revolutionized information sharing by enabling the dissemination of documents, images, audio, and video."
    },
    {
        question: "What is the difference between a webpage and a website?",
        answer: "A webpage is a single document, while a website is a collection of webpages."
    },
    {
        question: "How do browsers access webpages and websites?",
        answer: "Browsers access them via URLs."
    },
    {
        question: "What is a web application?",
        answer: "A web application is a program accessed via browsers that performs tasks using remote servers."
    },
    {
        question: "Can you provide an example of a web application?",
        answer: "An example is a CRM (Customer Relationship Management) system."
    },
    {
        question: "What is a static website?",
        answer: "A static website has unchanging content unless manually updated and is suitable for simple, informational pages."
    },
    {
        question: "What defines a dynamic website?",
        answer: "A dynamic website changes content based on user input and often uses scripts like JavaScript or PHP."
    },
    {
        question: "What is front-end development?",
        answer: "Front-end development creates user interfaces using HTML, CSS, and JavaScript, focusing on the visible and interactive parts of a website."
    },
    {
        question: "What is back-end development?",
        answer: "Back-end development handles server-side operations and databases, processing requests from the front-end."
    },
    {
        question: "How does a static website load compared to a dynamic website?",
        answer: "Static websites load quickly as their content doesn't change unless updated, whereas dynamic websites load content based on user interactions or server-side scripts."
    },
    {
        question: "Why might you choose a static website over a dynamic one?",
        answer: "Static websites are chosen for their simplicity and fast loading times, suitable for informational purposes without frequent content changes."
    },
    {
        question: "What role does JavaScript play in dynamic websites?",
        answer: "JavaScript is used in dynamic websites to change content based on user input and interactions."
    },
    {
        question: "What is the primary focus of front-end development?",
        answer: "The primary focus is on creating the visible, interactive elements of a website that users interact with."
    },
    {
        question: "What does back-end development involve?",
        answer: "Back-end development involves managing server-side logic and databases, handling the data and requests made by the front-end."
    },
    {
        question: "Can you give an example of a task performed by a web application?",
        answer: "A task performed could be managing customer data in a CRM system."
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
