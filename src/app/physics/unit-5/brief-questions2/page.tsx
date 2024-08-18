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
                Brief Questions and Answers (3 marks each)
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Q.1 What is Kinetic molecular theory? Write down its postulates.</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: Most of the properties of solids, liquids, and gases can be explained on the basis of the intermolecular forces. Kinetic molecular model has some important features:</p>
                            <ul>
                                <li>Matter is made up of particles called molecules.</li>
                                <li>The molecules remain in continuous motion. The motion of molecules could be linear, vibrational, or rotational.</li>
                                <li>The molecules attract each other.</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Q.2 What is plasma?</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: The kinetic energy of gas molecules goes on increasing if a gas is heated continuously. This causes the gas molecules to move faster and faster. The collisions between atoms and molecules of the gas become so strong that they tear off the atoms. Atoms lose their electrons and become positive ions. This ionic state of matter is called plasma.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Q.3 What do you know about density?</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: Density of a substance is defined as its mass per unit volume.</p>
                            <p>Density = Mass / Volume</p>
                            <p>SI unit of Density is kilogram per cubic meter (kg/m³).</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Q.4 Define pressure and write down its unit.</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: The force acting normally per unit area on the surface of a body is called pressure.</p>
                            <p>Pressure = Force / Area</p>
                            <p>Pressure is a scalar quantity. In SI units, the unit of pressure is Newton per square meter (N/m²), also called Pascal (Pa).</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>Q.5 Define pressure in liquids.</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: Liquids exert pressure in all directions. If we take a pressure sensor inside a liquid, the pressure of the liquid varies with the depth of the sensor.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>Q.6 State Pascal&apos;s Law.</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: Pressure applied at any point of a liquid enclosed in a container is transmitted without loss to all other parts of the liquid. An external force applied on the surface of a liquid increases the liquid pressure at the surface, and this increase is transmitted equally in all directions and to the walls of the container.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger>Q.7 Explain the braking system of vehicles.</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: The brakes of cars, buses, etc., work on the principle of Pascal&apos;s law. When the brake pedal is pushed, it exerts pressure on the master cylinder, increasing the liquid pressure in the cylinder. This pressure is transmitted equally through the liquid in the metal pipes. Due to the increased pressure, the pistons in the cylinder move outward, pressing the brake pads against the brake drums. The force of friction between the brake pads and the brake drum stops the wheels.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-8">
                        <AccordionTrigger>Q.8 State Archimedes Principle.</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: When an object is totally or partially immersed in a liquid, an upthrust acts on it equal to the weight of the liquid it displaces.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-9">
                        <AccordionTrigger>Q.9 Define the principle of floatation.</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: A floating object displaces a fluid having a weight equal to the weight of the object.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-10">
                        <AccordionTrigger>Q.10 What is atmospheric pressure?</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: The earth is surrounded by a cover of air called the atmosphere. It extends a few hundred kilometers above sea level. Just as certain sea creatures live at the bottom of the ocean, we live at the bottom of a huge ocean of air. Air is a mixture of gases, and its density decreases continuously as we go higher above sea level.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-11">
                        <AccordionTrigger>Q.11 What is a barometer?</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: Instruments that measure atmospheric pressure are called barometers. One of the simplest barometers is a mercury barometer. It consists of a glass tube about 1 meter long, closed at one end.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-12">
                        <AccordionTrigger>Q.12 Why is mercury used in barometers instead of water?</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: Mercury is 13.6 times denser than water. Atmospheric pressure can hold a vertical column of water that is about 13.6 times the height of a mercury column. Therefore, at sea level, the vertical height of a water column would be 0.76 m x 13.6 = 10.34 m. Thus, a glass tube more than 11 meters long would be required to make a water barometer.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-13">
                        <AccordionTrigger>Q.13 What weather changes can be expected due to a decrease in atmospheric pressure?</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: A gradual and average drop in atmospheric pressure indicates low pressure in a neighboring locality. A minor but rapid fall in atmospheric pressure indicates windy and showery conditions nearby. A sudden fall in atmospheric pressure is often followed by a storm, rain, and typhoon within a few hours.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-14">
                        <AccordionTrigger>Q.14 What weather changes can be expected due to an increase in atmospheric pressure?</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: An increasing atmospheric pressure with a subsequent decline predicts intense weather conditions. A gradual large increase in atmospheric pressure indicates a long spell of pleasant weather. A rapid increase in atmospheric pressure often signals a forthcoming decrease, indicating poor weather ahead.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-15">
                        <AccordionTrigger>Q.15 What is elasticity?</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: The property of a body to restore its original size and shape as the deforming force ceases to act is called elasticity.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-16">
                        <AccordionTrigger>Q.16 What is stress?</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: The force that acts on unit area at the surface of a body and thus changes its shape or size is called stress.</p>
                            <p>Stress = Force / Area</p>
                            <p>In the International System of Units, the unit of stress is Newton per square meter (N/m²).</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-17">
                        <AccordionTrigger>Q.17 What is strain?</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: Strain is the change in shape, length, or volume of an object due to stress, compared to its original dimensions.</p>
                            <p>Tensile Strain = Change in Length / Original Length</p>
                            <p>As strain is a ratio of similar quantities, it has no unit.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-18">
                        <AccordionTrigger>Q.18 What is Hooke&apos;s Law?</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: The strain produced in a body by the stress applied to it is directly proportional to the stress within the elastic limit of the body.</p>
                            <p>Stress ∝ Strain</p>
                            <p>Or Stress = Constant x Strain</p>
                            <p>Hooke&apos;s law is applicable to all kinds of deformation and types of matter (solids, liquids, or gases) within certain limits.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-19">
                        <AccordionTrigger>Q.19 Define Young&apos;s Modulus.</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: Young&apos;s Modulus is the ratio of stress to strain within the elastic limit. It is a constant for a given material.</p>
                            <p>SI unit of Young&apos;s Modulus is Newton per square meter (N/m²).</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-20">
                        <AccordionTrigger>Q.20 What is the elastic limit?</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: The elastic limit is the maximum stress that a material can withstand while still returning to its original shape when the stress is removed. Beyond this limit, the material does not return to its initial state.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-21">
                        <AccordionTrigger>Q.21 What are elastic materials? Give some examples.</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: An object is said to be elastic if it restores its original size and shape after the external force ceases to act. Examples include rubber, plastic, nylon, and iron.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-22">
                        <AccordionTrigger>Q.22 How is the property of elasticity used in our body?</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: Our body muscles are elastic, allowing them to expand and contract. This elasticity is crucial for various bodily actions and movements.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-23">
                        <AccordionTrigger>Q.23 Prove that the SI unit of Young&apos;s modulus is Pascal or N/m².</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: Pressure is defined as Force / Area, with SI unit of pressure being Pascal (Pa) or Newton per square meter (N/m²). Since Young&apos;s Modulus is the ratio of stress to strain, and stress has the same units as pressure, its unit is also Pascal (Pa) or N/m².</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-24">
                        <AccordionTrigger>Q.24 Prove that liquid pressure does not depend upon the mass of the liquid.</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: Liquid pressure is given by P = ρgh, where ρ is the density, g is the acceleration due to gravit    y, and h is the height of the liquid column. This formula shows that pressure depends on height and density but not on the total mass of the liquid.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-25">
                        <AccordionTrigger>Q.25 Under what condition does an object float in water?</AccordionTrigger>
                        <AccordionContent>
                            <p>Ans: An object floats in water when the buoyant force is equal to the weight of the object. If the buoyant force (upward force) is greater than the object&apos;s weight, it will float, and some part of the object will be above the water surface to balance the forces.</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};

export default Page;
