'use client'

import React, { useState } from "react";

const SignificantFigures = () => {
  const [numberToRound, setNumberToRound] = useState(3.14159);
  const [result, setResult] = useState("");

  const roundTo = (decimals) => {
    setResult(numberToRound.toFixed(decimals));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-indigo-800">Significant Figures</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">I. Definition</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Numbers believed to be correct with uncertainty only in the last digit</li>
              <li>Include accurately known figures and first doubtful figure</li>
            </ul>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-600">II. Types of Values</h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="bg-indigo-100 text-indigo-800 font-medium px-3 py-1 rounded-full mr-2">Exact</span>
                Counted clearly (e.g., 3 pencils)
              </li>
              <li className="flex items-center">
                <span className="bg-purple-100 text-purple-800 font-medium px-3 py-1 rounded-full mr-2">Measured</span>
                Contains some uncertainty
              </li>
            </ul>
          </section>
        </div>

        <section className="mt-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-6 border-b pb-2">III. Rules for Determining Significant Figures</h2>
          <ol className="list-decimal pl-6 space-y-4 text-lg">
            <li>All digits from direct measurement are significant</li>
            <li>All nonzero digits (1-9) are always significant</li>
            <li>Zeros after decimal point before nonzero digits are not significant</li>
            <li>Zeros between significant digits are significant</li>
            <li>Trailing zeros after decimal point are significant</li>
          </ol>
        </section>

        <section className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">IV. Scientific Notation</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Used to clarify significant figures in large numbers</li>
            <li>Example: 29,000 → 2.90 x 10^5 (3 significant figures)</li>
          </ul>
        </section>

        <section className="mt-12 bg-indigo-50 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-800">
            <i className="fas fa-calculator mr-2"></i>V. Rounding Off Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium mb-2 text-purple-600">A. Whole Numbers</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Look at next smaller place value</li>
                <li>&lt; 5: Round down</li>
                <li>≥ 5: Round up</li>
              </ul>
              <div className="bg-white p-4 rounded-md shadow">
                <h4 className="font-semibold mb-2">Examples:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>Round 1,274 to nearest hundred: 1,300</li>
                  <li>Round 85 to nearest ten: 90</li>
                  <li>Round 42 to nearest ten: 40</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2 text-purple-600">B. Decimal Numbers</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Look at digit to the right of rounding position</li>
                <li>&lt; 5: Treat as zero</li>
                <li>≥ 5: Add 1 to previous digit, treat rest as zero</li>
              </ul>
              <div className="bg-white p-4 rounded-md shadow">
                <h4 className="font-semibold mb-2">Examples:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>Round 3.14159 to 2 decimal places: 3.14</li>
                  <li>Round 0.0678 to 2 decimal places: 0.07</li>
                  <li>Round 5.6789 to 3 decimal places: 5.679</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl shadow-xl p-6 text-white">
          <h2 className="text-2xl font-semibold mb-4">
            <i className="fas fa-pencil-alt mr-2"></i>Rounding Practice
          </h2>
          <div className="flex flex-col items-center">
            <p className="mb-4">Round the following number:</p>
            <div className="text-4xl font-bold mb-4">{numberToRound}</div>
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <button className="bg-white text-indigo-600 px-4 py-2 rounded shadow hover:bg-indigo-100 transition-colors" onClick={() => roundTo(1)}>
                1 decimal place
              </button>
              <button className="bg-white text-indigo-600 px-4 py-2 rounded shadow hover:bg-indigo-100 transition-colors" onClick={() => roundTo(2)}>
                2 decimal places
              </button>
              <button className="bg-white text-indigo-600 px-4 py-2 rounded shadow hover:bg-indigo-100 transition-colors" onClick={() => roundTo(3)}>
                3 decimal places
              </button>
            </div>
            <div className="text-2xl font-semibold">{result}</div>
          </div>
        </section>

        <section className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-600">VI. Importance</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Conveys precision of measurements</li>
            <li>Essential in scientific and quantitative contexts</li>
            <li>Simplifies complex figures without sacrificing accuracy</li>
          </ul>
        </section>

        <section className="mt-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl shadow-xl p-6 text-white">
          <h2 className="text-2xl font-semibold mb-4">VII. Examples</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li>100.8 s: 4 significant figures (1.008 × 10^2 s)</li>
            <li>0.00580 km: 3 significant figures (5.80 × 10^-3 km)</li>
            <li>210.0 g: 4 significant figures (2.100 × 10^2 g)</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default SignificantFigures;