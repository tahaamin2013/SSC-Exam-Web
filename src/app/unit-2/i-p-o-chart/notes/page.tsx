// pages/data-transmission.tsx
import React from 'react';

const DataTransmission = () => {
    return (
<body className="bg-gradient-to-r from-blue-100 to-purple-100 min-h-screen p-8">
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
            <h1 className="text-3xl font-bold text-white">2.5 Input-Processing-Output (I-P-O) Chart</h1>
        </div>
        <div className="p-6 space-y-6">
            <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">Overview</h2>
                <p className="text-gray-600">IPO charts visually represent the Inputs, Process, and Output in tabular form. They are considered a handy tool that software designers use to solve problems.</p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">Components of an IPO Chart</h2>
                <div className="bg-gray-100 rounded-lg p-4">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border p-2 text-left">Input</th>
                                <th className="border p-2 text-left">Process</th>
                                <th className="border p-2 text-left">Output</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border p-2">Data entered in the system</td>
                                <td className="border p-2">Operations that will be applied on the input</td>
                                <td className="border p-2">Data that has been turned into information</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">Example 1: Computing Rectangle Area</h2>
                <div className="bg-green-100 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Input:</h3>
                    <p>Length and Width of the rectangle</p>
                    <h3 className="font-semibold mt-2 mb-2">Process:</h3>
                    <p>Area = Length * Width</p>
                    <h3 className="font-semibold mt-2 mb-2">Output:</h3>
                    <p>Area of the rectangle</p>
                </div>
                <p className="mt-2 text-gray-600">The input column contains the length and width of the rectangle. The process column shows the multiplication operation to be performed. The output provides the calculated area to the user.</p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">Example 2: Calculate Student&apos;s Average</h2>
                <div className="bg-yellow-100 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Inputs:</h3>
                    <p>Grade 1, Grade 2, Grade 3</p>
                    <h3 className="font-semibold mt-2 mb-2">Process:</h3>
                    <ol className="list-decimal list-inside">
                        <li>Sum all grades</li>
                        <li>Divide sum by number of grades</li>
                    </ol>
                    <h3 className="font-semibold mt-2 mb-2">Output:</h3>
                    <p>Student grade average</p>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">Key Points Summary</h2>
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="border p-2 text-left">Aspect</th>
                            <th className="border p-2 text-left">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border p-2 font-semibold">Purpose</td>
                            <td className="border p-2">Visually represent the IPO model</td>
                        </tr>
                        <tr>
                            <td className="border p-2 font-semibold">Usage</td>
                            <td className="border p-2">Software designers use it to solve problems</td>
                        </tr>
                        <tr>
                            <td className="border p-2 font-semibold">Input</td>
                            <td className="border p-2">Data entered into the system</td>
                        </tr>
                        <tr>
                            <td className="border p-2 font-semibold">Process</td>
                            <td className="border p-2">Operations applied to the input</td>
                        </tr>
                        <tr>
                            <td className="border p-2 font-semibold">Output</td>
                            <td className="border p-2">Resulting information for the user</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    </div>
</body>
    );
};

export default DataTransmission;
