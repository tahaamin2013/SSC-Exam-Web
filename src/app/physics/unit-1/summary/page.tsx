import React from 'react';

const SummaryPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-200 via-green-200 to-yellow-200 p-8">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Unit Summary</h1>
                <div className="space-y-4">
                    <section className="bg-blue-100 p-4 rounded-lg">
                        <h2 className="text-2xl font-semibold text-blue-800 mb-2">Introduction to Physics</h2>
                        <p className="text-gray-700">
                            Physics is the branch of science which deals with the study of matter and energy.
                        </p>
                    </section>

                    <section className="bg-green-100 p-4 rounded-lg">
                        <h2 className="text-2xl font-semibold text-green-800 mb-2">Physical Quantities</h2>
                        <p className="text-gray-700">
                            Physical quantities are measurable quantities.
                        </p>
                    </section>

                    <section className="bg-yellow-100 p-4 rounded-lg">
                        <h2 className="text-2xl font-semibold text-yellow-800 mb-2">System International (SI)</h2>
                        <p className="text-gray-700">
                            System International (SI) is the system of units which consists of seven base units and a number of derived units.
                            <br />Seven Base SI Units are:
                            <ul className="list-disc ml-6">
                                <li>Metre (length)</li>
                                <li>Kilogram (mass)</li>
                                <li>Second (time)</li>
                                <li>Ampere (current)</li>
                                <li>Candela (luminous intensity)</li>
                                <li>Kelvin (temperature)</li>
                                <li>Mole (amount of substance)</li>
                            </ul>
                        </p>
                    </section>

                    <section className="bg-purple-100 p-4 rounded-lg">
                        <h2 className="text-2xl font-semibold text-purple-800 mb-2">Scientific Notation</h2>
                        <p className="text-gray-700">
                            Scientific Notation is an internationally accepted way of writing numbers in which numbers are recorded using the power of ten and there is only one non-zero digit before the decimal.
                        </p>
                    </section>

                    <section className="bg-red-100 p-4 rounded-lg">
                        <h2 className="text-2xl font-semibold text-red-800 mb-2">Vernier Calliper</h2>
                        <p className="text-gray-700">
                            Vernier Calliper is a device used to measure a fraction of the smallest scale division by sliding another scale over it.
                        </p>
                    </section>

                    <section className="bg-teal-100 p-4 rounded-lg">
                        <h2 className="text-2xl font-semibold text-teal-800 mb-2">Screw Gauge</h2>
                        <p className="text-gray-700">
                            Screw Gauge is a device used to measure a fraction of the smallest scale division by rotatory motion of the circular scale over it.
                        </p>
                    </section>

                    <section className="bg-orange-100 p-4 rounded-lg">
                        <h2 className="text-2xl font-semibold text-orange-800 mb-2">Stop Watch</h2>
                        <p className="text-gray-700">
                            Stop Watch is an instrument used for the measurement of time interval.
                        </p>
                    </section>

                    <section className="bg-indigo-100 p-4 rounded-lg">
                        <h2 className="text-2xl font-semibold text-indigo-800 mb-2">Significant Figures</h2>
                        <p className="text-gray-700">
                            Significant Figures are the accurately known digits and the first doubtful digit in any measurement.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default SummaryPage;
