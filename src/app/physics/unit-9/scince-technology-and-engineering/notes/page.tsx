import React from 'react';

const ScienceTechnologyEngineering = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-50 to-pink-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="px-6 py-8">
                    <h1 className="text-3xl font-bold text-center text-purple-600 mb-8">Science, Technology, and Engineering</h1>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-purple-800 mb-4">I. Science</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>System of knowledge about the universe</li>
                            <li>Establishes accurate conclusions about natural phenomena</li>
                            <li>Process:
                                <ul className="list-circle pl-6 mt-2">
                                    <li>Formulate hypotheses</li>
                                    <li>Gather information</li>
                                    <li>Perform experiments</li>
                                </ul>
                            </li>
                            <li>Goal: Understand how things in the natural world work or behave</li>
                            <li>Example: Physics studying principles of motion and energy</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-purple-800 mb-4">II. Technology</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Application of scientific knowledge for practical purposes</li>
                            <li>Develops material products or processes to satisfy human needs/desires</li>
                            <li>Creates tools, machines, and systems to solve problems or achieve goals</li>
                            <li>Example: Development of smartphones</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-purple-800 mb-4">III. Engineering</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Practical application of scientific and mathematical principles</li>
                            <li>Creates and constructs structures, devices, and processes</li>
                            <li>Solves real-world problems creatively and systematically</li>
                            <li>Example: Civil engineering designing infrastructure</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-purple-800 mb-4">IV. Interconnections</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Science provides knowledge base for technology and engineering</li>
                            <li>Technology enables new scientific exploration</li>
                            <li>Engineering applies scientific principles to create new technologies</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-purple-800 mb-4">V. Key Differences</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Science: Pursuit of knowledge and understanding</li>
                            <li>Technology: Application of knowledge for practical purposes</li>
                            <li>Engineering: Problem-solving using scientific and mathematical principles</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-purple-800 mb-4">VI. Impact</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Advances in one field often lead to progress in others</li>
                            <li>Continuous cycle of discovery, application, and innovation</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ScienceTechnologyEngineering;