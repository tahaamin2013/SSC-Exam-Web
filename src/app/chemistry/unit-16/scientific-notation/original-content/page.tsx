// pages/scientificNotation.tsx
import React from 'react';

const ScientificNotation = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">16.3 SCIENTIFIC NOTATION:</h1>
            <p>Scientific notation or Standard form is used to represent very large or very small numbers in the form of multiplication of single-digit numbers and exponent raised to the power of 10. Scientific notation simplifies calculations, comparisons, and communication of measurement involving very large or very small numbers. It is a powerful tool for expressing the magnitudes of quantities used in everyday life.</p>
            <p>For example, 650,000,000 can be written in scientific notation as 6.5 × 10⁸. The magnitude of any physical quantity can be expressed as:</p>
            <p>a × 10^n</p>
            <p>Where A is any number greater than or equal to 1 and less than 10 and n is any integer (whole number), negative or positive.</p>
            <p>The exponent of base 10 determines how big or small the number. The exponent is positive if the number is very large, and it is negative if the number is very small. Numbers in scientific notation or standard form are expressed as a multiple of a power of ten.</p>

            <p className="font-bold mt-4">Coefficient</p>
            <p className="font-bold">Exponent</p>
            <p className="font-bold">Sign, if needed</p>
            <p className="font-bold">Mantissa</p>
            <p className="font-bold">Base</p>

            <h3 className="text-lg font-semibold mt-4">Example 16.1:</h3>
            <p>Is the following number written in standard form?</p>
            <p>14 × 10⁴</p>
            <p>Solution:</p>
            <p>A number is not written in standard form as A must be a number less than 10 and greater than or equal to 1. A is given as 14 which is greater than 10. This number in standard form would be:</p>
            <p>1.4 × 10⁵</p>

            <h3 className="text-lg font-semibold mt-4">16.3.1 Scientific Notation Rules</h3>
            <p>To determine the power or exponent of 10, we must follow the rule listed below:</p>
            <ul className="list-disc list-inside">
                <li>The base should always be 10.</li>
                <li>The exponent must be a non-zero integer, which means it can be either positive or negative.</li>
                <li>The absolute value of the coefficient is greater than or equal to 1 but it should be less than 10.</li>
                <li>Coefficients can be positive or negative numbers including whole and decimal numbers.</li>
                <li>The mantissa carries the rest of the significant digits of the number.</li>
            </ul>

            <p className="mt-4">Let us understand how many places we need to move the decimal point after the single-digit number with the help of the below representation.</p>
            <p>If the given number is greater than 10 then the decimal point has to move to the left, and the power of 10 will be positive.</p>
            <p>Example: 6000 = 6 × 10³ is in scientific notation.</p>
            <p>If the given number is smaller than 1, then the decimal point has to move to the right, so the power of 10 will be negative.</p>
            <p>Example: 0.0066 = 6.6 × 10⁻³ is in scientific notation.</p>

            <h3 className="text-lg font-semibold mt-4">Scientific Notation Examples</h3>
            <ul className="list-disc list-inside">
                <li>490,000,000 = 4.9 × 10⁸</li>
                <li>1,230,000,000 = 1.23 × 10⁹</li>
                <li>50,500,000 = 5.05 × 10⁷</li>
                <li>0.000000097 = 9.7 × 10⁻⁸</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4">Example 16.2:</h3>
            <p>0.0000212 = 2.12 × 10⁻⁵</p>
            <p>Convert 0.00000046 into scientific notation.</p>
            <p>Solution: Move the decimal point to the right of 0.00000046 up to 7 places.</p>
            <p>The decimal point was moved 7 places to the right to form the number 4.6.</p>
            <p>Since the numbers are less than 1, the decimal is moved to the right. Hence, we use a negative exponent here.</p>
            <p>This is the scientific notation:</p>
            <p>0.00000046 = 4.6 × 10⁻⁷</p>

            <h3 className="text-lg font-semibold mt-4">EXAMPLE 16.3:</h3>
            <p>Convert 12 kilograms to milligrams.</p>
            <p>Solution:</p>
            <p>To convert from a larger unit to a smaller unit, we need to multiply.</p>
            <p>There are 1000 grams in 1 kilogram.</p>
            <p>Therefore, 12 kilograms will have:</p>
            <p>12 × 1,000 = 12,000 grams</p>
            <p>So there are 12,000 grams in 12 kilograms.</p>
            <p>Now, there are 1000 milligrams in 1 gram.</p>
            <p>Therefore 12 kilograms will have:</p>
            <p>12,000 × 1,000 = 12,000,000 milligrams</p>
            <p>So, there are 12,000,000 milligrams in 12 kilograms.</p>

            <p>Multiply by 1000</p>
            <p>Multiply by 1000</p>
            <p>Divide by 1000</p>
            <p>Divide by 1000</p>

            <h3 className="text-lg font-semibold mt-4">16.3.2 Converting Ordinary Form to Standard Form:</h3>
            <p className="font-bold">ORDINARY NOTATION</p>
            <p className="font-bold">STANDARD NOTATION</p>
            <p>1.27 × 10¹⁰ = Diameter of Earth</p>
            <p>12,700,000 m</p>
            <p>6.4 × 10⁶ = Length of the Great Wall of China</p>
            <p>6,400,000 m</p>
            <p>1.7 × 10⁰ = Height of a Soldier</p>
            <p>1.7 m</p>
            <p>1 × 10⁻² = Length of Mosquito</p>
            <p>0.01 m</p>
            <p>7.5 × 10⁻⁷ = Length of Red Blood Cell</p>
            <p>0.000000075 m</p>
        </div>
    );
};

export default ScientificNotation;
