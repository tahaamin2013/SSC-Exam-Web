import { FC } from 'react';

const NumericalQuestions: FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4">Numerical Response Questions</h1>
                <ol className="list-decimal pl-6 space-y-4">
                    <li>
                        Calculate the length of a spanner if a nut of length 20 cm requires a force of 50 N to turn, and if the same nut&apos;s torque is set by a force of 110 N, what should be the length of the spanner?
                        <br />
                        **Answer:** 10 cm and 110 cm
                    </li>
                    <li>
                        A long uniform steel bar of length 1 m is balanced by a pivot at its middle. Two masses, m1 and m2, are suspended at a distance of 2.2 m and 1.3 m respectively from the pivot. Ignoring the mass of the steel bar, find the value of m1 and m2 if m1 = 2 kg and m2 = 3 kg.
                    </li>
                    <li>
                        Two masses, 250 g and 100 g, are hanging at positions 15 cm and 1 m, respectively, on a meter rod pivoted at the 50 cm mark. Where should a third mass of 400 g be positioned to balance the rod?
                        <br />
                        **Answer:** 33.1 cm from the pivot
                    </li>
                    <li>
                        A car weighing 1220 kg enters a roundabout with a diameter of 60 meters at a speed of 25 km/h. Calculate the centripetal force acting on the car as it navigates the curve.
                        <br />
                        **Answer:** 693.3 N
                    </li>
                    <li>
                        A geostationary satellite revolves around Earth in an orbit of radius 42,000 km. Find the orbital speed of the satellite at this altitude.
                        <br />
                        **Answer:** 3.052 km/s
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default NumericalQuestions;
