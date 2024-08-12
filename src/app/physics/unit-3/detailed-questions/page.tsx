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
                            State first law of motion. Explain with the help of examples. Why is it called law of inertia?
                        </AccordionTrigger>
                        <AccordionContent>
                            Newton&apos;s First Law of Motion states: &quot;An object at rest will remain at rest, and an object in motion will continue in motion at a constant velocity, unless acted upon by a net external force.&quot; This law is also known as the law of inertia, where inertia is the tendency of an object to resist changes in its state of motion.

                            **Examples:**
                            - A book lying on a table stays at rest until someone pushes it.
                            - A car moving at a steady speed will continue moving in the same direction unless the driver applies the brakes or turns the steering wheel.

                            The term &quot;law of inertia&quot; is used because it describes the concept that objects will not change their motion unless an external force acts on them, highlighting the property of inertia.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 2 */}
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            Define inertia. Why is it important to have knowledge of inertia in our daily life? Elaborate your answer with examples.
                        </AccordionTrigger>
                        <AccordionContent>
                            Inertia is defined as the resistance of an object to any change in its state of motion. It is directly related to the mass of the object; the greater the mass, the greater the inertia.

                            **Importance in Daily Life:**
                            - **Safety in Vehicles:** Understanding inertia helps design safer vehicles. Seat belts prevent passengers from continuing their motion during sudden stops or collisions, countering the effects of inertia.
                            - **Handling Objects:** When you suddenly stop a car, the contents in the trunk keep moving forward due to inertia. This knowledge helps in securing items properly to avoid accidents.

                            **Examples:**
                            - When you are in a car that suddenly accelerates, you feel pushed back into your seat because your body wants to remain in its initial state of motion.
                            - When you pull a tablecloth from under dishes quickly, the dishes tend to remain in place due to their inertia.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 3 */}
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            State and prove Newton&apos;s second law of motion. Deduce Newton&apos;s second law of motion from its first law?
                        </AccordionTrigger>
                        <AccordionContent>
                            **Newton&apos;s Second Law of Motion** states: &quot;The acceleration of an object is directly proportional to the net force acting on the object and inversely proportional to its mass.&quot; Mathematically, it is expressed as F = ma, where F is the force, m is the mass, and a is the acceleration.

                            **Proof:**
                            - Consider an object with mass m subjected to a net force F, causing it to accelerate at rate a.
                            - By measuring the force and acceleration, it is observed that F = ma, confirming the relationship.

                            **Deduction from First Law:**
                            - According to the First Law, an object remains in its state of rest or uniform motion unless acted upon by an external force.
                            - Newton’s Second Law quantifies this external force: if the force is applied, the object’s acceleration is proportional to this force and inversely proportional to its mass. Thus, the first law is a special case of the second law when the net force is zero (constant velocity or no motion).
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 4 */}
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            State Newton&apos;s 3rd law of motion. Explain with examples from daily life.
                        </AccordionTrigger>
                        <AccordionContent>
                            **Newton&apos;s Third Law of Motion** states: &quot;For every action, there is an equal and opposite reaction.&quot;

                            **Examples:**
                            - **Walking:** When you walk, your foot exerts a backward force on the ground, and the ground exerts an equal and opposite forward force on your foot, propelling you forward.
                            - **Swimming:** When you push the water backward with your hands, the water pushes you forward with an equal and opposite force.
                            - **Jumping:** When you jump off a diving board, you push the board downward, and the board pushes you upward with an equal force, causing you to lift off the board.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 5 */}
                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            State the limitations of Newton&apos;s laws of motion.
                        </AccordionTrigger>
                        <AccordionContent>
                            **Limitations of Newton&apos;s Laws of Motion:**
                            - **Relativistic Speeds:** Newton’s laws are not accurate at speeds close to the speed of light. In such cases, Einstein&apos;s theory of relativity provides a more accurate description.
                            - **Quantum Scales:** At atomic and subatomic scales, quantum mechanics is needed to describe motion, as Newton&apos;s laws do not apply.
                            - **Non-Inertial Frames:** Newton&apos;s laws assume inertial reference frames. In non-inertial frames (accelerating frames), additional fictitious forces, like centrifugal forces, need to be considered.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 6 */}
                    <AccordionItem value="item-6">
                        <AccordionTrigger>
                            Differentiate with examples between contact and non-contact forces. Also, explain fundamental forces and the role of Dr. Abdus Salam from Pakistan in unifying two fundamental forces.
                        </AccordionTrigger>
                        <AccordionContent>
                            **Contact Forces:** These forces require physical contact between objects. Examples include:
                            - **Friction:** The force resisting the relative motion of surfaces in contact.
                            - **Normal Force:** The support force exerted by a surface perpendicular to the object resting on it.

                            **Non-Contact Forces:** These forces act at a distance without physical contact. Examples include:
                            - **Gravitational Force:** The attractive force between two masses.
                            - **Electromagnetic Force:** The force between charged particles.

                            **Fundamental Forces:**
                            - **Gravitational Force**
                            - **Electromagnetic Force**
                            - **Strong Nuclear Force**
                            - **Weak Nuclear Force**

                            **Dr. Abdus Salam&apos;s Contribution:**
                            Dr. Abdus Salam, along with Sheldon Glashow and Steven Weinberg, developed the electroweak theory which unifies the electromagnetic force and the weak nuclear force into a single theoretical framework. This unification is a significant step towards understanding the fundamental forces of nature.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 7 */}
                    <AccordionItem value="item-7">
                        <AccordionTrigger>
                            Represent the forces acting on a body using free body diagrams.
                        </AccordionTrigger>
                        <AccordionContent>
                            **Free Body Diagrams (FBDs)** represent all the forces acting on an object. Each force is depicted as an arrow pointing in the direction of the force, and the length of the arrow represents the magnitude of the force.

                            **Example:**
                            For a block on a horizontal surface:
                            - **Gravitational Force (Weight):** An arrow pointing downward.
                            - **Normal Force:** An arrow pointing upward, equal in magnitude and opposite to the weight.
                            - **Frictional Force (if any):** An arrow pointing opposite to the direction of motion.
                            - **Applied Force (if any):** An arrow showing the direction of the applied force.

                            The diagram helps in analyzing the forces to determine the object&apos;s motion or equilibrium.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 8 */}
                    <AccordionItem value="item-8">
                        <AccordionTrigger>
                            Define momentum. What is its formula and unit? Is it a scalar or vector quantity? Show that units of momentum, Ns and kgm/s are equal.
                        </AccordionTrigger>
                        <AccordionContent>
                            **Momentum** is defined as the quantity of motion of an object, given by the product of its mass and velocity.

                            **Formula:** p = mv
                            - p = momentum
                            - m = mass
                            - v = velocity

                            **Unit:** The SI unit of momentum is kg·m/s (kilogram meter per second).

                            **Vector Quantity:** Momentum is a vector quantity because it has both magnitude and direction.

                            **Unit Equivalence:**
                            - **Newton-seconds (Ns):** 1 Newton (N) is equal to 1 kg·m/s². Therefore, 1 Ns = 1 (kg·m/s²) × s = kg·m/s.
                            - **kg·m/s:** This is the same as Ns, confirming the equivalence of the units.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 9 */}
                    <AccordionItem value="item-9">
                        <AccordionTrigger>
                            Differentiate between mass and weight of body.
                        </AccordionTrigger>
                        <AccordionContent>
                            **Mass:**
                            - Definition: The measure of the amount of matter in an object.
                            - Unit: Kilograms (kg).
                            - It is constant regardless of the object&apos;s location.

                            **Weight:**
                            - Definition: The force exerted on an object due to gravity.
                            - Formula: W = mg (where W is weight, m is mass, and g is the acceleration due to gravity).
                            - Unit: Newtons (N).
                            - It varies with the strength of the gravitational field; thus, it changes with location (e.g., Earth vs. Moon).

                            **Example:**
                            - A person with a mass of 70 kg has a weight of approximately 686 N on Earth (where g ≈ 9.8 m/s²) but would weigh less on the Moon.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 10 */}
                    <AccordionItem value="item-10">
                        <AccordionTrigger>
                            What are gravitational field and gravitational field strength? Explain.
                        </AccordionTrigger>
                        <AccordionContent>
                            **Gravitational Field:**
                            - Definition: A region of space around a mass where another mass experiences a force of attraction due to gravity.
                            - It represents the influence of a mass on other masses in its vicinity.

                            **Gravitational Field Strength:**
                            - Definition: The force experienced per unit mass at a point in the gravitational field.
                            - Formula: g = F/m (where g is gravitational field strength, F is the force, and m is the mass).
                            - Unit: Newtons per kilogram (N/kg).

                            **Explanation:**
                            The gravitational field strength at a point indicates how strong the gravitational pull is at that point, affecting any mass placed there.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 11 */}
                    <AccordionItem value="item-11">
                        <AccordionTrigger>
                            Justify and illustrate the use of electronic balances to measure mass.
                        </AccordionTrigger>
                        <AccordionContent>
                            **Electronic Balances:**
                            - **Justification:** Electronic balances provide precise and accurate measurements of mass by using electronic sensors to measure the force exerted by the mass. They are more accurate and easier to use than traditional mechanical balances.
                            - **Illustration:** When a mass is placed on the balance, sensors detect the weight and convert this force into a digital reading of the mass, which is displayed on a screen. This method eliminates human error and provides consistent results.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 12 */}
                    <AccordionItem value="item-12">
                        <AccordionTrigger>
                            State and prove Newton&apos;s second law of motion in terms of momentum.
                        </AccordionTrigger>
                        <AccordionContent>
                            **Newton&apos;s Second Law in Terms of Momentum:**
                            - **State:** The rate of change of momentum of an object is equal to the net force acting on it.
                            - **Mathematical Formulation:** F = dp/dt, where F is the force, and dp/dt is the rate of change of momentum.

                            **Proof:**
                            - Momentum (p) is defined as p = mv.
                            - Differentiating with respect to time, dp/dt = d(mv)/dt.
                            - If the mass (m) is constant, dp/dt = m (dv/dt), where dv/dt is acceleration (a).
                            - Hence, F = ma, proving the second law in terms of momentum.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 13 */}
                    <AccordionItem value="item-13">
                        <AccordionTrigger>
                            Define isolated system. State law of conservation of linear momentum. Explain with example.
                        </AccordionTrigger>
                        <AccordionContent>
                            **Isolated System:**
                            - Definition: A system in which no external forces act on the objects within it, meaning that the total momentum of the system remains constant.

                            **Law of Conservation of Linear Momentum:**
                            - **State:** In an isolated system, the total linear momentum remains constant if no external forces act on it.
                            - **Example:** When two ice skaters push off from each other, they move in opposite directions. The momentum gained by one skater is equal and opposite to the momentum gained by the other, keeping the total momentum of the system constant.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};

export default QuestionDashboard;
