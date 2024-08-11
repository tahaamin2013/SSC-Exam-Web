// components/SignificantFigures.js

import React from 'react';

const SignificantFigures = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Significant Figures</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">I. Definition</h2>
                <ul className="list-disc pl-6">
                    <li>Numbers believed to be correct with uncertainty only in the last digit</li>
                    <li>Include accurately known figures and first doubtful figure</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">II. Types of Values</h2>
                <ul className="list-disc pl-6">
                    <li><span className="font-medium">Exact:</span> Counted clearly (e.g., 3 pencils)</li>
                    <li><span className="font-medium">Measured:</span> Contains some uncertainty</li>
                </ul>
            </section>

            <section className="mb-8 flex flex-col lg:flex-row gap-8">
                <div className="bg-white border h-fit rounded-xl shadow-2xl p-6 flex-1">
                    <h2 className="text-3xl font-bold mb-6 text-indigo-600">III. Rules for Determining Significant Figures</h2>
                    <ol className="list-decimal pl-6 space-y-4 text-lg">
                        <li className="text-gray-700">All digits from direct measurement are significant</li>
                        <li className="text-gray-700">All nonzero digits (1-9) are always significant</li>
                        <li className="text-gray-700">Zeros after decimal point before nonzero digits are not significant</li>
                        <li className="text-gray-700">Zeros between significant digits are significant</li>
                        <li className="text-gray-700">Trailing zeros after decimal point are significant</li>
                    </ol>
                </div>

                <div className="bg-gradient-to-br shadow-2xl from-blue-500 to-purple-600 rounded-xl p-6 flex-1 text-white">
                    <h1 className="text-3xl font-bold mb-6 border-b pb-2">Detailed Rules</h1>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">(i) Non-zero digits</h3>
                            <p className="text-lg leading-relaxed">
                                Digits other than zero are always significant.<br />
                                <span className="font-mono bg-white/20 px-2 py-1 rounded">27</span> has 2 significant digits.<br />
                                <span className="font-mono bg-white/20 px-2 py-1 rounded">275</span> has 3 significant digits.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">(ii) Zeros between significant digits</h3>
                            <p className="text-lg leading-relaxed">
                                Zeros between significant digits are also significant.<br />
                                <span className="font-mono bg-white/20 px-2 py-1 rounded">2705</span> has 4 significant digits.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">(iii) Final zeros after decimal</h3>
                            <p className="text-lg leading-relaxed">
                                Final zero or zeros after decimal are significant.<br />
                                <span className="font-mono bg-white/20 px-2 py-1 rounded">275.00</span> has 5 significant digits.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">(iv) Placeholder zeros</h3>
                            <p className="text-lg leading-relaxed">
                                Zeros used for spacing the decimal point are not significant. Here zeros are placeholders only.<br />
                                <span className="font-mono bg-white/20 px-2 py-1 rounded">0.03</span> has 1 significant digit.<br />
                                <span className="font-mono bg-white/20 px-2 py-1 rounded">0.027</span> has 2 significant digits.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">IV. Scientific Notation</h2>
                <ul className="list-disc pl-6">
                    <li>Used to clarify significant figures in large numbers</li>
                    <li>Example: 29,000 → 2.90 x 10^5 (3 significant figures)</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">V. Rounding Off Numbers</h2>
                <div className="pl-6">
                    <h3 className="text-xl font-medium mb-2">A. Whole Numbers</h3>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Look at next smaller place value</li>
                        <li>&lt;
                            5: Round down</li>
                        <li>≥ 5: Round up</li>
                    </ul>
                    <h3 className="text-xl font-medium mb-2">B. Decimal Numbers</h3>
                    <ul className="list-disc pl-6">
                        <li>Look at digit to the right of rounding position</li>
                        <li>&lt;
                            5: Treat as zero</li>
                        <li>≥ 5: Add 1 to previous digit, treat rest as zero</li>
                    </ul>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">VI. Importance</h2>
                <ul className="list-disc pl-6">
                    <li>Conveys precision of measurements</li>
                    <li>Essential in scientific and quantitative contexts</li>
                    <li>Simplifies complex figures without sacrificing accuracy</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">VII. Examples</h2>
                <ul className="list-disc pl-6">
                    <li>100.8 s: 4 significant figures (1.008 × 10^2 s)</li>
                    <li>0.00580 km: 3 significant figures (5.80 × 10^-3 km)</li>
                    <li>210.0 g: 4 significant figures (2.100 × 10^2 g)</li>
                </ul>
            </section>
        </div>
    );
};

export default SignificantFigures;