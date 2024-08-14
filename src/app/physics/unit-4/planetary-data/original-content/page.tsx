// pages/planetary-data.js
import { FC } from 'react'

const PlanetaryData: FC = () => {
    return (
        <div className="p-8 space-y-8">
            {/* Section: Planetary Data */}
            <section>
                <h1 className="text-2xl font-bold mb-4">4.9 PLANETARY DATA</h1>
                <p className="text-lg">
                    An astronomical body orbiting a star or stellar remnant that is massive enough to be rounded by its gravity is termed a planet. There are more planets in our galaxy than stars.
                </p>
                <p className="text-lg">
                    Our solar system consists of our star, the Sun, and everything bound to it by gravity - the planets Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune; dwarf planets such as Pluto; dozens of moons; and millions of asteroids, comets, and meteoroids. Table 4.1 summarizes the physical parameters of the planets in the solar system.
                </p>
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border px-4 py-2">Planet</th>
                            <th className="border px-4 py-2">Distance from Sun (Gm)</th>
                            <th className="border px-4 py-2">Orbital Period (yr)</th>
                            <th className="border px-4 py-2">Average Surface Temperature (°C)</th>
                            <th className="border px-4 py-2">Mass (10<sup>24</sup> kg)</th>
                            <th className="border px-4 py-2">Density (kg/m³)</th>
                            <th className="border px-4 py-2">g (N/kg)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">Mercury</td>
                            <td className="border px-4 py-2">57.9</td>
                            <td className="border px-4 py-2">0.330</td>
                            <td className="border px-4 py-2">167</td>
                            <td className="border px-4 py-2">0.241</td>
                            <td className="border px-4 py-2">5429</td>
                            <td className="border px-4 py-2">3.7</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Venus</td>
                            <td className="border px-4 py-2">108.2</td>
                            <td className="border px-4 py-2">4.87</td>
                            <td className="border px-4 py-2">464</td>
                            <td className="border px-4 py-2">0.615</td>
                            <td className="border px-4 py-2">5243</td>
                            <td className="border px-4 py-2">8.9</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Earth</td>
                            <td className="border px-4 py-2">149.6</td>
                            <td className="border px-4 py-2">5.97</td>
                            <td className="border px-4 py-2">15</td>
                            <td className="border px-4 py-2">1</td>
                            <td className="border px-4 py-2">5514</td>
                            <td className="border px-4 py-2">9.8</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Mars</td>
                            <td className="border px-4 py-2">228.0</td>
                            <td className="border px-4 py-2">0.642</td>
                            <td className="border px-4 py-2">-65</td>
                            <td className="border px-4 py-2">1.88</td>
                            <td className="border px-4 py-2">3934</td>
                            <td className="border px-4 py-2">3.7</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Jupiter</td>
                            <td className="border px-4 py-2">778.5</td>
                            <td className="border px-4 py-2">1898</td>
                            <td className="border px-4 py-2">-110</td>
                            <td className="border px-4 py-2">11.9</td>
                            <td className="border px-4 py-2">1326</td>
                            <td className="border px-4 py-2">24.7</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Saturn</td>
                            <td className="border px-4 py-2">1432.0</td>
                            <td className="border px-4 py-2">568</td>
                            <td className="border px-4 py-2">-140</td>
                            <td className="border px-4 py-2">29.4</td>
                            <td className="border px-4 py-2">687</td>
                            <td className="border px-4 py-2">9.0</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Uranus</td>
                            <td className="border px-4 py-2">2867.0</td>
                            <td className="border px-4 py-2">86.8</td>
                            <td className="border px-4 py-2">-195</td>
                            <td className="border px-4 py-2">83.8</td>
                            <td className="border px-4 py-2">1270</td>
                            <td className="border px-4 py-2">8.7</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Neptune</td>
                            <td className="border px-4 py-2">4515.0</td>
                            <td className="border px-4 py-2">102</td>
                            <td className="border px-4 py-2">-200</td>
                            <td className="border px-4 py-2">164</td>
                            <td className="border px-4 py-2">1638</td>
                            <td className="border px-4 py-2">11.0</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Sun</td>
                            <td className="border px-4 py-2">5906.4</td>
                            <td className="border px-4 py-2">1,990,000</td>
                            <td className="border px-4 py-2">5,600</td>
                            <td className="border px-4 py-2">274</td>
                            <td className="border px-4 py-2">1408</td>
                            <td className="border px-4 py-2">5906.4</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* Section: For Your Information - GPS */}
            <section>
                <h2 className="text-xl font-bold mb-4">FOR YOUR INFORMATION</h2>
                <h3 className="text-lg font-semibold mb-2">INFORMATION: GLOBAL POSITIONING SYSTEM (GPS)</h3>
                <p className="text-lg">
                    Many applications of satellite technology affect our lives. An increasingly important application is the network of 24 satellites called the Global Positioning System (GPS), which can be used to determine the position of an object. Figure illustrates how the system works by locating the position of an enemy tank. A measurement using a single satellite locates the tank somewhere on a green circle, as shown in Figure (a). While a measurement using a second satellite locates the tank on another circle. The intersection of the circles reveals two possible positions for the tank, as shown in Figure (b). With the aid of a third satellite, a third circle can be established, which intersects the other two and identifies the tank&apos;s exact position, as shown in Figure (c).
                </p>
                <div className="flex justify-around mt-4">
                    <img src="/path/to/figure-a.png" alt="Figure (a)" className="w-1/3" />
                    <img src="/path/to/figure-b.png" alt="Figure (b)" className="w-1/3" />
                    <img src="/path/to/figure-c.png" alt="Figure (c)" className="w-1/3" />
                </div>
            </section>
        </div>
    )
}

export default PlanetaryData
