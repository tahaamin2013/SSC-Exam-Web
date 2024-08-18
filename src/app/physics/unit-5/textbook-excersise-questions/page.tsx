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
                TextBook Exercise Questions
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>7.1 Encircle the correct answer from the given choices.</AccordionTrigger>
                        <AccordionContent>
                            <p>In which of the following state, molecules do not leave their position:</p>
                            <ul>
                                <li>a) Solid</li>
                                <li>b) Liquid</li>
                                <li>c) Gas</li>
                                <li>d) Plasma</li>
                            </ul>
                            <p>Which of the substances is the lightest one?</p>
                            <ul>
                                <li>a) Copper</li>
                                <li>b) Mercury</li>
                                <li>c) Aluminum</li>
                                <li>d) Lead</li>
                            </ul>
                            <p>SI unit of pressure is Pascal, which is equal to:</p>
                            <ul>
                                <li>a) 10 Nm²</li>
                                <li>b) 1 Nm²</li>
                                <li>c) 102 Nm²</li>
                                <li>d) 10 Nm²</li>
                            </ul>
                            <p>What should be the approximate length of a glass tube to construct a water barometer?</p>
                            <ul>
                                <li>a) 0.5 m</li>
                                <li>b) 1 m</li>
                                <li>c) 2.5 m</li>
                                <li>d) 11 m</li>
                            </ul>
                            <p>According to Archimedes, upthrust is equal to:</p>
                            <ul>
                                <li>a) Weight of displaced body</li>
                                <li>b) Volume of displaced body</li>
                                <li>c) Mass of displaced liquid</li>
                                <li>d) None of these</li>
                            </ul>
                            <p>The density of a substance can be found with the help of:</p>
                            <ul>
                                <li>a) Pascal&apos;s law</li>
                                <li>b) Hooke&apos;s law</li>
                                <li>c) Archimedes principle</li>
                                <li>d) Principle of floatation</li>
                            </ul>
                            <p>According to Hooke&apos;s law:</p>
                            <ul>
                                <li>a) Stress x strain = constant</li>
                                <li>b) Stress/strain constant</li>
                                <li>c) Strain/stress constant</li>
                                <li>d) Stress strain</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>7.2 How is the kinetic molecular model differentiating various states of matter?</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: See Q. 1-Long Question</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>7.3 Does there exist a fourth state of matter? What is that?</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: Yes, there exists a fourth state of matter called Plasma. At very high temperature, atoms lose their electrons and become positive ions. This ionic state of matter consisting of ions and electrons is called plasma.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>7.4 What is meant by density? What is its SI unit?</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: Density of a substance is defined as its mass per unit volume. SI unit of density is kilogram per cubic meter (kg/m³).</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>7.5 Can we use a hydrometer to measure the density of milk?</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: Hydrometer is a device which is used to measure the density of liquids. So it can be used to measure the density of milk.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>7.6 Define the term pressure.</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: The force acting normally per unit area on the surface of a body is called pressure. Thus, P = Force / Area. Pressure is a scalar quantity. In SI units, the unit of pressure is N/m² also called Pascal (Pa).</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger>7.7 Show that atmosphere exerts pressure.</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: The atmosphere of Earth consists of gases, vapors, and dust particles. All these are material particles. Due to the force of gravity, these particles exert pressure. So any object inside the atmosphere experiences pressure which is called atmospheric pressure.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-8">
                        <AccordionTrigger>7.8 It is easy to remove air from a balloon but it is very difficult to remove air from a glass bottle. Why?</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: Because the atmospheric pressure acts more easily on a balloon as compared to a glass bottle, so emptying air is easier from a balloon than a glass bottle.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-9">
                        <AccordionTrigger>7.9 What is a barometer?</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: The instrument used to measure atmospheric pressure is called a barometer. One of the simple barometers is a mercury barometer. It consists of a glass tube 1 m long closed at one end.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-10">
                        <AccordionTrigger>7.10 Why is water not suitable to be used in a barometer?</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: Mercury is 13.6 times denser than water. Atmospheric pressure can hold a vertical column of water about 13.6 times the height of a mercury column at a place. Thus, at sea level, the vertical height of a water column would be 0.76 m x 13.6 = 10.34 m. Thus, a glass tube more than 10 m long is required to make a water barometer.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-11">
                        <AccordionTrigger>7.11 What makes a sucker pressed on a smooth wall stick to it?</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: When a sucker is pressed on a smooth surface, the air pressure below it becomes very small (due to the displaced air) as compared to the air pressure above it. Therefore, it sticks to the smooth surface.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-12">
                        <AccordionTrigger>7.12 Why does the atmospheric pressure vary with height?</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: As we go higher in the atmosphere, the density of the air becomes lower. Due to this reason, atmospheric pressure decreases as we go higher.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-13">
                        <AccordionTrigger>7.13 What does it mean when the atmospheric pressure at a place falls suddenly?</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: A sudden fall in atmospheric pressure is often followed by a storm, rain, and typhoon to occur in a few hours&apos; time.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-14">
                        <AccordionTrigger>7.14 What changes are exposed in weather if the barometer reading shows a sudden increase?</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: A sudden increase in atmospheric pressure often indicates that it will soon be followed by a decrease in the atmospheric pressure, suggesting poor weather ahead.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-15">
                        <AccordionTrigger>7.15 State Pascal&apos;s law.</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: Pressure applied at any point of a liquid enclosed in a container is transmitted without loss to all other parts of the liquid.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-16">
                        <AccordionTrigger>7.16 Explain the working of a hydraulic press.</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: See Q.6 Long Question</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-17">
                        <AccordionTrigger>7.17 What is meant by elasticity?</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: The property of matter by virtue of which matter resists any force which tries to change its length, shape, or volume is called elasticity.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-18">
                        <AccordionTrigger>7.18 State Archimedes&apos; principle.</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: When an object is totally or partially immersed in a liquid, an upthrust acts on it equal to the weight of the liquid it displaces.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-19">
                        <AccordionTrigger>7.19 What is upthrust? Explain the principle of flotation.</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: See Q. 8 & 10 Long Questions</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-20">
                        <AccordionTrigger>7.20 Explain how a submarine moves up to the water surface and down into the water.</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: See Q. 10 Long Question</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-21">
                        <AccordionTrigger>7.21 Why does a piece of stone sink in water but a ship with huge weights float?</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: The upthrust force on a stone is much smaller than its weight because the weight of the water displaced under the stone is very small. While ships are designed in such a way that the weight of the water displaced by them is greater than their weight. So, the upthrust force in the case of ships is greater than their weight. Hence, ships float on the surface of the water.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-22">
                        <AccordionTrigger>7.22 What is Hooke&apos;s law? What is meant by the elastic limit?</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: Hooke&apos;s Law: The strain produced in a body by the stress applied to it is directly proportional to the stress within the elastic limit of the body.</p>
                            <p>Elastic Limit: It is the limit within which a body recovers its original length, volume, or shape after the deforming force is removed. When a body crosses this limit, it is permanently deformed and unable to restore its original state after the stress is removed.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-23">
                        <AccordionTrigger>7.23 Take a rubber band. Construct a balance of your own using a rubber band. Check its accuracy by weighing various objects.</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: Take a rubber band and hang it with a hook. Then, attach a pointer at the lower end of it with a scale in front of the pointer. Different known weights are suspended one by one at the lower end of the rubber band. Mark the pointer positions for each known weight. This is called calibration of the scale for weight measurements, making a balance for weight measurement.</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};

export default Page;
