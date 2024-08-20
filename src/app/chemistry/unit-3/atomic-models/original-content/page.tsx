// pages/atomic-models.tsx

import React from 'react';

const AtomicModels = () => {
    return (
        <div className="p-6 bg-white text-gray-800">
            <h1 className="text-4xl font-bold mb-4">Atomic Models and Concepts</h1>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold mb-2">Illustration of Particle Paths</h2>
                <p>
                    Illustrate the path that positively and negatively charged particles would take under the influence of a uniform electric field.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold mb-2">Proton Number/Atomic Number</h2>
                <p>
                    Define proton number/atomic number as the number of protons in the nucleus of an atom. Explain that the proton number is unique to each element and is used to arrange elements in the periodic table. State that radioactivity can change the proton number and alter an atom's identity.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold mb-2">Nucleon Number/Atomic Mass and Isotopes</h2>
                <p>
                    Define nucleon number/atomic mass as the sum of protons and neutrons in the nucleus of an atom. Define isotopes as different atoms of the same element that have the same number of protons but different neutrons. State that isotopes can affect molecular mass but not chemical properties of an atom.
                </p>
                <p>
                    Determine the number of protons and neutrons of different isotopes. Define relative atomic mass as the average mass of isotopes of an element compared to 1/12th of the mass of carbon-12. State that isotopes can exhibit radioactivity. Discuss the importance of isotopes using carbon dating and medical imaging as examples.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold mb-2">Formation of Ions</h2>
                <p>
                    Describe the formation of positive (cation) and negative (anion) ions from atoms. Interpret and use the symbols for atoms and ions.
                </p>
                <p>
                    Calculate the relative atomic mass from relative masses and abundance of isotopes. Calculate the relative mass of an isotope given relative atomic mass and abundance of all stable isotopes.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold mb-2">Introduction</h2>
                <p>
                    This chapter presents the historical development of atomic theory to the modern atomic model. One of the basic concepts of atomic structure is atomic number and mass number, which define an element and its isotopes. Understanding the structure of atoms is essential to understanding many scientific phenomena.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold mb-2">3.1 Atomic Models</h2>
                <p>
                    The concept of the atomic model evolved over time as our understanding of atomic structure deepened through experimental observations and theoretical advances. Several important models of the atom had been proposed throughout history, each contributing to the understanding of atomic behavior and properties. The most important atomic models are:
                </p>

                <h3 className="text-2xl font-semibold mt-4 mb-2">Dalton's Model</h3>
                <p>
                    In 1803, the British chemist John Dalton presented a scientific theory on the existence and nature of matter. This theory is called Dalton's atomic theory. Main postulates of his theory are as follows:
                </p>
                <ol className="list-decimal list-inside mb-4">
                    <li>All elements are composed of tiny indivisible particles called atoms.</li>
                    <li>Atoms of a particular element are identical. They have the same mass and same volume.</li>
                    <li>During chemical reaction, atoms combine or separate or re-arrange. They combine in simple ratios.</li>
                    <li>Atoms can neither be created nor destroyed.</li>
                </ol>
                <p>
                    Dalton was able to explain quantitative results that scientists of his time had obtained in their experiments. He nicely explained the laws of chemical combinations. His brilliant work became the main stimulus for the rapid progress of chemistry during the nineteenth century. However, a series of experiments that were performed in the 1850s and the beginning of the twentieth century clearly demonstrated that an atom is divisible and consists of subatomic particles, electrons, protons, and neutrons.
                </p>

                <h3 className="text-2xl font-semibold mt-4 mb-2">Rutherford's Experiment</h3>
                <p>
                    In 1911, Rutherford performed an experiment to know the arrangement of electrons and protons in atoms. Rutherford bombarded a very thin gold foil about 0.00004 cm thickness with alpha particles. He used alpha particles obtained from the disintegration of polonium. Alpha particles are helium nuclei that are doubly positively charged (He<sup>2+</sup>). Most of these particles passed straight through the foil. Only a few particles were slightly deflected. But one in 1 million was deflected through an angle greater than 90° from their straight paths. Rutherford performed a series of experiments using thin foils of other elements. He observed similar results from these experiments.
                </p>
                <p>
                    Rutherford made the following conclusions:
                </p>
                <ol className="list-decimal list-inside mb-4">
                    <li>Since the majority of the alpha particles passed through the foil undeflected, most of the space occupied by an atom must be empty.</li>
                    <li>The deflection of a few alpha particles through angles greater than 90° shows that these particles are deflected by electrostatic repulsion between the positively charged alpha particles and the positively charged part of the atom.</li>
                    <li>Massive alpha particles are not deflected by electrons.</li>
                </ol>
                <p>
                    On the basis of conclusions drawn from these experiments, Rutherford proposed a new model for an atom. He proposed a planetary model (similar to the solar system) for an atom. An atom is a neutral particle. The mass of an atom is concentrated in a very small dense positively charged region. He named this region as the nucleus. The electrons are revolving around the nucleus in circles. These circles are called orbits. The centrifugal force due to the revolution of electrons balances the electrostatic force of attraction between the nucleus and the electrons.
                </p>

                <h3 className="text-2xl font-semibold mt-4 mb-2">Defects in Rutherford's Atomic Model</h3>
                <p>
                    Rutherford's model of an atom resembles our solar system. It has the following defects:
                </p>
                <ol className="list-decimal list-inside mb-4">
                    <li>Classical physics suggests that an electron being a charged particle will emit energy continuously while revolving around the nucleus. Thus, the orbit of the revolving electron becomes smaller and smaller until it would fall into the nucleus. This would collapse the atomic structure.</li>
                    <li>If the revolving electron emits energy continuously, it should form a continuous spectrum.</li>
                </ol>

                <h3 className="text-2xl font-semibold mt-4 mb-2">Bohr's Atomic Theory</h3>
                <p>
                    In 1913, Niels Bohr proposed a model for an atom that was consistent with Rutherford's model. But it also explains the observed line spectrum of the hydrogen atom. Main postulates of Bohr's atomic theory are as follows:
                </p>
                <ol className="list-decimal list-inside mb-4">
                    <li>The electron in an atom revolves around the nucleus in one of the circular orbits. Each orbit has a fixed energy. So each orbit is also called an energy level.</li>
                    <li>The energy of the electron in an orbit is proportional to its distance from the nucleus. The farther the electron is from the nucleus, the more energy it has.</li>
                    <li>The electron revolves only in those orbits for which the angular momentum of the electron is an integral multiple of ℎ/2π where ℎ is Planck's constant (its value is 6.626 x 10<sup>-34</sup> J.s).</li>
                    <li>Light is absorbed when an electron jumps to a higher energy orbit and emitted when an electron falls into a lower energy orbit. Electron present in a particular orbit does not radiate energy.</li>
                    <li>The energy of the light emitted is exactly equal to the difference between the energies of the orbits. ΔE = E<sub>2</sub> - E<sub>1</sub></li>
                </ol>
                <p>
                    Bohr model does not depict the three-dimensional aspect of an atom.
                </p>

                <h3 className="text-2xl font-semibold mt-4 mb-2">Quantum Mechanical Model</h3>
                <p>
                    This is the current model used by modern science to describe the structure of the atom. It incorporates the principles of quantum mechanics and treats electrons as wave-particle entities. Instead of exact orbits, it defines probability distributions known as orbitals where electrons are likely to be found.
                </p>
                <p>
                    The quantum mechanical model explains many phenomena that could not be explained by earlier models, such as the distribution of electrons in atoms and their arrangement in energy levels and sublevels.
                </p>

                <h3 className="text-2xl font-semibold mt-4 mb-2">Limitations of Atomic Models</h3>
                <p>
                    All models of the atom have limitations. The Rutherford model could not explain why electrons do not spiral into the nucleus. Bohr's model accurately described hydrogen spectra but failed for more complex atoms. The quantum mechanical model, while successful in explaining many observations, is complex and involves probability rather than definitive paths for electrons.
                </p>
            </section>
        </div>
    );
};

export default AtomicModels;
