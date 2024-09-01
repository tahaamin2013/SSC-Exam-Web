// pages/unit16.tsx
import React from 'react';

const Unit16 = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Unit 16: Empirical Data Collection and Analysis</h1>
            <p>Scientific narration standard form</p>
            <p>Use the standard form Ax 10&quot; where in is a positive or negative integer and is 1-A&lt;10&quot;</p>
            <p>Convert quantitative values into and out of the scientific notation form.</p>
            <p>Identify appropriate apparatus for measurement of time, temperature, mass, and volume, including:</p>
            <ul className="list-disc list-inside">
                <li>Stopwatch</li>
                <li>Thermometer</li>
                <li>Balances</li>
                <li>Burrettes</li>
                <li>Volumetric pipettes</li>
                <li>Measuring cylinders</li>
                <li>Gas syringes</li>
            </ul>
            <p>Suggest advantages and disadvantages of experimental methods and apparatus</p>
            <h2 className="text-xl font-semibold mt-6 mb-2">16.1 STANDARD UNITS</h2>
            <p>Measurement is an essential requirement to keep accuracy in our daily life. Measurement is a comparison of an unknown quantity with a known fixed quantity. For example, when you feel sick, your mother measures your body temperature with the help of a thermometer. The thermometer shows a 102°F temperature. So, do you have a fever? Yes, since our normal body temperature is 98.6°F, any value above it confirms that you are suffering from fever. It means that by measuring your body temperature, she will know exactly if you have a fever or not. So, Accurate, precise measurement is a fundamental component of chemistry.</p>
            <p>In the past, people didn&apos;t have accurate measuring methods to calculate standard measurements. People used abstract units to measure with. For example, when an object was measured with a cubit or hand span, its length varied from person to person. The simple reason for the variation was the difference in the size of the cubit or hand-span of each person. Thus, this system of measurement was inconvenient as well as inaccurate. So, to maintain uniformity in measurement, scientists from all over the world accepted some of the units as standard units. This set of units is generally referred to as Standard International or Sl system of units.</p>
            <p>FOOT STEP</p>
            <p>ARM LENGTH OR CUBIT</p>
            <p>HAND SPAN</p>
            <p>In 1960, scientists from different parts of the world gathered and agreed to adopt a single system of units called the International System of Units or Sl units.</p>
            <p>In the field of chemistry, the international system of units (SI) is used to measure physical quantities such as mass, volume, and temperature. This standard system ensures that chemists around the world can use the same units to measure and communicate their results, facilitating communication and collaboration in the field. Without standard units, it would be difficult for chemists to compare the results with one another, and it would be challenging to develop consistent and accurate scientific models.</p>
            <p>During measurement, we compare the unknown quantity of things or substances with a known fixed quantity. This fixed quantity with which we compare unknown quantities is called a unit of measurement. The standard unit of measurement is a value that is fixed and cannot be changed.</p>
            <p>Physical quantity: A quantity that can be measured is called physical quantity. For instance, mass, amount of substance, length, time, temperature, etc.</p>
            <h2 className="text-xl font-semibold mt-6 mb-2">16.1.1 SI UNITS</h2>
            <p>The entire metric system is composed of two different types of units, namely, fundamental units and derived units. The units are standard used to measure physical quantities, such as mass or length. There are seven units called Fundamental Units (or Base Units). These are used to measure different physical quantities. The kilogram, meter, and second are the fundamental base units. Whereas all other units that are derived from fundamental units are called Derived Units. So derived units are not independent; they are composed of two or more fundamental units.</p>
            <h3 className="text-lg font-semibold mt-4">Table 16.1: Fundamental units</h3>
            <table className="min-w-full bg-white border border-gray-300 my-4">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">S.no.</th>
                        <th className="border px-4 py-2">Physical Quantity</th>
                        <th className="border px-4 py-2">Unit</th>
                        <th className="border px-4 py-2">Symbol</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-4 py-2">1</td>
                        <td className="border px-4 py-2">Mass(m)</td>
                        <td className="border px-4 py-2">Kilogram</td>
                        <td className="border px-4 py-2">kg</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">2</td>
                        <td className="border px-4 py-2">Length (L)</td>
                        <td className="border px-4 py-2">Meter</td>
                        <td className="border px-4 py-2">m</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">3</td>
                        <td className="border px-4 py-2">Time (t)</td>
                        <td className="border px-4 py-2">Second</td>
                        <td className="border px-4 py-2">S</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">4</td>
                        <td className="border px-4 py-2">Temperature</td>
                        <td className="border px-4 py-2">Kelvin</td>
                        <td className="border px-4 py-2">K</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">5</td>
                        <td className="border px-4 py-2">Quantity of substance</td>
                        <td className="border px-4 py-2">Mole</td>
                        <td className="border px-4 py-2">mol</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">6</td>
                        <td className="border px-4 py-2">Electric current</td>
                        <td className="border px-4 py-2">Ampere</td>
                        <td className="border px-4 py-2">A</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">7</td>
                        <td className="border px-4 py-2">Luminous intensity</td>
                        <td className="border px-4 py-2">Candela</td>
                        <td className="border px-4 py-2">cd</td>
                    </tr>
                </tbody>
            </table>
            <h2 className="text-xl font-semibold mt-6 mb-2">16.1.2 SI Prefixes</h2>
            <p>The Si system develops a standard system of prefixes to the basic units, Prefixes are used to identify the original unit&apos;s  multiples or fractions.</p>
            <h3 className="text-lg font-semibold mt-4">Table 16.2: Prefixes for measurements</h3>
            <p>Prefix, Unit abbreviation, Meaning, Example, Abbreviation</p>
            <p>Kilo, k, 1000, 1 kilometer (km) = 1000 m, 10 m</p>
            <p>hector, h, 100, 1 hectometer (hm) = 100 m, 10-m</p>
            <p>Deca, da, 10, 1 decameter (dam) = 10m, 10 m, 100, 1 meter</p>
            <p>Deci, d, 1/10, 1 decimeter (dm) = 0.1 m, 10&apos;m</p>
            <p>Centi, 1/100, 1 centimeter (cm) = 0.01 m, 10m, C</p>
            <p>Milli, 1/1, 1000, 1 millimeter (mm) = 0.001 m, 10</p>
            <p>Micro, u, 10-6, 1 micrometer (um) = 1.0 x 10-6 m</p>
            <p>nano, n, 10-0, 1 nanometer (nm) = 1.0 x 10 m, 10</p>
            <p>The table shows the meaning of some prefixes and examples of how they can be applied to different types of measurements in the metric system.</p>
            <p>Prefixes are used to identify the original unit&apos;s  multiples or fractions.</p>
            <p>The table shows the meaning of some prefixes and examples of how they can be applied to different types of measurements in the metric system.</p>
        </div>
    );
};

export default Unit16;
