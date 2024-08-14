import { NextPage } from 'next';

const Summary: NextPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 p-8">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-center mb-6 text-indigo-600">Physics Summary</h1>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-indigo-500 mb-2">Moment of a Force (Torque)</h2>
                    <p className="text-lg mb-4">
                        Moment of a force or Torque is the measure of an object&apos;s tendency to rotate about some point O.
                        <br />
                        <strong>Moment of a force = force x perpendicular distance of the force to the point.</strong>
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-indigo-500 mb-2">Principle of Moments</h2>
                    <p className="text-lg mb-4">
                        The principle of moments states that for an object in equilibrium, the sum of the clockwise moments taken about the pivot
                        must be equal to the sum of the anti-clockwise moments taken about the same pivot.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-indigo-500 mb-2">Centre of Mass vs. Centre of Gravity</h2>
                    <p className="text-lg mb-4">
                        The <strong>centre of mass</strong> of the body is the point about which mass is equally distributed in all directions.
                        <br />
                        The <strong>centre of gravity</strong> is a single point where the whole weight of an object appears to act.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-indigo-500 mb-2">Stability</h2>
                    <p className="text-lg mb-4">
                        Stability of an object refers to its ability to return to its original position when the force that changed its orientation is removed.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-indigo-500 mb-2">Frictional Force</h2>
                    <p className="text-lg mb-4">
                        Frictional force is the force that resists the motion of objects on a surface.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-indigo-500 mb-2">Terminal Velocity</h2>
                    <p className="text-lg mb-4">
                        Terminal velocity is the maximum constant velocity that a body can achieve while passing through a resistive (viscous) medium.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-indigo-500 mb-2">Centripetal Force</h2>
                    <p className="text-lg mb-4">
                        Centripetal force is the force that compels a body to travel in a circular path. It may be electric, gravitational, or any other force.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-indigo-500 mb-2">Orbital Velocity</h2>
                    <p className="text-lg">
                        Orbital velocity is the speed of an object revolving around another heavy object in an orbit.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Summary;
