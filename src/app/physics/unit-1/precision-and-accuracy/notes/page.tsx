import React from 'react';

const Section = ({ title, children }: any) => (
    <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">{title}</h2>
        {children}
    </section>
);

const SubSection = ({ title, children }: any) => (
    <div className="mb-4">
        <h3 className="text-xl font-medium mb-3 text-gray-700">{title}</h3>
        {children}
    </div>
);

const List = ({ items }: any) => (
    <ul className="list-disc pl-5 space-y-2">
        {items.map((item: any, index: any) => (
            <li key={index} className="text-gray-600">{item}</li>
        ))}
    </ul>
);

const Table = ({ headers, rows }: any) => (
    <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
                <tr>
                    {headers.map((header: any, index: any) => (
                        <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
                {rows.map((row: any, rowIndex: any) => (
                    <tr key={rowIndex}>
                        {row.map((cell: any, cellIndex: any) => (
                            <td key={cellIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {cell}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

const PrecisionAndAccuracy = () => {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Precision and Accuracy in Measurements</h1>

            <Section title="1. Definitions">
                <SubSection title="1.1 Precision">
                    <List items={[
                        "Degree of agreement between repeated measurements of the same quantity",
                        "Focuses on consistency and repeatability of results",
                        "Indicates reliability and reproducibility of the measurement process"
                    ]} />
                </SubSection>
                <SubSection title="1.2 Accuracy">
                    <List items={[
                        "How close a measured value is to the true or accepted value",
                        "Measures the absence of systematic errors or biases",
                        "Focuses on closeness to the true value, regardless of reproducibility"
                    ]} />
                </SubSection>
            </Section>

            <Section title="2. Characteristics">
                <SubSection title="2.1 Precision">
                    <List items={[
                        "Indicated by little variation or scatter in repeated measurements",
                        "Does not necessarily imply accuracy",
                        "Example: A scale that consistently gives the same weight within 0.1 kg margin"
                    ]} />
                </SubSection>
                <SubSection title="2.2 Accuracy">
                    <List items={[
                        "Indicated by closeness to the true value",
                        "Does not necessarily imply precision",
                        "Example: A thermometer that reads close to the actual temperature, even if readings vary"
                    ]} />
                </SubSection>
            </Section>

            <Section title="3. Comparison">
                <Table
                    headers={["Precision", "Accuracy", "Description"]}
                    rows={[
                        ["High", "High", "Measurements are consistent and close to the true value"],
                        ["High", "Low", "Measurements are consistent but systematically off from the true value"],
                        ["Low", "High", "Measurements are scattered but average close to the true value"],
                        ["Low", "Low", "Measurements are scattered and far from the true value"]
                    ]}
                />
            </Section>

            <Section title="4. Analogy: Dart Throwing">
                <List items={[
                    "Accurate: Darts land close to the center (bullseye)",
                    "Precise: Darts are tightly grouped",
                    "Scenarios:",
                    "1. Accurate and precise: Darts hit bullseye and are tightly grouped",
                    "2. Accurate but not precise: Darts near center but scattered",
                    "3. Precise but not accurate: Darts tightly grouped but off-center"
                ]} />
            </Section>

            <Section title="5. Importance in Measurements">
                <p className="text-gray-600 mb-2">Both precision and accuracy are desirable</p>
                <p className="text-gray-600 mb-2">Achieving both requires:</p>
                <List items={[
                    "Careful calibration of instruments",
                    "Control of experimental conditions",
                    "Consideration of error sources"
                ]} />
            </Section>

            <Section title="6. Practice Question">
                <p className="text-gray-600 mb-2">Q: Books in a library were counted one by one. There were a total of 57,000 books.</p>
                <p className="text-gray-600 mb-2">a) How many significant digits are there in the result?</p>
                <p className="text-gray-600 mb-2">b) Will the result change if the books are measured in packets of 10?</p>
                <p className="text-gray-600 mt-4">A:</p>
                <p className="text-gray-600">a) 3 significant digits (5, 7, and the first 0)</p>
                <p className="text-gray-600">b) Yes, the result would change to 57,000 ± 10 books, affecting precision</p>
            </Section>
        </div>
    );
};

export default PrecisionAndAccuracy;