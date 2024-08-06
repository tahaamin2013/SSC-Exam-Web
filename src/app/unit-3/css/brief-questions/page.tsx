import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const questionsAndAnswers = [
    {
        question: "What is the most common stylesheet language used with HTML?",
        answer: "CSS (Cascading Style Sheets)"
    },
    {
        question: "How do you add inline CSS to an HTML element?",
        answer: "Using the 'style' attribute within the HTML tag."
    },
    {
        question: "How do you apply CSS styles internally within an HTML document?",
        answer: "By using the <style> tag in the <head> section."
    },
    {
        question: "What is external CSS?",
        answer: "CSS code written in a separate '.css' file linked to the HTML document."
    },
    {
        question: "What has the highest priority when multiple CSS styles are applied?",
        answer: "Inline CSS"
    },
    {
        question: "How do you apply borders to a table using CSS?",
        answer: "By setting border styles on 'table', 'th', and 'td' elements."
    },
    {
        question: "How can you change the background color of a table with CSS?",
        answer: "Using the 'background-color' property."
    },
    {
        question: "What CSS property changes the text color of an HTML element?",
        answer: "color"
    },
    {
        question: "How do you add a scrolling message to a webpage?",
        answer: "Using the <marquee> element."
    },
    {
        question: "How do you embed a video in a webpage?",
        answer: "Using the <video> tag with 'src', 'width', and 'height' attributes."
    },
    {
        question: "What attribute is used to enable autoplay for a video?",
        answer: "autoplay"
    },
    {
        question: "What does the 'muted' attribute do for videos?",
        answer: "It ensures that videos autoplay without sound."
    },
    {
        question: "How can you optimize video content for better web performance?",
        answer: "By providing additional video formats and compressing the video file."
    },
    {
        question: "What is the purpose of the 'alt' attribute in image tags?",
        answer: "To provide alternative text for accessibility."
    },
    {
        question: "How do you specify a background color for the body of a webpage?",
        answer: "Using the 'background-color' property in CSS."
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