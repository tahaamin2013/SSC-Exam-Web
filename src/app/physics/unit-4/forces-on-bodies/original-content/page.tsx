import React from 'react'

const Page = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Dynamics-II</h1>
            <p className="mb-4">
                In Dynamics I, we learnt about the force and Newton&apos;s laws of motion. Here in Dynamics II, we wil study different effects of force on a body including its resistive nature, turning effect and it ability to rotate a body in a circle. We will also know about the stability of different bodies an the role of centre of mass and centre of gravity.            </p>
            <h2 className="text-xl font-semibold mb-2">4.1 FORCES ON BODIES</h2>
            <p className="mb-4">
                Sometimes we need to extend the direction in which the force acts. The line along which a force acts is called the line of action of the force as shown in figure 4.1.
            </p>
            <p className="mb-4">
                Multiple forces may act on bodies at the same time. Under such conditions, we have to determine the net force &apos;F&apos;. However, in such situations, the line of action of these forces becomes important. Suppose you are trying to move a heavy piece of furniture; if a friend helps and you both push together, the ease at which the furniture will move depends on the line of action of both forces on the object.
            </p>
            <p className="mb-4">
                If the directions of forces are parallel to each other, even if they are in opposite directions, those forces are called parallel forces. If they are in the same direction, they are called &apos;Like parallel forces&apos;. If they are in opposite directions, they will be known as &apos;Unlike parallel forces&apos;. For example, when we push a cart with both hands, we are applying like parallel forces from each support as shown in figure 4.2 (a) and when we apply force with both hands on the handle of a bike to turn it, the force from one hand may be greater or equal. We are applying unlike parallel forces as shown in figure 4.2 (b).
            </p>
            {/* Add images for figures 4.1 and 4.2 here if needed */}
        </div>
    )
}

export default Page
