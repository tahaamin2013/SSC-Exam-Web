import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const QuestionDashboard = () => {
    return (
        <section
            id="Questions"
            className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6"
        >
            <h1 className="font-bold text-3xl text-center mb-4">
                Problem Solving Questions
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    {/* Question 1 */}
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Differentiate between like and unlike parallel forces.</AccordionTrigger>
                        <AccordionContent>
                            **Like Parallel Forces**: These are forces that act in the same direction and have the same line of action. For example, if two people push a car from behind, both applying forces in the same direction, these forces are like parallel forces. The net force is the sum of the magnitudes of the individual forces.

                            **Unlike Parallel Forces**: These forces act in opposite directions but still parallel to each other. For example, if one person pushes a car forward while another pulls it backward, these are unlike parallel forces. The net force is the difference between the magnitudes of the individual forces, and the direction is determined by the larger force.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 2 */}
                    <AccordionItem value="item-2">
                        <AccordionTrigger>What is moment of force or torque? On what factors does it depend? Write its mathematical formula.</AccordionTrigger>
                        <AccordionContent>
                            The **moment of force**, or **torque**, is a measure of the rotational effect produced by a force applied at a distance from a pivot point. It depends on the magnitude of the force, the distance from the pivot point (lever arm), and the angle at which the force is applied.

                            **Mathematical Formula**:
                            \( \tau = F \times d \times \sin(\theta) \)
                            where:
                            - \( \tau \) = Torque
                            - \( F \) = Magnitude of the force
                            - \( d \) = Distance from the pivot point to the line of action of the force (lever arm)
                            - \( \theta \) = Angle between the force and the lever arm

                            Torque depends on the force applied, the distance from the pivot, and the angle of application.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 3 */}
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Define center of mass. What is the effect of mass distribution in a body on its center of mass?</AccordionTrigger>
                        <AccordionContent>
                            The **center of mass** is the point where the entire mass of an object or system can be considered to be concentrated for the purposes of analyzing its motion. It is the average location of the mass distribution.

                            **Effect of Mass Distribution**: The position of the center of mass depends on the distribution of mass within the body. If the mass is unevenly distributed, the center of mass will shift towards the area with more mass. For a uniform body with a symmetric shape, the center of mass is at the geometric center.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 4 */}
                    <AccordionItem value="item-4">
                        <AccordionTrigger>What is the center of gravity? Where will be the center of gravity of these regular-shaped bodies: circular plate, rectangular and square-shaped plate, triangular-shaped plate, cylinder, sphere? Differentiate between center of mass and center of gravity.</AccordionTrigger>
                        <AccordionContent>
                            The **center of gravity** is the point where the weight of an object is evenly distributed in all directions. It is often considered synonymous with the center of mass for uniform gravitational fields.

                            **Centers of Gravity**:
                            - **Circular Plate**: At the center of the plate.
                            - **Rectangular/Square Plate**: At the intersection of the diagonals.
                            - **Triangular Plate**: At the centroid of the triangle (intersection of medians).
                            - **Cylinder**: At the geometric center of the base.
                            - **Sphere**: At the geometric center.

                            **Difference**: The center of mass is a concept applicable in any uniform gravitational field and refers to the point where mass is concentrated. The center of gravity is specifically related to the distribution of weight under gravity and often coincides with the center of mass in uniform fields.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 5 */}
                    <AccordionItem value="item-5">
                        <AccordionTrigger>How can you find the center of gravity of an irregular-shaped thin sheet of plastic?</AccordionTrigger>
                        <AccordionContent>
                            To find the center of gravity of an irregular-shaped thin sheet of plastic:
                            1. **Suspend the Sheet**: Hang the sheet from a known point so that it can freely rotate.
                            2. **Find the Plumb Line**: Use a plumb line (a string with a weight) to draw a vertical line from the suspension point.
                            3. **Mark the Intersection**: Let the sheet come to rest and mark the line on the sheet.
                            4. **Repeat**: Suspend the sheet from another point and repeat the process.
                            5. **Find the Intersection**: The intersection of the lines drawn from both suspensions will be the center of gravity.

                            This method uses the principle of the intersection of lines of action of gravity to locate the center.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 6 */}
                    <AccordionItem value="item-6">
                        <AccordionTrigger>What is equilibrium? Describe the conditions of equilibrium. State and explain the principle of moments.</AccordionTrigger>
                        <AccordionContent>
                            **Equilibrium** is a state where an object is at rest or moving with a constant velocity, with no net force or torque acting on it.

                            **Conditions of Equilibrium**:
                            1. **First Condition (Translational Equilibrium)**: The sum of all forces acting on an object must be zero (\( \sum \vec F = 0 \)).
                            2. **Second Condition (Rotational Equilibrium)**: The sum of all torques acting on an object about any axis must be zero (\( \sum \tau = 0 \)).

                            **Principle of Moments**: The principle states that for an object to be in rotational equilibrium, the sum of the clockwise moments (torques) about any point must equal the sum of the counterclockwise moments about the same point.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 7 */}
                    <AccordionItem value="item-7">
                        <AccordionTrigger>Propose how the stability of an object can be improved. Illustrate the applications of stability physics in real life.</AccordionTrigger>
                        <AccordionContent>
                            **Improving Stability**:
                            - **Lowering the Center of Gravity**: By lowering the center of gravity, an object becomes more stable because the restoring force is greater when tilted.
                            - **Increasing the Base Area**: A larger base area provides better support and reduces the chance of tipping over.
                            - **Adding Weight at the Base**: Adding weight lower down increases stability by lowering the center of gravity.

                            **Applications**:
                            - **Vehicles**: Designing vehicles with a low center of gravity to enhance cornering stability.
                            - **Buildings**: Engineering tall buildings with wide bases and deep foundations to prevent toppling.
                            - **Sports**: Designing sports equipment with a low center of gravity for better control and balance.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 8 */}
                    <AccordionItem value="item-8">
                        <AccordionTrigger>Define the force of friction. What causes friction? What are the advantages and disadvantages of friction? Explain with examples. How can friction be reduced?</AccordionTrigger>
                        <AccordionContent>
                            **Force of Friction**: Friction is a force that opposes the relative motion between two surfaces in contact.

                            **Causes of Friction**:
                            - **Surface Roughness**: Irregularities and roughness on surfaces increase friction.
                            - **Material Properties**: Different materials have different coefficients of friction.

                            **Advantages**:
                            - **Prevents Slipping**: Helps in walking, driving, and handling objects.
                            - **Enables Movement**: Provides grip and control in machinery and equipment.

                            **Disadvantages**:
                            - **Wear and Tear**: Causes wear on surfaces and machinery parts.
                            - **Energy Loss**: Converts kinetic energy into heat, reducing efficiency.

                            **Reducing Friction**:
                            - **Lubrication**: Applying lubricants like oil or grease to reduce surface contact.
                            - **Smoothening Surfaces**: Polishing or finishing surfaces to reduce roughness.
                            - **Using Ball Bearings**: Reducing direct contact between moving parts.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 9 */}
                    <AccordionItem value="item-9">
                        <AccordionTrigger>Compare rolling friction and sliding friction. How are they different in terms of contact surfaces, motion, and forces involved? Explain with examples.</AccordionTrigger>
                        <AccordionContent>
                            **Rolling Friction**:
                            - **Contact Surface**: Occurs between a rolling object and a surface.
                            - **Motion**: Involves rotational motion.
                            - **Forces**: Generally lower than sliding friction because there is less surface contact.

                            **Example**: Rolling a ball on the ground or a car tire rolling on the road.

                            **Sliding Friction**:
                            - **Contact Surface**: Occurs between two surfaces sliding against each other.
                            - **Motion**: Involves translational motion.
                            - **Forces**: Higher than rolling friction due to greater surface contact and resistance.

                            **Example**: Pushing a box across the floor or sliding a book on a table.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 10 */}
                    <AccordionItem value="item-10">
                        <AccordionTrigger>Analyze the dynamics of an object reaching terminal velocity.</AccordionTrigger>
                        <AccordionContent>
                            When an object falls through a fluid (like air), it accelerates due to gravity until the resistive force of the fluid (air resistance) equals the force of gravity. At this point, the object stops accelerating and continues to fall at a constant speed known as terminal velocity.

                            **Dynamics**:
                            - **Initial Acceleration**: The object accelerates due to gravity.
                            - **Increasing Air Resistance**: As speed increases, air resistance increases.
                            - **Terminal Velocity**: When air resistance equals gravitational force, acceleration stops, and the object falls at a constant speed.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 11 */}
                    <AccordionItem value="item-11">
                        <AccordionTrigger>Define centripetal force. Describe the motion of a body in a circular path under the action of centripetal force.</AccordionTrigger>
                        <AccordionContent>
                            **Centripetal Force**: It is the force that acts on an object moving in a circular path, directed towards the center of the circle. It is required to keep the object moving in its circular trajectory.

                            **Motion Description**:
                            - **Constant Speed**: The object moves at a constant speed.
                            - **Changing Direction**: The direction of the object&apos;s velocity vector continuously changes, resulting in centripetal acceleration.
                            - **Force Direction**: The centripetal force acts radially inward, constantly changing the object&apos;s direction but not its speed.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 12 */}
                    <AccordionItem value="item-12">
                        <AccordionTrigger>Identify different sources of centripetal force in real-life examples.</AccordionTrigger>
                        <AccordionContent>
                            **Sources of Centripetal Force**:
                            - **Tension**: In a string when swinging an object in a circle (e.g., a ball on a string).
                            - **Gravity**: For planets orbiting a star (e.g., Earth orbiting the Sun).
                            - **Friction**: Between tires and the road when a car takes a curve.
                            - **Normal Force**: On a roller coaster track or when a car turns on a banked road.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 13 */}
                    <AccordionItem value="item-13">
                        <AccordionTrigger>Define orbital velocity. How do scientists use the concept of orbital speed to launch satellites into specific orbits? What factors influence the chosen speed?</AccordionTrigger>
                        <AccordionContent>
                            **Orbital Velocity**: It is the speed required for an object to stay in a stable orbit around a celestial body, such as Earth. It ensures that the object&apos;s centripetal force due to gravity matches the necessary centripetal force for circular motion.

                            **Launching Satellites**:
                            - **Calculating Velocity**: Scientists calculate the required orbital velocity based on the altitude of the orbit and the mass of the celestial body.
                            - **Rocket Propulsion**: Rockets are designed to accelerate satellites to the required speed to achieve the desired orbit.

                            **Factors Influencing Speed**:
                            - **Altitude of Orbit**: Higher orbits require greater speeds.
                            - **Gravitational Constant**: Affects the centripetal force needed.
                            - **Mass of the Celestial Body**: Influences the gravitational pull.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};

export default QuestionDashboard;
