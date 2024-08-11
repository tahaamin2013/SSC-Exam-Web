// pages/significant-figures-questions.tsx
import { FC } from 'react';

const SignificantFiguresQuestions: FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6 text-blue-600">Significant Figures and Rounding Off Numerical Questions</h1>
                <div className="space-y-4">
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                        <p className="text-lg font-semibold">1. Find the number of significant figures in the following values and express them in scientific notation:</p>
                        <p className="text-md text-gray-700">a) 0.00045 s</p>
                        <p className="text-md text-gray-700">b) 150.30 m</p>
                        <p className="text-md text-gray-700">c) 4,000 kg</p>
                    </div>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                        <p className="text-lg font-semibold">2. Round the following numbers to two decimal places:</p>
                        <p className="text-md text-gray-700">a) 12.345</p>
                        <p className="text-md text-gray-700">b) 0.00978</p>
                        <p className="text-md text-gray-700">c) 98.7654</p>
                    </div>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                        <p className="text-lg font-semibold">3. Round the following numbers to three significant figures:</p>
                        <p className="text-md text-gray-700">a) 0.000789</p>
                        <p className="text-md text-gray-700">b) 1234.567</p>
                        <p className="text-md text-gray-700">c) 65432</p>
                    </div>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                        <p className="text-lg font-semibold">4. Express the following measurements with the correct number of significant figures:</p>
                        <p className="text-md text-gray-700">a) 7.1000 g</p>
                        <p className="text-md text-gray-700">b) 0.0600 L</p>
                        <p className="text-md text-gray-700">c) 120000 m</p>
                    </div>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                        <p className="text-lg font-semibold">5. Round the following numbers to the nearest whole number:</p>
                        <p className="text-md text-gray-700">a) 56.78</p>
                        <p className="text-md text-gray-700">b) 0.499</p>
                        <p className="text-md text-gray-700">c) 101.5</p>
                    </div>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                        <p className="text-lg font-semibold">6. Find the number of significant figures in the following values:</p>
                        <p className="text-md text-gray-700">a) 0.0708</p>
                        <p className="text-md text-gray-700">b) 900.00</p>
                        <p className="text-md text-gray-700">c) 7000</p>
                    </div>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                        <p className="text-lg font-semibold">7. Express the following values in scientific notation with the appropriate number of significant figures:</p>
                        <p className="text-md text-gray-700">a) 0.000123</p>
                        <p className="text-md text-gray-700">b) 4500</p>
                        <p className="text-md text-gray-700">c) 7890000</p>
                    </div>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                        <p className="text-lg font-semibold">8. Round the following numbers to the nearest hundredth:</p>
                        <p className="text-md text-gray-700">a) 345.678</p>
                        <p className="text-md text-gray-700">b) 0.98765</p>
                        <p className="text-md text-gray-700">c) 1234.5678</p>
                    </div>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                        <p className="text-lg font-semibold">9. Convert the following numbers to a number with four significant figures:</p>
                        <p className="text-md text-gray-700">a) 0.005678</p>
                        <p className="text-md text-gray-700">b) 987654</p>
                        <p className="text-md text-gray-700">c) 0.123456</p>
                    </div>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                        <p className="text-lg font-semibold">10. Express the following measurements with three significant figures in scientific notation:</p>
                        <p className="text-md text-gray-700">a) 0.00560</p>
                        <p className="text-md text-gray-700">b) 900000</p>
                        <p className="text-md text-gray-700">c) 78900</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignificantFiguresQuestions;
