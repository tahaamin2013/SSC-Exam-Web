// Given Flle
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Page = () => {
    return (
        <section
            id="FAQ"
            className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6"
        >
            <h1 className="font-bold text-3xl text-center mb-4">
                Brief Questions and Answers on Computer History (3 marks each)
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                        <AccordionTrigger>What is the major difference in solving simple problems and complex problems?</AccordionTrigger>
                        <AccordionContent>
                            <p>The major difference in solving simple and complex problems lies in the approach and techniques used. Simple problems often have straightforward solutions and can be solved directly, while complex problems require breaking down into smaller, manageable parts and may involve multiple steps or algorithms.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>Why do software designers prefer to use IPO charts?</AccordionTrigger>
                        <AccordionContent>
                            <p>Software designers prefer IPO (Input-Process-Output) charts because they provide a clear, visual representation of a program&apos;s flow. These charts help in understanding the data inputs, the processing steps, and the expected outputs, making it easier to design and communicate software structure.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>Differentiate between Computational thinking and Logical thinking.</AccordionTrigger>
                        <AccordionContent>
                            <p><strong>Computational thinking</strong> involves problem-solving using concepts fundamental to computer science, such as decomposition, pattern recognition, abstraction, and algorithm design. It&apos;s about formulating problems in a way that enables computational solutions.</p>
                            <p><strong>Logical thinking</strong> is the process of using reasoning consistently to come to a conclusion. While it&apos;s a part of computational thinking, it&apos;s broader and applies to many areas beyond computer science.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>Write four properties of Computational thinking.</AccordionTrigger>
                        <AccordionContent>
                            <p>Four properties of Computational thinking are:</p>
                            <ol>
                                <li>Decomposition: Breaking down complex problems into smaller, manageable parts.</li>
                                <li>Pattern Recognition: Identifying similarities or patterns within and among problems.</li>
                                <li>Abstraction: Focusing on the important information only, ignoring irrelevant details.</li>
                                <li>Algorithm Design: Developing step-by-step instructions for solving problems.</li>
                            </ol>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger>What are the methods used to design a solution?</AccordionTrigger>
                        <AccordionContent>
                            <p>Methods used to design a solution include:</p>
                            <ul>
                                <li>Problem Analysis: Understanding the problem thoroughly.</li>
                                <li>Brainstorming: Generating multiple potential solutions.</li>
                                <li>Flowcharting: Creating visual representations of the solution process.</li>
                                <li>Pseudocode: Writing a detailed yet informal description of the algorithm.</li>
                                <li>Prototyping: Creating a working model of the solution.</li>
                                <li>Testing and Iteration: Refining the solution based on feedback and results.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6">
                        <AccordionTrigger>Which Computational thinking technique breaks down the problem into smaller parts?</AccordionTrigger>
                        <AccordionContent>
                            <p>The Computational thinking technique that breaks down the problem into smaller parts is <strong>Decomposition</strong>. This technique involves dividing a complex problem or system into smaller, more manageable parts that are easier to understand, solve, and manage.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-7">
                        <AccordionTrigger>Identify 3 computing problems from other subjects that you are studying in your class.</AccordionTrigger>
                        <AccordionContent>
                            <p>Three computing problems from other subjects could include:</p>
                            <ol>
                                <li><strong>Mathematics:</strong> Calculating complex statistical analyses for large datasets.</li>
                                <li><strong>Biology:</strong> Simulating genetic inheritance patterns across multiple generations.</li>
                                <li><strong>Physics:</strong> Modeling and predicting the motion of objects under various forces.</li>
                            </ol>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-8">
                        <AccordionTrigger>Why do we need to think computationally?</AccordionTrigger>
                        <AccordionContent>
                            <p>We need to think computationally because it:</p>
                            <ul>
                                <li>Helps in solving complex problems efficiently</li>
                                <li>Improves logical and analytical thinking skills</li>
                                <li>Enables better understanding of how digital technologies work</li>
                                <li>Enhances creativity in problem-solving</li>
                                <li>Prepares individuals for the increasingly digital world and job market</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-9">
                        <AccordionTrigger>How many different telephone numbers are possible with a given area code?</AccordionTrigger>
                        <AccordionContent>
                            <p>Given that:</p>
                            <ul>
                                <li>Telephone numbers usually have 9 digits</li>
                                <li>The first two digits represent the area code and remain constant within a given area</li>
                                <li>The last 7 digits represent the number, and it cannot begin with 0</li>
                            </ul>
                            <p>The number of possible telephone numbers with a given area code is:</p>
                            <p><strong>9 * 10^6 = 9,000,000</strong></p>
                            <p>This is because the first digit of the 7-digit number can&apos;t be 0 (9 choices), and the remaining 6 digits can be any number from 0 to 9 (10 choices each).</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-9">
                        <AccordionTrigger>How many possible routes are there to reach from city A to city C passing by city B?</AccordionTrigger>
                        <AccordionContent>
                            <p>Given:</p>
                            <ul>
                                <li>From city A to city B, there are 4 different roads</li>
                                <li>From city B to city C, there are 2 different roads</li>
                            </ul>
                            <p>To calculate the total number of possible routes:</p>
                            <p><strong>Number of routes = Routes from A to B * Routes from B to C</strong></p>
                            <p><strong>Number of routes = 4 * 2 = 8</strong></p>
                            <p>Therefore, there are 8 possible routes to reach from city A to city C passing by city B.</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}

export default Page
