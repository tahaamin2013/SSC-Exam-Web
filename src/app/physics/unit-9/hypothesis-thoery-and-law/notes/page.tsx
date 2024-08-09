import React from 'react';

const ScientificConcepts = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-green-50 to-teal-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="px-6 py-8">
                    <h1 className="text-3xl font-bold text-center text-teal-600 mb-8">Hypothesis, Theory, and Law in Science</h1>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-teal-800 mb-4">I. Hypothesis</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Tentative assumption or explanation</li>
                            <li>Made before research</li>
                            <li>Can be verified through investigation</li>
                            <li>Designed to be tested as true or false</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-teal-800 mb-4">II. Theory</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Developed from verified hypotheses</li>
                            <li>Rigorously tested through scientific method</li>
                            <li>Explains how nature behaves under specific conditions</li>
                            <li>Well-supported explanation of natural phenomena</li>
                            <li>Examples:
                                <ul className="list-circle pl-6 mt-2">
                                    <li>Kinetic Molecular Theory</li>
                                    <li>Theory of General Relativity</li>
                                </ul>
                            </li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-teal-800 mb-4">III. Law</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Summarizes observed regularities or patterns in nature</li>
                            <li>Describes relationship between variables</li>
                            <li>Developed from discoveries and tested hypotheses</li>
                            <li>Examples:
                                <ul className="list-circle pl-6 mt-2">
                                    <li>Newton&apos;s Law of Universal Gravitation</li>
                                    <li>Boyle&apos;s Law</li>
                                    <li>Laws of Thermodynamics</li>
                                </ul>
                            </li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-teal-800 mb-4">IV. Key Differences between Theory and Law</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Laws: Describe narrower set of conditions</li>
                            <li>Theories: More expansive, focus on how and why of phenomena</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-teal-800 mb-4">V. Important Notes</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Both theories and laws considered factual</li>
                            <li>Can be disproven with new evidence</li>
                            <li>Scientific understanding evolves over time</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-teal-800 mb-4">VI. Scientific Method</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Formulate hypotheses</li>
                            <li>Test hypotheses against natural world</li>
                            <li>Accumulate evidence to support or disprove</li>
                            <li>Develop theories or laws based on verified hypotheses</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ScientificConcepts;