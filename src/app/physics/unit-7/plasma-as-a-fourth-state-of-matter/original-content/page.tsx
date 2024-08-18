// pages/plasma.tsx

import React from 'react';

const PlasmaPage: React.FC = () => {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4">7.4 PLASMA AS A FOURTH STATE OF MATTER</h1>
            <p className="mb-4">
                Plasma consists of positive ions, free electrons (negatively charged particles), and neutral atoms in a gaseous state. Usually, plasma exists at very high temperatures or at high pressures or at both. By using high electric and magnetic fields, a substance can also be transformed into plasma.
            </p>
            <p className="mb-4">
                There is a lot of plasma in the universe. Plasma exists in the Sun; stars glow because of plasma; nebulas and auroras at the south and north poles are due to plasma; neon lights glow because of plasma; lightning in the sky forms plasma; etc. Plasma is a gas that is hot, bright, and highly ionized. These characteristics together make it different from the gas. 99% of the visible universe is made up of plasma. That is why plasma is often called &quot;the fourth state of matter,&quot; along with solid, liquid, and gas.
            </p>
            <p className="mb-4">
                When a gas is heated continuously, the kinetic energy (K.E) of gas molecules also continuously increases. Due to this, attractive forces between molecules keep decreasing as molecules move away from each other. The molecules and atoms start colliding with each other powerfully. As a result, electrons of the atoms are removed, and atoms become positive ions. This ionic state of matter is called plasma. It can highly conduct current because it has free electrons and moving ions.
            </p>

            <h2 className="text-2xl font-semibold mb-4">FOR YOUR INFORMATION</h2>
            <ul className="list-disc pl-8 mb-4">
                <li>
                    <strong>AURORAS:</strong> It is a solar phenomenon where colored lights appear in the sky as a result of charged particles from the Sun striking the upper atmosphere. It is also called polar lights.
                </li>
                <li>
                    <strong>NEBULAE:</strong> It is a massive cloud of dust and gas that fills the space between stars. It is a Latin word, meaning &quot;mist, fog, etc.&quot; Nebulae are made up of dust, fundamental elements such as hydrogen, and other ionized gases (i.e., plasma). Hot stars inside of the nebula heat these elements, which emit radiation of reds, blues, and greens.
                </li>
            </ul>
        </div>
    );
};

export default PlasmaPage;
