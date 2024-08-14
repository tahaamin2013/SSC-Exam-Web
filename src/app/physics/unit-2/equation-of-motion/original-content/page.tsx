import React from 'react'

const Page = () => {
    return (
        <div className="p-6 bg-white text-black">
            <h2 className="text-2xl font-bold mb-4">2.6 EQUATIONS OF MOTION</h2>
            <p className="mb-4">
                There are three basic equations of motion for bodies moving with uniform acceleration. These equations relate initial velocity, final velocity, acceleration, time, and distance covered by a moving body. To simplify the derivation of these equations, we assume that the motion is along a straight line. Hence, we consider only the magnitude of displacements, velocities, and acceleration.
            </p>
            <p className="mb-4">
                Consider a body moving with initial velocity <span className="font-semibold">vi</span> in a straight line with uniform acceleration <span className="font-semibold">a</span>. Its
            </p>
            <p className="mb-4">
                Velocity becomes <span className="font-semibold">v</span>, after time <span className="font-semibold">t</span>. The motion of the body is described by the speed-time graph as shown in figure 2.26 by line AB. The slope of line AB is acceleration <span className="font-semibold">a</span>. The total distance covered by the body is shown by the shaded area under the line AB. Equations of motion can be obtained easily from this graph.
            </p>

            <h3 className="text-xl font-bold mb-4">FIRST EQUATION OF MOTION</h3>
            <p className="mb-4">
                Speed-time graph for the motion of a body is shown in figure 2.26. The slope of line AB gives the acceleration <span className="font-semibold">a</span> of a body.
            </p>
            <p className="mb-4">
                Slope of line AB = <span className="italic">a = BC / AC = BD - CD / OD</span> as BD, CD = <span className="italic">v</span>, and OD = 1. Hence,
            </p>
            <p className="mb-4 italic">
                a = (V - Vi) / t
            </p>
            <p className="mb-4">
                (2.4) ........... (2.5)
            </p>

            <h3 className="text-xl font-bold mb-4">SECOND EQUATION OF MOTION</h3>
            <p className="mb-4">
                In the speed-time graph shown in figure 2.26, the total distance <span className="font-semibold">S</span> traveled by the body is equal to the total area <span className="font-semibold">OABD</span> under the graph. That is,
            </p>
            <p className="mb-4 italic">
                Total distance S = area of (rectangle OACD + triangle ABC)
            </p>
            <p className="mb-4">
                Area of rectangle OACD = OA x OD
            </p>
            <p className="mb-4">
                Area of triangle ABC = 1/2 (AC x BC) = 1/2 x a x t
            </p>
            <p className="mb-4">
                Since Total area = area of rectangle OACD + area of triangle ABC
            </p>
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Example 2.11</h2>
                <p className="mb-2">
                    A train slows down from 80 km/h with a uniform retardation of 2 m/s². How long will it take to attain a speed of 20 km/h?
                </p>
                <p className="mb-2">
                    <strong>SOLUTION:</strong>
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>V<sub>initial</sub> = 80 km/h = 80 × 1000 m / 3600 s = 22.2 m/s</li>
                    <li>V<sub>final</sub> = 20 km/h = 20 × 1000 m / 3600 s = 5.6 m/s</li>
                    <li>a = -2 m/s²</li>
                </ul>
                <p className="mb-2">
                    Using the equation V = V<sub>initial</sub> + at, we get:
                </p>
                <p className="mb-2">
                    5.6 m/s = 22.2 m/s + (-2 m/s²) × t
                </p>
                <p className="mb-2">
                    Solving for t, we get t = 8.3 s.
                </p>
                <p className="mb-2">
                    Thus, the train will take 8.3 s to attain the required speed.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">Example 2.12</h2>
                <p className="mb-2">
                    A bicycle accelerates at 1 m/s² from an initial velocity of 4 m/s for 10 s. Find the distance moved by it during this interval of time.
                </p>
                <p className="mb-2">
                    <strong>SOLUTION:</strong>
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Initial velocity (v<sub>0</sub>) = 4 m/s</li>
                    <li>Acceleration (a) = 1 m/s²</li>
                    <li>Time (t) = 10 s</li>
                </ul>
                <p className="mb-2">
                    Applying the equation for distance:
                </p>
                <p className="mb-2">
                    <code>S = v<sub>0</sub> × t + 0.5 × a × t²</code>
                </p>
                <p className="mb-2">
                    <code>S = 4 m/s × 10 s + 0.5 × 1 m/s² × (10 s)²</code>
                </p>
                <p className="mb-2">
                    <code>S = 40 m + 0.5 × 1 × 100</code>
                </p>
                <p className="mb-2">
                    <code>S = 40 m + 50 m = 90 m</code>
                </p>
                <p className="mb-2">
                    Thus, the distance moved by the bicycle is 90 meters.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">Useful Information</h2>
                <ul className="list-disc list-inside">
                    <li>To convert m/s to km/h: <code>1 m/s = 3.6 km/h</code></li>
                    <li>To convert km/h to m/s: <code>1 km/h = 1000 m / 3600 s = 0.27778 m/s</code></li>
                    <li>To convert m/s to km/h: Multiply by 3.6 (e.g., 20 m/s = 72 km/h)</li>
                    <li>To convert km/h to m/s: Multiply by 0.27778 (e.g., 50 km/h = 13.88 m/s)</li>
                    <li>To convert acceleration in m/s² to km/h²: Multiply by 12960</li>
                    <li>To convert acceleration in km/h² to m/s²: Divide by 12960</li>
                </ul>
            </section>
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Example 2.12</h2>
                <p className="mb-2">
                    A bicycle accelerates at 1 m/s² from an initial velocity of 4 m/s for 10 s. Find the distance moved by it during this interval of time.
                </p>
                <p className="mb-2">
                    <strong>SOLUTION</strong>
                </p>
                <p className="mb-2">
                    S = v<sub>0</sub> × t + ½ × a × t²
                </p>
                <p className="mb-2">
                    = 4 m/s × 10 s + ½ × 1 m/s² × (10 s)²
                </p>
                <p className="mb-2">
                    = 40 m + 50 m
                </p>
                <p className="mb-2">
                    = 90 m
                </p>
                <p className="mb-2">
                    Thus, the bicycle will move 90 metres in 10 seconds.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">Example 2.13</h2>
                <p className="mb-2">
                    A car travels with a velocity of 5 m/s. It then accelerates uniformly and travels a distance of 50 m. If the velocity reached is 15 m/s, find the acceleration and the time to travel this distance.
                </p>
                <p className="mb-2">
                    <strong>SOLUTION</strong>
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>v<sub>initial</sub> = 5 m/s</li>
                    <li>S = 50 m</li>
                    <li>v<sub>final</sub> = 15 m/s</li>
                    <li>a = ?</li>
                    <li>t = ?</li>
                </ul>
                <p className="mb-2">
                    Putting values in the third equation of motion, we get:
                </p>
                <p className="mb-2">
                    <code>v<sub>final</sub>² = v<sub>initial</sub>² + 2aS</code>
                </p>
                <p className="mb-2">
                    (15 m/s)² = (5 m/s)² + 2a × 50 m
                </p>
                <p className="mb-2">
                    225 = 25 + 100a
                </p>
                <p className="mb-2">
                    200 = 100a
                </p>
                <p className="mb-2">
                    a = 2 m/s²
                </p>
                <p className="mb-2">
                    Using the first equation of motion to find t:
                </p>
                <p className="mb-2">
                    <code>v<sub>final</sub> = v<sub>initial</sub> + at</code>
                </p>
                <p className="mb-2">
                    15 m/s = 5 m/s + 2 m/s² × t
                </p>
                <p className="mb-2">
                    15 m/s - 5 m/s = 2 m/s² × t
                </p>
                <p className="mb-2">
                    10 m/s = 2 m/s² × t
                </p>
                <p className="mb-2">
                    t = 5 s
                </p>
                <p className="mb-2">
                    Thus, the acceleration of the car is 2 m/s² and it takes 5 seconds to travel 50 m distance.
                </p>
            </section>
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Third Equation of Motion</h2>
                <p className="mb-2">
                    In the speed-time graph shown in figure 2.26, the total distance S travelled by the body is given by the total area OABD under the graph.
                </p>
                <p className="mb-2">
                    Total area OABD = (OA + BD) × OD / 2
                </p>
                <p className="mb-2">
                    S = (OA + BD) × OD / 2
                </p>
                <p className="mb-2">
                    Multiplying both sides by 2S:
                </p>
                <p className="mb-2">
                    2S = (OA + BD) × OD
                </p>
                <p className="mb-2">
                    Putting the values in the above equation 2.7, we get:
                </p>
                <p className="mb-2">
                    2S = (v + v<sub>0</sub>) × (v - v<sub>0</sub>) / 2a
                </p>
                <p className="mb-2">
                    2S = (v² - v<sub>0</sub>²) / 2a
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">Example 2.10</h2>
                <p className="mb-2">
                    A car travelling at 10 m/s accelerates uniformly at 2 m/s². Calculate its velocity after 5 s.
                </p>
                <p className="mb-2">
                    <strong>SOLUTION:</strong>
                </p>
                <p className="mb-2">
                    Using the equation for velocity with uniform acceleration:
                </p>
                <p className="mb-2">
                    V = v<sub>initial</sub> + at
                </p>
                <p className="mb-2">
                    where:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>v<sub>initial</sub> = 10 m/s</li>
                    <li>a = 2 m/s²</li>
                    <li>t = 5 s</li>
                </ul>
                <p className="mb-2">
                    Substituting the values, we get:
                </p>
                <p className="mb-2">
                    V = 10 m/s + 2 m/s² × 5 s
                </p>
                <p className="mb-2">
                    V = 10 m/s + 10 m/s
                </p>
                <p className="mb-2">
                    V = 20 m/s
                </p>
            </section>
        </div>
    )
}

export default Page
