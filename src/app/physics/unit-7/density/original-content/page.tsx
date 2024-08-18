// pages/density.tsx

import React from 'react';

const DensityPage: React.FC = () => {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4">7.1 DENSITY</h1>
            <p className="mb-4">
                Density of a material tells us how much matter a substance has in its unit volume. The substance, which has more closely packed atoms, has more matter in a fix volume. Therefore, it is denser substance. Solids like metals; rocks etc. are denser materials because they have closely packed atoms in the given volume. Substances in which atoms are far from each other, they have small amount of matter in a fix volume, so they are less dense. It is the reason why liquids and gases have less density than solids. Density of solids is greater than liquids and density of liquids is greater than gases.
            </p>
            <p className="mb-4">
                We define density of a material as:
                <strong>&quot;Mass per unit volume of the substance is called its density&quot;.</strong>
            </p>
            <p className="mb-4">
                <strong>Density = Mass / Volume</strong>
                <br />
                Its symbol is: <strong>ρ = m / V</strong>
                <br />
                Its SI unit is kilogram per cubic metre (kg/m³). Smaller unit to measure density is gram per cubic centimetre (g/cm³). Density of liquids is usually measured in gram per millilitre (g/mL). It is a scalar quantity.
            </p>
            <p className="mb-4">
                Density of small amount of a substance is the same as the density of its bulk because density is calculated by the amount of matter in its unit volume. Density of a material changes with the temperature. Can you explain why?
            </p>
            <h2 className="text-xl font-semibold mb-2">DO YOU KNOW?</h2>
            <p className="mb-4">
                Osmium metal is the most dense material at room temperature and pressure. Its density is 22.59 g/cm³. It is harder than diamond.
            </p>
            <h2 className="text-xl font-semibold mb-2">CAN YOU TELL?</h2>
            <p className="mb-4">
                Why are liquids denser than gases?
            </p>
            <h2 className="text-xl font-semibold mb-2">FOR YOUR INFORMATION</h2>
            <p className="mb-4">
                1 g/cm³ = 1000 kg/m³
                <br />
                To convert g/cm³ into kg/m³, multiply g/cm³ by 1000. For example, the density of petrol, 0.9 g/cm³, is multiplied by 1000 to write in units of kg/m³ as 900 kg/m³.
            </p>
            <h2 className="text-xl font-semibold mb-2">TABLE 7.1 DENSITIES</h2>
            <table className="w-full text-left border-collapse mb-4">
                <thead>
                    <tr>
                        <th className="border-b-2 p-2">Material</th>
                        <th className="border-b-2 p-2">Density (kg/m³)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border-b p-2">Iron</td>
                        <td className="border-b p-2">7900</td>
                    </tr>
                    <tr>
                        <td className="border-b p-2">Gold</td>
                        <td className="border-b p-2">19300</td>
                    </tr>
                    <tr>
                        <td className="border-b p-2">Ice</td>
                        <td className="border-b p-2">920</td>
                    </tr>
                    <tr>
                        <td className="border-b p-2">Plythene</td>
                        <td className="border-b p-2">900</td>
                    </tr>
                    <tr>
                        <td className="border-b p-2">Petrol</td>
                        <td className="border-b p-2">800</td>
                    </tr>
                    <tr>
                        <td className="border-b p-2">Pure water</td>
                        <td className="border-b p-2">1000</td>
                    </tr>
                    <tr>
                        <td className="border-b p-2">Mercury</td>
                        <td className="border-b p-2">13600</td>
                    </tr>
                    <tr>
                        <td className="border-b p-2">Air</td>
                        <td className="border-b p-2">1.3</td>
                    </tr>
                    <tr>
                        <td className="border-b p-2">Carbon dioxide</td>
                        <td className="border-b p-2">2.0</td>
                    </tr>
                </tbody>
            </table>
            <h2 className="text-xl font-semibold mb-2">EXAMPLE 7.1: DENSITY OF REGULAR SHAPE</h2>
            <p className="mb-4">
                You find a material in the shape of a cube of side length 5 centimetre. Mass of this cube is 500 grams. Find the density of this material?
            </p>
            <p className="mb-4">
                <strong>Given:</strong> Mass of the material = 500 g
                <br />
                Side length of the cube of the given material = 5 cm
                <br />
                <strong>Required:</strong> Density of the material ρ = ?
            </p>
            <p className="mb-4">
                <strong>Solution:</strong> Volume of a cubic shape object is given by:
                <br />
                Volume = (side length)³
                <br />
                Putting values
                <br />
                Volume = (5 cm)³ = 125 cm³
                <br />
                Now, we will find density of cube shaped object:
                <br />
                Density of cube shaped object = ρ = Mass of cube / Volume of cube
                <br />
                Putting values ρ = 500 g / 125 cm³ = 4 g/cm³
            </p>
            <p className="mb-4">
                Therefore, write the followings in increasing order of densities:
                <br />
                Hydrogen, milk, mercury, gold.
            </p>
        </div>
    );
};

export default DensityPage;
