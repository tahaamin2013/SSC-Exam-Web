import { FC } from 'react';

const NumericalQuestions: FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <ol className="list-decimal pl-6 space-y-4">
                    <li>
                        A boy is holding a book of mass 2 kg. How much force is he applying on the book? If he moves it up with an acceleration of 3 m/s², how much should he apply total force on the book?
                    </li>
                    <li>
                        A girl of mass 30 kg is running with a velocity of 4 m/s. Find her momentum.
                    </li>
                    <li>
                        A 2 kg steel ball is moving with a speed of 15 m/s. It hits a bulk of sand and comes to rest in 0.2 seconds. Find the force applied by the sand bulk on the ball.
                    </li>
                    <li>
                        A 100 grams bullet is fired from a 5 kg gun. The muzzle velocity of the bullet is 20 m/s. Find the recoil velocity of the gun.
                    </li>
                    <li>
                        A robotic car of 15 kg is moving with 25 m/s. Brakes are applied to stop it. The brakes apply a constant force of 50 N. How long does the car take to stop?
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default NumericalQuestions;
