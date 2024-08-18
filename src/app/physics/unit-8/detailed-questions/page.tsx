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
            className="border mt-4 max-w-2xl mx-auto text-sm text-left sm:text-md mb-4 p-6 bg-gradient-blue text-white"
        >
            <h1 className="font-bold text-3xl text-center mb-4">
                Detailed Questions Problem Solving (8 mark each)
            </h1>
            <div className="grid grid-cols-1 text-left gap-x-8 w-full">
                <Accordion type="single" collapsible>
                    {/* Question 1 */}
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="bg-primary-bg text-white font-semibold rounded-md p-2 mb-1">
                            1. Define and explain magnetism.
                        </AccordionTrigger>
                        <AccordionContent className="bg-white text-black rounded-md p-4 shadow-custom">
                            Magnetism is a physical phenomenon produced by the motion of electric charge, which results in attractive and repulsive forces between objects. It is a fundamental force in nature, characterized by magnetic fields that are produced by moving charges or magnetic materials. These fields exert forces on other magnetic materials or moving charges. Magnetism is closely related to electricity, and together they are described by the theory of electromagnetism.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 2 */}
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="bg-primary-bg text-white font-semibold rounded-md p-2 mb-1">
                            2. What is the domain theory of magnetism? Explain.
                        </AccordionTrigger>
                        <AccordionContent className="bg-white text-black rounded-md p-4 shadow-custom">
                            The domain theory of magnetism explains that ferromagnetic materials are composed of small regions called domains. Within each domain, the magnetic moments of atoms are aligned in the same direction. When a ferromagnetic material is not magnetized, these domains are oriented randomly, causing the material to have no net magnetic field. When the material is magnetized, the domains align in a common direction, resulting in a strong net magnetic field. This theory helps explain why some materials can retain their magnetic properties even after the external magnetic field is removed.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 3 */}
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="bg-primary-bg text-white font-semibold rounded-md p-2 mb-1">
                            3. Explain magnetic field strength and magnetic shielding.
                        </AccordionTrigger>
                        <AccordionContent className="bg-white text-black rounded-md p-4 shadow-custom">
                            Magnetic field strength, also known as magnetic intensity, is a measure of the force exerted by a magnetic field on a unit magnetic pole. It is represented by the symbol H and is measured in amperes per meter (A/m). The strength of a magnetic field depends on the source of the magnetic field and the distance from it.
                            <br />
                            Magnetic shielding refers to the process of reducing or blocking the effects of a magnetic field within a certain region. This can be achieved by using materials that absorb or redirect magnetic field lines. Common shielding materials include soft iron and mu-metal. Magnetic shielding is used in various applications to protect sensitive electronic equipment from external magnetic interference.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 4 */}
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="bg-primary-bg text-white font-semibold rounded-md p-2 mb-1">
                            4. Explain the magnetic field of a bar magnet and that of a solenoid, also compare them.
                        </AccordionTrigger>
                        <AccordionContent className="bg-white text-black rounded-md p-4 shadow-custom">
                            A bar magnet generates a magnetic field that forms closed loops from its north pole to its south pole. The field lines are denser near the poles and more spread out away from the poles, indicating stronger magnetic fields near the poles.
                            <br />
                            A solenoid is a coil of wire that produces a magnetic field when an electric current passes through it. The magnetic field of a solenoid is similar to that of a bar magnet, with a well-defined north and south pole. However, the field lines inside a solenoid are parallel and uniform, which makes the magnetic field stronger and more concentrated inside the coil compared to the bar magnet.
                            <br />
                            **Comparison:** The bar magnet has a natural magnetic field with poles at the ends, while the solenoid&apos;s magnetic field is created by an electric current and can be controlled by adjusting the current and the number of coils. The solenoid’s magnetic field is generally more uniform and stronger in comparison to a bar magnet.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 5 */}
                    <AccordionItem value="item-5">
                        <AccordionTrigger className="bg-primary-bg text-white font-semibold rounded-md p-2 mb-1">
                            5. Define induced magnetism. Also explain some of the methods for induced magnetism.
                        </AccordionTrigger>
                        <AccordionContent className="bg-white text-black rounded-md p-4 shadow-custom">
                            Induced magnetism is the process by which a material becomes magnetized when exposed to an external magnetic field. The external field causes the magnetic domains within the material to align in the direction of the field, making the material itself act like a magnet.
                            <br />
                            Methods for inducing magnetism include:
                            <br />
                            - **Placing a material in a magnetic field:** This aligns the magnetic domains in the direction of the external field, temporarily magnetizing the material.
                            <br />
                            - **Contact with a magnet:** When a magnetic material is brought into contact with a permanent magnet, it can become magnetized.
                            <br />
                            - **Electromagnetic induction:** Passing an electric current through a coil wrapped around a material can induce magnetism in the material.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 6 */}
                    <AccordionItem value="item-6">
                        <AccordionTrigger className="bg-primary-bg text-white font-semibold rounded-md p-2 mb-1">
                            6. Differentiate between permanent and temporary magnets.
                        </AccordionTrigger>
                        <AccordionContent className="bg-white text-black rounded-md p-4 shadow-custom">
                            **Permanent Magnets:**
                            - Retain their magnetic properties for a long time, even in the absence of an external magnetic field.
                            - Made from materials like steel, cobalt, and nickel.
                            - Examples include refrigerator magnets and compasses.
                            <br />
                            **Temporary Magnets:**
                            - Exhibit magnetic properties only when exposed to an external magnetic field.
                            - Generally made from soft iron or other easily magnetized materials.
                            - Examples include electromagnets and magnetic materials used in transformers.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 7 */}
                    <AccordionItem value="item-7">
                        <AccordionTrigger className="bg-primary-bg text-white font-semibold rounded-md p-2 mb-1">
                            7. Explain some uses of electromagnets and temporary magnets.
                        </AccordionTrigger>
                        <AccordionContent className="bg-white text-black rounded-md p-4 shadow-custom">
                            **Uses of Electromagnets:**
                            - **In Electric Motors:** Electromagnets are used to create a rotating magnetic field that drives the motor.
                            - **In Magnetic Relays:** They control the switching of electrical circuits.
                            - **In MRI Machines:** Electromagnets generate strong magnetic fields used in medical imaging.
                            <br />
                            **Uses of Temporary Magnets:**
                            - **In Magnetic Lifting Devices:** Temporary magnets are used in cranes and other lifting equipment to move ferromagnetic materials.
                            - **In Transformers:** Temporary magnets are used in transformers to transfer electrical energy between circuits.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 8 */}
                    <AccordionItem value="item-8">
                        <AccordionTrigger className="bg-primary-bg text-white font-semibold rounded-md p-2 mb-1">
                            8. Explain the three types of magnetic materials.
                        </AccordionTrigger>
                        <AccordionContent className="bg-white text-black rounded-md p-4 shadow-custom">
                            **Diamagnetic Materials:**
                            - Have no net magnetic moment and are repelled by both poles of a magnet.
                            - Examples include graphite and bismuth.
                            <br />
                            **Paramagnetic Materials:**
                            - Have a small and temporary magnetic moment that aligns with an external magnetic field.
                            - Examples include aluminum and platinum.
                            <br />
                            **Ferromagnetic Materials:**
                            - Have a large and permanent magnetic moment, with magnetic domains aligning in the direction of the external field.
                            - Examples include iron, cobalt, and nickel.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 9 */}
                    <AccordionItem value="item-9">
                        <AccordionTrigger className="bg-primary-bg text-white font-semibold rounded-md p-2 mb-1">
                            9. Explain the Earth&apos;s magnetic field. Also relate Earth&apos;s geographical and magnetic poles.
                        </AccordionTrigger>
                        <AccordionContent className="bg-white text-black rounded-md p-4 shadow-custom">
                            The Earth&apos;s magnetic field is a geomagnetic field that extends from the Earth&apos;s interior out into space. It is generated by the motion of molten iron and other metals in the Earth&apos;s outer core. The magnetic field protects the Earth from solar wind and cosmic radiation.
                            <br />
                            **Geographical Poles vs. Magnetic Poles:**
                            - **Geographical Poles:** These are the points where the Earth&apos;s axis of rotation intersects the Earth&apos;s surface.
                            - **Magnetic Poles:** These are the points where the Earth&apos;s magnetic field is strongest. They do not align perfectly with the geographical poles and move over time due to changes in the Earth&apos;s magnetic field.
                        </AccordionContent>
                    </AccordionItem>

                    {/* Question 10 */}
                    <AccordionItem value="item-10">
                        <AccordionTrigger className="bg-primary-bg text-white font-semibold rounded-md p-2 mb-1">
                            10. Explain how birds and other migrating animals use Earth&apos;s magnetic field to navigate.
                        </AccordionTrigger>
                        <AccordionContent className="bg-white text-black rounded-md p-4 shadow-custom">
                            Birds and other migrating animals use the Earth&apos;s magnetic field to navigate during migration. They possess specialized cells or structures that detect the Earth&apos;s magnetic field and help them determine their position and direction. This ability, known as magnetoreception, allows these animals to orient themselves and follow specific migratory routes over long distances, even in the absence of visual cues.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};

export default QuestionDashboard;
