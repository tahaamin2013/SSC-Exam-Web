import React from 'react';
import { TrendingUp, ArrowRight, AlertTriangle } from 'lucide-react';

const AccelerationNotes = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-indigo-600 text-white p-6">
                    <h1 className="text-3xl font-bold">2.4 Acceleration</h1>
                </div>

                <div className="p-6 space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Key Concept</h2>
                        <ConceptCard
                            title="Acceleration"
                            icon={<TrendingUp className="w-12 h-12 text-indigo-500" />}
                            description="The measure of change in velocity with the passage of time."
                            formula="a = Δv / Δt"
                            properties={[
                                "Vector quantity",
                                "SI unit: meter per second squared (m/s²)",
                                "Same direction as the change in velocity",
                                "Can be positive (increasing velocity) or negative (decreasing velocity)",
                                "Can occur due to change in speed, direction, or both"
                            ]}
                        />
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Types of Acceleration</h2>
                        <div className="space-y-4">
                            <TypeCard
                                title="Uniform Acceleration"
                                description="Velocity changes at the same rate each second. Equal changes in velocity occur in equal intervals of time."
                            />
                            <TypeCard
                                title="Non-uniform Acceleration"
                                description="The rate of velocity change is not steady over time. Common in real-life scenarios with varying forces."
                            />
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Example Problem</h2>
                        <ExampleCard
                            title="Acceleration of Cheetah"
                            problem="A cheetah accelerates from 0 to 26.8 m/s in 3 seconds. Calculate its acceleration."
                            solution={`
                Given:
                Initial velocity v₁ = 0 m/s (East)
                Final velocity v₂ = 26.8 m/s (East)
                Time taken Δt = 3 s

                Using a = (v₂ - v₁) / Δt
                a = (26.8 m/s - 0 m/s) / 3 s
                a = 8.93 m/s²
              `}
                            answer="The cheetah&apos;sacceleration is 8.93 m/s² towards the East."
                        />
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Visual Concept Check</h2>
                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                            <h3 className="font-semibold text-lg mb-2">Can You Tell?</h3>
                            <p>Identify the acceleration in each case:</p>
                            <ul className="list-disc pl-5 space-y-2 mt-2">
                                <li>v₁ = 2 m/s, v₂ = 2 m/s</li>
                                <li>v₁ = 2 m/s, v₂ = 4 m/s</li>
                                <li>v₁ = 3 m/s, v₂ = 1 m/s</li>
                                <li>v₁ = 2 m/s, v₂ = 1 m/s</li>
                                <li>v₁ = 3 m/s, v₂ = 4 m/s</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Historical Note</h2>
                        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg">
                            <p><strong>Galileo&apos;s Contribution:</strong> First scientist to measure speed as distance over time. He discovered that objects of different masses fall at the same rate, introducing the concept of gravitational acceleration (g).</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

const ConceptCard = ({ title, icon, description, formula, properties }:any) => (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
        {icon}
        <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-indigo-600 font-mono mb-4">{formula}</p>
        <ul className="text-left w-full">
            {properties.map((prop: any, index: any) => (
                <li key={index} className="flex items-start mb-1">
                    <ArrowRight className="w-4 h-4 text-indigo-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{prop}</span>
                </li>
            ))}
        </ul>
    </div>
);

const TypeCard = ({ title, description }:any) => (
    <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="text-lg font-semibold text-indigo-700 mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
    </div>
);

const ExampleCard = ({ title, problem, solution, answer }:any) => (
    <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-semibold text-indigo-700 mb-2">{title}</h3>
        <p className="text-gray-700 mb-2"><strong>Problem:</strong> {problem}</p>
        <p className="text-gray-700 mb-2"><strong>Solution:</strong></p>
        <pre className="bg-gray-100 p-2 rounded text-sm mb-2">{solution}</pre>
        <p className="text-indigo-600 font-semibold">{answer}</p>
    </div>
);

export default AccelerationNotes;