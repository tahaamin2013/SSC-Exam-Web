import React from 'react';

const CalibrationOfThermometerPage: React.FC = () => {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6">
                7.9 Fixed Points in Calibration of Thermometer
            </h1>

            <p className="mb-4">
                When a thermometer is used to determine the temperature of a body, we measure its reading from the calibrated scale on it. Without a temperature scale, a thermometer is valueless. Accurate temperature measurement from a thermometer depends on its proper calibration. To create a proper scale on a thermometer, we need two fixed points. These two fixed points should be accessible and reproducible. They are also called reference points: the lower reference point and the upper reference point. The gap between these two points is divided into equal divisions, allowing for accurate temperature measurement.
            </p>

            <p className="mb-4">
                A fixed point is a standard degree of hotness or coldness. Generally, we use three scales: the Celsius scale, Fahrenheit scale, and Kelvin scale.
            </p>

            <p className="mb-4">
                For these scales, the lower reference point is a standard degree of coldness. The melting point of ice is taken as the lower reference point for these scales, which is 0°C on the Celsius scale, 32°F on the Fahrenheit scale, and 273 K on the Kelvin scale. Similarly, the upper reference point is a standard degree of hotness. The boiling point of water is taken as the upper reference point, which is 100°C on the Celsius scale, 212°F on the Fahrenheit scale, and 373 K on the Kelvin scale.
            </p>

            <p className="mb-4">
                The number of divisions on a temperature scale is calculated by taking the difference between the upper and lower reference point values on the scale. This is why there are 100 divisions on the Celsius and Kelvin scales, while there are 180 divisions on the Fahrenheit scale.
            </p>

            <table className="w-full table-auto mt-6 border">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border px-4 py-2">Scale</th>
                        <th className="border px-4 py-2">Lower Reference Point</th>
                        <th className="border px-4 py-2">Upper Reference Point</th>
                        <th className="border px-4 py-2">Number of Divisions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-4 py-2">Celsius</td>
                        <td className="border px-4 py-2">0°C (Melting point of ice)</td>
                        <td className="border px-4 py-2">100°C (Boiling point of water)</td>
                        <td className="border px-4 py-2">100</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Fahrenheit</td>
                        <td className="border px-4 py-2">32°F (Melting point of ice)</td>
                        <td className="border px-4 py-2">212°F (Boiling point of water)</td>
                        <td className="border px-4 py-2">180</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Kelvin</td>
                        <td className="border px-4 py-2">273 K (Melting point of ice)</td>
                        <td className="border px-4 py-2">373 K (Boiling point of water)</td>
                        <td className="border px-4 py-2">100</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CalibrationOfThermometerPage;
