import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const Page = () => {
    return (
        <section
            id="FAQ"
            className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6"
        >
            <h1 className="font-bold text-3xl text-center mb-4">
                Brief Questions and Answers Physics (3 marks each)
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>

                    <AccordionItem value="item-1">
                        <AccordionTrigger>Q.1 Define dynamics.</AccordionTrigger>
                        <AccordionContent>
                            The branch of mechanics that deals with the study of motion of an object and the cause of its motion is called dynamics.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>Q.2 Define force.</AccordionTrigger>
                        <AccordionContent>
                            A force moves or tends to move, stops or tends to stop the motion of a body. The force can also change the direction of motion of a body.
                            <br />
                            <strong>Example:</strong> We can open the door either by pushing or pulling the door. A man pushes the cart. The push may move the cart or change the direction of its motion or may stop the moving cart. A batsman changes the direction of the moving ball by pushing it with his bat.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>Q.3 Define inertia.</AccordionTrigger>
                        <AccordionContent>
                            Inertia of a body is its property due to which it resists any change in uniform motion. It depends on the mass of the body. Greater the mass of the body greater will be the inertia. Therefore, we can say that mass is the direct measure of inertia.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>Q.4 What is momentum?</AccordionTrigger>
                        <AccordionContent>
                            Momentum of a body is the quantity of motion it possesses due to its mass and velocity. The momentum &quot;P&quot; of a body is given by the product of its mass m and velocity v. Thus, P = m × v.
                            <br />
                            Momentum is a vector quantity.
                            <br />
                            <strong>Unit:</strong> The SI unit of momentum is kg·m/s or Ns.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger>Q.5 State Newton&apos;s First law of motion.</AccordionTrigger>
                        <AccordionContent>
                            A body continues in its state of rest or of uniform motion in a straight line provided no net force acts on it.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6">
                        <AccordionTrigger>Q.6 Why Newton&apos;s First law of motion is also called law of inertia?</AccordionTrigger>
                        <AccordionContent>
                            Since Newton&apos;s first law of motion deals with the inertial property of matter, therefore, Newton&apos;s first law of motion is also known as the law of inertia.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-7">
                        <AccordionTrigger>Q.7 State Newton&apos;s Second law of motion.</AccordionTrigger>
                        <AccordionContent>
                            When a net force acts upon a body, it produces an acceleration in the body in the direction of force, and the magnitude of acceleration is directly proportional to the force and is inversely proportional to the mass of the body.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-8">
                        <AccordionTrigger>Q.8 What is the unit of force? Define it.</AccordionTrigger>
                        <AccordionContent>
                            <strong>Unit of Force:</strong> In the System International, the unit of force is Newton, which is represented by the symbol &apos;N&apos;.
                            <br />
                            <strong>Newton:</strong> One Newton is that force which produces an acceleration of 1 m/s² in a body of mass 1 kg. This unit of force can also be written as, 1 N = 1 kg × 1 m/s² = 1 kg·m/s².
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-9">
                        <AccordionTrigger>Q.9 State Newton&apos;s Third law of motion.</AccordionTrigger>
                        <AccordionContent>
                            To every action, there is always a reaction which is equal in magnitude but opposite in direction.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-10">
                        <AccordionTrigger>Q.10 If a moving body has no acceleration; does it mean that no force is acting on it?</AccordionTrigger>
                        <AccordionContent>
                            According to Newton&apos;s second law of motion, we have F = m × a. When acceleration a = 0, we get F = m × 0 = 0. Thus, when acceleration is zero, then the net force acting on the body is zero. However, this does not mean that no force is acting on the body. When a body is in motion, some forces may be acting on the body, but in the case of zero acceleration, the net (resultant) force should be zero.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-11">
                        <AccordionTrigger>Q.11 What do you know about Momentum?</AccordionTrigger>
                        <AccordionContent>
                            <strong>Definition:</strong> The Momentum of a moving body is the product of its mass and velocity.
                            <br />
                            <strong>OR</strong>
                            <br />
                            The quantity of motion of the body is determined by a quantity known as Momentum.
                            <br />
                            <strong>Mathematical Form:</strong> If a body of mass &apos;m&apos; is moving with velocity &apos;v&apos; then mathematically it is written as P = m × v.
                            <br />
                            Momentum is a vector quantity.
                            <br />
                            <strong>Unit:</strong> The SI unit of momentum is kg·m/s. It can also be written as Ns.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-12">
                        <AccordionTrigger>Q.12 Prove that 1 kg·m/s = 1 Ns.</AccordionTrigger>
                        <AccordionContent>
                            <strong>L.H.S:</strong> 1 kg·m/s = 1 kg × 1 m/s × 1 s/1 s = 1 kg·m/s × 1 s
                            <br />
                            As we know that 1 kg·m/s = 1 N, so 1 kg·m/s = 1 N·s
                            <br />
                            <strong>R.H.S:</strong> 1 N·s
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-13">
                        <AccordionTrigger>Q.13 On which quantities does Momentum (quantity of motion) of a body depend?</AccordionTrigger>
                        <AccordionContent>
                            Momentum or quantity of the motion of a body depends on two quantities:
                            <br />
                            (i) Mass of the body
                            <br />
                            (ii) Velocity of the body
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-14">
                        <AccordionTrigger>Q.14 What is the relationship between momentum and the force applied on the body?</AccordionTrigger>
                        <AccordionContent>
                            The rate of change of momentum of a body is equal to the applied force on it, and the direction of change in momentum is in the direction of the force.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-15">
                        <AccordionTrigger>Q.15 State the law of conservation of momentum.</AccordionTrigger>
                        <AccordionContent>
                            The momentum of an isolated system of two or more than two interacting bodies remains constant.
                            <br />
                            An isolated system is a group of interacting bodies on which no external force is acting. If no unbalanced or net force acts on a system, then its momentum remains constant.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-16">
                        <AccordionTrigger>Q.16 Write down the advantages and disadvantages of friction.</AccordionTrigger>
                        <AccordionContent>
                            <strong>Disadvantages:</strong>
                            <br />
                            Friction is undesirable when moving at high speed because it opposes the motion and thus limits the speed of the moving objects. Most of our useful energy is lost as heat and sound due to the friction between various moving parts of machines. In machines, friction also causes wear and tear of their moving parts.
                            <br />
                            <strong>Advantages:</strong>
                            <br />
                            We cannot write if there would be no friction between paper and the pencil. Friction enables us to walk on the ground. We cannot run on a slippery ground. A slippery ground offers very little friction. Hence, anybody who tries to run on a slippery ground may meet an accident. Similarly, it is dangerous to apply brakes with full force to stop a fast-moving vehicle on a slippery road. Birds could not fly if there is no air resistance.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-17">
                        <AccordionTrigger>Q.17 Can balanced forces move a body?</AccordionTrigger>
                        <AccordionContent>
                            No, balanced forces cannot move a body because the net force on the body is zero.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-18">
                        <AccordionTrigger>Q.18 How can we reduce friction?</AccordionTrigger>
                        <AccordionContent>
                            Friction can be reduced by the following methods:
                            <br />
                            (i) By polishing surfaces
                            <br />
                            (ii) By using ball bearings
                            <br />
                            (iii) By using lubricants
                            <br />
                            (iv) By streamlining shapes
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-19">
                        <AccordionTrigger>Q.19 What is friction?</AccordionTrigger>
                        <AccordionContent>
                            When a body moves or tends to move on the surface of another body, a force comes into play which opposes the relative motion between them. This force is called friction or force of friction.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-20">
                        <AccordionTrigger>Q.20 Define coefficient of friction.</AccordionTrigger>
                        <AccordionContent>
                            The coefficient of friction is defined as the ratio of the force of friction F to the normal reaction R between two surfaces in contact.
                            <br />
                            μ = F/R
                            <br />
                            The value of the coefficient of friction depends on the nature of the surfaces in contact.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-21">
                        <AccordionTrigger>Q.21 Explain the terms normal reaction and limiting friction.</AccordionTrigger>
                        <AccordionContent>
                            <strong>Normal Reaction:</strong> The force which is perpendicular to the contact surface of the two bodies is called normal reaction.
                            <br />
                            <strong>Limiting Friction:</strong> It is the maximum value of force of friction which comes into play when a body just begins to move over the surface of another body.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-22">
                        <AccordionTrigger>Q.22 What is meant by Resultant force?</AccordionTrigger>
                        <AccordionContent>
                            If a number of forces act on a body, they may be replaced by a single force which produces the same effect as produced by all the forces acting together. This single force is called the resultant force.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-23">
                        <AccordionTrigger>Q.23 Why an object moves in the direction of the net force?</AccordionTrigger>
                        <AccordionContent>
                            A moving object always accelerates in the direction of the net force applied to it. This happens because the net force increases the velocity of the object in the direction of the applied force.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-24">
                        <AccordionTrigger>Q.24 What is frictional force?</AccordionTrigger>
                        <AccordionContent>
                            The force which always opposes the motion of an object is called frictional force. Frictional force is a type of contact force, and it comes into play only when there is a relative motion between two surfaces.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-25">
                        <AccordionTrigger>Q.25 Why do we use lubricants in machines?</AccordionTrigger>
                        <AccordionContent>
                            Lubricants such as oil or grease are used in machines to reduce friction between the moving parts. This reduces wear and tear, minimizes the loss of energy as heat, and helps the machine parts move smoothly.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-26">
                        <AccordionTrigger>Q.26 What is the unit of coefficient of friction?</AccordionTrigger>
                        <AccordionContent>
                            The coefficient of friction is a ratio of two forces. Therefore, it has no unit.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-27">
                        <AccordionTrigger>Q.27 What is air resistance?</AccordionTrigger>
                        <AccordionContent>
                            Air resistance is a type of frictional force that opposes the motion of objects moving through air. It depends on the speed of the object, the shape of the object, and the density of the air.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-28">
                        <AccordionTrigger>Q.28 State Newton&apos;s First Law of Motion in terms of momentum.</AccordionTrigger>
                        <AccordionContent>
                            Newton&apos;s First Law of Motion in terms of momentum states that a body at rest or in uniform motion will remain in that state unless acted upon by an external force, implying that the momentum of the body remains constant if no external force is applied.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-29">
                        <AccordionTrigger>Q.29 How is impulse related to momentum?</AccordionTrigger>
                        <AccordionContent>
                            Impulse is the change in momentum of an object when a force is applied over a period of time. Mathematically, Impulse (J) = Change in Momentum (ΔP) = Force (F) × Time (Δt).
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-30">
                        <AccordionTrigger>Q.30 What is the relationship between the mass and inertia of an object?</AccordionTrigger>
                        <AccordionContent>
                            The mass of an object is directly proportional to its inertia. This means that a heavier object has more inertia and resists changes in its state of motion more than a lighter object.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-31">
                        <AccordionTrigger>Q.31 How does the angle of inclination affect the force of friction?</AccordionTrigger>
                        <AccordionContent>
                            As the angle of inclination increases, the component of the gravitational force acting parallel to the surface increases, leading to a decrease in the normal force. This decrease in normal force reduces the force of friction between the surfaces.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-32">
                        <AccordionTrigger>Q.32 What is the role of friction in walking?</AccordionTrigger>
                        <AccordionContent>
                            Friction provides the necessary grip between our feet and the ground, allowing us to push against the ground and move forward. Without friction, walking would be impossible as our feet would slip, and we wouldn&apos;t be able to gain any traction.
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
            </div>
        </section>
    );
};

export default Page;
