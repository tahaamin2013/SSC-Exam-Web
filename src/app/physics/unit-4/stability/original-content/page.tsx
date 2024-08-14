// pages/stability.tsx
import { FC } from 'react';

const Stability: FC = () => {
    return (
        <div className="p-8 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">4.5 STABILITY</h1>
            <p className="mb-4">
                &apos;A measure of the ability of an object to return to its original position when the force that changed its position is removed is called stability&apos;. Stable objects are very difficult to topple over, while unstable objects topple over very easily.
            </p>
            <p className="mb-4">
                The position of the Center of gravity or center of mass (CG/CM) of a body affects whether or not it topples over easily. This is important in the design of such things as tall vehicles (which tend to overturn when rounding a corner), racing cars, reading lamps and even drinking glasses.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4.5.1 STABLE EQUILIBRIUM</h2>
            <p className="mb-4">
                A body is in stable equilibrium if when slightly tilt and after releasing it returns to its original position. Its centre of mass rises when it is displaced. It regain its position back because its weight has a moment of force about the point of contact that acts to reduce the displacement. For example consider a book lying on the table. Tilt the book slightly about its one edge by lifting it from the opposite side. It returns to its previous position when sets free. Such a state of the body is called a stable equilibrium.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4.5.2 UNSTABLE EQUILIBRIUM</h2>
            <p className="mb-4">
                A body is in unstable equilibrium if it moves further away from its previous position when slightly displaced and released. Its centre of mass falls when it is displaced, because there is a moment which increases the displacement. For example take a pencil and try to keep it in the vertical position on its tip. Whenever you leave it, the pencil topples over about its tip and falls down. This is called an unstable equilibrium.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4.5.3 NEUTRAL EQUILIBRIUM</h2>
            <p className="mb-4">
                A body is in neutral equilibrium if it stays in its new position when displaced. Its center of mass does not rise or fall because there is no moment to increase or decrease the displacement. For example, take a ball and place it on a horizontal surface. Roll the ball over the surface and leave it after displacing from its previous position. It remains in its new position and does not return to its previous position. This is called a neutral equilibrium.
            </p>
            <p className="mb-4">
                The illustrations in figure 4.12 show the three states of equilibrium for the cone and ball and bowl.
            </p>

            <p className="mb-4">
                An object&apos;s stability can be improved by:
                <br />(a) lowering the center of mass; or
                <br />(b) increasing the area of support; or
                <br />(c) by both.
            </p>
            <p className="mb-4">
                When the object&apos;s center of mass is directly beneath the point of support, it is in a stable equilibrium state. The center of mass represents the average position of the mass distribution within the object. In simple terms, &quot;vertically below&quot; means that the center of mass is aligned vertically beneath the point of support.
            </p>
            <p className="mb-4">
                When an object is in stable equilibrium, it means that if it is slightly disturbed or tilted, it has a tendency to return to its original position. This is because the gravitational force acting on the object causes it to rotate around the point of support, and the object&apos;s weight acts through its center of mass. As a result, the object naturally realigns itself to maintain its stable equilibrium state.
            </p>
            <p className="mb-4">
                Various toys and equipment use the principle of stable equilibrium to regain their balance after being disturbed. These objects are often called &quot;self-righting&quot; or &quot;self-balancing&quot; toys. They are designed with their center of mass below the support point and have a specific weight distribution that helps them restore their original position. These objects might include balancing birds, wobbling dolls, or weighted-bottom drinking cups, all of which exhibit the stable equilibrium principle as shown in figure 4.13.
            </p>
            <p className="mb-4">
                Once such toy is of shape of an egg, when it is tilted, the position of the pivot changes because of its round bottom. In figure 14.14 (a), when tilted to the left, the weight &apos;W&apos; from the center of gravity (CG) is to the right of the pivot with moment arm (perpendicular distance) &apos;d&apos;. This creates a clockwise moment that makes the toy turn clockwise. Due to inertia, the toy will go past the vertical position and tilt to the right, as shown in figure 14.14 (b). Similarly, since the weight is to the left of the pivot, it creates an anti-clockwise moment.
            </p>
            <p className="mb-4">
                Therefore, this toy always has a restoring mechanism that brings it back to its vertical position, where the weight is directly above the pivot. In this position, the weight passing through the pivot does not create any moment (no perpendicular distance). Hence, the toy will be at rest.
            </p>
        </div>
    );
};

export default Stability;
