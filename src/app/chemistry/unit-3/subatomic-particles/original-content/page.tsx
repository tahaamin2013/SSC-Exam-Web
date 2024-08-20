// src/pages/AtomicParticles.tsx

import React from 'react';

const AtomicParticles: React.FC = () => {
    return (
        <div className="p-4">
            <section>
                <h2 className="text-3xl font-bold mb-4">3.2 Subatomic Particles</h2>
                <p className="mb-4">
                    Subatomic particles are the fundamental particles that make up atoms. The three main
                    subatomic particles are:
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>
                        <strong>Proton</strong><br />
                        Relative charge: +1<br />
                        Relative mass: Approximately 1 atomic mass unit (amu) or 1.6726 x 10<sup>-27</sup> kg
                    </li>
                    <li>
                        <strong>Neutron</strong><br />
                        Relative charge: 0 (neutral)<br />
                        Relative mass: Approximately 1 atomic mass unit (amu) or 1.6749 x 10<sup>-27</sup> kg
                    </li>
                    <li>
                        <strong>Electron</strong><br />
                        Relative charge: -1<br />
                        Relative mass: Approximately 1/1836 amu or 9.11 x 10<sup>-31</sup> kg
                    </li>
                </ul>
                <p className="mb-4">
                    Protons and neutrons are found in the nucleus of an atom, whereas electrons orbit around
                    the nucleus in energy levels or shells. They play crucial roles in determining the properties
                    and behavior of atoms and molecules. Neutrons and protons are held together in the nucleus
                    by a strong nuclear force. This force exists between neutron-neutron, proton-proton, and
                    neutron-proton.
                </p>

                <h3 className="text-2xl font-semibold mt-4 mb-2">Relationships Between Subatomic Particles</h3>
                <p className="mb-4">
                    Protons and neutrons have roughly the same mass, around 1 amu. This mass contributes significantly
                    to the total mass of the atom. Electrons have much less mass, so their contribution to the total
                    mass of an atom is usually negligible.
                </p>
                <p className="mb-4">
                    The interaction between the negatively charged electrons and positively charged protons in the
                    nucleus is what holds the atoms together.
                </p>

                <h3 className="text-2xl font-semibold mt-4 mb-2">The Behavior of Subatomic Particles in an Electric Field</h3>
                <p className="mb-4">
                    What happens when a beam of these particles passes between two electrically charged plates?
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Protons are positively charged and are deflected on a curved path toward the negative plate.</li>
                    <li>Electrons are negatively charged and are deflected on a curved path toward the positive plate.</li>
                    <li>Neutrons have no charge, go straight ahead.</li>
                </ul>
                <p className="mb-4">
                    If the electrons and protons are traveling at the same speed, the electrons being lighter are deflected
                    far more strongly than the heavier protons.
                </p>
                <figure className="mb-4">
                    <img src="/path/to/image.png" alt="Path of positively and negatively charged particles through the uniform electric field" className="w-full" />
                    <figcaption className="text-sm text-gray-600">Figure 3.3: Path of positively and negatively charged particles through the uniform electric field.</figcaption>
                </figure>

                <h3 className="text-2xl font-semibold mt-4 mb-2">Charge Neutrality</h3>
                <p className="mb-4">
                    Atoms are electrically neutral because the number of protons (positively charged) in the nucleus is
                    equal to the number of electrons (negatively charged) in the electron cloud. The charges balance each
                    other so there is no net charge on the atoms.
                </p>

                <h3 className="text-2xl font-semibold mt-4 mb-2">Radioisotopes</h3>
                <p className="mb-4">
                    Different isotopes of the same element have the same number of protons in their atomic nuclei but
                    differing numbers of neutrons. Some isotopes of an element are unstable and show radioactive decay.
                    Radioactive isotopes of an element can be defined as atoms that contain an unstable combination of
                    neutrons and protons, or excess energy in their nucleus. For example, hydrogen-3 (protium), carbon-14,
                    uranium-238, etc.
                </p>
            </section>
        </div>
    );
};

export default AtomicParticles;
