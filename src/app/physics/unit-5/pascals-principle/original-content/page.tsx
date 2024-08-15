import React from 'react'

const PascalsPrinciplePage = () => {
    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">5.6 PASCAL&apos;S PRINCIPLE</h1>
            <p className="text-base">
                When we pump a bicycle tire, we apply a force on the pump that in turn exerts a force on the air inside the tyre. The air responds by pushing not only against the pump but also against the walls of the tyre. As a result, the pressure increases by an equal amount throughout the tyre as shown in
            </p>
            <p className="text-base">
                In general, if the pressure in a fluid is increased at any point in a container (such as at the valve of the tyre), the pressure increases at all points inside the container by exactly the same amount. Blaise Pascal (1623-1662) noted this fact, what is now called Pascal&apos;s principle (or Pascal&apos;s law): An external pressure applied to an enclosed fluid is transmitted unchanged to every point within the fluid.
            </p>
            <p className="text-base">
                The relationship between pressure and force on a surface is described by Pascal&apos;s Principle, which explain how pressure at a surface produces a force in a direction perpendicular (at right angles) to the surface.
            </p>
            <p className="text-base">
                Since pressure is transmitted equally in all directions, the force generated (F = PxA) is also distributed equally in all directions. The force acts perpendicular to the surface because the pressure is acting uniformly in all directions. If there were a component of force parallel to the surface, the object would exert force on the fluid parallel to it as a consequence of Newton&apos;s third law. This would result in an uneven distribution of forces, contradicting the principles of Pascal&apos;s Principle.
            </p>
            <p className="text-base">
                When you blow up a balloon, the pressure inside the balloon goes up. This pressure spreads out evenly in all directions. The force from the pressure pushes outward and goes straight across the surface of the balloon, making it get bigger as shown in figure 5.17 (a).
            </p>
            <p className="text-base">
                As you dive deeper underwater, the pressure increases due to the weight of the water above. The force exerted by this pressure is perpendicular to the surface of your body. This is why divers feel pressure on their ears, and it also explains why deep-sea divers need specialized suits to counteract the pressure as shown in figure 5.17 (b).
            </p>
            <h2 className="text-lg font-bold">5.6.1 HYDRAULIC LIFT</h2>
            <p className="text-base">
                Pascal&apos;s principle at work in hydraulic lift, which is shown schematically in Figure 5.18. Here we see two cylinders, one of cross-sectional area A₁, and the other of cross-sectional area A₂ (such that A₁ ≠ A₂). The cylinders, each of which is fitted with a piston, are connected by a tube and filled with a hydraulic fluid. Initially the pistons are at the same level and exposed to the atmosphere. Now, suppose we push down on piston 1 with the force F₁. The pressure P₁ exerted by this piston is:
            </p>
            <p className="text-base font-bold">P₁ = F₁ / A₁</p>
            <p className="text-base">
                Simliarty, the pressure on the piston lifting vehicle is P₂, which can be written as
            </p>
            <p className="text-base font-bold">P₂ = F₂ / A₂</p>
            <p className="text-base">
                By Pascal&apos;s principle
            </p>
            <p className="text-base font-bold">P₁ = P₂</p>
            <p className="text-base">
                Putting values from equation 1 and equation 2 in equation 3 and rearranging for F₂, we get
            </p>
            <p className="text-base font-bold">F₂ = F₁ * (A₂ / A₁)</p>
            <p className="text-base">
                Equation 5.5 shows that depending on the ratio A₂/A₁, the force F₂ can be as large as possible. To be specific, let&apos;s assume that A₂ is 100 times greater than A₁. Then, by pushing down on piston 1 with a force F₁, we push upward on piston 2 with a force of F₂ = 100 * F₁. Our force has been magnified 100 times! Hence a relatively small effort can be used to overcome a much larger load.
            </p>
            <h2 className="text-lg font-bold">5.6.2 HYDRAULIC CAR BRAKE SYSTEM</h2>
            <p className="text-base">
                The operation of hydraulic car brake system as shown in figure 5.20 is based on Pascal&apos;s principle, in the brake system:
            </p>
            <ul className="list-disc list-inside text-base">
                <li><strong>Brake Pedal (Force Input):</strong> When we press the brake pedal, it exerts force on the master cylinder&apos;s piston.</li>
                <li><strong>Master Cylinder (Pressure Increase):</strong> The force on the piston increases the pressure in the brake fluid.</li>
                <li><strong>Brake Lines (Pressure Transmission):</strong> The increased pressure is transmitted equally through the brake fluid in the brake lines to all wheels.</li>
                <li><strong>Brake Calipers or Wheel Cylinders (Force Application):</strong> At each wheel, the pressure acts on brake calipers or wheel cylinders, applying force to brake pads.</li>
            </ul>
            <h2 className="text-lg font-bold">EXAMPLE 7.4: PASCAL&apos;S PRINCIPLE</h2>
            <p className="text-base">
                A hydraulic lift has 0.002 m² narrow cylinder area while 0.9 m² wider cylinder area. How much force must be applied at the narrow cylinder if a car weighing 1800 kg is to be lifted?
            </p>
            <p className="text-base"><strong>GIVEN</strong></p>
            <ul className="list-disc list-inside text-base">
                <li>Area of narrow cylinder A₁ = 0.002 m²</li>
                <li>Area of wider cylinder A₂ = 0.9 m²</li>
                <li>Mass of car m = 1800 kg</li>
            </ul>
            <p className="text-base"><strong>REQUIRED</strong></p>
            <ul className="list-disc list-inside text-base">
                <li>Force at narrow cylinder F₁ = ?</li>
            </ul>
            <p className="text-base"><strong>SOLUTION:</strong> First we will find weight of the car as this will be the force applied on car:</p>
            <p className="text-base font-bold">w = mg = 1800 kg x 9.8 m/s² = 17,640 N</p>
            <p className="text-base">
                From Pascal&apos;s principle
            </p>
            <p className="text-base font-bold">F₁ / A₁ = F₂ / A₂</p>
            <p className="text-base">
                Putting values F₂ = 17,640 N, A₁ = 0.002 m², A₂ = 0.9 m²
            </p>
            <p className="text-base font-bold">
                F₁ = 17,640 N * (0.002 m² / 0.9 m²) = 39.2 N
            </p>
            <p className="text-base">
                Answer: That is why we use hydraulic lifts to lift heavy weights with much smaller force than their weight.
            </p>
        </div>
    )
}

export default PascalsPrinciplePage
