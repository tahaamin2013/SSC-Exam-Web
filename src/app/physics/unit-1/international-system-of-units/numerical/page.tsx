// pages/si-units-questions.tsx
import { FC } from 'react';

const SIUnitsQuestions: FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6 text-blue-600">SI Units Numerical Questions</h1>
                <div className="space-y-4">
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                        <p className="text-lg font-semibold">1. Convert the following distance into kilometers:</p>
                        <p className="text-md text-gray-700">5,200 meters</p>
                    </div>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                        <p className="text-lg font-semibold">2. Express the following area in square centimeters:</p>
                        <p className="text-md text-gray-700">3.4 square meters</p>
                    </div>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                        <p className="text-lg font-semibold">3. Convert the following mass into milligrams:</p>
                        <p className="text-md text-gray-700">0.75 kilograms</p>
                    </div>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                        <p className="text-lg font-semibold">4. If a car travels at a speed of 90 kilometers per hour, convert this speed into meters per second.</p>
                    </div>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                        <p className="text-lg font-semibold">5. Convert the following volume into liters:</p>
                        <p className="text-md text-gray-700">0.006 cubic meters</p>
                    </div>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                        <p className="text-lg font-semibold">6. Express the following energy in joules:</p>
                        <p className="text-md text-gray-700">5.0 x 10^3 kilojoules</p>
                    </div>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                        <p className="text-lg font-semibold">7. If a bottle contains 250 milliliters of liquid, convert this volume into cubic meters.</p>
                    </div>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                        <p className="text-lg font-semibold">8. Convert the following acceleration into meters per second squared:</p>
                        <p className="text-md text-gray-700">0.09 kilometers per second squared</p>
                    </div>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                        <p className="text-lg font-semibold">9. If a light bulb emits 500 candela, convert this luminosity into lumens given that 1 candela = 12.57 lumens.</p>
                    </div>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                        <p className="text-lg font-semibold">10. Convert the following pressure into pascals:</p>
                        <p className="text-md text-gray-700">0.0025 megapascals</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SIUnitsQuestions;
