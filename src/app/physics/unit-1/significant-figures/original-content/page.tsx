import React from 'react';

const SignificantFigures = () => {
    return (
        <div className="bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 min-h-screen p-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">1.10 SIGNIFICANT FIGURES</h1>

                <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        There are two types of values, exact and measured. Exact values are those that are counted clearly. For example, while reporting 3 pencils or 2 books, we can indicate the exact number of these items.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mt-4">
                        The numerical value of any measurement will always contain some uncertainty. Suppose, for example, that you are measuring the length of two pencils as shown in figure 1.17.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mt-4">
                        It seems clear that the length of the blue pencil is greater than 17 cm but shorter than 17.1 cm. Similarly, the length of the red pencil is greater than 8 cm but shorter than 8.1 cm. But how much longer or shorter? You cannot be certain about the length. As your best estimate, you might say that the pencils are 17.05 cm and 8.05 cm long.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mt-4">
                        Everyone would agree that you can be certain about the first numbers 17.0 and 8.0 for the blue and red pencils, respectively. The last number 0.05 has been estimated and is not certain. The two certain numbers, together with one uncertain number, represent the greatest accuracy possible with the ruler being used. Thus the pencils are said to be 17.05 cm and 8.05 cm long, respectively.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mt-4">
                        A significant figure is a number that is believed to be correct with some uncertainty only in the last digit. All the accurately known figures and the first doubtful figure are termed as significant figures.
                    </p>
                </div>

                <div className="bg-gradient-to-r from-green-200 to-green-400 p-6 rounded-lg shadow-lg mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">1.10.1 GENERAL RULES FOR WRITING SIGNIFICANT FIGURES</h2>
                    <p className="text-lg text-gray-800 leading-relaxed mb-4">
                        There are a few simple rules that help us determine how many significant figures are contained in a reported measurement:
                    </p>
                    <ul className="list-decimal list-inside space-y-2">
                        <li>All digits reported as a direct result of a measurement are significant.</li>
                        <li>The reported NONZERO digits (all digits from 1 to 9) are always significant. For example, the number of significant figures in 23.457 is 5.</li>
                        <li>
                            In figures reported as larger than the digit 1, the digit 0 is not significant when it follows a nonzero digit to indicate place. For example, in a report that &apos;29,000 spectators watched a cricket match,&apos; the digits 2 and 9 are significant but the zeros are not significant. In this situation, the 29 is the measured part of the figure, and the three zeros tell you an estimate of how many watched the match. If this figure is a measurement rather than an estimate, then to avoid confusion, it is written in scientific notation with the exact number of significant figures as in measurement, e.g., 2.90 x 10<sup>5</sup> showing three significant figures or 2.900 x 10<sup>5</sup> showing four significant figures or even 2.9000 x 10<sup>5</sup> showing 5 significant figures.
                        </li>
                        <li>
                            In figures reported as smaller than the digit 1, zeros after a decimal point that come before nonzero digits are not significant and serve only as placeholders. For example, 0.0029 has two significant figures: 2 and 9. The zeros after a nonzero digit indicate a measurement, so these zeros are significant. The figure 0.00290, for example, has three significant figures.
                        </li>
                    </ul>
                </div>

                <div className="bg-gradient-to-r from-yellow-200 to-yellow-400 p-6 rounded-lg shadow-lg mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">EXAMPLE 1.3: SIGNIFICANT FIGURE</h2>
                    <p className="text-lg text-gray-800 leading-relaxed mb-4">Find the number of significant figures in each of the following values. Also, express them in scientific notations:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>a) 100.8 s</strong></li>
                        <li><strong>b) 0.00580 km</strong></li>
                        <li><strong>c) 210.0 g</strong></li>
                    </ul>
                    <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">SOLUTION</h3>
                    <p className="text-lg text-gray-800 leading-relaxed mb-4">
                        a) All the four digits are significant. The zeros between the two significant figures 1 and 8 are significant. To write the quantity in scientific notation, we move the decimal point two places to the left, thus
                        100.8 = 1.008 × 10<sup>2</sup> s.
                    </p>
                    <p className="text-lg text-gray-800 leading-relaxed mb-4">
                        b) The first two zeros are not significant. They are used to space the decimal point. The digits 5, 8, and the final zero are significant. Thus there are three significant figures. In scientific notation, it can be written as
                        5.80 × 10<sup>-3</sup> km.
                    </p>
                    <p className="text-lg text-gray-800 leading-relaxed">
                        c) The final zero is significant since it comes after the decimal point. The zero between the last zero and 1 is also significant because it comes between the significant figures. Thus the number of significant figures in this case is four. In scientific notation, it can be written as 210.0 = 2.100 × 10<sup>2</sup> g.
                    </p>
                </div>

                <div className="bg-gradient-to-r from-red-200 to-red-400 p-6 rounded-lg shadow-lg mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">1.10.2 ROUNDING OFF NUMBERS AND SIGNIFICANT FIGURES</h2>
                    <p className="text-lg text-gray-800 leading-relaxed mb-4">
                        Rounding off numbers is an essential practice in scientific and quantitative contexts as it allows for the presentation of numbers with the appropriate level of precision. In these fields, accuracy and precision are crucial, and rounding off numbers helps to achieve this.
                    </p>
                    <p className="text-lg text-gray-800 leading-relaxed mb-4">
                        When dealing with measurements or calculations, it is often necessary to express the result in a more manageable or meaningful form. Rounding off numbers allows scientists and researchers to simplify complex figures without sacrificing the overall accuracy of the data.
                    </p>
                    <p className="text-lg text-gray-800 leading-relaxed mb-4">
                        Significant figures play a vital role in determining which digits in a number are reliable and meaningful. They indicate the precision of a measurement or calculation by identifying the digits that are known with certainty. By using significant figures, scientists can convey the level of uncertainty associated with a particular value. For example, consider a scientific experiment that measures the length of an object to be 3.5678 centimeters. While this measurement may be precise, it is not practical to report it with such detail. Rounding off the number to three significant figures, we can express it as 3.57 centimeters, which provides a more concise representation without compromising the accuracy of the measurement.
                    </p>
                    <p className="text-lg text-gray-800 leading-relaxed">
                        Rounding numbers is the act of approximating a number to a simpler value that is easier to use, understand, or work with. It includes reducing the number of digits while maintaining an appropriate level of accuracy for the situation.
                    </p>
                </div>

                <div className="bg-gradient-to-r from-indigo-200 to-indigo-400 p-6 rounded-lg shadow-lg mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">A. Rounding rules for whole numbers</h2>
                    <p className="text-lg text-gray-800 leading-relaxed mb-4">
                        When rounding to a specific whole number of significant figures, we follow these steps:
                    </p>
                    <ul className="list-decimal list-inside space-y-2">
                        <li>Always choose the smaller place value for an accurate final result. Find the next smaller place to the right of the number being rounded off. For example, if rounding off a digit from the tens place, look at the digit in the ones place.</li>
                        <li>If the digit in the smallest place is less than 5, leave it as it is. Any digits after that become zero, which is called rounding down.</li>
                        <li>If the digit in the smallest place is greater than or equal to 5, add +1 to that digit. Any digits after that become zero, which is called rounding up.</li>
                    </ul>
                </div>

                <div className="bg-gradient-to-r from-teal-200 to-teal-400 p-6 rounded-lg shadow-lg mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">B. Rounding rules for decimal numbers</h2>
                    <p className="text-lg text-gray-800 leading-relaxed mb-4">
                        The rules for rounding decimal numbers are as follows:
                    </p>
                    <ul className="list-decimal list-inside space-y-2">
                        <li>Find the digit you want to round and look at the digit to its right.</li>
                        <li>If the digits to the right are less than 5, treat them as zero.</li>
                        <li>If the digits to the right are 5 or greater, add 1 to that digit and treat all other digits as zero.</li>
                    </ul>
                </div>

                <div className="bg-gradient-to-r from-yellow-200 to-yellow-400 p-6 rounded-lg shadow-lg mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">EXAMPLE 1.4: ROUNDING OFF</h2>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Round off the following numbers to</h3>
                    <ul className="list-disc list-inside space-y-2 mb-6">
                        <li><strong>a) Two decimal points</strong></li>
                        <ul className="list-decimal list-inside space-y-2 pl-6">
                            <li>3.876</li>
                            <li>657.873</li>
                            <li>0.0857</li>
                        </ul>
                        <li><strong>b) Three significant digits</strong></li>
                        <ul className="list-decimal list-inside space-y-2 pl-6">
                            <li>24.68</li>
                            <li>0.07683</li>
                            <li>7,847</li>
                        </ul>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mb-4">SOLUTION</h3>
                    <p className="text-lg text-gray-800 leading-relaxed mb-4">
                        a) In order to round off a number to two decimal points, we will drop all digits after the decimal except two.
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            3.876: Here the dropping digit is 6, which is greater than 5, so, it will be dropped by increasing the next digit 7. So, the answer is 3.88.
                        </li>
                        <li>
                            657.873: Here the dropping digit is 3, which is smaller than 5, so, it will be dropped without any change to the next digit. So, the answer is 657.87.
                        </li>
                        <li>
                            0.0857: Here the dropping digits are 5 and 7. After dropping 7 (which is greater than 5), the next digit will become 6 to get 0.086. Now by dropping 6, the next digit will become 9. So, the answer is 0.09.
                        </li>
                    </ul>

                    <p className="text-lg text-gray-800 leading-relaxed mt-6 mb-4">
                        b) In order to round off a number to three significant digits, we will drop or replace with zero all digits except three significant digits.
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            24.68: Here we will drop the digit 8, which is greater than 5, so it will increase the next digit to 7. So, the answer is 24.7.
                        </li>
                        <li>
                            0.07683: Here we will drop the digit 3, which is smaller than 5, so it will not change the next digit. So, the answer is 0.0768.
                        </li>
                        <li>
                            7,847: As this is a whole number so, the digit 7 is replaced by zero. As it is greater than 5, so it will increase the next digit to 5. So, the answer is 7,850.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SignificantFigures;
