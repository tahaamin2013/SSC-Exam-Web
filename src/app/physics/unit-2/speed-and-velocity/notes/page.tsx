import React from 'react';
import { ArrowRight, Zap, Gauge } from 'lucide-react';

const SpeedVelocityNotes = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-purple-600 text-white p-6">
                    <h1 className="text-3xl font-bold">2.3 Speed and Velocity</h1>
                </div>

                <div className="p-6 space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold text-purple-800 mb-4">Key Concepts</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <ConceptCard
                                title="Speed"
                                icon={<Gauge className="w-12 h-12 text-blue-500" />}
                                description="Measure of how fast an object is moving."
                                formula="speed = distance / time"
                                properties={[
                                    "Scalar quantity",
                                    "SI unit: meter per second (m/s)",
                                    "No direction specified"
                                ]}
                            />
                            <ConceptCard
                                title="Velocity"
                                icon={<Zap className="w-12 h-12 text-red-500" />}
                                description="Speed with a specified direction."
                                formula="velocity = displacement / time"
                                properties={[
                                    "Vector quantity",
                                    "SI unit: meter per second (m/s)",
                                    "Direction specified"
                                ]}
                            />
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-purple-800 mb-4">Types of Speed and Velocity</h2>
                        <div className="space-y-4">
                            <TypeCard
                                title="Average Speed"
                                description="Total distance covered divided by total time taken."
                                formula="Average speed = total distance / total time"
                            />
                            <TypeCard
                                title="Instantaneous Speed"
                                description="Speed at a particular instant of time."
                            />
                            <TypeCard
                                title="Uniform Speed"
                                description="Equal distances covered in equal intervals of time."
                            />
                            <TypeCard
                                title="Variable Speed"
                                description="Speed that changes over time."
                            />
                            <TypeCard
                                title="Average Velocity"
                                description="Total displacement divided by total time taken."
                                formula="Average velocity = total displacement / total time"
                            />
                            <TypeCard
                                title="Instantaneous Velocity"
                                description="Velocity at a particular instant of time."
                            />
                            <TypeCard
                                title="Uniform Velocity"
                                description="Equal displacements covered in equal intervals of time."
                            />
                            <TypeCard
                                title="Variable Velocity"
                                description="Velocity that changes over time (in speed or direction)."
                            />
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-purple-800 mb-4">Interesting Facts</h2>
                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Usain Bolt&apos;s top speed: 10.44 m/s or 37.58 km/h</li>
                                <li>Slowest animal (3-toed sloth): 0.00134112 m/s or 0.0048 km/h</li>
                                <li>Fastest animal (Peregrine Falcon): 108.333 m/s or 390 km/h</li>
                                <li>Speed of light: approximately 3×10⁸ m/s</li>
                                <li>Speed of sound in air: approximately 343 m/s</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-purple-800 mb-4">Example Problems</h2>
                        <div className="space-y-4">
                            <ExampleCard
                                title="Reaction Time of a Batsman"
                                problem="Shoaib Akhtar bowled at 161.3 km/h. If the batsman is 17.5 m away, what&apos;sthe reaction time?"
                                solution={`
                  1. Convert speed to m/s: 161.3 km/h = 44.8 m/s
                  2. Use time = distance / speed
                  3. t = 17.5 m / 44.8 m/s = 0.39 s
                `}
                                answer="The batsman has 0.39 seconds to react."
                            />
                            <ExampleCard
                                title="Fastest Train in the World"
                                problem="Shanghai&apos;sMaglev traveled 30 km in 7 minutes and 30 seconds. What&apos;sits speed in km/h?"
                                solution={`
                  1. Convert time to seconds: 7.5 min = 450 s
                  2. Calculate speed: 30,000 m / 450 s = 66.67 m/s
                  3. Convert to km/h: 66.67 m/s * (3600 s / 1 h) * (1 km / 1000 m)
                `}
                                answer="The train&apos;sspeed is 240.01 km/h."
                            />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

const ConceptCard = ({ title, icon, description, formula, properties }: any) => (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
        {icon}
        <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-purple-600 font-mono mb-4">{formula}</p>
        <ul className="text-left w-full">
            {properties.map((prop: any, index: any) => (
                <li key={index} className="flex items-start mb-1">
                    <ArrowRight className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{prop}</span>
                </li>
            ))}
        </ul>
    </div>
);

const TypeCard = ({ title, description, formula }: any) => (
    <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="text-lg font-semibold text-purple-700 mb-2">{title}</h3>
        <p className="text-gray-700 mb-2">{description}</p>
        {formula && <p className="text-purple-600 font-mono">{formula}</p>}
    </div>
);

const ExampleCard = ({ title, problem, solution, answer }: any) => (
    <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-semibold text-purple-700 mb-2">{title}</h3>
        <p className="text-gray-700 mb-2"><strong>Problem:</strong> {problem}</p>
        <p className="text-gray-700 mb-2"><strong>Solution:</strong></p>
        <pre className="bg-gray-100 p-2 rounded text-sm mb-2">{solution}</pre>
        <p className="text-purple-600 font-semibold">{answer}</p>
    </div>
);

export default SpeedVelocityNotes;