import React from 'react';
import { Book, Move, RotateCw, Vibrate, ArrowRight } from 'lucide-react';

const KinematicsNotes = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-blue-600 text-white p-6">
                    <h1 className="text-3xl font-bold">Unit 2: Kinematics</h1>
                </div>

                <div className="p-6 space-y-6">
                    {/* Previous sections remain the same */}
                    <section>
                        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Introduction</h2>
                        <p className="text-gray-700">
                            Mechanics is the study of motion. Kinematics, derived from the Greek word for motion,
                            focuses on describing motion without considering its causes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Rest and Motion</h2>
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                            <p className="text-blue-700">
                                An object is at rest if it doesn&apos;t change position over time, and in motion if it does.
                            </p>
                        </div>
                        <p className="text-gray-700 mb-2">
                            Rest and motion are relative concepts and depend on the observer&apos;s frame of reference.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Types of Motion</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <MotionCard
                                title="Translatory Motion"
                                icon={<Move className="w-12 h-12 text-green-500" />}
                                description="All points of an object move uniformly in the same direction without changing orientation."
                            />
                            <MotionCard
                                title="Rotatory Motion"
                                icon={<RotateCw className="w-12 h-12 text-blue-500" />}
                                description="An object rotates around its own axis."
                            />
                            <MotionCard
                                title="Vibratory Motion"
                                icon={<Vibrate className="w-12 h-12 text-purple-500" />}
                                description="An object moves back and forth repeatedly about a mean position."
                            />
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Types of Translatory Motion</h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li><strong className="text-blue-600">Rectilinear Motion:</strong> Object moves in a straight line path.</li>
                            <li><strong className="text-blue-600">Circular Motion:</strong> Object moves in a curved path with constant radius.</li>
                            <li><strong className="text-blue-600">Random Motion:</strong> Object moves with no specific path.</li>
                        </ul>
                    </section>

                    {/* New section for examples */}
                    <section className="bg-gray-50 p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Examples of Motion Types</h2>
                        <div className="space-y-4">
                            <ExampleCard
                                title="Translatory Motion"
                                examples={[
                                    "A car moving on a straight highway",
                                    "An elevator going up or down",
                                    "A boat sailing across a lake"
                                ]}
                            />
                            <ExampleCard
                                title="Rotatory Motion"
                                examples={[
                                    "A ceiling fan spinning",
                                    "Earth rotating on its axis",
                                    "A carousel turning at an amusement park"
                                ]}
                            />
                            <ExampleCard
                                title="Vibratory Motion"
                                examples={[
                                    "A guitar string being plucked",
                                    "A pendulum swinging back and forth",
                                    "The vibration of a mobile phone"
                                ]}
                            />
                            <ExampleCard
                                title="Rectilinear Motion"
                                examples={[
                                    "A free-falling object",
                                    "A bullet fired from a gun",
                                    "An athlete running on a straight track"
                                ]}
                            />
                            <ExampleCard
                                title="Circular Motion"
                                examples={[
                                    "A satellite orbiting Earth",
                                    "A car driving around a roundabout",
                                    "The tip of a clock&apos;ssecond hand"
                                ]}
                            />
                            <ExampleCard
                                title="Random Motion"
                                examples={[
                                    "Brownian motion of particles in a fluid",
                                    "A leaf falling from a tree",
                                    "The path of a butterfly in flight"
                                ]}
                            />
                        </div>
                    </section>
                </div>

                <div className="bg-gray-50 p-6 border-t border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Takeaway</h3>
                    <p className="text-gray-700">
                        Understanding the specific type of motion is crucial for accurately analyzing and describing
                        the behavior of moving objects in various fields, including engineering, physics, and everyday life.
                    </p>
                </div>
            </div>
        </div>
    );
};

const MotionCard = ({ title, icon, description }: any) => (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
        {icon}
        <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const ExampleCard = ({ title, examples }: any) => (
    <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">{title}</h3>
        <ul className="space-y-1">
            {examples.map((example: any, index: any) => (
                <li key={index} className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{example}</span>
                </li>
            ))}
        </ul>
    </div>
);

export default KinematicsNotes;