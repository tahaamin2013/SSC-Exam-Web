// pages/centripetal-force.js
import Image from 'next/image'
import { FC } from 'react'

const CentripetalForce: FC = () => {
    return (
        <div className="p-8 space-y-8">
            {/* Section: Centripetal Force */}
            <section>
                <h1 className="text-2xl font-bold mb-4">4.7 CENTRIPETAL FORCE</h1>
                <p className="text-lg">
                    When the speed of the moving object does not change as it travels in the circular path is called uniform circular motion.
                </p>
                <p className="text-lg">
                    The speed of the object may remain constant however the direction is continuously changing, giving rise to a change in velocity and an acceleration as shown in figure 3.22. This acceleration is perpendicular (at a right angle) to the velocity. In uniform circular motion, it is towards the center of the circle called centripetal acceleration.
                </p>
                <p className="text-lg">
                    Now there must be some unbalanced force acting on the object which is pulling it towards the center.
                </p>
                <p className="text-lg">
                    The force that pulls an object out of its straight-line path and into a circular path is called centripetal (center-seeking) force.
                </p>
                <p className="text-lg">
                    Consider a communications satellite that is moving at a uniform speed around Earth in a circular orbit as shown in figure 4.23. According to the first law of motion there must be some unbalanced force acting on the satellite that is pulling it out of a straight-line path. This unbalanced force is termed as centripetal force.
                </p>
                <p className="text-lg">
                    The magnitude of the centripetal force <code className="bg-gray-200 p-1 rounded">F</code>, of an object with a mass <code className="bg-gray-200 p-1 rounded">m</code> that is moving with a velocity <code className="bg-gray-200 p-1 rounded">v</code> in a circular orbit of a radius <code className="bg-gray-200 p-1 rounded">r</code> is:
                </p>
                <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
                    <code>
                        F = mv² / r
                    </code>
                </pre>
                <p className="text-lg">
                    Equation 4.4 gives the magnitude of centripetal force, where negative sign indicates that force is directed towards the center of the circular path.
                </p>
                <p className="text-lg">
                    Perhaps you have swung a ball on the end of a string in a circle over your head. Once you have the ball moving, the tension on the string keeps it moving in a circular path as you twirl it. That tension is centripetal force, which pulls the ball from its natural straight-line path into a circular path as shown in figure 4.24 (a). The force that keeps planets in orbit around the Sun is centripetal force, which, in this case, is the &apos;gravitational force&apos;. This center is exactly where the Sun is located. In the case of the Moon, the centripetal force acting on it is directed towards the center of the Earth as shown in figure 4.24 (b).
                </p>
            </section>

            {/* Example: Hammer Throw */}
            <section>
                <h2 className="text-xl font-bold mb-4">EXAMPLE 4.3: HAMMER THROW</h2>
                <p className="text-lg">
                    Bilal is performing in a hammer throw game as shown in the figure. Mass of the metal ball is 5 kg and length of the string is 1.5 m. What centripetal force must Bilal apply to get a speed of 25 m/s?
                </p>
                <p className="text-lg">
                    <strong>GIVEN</strong>
                </p>
                <ul className="list-disc pl-6 text-lg">
                    <li>Mass of metal ball attached by a steel wire <code className="bg-gray-200 p-1 rounded">m</code> = 5 kg</li>
                    <li>Radius <code className="bg-gray-200 p-1 rounded">r</code> = 1.5 m</li>
                </ul>
                <p className="text-lg">
                    <strong>REQUIRED</strong>
                </p>
                <ul className="list-disc pl-6 text-lg">
                    <li>Speed <code className="bg-gray-200 p-1 rounded">v</code> = 25 m/s</li>
                    <li>Centripetal force <code className="bg-gray-200 p-1 rounded">F₁</code> = ?</li>
                </ul>
                <p className="text-lg">
                    <strong>SOLUTION</strong>
                </p>
                <p className="text-lg">
                    The centripetal force acting on a body of mass <code className="bg-gray-200 p-1 rounded">m</code> is given by:
                </p>
                <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
                    <code>
                        F = mv² / r
                    </code>
                </pre>
                <p className="text-lg">
                    Putting values <code className="bg-gray-200 p-1 rounded">F = (5kg × (25m/s)²) / 1.5m</code>
                </p>
                <p className="text-lg">
                    therefore <code className="bg-gray-200 p-1 rounded">F = 2083.3 N</code>
                </p>
                <p className="text-lg">
                    <strong>Answer</strong>
                </p>
                <p className="text-lg">
                    This means that Bilal&apos;s hand must apply a centripetal force of 2083.3 N on the metal in order to give a velocity of 25 m/s to the ball.
                </p>
            </section>
        </div>
    )
}

export default CentripetalForce
