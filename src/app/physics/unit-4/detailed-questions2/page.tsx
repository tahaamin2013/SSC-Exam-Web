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
                Detailed Questions and Answers (8 marks each)
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    {/* Question 1 */}
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            1. Which method is used for the addition of forces? Explain with an example.
                        </AccordionTrigger>
                        <AccordionContent>
                            Force is a vector quantity. It has magnitude and direction; therefore, forces are not added by ordinary arithmetic rules. They are added by a method known as the head-to-tail rule. According to this rule, vectors are drawn so that the head of the first vector is joined with the tail of the second vector. When forces are added, we get the resultant force. A resultant force is a single force that has the same effect as the combined effect of all the forces to be added. The resultant vector is drawn such that the tail of the first vector is joined with the head of the last vector.
                            <br /><br />
                            **Method**:
                            <br />
                            - Select the frame of reference and a suitable scale and draw the representative line of vectors of all the forces according to the scale, such as vector A and B.
                            - Take any one of the vectors as the first vector (e.g., vector A), then draw the next vector (B) such that its tail coincides with the head of the first vector (A). Similarly, draw the next vector for the third force (if any) with its tail coinciding with the head of the previous vector, and so on.
                            - Now draw a vector R such that its tail is at the tail of vector A, and its head is at the head of vector B. Vector R represents the resultant force completely in magnitude and direction.
                            - The length of the line according to scale represents the magnitude of the resultant vector. The direction of the resultant vector is from the tail of the first vector towards the head of the last vector.
                            <br /><br />
                            **Example**:
                            <br />
                            Suppose two forces are acting on a body. Force A = 5 N and Force B = 3 N. If Force A acts along the x-axis and Force B acts at an angle of 60° to the x-axis, then the resultant force can be found using vector addition methods:
                            <br />
                            - Draw the vector A along the x-axis.
                            - Draw the vector B at 60° to the x-axis.
                            - Draw the resultant vector from the tail of A to the head of B.
                            - The magnitude and direction of the resultant can be calculated using trigonometric relationships.
                            <br />
                            This method allows for precise calculation of the net force acting on a body when multiple forces are involved.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 2 */}
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            2. Resolve the vector into its rectangular components.
                        </AccordionTrigger>
                        <AccordionContent>
                            The decomposition or division of a vector into its components is called resolution of a vector. The splitting of a single vector into two mutually perpendicular components is called the resolution of that force. The process of splitting up vectors (forces) into their component forces is called the resolution of force. If a force is formed from two mutually perpendicular components, then such components are called perpendicular components.
                            <br /><br />
                            **Determination of Rectangular Components**:
                            <br />
                            Suppose a vector F acts on a body by making an angle θ with the x-axis, which is represented by the vector OA. Draw perpendicular BA from A on the x-axis as AB. According to the head-to-tail rule, OA is the resultant vector of OB and BA. So, F = OB + BA. Since the angle between BA and OB is 90°, these are called the perpendicular components of the vector OA representing F.
                            <br />
                            - **Horizontal or x-component**: The component OB along the x-axis is represented by Fx and is called the x-component or horizontal component of the vector F.
                            - **Vertical or y-component**: The component BA is represented by Fy and is called the y-component or vertical component of the vector F.
                            <br />
                            Therefore:
                            <br />
                            F = Fx + Fy
                            <br />
                            **Magnitude of Rectangular Components**:
                            <br />
                            The magnitude of the perpendicular components Fx and Fy of forces F can be found by using trigonometric ratios. In the right-angled triangle OAB:
                            <br />
                            - OB = F cos θ
                            <br />
                            - BA = F sin θ
                            <br />
                            Hence:
                            <br />
                            Fx = F cos θ
                            <br />
                            Fy = F sin θ
                            <br />
                            These two components are the two sides of the right-angled triangle where the hypotenuse represents the magnitude of the actual vector.
                            <br /><br />
                            **Example**:
                            <br />
                            Consider a vector F with a magnitude of 10 N making an angle of 30° with the x-axis. To find its rectangular components:
                            <br />
                            - Fx = F cos θ = 10 N × cos 30° = 10 N × √3/2 ≈ 8.66 N
                            <br />
                            - Fy = F sin θ = 10 N × sin 30° = 10 N × 1/2 = 5 N
                            <br />
                            The components are 8.66 N along the x-axis and 5 N along the y-axis.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 3 */}
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            3. Find the magnitude and direction of a vector whose rectangular components are given.
                        </AccordionTrigger>
                        <AccordionContent>
                            If we have the perpendicular components of any vector, then we can find the magnitude and direction of the resultant vector. This is the reverse of resolving the vector. As we know that the x-component Fx of the force F is F cos θ and the y-component Fy is F sin θ. These two perpendicular components are represented by lines OP and PR respectively.
                            <br /><br />
                            According to the head-to-tail rule: OR = OP + PR. Thus, OR will completely represent the force F where x and y-components are Fx and Fy respectively. So, F = √(Fx² + Fy²).
                            <br /><br />
                            **Magnitude of Actual Vector**:
                            <br />
                            The magnitude of the force F can be determined using the right-angled triangle OPR as:
                            <br />
                            F = √(OR²) = √(OP² + PR²)
                            <br />
                            **Direction of Actual Vector**:
                            <br />
                            The direction of the force F with respect to the x-axis is given by tan θ = Fy / Fx. So:
                            <br />
                            θ = tan⁻¹(Fy / Fx)
                            <br />
                            The value of the angle can be determined by using trigonometric tables or a calculator.
                            <br /><br />
                            **Example**:
                            <br />
                            Given Fx = 8 N and Fy = 6 N, find the magnitude and direction of the vector:
                            <br />
                            - Magnitude F = √(Fx² + Fy²) = √(8² + 6²) = √(64 + 36) = √100 = 10 N
                            <br />
                            - Direction θ = tan⁻¹(Fy / Fx) = tan⁻¹(6 / 8) = tan⁻¹(0.75) ≈ 36.87°
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 4 */}
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            4. Explain torque or moment of a force.
                        </AccordionTrigger>
                        <AccordionContent>
                            **Definition**:
                            Torque, also known as the moment of a force, is a measure of the rotational effect produced by a force. It quantifies the tendency of a force to rotate an object around an axis.
                            <br /><br />
                            **Dependence of Torque**:
                            <br />
                            Rotation (torque) produced in a body depends on the following two factors:
                            1. **Force**: Greater the force, greater the moment of the force (torque).
                            2. **Moment Arm**: The perpendicular distance between the line of action of the force and the axis of rotation.
                            <br /><br />
                            **Line of Action of Force**:
                            The line along which a force acts is called the line of action of the force.
                            <br />
                            **Moment Arm**:
                            The perpendicular distance between the line of action of the force and the axis of rotation is known as the moment arm. Longer the moment arm, greater is the moment of force.
                            <br /><br />
                            **Mathematical Form**:
                            Torque depends upon the force F and the distance r between the line of action of the force and the axis of rotation. Mathematically:
                            <br />
                            τ = F × r
                            <br />
                            Where τ is the torque, F is the magnitude of the force, and r is the moment arm.
                            <br /><br />
                            **Example**:
                            <br />
                            If a force of 10 N is applied at a distance of 2 m from the axis of rotation, then:
                            <br />
                            τ = F × r = 10 N × 2 m = 20 N·m
                            <br />
                            This torque will cause rotational motion around the axis of rotation.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 5 */}
                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            5. What is meant by the moment of force? Explain with an example.
                        </AccordionTrigger>
                        <AccordionContent>
                            **Moment of Force**:
                            The moment of a force is the measure of the tendency of a force to rotate an object about a particular axis. It is the product of the force and the perpendicular distance from the axis of rotation to the line of action of the force.
                            <br /><br />
                            **Mathematical Form**:
                            <br />
                            Moment of Force (Torque) = Force × Perpendicular Distance from Axis of Rotation
                            <br />
                            Mathematically:
                            <br />
                            M = F × d
                            <br />
                            Where M is the moment of force, F is the force applied, and d is the perpendicular distance from the axis of rotation to the line of action of the force.
                            <br /><br />
                            **Example**:
                            <br />
                            Consider a door with a handle located 1 meter from the hinges. If a force of 50 N is applied perpendicular to the door at the handle, the moment of force about the hinges is:
                            <br />
                            M = F × d = 50 N × 1 m = 50 N·m
                            <br />
                            This moment is responsible for the rotational effect that opens or closes the door.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 6 */}
                    <AccordionItem value="item-6">
                        <AccordionTrigger>
                            6. Describe an experiment to find the center of gravity.
                        </AccordionTrigger>
                        <AccordionContent>
                            **Centre of Gravity**:
                            The centre of gravity of a body is the point at which the entire weight of the body can be considered to act.
                            <br /><br />
                            **Finding Centre of Gravity Experimentally**:
                            - Hang a body from a thread. The centre of gravity will be the point where the body balances itself.
                            - Attach a plumb bob to the thread and allow the body to swing until it comes to rest. The point of suspension is the centre of gravity of the body.
                            <br /><br />
                            **Using a Simple Body**:
                            - To find the centre of gravity of a body like a uniform rod, support it on a knife edge and balance it. The point of balance is the centre of gravity.
                            - The centre of gravity of a uniform body is at the geometric centre.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 7 */}
                    <AccordionItem value="item-7">
                        <AccordionTrigger>
                            7. Define a couple. Give examples and the torque produced by a couple.
                        </AccordionTrigger>
                        <AccordionContent>
                            **Definition of a Couple**:
                            A couple consists of two equal and opposite forces that act on a body but do not result in any translational motion.
                            <br /><br />
                            **Examples of Couples**:
                            - Two forces of equal magnitude acting on opposite sides of a wrench.
                            - Steering wheel in a car, where two forces are applied to turn the wheel.
                            <br /><br />
                            **Torque Produced by a Couple**:
                            The torque produced by a couple is equal to the product of one of the forces and the perpendicular distance between the forces. The effect of a couple is to rotate the body about a fixed axis without causing translational motion.
                            <br />
                            The magnitude of the torque τ produced by a couple is given by:
                            <br />
                            τ = F × d
                            <br />
                            Where F is the magnitude of one of the forces and d is the distance between the forces.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 8 */}
                    <AccordionItem value="item-8">
                        <AccordionTrigger>
                            8. What is meant by equilibrium? Describe the conditions of equilibrium.
                        </AccordionTrigger>
                        <AccordionContent>
                            **Equilibrium**:
                            A body is said to be in equilibrium when it is at rest or moving with uniform velocity. Equilibrium is achieved when all the forces acting on a body are balanced.
                            <br /><br />
                            **Conditions of Equilibrium**:
                            - **First Condition (Translational Equilibrium)**: The vector sum of all forces acting on the body must be zero. Mathematically:
                            <br />
                            ∑F = 0
                            <br />
                            - **Second Condition (Rotational Equilibrium)**: The sum of all moments (torques) about any point must be zero. Mathematically:
                            <br />
                            ∑τ = 0
                            <br />
                            In summary, for an object to be in complete equilibrium, both the sum of forces and the sum of torques must be zero.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 9 */}
                    <AccordionItem value="item-9">
                        <AccordionTrigger>
                            9. What are the three states of equilibrium? Explain each with examples.
                        </AccordionTrigger>
                        <AccordionContent>
                            **Three States of Equilibrium**:
                            1. **Stable Equilibrium**:
                            - In this state, if the body is slightly displaced, it returns to its original position.
                            - Example: A ball placed in a bowl. When displaced, it returns to the lowest point of the bowl.
                            <br /><br />
                            2. **Unstable Equilibrium**:
                            - In this state, if the body is displaced, it moves further away from its original position.
                            - Example: A ball placed on top of an inverted bowl. When displaced, it rolls away from the top.
                            <br /><br />
                            3. **Neutral Equilibrium**:
                            - In this state, if the body is displaced, it remains in the new position without moving further.
                            - Example: A ball placed on a flat surface. When displaced, it stays in the new position without rolling further.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 10 */}
                    <AccordionItem value="item-10">
                        <AccordionTrigger>
                            10. How does the stability of a body relate to the position of its centre of mass?
                        </AccordionTrigger>
                        <AccordionContent>
                            **Stability and Centre of Mass**:
                            The stability of a body is greatly influenced by the position of its centre of mass.
                            <br /><br />
                            - **Stable Equilibrium**: When the centre of mass is low and within the base of support, the body is in stable equilibrium. A small displacement will result in the centre of mass returning to its original position.
                            - **Unstable Equilibrium**: When the centre of mass is high and outside the base of support, the body is in unstable equilibrium. A small displacement will cause the body to move further away from its original position.
                            - **Neutral Equilibrium**: When the centre of mass is neither particularly high nor low with respect to the base of support, and the body remains in the new position after displacement.
                            <br /><br />
                            The position of the centre of mass relative to the base of support determines the body&apos;s tendency to return to its original position or move further away when displaced. A lower centre of mass generally increases stability, while a higher centre of mass decreases stability.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};

export default QuestionDashboard;
