import React from 'react'

const page = () => {
    return (
        <div className="max-w-2xl mx-auto p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">3.5 Debug The Code</h2>

            <p className="mb-3 text-gray-600">
                Debugging locates errors in code. In Visual Studio .Net, use &apos;Run Debugging&apos; to access the debug menu and console.
            </p>

            <div className="bg-gray-100 p-3 rounded-md mb-3">
                <h3 className="text-lg font-semibold mb-2">Key Debugging Features:</h3>
                <ul className="list-disc pl-5 text-sm">
                    <li>Pause/Continue: Control execution</li>
                    <li>Step Into: Detailed line-by-line analysis</li>
                    <li>Breakpoints: Pause at specific lines</li>
                </ul>
            </div>

            <p className="mb-3 text-gray-600">
                Set breakpoints to analyze variable values during execution, helping to trace and fix bugs efficiently.
            </p>

            <div className="bg-gray-100 p-3 rounded-md">
                <h3 className="text-lg font-semibold mb-2">Breakpoint Example:</h3>
                <code className="text-xs text-gray-800 whitespace-pre-wrap">
                    {`function calculateSum(a, b) {
    let sum = a + b;  // Breakpoint here
    return sum;
}`}
                </code>
            </div>
        </div>)
}

export default page