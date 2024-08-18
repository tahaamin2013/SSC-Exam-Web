import React from 'react';

const TemperatureMeasurementPage: React.FC = () => {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6">
                7.8 Variation in Physical Properties as a Tool for Measuring Temperature of a Substance
            </h1>

            <p className="mb-4">
                When the temperature of a body increases, it increases the kinetic energy of its particles. These fast-moving particles can cause variations in different physical properties (volume, pressure, change in colour, electrical resistance, etc.) in a predictable way. These variations may be used to measure the temperature of a body. The physical properties that a thermometer relies on are called its thermometric properties.
            </p>

            <h2 className="text-2xl font-semibold mb-4">7.8.1 Expansion of Liquids</h2>
            <p className="mb-4">
                Most liquids expand upon heating. Liquids that expand uniformly on heating can be used as thermometric materials. This property is used in liquid-in-glass thermometers, which use mercury or alcohol as thermometric materials. When the thermometer is touched by a hot body, it absorbs heat and causes the mercury to expand. This uniform expansion varies linearly with temperature, providing a reading on the thermometer scale.
            </p>

            <h2 className="text-2xl font-semibold mb-4">7.8.2 Variation of Volume and Pressure</h2>
            <p className="mb-4">
                When a gas is heated, its volume and pressure may change. These variations are used in gas thermometers to measure temperature. There are two types of gas thermometers: constant pressure gas thermometers and constant volume gas thermometers.
            </p>
            <p className="mb-4">
                A constant volume gas thermometer uses the principle that the pressure of a gas is directly proportional to the temperature, while the volume is kept constant (Gay-Lussac&apos;s law). As the temperature of the thermometer bulb increases, the kinetic energy of gas particles increases, causing a rise in pressure. This pressure variation is used to measure temperature.
            </p>
            <p className="mb-4">
                A constant pressure gas thermometer operates on the principle that the volume of a gas is directly proportional to the temperature, while the pressure is kept constant (Charles&apos;s law). The gas in the bulb expands and pushes a piston according to the increase in volume, which is used to measure temperature.
            </p>

            <h2 className="text-2xl font-semibold mb-4">7.8.3 Variation in Colour of Crystals</h2>
            <p className="mb-4">
                Liquid crystals are materials that change colour with a change in temperature. These crystals are packed inside a plastic strip, and when touched with a body, their temperature change causes a colour shift. By matching the colour to a temperature scale, we can determine the temperature. Such thermometers are often used as fever thermometers and for aquariums and baby bottles.
            </p>

            <h2 className="text-2xl font-semibold mb-4">7.8.4 Resistance Thermometers or Thermistors</h2>
            <p className="mb-4">
                Resistance thermometers measure temperature by detecting changes in electrical resistance due to variations in temperature.
            </p>

            <h2 className="text-2xl font-semibold mb-4">7.8.5 Bimetallic Strip Thermometers</h2>
            <p className="mb-4">
                Bimetallic strip thermometers measure temperature through the variation in volume expansion of two different metals that are bonded together.
            </p>

            <h2 className="text-2xl font-semibold mb-4">7.8.6 Thermocouples</h2>
            <p className="mb-4">
                Thermocouples measure temperature by detecting changes in electromotive force (emf) due to temperature variations.
            </p>

            <table className="w-full table-auto mt-6 border">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border px-4 py-2">Thermometer Type</th>
                        <th className="border px-4 py-2">Thermometric Property</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-4 py-2">Constant pressure gas thermometer</td>
                        <td className="border px-4 py-2">Volume expansion of a gas</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Laboratory or clinical thermometer</td>
                        <td className="border px-4 py-2">Volume expansion of a liquid</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Bimetallic strip thermometer</td>
                        <td className="border px-4 py-2">Volume expansion of a solid</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Constant volume gas thermometer</td>
                        <td className="border px-4 py-2">Pressure change of a fixed mass of gas</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Thermocouple</td>
                        <td className="border px-4 py-2">Changes in e.m.f</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Resistance thermometer or thermistor</td>
                        <td className="border px-4 py-2">Changes in electrical resistance</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TemperatureMeasurementPage;
