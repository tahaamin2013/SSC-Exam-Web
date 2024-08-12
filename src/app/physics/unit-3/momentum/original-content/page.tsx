import React from "react"

const page = () => {
  return (
    <div className="max-w-4xl mx-auto"> <h2 className="text-2xl font-bold text-blue-700 mb-4">Momentum and Impulse</h2>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">3.5 Momentum</h3>
      <p className="mb-4">The product of an object&apos;s mass &apos;m&apos; and velocity is called momentum, denoted by &apos;P&apos;. Mathematically:</p>
      <pre className="bg-gray-200 p-4 rounded mb-4">
        p = mv
      </pre>
      <p className="mb-4">Momentum is a vector quantity that points in the same direction as the velocity. The SI unit of momentum is kilogram-meter per second (kg·m/s) or newton-second (Ns). Newton&apos;s second law relates force and momentum.</p>

      <h4 className="font-bold text-gray-700 mb-2">Example 3.4: Golf Ball Momentum</h4>
      <p className="mb-4">A golfer hits a ball having a mass of 45 g. If after the shot, the ball travels with a speed of 80 m/s, what magnitude of momentum does the golfer impart to the ball?</p>

      <h4 className="font-bold text-gray-700 mb-2">Given:</h4>
      <ul className="list-disc list-inside mb-4">
        <li>Mass of ball &apos;m&apos; = 45 g = 0.045 kg</li>
        <li>Velocity of ball &apos;v&apos; = 80 m/s</li>
      </ul>

      <h4 className="font-bold text-gray-700 mb-2">Required:</h4>
      <p className="mb-4">Momentum of ball &apos;P&apos; = ?</p>

      <h4 className="font-bold text-gray-700 mb-2">Solution:</h4>
      <p className="mb-4">From the mathematical form of linear momentum:</p>
      <pre className="bg-gray-200 p-4 rounded mb-4">
        p = mv
      </pre>
      <p className="mb-4">For magnitude, ignoring the vector signs:</p>
      <pre className="bg-gray-200 p-4 rounded mb-4">
        p = 0.045 kg × 80 m/s
        = 3.6 kg·m/s
      </pre>
      <p className="mb-4">In order to increase the speed of the ball, the golfer needs to impart a greater momentum to the ball.</p>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">3.5.1 Force and Change in Momentum</h3>
      <p className="mb-4">A force &apos;F&apos; produces acceleration &apos;a&apos; in a body of mass &apos;m&apos;. By Newton&apos;s second law of motion, it is written as:</p>
      <pre className="bg-gray-200 p-4 rounded mb-4">
        F = ma
      </pre>
      <p className="mb-4">The acceleration produced changes the velocity of the body from initial velocity &apos;v&apos; to final velocity &apos;v&apos; during time interval &apos;Δt&apos;. Then by definition of acceleration:</p>
      <pre className="bg-gray-200 p-4 rounded mb-4">
        a = Δv / Δt
      </pre>
      <p className="mb-4">Putting equation into equation 1:</p>
      <pre className="bg-gray-200 p-4 rounded mb-4">
        F = m × Δv / Δt
        = Δp / Δt
      </pre>
      <p className="mb-4">The time rate of change of linear momentum of a body is equal to the net force acting on the body. This means that for a sudden change in momentum, force is large and vice versa.</p>

      <p className="mb-4">For example, catching a ball with your bare hands will hurt depending on the force of the ball. However, if you allow your hands to move with the ball as you catch it, the duration of time &apos;Δt&apos; will increase, and the force will be smaller, and your hands will hurt less.</p>

      <h4 className="font-bold text-gray-700 mb-2">Example 3.5: Force Required to Stop a Truck and Car</h4>
      <p className="mb-4">What is difficult to stop if their brakes fail and they are traveling from an inclined road:</p>
      <ul className="list-disc list-inside mb-4">
        <li>(a) A car of mass 1200 kg moving with a velocity of 8 m/s in 5 seconds</li>
        <li>(b) A truck of mass 10,000 kg moving with the same velocity in the same time</li>
      </ul>

      <h4 className="font-bold text-gray-700 mb-2">Given:</h4>
      <ul className="list-disc list-inside mb-4">
        <li>Mass of car m = 1200 kg</li>
        <li>Mass of truck m₁ = 10,000 kg</li>
        <li>Initial Velocity v₀ = 8 m/s</li>
        <li>Change in time Δt = 5 s</li>
        <li>Final Velocity v = 0 m/s (As both car and truck have to stop finally)</li>
      </ul>

      <h4 className="font-bold text-gray-700 mb-2">Required:</h4>
      <ul className="list-disc list-inside mb-4">
        <li>(a) Average force required to stop car F = ?</li>
        <li>(b) Average force required to stop truck F₁ = ?</li>
      </ul>

      <h4 className="font-bold text-gray-700 mb-2">Solution:</h4>
      <p className="mb-4">From the relation between force and momentum:</p>
      <pre className="bg-gray-200 p-4 rounded mb-4">
        F = Δp / Δt
      </pre>
      <p className="mb-4">Putting values in equation for car:</p>
      <pre className="bg-gray-200 p-4 rounded mb-4">
        F = (1200 kg × 0 m/s - 1200 kg × 8 m/s) / 5 s
        = -1920 N
      </pre>
      <p className="mb-4">Answer: The negative sign shows that force is applied opposite to the direction of motion (velocity).</p>

      <p className="mb-4">For truck:</p>
      <pre className="bg-gray-200 p-4 rounded mb-4">
        F₁ = (10,000 kg × 0 m/s - 10,000 kg × 8 m/s) / 5 s
        = -16,000 N
      </pre>
      <p className="mb-4">Answer: The negative sign shows that force is applied opposite to the direction of motion (velocity).</p>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">3.5.2 Impulse and Change in Momentum</h3>
      <p className="mb-4">Newton&apos;s second law enables us to write the force and change in momentum relation as:</p>
      <pre className="bg-gray-200 p-4 rounded mb-4">
        F × Δt = Δp
      </pre>
      <p className="mb-4">Equation 3.6 enables us to define a new quantity termed as &apos;impulse&apos;. Impulse is the product of the force exerted on an object and the time interval over which the force acts, and is often given the symbol &apos;J&apos;. Impulse is a vector quantity, and the direction of the impulse is the same as the direction of the force that causes it, and has the same SI units as momentum.</p>

      <p className="mb-4">In many situations, the net force on the object is not constant, and the force applied to an object changes non-linearly during its time of application. The equation 3.8 still applies, provided the net force &apos;F&apos; is equal to the average force acting on the object over the time interval Δt.</p>

      <p className="mb-4">For example, when a batter hits a cricket ball, initially the force is very small. Within milliseconds, the force is large enough to deform the ball. The ball then begins to move by returning to its original shape and the force soon drops back to zero. The graph in figure 3.19 shows how the force changes with time. We can find the impulse by calculating the area under the curve in the force versus time graph.</p>

      <p className="mb-4">In many collisions, it is difficult to make precise measurements of force and time needed to calculate the impulse. The relationship between impulse and momentum provides an alternative approach to analyzing such collisions, as well as other interactions. By analyzing the momentum before and after an interaction between two objects, we can determine the impulse.</p>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">Science Tidbits</h3>
      <p className="mb-4">A group of bodies or particles, under study, separated by a boundary is called a system.</p>
      <p className="mb-4">If the net external force on the system is zero, it is termed an isolated system. An isolated system is a collection of bodies that can interact with each other but whose interactions with the environment have no effect on their properties.</p>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">3.5.3 Newton&apos;s Laws and Conservation of Momentum</h3>
      <p className="mb-4">For an isolated system, there is no net force acting (&apos;F = 0&apos;), therefore Newton&apos;s second law in terms of momentum (equation 3.8) can be written as:</p>
      <pre className="bg-gray-200 p-4 rounded mb-4">
        ΔP = 0
      </pre>
      <p className="mb-4">In the absence of external force (isolated system), the final momentum &apos;P&apos; of the system must be equal to the initial momentum &apos;P&apos;. If no net external force acts on a system of particles, the total momentum of the system cannot change. This enables us to write the law of conservation of momentum, which states:</p>
      <pre className="bg-gray-200 p-4 rounded mb-4">
        The momentum of an isolated system remains constant.
      </pre>

      <p className="mb-4">Consider an isolated system of a bullet of mass &apos;m&apos; and a gun of mass &apos;M&apos;. Before firing, the total initial momentum (&apos;P₀&apos;) of the system is zero:</p>
      <pre className="bg-gray-200 p-4 rounded mb-4">
        P₀ = 0
      </pre>
      <p className="mb-4">After firing, the bullet moves with velocity &apos;v&apos; in one direction and the rifle recoils with velocity &apos;V&apos; in the other direction, such that the total final momentum (&apos;P&apos;) is again zero:</p>
      <pre className="bg-gray-200 p-4 rounded mb-4">
        P = 0
      </pre>
      <p className="mb-4">By conservation of momentum:</p>
      <pre className="bg-gray-200 p-4 rounded mb-4">
        mv + MV = 0
      </pre>
      <p className="mb-4">Therefore:</p>
      <pre className="bg-gray-200 p-4 rounded mb-4">
        V = - (m × v) / M
      </pre>
      <p className="mb-4">The negative sign indicates that the velocity of the gun is opposite to the velocity of the bullet, i.e., the gun recoils. Since the mass of the gun is much larger than the bullet, the recoil is much smaller than the velocity of the bullet.</p>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">Point to Ponder</h3>
      <p className="mb-4">How do rockets accelerate in space as there is no air in space to push against? In rockets, hot gases produced by burning fuel rush out with large momentum. The rockets gain an equal and opposite momentum, thereby causing them to accelerate.</p>

      <h4 className="font-bold text-gray-700 mb-2">Example 3.6: Rifle Recoil</h4>
      <p className="mb-4">Ahmad fired a bullet of mass 17 g from his hunting gun of mass 3 kg. If the velocity of the bullet was 350 m/s, what would be the recoil velocity of the air gun?</p>

      <h4 className="font-bold text-gray-700 mb-2">Given:</h4>
      <ul className="list-disc list-inside mb-4">
        <li>Mass of Rifle m = 3 kg</li>
        <li>Mass of bullet m₁ = 17 g = 0.017 kg</li>
        <li>Velocity of bullet after firing v₂ = 350 m/s</li>
      </ul>

      <h4 className="font-bold text-gray-700 mb-2">Required:</h4>
      <p className="mb-4">Velocity of Rifle after firing (Recoil speed) v = ?</p>

      <h4 className="font-bold text-gray-700 mb-2">Solution:</h4>
      <p className="mb-4">By the law of conservation of momentum, the final momentum must be zero, therefore:</p>
      <pre className="bg-gray-200 p-4 rounded mb-4">
        m × V + m₁ × v₂ = 0
      </pre>
      <p className="mb-4">Hence:</p>
      <pre className="bg-gray-200 p-4 rounded mb-4">
        V = - (m₁ × v₂) / m
        = - (0.017 kg × 350 m/s) / 3 kg
        = - 1.98 m/s
      </pre>
      <p className="mb-4">The negative sign indicates the direction is opposite to that of the bullet&apos;s velocity. The gun will move in the opposite direction but with a smaller velocity compared to the bullet because of its greater mass than the bullet.</p>
    </div>
  )
}

export default page