import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const questionsAndAnswers = [
    {
        question: "What is an Input-Processing-Output (I-P-O) Chart?",
        answer: "An Input-Processing-Output (I-P-O) Chart is a visual tool that represents the flow of data through a system by detailing the inputs, processes, and outputs involved. It helps in understanding and designing systems by breaking down their functionality into these three core components."
    },
    {
        question: "What are the main components of an I-P-O Chart?",
        answer: "The main components of an I-P-O Chart are: 1) Input: The data or information entered into the system. 2) Process: The operations or computations performed on the input data. 3) Output: The results or information produced by the system after processing."
    },
    {
        question: "What information is included in the 'Input' column of an I-P-O Chart?",
        answer: "The 'Input' column includes all the data or information that is provided to the system. This can be user inputs, data from external sources, or any other form of data necessary for the system to operate."
    },
    {
        question: "What does the 'Process' column represent in an I-P-O Chart?",
        answer: "The 'Process' column represents the operations, transformations, or calculations that are applied to the input data. This column details how the input is manipulated to achieve the desired result."
    },
    {
        question: "What is listed in the 'Output' column of an I-P-O Chart?",
        answer: "The 'Output' column lists the final results or outcomes produced by the system after processing the input data. This is the information or results that are provided to the user or used in further actions."
    },
    {
        question: "Can you provide an example of an I-P-O Chart for calculating the area of a rectangle?",
        answer: "Certainly! Example: \nInput: Length and Width of the rectangle \nProcess: Area = Length * Width \nOutput: Area of the rectangle"
    },
    {
        question: "Can you give an example of an I-P-O Chart for computing a student&apos;saverage grade?",
        answer: "Sure! Example: \nInput: Grade 1, Grade 2, Grade 3 \nProcess: Sum all grades and divide by the number of grades \nOutput: Average grade of the student"
    },
    {
        question: "What is the purpose of an I-P-O Chart?",
        answer: "The purpose of an I-P-O Chart is to visually represent how data flows through a system, breaking down the process into inputs, processes, and outputs. This helps in understanding, designing, and analyzing systems by clearly showing each component&apos;srole."
    },
    {
        question: "How do software designers use I-P-O Charts?",
        answer: "Software designers use I-P-O Charts to plan and analyze the functionality of a system. By defining inputs, processes, and outputs, designers can create more effective solutions, troubleshoot issues, and ensure that all components work together as intended."
    },
    {
        question: "What are the benefits of using an I-P-O Chart?",
        answer: "Benefits of using an I-P-O Chart include improved clarity in system design, easier identification of process steps, and a structured approach to problem-solving. It helps in visualizing the flow of data and understanding how different components interact."
    },
    {
        question: "How does the I-P-O Chart aid in problem-solving?",
        answer: "The I-P-O Chart aids in problem-solving by breaking down complex systems into manageable parts. It helps in identifying what data is needed, what operations are required, and what results are expected, thus facilitating a more organized and systematic approach to solving problems."
    },
    {
        question: "What role does visualization play in using the I-P-O model?",
        answer: "Visualization through the I-P-O Chart helps in understanding and communicating how a system works. It provides a clear and organized view of the system&apos;scomponents, making it easier to analyze, design, and discuss the system&apos;sfunctionality."
    },
    {
        question: "How can an I-P-O Chart be applied in real-world scenarios?",
        answer: "An I-P-O Chart can be applied in real-world scenarios to design and analyze various systems, from software applications to business processes. It helps in mapping out how data is processed and what outputs are generated, aiding in effective system development and problem resolution."
    },
    {
        question: "What challenges might arise when creating an I-P-O Chart?",
        answer: "Challenges in creating an I-P-O Chart may include accurately defining inputs and outputs, ensuring that all relevant processes are included, and maintaining clarity in the chart. It requires careful consideration to ensure that the chart accurately reflects the system&apos;sfunctionality."
    },
    {
        question: "What tools or techniques are useful for creating I-P-O Charts?",
        answer: "Useful tools and techniques for creating I-P-O Charts include diagramming software, flowchart tools, and spreadsheet applications. These tools help in visually representing the components of the chart and organizing information effectively."
    },
    {
        question: "How can an I-P-O Chart improve system design and analysis?",
        answer: "An I-P-O Chart improves system design and analysis by providing a clear framework for understanding and organizing the system&apos;scomponents. It helps in identifying the necessary inputs, processes, and outputs, leading to more effective and efficient system design and analysis."
    },
    {
        question: "What is the significance of the 'Process' component in an I-P-O Chart?",
        answer: "The 'Process' component is significant because it details the operations or computations performed on the input data. It is where the data transformation occurs, turning inputs into meaningful outputs, and is crucial for understanding how the system functions."
    }
];

const Page = () => {
    return (
        <section
            id="FAQ"
            className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6"
        >
            <h1 className="font-bold text-3xl text-center mb-4">
                Brief Questions and Answers (3 marks each)            </h1>
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
