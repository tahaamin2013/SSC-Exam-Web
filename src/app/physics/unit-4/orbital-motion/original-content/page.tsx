// pages/orbital-motion.js
import { FC } from 'react'

const OrbitalMotion: FC = () => {
    return (
        <div className="p-8 space-y-8">
            {/* Section: Orbital Motion */}
            <section>
                <h1 className="text-2xl font-bold mb-4">4.8 ORBITAL MOTION</h1>
                <p className="text-lg">
                    An orbit is a regular, repeating path that one object in space takes around another one. An object in an orbit is termed as a satellite. A satellite can be natural, like Earth or the Moon. Objects orbit each other because of gravity. Many planets have moons that orbit them, and many stars have planets, comets, asteroids, and other objects that orbit them. A satellite can also be man-made, like the International Space Station. Such man-made satellites are termed as artificial satellites.
                </p>
                <p className="text-lg">
                    To place a satellite into orbit, first we move it to high altitude and then accelerate it to a required tangential speed using rockets, as shown in Figure 4.25. If the speed is too high, the satellite may move in an elliptical orbit or escape, never to return. If the speed is too low, it will fall back to Earth. Satellites are typically put into circular (or nearly circular) orbits.
                </p>
            </section>

            {/* Section: Average Orbital Speed of Satellite */}
            <section>
                <h2 className="text-xl font-bold mb-4">4.8.1 AVERAGE ORBITAL SPEED OF SATELLITE</h2>
                <p className="text-lg">
                    The orbital speed of the body is the speed at which it orbits around the center of the system. This system is usually around a massive object. The relationship between speed, distance, and time <code className="bg-gray-200 p-1 rounded">t</code> is:
                </p>
                <p className="text-lg">
                    This means that in one orbit, a satellite travels a distance equal to the circumference of a circle (the shape of the orbit). This is equal to <code className="bg-gray-200 p-1 rounded">2πr</code> where <code className="bg-gray-200 p-1 rounded">r</code> is the radius of the circle, thus:
                </p>
                <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
                    <code>
                        Distance = 2πr
                    </code>
                </pre>
                <p className="text-lg">
                    The time it takes for an object to orbit around another object is called its orbital period <code className="bg-gray-200 p-1 rounded">T</code>. Earth completes its orbital period around the Sun every 365 days. The further away a planet is from the Sun, the longer its orbital period. The planet Neptune, for example, takes almost 165 years to orbit the Sun.
                </p>
                <p className="text-lg">
                    The average orbital speed <code className="bg-gray-200 p-1 rounded">vave</code> is given by:
                </p>
                <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
                    <code>
                        vave = 2πr / T
                    </code>
                </pre>
                <p className="text-lg">
                    Which means that for a particular distance from the center of Earth, all satellites should have the same orbital speed irrespective of the size of the satellite.
                </p>
            </section>

            {/* Section: Quiz */}
            <section>
                <h2 className="text-xl font-bold mb-4">QUIZ</h2>
                <p className="text-lg">
                    Two satellites are following one another in the same circular orbit. If one satellite tries to catch another (leading one) satellite, can it be done by increasing its speed?
                </p>
                <p className="text-lg">
                    No, if the speed of the satellite is somehow increased, its radius will also increase and it will be unable to catch up with the leading satellite.
                </p>
            </section>

            {/* Section: Example */}
            <section>
                <h2 className="text-xl font-bold mb-4">EXAMPLE 4.4: ORBITAL SPEED OF EARTH</h2>
                <p className="text-lg">
                    Earth completes one revolution around the Sun in 365.25 days. Find the orbital speed of Earth around the Sun if it is 150 million km away from the Sun.
                </p>
                <p className="text-lg">
                    <strong>GIVEN</strong>
                </p>
                <ul className="list-disc pl-6 text-lg">
                    <li>Orbital period <code className="bg-gray-200 p-1 rounded">T</code> = 365.25 days = 365.25 × 24 × 60 × 60 s = 3.16 × 10^7 s</li>
                    <li>Radius <code className="bg-gray-200 p-1 rounded">r</code> = 150 million km = 150 × 10^6 km = 1.5 × 10^11 m</li>
                </ul>
                <p className="text-lg">
                    <strong>REQUIRED</strong>
                </p>
                <ul className="list-disc pl-6 text-lg">
                    <li>Orbital speed of Earth around the Sun <code className="bg-gray-200 p-1 rounded">v</code> = ?</li>
                </ul>
                <p className="text-lg">
                    <strong>SOLUTION</strong>
                </p>
                <p className="text-lg">
                    The relation for average orbital speed is given by: <code className="bg-gray-200 p-1 rounded">vave = 2πr / T</code>
                </p>
                <p className="text-lg">
                    Putting values:
                </p>
                <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
                    <code>
                        vave = 2 × 3.14 × 1.5 × 10^11 m / 3.16 × 10^7 s
                    </code>
                </pre>
                <p className="text-lg">
                    Therefore:
                </p>
                <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
                    <code>
                        v = 2.98 × 10^4 m/s
                    </code>
                </pre>
                <p className="text-lg">
                    <strong>Answer</strong>
                </p>
                <p className="text-lg">
                    or <code className="bg-gray-200 p-1 rounded">v = 29.8 km/s</code> or <code className="bg-gray-200 p-1 rounded">v = 107,280 km/h</code>
                </p>
                <p className="text-lg">
                    This is a huge speed compared to the speeds of our daily life objects. The reason we do not feel it is that we are relatively at rest, i.e., we also move with the Earth.
                </p>
            </section>
        </div>
    )
}

export default OrbitalMotion
