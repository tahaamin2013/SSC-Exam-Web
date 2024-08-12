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
                Brief Questions and Answers  (3 marks each)
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            When a motor cyclist hit a stationary car, he may fly off the motor cycle and driver in the car may get neck injury. Explain
                        </AccordionTrigger>
                        <AccordionContent>
                            When a motor cyclist hits a stationary car, the motor cyclist experiences a sudden deceleration, causing him to fly off due to inertia. The driver in the car may suffer neck injuries due to the sudden impact and whiplash effect.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            In autumn, when you shake a branch, the leaves are detached. Why?
                        </AccordionTrigger>
                        <AccordionContent>
                            In autumn, leaves are detached from branches when shaken due to reduced friction and weakened attachment caused by natural processes like the drop in temperature and reduced sap flow.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            Why it is not safe to apply brakes only on the front wheel of a bicycle?
                        </AccordionTrigger>
                        <AccordionContent>
                            Applying brakes only on the front wheel can cause the bicycle to tip forward or skid, leading to loss of control. Balanced braking on both wheels provides stability and control.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            Deduce Newton&apos;s first law of motion from Newton&apos;s second law of motion.
                        </AccordionTrigger>
                        <AccordionContent>
                            Newton&apos;s first law states that an object will remain at rest or in uniform motion unless acted upon by an external force. This is a special case of Newton&apos;s second law (F = ma), where if F = 0, the acceleration a = 0, meaning the object remains in its current state.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            Action and reaction are equal but opposite in direction. These forces always act in pair. Do they balance each other? Can bodies move under action-reaction pair?
                        </AccordionTrigger>
                        <AccordionContent>
                            Action and reaction forces do not balance each other because they act on different bodies. Bodies can move under the action-reaction pair because each force affects a different object.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6">
                        <AccordionTrigger>
                            A man slips on the oily floor; he wants to move out of this area. He is alone. He throws his bag to move out of this slippery area. Why is it so?
                        </AccordionTrigger>
                        <AccordionContent>
                            By throwing the bag, the man exerts a force on the bag, and due to Newton&apos;s third law, the bag exerts an equal and opposite force on him. This reaction force helps him gain momentum in the opposite direction, assisting him in moving out of the slippery area.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-7">
                        <AccordionTrigger>
                            How would you use Newton&apos;s 3rd law of motion and law of conservation of momentum to explain motion of rocket?
                        </AccordionTrigger>
                        <AccordionContent>
                            A rocket&apos;s motion is explained by Newton&apos;s third law of motion: the rocket expels gas backward, and the gas exerts an equal and opposite force, propelling the rocket forward. The law of conservation of momentum ensures that the total momentum before and after the gas is expelled remains constant.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-8">
                        <AccordionTrigger>
                            Why are cricket batter gloves padded with foam?
                        </AccordionTrigger>
                        <AccordionContent>
                            Cricket batter gloves are padded with foam to absorb and distribute the impact force from the ball, reducing the risk of injury and providing better protection for the hands.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-9">
                        <AccordionTrigger>
                            Where will your weight be greater, near earth or near moon? What about mass?
                        </AccordionTrigger>
                        <AccordionContent>
                            Your weight will be greater near the Earth due to its stronger gravitational pull compared to the Moon. Mass remains constant regardless of location; it is the amount of matter in your body.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-10">
                        <AccordionTrigger>
                            When Ronaldo kicks the ball, at the highest point of ball both Earth and ball attract each other with the same magnitude of force. Why then the ball moves towards Earth and not the Earth?
                        </AccordionTrigger>
                        <AccordionContent>
                            The ball moves towards the Earth because the Earth&apos;s mass is much larger, so the same magnitude of force results in a much smaller acceleration for the Earth compared to the ball, causing the ball to accelerate towards the Earth.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};

export default Page;
