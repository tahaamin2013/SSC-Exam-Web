// pages/scientific-notation.tsx

import React from 'react';
import { NextPage } from 'next';

const ScientificNotation: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <h1 className="text-3xl font-bold leading-6 text-gray-900">Standard Form / Scientific Notation in Physics</h1>
        </div>
        <div className="border-t border-gray-200">
          <div className="px-4 py-6 sm:px-6">
            <h2 className="text-2xl font-semibold text-gray-800">1. Introduction</h2>
            <p className="mt-2 text-gray-600">
              In physics, we often encounter very large or very small numbers. Using such numbers can be time-consuming and prone to errors. Scientific notation provides a convenient way to represent these numbers.
            </p>
          </div>

          <div className="px-4 py-6 sm:px-6 border-t border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800">2. Scientific Notation</h2>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">2.1 Definition</h3>
            <p className="mt-2 text-gray-600">
              Scientific notation represents a number as the product of:
            </p>
            <ul className="list-disc list-inside ml-6 mt-2 text-gray-600">
              <li>A mantissa (a number greater than or equal to 1 and less than 10)</li>
              <li>A power of 10 (the exponent)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-4">2.2 General Form</h3>
            <p className="mt-2 text-gray-600">
              number = mantissa × 10^exponent
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-4">2.3 Advantages</h3>
            <ul className="list-disc list-inside ml-6 mt-2 text-gray-600">
              <li>Simplifies representation of very large or small numbers</li>
              <li>Facilitates calculations with such numbers</li>
              <li>Reduces errors in writing and manipulating large numbers</li>
            </ul>
          </div>

          <div className="px-4 py-6 sm:px-6 border-t border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800">3. Examples in Physics</h2>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">3.1 Large Numbers</h3>
            <div className="space-y-4 mt-2 text-gray-600">
              <p><strong>Width of the observable universe:</strong></p>
              <p>Standard form: 880,000,000,000,000,000,000,000,000 meters</p>
              <p>Scientific notation: 8.8 × 10^26 meters</p>
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>Mantissa: 8.8</li>
                <li>Exponent: 26</li>
              </ul>

              <p><strong>Mass of Earth:</strong></p>
              <p>Standard form: 5,980,000,000,000,000,000,000,000 kg</p>
              <p>Scientific notation: 5.98 × 10^24 kg</p>
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>Mantissa: 5.98</li>
                <li>Exponent: 24</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-4">3.2 Small Numbers</h3>
            <div className="space-y-4 mt-2 text-gray-600">
              <p><strong>Diameter of a hydrogen nucleus:</strong></p>
              <p>Standard form: 0.0000000000000017 meters</p>
              <p>Scientific notation: 1.7 × 10^-15 meters</p>
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>Mantissa: 1.7</li>
                <li>Exponent: -15</li>
              </ul>
            </div>
          </div>

          <div className="px-4 py-6 sm:px-6 border-t border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800">4. Key Points</h2>
            <ul className="list-disc list-inside ml-6 mt-2 text-gray-600">
              <li>The mantissa is always greater than or equal to 1 and less than 10</li>
              <li>The exponent can be positive (for large numbers) or negative (for small numbers)</li>
              <li>Moving the decimal point right increases the exponent, moving it left decreases the exponent</li>
            </ul>
          </div>

          <div className="px-4 py-6 sm:px-6 border-t border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800">5. Applications in Physics</h2>
            <ul className="list-disc list-inside ml-6 mt-2 text-gray-600">
              <li>Expressing universal constants (e.g., speed of light, Planck&apos;s constant)</li>
              <li>Representing astronomical distances</li>
              <li>Describing subatomic particle sizes</li>
              <li>Simplifying calculations in various physics domains</li>
            </ul>
          </div>

          <div className="px-4 py-6 sm:px-6 border-t border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800">6. Practice</h2>
            <ul className="list-disc list-inside ml-6 mt-2 text-gray-600">
              <li>Convert between standard form and scientific notation</li>
              <li>Perform basic arithmetic operations using scientific notation</li>
              <li>Compare magnitudes of numbers in scientific notation</li>
            </ul>
          </div>

          <div className="px-4 py-6 sm:px-6 border-t border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800">7. Conclusion</h2>
            <p className="mt-2 text-gray-600">
              Scientific notation is an essential tool in physics for efficiently handling very large or small numbers, enabling clearer communication and more accurate calculations in various areas of study.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScientificNotation;
