import { FC } from 'react';

const NumericalQuestions: FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-6">Numerical Response Questions</h1>
                <ol className="list-decimal pl-6 space-y-4">
                    <li>
                        Sarah has two objects, a wooden block and a metal ball, with the following properties:
                        <ul className="list-disc pl-6">
                            <li>The wooden block has a mass of 300 g and a volume of 150 cm³.</li>
                            <li>The metal ball has a mass of 500 g and a volume of 50 cm³.</li>
                        </ul>
                        Calculate the density of each object and determine which one is denser.
                        <br />
                        <strong>Answer:</strong>
                        <ul className="list-disc pl-6">
                            <li>Density of wooden block: 300 g / 150 cm³ = 2 g/cm³</li>
                            <li>Density of metal ball: 500 g / 50 cm³ = 10 g/cm³</li>
                            <li>The metal ball is denser.</li>
                        </ul>
                    </li>
                    <li>
                        You have a container with 500 milliliters of cooking oil, and it has a mass of 450 grams. Calculate the density of the cooking oil in grams per milliliter (g/mL).
                        <br />
                        <strong>Answer:</strong>
                        <ul className="list-disc pl-6">
                            <li>Density = Mass / Volume = 450 g / 500 mL = 0.9 g/mL</li>
                        </ul>
                    </li>
                    <li>
                        A 70 cm x 10 cm x 30 cm plastic box has a mass of 2500 g. Find the density of plastic.
                        <br />
                        <strong>Answer:</strong>
                        <ul className="list-disc pl-6">
                            <li>Volume = 70 cm × 10 cm × 30 cm = 21,000 cm³</li>
                            <li>Density = Mass / Volume = 2500 g / 21,000 cm³ = 0.12 g/cm³</li>
                        </ul>
                    </li>
                    <li>
                        Aluminum has a density of 2700 kg/m³. Find the mass of a solid 25 cm diameter aluminum ball.
                        <br />
                        <strong>Answer:</strong>
                        <ul className="list-disc pl-6">
                            <li>Radius = Diameter / 2 = 25 cm / 2 = 12.5 cm</li>
                            <li>Volume = 4/3 × π × (12.5 cm)³ = 4/3 × π × 1953.125 cm³ ≈ 8,180.3 cm³</li>
                            <li>Mass = Density × Volume = 2700 kg/m³ × 8.1803 × 10⁻³ m³ ≈ 22 kg</li>
                        </ul>
                    </li>
                    <li>
                        A cube of iron has a side length of 10 cm. What is the volume of this cube? The mass of this iron cube is half a kilogram. This cube has a cavity inside it; find the volume of the cavity.
                        <br />
                        <strong>Answer:</strong>
                        <ul className="list-disc pl-6">
                            <li>Volume of cube = Side³ = 10 cm × 10 cm × 10 cm = 1000 cm³</li>
                            <li>Density of iron ≈ 7.87 g/cm³</li>
                            <li>Mass = Density × Volume = 7.87 g/cm³ × 1000 cm³ = 7870 g ≈ 7.87 kg</li>
                            <li>Volume of cavity = Volume of cube - Volume occupied by iron = 1000 cm³ - 935.9 cm³ = 64.1 cm³</li>
                        </ul>
                    </li>
                    <li>
                        Mass of an irregularly shaped stone is 200 grams (g). When it is lowered into a measuring cylinder, it raises the water level from 40 mL to 73 mL. Find the volume and density of this stone.
                        <br />
                        <strong>Answer:</strong>
                        <ul className="list-disc pl-6">
                            <li>Volume of stone = Final water level - Initial water level = 73 mL - 40 mL = 33 mL</li>
                            <li>Density = Mass / Volume = 200 g / 33 mL ≈ 6.1 g/mL</li>
                        </ul>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default NumericalQuestions;
