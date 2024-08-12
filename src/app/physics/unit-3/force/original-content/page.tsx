import Head from "next/head"

export default function Dynamics() {
    return (
        <>
            <Head>
                <title>Dynamics - Introduction</title>
                <meta name="description" content="Introduction to Dynamics - The connection between force and motion." />
            </Head>

            <main className="min-h-screen bg-white text-gray-900 px-4 py-8 md:px-8 md:py-12">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold mb-4">Dynamics - I</h1>

                    <p className="mb-4">
                        In kinematics we have discussed how motion is described in terms of velocity and acceleration. Now we deal with the questions like: How an object at rest begin to move? What causes an object to accelerate or decelerate? What makes an object to moves in a curved path? The simple answer to all these questions is force. In this Chapter, we will study the connection between force and motion, which is the subject called dynamics.
                    </p>

                    <p className="mb-4">
                        Every motion you observe or experience is related to a force as shown in figure 3.1. We can start moving a trolley by simply applying force on it, we can use this force to speed it up or slow it down and we can even change its direction.
                    </p>
                    <h2 className="text-2xl font-bold text-blue-700 mb-4">3.1 FORCE</h2>
                    <p className="mb-4">Force is a vector quantity which changes or tends to change the state of a body; start or stop its motion, speed it up or slow it down, and can change the direction of its motion.</p>

                    <h3 className="text-xl font-semibold text-blue-600 mb-3">3.1.1 TYPES OF FORCES</h3>
                    <p className="mb-4">Forces are broadly classified as contact and non-contact forces.</p>

                    <h4 className="text-lg font-medium text-blue-500 mb-2">A. CONTACT FORCES</h4>
                    <p className="mb-4">The force acting between two objects that are in physical contact is termed as contact forces. For example, in a game of cricket, a batter hitting a cricket ball is a contact force since there is physical contact between the bat and the ball.</p>

                    <p className="mb-4">A force perpendicular to the contact surface that keeps objects from passing through each other is called the normal force and is represented as <code className="bg-gray-200 p-1 rounded">F₁₁</code>. (In geometry, normal means perpendicular). For example, the book lying on a table, the force perpendicular to the table is normal force.</p>
                    <div className="mb-6">
                        <img src="figure3.3a.png" alt="Normal Force" className="w-full h-auto mb-2 border border-gray-300 rounded" />
                        <p className="text-center text-gray-600">Figure 3.3 (a): Normal Force</p>
                    </div>

                    <p className="mb-4">The force that propels a flying machine in the direction of motion is termed as thrust. For example, engines produce thrust; the thrust of the engine of a car causes it to accelerate.</p>
                    <div className="mb-6">
                        <img src="figure3.3b.png" alt="Thrust" className="w-full h-auto mb-2 border border-gray-300 rounded" />
                        <p className="text-center text-gray-600">Figure 3.3 (b): Thrust</p>
                    </div>

                    <p className="mb-4">Force that resists the relative motion of solid surfaces, fluid layers, and material elements in contact and sliding against each other is called friction. Friction on an object acts in a direction opposite to the direction of the object&apos;s motion or attempted motion.</p>
                    <div className="mb-6">
                        <img src="figure3.3c.png" alt="Friction" className="w-full h-auto mb-2 border border-gray-300 rounded" />
                        <p className="text-center text-gray-600">Figure 3.3 (c): Friction</p>
                    </div>
                    <p className="mb-4">For example, air resistance is also a frictional force which occurs between air and an object. It is the force that the object experiences as it passes through the air. It is a kind of drag force which resists the motion of a body with fluid.</p>

                    <p className="mb-4">The forces exerted by two or more physical objects that are in contact, through a string, rope, cable, or spring, are called tension. For example, the tension in a spider web consists of numerous fine strands that pull on one another.</p>
                    <div className="mb-6">
                        <img src="figure3.3d.png" alt="Tension" className="w-full h-auto mb-2 border border-gray-300 rounded" />
                        <p className="text-center text-gray-600">Figure 3.3 (d): Tension</p>
                    </div>

                    <p className="mb-4">The forces that an object exerts to resist a change in its shape are called elastic forces; they arise from forces between the particles in the material. For example, when a force is applied to a spring or rubber band, it will stretch and at the same time resist being stretched. It must be noted that the tension is elastic only during extension, not compression.</p>
                    <h2 className="text-2xl font-bold text-blue-700 mb-4">3.1.2 NON-CONTACT FORCES</h2>

                    <p className="mb-4">Have you seen magnets exerting push or pull on other magnets at some distance? The force which acts at a distance, without any physical contact between bodies is termed as non-contact force. This force acts even if the objects involved are not touching, also termed as action at a distance force.</p>

                    <p className="mb-4">The attractive force between two objects with mass is called gravitational force. For example, the force experienced by the moon because of the earth.</p>

                    <p className="mb-4">An attractive or repulsive force experienced by charged objects is called electrostatic force. For example, the attractive force between a positively charged nucleus and a negatively charged electron.</p>

                    <p className="mb-4">An attractive or repulsive force experienced between magnetic poles is called magnetic force. For example, the repulsive force between the two North poles of magnets.</p>
                    <h2 className="text-2xl font-bold text-blue-700 mb-4">3.1.2 FUNDAMENTAL FORCES IN NATURE</h2>

                    <p className="mb-4">There are many different types of forces around us, but physicists have classified forces into only four categories based on how objects interact with one another. The four fundamental forces of nature are the gravitational force, the electromagnetic force, the strong nuclear force, and the weak nuclear force. Physicists have classified all forces that exist as one of these four fundamental forces. Physicists explain these fundamental forces through exchange particles. Elementary particles, much less massive than a proton, travel from one object to another &quot;carrying&quot; the force. In this way, each force is &apos;carried&apos; or mediated by the exchange of a particle.</p>

                    <h3 className="text-xl font-semibold text-blue-600 mb-3">A. Strong Nuclear Force</h3>
                    <p className="mb-4">The strong nuclear force is the strongest of all the fundamental forces. It keeps the positively charged protons tightly packed in the nucleus of an atom by overcoming the repulsion between them. The exchange particles of strong force are called pions, along with other heavy particles. The strong nuclear force has a very short range, nearly equal to the diameter of a proton.</p>

                    <h3 className="text-xl font-semibold text-blue-600 mb-3">B. Electromagnetic Force</h3>
                    <p className="mb-4">The electromagnetic force acts between electric charges. It includes both electric forces and magnetic forces. The electromagnetic force can exert either an attraction or a repulsion, so on average, the forces tend to cancel each other out and its effect is not always observed. The electromagnetic force is mediated by a massless particle known as a photon. The massless nature of the photon makes the effective range infinite, even though the strength of the force decreases rapidly as the distance between the objects increases. The normal force, friction, and tension are caused by the interaction of particles on the contact surfaces and are thus a result of the electromagnetic force.</p>

                    <h3 className="text-xl font-semibold text-blue-600 mb-3">C. Gravitational Force</h3>
                    <p className="mb-4">The gravitational force, or the force of gravity, is the force of attraction between all objects in the universe. Gravity is by far the weakest of the four fundamental forces with the least relative strength. The force of gravity between two objects is noticeable only if at least one of the objects has a large mass such as stars, planets, and moons. It holds them together and controls their motions in the same way that it controls the motion of falling objects here on Earth. Gravitational force is theorized to be an exchange force with a massless mediating particle called the &apos;graviton&apos;. The massless nature of the graviton allows gravity to have an infinite range similar to the electromagnetic force. However, the graviton is the only exchange particle not yet detected.</p>

                    <h3 className="text-xl font-semibold text-blue-600 mb-3">D. Weak Nuclear Force</h3>
                    <p className="mb-4">The weak nuclear force is very weak, 10,000 times weaker than the strong nuclear force and has the shortest range of any of the fundamental forces. Despite this, the weak nuclear force plays a major role in the structure of the universe. It is an exchange force mediated by the exchange of three different particles called vector bosons. The weak nuclear force is responsible for radioactive decay. Specifically, the weak force changes the flavor (type) of an elementary particle called a quark. When this process occurs, a neutron in the nucleus transforms into a proton.</p>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-300">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-4 py-2 border-b text-left font-bold">Fundamental Force</th>
                                    <th className="px-4 py-2 border-b text-left font-bold">Range (metre)</th>
                                    <th className="px-4 py-2 border-b text-left font-bold">Relative strength</th>
                                    <th className="px-4 py-2 border-b text-left font-bold">Function</th>
                                    <th className="px-4 py-2 border-b text-left font-bold">Exchange Particles</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-4 py-2 border-b">Strong Force</td>
                                    <td className="px-4 py-2 border-b">10<sup>-15</sup> (diameter of proton)</td>
                                    <td className="px-4 py-2 border-b">1</td>
                                    <td className="px-4 py-2 border-b">Proton - Proton<br />Proton - Neutron</td>
                                    <td className="px-4 py-2 border-b">Pions (Π) or others</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="px-4 py-2 border-b">Electromagnetic Force</td>
                                    <td className="px-4 py-2 border-b">infinite</td>
                                    <td className="px-4 py-2 border-b">7.3 x 10<sup>-3</sup></td>
                                    <td className="px-4 py-2 border-b">Proton - Electron</td>
                                    <td className="px-4 py-2 border-b">Photons (massless)</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border-b">Weak Force</td>
                                    <td className="px-4 py-2 border-b">10<sup>-18</sup></td>
                                    <td className="px-4 py-2 border-b">10<sup>-13</sup></td>
                                    <td className="px-4 py-2 border-b">-</td>
                                    <td className="px-4 py-2 border-b">W<sup>+</sup>, W<sup>-
                                    </sup>, Z<sup>0</sup> (vector bosons)</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="px-4 py-2 border-b">Gravitational Force</td>
                                    <td className="px-4 py-2 border-b">infinite</td>
                                    <td className="px-4 py-2 border-b">6 x 10<sup>-39</sup></td>
                                    <td className="px-4 py-2 border-b">Mass - Mass</td>
                                    <td className="px-4 py-2 border-b">graviton (not yet detected)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="mb-4">For years, physicists have sought to show that the four basic forces are simply different manifestations of the same fundamental force. The most successful attempt at such a unification is the electroweak theory, proposed during the late 1960s by Abdus Salam (Pakistani physicist), Steven Weinberg, and Sheldon Lee Glashow.</p>

                    <p className="mb-4">This theory, which incorporates quantum electrodynamics (the quantum field theory of electromagnetism), treats the electromagnetic and weak forces as two aspects of a more-basic electroweak force that is transmitted by four carrier particles, the so-called gauge bosons.</p>

                    <p className="mb-4">One of these carrier particles is the photon of electromagnetism, while the other three—the electrically charged W and W particles and the neutral Z particle—are associated with the weak force. Unlike the photon, these weak gauge bosons are massive, and it is the mass of these carrier particles that severely limits the effective range of the weak force.</p>
                    <h2 className="text-2xl font-bold text-blue-700 mb-4">3.1.3 FORCE DIAGRAMS</h2>

                    <p className="mb-4">In order to study forces and their effects on the objects, we should familiarize ourselves with the skill of drawing force diagrams. Commonly, two types of force diagrams are used: &apos;system diagrams&apos; (SD) and &apos;free-body diagrams&apos; (FBD). A system diagram (SD) is a visual expression of all the objects involved. A free-body diagram (FBD) is a schematic representation in which only the object being analyzed is drawn, with arrows showing all the forces acting on the object. Figure 3.5 shows three examples of SDs and FBDs: the force vectors are drawn with their lengths proportional to the magnitudes of the forces; each force vector is labeled with the symbol &apos;F&apos;, with a subscript (for example, &apos;F<sub>g</sub>&apos; is the force of gravity, &apos;F<sub>n</sub>&apos; is the normal force, &apos;F<sub>f</sub>&apos; is friction, &apos;F<sub>t</sub>&apos; is tension, and &apos;F<sub>a</sub>&apos; is the applied force).</p>

                    <h2 className="text-2xl font-bold text-blue-700 mt-8 mb-4">3.1.4 CONCEPT OF NET FORCE</h2>

                    <p className="mb-4">Different forces can affect an object, and the net force is the total effect of all these forces. It is calculated by adding up all the forces acting on the object. The net force helps us determine if the forces on the object are balanced or unbalanced. If the net force is 0 N, it means the forces are balanced, and there will be no change in the object&apos;s motion.</p>

                    <p className="mb-4">For example, in a tug of war shown in figure 3.6 (a), if the forces &apos;F<sub>1</sub>&apos; and &apos;F<sub>2</sub>&apos; are equal in magnitude and opposite in direction, the forces cancel each other out, resulting in no net force. However, when the net force on an object is not 0 N, the forces are unbalanced and produce a change in motion of the object. For example, in the tug of war shown in figure 3.6 (b), if one force &apos;F<sub>1</sub>&apos; exceeds the other force &apos;F<sub>2</sub>&apos;, there is a net force &apos;F<sub>net</sub>&apos; to the right.</p>

                    <h2 className="text-2xl font-bold text-blue-700 mt-8 mb-4">FREE-BODY DIAGRAMS AND RESULTANT (NET) FORCES</h2>

                    <p className="mb-4">To study the effects of forces acting on any object, we can apply the skill of drawing force diagrams. Since force is a vector quantity, the vector sum of all the forces acting on an object is the resultant force. The resultant force can also be called the net force. These two terms can be used interchangeably and will be represented by the same symbol, &apos;F&apos;, in this text.</p>

                    <p className="mb-4">The net force or resultant force can be obtained by simply adding forces. A resultant force is a single force that has the same effect as the combined effect of all the forces to be added. Forces are vector quantities that require both magnitude and direction for a complete description. Therefore, we should draw the forces to a common scale as vectors (arrow diagrams). Simply add the magnitudes of vectors in the case of like parallel forces and subtract the magnitudes of vectors in the case of unlike parallel forces. Few examples are shown in figure 3.7.</p>

                    <p className="mb-4">However, we cannot make such algebraic addition of vectors when vectors are making certain angles. In such cases, we draw vectors on a coordinate axis and then, according to the same scale, we can add them by the head-to-tail rule of vector addition.</p>

                </div>
            </main>
        </>
    );
}
