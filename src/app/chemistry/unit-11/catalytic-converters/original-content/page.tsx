// pages/catalytic-converters.js
import React from 'react';

const CatalyticConverters = () => {
    return (
        <div className="p-6 bg-white text-black">
            <h1 className="text-2xl font-bold mb-4">UNIT 11</h1>
            <h2 className="text-xl font-semibold mb-4">CATALYTIC CONVERTERS</h2>

            <p className="mb-4">
                Catalysts are installed in the exhaust system of cars. They contain catalysts that facilitate chemical reactions that convert nitrogen oxides into less harmful substances.
                The catalyst transforms CO to CO₂, NO to N₂ and O₂, and unburned hydrocarbons to CO₂ and H₂O. Metals such as platinum, palladium, and rhodium are used as catalysts in the converter.
            </p>

            <div className="mb-4">
                <p className="mb-2">
                    <strong>Catalytic Reactions:</strong>
                </p>
                <p className="mb-2">
                    <strong>2NO + 2HC → N₂ + 2CO₂ + H₂O</strong>
                </p>
            </div>

            <p className="mb-4">
                The government of Pakistan should direct car manufacturers to install catalytic converters in car exhaust systems. Strict laws on this matter would help reduce emissions of air pollutants from car exhaust systems.
            </p>
        </div>
    );
};

export default CatalyticConverters;
