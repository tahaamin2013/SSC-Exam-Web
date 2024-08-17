import { FC } from 'react';

const NumericalQuestions: FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-6">Numerical Response Questions</h1>
                <ol className="list-decimal pl-6 space-y-4">
                    <li>
                        Calculate the work done in pushing a box with 150 N through a distance of 5 m.
                        <br />
                        <strong>Answer:</strong> 750 J
                    </li>
                    <li>
                        A boy weighing 75 N jumps up and gains 300 J of gravitational potential energy. Find the height to which the boy will rise.
                        <br />
                        <strong>Answer:</strong> 4 m
                    </li>
                    <li>
                        A 5 kg steel ball is dropped from the top of a 12 m high tower. What is the kinetic energy of the ball on hitting the ground? With what velocity will it hit the ground? (Neglect air resistance).
                        <br />
                        <strong>Answer:</strong> 588 J and 15.3 m/s
                    </li>
                    <li>
                        A 2.0 kg rock is dropped from a 20 m tall building. What is the Kinetic and gravitational potential energy when the rock has fallen 15 m.
                        <br />
                        <strong>Answer:</strong> KE = 294 J and PE (gravitational) = 98 J
                    </li>
                    <li>
                        A rocket with a mass of 800 g is launched vertically upward with an initial speed of 30 m/s. (a) Assuming no air resistance, calculate the maximum height the rocket would reach. (b) If, due to air friction, the rocket only rises to 25 m, determine the work done against air resistance.
                        <br />
                        <strong>Answer:</strong> (a) 45.92 m, (b) -164 J
                    </li>
                    <li>
                        A 2 hp electric motor gives energy to a system that lifts a load of 100 kg to a height of 10 m in 1.5 s. Calculate (a) Input (work done by motor on the system) (b) Output (load lifted by the system) and (c) Efficiency of the system.
                        <br />
                        <strong>Answer:</strong> (a) 2238 J, (b) 980 J and (c) 22.8%
                    </li>
                    <li>
                        What horsepower (hp) is required to pump up 2500 kg of water to a height of 100 m in 5 minutes?
                        <br />
                        <strong>Answer:</strong> 95 hp
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default NumericalQuestions;
