import React from "react";

const Unit05 = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">5.1 WHY DO ATOMS REACT?</h1>
      <p className="text-gray-700 mb-4">
        There are eight groups of normal elements (IA, IIA, IIIA, IVA, VA, VIA
        VIIA VIIIA) in the periodic table. Group VIIIA consists of the noble
        gases or zero group elements because they are all very stable and
        chemically inert under ordinary conditions. They exist in atomic form in
        the atmosphere. They have a general electronic configuration = ns
        <sup>2</sup> np<sup>6</sup> (8 electrons in the valence shell) except He
        (1s<sup>2</sup>). These noble gases have completely filled valence
        shells (s and p subshells). Their octet is complete, so they do not
        participate in ordinary chemical reactions and are called inert gases.
        They have eight electrons in their valence shell, except He, which has
        two electrons in its valence shell.
      </p>
      <p className="text-gray-700 mb-4">
        He = 1s<sup>2</sup> Ne 1s<sup>2</sup>, 2s<sup>2</sup>, 2p<sup>6</sup> Ar
        1s<sup>2</sup>, 2s<sup>2</sup>, 2p<sup>6</sup>, 3s<sup>2</sup>, 3p
        <sup>6</sup>
      </p>
      <p className="text-gray-700 mb-4">
        In 1916, a chemist G. N. Lewis used the concept of octet (eight
        electrons) and duplet (2 electrons) electronic rule to explain the
        reactivity and stability of molecules.
      </p>
      <h2 className="text-xl font-semibold mb-2">Octet Rule</h2>
      <p className="text-gray-700 mb-4">
        The octet rule states that an atom is most stable when its valence shell
        contains eight electrons. This principle is derived from the observation
        that atoms of the major group elements tend to participate in chemical
        bonding in the form of eight electrons per atom in the resulting
        molecule. This rule only applies to the major group element. The
        chemical behaviour of the main group elements can be predicted with the
        help of the octet rule. This is because the rule only involves s and p
        electrons. Molecules such as oxygen, nitrogen, and halogens follow the
        octet principle. Hydrogen, helium, and lithium follow the duplet rule
        because their electrons lie in the s orbital.
      </p>
      <p className="text-gray-700 mb-4">
        Na 1s<sup>2</sup>, 2s<sup>2</sup>, 2p<sup>6</sup>, 3s<sup>1</sup>{" "}
        (unstable, reactive, incomplete octet) Loss of one electron Na 1s
        <sup>2</sup>, 2s<sup>2</sup>, 2p<sup>6</sup> which is the same as that
        of Ne Cl = 1s<sup>2</sup>, 2s<sup>2</sup>, 2p<sup>6</sup>, 3s
        <sup>2</sup>, 3p<sup>5</sup> (unstable, reactive, incomplete octet), Cl
        = 1s<sup>2</sup>, 2s<sup>2</sup>, 2p<sup>6</sup>, 3s<sup>2</sup>, 3p
        <sup>6</sup> which is the same as that of Ar.
      </p>
      <h2 className="text-xl font-semibold mb-2">Duplet Rule</h2>
      <p className="text-gray-700 mb-4">
        The tendency of atoms to acquire two electronic configurations in their
        outermost shell during bond formation is called the duplet rule. They
        attain electronic configuration like helium.
      </p>
      <p className="text-gray-700 mb-4">
        For Example
        <br />
        Li = 1s<sup>2</sup>, 2s<sup>1</sup> lose 1 electron to form Li
        <sup>+</sup> (1s<sup>2</sup>)
        <br />
        Be = 1s<sup>2</sup>, 2s<sup>2</sup> loses two electrons to form Be
        <sup>2+</sup> (1s<sup>2</sup>) Helium has two electrons in its valence
        shell and is also chemically inert. Some elements that are close to He
        on the periodic table tend to achieve two electronic configurations in
        their valence shell. For example, hydrogen, lithium, and beryllium,
        etc., tend to achieve two-electron configuration in the valence shell.
      </p>
    </div>
  );
};

export default Unit05;
