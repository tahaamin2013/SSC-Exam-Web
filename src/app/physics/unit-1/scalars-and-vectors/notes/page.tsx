import React from 'react';
import { ArrowRight } from 'lucide-react';

const ScalarsVectorsPage = () => {
    const sections = [
        {
            title: "1. Classification of Physical Quantities",
            content: [
                "Physical quantities are categorized as scalars or vectors based on directional properties"
            ]
        },
        {
            title: "2. Scalar Quantities",
            content: [
                "Definition: Quantities described completely by numerical magnitude and unit",
                "Examples: distance, speed, time, mass, energy, temperature",
                {
                    subtitle: "Properties:",
                    items: [
                        "Require only magnitude and unit",
                        "No direction specified",
                        "Follow ordinary algebraic rules for addition, subtraction, multiplication"
                    ]
                }
            ]
        },
        {
            title: "3. Vector Quantities",
            content: [
                "Definition: Quantities requiring both numerical magnitude (with unit) and direction",
                "Examples: displacement, force, weight, velocity, acceleration, momentum, electric field strength, gravitational field strength",
                {
                    subtitle: "Properties:",
                    items: [
                        "Require magnitude, unit, and direction",
                        "Follow vector algebra rules, not ordinary algebraic rules"
                    ]
                }
            ]
        },
        {
            title: "4. Representation of Vectors",
            content: [
                "Symbolic: Letters (e.g., F for force, A, B for general vectors)",
                {
                    subtitle: "Graphical: Arrows",
                    items: [
                        "Length indicates magnitude (using a scale)",
                        "Arrowhead indicates direction"
                    ]
                },
                {
                    subtitle: "Coordinate system:",
                    items: [
                        "X-axis (horizontal) and Y-axis (vertical)",
                        "Origin (O) at intersection of axes",
                        "Position represented by coordinates (x, y)"
                    ]
                }
            ]
        },
        {
            title: "5. Steps to Represent a Vector in Coordinate System",
            content: [
                "1. Choose and draw a coordinate system",
                "2. Select a suitable scale",
                "3. Draw a line in the fixed direction, length proportional to magnitude",
                "4. Add arrowhead to indicate direction"
            ]
        },
        {
            title: "6. Vector Addition",
            content: [
                "Definition: Combining two or more vectors into a single resultant vector",
                {
                    subtitle: "Method: Geometric addition",
                    items: [
                        "Draw vectors to scale",
                        "Place vectors head-to-tail",
                        "Resultant is vector from tail of first to head of last"
                    ]
                }
            ]
        },
        {
            title: "7. Key Concepts",
            content: [
                "Reference frame: Coordinate system for describing object positions",
                "Importance of direction in vector quantities",
                "Difference between scalar and vector arithmetic"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
                    Scalars and Vectors
                </h1>
                <div className="space-y-8">
                    {sections.map((section, index) => (
                        <div key={index} className="bg-white shadow overflow-hidden sm:rounded-lg">
                            <div className="px-4 py-5 sm:px-6">
                                <h2 className="text-lg leading-6 font-medium text-gray-900">
                                    {section.title}
                                </h2>
                            </div>
                            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                                <dl className="sm:divide-y sm:divide-gray-200">
                                    {section.content.map((item, itemIndex) => (
                                        <div key={itemIndex} className="py-4 sm:py-5 sm:px-6">
                                            {typeof item === 'string' ? (
                                                <p className="text-sm text-gray-900">{item}</p>
                                            ) : (
                                                <>
                                                    <dt className="text-sm font-medium text-gray-500">{item.subtitle}</dt>
                                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0">
                                                        <ul className="list-disc pl-5 space-y-1">
                                                            {item.items.map((subItem, subIndex) => (
                                                                <li key={subIndex}>{subItem}</li>
                                                            ))}
                                                        </ul>
                                                    </dd>
                                                </>
                                            )}
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ScalarsVectorsPage;