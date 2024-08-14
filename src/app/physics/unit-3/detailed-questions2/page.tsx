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
                        <AccordionTrigger>
                            1. State and Explain Newton&apos;s First Law of Motion
                        </AccordionTrigger>
                        <AccordionContent>
                            <h2 className="font-semibold">Answer:</h2>
                            <p>
                                A body continues in its state of rest or of uniform motion in a straight line provided no net force acts on it.
                            </p>
                            <h3 className="font-semibold">Explanation for Rest:</h3>
                            <p>
                                Newton&apos;s first law of motion applies to bodies at rest or moving with uniform speed in a straight line. A body at rest remains at rest unless acted upon by a net force. For example, a book lying on a table remains at rest as long as no net force acts on it.
                            </p>
                            <h3 className="font-semibold">Explanation for Motion:</h3>
                            <p>
                                Similarly, a moving object does not stop moving by itself. For instance, a ball rolled on a rough surface stops earlier than one rolled on a smooth surface due to greater friction on the rough surface. If there were no force opposing the motion, the body would never stop.
                            </p>
                            <h3 className="font-semibold">Law of Inertia:</h3>
                            <p>
                                Since Newton&apos;s first law deals with the inertial property of matter, it is also known as the law of inertia. For example, passengers in a bus tend to fall forward when the driver suddenly applies the brakes because the upper parts of their bodies continue moving while the lower parts are in contact with the bus and stop with it.
                            </p>
                            <h3 className="font-semibold">Net Force:</h3>
                            <p>
                                Net force is the resultant of all the forces acting on a body.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 2 */}
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            2. State and Explain Newton&apos;s Second Law of Motion
                        </AccordionTrigger>
                        <AccordionContent>
                            <h2 className="font-semibold">Answer:</h2>
                            <p>
                                &quot;When a net force acts upon a body, it produces an acceleration in the body in the direction of the force. The magnitude of the acceleration is directly proportional to the force and inversely proportional to the mass of the body.&quot;
                            </p>
                            <h3 className="font-semibold">Dependence of Acceleration:</h3>
                            <p>
                                Acceleration depends on two factors: Force and Mass.
                            </p>
                            <h3 className="font-semibold">Mathematical Form:</h3>
                            <p>
                                If the force &apos;F&apos; is acting on a body of mass &apos;m&apos;, then the relation can be written as <i>F = ma</i>. Here, &apos;a&apos; is the acceleration produced.
                            </p>
                            <h3 className="font-semibold">Unit of Force:</h3>
                            <p>
                                In the International System, the unit of force is Newton (N), defined as the force that produces an acceleration of 1 m/s² in a body of mass 1 kg.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 3 */}
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            3. Differentiate between Mass and Weight
                        </AccordionTrigger>
                        <AccordionContent>
                            <h2 className="font-semibold">Answer:</h2>
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mass</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Weight</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Definition</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Quantity of matter possessed by the body</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Force with which the earth attracts the body</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Quantity Type</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Scalar</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Vector</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Measurement</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Physical balance</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Spring balance</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Variation with Location</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Remains same everywhere</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Varies with the value of &apos;g&apos;</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Unit</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Kilogram (kg)</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Newton (N)</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Calculation</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Calculated by F = ma</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Calculated by W = mg</td>
                                    </tr>
                                </tbody>
                            </table>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 4 */}
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            4. State and Explain Newton&apos;s Third Law of Motion
                        </AccordionTrigger>
                        <AccordionContent>
                            <h2 className="font-semibold">Answer:</h2>
                            <p>
                                &quot;To every action, there is always an equal and opposite reaction.&quot;
                            </p>
                            <h3 className="font-semibold">Action and Reaction:</h3>
                            <p>
                                Newton&apos;s third law of motion deals with the reaction of a body when a force acts on it. If body A exerts a force on body B, then body B exerts an equal and opposite force on body A. The force exerted by body A on B is called the action force, while the force exerted by B on A is called the reaction force. Action and reaction forces are equal in magnitude but opposite in direction and act on different bodies.
                            </p>
                            <h3 className="font-semibold">Examples:</h3>
                            <ul className="list-disc list-inside">
                                <li>
                                    Consider a book lying on a table. The weight of the book acting downward is the action force, while the reaction force is the table pushing up on the book.
                                </li>
                                <li>
                                    When an air-filled balloon is released, the air escaping from the balloon exerts a force on the balloon, causing it to move in the opposite direction.
                                </li>
                                <li>
                                    A rocket moves forward by expelling gases backward. The reaction force of these gases pushes the rocket forward.
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 5 */}
                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            5. Explain the tension in the string. If two bodies are connected by a string passing over a pulley, find the values of tension and acceleration in it.
                        </AccordionTrigger>
                        <AccordionContent>
                            <h2 className="font-semibold">Answer:</h2>
                            <p>
                                Tension is the force transmitted through a string, rope, or cable when it is pulled tight by forces acting from opposite ends. In the case of two bodies connected by a string passing over a pulley, the tension in the string is the same throughout, assuming an ideal pulley with no friction.
                            </p>
                            <h3 className="font-semibold">Calculation of Tension and Acceleration:</h3>
                            <p>
                                To calculate tension and acceleration, we can use the following formulas:
                            </p>
                            <p>
                                If two bodies with masses <i>m1</i> and <i>m2</i> are connected by a string passing over a frictionless pulley, the acceleration <i>a</i> of the system and the tension <i>T</i> in the string can be calculated as:
                            </p>
                            <pre>
                                <code>
                                    a = (m2 - m1) * g / (m1 + m2) <br />
                                    T = (2 * m1 * m2 * g) / (m1 + m2) <br />
                                    where &apos;g&apos; is the acceleration due to gravity.
                                </code>
                            </pre>
                            <p>
                                The tension in the string is the same throughout, but the acceleration of each mass will be different based on the difference in their masses.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 6 */}
                    <AccordionItem value="item-6">
                        <AccordionTrigger>
                            6. What is friction? What are the different types of friction? Explain with examples.
                        </AccordionTrigger>
                        <AccordionContent>
                            <h2 className="font-semibold">Answer:</h2>
                            <p>
                                Friction is the force that opposes the relative motion or tendency of motion between two surfaces in contact. It acts parallel to the surfaces and is responsible for the resistance experienced when moving an object across a surface.
                            </p>
                            <h3 className="font-semibold">Types of Friction:</h3>
                            <h4 className="font-semibold">1. Static Friction:</h4>
                            <p>
                                Static friction is the frictional force that prevents relative motion between two surfaces that are in contact but not moving. It must be overcome to start the motion of an object. For example, pushing a heavy box that is at rest requires overcoming static friction.
                            </p>
                            <h4 className="font-semibold">2. Kinetic Friction:</h4>
                            <p>
                                Kinetic friction, also known as dynamic friction, is the frictional force acting on surfaces in relative motion. It is generally less than static friction. For instance, once the heavy box starts moving, kinetic friction acts against its motion.
                            </p>
                            <h4 className="font-semibold">3. Rolling Friction:</h4>
                            <p>
                                Rolling friction occurs when a wheel or ball rolls over a surface. It is usually less than sliding friction. For example, a rolling ball experiences less friction than a sliding block.
                            </p>
                            <h4 className="font-semibold">4. Fluid Friction:</h4>
                            <p>
                                Fluid friction is the resistance encountered by objects moving through a fluid (liquid or gas). For example, air resistance acting on a moving car or water resistance acting on a swimming swimmer.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 7 */}
                    <AccordionItem value="item-7">
                        <AccordionTrigger>
                            7. State the laws of friction and explain with examples.
                        </AccordionTrigger>
                        <AccordionContent>
                            <h2 className="font-semibold">Answer:</h2>
                            <h3 className="font-semibold">Laws of Friction:</h3>
                            <h4 className="font-semibold">1. First Law:</h4>
                            <p>
                                The frictional force is directly proportional to the normal force pressing the two surfaces together. This means that as the normal force increases, the frictional force also increases. For example, the friction experienced when pushing a box increases if you press down harder on the box.
                            </p>
                            <h4 className="font-semibold">2. Second Law:</h4>
                            <p>
                                The frictional force is independent of the area of contact between the two surfaces. The frictional force does not significantly change with the area of contact as long as the normal force remains constant. For example, whether you use a large or small shoe sole, the frictional force with the ground remains roughly the same for the same normal force.
                            </p>
                            <h4 className="font-semibold">3. Third Law:</h4>
                            <p>
                                The frictional force is independent of the relative velocity between the two surfaces in contact. The frictional force remains approximately the same regardless of how fast the surfaces are moving relative to each other. For instance, sliding friction is not significantly affected by the speed at which you slide a book across a table.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 8 */}
                    <AccordionItem value="item-8">
                        <AccordionTrigger>
                            8. Derive the expression for the acceleration of a body moving down an inclined plane.
                        </AccordionTrigger>
                        <AccordionContent>
                            <h2 className="font-semibold">Answer:</h2>
                            <p>
                                To derive the expression for the acceleration of a body moving down an inclined plane, consider a body of mass <i>m</i> on an inclined plane with an angle of inclination <i>&theta;</i> with the horizontal.
                            </p>
                            <h3 className="font-semibold">Forces Acting on the Body:</h3>
                            <ul className="list-disc list-inside">
                                <li>
                                    Gravitational force <i>mg</i> acting downward.
                                </li>
                                <li>
                                    Normal force <i>N</i> acting perpendicular to the inclined plane.
                                </li>
                                <li>
                                    Frictional force <i>f</i> acting parallel to the inclined plane and opposite to the direction of motion.
                                </li>
                            </ul>
                            <h3 className="font-semibold">Resolution of Forces:</h3>
                            <p>
                                The component of the gravitational force parallel to the inclined plane is <i>mg sin &theta;</i>, and the component perpendicular to the plane is <i>mg cos &theta;</i>.
                            </p>
                            <p>
                                The normal force is equal to <i>mg cos &theta;</i>.
                            </p>
                            <p>
                                The frictional force is given by <i>f = &mu;N</i>, where <i>&mu;</i> is the coefficient of friction. Thus, <i>f = &mu;mg cos &theta;</i>.
                            </p>
                            <h3 className="font-semibold">Applying Newton’s Second Law:</h3>
                            <p>
                                The net force acting on the body along the inclined plane is <i>mg sin &theta; - f</i>.
                            </p>
                            <p>
                                Using Newton’s second law, <i>F = ma</i>, the net force can be written as:
                            </p>
                            <pre>
                                <code>
                                    mg sin &theta; - &mu;mg cos &theta; = ma <br />
                                    a = g (sin &theta; - &mu; cos &theta;)
                                </code>
                            </pre>
                            <p>
                                Therefore, the acceleration <i>a</i> of the body down the inclined plane is given by <i>a = g (sin &theta; - &mu; cos &theta;)</i>.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 9 */}
                    <AccordionItem value="item-9">
                        <AccordionTrigger>
                            9. Define and explain the concept of centripetal force. Derive the expression for centripetal force acting on a body moving in a circular path.
                        </AccordionTrigger>
                        <AccordionContent>
                            <h2 className="font-semibold">Answer:</h2>
                            <p>
                                Centripetal force is the force that acts on a body moving in a circular path, directed towards the center of the circle or curve along which the body is moving. It is responsible for keeping the body in its curved trajectory.
                            </p>
                            <h3 className="font-semibold">Derivation of Centripetal Force:</h3>
                            <p>
                                Consider a body of mass <i>m</i> moving with a constant speed <i>v</i> along a circular path of radius <i>r</i>.
                            </p>
                            <p>
                                The centripetal force <i>F</i> is required to keep the body moving in its circular path. This force provides the necessary centripetal acceleration <i>a<sub>c</sub></i>.
                            </p>
                            <p>
                                The centripetal acceleration is given by:
                            </p>
                            <pre>
                                <code>
                                    a<sub>c</sub> = v<sup>2</sup> / r
                                </code>
                            </pre>
                            <p>
                                According to Newton&apos;s second law, the centripetal force is:
                            </p>
                            <pre>
                                <code>
                                    F = ma<sub>c</sub> <br />
                                    F = m (v<sup>2</sup> / r) <br />
                                    F = mv<sup>2</sup> / r
                                </code>
                            </pre>
                            <p>
                                Therefore, the centripetal force acting on a body moving in a circular path is given by <i>F = mv<sup>2</sup> / r</i>.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 10 */}
                    <AccordionItem value="item-10">
                        <AccordionTrigger>
                            10. Explain the concept of momentum. Derive the expression for the momentum of a body in linear motion.
                        </AccordionTrigger>
                        <AccordionContent>
                            <h2 className="font-semibold">Answer:</h2>
                            <p>
                                Momentum is a vector quantity that represents the quantity of motion possessed by a body. It is defined as the product of the mass of the body and its velocity.
                            </p>
                            <h3 className="font-semibold">Derivation of Momentum:</h3>
                            <p>
                                Consider a body of mass <i>m</i> moving with a velocity <i>v</i>.
                            </p>
                            <p>
                                The momentum <i>p</i> of the body is given by:
                            </p>
                            <pre>
                                <code>
                                    p = mv
                                </code>
                            </pre>
                            <p>
                                Where <i>p</i> is the momentum, <i>m</i> is the mass, and <i>v</i> is the velocity of the body.
                            </p>
                            <p>
                                Momentum is a vector quantity, meaning it has both magnitude and direction. The direction of the momentum vector is the same as the direction of the velocity vector.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 11 */}
                    <AccordionItem value="item-11">
                        <AccordionTrigger>
                            11. Explain the principle of conservation of momentum with examples.
                        </AccordionTrigger>
                        <AccordionContent>
                            <h2 className="font-semibold">Answer:</h2>
                            <p>
                                The principle of conservation of momentum states that the total momentum of an isolated system remains constant if no external forces act on it. In other words, the total momentum before an event (such as a collision) is equal to the total momentum after the event.
                            </p>
                            <h3 className="font-semibold">Mathematical Expression:</h3>
                            <p>
                                If two bodies with masses <i>m<sub>1</sub></i> and <i>m<sub>2</sub></i> are moving with velocities <i>v<sub>1</sub></i> and <i>v<sub>2</sub></i> respectively, the total momentum of the system before the collision is:
                            </p>
                            <pre>
                                <code>
                                    p<sub>initial</sub> = m<sub>1</sub>v<sub>1</sub> + m<sub>2</sub>v<sub>2</sub>
                                </code>
                            </pre>
                            <p>
                                After the collision, if the velocities of the bodies become <i>v<sub>1&apos;</sub></i> and <i>v<sub>2&apos;</sub></i>, the total momentum of the system is:
                            </p>
                            <pre>
                                <code>
                                    p<sub>final</sub> = m<sub>1</sub>v<sub>1&apos;</sub> + m<sub>2</sub>v<sub>2&apos;</sub>
                                </code>
                            </pre>
                            <p>
                                According to the principle of conservation of momentum:
                            </p>
                            <pre>
                                <code>
                                    p<sub>initial</sub> = p<sub>final</sub>
                                </code>
                            </pre>
                            <h3 className="font-semibold">Examples:</h3>
                            <ul className="list-disc list-inside">
                                <li>
                                    In a collision between two cars, if the cars collide and crumple, the total momentum of the cars before and after the collision remains constant, assuming no external forces like friction are significant.
                                </li>
                                <li>
                                    When a person jumps off a boat, the momentum of the boat-person system before jumping is equal to the momentum after jumping. The boat moves in the opposite direction to conserve momentum.
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};

export default QuestionDashboard;
