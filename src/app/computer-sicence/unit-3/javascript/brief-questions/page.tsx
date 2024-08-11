import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questionsAndAnswers = [
  {
    question: "What is JavaScript primarily used for?",
    answer:
      "JavaScript is primarily used for web development, working well with HTML and CSS.",
  },
  {
    question: "How can you embed JavaScript in an HTML document?",
    answer:
      "JavaScript can be embedded in an HTML document using the `<script>` tag.",
  },
  {
    question: "What is the importance of instruction sequence in programming?",
    answer:
      "The order of instructions is crucial as variables should be declared and initialized before use.",
  },
  {
    question: "List some common arithmetic operators in JavaScript.",
    answer:
      "Common arithmetic operators include Addition (+), Subtraction (-), Multiplication (*), Division (/), and Modulus (%).",
  },
  {
    question: "How can JavaScript respond to user actions?",
    answer:
      "JavaScript can respond to user actions, like button clicks, using event handlers such as `onclick`.",
  },
  {
    question:
      "What are the different types of data that JavaScript variables can store?",
    answer: "JavaScript variables can store Numbers, Strings, and Booleans.",
  },
  {
    question: "How do you declare and initialize a variable in JavaScript?",
    answer:
      "A variable can be declared using `var`, `let`, or `const`, and initialized with a value. For example: `var x = 5;`",
  },
  {
    question: "What is an array in JavaScript and how can you declare one?",
    answer:
      "An array is a data type that holds multiple values. It can be declared using `var arr = [1, 2, 3];` or `var arr = new Array(); arr[0] = 10;`.",
  },
  {
    question:
      "What are conditional statements and how are they used in JavaScript?",
    answer:
      "Conditional statements, like `if`, `if-else`, and `if-else if-else`, allow the program to execute code based on certain conditions.",
  },
  {
    question: "What is a `for` loop in JavaScript and how does it work?",
    answer:
      "A `for` loop executes a block of code a specified number of times, using an index variable. It includes initialization, condition, and iteration.",
  },
  {
    question: "Explain the concept of nested loops in JavaScript.",
    answer:
      "Nested loops involve placing one loop inside another, allowing for complex iterations, such as printing tables or multi-dimensional data.",
  },
  {
    question: "How do functions help in JavaScript programming?",
    answer:
      "Functions help by allowing you to segment code into reusable blocks, improving code organization and reducing redundancy.",
  },
  {
    question: "How can you pass arguments to a function in JavaScript?",
    answer:
      "Arguments can be passed to a function by including them in parentheses when calling the function, e.g., `greet('Ram', 5000)`.",
  },
  {
    question:
      "What is the difference between global and local variables in JavaScript?",
    answer:
      "Global variables are accessible throughout the entire script, while local variables are only accessible within the function where they are defined.",
  },
  {
    question:
      "Provide an example of a function that returns a value in JavaScript.",
    answer:
      "An example is the `calcBalance` function which returns the balance after subtracting the bill from the amount received: `return balance;`.",
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
  );
};

export default Page;
