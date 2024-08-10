import React from 'react';

const PrecisionAndAccuracy = () => {
    return (
        <div className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 min-h-screen p-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">1.9 PRECISION AND ACCURACY</h1>

                <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Precision and accuracy are both important factors in determining the reliability and validity of measurements and experimental results. While precision focuses on the consistency and repeatability of results, accuracy is concerned with how close the measured values are to the true or accepted values.
                    </p>
                </div>

                <div className="bg-gradient-to-r from-green-200 to-green-400 p-6 rounded-lg shadow-lg mb-6">
                    <p className="text-lg text-gray-800 leading-relaxed">
                        Precision can be thought of as the degree of agreement between repeated measurements of the
                        same quantity. If a set of measurements consistently yields similar results, with little variation on scatter,
                        then it is considered to be precise. This indicates that the measurement process is reliable and consistent,
                        and that the results can be reproduced under the same conditions. For example, a scale that always gives the
                        same weight within a margin of 0.1 kg is precise, even if it consistently overestimates the true weight by
                        0.5 kg (not accurate).
                    </p>
                </div>

                <div className="bg-gradient-to-r from-yellow-200 to-yellow-400 p-6 rounded-lg shadow-lg mb-6">
                    <p className="text-lg text-gray-800 leading-relaxed">
                        Accuracy, on the other hand, refers to how close a measured value is to the true or accepted
                        value. It is a measure of the absence of systematic errors or biases in the measurement process. An accurate
                        measurement is one that is close to the true value, regardless of whether it is consistently reproducible. For
                        example, a thermometer that consistently reads 2 degrees Celsius higher than the actual temperature is not
                        accurate, even if its readings are very precise (always 2 degrees above).
                    </p>
                </div>

                <div className="bg-gradient-to-r from-pink-200 to-pink-400 p-6 rounded-lg shadow-lg mb-6">
                    <p className="text-lg text-gray-800 leading-relaxed">
                        Precision focuses on the consistency and reproducibility of measurements, while accuracy assesses how close the average of those measurements is to the true value.
                    </p>
                    <p className="text-lg text-gray-800 leading-relaxed mt-4">
                        Imagine throwing darts at a target as shown in figure 1.16. If your darts land close to the center of the target (hitting the bullseye is ideal), your aim will be referred to as accurate. Your darts are grouped tightly together, even if they&apos;re not in the center (a tight cluster off-center), your aim will be termed as precise. Therefore, it&apos;s possible for something to be:
                    </p>
                    <ul className="list-disc list-inside mt-4">
                        <li><span className="font-semibold">Accurate and precise:</span> Your darts hit the bullseye and are tightly grouped.</li>
                        <li><span className="font-semibold">Accurate but not precise:</span> Your darts land near the center, but they&apos;re scattered all over the place.</li>
                        <li><span className="font-semibold">Precise but not accurate:</span> Your darts are tightly grouped, but they&apos;re all off-center in the same direction.</li>
                    </ul>
                </div>

                <div className="bg-gradient-to-r from-blue-200 to-blue-400 p-6 rounded-lg shadow-lg mb-6">
                    <p className="text-lg text-gray-800 leading-relaxed">
                        CAN YOU TELL? Books in a library were counted one by one. There were a total of 57,000 books in the library. How many significant digits are there in the result? Will the result change if the books are measured in packets of 10?
                    </p>
                </div>

                <div className="bg-gradient-to-r from-purple-200 to-purple-400 p-6 rounded-lg shadow-lg mb-6">
                    <p className="text-lg text-gray-800 leading-relaxed">
                        In practice, both precision and accuracy are desirable qualities in measurements. A measurement can be precise but not accurate, or accurate but not precise. Ideally, measurements should be both precise and accurate, meaning that they are both consistent and close to the true value. Achieving both precision and accuracy often requires careful calibration of instruments, control of experimental conditions, and consideration of sources of error.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrecisionAndAccuracy;
