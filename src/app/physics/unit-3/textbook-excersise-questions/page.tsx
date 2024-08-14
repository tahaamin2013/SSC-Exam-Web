import React from 'react';
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
                Physics Textbook Exercises
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    {/* Q.no.3.2 */}
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            Q.no.3.2 Define the following terms:
                        </AccordionTrigger>
                        <AccordionContent>
                            i) Inertia: Ans: See Q.no.3 short Question<br />
                            ii) Momentum: Ans: See Q.no.4 short Question<br />
                            iii) Force: Ans: See Q.no.2 short Question<br />
                            iv) Force of friction: Ans: See no. Long Question<br />
                            v) Centripetal force: Ans: See Q, on. 22 short Question
                        </AccordionContent>
                    </AccordionItem>

                    {/* Q.no.3.3 */}
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            Q.no.3.3 Differentiate between Mass and Weight.
                        </AccordionTrigger>
                        <AccordionContent>
                            Mass of a body is the quantity of matter possessed by the body. It is a scalar quantity. It is measured by physical balance. It remains the same everywhere. It does not change with change of place. Unit of mass is kilogram (Kg). It is a base quantity. It can be calculated by using the formula F = ma.<br /><br />
                            The weight of the body is equal to the force with which earth attracts it. It is a vector quantity and is directed toward the center of the earth. It is measured by spring balance. It does not remain the same at all places because the value of 'g' does not remain the same at all places. Unit of weight is Newton (N). It is a derived quantity. It can be calculated by using the formula W = mg.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Q.no.3.4 */}
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            Q.no.3.4 What is the difference between action and reaction?
                        </AccordionTrigger>
                        <AccordionContent>
                            Action is the applied force while the reaction is produced due to the action force. Both forces are equal in magnitude but opposite in direction. They act on two different bodies.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Q.no.3.5 */}
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            Q.no.3.5 What is the law of inertia?
                        </AccordionTrigger>
                        <AccordionContent>
                            Ans: Newton's first law of motion is also called the law of inertia because inertia is the characteristic of a body which resists any change in its state of rest or uniform motion.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Q.no.3.6 */}
                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            Q.no.3.6 Why is it dangerous to travel on the roof of a bus?
                        </AccordionTrigger>
                        <AccordionContent>
                            Ans: The friction or drag force due to air acting on the upper part of the body of a person standing on the roof of a running bus tries to turn over, which is dangerous, while the lower part of the body is at rest with respect to the roof of the bus.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Q.no.3.7 */}
                    <AccordionItem value="item-6">
                        <AccordionTrigger>
                            Q.no.3.7 Why does a passenger move outward when a bus takes a turn?
                        </AccordionTrigger>
                        <AccordionContent>
                            Ans: When the bus is taking a turn, it is moving in a circular path. So, passengers sitting inside the bus experience the centrifugal force as the reaction of the centripetal force of the bus moving in the circular path.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Q.no.3.8 */}
                    <AccordionItem value="item-7">
                        <AccordionTrigger>
                            Q.no.3.8 How can you relate a force with the change of momentum of a body?
                        </AccordionTrigger>
                        <AccordionContent>
                            Ans: See Q.00.0 Long Question
                        </AccordionContent>
                    </AccordionItem>

                    {/* Q.no.3.9 */}
                    <AccordionItem value="item-8">
                        <AccordionTrigger>
                            Q.no.3.9 What will be the tension in a rope that is pulled from its ends by two opposite forces 100 N each?
                        </AccordionTrigger>
                        <AccordionContent>
                            Ans: The tension in a rope that is pulled from its ends by two opposite forces 100 N each will be 100 N.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Q.no.3.10 */}
                    <AccordionItem value="item-9">
                        <AccordionTrigger>
                            Q.no.3.10 Action and reaction are always equal and opposite; then how does a body move?
                        </AccordionTrigger>
                        <AccordionContent>
                            Ans: Action and reaction are equal in magnitude but opposite in direction. Action and reaction do not act on the same body. Action is applied to one body, due to which an equal and opposite reaction is acting on another body. Both of these do not neutralize each other, due to which the body moves.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Q.no.3.11 */}
                    <AccordionItem value="item-10">
                        <AccordionTrigger>
                            Q.no.3.11 A horse pushes the cart. If the action and reaction are equal and opposite, then how does the cart move?
                        </AccordionTrigger>
                        <AccordionContent>
                            Ans: The horse applies action on the road by his feet. The reaction is given by the road on the horse, due to which the horse moves. The cart which is tied with the horse will also move.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Q.no.3.12 */}
                    <AccordionItem value="item-11">
                        <AccordionTrigger>
                            Q.no.3.12 What is the law of conservation of momentum?
                        </AccordionTrigger>
                        <AccordionContent>
                            Ans: The momentum of an isolated system of two or more interacting bodies remains constant. An isolated system is a group of interacting bodies on which no external force is acting. If no unbalanced or net force acts on a system, then its momentum remains constant.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Q.no.3.13 */}
                    <AccordionItem value="item-12">
                        <AccordionTrigger>
                            Q.no.3.13 Why is the law of conservation of momentum important?
                        </AccordionTrigger>
                        <AccordionContent>
                            Ans: With the help of the law of conservation of momentum, it is possible to calculate force, velocity, and acceleration of a body. Many elementary particles are discovered by using the law of conservation of momentum.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Q.no.3.14 */}
                    <AccordionItem value="item-13">
                        <AccordionTrigger>
                            Q.no.3.14 When a gun is fired, it recoils. Why?
                        </AccordionTrigger>
                        <AccordionContent>
                            Ans: The total momentum of the gun and the bullet is zero before firing. When the gun is fired, the bullet moves in the forward direction and the gun recoils so that the total momentum after firing also becomes zero according to the law of conservation of momentum.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Q.no.3.15 */}
                    <AccordionItem value="item-14">
                        <AccordionTrigger>
                            Q.no.3.15 Describe two situations in which the force of friction is needed.
                        </AccordionTrigger>
                        <AccordionContent>
                            (i) We cannot write if there would be no friction between paper and the pencil.<br />
                            (ii) Friction enables us to walk on the ground. We cannot run on a slippery ground. A slippery ground offers very little friction.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Q.no.3.16 */}
                    <AccordionItem value="item-15">
                        <AccordionTrigger>
                            Q.no.3.16 How does oiling the moving parts of a machine lower friction?
                        </AccordionTrigger>
                        <AccordionContent>
                            Ans: As the friction of liquids is less than the friction of solids, oiling the moving parts of the machines lowers the friction.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Q.no.3.17 */}
                    <AccordionItem value="item-16">
                        <AccordionTrigger>
                            Q.no.3.17 Describe ways to reduce friction.
                        </AccordionTrigger>
                        <AccordionContent>
                            Ans: The friction can be reduced by:<br />
                            - Making the sliding friction smooth.<br />
                            - Making the fast-moving object a streamline shape (fish shape) such as a car, airplane, etc. This causes the smooth flow of air and thus minimizes air resistance at high speeds.<br />
                            - Lubricating the sliding surfaces.<br />
                            - Using ball bearings or roller bearings, because rolling friction is much smaller than sliding friction.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Q.no.3.18 */}
                    <AccordionItem value="item-17">
                        <AccordionTrigger>
                            Q.no.3.18 Why does the vehicle stop when the engine is switched off?
                        </AccordionTrigger>
                        <AccordionContent>
                            Ans: A vehicle stops when the engine is switched off because there is no force to keep it moving except the force of friction, which opposes its motion.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Q.no.3.19 */}
                    <AccordionItem value="item-18">
                        <AccordionTrigger>
                            Q.no.3.19 Can the coefficient of friction be greater than 1?
                        </AccordionTrigger>
                        <AccordionContent>
                            Ans: Yes, the coefficient of friction can be greater than 1. For example, when a brick is lying on a brick surface, then the value of the coefficient of friction will be greater than 1.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Q.no.3.20 */}
                    <AccordionItem value="item-19">
                        <AccordionTrigger>
                            Q.no.3.20 Why is the stopping distance of a fast-moving vehicle much more than a vehicle moving at a lower speed?
                        </AccordionTrigger>
                        <AccordionContent>
                            Ans: The stopping distance depends on the square of the speed. If the speed of a vehicle is doubled, then its stopping distance becomes four times. Therefore, the stopping distance of a fast-moving vehicle is much more than that of a vehicle moving at a lower speed.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};

export default Page;
