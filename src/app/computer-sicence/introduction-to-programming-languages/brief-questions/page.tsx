import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "What are the three levels of programming languages?",
        answer: "High-level languages, medium-level languages, and low-level languages."
    },
    {
        question: "Give two examples of high-level programming languages.",
        answer: "Python and Java."
    },
    {
        question: "What is the main purpose of low-level programming languages?",
        answer: "To give programmers precise control over the hardware."
    },
    {
        question: "What is a compiler and what does it do?",
        answer: "A compiler is a program that translates an entire high-level language code into machine code all at once before execution."
    },
    {
        question: "How does an interpreter differ from a compiler?",
        answer: "An interpreter translates and executes high-level language code line by line as the program runs, while a compiler translates the entire code before execution."
    },
    {
        question: "What is the function of an assembler?",
        answer: "An assembler translates assembly language into machine code."
    },
    {
        question: "Which programming language is an example of a medium-level language?",
        answer: "C is an example of a medium-level language."
    },
    {
        question: "What are two characteristics of high-level languages?",
        answer: "They are closer to human language and provide more abstraction from hardware details."
    },
    {
        question: "Name two examples of low-level languages.",
        answer: "Assembly language and machine code."
    },
    {
        question: "What is the primary advantage of using high-level languages?",
        answer: "They are easier to learn and use for general-purpose programming."
    },
    {
        question: "How do medium-level languages differ from high-level languages?",
        answer: "Medium-level languages offer some hardware control while still providing some abstraction."
    },
    {
        question: "What is the main purpose of assembly language?",
        answer: "Assembly language is used for programming specific to a computer&apos;sarchitecture."
    },
    {
        question: "Give an example of a compiler.",
        answer: "GCC compiler for C and C++."
    },
    {
        question: "Which programming languages often use interpreters?",
        answer: "Python and JavaScript often use interpreters."
    },
    {
        question: "What is the key difference between high-level and low-level languages in terms of hardware control?",
        answer: "Low-level languages provide direct hardware control, while high-level languages abstract hardware details."
    },
    {
        question: "How does C differ from high-level languages like Python or Java?",
        answer: "C offers more control over hardware while still being more readable than low-level languages."
    },
    {
        question: "What is the main advantage of using a compiler over an interpreter?",
        answer: "A compiler translates the entire code before execution, which can lead to faster program execution."
    },
    {
        question: "In what way are high-level languages 'closer to human language'?",
        answer: "They use more natural language constructs and are easier for humans to read and write."
    },
    {
        question: "What is the relationship between assembly language and machine code?",
        answer: "Assembly language is a human-readable version of machine code, and it can be translated into machine code by an assembler."
    },
    {
        question: "Why might a programmer choose to use a low-level language instead of a high-level language?",
        answer: "To have precise control over the hardware, which may be necessary for certain types of programming tasks."
    },
];

const Page = () => {
    return (
        <section
            id="FAQ"
            className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6"
        >
            <h1 className="font-bold text-3xl text-center mb-4">
                Brief Questions and Answers on Programming Languages (3 marks each)
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="py">{faq.question}</AccordionTrigger>
                            <AccordionContent className="pl-4">{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default Page;
