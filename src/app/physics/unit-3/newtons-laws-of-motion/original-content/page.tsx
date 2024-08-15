import React from "react"

const page = () => {
  return (
    <div className="max-w-4xl my-4 mx-auto"> <h2 className="text-2xl font-bold text-blue-700 mb-4">3.2 NEWTON&apos;S LAWS OF MOTION</h2>

      <p className="mb-4">In 1686, English Scientist Sir Isaac Newton (1642-1727) presented his three laws of motion in his book <i>Philosophiæ Naturalis Principia Mathematica</i> (English: <i>Principles of Natural Mathematics</i>) as shown in Figure 3.8. This book is considered one of the greatest scientific works ever written.</p>

      <div className="bg-white shadow-md rounded-lg p-6 mt-4">
        <h3 className="text-xl font-semibold text-blue-600 mb-2">PHILOSOPHIÆ NATURALIS PRINCIPIA MATHEMATICA</h3>
        <p className="text-gray-700">IMPRIMATUR</p>
      </div>
      <h2 className="text-2xl font-bold text-blue-700 mb-4">3.2.1 NEWTON&apos;S FIRST LAW OF MOTION</h2>

      <p className="mb-4">In a soccer game, players kick the ball to each other. When a player kicks the ball, the kick is an unbalanced force. It sends the ball in a new direction with a new speed. What keeps the ball moving? To answer this, we need to look into the statement of Newton&apos;s First Law of Motion.</p>

      <p className="mb-4">If no external force is acting on an object, the object will maintain its state of rest or uniform motion (constant velocity). This means that in the absence of an external net force, an object at rest will remain at rest, while an object in motion will continue to move with constant velocity (no change in velocity or no acceleration). Mathematically:</p>

      <p className="bg-blue-100 text-blue-800 p-4 rounded-lg mb-4">
        F = 0 <br />
        then ΔV = 0 <br />
        0 = 0
      </p>

      <h3 className="text-xl font-semibold text-blue-600 mt-8 mb-2">SCIENCE TIDBITS</h3>

      <p className="mb-4">An external force is an applied force on the object or system. There are also internal forces. For example, suppose the object is a train and you are a passenger traveling inside it. You can push (apply a force) on the floor or the walls of the cabin, but this has no effect on the train&apos;s velocity because your push is an internal force.</p>

      <p className="mb-4">This means that an object in motion would continue to move in a straight line forever. However, on Earth, it is difficult to observe an object in a state of uniform motion due to the presence of forces (like gravity and friction) which continually retard the motion of the objects. But in free space, where there is no friction and negligible gravitational attraction, an object initially in motion maintains a constant velocity.</p>

      <p className="mb-4">An object can continue to move when the unbalanced forces are removed. For example, when a soccer ball is kicked, it experiences an unbalanced force. The ball keeps rolling on the ground until another unbalanced force alters its movement as shown in Figure 3.9.</p>

      <h3 className="text-xl font-semibold text-blue-600 mt-8 mb-4">POINT PONDER</h3>

      <p className="mb-4">Why is it more difficult to push a large man on a swing compared to a small child? There is a difference in the resistance to a change in motion between the man and the child. Also, when you try to stop their motions, you would again notice a difference in the resistance to a change in motion. The large man has more inertia due to more mass.</p>

      <p className="mb-4">Newton&apos;s First Law of Motion specifies that there is a natural tendency of an object to remain in a state of rest or in uniform motion in a straight line, which is termed as inertia. Do all objects have equal tendency to resist their state of rest or uniform motion? Absolutely not. An object with more mass (the measure of the amount of matter in a body) has greater resistance to change (inertia), which is why it is difficult to move massive objects. Mass is a quantity that is dependent on inertia: the greater the mass of an object, the greater its inertia, and vice versa.</p>

      <p className="mb-4">Newton&apos;s First Law of Motion is applied when we ride standing in the aisle of a bus holding a pole as shown in Figure 3.10 (a). As the bus begins to move, we tend to remain at rest, and therefore we feel a push to the back (as our lower body starts moving with the bus, but the upper part of the body maintains the state of inertia). The same principle is again at work when the bus starts to slow down or stops; we feel like moving forward due to inertia as shown in Figure 3.10 (b).</p>

      <p className="mb-4">As the bus starts moving with uniform speed, if we hold on to the pole, it supplies the forces needed to give us the same motion as the bus, and we no longer feel pushed. But when the bus goes around a curve, we again feel a tendency to move to the side of the bus. The bus has changed its straight-line motion, but we tend to move straight ahead. The same principle is again at work when the bus starts to slow down or stops; we feel like moving forward as shown in Figure 3.11. Thus, the forces we feel when the bus starts moving, speeds up, slows down, or turns around a corner are a result of our tendency to remain at rest or follow a straight path.</p>
      <h2 className="text-2xl font-bold text-blue-700 mb-4">3.2.2 NEWTON&apos;S SECOND LAW OF MOTION</h2>

      <p className="mb-4">What causes acceleration (change in velocity)? We can get this answer from Newton&apos;s First Law of Motion as &apos;external, unbalanced net force is required to produce a change in velocity&apos;. Newton went further and related acceleration to inertia (or mass), stating that it tends to reduce this acceleration.</p>

      <p className="mb-4">The acceleration produced by a net force acting on an object (or mass) is directly proportional to the magnitude of the force (<span className="font-bold">a ∝ F</span>) and in the direction of the force (the symbol is a proportionality sign). In other words, the greater the unbalanced net force, the greater the acceleration.</p>

      <p className="mb-4">The acceleration of an object being acted on by a net force is inversely proportional to the mass of the object (<span className="font-bold">a ∝ 1/m</span>). That is, for a given unbalanced net force, the greater the mass of an object, the smaller the acceleration.</p>

      <p className="mb-4">Combining these effects of net force and mass on acceleration gives:</p>
      <p className="mb-4 text-center font-bold">acceleration = <span className="font-mono">net force / mass</span></p>

      <p className="mb-4">Using appropriate units we can write this as:</p>
      <p className="mb-4 text-center font-bold">F = ma</p>

      <p className="mb-4">This is Newton&apos;s Second Law of Motion, which can be formally stated as: The acceleration of an object as produced by a net force is directly proportional to the magnitude of the net force, in the same direction as the net force, and inversely proportional to the mass of the object.</p>

      <p className="mb-4">As an example, consider Figure 3.12 (a). If mass <span className="font-bold">m</span> is the mass of the system, when net force acts it produces an acceleration <span className="font-bold">a</span>. In Figure 3.12 (b), if the force is doubled while keeping the mass the same, the acceleration also doubles. In Figure 3.12 (c), if the mass is doubled while the force is kept the same, the acceleration is halved.</p>

      <p className="mb-4">Newton&apos;s Second Law of Motion also enables us to define the System International (SI) unit of force, which is the newton (symbol: <span className="font-bold">N</span>).</p>

      <h2 className="text-2xl font-bold text-blue-700 mb-4">Newton&apos;s Second Law of Motion</h2>

      <p className="mb-4">One newton is defined as the force that produces an acceleration of one meter per second squared (<span className="font-bold">a = 1 m/s²</span>) in a body of mass one kilogram (<span className="font-bold">1 kg</span>).</p>
      <p className="mb-4 text-center font-mono font-bold">1 N = 1 kg × 1 m/s² or N = kg·m/s²</p>

      <h3 className="text-xl font-semibold text-blue-600 mt-8 mb-4">EXAMPLE 3.1: BUS AND CAR ACCELERATIONS</h3>

      <p className="mb-4">If the same engine is installed in a bus and a car that applies a force of <span className="font-bold">3000 N</span>, what acceleration will this engine produce in a bus of mass <span className="font-bold">12,000 kg</span> and a car of mass <span className="font-bold">1,200 kg</span>?</p>

      <p className="font-bold mb-2">GIVEN:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Mass of bus <span className="font-bold">m = 12,000 kg</span></li>
        <li>Acceleration in bus <span className="font-bold">a₁ = ?</span></li>
        <li>Mass of car <span className="font-bold">m = 1,200 kg</span></li>
        <li>Acceleration in car <span className="font-bold">a₂ = ?</span></li>
        <li>Force <span className="font-bold">F = 3000 N</span></li>
      </ul>

      <p className="font-bold mb-2">SOLUTION:</p>
      <p className="mb-4">From Newton&apos;s Second Law of Motion: <span className="font-mono">F = ma</span></p>

      <p className="mb-4"><span className="font-bold">For the bus:</span> <br />
        Acceleration <span className="font-mono">a₁ = F / m</span> <br />
        Putting values: <span className="font-mono">a₁ = 3000 N / 12,000 kg</span> <br />
        Therefore, <span className="font-mono">a₁ = 0.25 m/s²</span></p>

      <p className="mb-4"><span className="font-bold">For the car:</span> <br />
        Acceleration <span className="font-mono">a₂ = F / m</span> <br />
        Putting values: <span className="font-mono">a₂ = 3000 N / 1,200 kg</span> <br />
        Therefore, <span className="font-mono">a₂ = 2.5 m/s²</span></p>

      <h2 className="text-2xl font-bold text-blue-700 mt-8 mb-4">3.2.3 NEWTON&apos;S THIRD LAW OF MOTION</h2>

      <p className="mb-4">When we press a stone with our finger, the finger is also pressed upon by the stone. The reason is given by Newton&apos;s Third Law of Motion, which can be stated as: Whenever one object exerts a force on a second object, the second object exerts an equal and opposite force on the first object.</p>

      <p className="mb-4">When an object <span className="font-bold">A</span> exerts a force on object <span className="font-bold">B</span>, written as <span className="font-mono">F</span>, object <span className="font-bold">B</span> also exerts an equal force on object <span className="font-bold">A</span>, written as <span className="font-mono">-F</span>, but in the opposite direction:</p>
      <p className="mb-4 text-center font-mono font-bold">F = -F</p>

      <p className="mb-4">Here the negative sign shows that force <span className="font-mono">F</span> is opposite to force <span className="font-mono">F</span>.</p>

      <h2 className="text-2xl font-bold text-blue-700 mb-4">Newton&apos;s Third Law of Motion</h2>

      <p className="mb-4">These two forces are termed as action-reaction pairs. Action and reaction cannot cancel each other because they act on different bodies (action on one body and reaction on another body). When we kick a football, the foot exerts the action force <span className="font-mono">F₁</span> on the football, and as a reaction, the football exerts an equal and opposite force <span className="font-mono">F₂</span> on our foot. Both these forces are equal in magnitude and opposite in direction.</p>

      <p className="mb-4">Examples of Newton&apos;s Third Law of Motion are present everywhere because when we talk of force, we also consider its reaction.</p>

      <p className="mb-4">For example, when we jump, our legs apply a force to the ground, and the ground applies an equal and opposite reaction force that pushes us into the air. When we punch an object or kick something as an action, we also experience a force on our hands or legs as a reaction force. That is why we feel pain when punching a wall or falling on the ground. The exhaust from the rocket creates a downward force, which in turn creates an equal and opposite thrust in the upward direction. Applying Newton&apos;s Third Law of Motion allows us to explore two important forces: normal force and tension force.</p>

      <h2 className="text-2xl font-bold text-blue-700 mb-4">Limitations of Newton&apos;s Laws of Motion</h2>

      <p className="mb-4">Although Newton&apos;s laws of motion are a fundamental set of principles and are applied in a variety of situations, there are some limitations to their applicability. While they are very useful for describing the behavior of everyday objects, there are some constraints:</p>

      <ul className="list-disc list-inside mb-4">
        <li className="mb-2">Newton&apos;s laws are not readily applied on the very small scale: As one goes to extremely low energies on the atomic scale, position and acceleration are not well defined, and the concepts of quantum mechanics take over.</li>
        <li className="mb-2">Newton&apos;s laws are not applied for objects moving at high speeds (speeds close to the speed of light). Relativistic effects complicate the dynamics at high speeds and high energies. In such situations, relativistic mechanics is required.</li>
      </ul>

      <p className="mb-4">However, Newton&apos;s laws are not exact but provide a good approximation on the large (macroscopic) scale and over a vast range of practical energies and forces. They still work spectacularly well in physics and engineering.</p>


    </div>

  )
}

export default page