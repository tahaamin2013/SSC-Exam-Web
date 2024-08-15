import { FC } from 'react';

const NumericalQuestions: FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-6">Numerical Response Questions</h1>
                <ol className="list-decimal pl-6 space-y-4">
                    <li>
                        Consider a spring with a spring constant of 8000 N/m. If a force of 500 N is applied to the spring, what will be the displacement of the spring?
                        <br />
                        <strong>Answer:</strong> 6.25 cm
                    </li>
                    <li>
                        In a force multiplier, the small piston has a diameter of 15 cm and the large piston has a diameter of 30 cm. If a 250 N force is applied on the small piston, then how much force will be produced on the large piston?
                        <br />
                        <strong>Answer:</strong> 1000 N
                    </li>
                    <li>
                        A hydraulic car lift lifts a car of mass 1000 kg when we apply a force of 50 N on the small piston. The radius of its small piston is 20 cm. Find the radius of its large piston.
                        <br />
                        <strong>Answer:</strong> 78.4 cm
                    </li>
                    <li>
                        Water column in a beaker is 70 cm. Find the pressure of water in the beaker. Take the density of water as 1000 kg/m³.
                        <br />
                        <strong>Answer:</strong> 6.86 kPa
                    </li>
                    <li>
                        How much force should be applied on an area of 20 cm² to get a pressure of 4500 Pa?
                        <br />
                        <strong>Answer:</strong> 9 N
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default NumericalQuestions;
