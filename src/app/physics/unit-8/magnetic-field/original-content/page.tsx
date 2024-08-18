import React from 'react';

const MagnetismContent = () => {
    return (
        <section id="Magnetism" className="border mt-4 max-w-4xl mx-auto text-sm text-left sm:text-md mb-4 p-6">
            <h1 className="font-bold text-3xl text-center mb-4">Magnetism - UNIT 8</h1>

            <h2 className="font-bold text-2xl mb-4">8.2 MAGNETIC FIELD</h2>
            <p className="mb-4">
                Mono-pole never exist in magnets, magnets are always bipolar i.e. they have two poles N-pole and S-pole. Every magnet has a space around it where it has its influence on other magnets in the form of attraction or repulsion.
            </p>
            <blockquote className="mb-4">
                &quot;The region or space around a magnet where it exerts a force on other magnetic poles is called magnetic field.&quot;
            </blockquote>
            <p className="mb-4">
                The intensity of magnetic field (B) at any point in the field can be measured in the unit called tesla (T). Graphically the magnetic field is represented by the field lines. The direction of the magnetic field of a material at any point can be found by the direction of force acting on the N-pole placed at that point. Magnetic field lines are curved in general, hence the direction of magnetic field on a point at such a curved line can be found by drawing a tangent at that point.
            </p>

            <h3 className="font-bold text-xl mb-4">INFORMATION</h3>
            <p className="mb-4">
                Magnetic field (B) of a wire carrying a current (I) can be found by placing iron filling around the wire. We get the magnetic field of current carrying wire as the concentric circles having centers in the wire. The direction of such field can be found by using right hand rule. Hold the current carrying wire in your right hand, the fingers will curve in the direction of magnetic field.
            </p>

            <h3 className="font-bold text-xl mb-4">8.2.1 Magnetic Field of a Bar Magnet</h3>
            <p className="mb-4">
                A bar magnet is a rectangular part of a material which shows permanent magnetic properties. The magnetic field of a bar magnet can be found by placing the magnet on a plane sheet such that it has compass needles around it. You will notice that all the compass needles point in a particular manner, which shows the magnetic field pattern of the bar magnet, as shown in figure 8.4.
            </p>
            <p className="mb-4">
                The field lines originate from N-pole and terminate at S-pole, while within the body of magnet these lines travel from S-pole to N-pole. This pattern of magnetic field of a bar magnet can also be found by putting the iron fillings around a bar magnet instead of compass needles. The iron filling arrange them in the same pattern as that of compass needle as shown in figure 8.5 (a) and 8.5 (b).
            </p>

            <h3 className="font-bold text-xl mb-4">8.2.2 Direction of Magnetic Field at a Point</h3>
            <p className="mb-4">
                The magnetic field is the map that we use to describe how the magnetic force is distributed in the space around a magnetic material or magnet and even within a magnetic material or magnet. To find the magnetic field at a point due to some magnet, is determined by placing a north-pole at that point, the force experienced by the north-pole will be the strength of magnetic field at that point. As when we put a test north-pole near the north-pole of material, it repels the test north-pole away from it showing the direction of north-pole of material as outward. The magnetic force is determined by the movement of test magnet as shown in figure 8.6.
            </p>

            <h3 className="font-bold text-xl mb-4">8.2.3 Relative Strength of Magnetic Field</h3>
            <p className="mb-4">
                The strength of magnetic field at any point due to a magnetic pole can be found by the field lines. The field is stronger where the field lines are closer, while the field is weaker where the field lines are farther apart.
            </p>
            <blockquote className="mb-4">
                &quot;The relative strength of a magnetic field is the degree of closeness of the field lines.&quot;
            </blockquote>
            <p className="mb-4">
                Hence magnetic field lines give the direction and the strength of magnetic field. The relative strength of magnetic field due to like poles and unlike poles is shown in figure 8.7. By placing two N-poles close to each other we can decrease the field similarly by placing N-pole near an S-pole we can make magnetic field strengthen.
            </p>

            <h3 className="font-bold text-xl mb-4">8.2.4 Magnetic Shielding</h3>
            <p className="mb-4">
                There may be different orientation of magnetic field by suitably adjusting the magnets. We can find a field-free region called &apos;neutral zone&apos; by placing two N-poles side by side, such that their field lines seem to repel each other by making a field-free region, this phenomenon is called shielding of magnetic field. In daily life we deal with a lot of devices which have to work in strong magnetic environment but this external magnetic field can alter the functioning of the device. So we have to shield the device from external magnetic field.
            </p>
            <blockquote className="mb-4">
                &quot;Materials used for magnetic shielding are called shields. These materials are used for protecting sensitive circuits from unwanted parasitic magnetic fields including power inverters, magnetic immunity, magnetic sensors and EMI. The commonly used materials as shield are Iron, Nickel and Cobalt. Shields are usually made rounded corners because it is difficult for magnetic field lines to turn an angle of 90°.&quot;
            </blockquote>
        </section>
    );
};

export default MagnetismContent;
