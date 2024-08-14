import React from 'react';

const FrictionPage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">4.6 FRICTION</h1>
            <p className="mb-4">
                Friction (denoted by letter &apos;f&apos;) is the resistance to relative motion that occurs whenever
                two materials are in contact with each other, whether they are solids, liquids, or gases.
                Since it is a force therefore it is a vector quantity and has unit as newton (N).
            </p>
            <p className="mb-4">
                Friction always acts in a direction to oppose motion. If you push a solid block along a
                floor to the right, the force of friction on the block will be to the left. When an object
                falls downward through the air, the force of friction, air resistance, acts upward.
            </p>
            <h2 className="text-xl font-semibold mb-4">4.6.1 Microscopic description of friction</h2>
            <p className="mb-4">
                Every surface is rough, even surfaces that appear to be highly polished can actually look
                quite rough when examined under a microscope as shown in figure 4.15. There is no such
                thing as a perfectly flat surface. As a result the two surfaces that are touching are not
                really touching across the entire area that appears to be touching.
            </p>
            <p className="mb-4">Thus roughness of both surfaces interlock which makes friction.</p>
            <p className="mb-4">
                Slidling friction is the resistance created by any two objects when sliding against each
                other. It is the sliding friction between the brake pads and our bike rims, that slows the
                rolling wheels so we can stop our bike in time.
            </p>
            <p className="mb-4">
                Rim brakes, are the most effective and most popular bicycle brakes, as they provide
                adequate braking power without too much malintenance. They are controlled by hand lewer&apos;s
                which are attached to the actual brake by a cable. When the rider pulls on the brake lever
                the cable attached to it moves the two pads, ome on each side of rim. These pads attached
                to break leather press against the rim, causing the wheel to slow down due to friction as
                shown in figure 4.16.
            </p>
            <h2 className="text-xl font-semibold mb-4">4.6.2 ADVANTAGES AND DISADVANTAGES OF FRICTION</h2>
            <p className="mb-4">
                Friction is required in many situations, for example
                <ul className="list-disc ml-8">
                    <li>Friction between the soles of our shoes (or feet) and the ground help us walk.</li>
                    <li>Friction between tyre and road helps to drive cars.</li>
                    <li>Friction holds the screw and nails in wood.</li>
                </ul>
            </p>
            <p className="mb-4">
                Friction can sometime be a hindrance, for example
                <ul className="list-disc ml-8">
                    <li>It slows down moving objects and causes heating of moving parts in machinery.</li>
                    <li>Energy is wasted to overcome friction in machinery.</li>
                    <li>Produce wear and tear.</li>
                </ul>
            </p>
            <h2 className="text-xl font-semibold mb-4">4.6.3 METHODS OF REDUCING FRICTION</h2>
            <p className="mb-4">
                There are many ways to reduce unwanted friction, few are discussed below.
                <ul className="list-disc ml-8">
                    <li>By polishing: If we polish the rough surfaces, they become smooth and friction is reduced.</li>
                    <li>By using Ball Bearing: This method converts the sliding friction is converted into rolling friction by use of ball bearings.</li>
                    <li>By applying Lubricants (oil or Grease) to surfaces: Friction of certain liquids is less than that of solid surfaces, therefore, oil or grease is applied between the parts of machinery.</li>
                </ul>
            </p>
            <h2 className="text-xl font-semibold mb-4">4.6.4 ROLLING FRICTION</h2>
            <p className="mb-4">
                If we set a heavy spherical ball, ring or cylinder rolling, it experiences an opposing
                force callled rolling friction. When a body rolls over a surface, the force of friction is
                called rolling friction, For the same weight, rolling friction is much smaller (even by 2
                or 3 orders of magnitude) than static or sliding friction.
            </p>
            <p className="mb-4">
                This is the reason why discovery of the wheel has been a major milestone in human history.
                It is rolling friction that helps a heavy deep freezer with wheels to easily move as shown
                in figure 4.18.
            </p>
            <h2 className="text-xl font-semibold mb-4">4.6.5 FLUID FRICTION</h2>
            <p className="mb-4">
                A fluid is a collection of molecules that are held together by weak cohesive forces and the
                forces exerted by the walls of container. Both liquids and gases are fluids as they can flow
                and can exert force on the walls of their container.
            </p>
            <p className="mb-4">
                When an object moves through a fluid, the fluid exerts a retarding force that tends to reduce
                the speed of the object. The moving body exerts a force on the fluid to push it out of the way.
                By Newton&apos;s third law, the fluid pushes back on the body with an equal and opposite force.
                This retarding force experienced by an object moving through a fluid is called the drag force,
                which is the result of fluid friction.
            </p>
            <h2 className="text-xl font-semibold mb-4">4.6.6 FRICTIONAL DISSIPATION</h2>
            <p className="mb-4">
                Dissipative force decreases the mechanical energy in a system. Dissipative forces acting on
                an object always oppose the motion of the object, For example in case of the sky diver, when
                the parachute opened some energy is dissipated into the air thereby increasing its temperature.
                The sky diver safety depends on air resistance as a dissipative force.
            </p>
            <p className="mb-4">
                In winter when we rub our hands together we feel the sensation of warmth as shown in figure
                4.21 (a). It is because friction causes the increase in the temperature our hands, which makes
                our hands warm. Similarly you would have noticed shooting stars (a small piece of rock or dust
                that hits Earth&apos;s atmosphere from space) as shown in figure 4.21 (b). When they plow through
                the atmosphere, meteors are heated, and they glow. A meteor compresses air in front of it. The
                air heats up, in turn heating the meteor. The intense heat vaporizes most meteors, creating
                what we call shooting stars.
            </p>
        </div>
    );
};

export default FrictionPage;
