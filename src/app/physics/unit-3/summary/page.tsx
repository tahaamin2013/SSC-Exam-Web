import React from 'react';
import { BookOpen, ArrowRight, Scale, Weight, Zap, Activity } from 'lucide-react';

const PhysicsSummary = () => {
    const topics = [
        {
            title: "Dynamics",
            description: "The branch of mechanics discussing motion of bodies and its causes.",
            icon: <ArrowRight className="w-6 h-6 text-blue-500" />
        },
        {
            title: "Force",
            description: "A physical quantity that moves, stops, or changes the speed and direction of a body.",
            icon: <Zap className="w-6 h-6 text-yellow-500" />
        },
        {
            title: "Newton&apos;sLaws of Motion",
            description: [
                "First Law: Objects remain at rest or in uniform motion unless acted upon by a force.",
                "Second Law: Force equals mass times acceleration (F = ma).",
                "Third Law: For every action, there is an equal and opposite reaction."
            ],
            icon: <BookOpen className="w-6 h-6 text-green-500" />
        },
        {
            title: "Mass and Weight",
            description: [
                "Mass: The quantity of matter in a body.",
                "Weight: The downward force exerted by Earth on a body."
            ],
            icon: <Scale className="w-6 h-6 text-purple-500" />
        },
        {
            title: "Gravitational Field Strength",
            description: "The force per unit mass that Earth exerts on a body.",
            icon: <Weight className="w-6 h-6 text-red-500" />
        },
        {
            title: "Momentum",
            description: "The product of mass and velocity. It is a vector quantity.",
            icon: <Activity className="w-6 h-6 text-indigo-500" />
        },
        {
            title: "Law of Conservation of Momentum",
            description: "In a closed system, the total momentum remains constant if no external force is applied.",
            icon: <ArrowRight className="w-6 h-6 text-orange-500" />
        }
    ];

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {topics.map((topic, index) => (
                        <div key={index} className="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="px-6 py-8">
                                <div className="flex items-center mb-4">
                                    {topic.icon}
                                    <h3 className="ml-3 text-xl font-semibold text-gray-900">{topic.title}</h3>
                                </div>
                                {Array.isArray(topic.description) ? (
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        {topic.description.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-gray-700">{topic.description}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PhysicsSummary;