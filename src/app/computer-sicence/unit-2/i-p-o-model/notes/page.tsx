const Page = () => {
  return (
    <body className="bg-gradient-to-r from-blue-100 to-purple-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
          <h1 className="text-3xl font-bold text-white">
            2.4 Input-Processing-Output (I-P-O) Model
          </h1>
        </div>
        <div className="p-6 space-y-6 bg-white text-gray-900">
          <h1 className="text-2xl font-bold">Definition: Computer Systems Work on the Input-Process-Output Model</h1>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Components:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Input</strong></li>
              <li><strong>Process</strong></li>
              <li><strong>Output</strong></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Key Aspects:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Input:</strong> Data given to the system</li>
              <li><strong>Process:</strong> Operations performed by the system</li>
              <li><strong>Output:</strong> Results presented by the system</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Input:</h2>
            <p>Requirements from the environment</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Processing:</h2>
            <p>Computation dependent on the input requirements</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Output:</h2>
            <p>Results presented to the environment</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Purpose:</h2>
            <p>Allows breaking down problems into three core components for analysis</p>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Page;
