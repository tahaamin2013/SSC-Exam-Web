import React from 'react';

const MagnetismContent = () => {
    return (
        <section id="Magnetism" className="border mt-4 max-w-4xl mx-auto text-sm text-left sm:text-md mb-4 p-6">
            <h1 className="font-bold text-3xl text-center mb-4">Magnetism - UNIT 8</h1>
            <p className="mb-4">
                Magnetism finds its history to times back to the 600 BC, when the early loadstone, attracting the iron was found in the region of Magnesia, from where it takes the name &apos;magnet&apos;. Though it dates long ago but man begun to understand magnetism in the twentieth century and started developing technologies on this understanding. Magnetism arises due to motion of charge particles like electrons moving around the nucleus in the atoms and charges moving in the wires in the form of electric current. Now a day we have a lot of technological applications of magnets and magnetism.
            </p>

            <h2 className="font-bold text-2xl mb-4">8.1 DOMAIN THEORY OF MAGNETISM</h2>
            <p className="mb-4">
                As we know everything around us is made up of atoms, having massive central body with positive charge known as nucleus and light particles with negative charge called electrons orbit around the nucleus. In late twentieth century we found that the basis of magnetism is the motion of charge particles. Electrons (charged particles) move around the nucleus in all atoms producing magnetism.
            </p>
            <p className="mb-4">
                So for a single atom each electron produces a small amount of magnetism as shown in figure 8.1. For a single electron loop a tiny magnet is produced which has two poles called the north-pole (N pole) and the south-pole (S pole). Spinning nucleus also produces some amount of magnetic field but that is negligibly small and the spin motion of electron also produces a tiny magnetism, hence we take the magnetic field of atoms only due to orbital motion of electrons. In some atoms electrons are so oriented that they may add up their magnetic field to make the atom with net non-zero magnetic field, which makes the whole material as magnetic material.
            </p>
            <p className="mb-4">
                In a sizeable piece of a material a group of atoms having parallel magnetic field make a &apos;domain&apos; (of roughly 10<sup>12</sup> atoms and a size of few mm). In unmagnetized material the domains are randomly oriented while in a magnetized material (a material can be magnetized by placing it in external magnetic field) the domains are aligned, as shown in figure 8.2.
            </p>

            <h3 className="font-bold text-xl mb-4">8.1.1 Force between magnetic poles:</h3>
            <p className="mb-4">
                As we seen above that a magnet, how small it may be, have an S-pole and N-pole. In magnets like poles repel each other while unlike poles attract each other. Similarly the materials which have magnetism are attracted by the opposite poles of a magnet. A magnetic material can also attract opposite poles of other magnetic materials as shown in figure 8.3.
            </p>
        </section>
    );
};

export default MagnetismContent;
