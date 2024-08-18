// pages/measuring-densities.tsx

import React from 'react';

const MeasuringDensitiesPage: React.FC = () => {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4">7.2 MEASURING DENSITIES OF DIFFERENT SUBSTANCES</h1>
            <p className="mb-4">
                To measure the densities of liquids, solids (regular shaped or irregular shape), we will follow some steps in each case, which we will explain below:
            </p>

            <h2 className="text-2xl font-semibold mb-4">Density of Liquids</h2>
            <ol className="list-decimal pl-8 mb-4">
                <li>Place the empty measuring cylinder on balance and measure its mass.</li>
                <li>Add liquid in the measuring cylinder and measure its volume.</li>
                <li>Subtract mass of empty cylinder from the mass of cylinder and liquid (measured in step 2).</li>
                <li>Measure volume of liquid from the measuring cylinder.</li>
                <li>To calculate the density of liquid, divide mass of liquid by its volume.</li>
            </ol>

            <h2 className="text-xl font-semibold mb-2">EXAMPLE 7.2: DENSITY OF LIQUID</h2>
            <p className="mb-4">
                Mass of empty measuring cylinder is 145 g. We add a 60 mL liquid in it. Now, its mass becomes 205 g. Find density of the liquid?
            </p>
            <p className="mb-4">
                <strong>Given:</strong>
                <br />
                Mass of empty cylinder = 145 g
                <br />
                Mass of measuring cylinder and added liquid = 205 g
                <br />
                Volume of liquid = 60 mL
            </p>
            <p className="mb-4">
                <strong>Required:</strong> Density of the liquid ρ?
            </p>
            <p className="mb-4">
                <strong>Solution:</strong>
                <br />
                Mass of liquid is calculated by:
                <br />
                Mass of liquid = Mass of measuring cylinder and liquid - Mass of empty cylinder
                <br />
                Mass of liquid = 205 g - 145 g = 60 g
                <br />
                Density of liquid is calculated by:
                <br />
                ρ = Mass of liquid / Volume of liquid
                <br />
                Putting values:
                <br />
                ρ = 60 g / 60 mL = 1 g/mL
                <br />
                Density of liquid is 1 gram per milliliter. As this is the density of water (at 4°C), so our liquid in the measuring cylinder is water.
            </p>

            <h2 className="text-2xl font-semibold mb-4">7.2.1 DENSITY OF REGULARLY SHAPED SOLIDS</h2>
            <p className="mb-4">
                To find density of regularly shaped solids (like solid cubes, solid cuboids, solid sphere etc.), we will follow these steps:
            </p>
            <ol className="list-decimal pl-8 mb-4">
                <li>Find mass of the solid regular shaped object using balance.</li>
                <li>Calculate the volume of object using formula according to shape of the object.
                    <br />
                    For example:
                    <ul className="list-disc pl-8">
                        <li>Volume of cuboid = Length x Width x Height</li>
                        <li>Volume of cube = (side length)³</li>
                        <li>Volume of sphere = 4/3 πr³</li>
                    </ul>
                </li>
                <li>Finally, calculate its density by using the formula:
                    <br />
                    Density of Solid = Mass of Solid / Volume of Solid
                </li>
            </ol>

            <h2 className="text-xl font-semibold mb-2">EXAMPLE 7.3: DENSITY OF BRICK</h2>
            <p className="mb-4">
                Find the density of a solid brick of mass 3.30 kg as shown in the figure.
            </p>
            <p className="mb-4">
                <strong>Given:</strong>
                <br />
                Mass of brick = 3.30 kg
                <br />
                Length of brick = 21.6 cm = 0.216 m
                <br />
                Width of brick = 10.2 cm = 0.102 m
                <br />
                Height of brick = 6.35 cm = 0.0635 m
            </p>
            <p className="mb-4">
                <strong>Required:</strong> Density of the solid object ρ = ?
            </p>
            <p className="mb-4">
                <strong>Solution:</strong>
                <br />
                First, we calculate the volume of regular brick by:
                <br />
                Volume = Length x Width x Height
                <br />
                Putting values:
                <br />
                Volume = 0.216 m × 0.102 m × 0.0635 m = 0.00140 m³
                <br />
                Now, we will find density of the brick using formula:
                <br />
                Density of brick = Mass of brick / Volume of brick
                <br />
                Putting values:
                <br />
                ρ = 3.3 kg / 0.00140 m³ ≈ 2358.773 kg/m³ ≈ 2360 kg/m³
            </p>

            <h2 className="text-2xl font-semibold mb-4">7.2.2 DENSITY OF IRREGULAR SHAPED OBJECT (DISPLACEMENT METHOD)</h2>
            <p className="mb-4">
                We can find the density of irregular shaped solid objects like stones which can sink in the water. We need a graduated measuring cylinder to measure volume and balance to measure mass of object. We will follow these steps to find its density:
            </p>
            <ol className="list-decimal pl-8 mb-4">
                <li>Find the mass of the irregular shaped stone.</li>
                <li>Add some water in measuring cylinder and measure its initial volume (Vi).</li>
                <li>Tie a thread with the irregular shaped object (e.g., stone) and lower it in the measuring cylinder.</li>
                <li>Water will rise (i.e., displace) in the measuring cylinder; measure final volume (Vf). This final volume reading is the sum of the volume of water and volume of object.</li>
                <li>Subtract initial volume (Vi) from final volume (Vf) to get the volume of the object.
                    <br />
                    Volume of object = Vf - Vi
                </li>
                <li>To find density of objects, divide the mass of object by its volume.
                    <br />
                    Density of Solid = Mass of Solid / Volume of Solid
                </li>
            </ol>

            <h2 className="text-xl font-semibold mb-2">EXAMPLE 7.4: VOLUME AND DENSITY OF IRREGULAR SHAPE</h2>
            <p className="mb-4">
                Mass of a rock is 80.52 grams. It was immersed in a measuring cylinder containing water. From the figure, find the initial and final volumes of water. Use this data to find volume of object and density.
            </p>
            <p className="mb-4">
                <strong>Given:</strong>
                <br />
                Mass of rock = 80.52 g
                <br />
                Initial volume of water = 18 mL
                <br />
                Final volume of water = 46 mL
            </p>
            <p className="mb-4">
                <strong>Required:</strong>
                <br />
                Volume of object = final volume - Initial volume
                <br />
                Volume of object = 46 mL - 18 mL = 28 mL = 28 cm³
            </p>
            <p className="mb-4">
                <strong>Density of irregular shaped stone is:</strong>
                <br />
                Density of object = Mass of object / Volume of object
                <br />
                Putting values:
                <br />
                ρ = 80.52 g / 28 cm³ ≈ 2.88 g/cm³
            </p>
        </div>
    );
};

export default MeasuringDensitiesPage;
