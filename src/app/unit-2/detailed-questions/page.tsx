import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const QuestionDashboard = () => {
    return (
        <section
            id="Questions"
            className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6"
        >
            <h1 className="font-bold text-3xl text-center mb-4">
                Problem Solving and IPO Chart Questions
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Identify whether the given problems are Decision Problem, Counting Problem or Search Problem. Write your answer in front of each problem given below:</AccordionTrigger>
                        <AccordionContent>
                            <ul className="list-disc pl-5">
                                <li>Does a given binary string have an even number of zeros?</li>
                                <li>Flipping a coin result in Head or tails. If flip a coin 20 times, how many different sequences of heads and tails are possible?</li>
                                <li>Does a certain Java program say &quot;yes&quot; to an empty input?</li>
                                <li>How many ways can the letters of the word TRIANGLE be arranged?</li>
                                <li>N queens problem: where N=8, it is to place eight queens on a chessboard such that no queen attacks any other.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>A student has to take one course of physics, one of science and one of mathematics. He may choose one of 3 physics courses (P1, P2, P3), one of 2 science courses (S1, S2) and one of 2 mathematics courses (M1, M2). In how many ways can this student select the 3 courses he has to take?</AccordionTrigger>
                        <AccordionContent>
                            <p>This is a counting problem. The student needs to make three independent choices:</p>
                            <ul className="list-disc pl-5">
                                <li>1 out of 3 physics courses</li>
                                <li>1 out of 2 science courses</li>
                                <li>1 out of 2 mathematics courses</li>
                            </ul>
                            <p>To find the total number of ways, we multiply these choices: 3 * 2 * 2 = 12 ways</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>Create an IPO chart which will accept the ages of four boys and calculate their total age and average age. The program will display both the total age and the average age.</AccordionTrigger>
                        <AccordionContent>
                            <p>IPO Chart:</p>
                            <table className="border-collapse border border-gray-400 w-full">
                                <thead>
                                    <tr>
                                        <th className="border border-gray-400 px-4 py-2">Input</th>
                                        <th className="border border-gray-400 px-4 py-2">Process</th>
                                        <th className="border border-gray-400 px-4 py-2">Output</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-400 px-4 py-2">
                                            Age of boy 1<br />
                                            Age of boy 2<br />
                                            Age of boy 3<br />
                                            Age of boy 4
                                        </td>
                                        <td className="border border-gray-400 px-4 py-2">
                                            1. Sum all four ages<br />
                                            2. Divide sum by 4 to get average
                                        </td>
                                        <td className="border border-gray-400 px-4 py-2">
                                            Total age<br />
                                            Average age
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>Create an IPO chart of a scenario that allows a user to enter in two numbers. The operation to be performed is either addition, subtraction, multiplication or division and accordingly the output should be given to the user.</AccordionTrigger>
                        <AccordionContent>
                            <p>IPO Chart:</p>
                            <table className="border-collapse border border-gray-400 w-full">
                                <thead>
                                    <tr>
                                        <th className="border border-gray-400 px-4 py-2">Input</th>
                                        <th className="border border-gray-400 px-4 py-2">Process</th>
                                        <th className="border border-gray-400 px-4 py-2">Output</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-400 px-4 py-2">
                                            Number 1<br />
                                            Number 2<br />
                                            Operation (+ - * /)
                                        </td>
                                        <td className="border border-gray-400 px-4 py-2">
                                            Perform selected operation on the two numbers
                                        </td>
                                        <td className="border border-gray-400 px-4 py-2">
                                            Result of the operation
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger>The child wants to plan a birthday party for their friend.</AccordionTrigger>
                        <AccordionContent>
                            <p>a) Draw an IPO chart of this situation.</p>
                            <table className="border-collapse border border-gray-400 w-full mb-4">
                                <thead>
                                    <tr>
                                        <th className="border border-gray-400 px-4 py-2">Input</th>
                                        <th className="border border-gray-400 px-4 py-2">Process</th>
                                        <th className="border border-gray-400 px-4 py-2">Output</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-400 px-4 py-2">
                                            Friend&apos;s name<br />
                                            Date of party<br />
                                            Number of guests<br />
                                            Budget<br />
                                            Venue options
                                        </td>
                                        <td className="border border-gray-400 px-4 py-2">
                                            1. Choose venue<br />
                                            2. Plan activities<br />
                                            3. Order cake and food<br />
                                            4. Send invitations
                                        </td>
                                        <td className="border border-gray-400 px-4 py-2">
                                            Party plan details<br />
                                            Guest list<br />
                                            Budget allocation
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>b) Write down properties on computation thinking.</p>
                            <ul className="list-disc pl-5">
                                <li>Decomposition: Breaking down the party planning into smaller tasks</li>
                                <li>Pattern Recognition: Identifying common elements in successful parties</li>
                                <li>Abstraction: Focusing on essential details while ignoring less important ones</li>
                                <li>Algorithm Design: Creating a step-by-step plan for the party</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}

export default QuestionDashboard;