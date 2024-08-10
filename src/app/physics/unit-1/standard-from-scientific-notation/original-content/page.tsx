import React from 'react'

const Page = () => {
    return (
        <section
            id="ScientificNotation"
            className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6"
        >
            <h1 className="font-bold text-3xl text-center mb-4">
                Standard Form / Scientific Notation
            </h1>

            <div className="text-left">
                <p>
                    In physics, we often encounter numbers that are either very small or very large. For example, the width of the observable universe is approximately 880,000,000,000,000,000,000,000,000 meters (88 with 25 zeros). Using such large numbers frequently can be time-consuming and prone to error.
                </p>

                <p>
                    Scientific notation provides a convenient way to write very large or small numbers using powers of ten. This notation simplifies the representation and calculation with such numbers.
                </p>

                <h2 className="font-semibold text-2xl mt-6 mb-4">
                    Scientific Notation
                </h2>
                <p>
                    Scientific notation represents a number as the product of a mantissa (a number greater than 1 and less than 10) and a power of 10 (the exponent). The general form is:
                </p>
                <p className="font-mono text-lg bg-gray-100 p-2 rounded">
                    number = mantissa × 10^exponent
                </p>

                <p>
                    For example:
                </p>
                <ul className="list-disc ml-5">
                    <li>The width of the observable universe can be written as 8.8 × 10<sup>26</sup> meters, where &apos;8.8&apos; is the mantissa and &apos;26&apos; is the exponent.</li>
                    <li>The mass of Earth is 5,980,000,000,000,000,000,000,000 kg, which can be written as 5.98 × 10<sup>24</sup> kg.</li>
                    <li>The diameter of a hydrogen nucleus is about 0.0000000000000017 meters, which can be written as 1.7 × 10<sup>-15</sup> meters.</li>
                </ul>
            </div>
        </section>
    )
}

export default Page;
