import React from 'react'

const Page = () => {
    return (
        <section
            id="SIUnits"
            className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6"
        >
            <h1 className="font-bold text-3xl text-center mb-4">
                International System of Units (SI)
            </h1>

            <div className="text-left">
                <h2 className="font-semibold text-2xl mt-6 mb-4">
                    Introduction to SI Units
                </h2>
                <p>
                    A complete set of units for all physical quantities is called a system of units. The International System of Units is known as &quot;Système International&quot; (SI), which is the French abbreviation for &quot;Système International d&apos;Unités,&quot; meaning &quot;International System of Units.&quot;
                </p>

                <h2 className="font-semibold text-2xl mt-6 mb-4">
                    SI Base Units
                </h2>
                <p>
                    In the International System of Units (SI), seven physical quantities are chosen as base quantities. These units are defined and standardized to ensure accurate and reproducible measurements. The seven base quantities and their SI base units are listed below:
                </p>
                <table className="min-w-full divide-y divide-gray-200 mt-4">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                SI Base Quantity
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                SI Base Unit
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">Length (l)</td>
                            <td className="px-6 py-4 whitespace-nowrap">Meter (m)</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">Mass (m)</td>
                            <td className="px-6 py-4 whitespace-nowrap">Kilogram (kg)</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">Time (t)</td>
                            <td className="px-6 py-4 whitespace-nowrap">Second (s)</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">Electric Current (I)</td>
                            <td className="px-6 py-4 whitespace-nowrap">Ampere (A)</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">Temperature (T)</td>
                            <td className="px-6 py-4 whitespace-nowrap">Kelvin (K)</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">Amount of Substance (n)</td>
                            <td className="px-6 py-4 whitespace-nowrap">Mole (mol)</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">Light Intensity (I)</td>
                            <td className="px-6 py-4 whitespace-nowrap">Candela (cd)</td>
                        </tr>
                    </tbody>
                </table>

                <h2 className="font-semibold text-2xl mt-6 mb-4">
                    SI Derived Units
                </h2>
                <p>
                    Units of derived quantities are obtained by multiplying and/or dividing base quantities. In SI units, all other physical quantities can be derived from the seven base units. For example, the unit for area is &quot;m²&quot; (square meters), using the base unit of length. Similarly, velocity is measured in &quot;m/s&quot; (meters per second), and acceleration in &quot;m/s²&quot; (meters per second squared). Some derived units are given special names and symbols. For instance, force has the derived unit of &quot;kg·m/s²,&quot; which is named &quot;newton&quot; and symbolized as &quot;N.&quot; Here are some derived quantities and their SI derived units:
                </p>
                <table className="min-w-full divide-y divide-gray-200 mt-4">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Derived Quantity
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                SI Derived Unit
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">Area (A)</td>
                            <td className="px-6 py-4 whitespace-nowrap">Square meter (m²)</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">Volume (V)</td>
                            <td className="px-6 py-4 whitespace-nowrap">Cubic meter (m³)</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">Speed, Velocity (v)</td>
                            <td className="px-6 py-4 whitespace-nowrap">Meter per second (m/s)</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">Acceleration (a)</td>
                            <td className="px-6 py-4 whitespace-nowrap">Meter per second squared (m/s²)</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">Density (ρ)</td>
                            <td className="px-6 py-4 whitespace-nowrap">Kilogram per cubic meter (kg/m³)</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">Force (F)</td>
                            <td className="px-6 py-4 whitespace-nowrap">Newton (N) (kg·m/s²)</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">Pressure (P)</td>
                            <td className="px-6 py-4 whitespace-nowrap">Pascal (Pa) (kg/m·s²)</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">Energy (E, U)</td>
                            <td className="px-6 py-4 whitespace-nowrap">Joule (J) (kg·m²/s²)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Page;
