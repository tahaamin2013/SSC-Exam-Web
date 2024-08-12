import React from 'react';
import { ArrowRight, MapPin, Ruler } from 'lucide-react';

const DistanceDisplacementNotes = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-green-600 text-white p-6">
                    <h1 className="text-3xl font-bold">2.2 Distance and Displacement</h1>
                </div>

                <div className="p-6 space-y-6">
                    <section>
                        <h2 className="text-2xl font-semibold text-green-800 mb-4">Key Concepts</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <ConceptCard
                                title="Distance"
                                icon={<Ruler className="w-12 h-12 text-blue-500" />}
                                description="The length of the path traveled between two positions."
                                properties={[
                                    "Scalar quantity (no direction)",
                                    "Denoted by Δx, Δr, Δs, Δd, or Δl",
                                    "SI unit: metre (m)"
                                ]}
                            />
                            <ConceptCard
                                title="Displacement"
                                icon={<MapPin className="w-12 h-12 text-red-500" />}
                                description="The shortest distance from the initial position to the final position (straight directed distance)."
                                properties={[
                                    "Vector quantity (has direction)",
                                    "Change in position vector Δd",
                                    "SI unit: metre (m)"
                                ]}
                            />
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-green-800 mb-4">Mathematical Representation</h2>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-lg font-semibold mb-2">Displacement:</p>
                            <p className="text-gray-800 font-mono">Δd = d₂ - d₁</p>
                            <p className="text-gray-600 mt-2">Where:</p>
                            <ul className="list-disc pl-6 text-gray-700">
                                <li>Δd: change in position (displacement)</li>
                                <li>d₂: final position</li>
                                <li>d₁: initial position</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-green-800 mb-4">Point to Ponder</h2>
                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                            <p className="text-gray-800">
                                The symbol Δ (Greek letter delta) is used to represent a &apos;change in&apos; any quantity.
                                For example, elapsed time Δt is the difference between the ending time t₂ and beginning time t₁:
                            </p>
                            <p className="text-gray-800 font-mono mt-2">Δt = t₂ - t₁</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-green-800 mb-4">Can You Tell?</h2>
                        <div className="space-y-4">
                            <QuestionCard
                                question="If on a 400 m running track your starting point and ending point are the same, how much distance have you covered? What is your displacement?"
                                answer={
                                    <ul className="list-disc pl-6">
                                        <li>Distance covered: 400 m</li>
                                        <li>Displacement: 0 m (starting point = ending point)</li>
                                    </ul>
                                }
                            />
                            <QuestionCard
                                question="Can displacement be greater than distance? Can distance and displacement be equal?"
                                answer={
                                    <ul className="list-disc pl-6">
                                        <li>Displacement cannot be greater than distance.</li>
                                        <li>Distance and displacement can be equal when moving in a straight line.</li>
                                    </ul>
                                }
                            />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

const ConceptCard = ({ title, icon, description, properties }: any) => (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
        {icon}
        <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="text-left w-full">
            {properties.map((prop: any, index: any) => (
                <li key={index} className="flex items-start mb-1">
                    <ArrowRight className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{prop}</span>
                </li>
            ))}
        </ul>
    </div>
);

const QuestionCard = ({ question, answer }: any) => (
    <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="text-lg font-semibold text-green-700 mb-2">{question}</h3>
        <div className="text-gray-700">{answer}</div>
    </div>
);

export default DistanceDisplacementNotes;