// pages/numerical-questions.tsx
import { FC } from 'react';

const NumericalQuestions: FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6 text-blue-600">Numerical Questions</h1>
                <div className="space-y-4">
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                        <p className="text-lg font-semibold">1. Express the following measurements using prefixes:</p>
                        <p className="text-md text-gray-700">8.9 x 10^6 m</p>
                    </div>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                        <p className="text-lg font-semibold">2. Express the following measurements using prefixes:</p>
                        <p className="text-md text-gray-700">0.0000075 kg</p>
                    </div>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                        <p className="text-lg font-semibold">3. Convert 1.2 x 10^-9 L to the appropriate prefix.</p>
                    </div>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                        <p className="text-lg font-semibold">4. Express 3.4 x 10^15 Hz using the proper prefix.</p>
                    </div>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                        <p className="text-lg font-semibold">5. Convert 0.00025 g to the appropriate prefix.</p>
                    </div>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                        <p className="text-lg font-semibold">6. Express 5.6 x 10^-7 s using the proper prefix.</p>
                    </div>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                        <p className="text-lg font-semibold">7. Convert 7.8 x 10^4 J to the appropriate prefix.</p>
                    </div>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                        <p className="text-lg font-semibold">8. Express 0.0000000015 m as a measurement with the correct prefix.</p>
                    </div>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                        <p className="text-lg font-semibold">9. Convert 4.2 x 10^12 bytes to the appropriate prefix.</p>
                    </div>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                        <p className="text-lg font-semibold">10. Express 0.00000000067 kg using the proper prefix.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NumericalQuestions;