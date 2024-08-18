// pages/states-of-matter.tsx

import React from 'react';

const StatesOfMatterPage: React.FC = () => {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4">7.3 STATES OF MATTER</h1>
            <p className="mb-4">
                Matter exists in three fundamental states: solid, liquid, and gas. Matter consists of particles (atoms and molecules). The gaps between these particles are the main reason that divides the matter into three states. Particles of matter apply an attractive force on each other. The difference in the strength of this force is the reason for smaller or larger gaps between particles. Therefore, their densities and patterns of particle motion are also impacted by varying strength of this attractive force. Now, we will see the properties of each of the three states:
            </p>

            <h2 className="text-2xl font-semibold mb-4">7.3.1 SOLIDS:</h2>
            <ul className="list-disc pl-8 mb-4">
                <li>Solids are made up of particles (atoms or molecules).</li>
                <li>There is a strong attractive force between particles.</li>
                <li>Due to the strong attractive force, particles of solids are closely packed and they have a fixed lattice pattern.</li>
                <li>Solid particles cannot freely move like gas particles or slide past one another like liquid particles due to their fixed location. Solids&apos; particles can only vibrate about their mean positions.</li>
                <li>Solids have a fixed shape.</li>
                <li>Solids have high density.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">LIQUIDS:</h2>
            <ul className="list-disc pl-8 mb-4">
                <li>Liquids are also made up of particles (molecules).</li>
                <li>The attractive force between particles is stronger than that of gases but weaker than that of solids.</li>
                <li>The distance between particles in liquids is greater than that in solids due to an intermediate attractive force, yet they are still close together.</li>
                <li>Liquid particles flow and glide over each other. Liquid particles keep changing their position.</li>
                <li>Due to flowing particles, a liquid has no fixed shape and can adopt the shape of the container.</li>
                <li>A liquid has intermediate density (smaller than a solid and higher than a gas).</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">GASES:</h2>
            <ul className="list-disc pl-8 mb-4">
                <li>Gas is also composed of particles (atoms and molecules).</li>
                <li>There is a negligibly weak attractive force between gas particles.</li>
                <li>Due to the weak attractive force, the distance between particles is larger compared to the size of the particles.</li>
                <li>Particles are in constant random motion and they constantly collide with each other and with the walls of the container.</li>
                <li>Forces between molecules are negligible, except during collisions.</li>
                <li>Gas has no fixed shape and volume. Gas spreads out in the container and fills it; therefore, its volume is equal to the volume of the container.</li>
                <li>Gases are less dense than liquids and solids.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">FOR YOUR INFORMATION</h2>
            <p className="mb-4">
                Particles in liquids move freely but stay at the bottom of the container due to a relatively strong attractive force, while in gases, particles spread, fill the container, and move freely in it.
            </p>

            <h2 className="text-2xl font-semibold mb-4">TABLE 7.2 STATES OF MATTER</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border-b px-6 py-3 text-left">State</th>
                            <th className="border-b px-6 py-3 text-left">Density</th>
                            <th className="border-b px-6 py-3 text-left">Arrangement of Particles</th>
                            <th className="border-b px-6 py-3 text-left">Movement of Particles</th>
                            <th className="border-b px-6 py-3 text-left">Energy of Particles</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border-b px-6 py-3">Solid</td>
                            <td className="border-b px-6 py-3">High</td>
                            <td className="border-b px-6 py-3">Regular pattern</td>
                            <td className="border-b px-6 py-3">Vibrate around a fixed position</td>
                            <td className="border-b px-6 py-3">Low energy</td>
                        </tr>
                        <tr>
                            <td className="border-b px-6 py-3">Liquid</td>
                            <td className="border-b px-6 py-3">Medium</td>
                            <td className="border-b px-6 py-3">Randomly arranged</td>
                            <td className="border-b px-6 py-3">Move around each other</td>
                            <td className="border-b px-6 py-3">Greater energy</td>
                        </tr>
                        <tr>
                            <td className="border-b px-6 py-3">Gas</td>
                            <td className="border-b px-6 py-3">Low</td>
                            <td className="border-b px-6 py-3">Randomly arranged</td>
                            <td className="border-b px-6 py-3">Move quickly in all directions</td>
                            <td className="border-b px-6 py-3">Highest energy</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 className="text-2xl font-semibold mb-4">POINT TO PONDER</h2>
            <p className="mb-4">
                Because liquids and gases do not maintain a fixed shape, they both have the ability to flow. Thus, they are collectively referred to as fluids.
            </p>
        </div>
    );
};

export default StatesOfMatterPage;
