import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const questionsAndAnswers = [
    {
        question: "What is HTML?",
        answer: "Hypertext Markup Language (HTML) is used to define and display content on a webpage using tags."
    },
    {
        question: "What is the purpose of the <html> tag?",
        answer: "It defines the start and end of an HTML document."
    },
    {
        question: "What does the Document Object Model (DOM) provide?",
        answer: "It provides a standard way to interpret HTML documents, allowing for mutual interpretation across different operating systems."
    },
    {
        question: "What is the purpose of the <p> tag in HTML?",
        answer: "It is used to define a paragraph."
    },
    {
        question: "How do you create a line break in HTML?",
        answer: "Use the <br> tag."
    },
    {
        question: "Which tag is used to emphasize text with italics?",
        answer: "The <em> tag."
    },
    {
        question: "Which tag is used to make text bold?",
        answer: "The <strong> tag."
    },
    {
        question: "What HTML tag is used to create an unordered list?",
        answer: "The <ul> tag."
    },
    {
        question: "What HTML tag is used for ordered lists?",
        answer: "The <ol> tag."
    },
    {
        question: "How do you define a table in HTML?",
        answer: "Use the <table> tag, with <tr> for rows, <th> for header cells, and <td> for data cells."
    },
    {
        question: "What does the <th> tag represent in an HTML table?",
        answer: "It represents a header cell in the table."
    },
    {
        question: "How do you add a hyperlink in HTML?",
        answer: "Use the <a> tag with the 'href' attribute."
    },
    {
        question: "What attribute is used to specify the destination of a hyperlink?",
        answer: "The 'href' attribute."
    },
    {
        question: "What does the 'target' attribute do in a hyperlink?",
        answer: "It defines where the linked document will open, such as '_blank' for a new tab or '_self' for the same tab."
    },
    {
        question: "In an HTML document, where should the <style> tag be placed for embedded CSS?",
        answer: "Within the <head> section of the HTML document."
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
