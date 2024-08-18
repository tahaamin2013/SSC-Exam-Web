import React from 'react';

const InternalEnergyPage: React.FC = () => {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6">7.6 Internal Energy and Temperature of a Substance</h1>

            <p className="mb-4">
                Internal energy of a substance is the total energy possessed by the particles of the substance. Internal energy is the total kinetic and potential energy of the particles of a substance. Potential energy of the particles of a substance is due to attractive force between them. These particles can have three forms of kinetic energies i.e. translational K.E., rotational K.E. and vibrational K.E. In case of ideal gas, it has only translational kinetic energy of particles. Therefore, its internal energy is only due to kinetic energy of particles.
            </p>

            <p className="mb-4">
                In the previous topic, we have studied that temperature is directly proportional to average kinetic energy of the particles of a substance. When we heat a substance, it speeds up the particles and increases the kinetic energy of its particles. Hence, we can say that internal energy of the substance also increases. By increasing the temperature of a substance, its internal energy also increases.
            </p>

            <p className="mb-4">
                A change in internal energy gives important information about the substance. For example, an increase in internal energy indicates an increase in temperature of the substance, which can be the result of energy given to particles by adding heat or by some other method. Can you name any method that can increase the internal energy of a substance without adding heat to it?
            </p>
        </div>
    );
};

export default InternalEnergyPage;
