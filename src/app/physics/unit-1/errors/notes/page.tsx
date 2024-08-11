import React from 'react';

const Section = ({ title, children }: any) => (
    <section className="mb-8 bg-white rounded-lg shadow-sm p-6">
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
            <li key={index} className="text-gray-600">
                {typeof item === 'string' ? item : (
                    <>
                        <span className="font-medium">{item.text}</span>
                        {item.subItems && <List items={item.subItems} />}
                    </>
                )}
            </li>
        ))}
    </ul>
);

const MeasurementErrors = () => {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Measurement Errors</h1>

            <Section title="1. Definition">
                <List items={[
                    "Error: The uncertainty in a measurement",
                    "All measurements are approximate due to errors"
                ]} />
            </Section>

            <Section title="2. Types of Errors">
                <SubSection title="2.1 Systematic Errors">
                    <p className="mb-3 text-gray-600">Occur consistently in one direction (positive or negative)</p>
                    <h4 className="font-medium mb-2 text-gray-700">Sources:</h4>
                    <List items={[
                        {
                            text: "Instrumental errors", subItems: [
                                "Imperfections in design/calibration",
                                "Zero errors"
                            ]
                        },
                        {
                            text: "Experimental technique errors", subItems: [
                                "Changes in external conditions (temperature, humidity, wind)"
                            ]
                        },
                        {
                            text: "Personal errors", subItems: [
                                "Individual bias",
                                "Improper setup",
                                "Carelessness in observations"
                            ]
                        }
                    ]} />
                    <h4 className="font-medium mt-4 mb-2 text-gray-700">Mitigation:</h4>
                    <List items={[
                        "Improve experimental techniques",
                        "Choose better instruments",
                        "Minimize personal bias",
                        "Estimate and adjust for known systematic errors"
                    ]} />
                </SubSection>

                <SubSection title="2.2 Random Errors">
                    <List items={[
                        "Unpredictable and uncontrollable",
                        "Occur irregularly"
                    ]} />
                    <h4 className="font-medium mt-4 mb-2 text-gray-700">Causes:</h4>
                    <List items={[
                        "Fluctuations in experimental conditions",
                        "Imperfections in measuring instruments",
                        "Human factors (e.g., reaction time, technique variability)"
                    ]} />
                    <h4 className="font-medium mt-4 mb-2 text-gray-700">Characteristics:</h4>
                    <List items={[
                        "Different readings for repeated observations",
                        "Can be both positive and negative"
                    ]} />
                    <h4 className="font-medium mt-4 mb-2 text-gray-700">Mitigation:</h4>
                    <List items={[
                        "Take repeated measurements",
                        "Use statistical analysis",
                        "Calculate mean of multiple measurements"
                    ]} />
                </SubSection>
            </Section>

            <Section title="3. Best Practices">
                <List items={[
                    "Always take multiple measurements",
                    "Calculate the mean to reduce errors",
                    "Use statistical analysis for random errors",
                    "Identify and correct systematic errors where possible"
                ]} />
            </Section>
        </div>
    );
};

export default MeasurementErrors;