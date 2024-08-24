import React from 'react';

const ActivationEnergy = () => {
    return (
        <div className="bg-white text-black min-h-screen p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Energetics</h1>

                <h2 className="text-2xl font-semibold mb-4">8.5 ACTIVATION ENERGY</h2>
                <p className="mb-4">
                    Chemical reactions involve the breaking and forming of chemical bonds. These changes are accompanied by changes in energies. Collision theory was proposed to explain the observed reaction kinetics. For a chemical reaction to occur, the bonding atoms or molecules must collide with each other. These collisions can be effective or ineffective depending on the energy and direction of the colliding particles.
                </p>
                <p className="mb-4">
                    An effective collision can only occur if the energy of the colliding particles is high enough to overcome the repulsion between the electrons around the reacting particles. The correct orientation means that at the moment of collision, the atoms needed to form new bonds must collide with each other. The minimum amount of energy that, in addition to the average kinetic energy, particles must have for effective collisions is called the activation energy. No reaction occurs if the energy of the reacting particles is lower than the activation energy. Thus, the speed of a reaction depends on its activation energy. The higher the activation energy, the lower the reaction rate.
                </p>

                <h3 className="text-xl font-semibold mb-4">Reaction Progress with Time</h3>
                <p className="mb-4">
                    For example, the reaction between A<sub>2</sub> and B<sub>2</sub> molecules involves:
                </p>
                <div className="mb-4">
                    <img src="/images/activation-energy-diagram.png" alt="Activation Energy Diagram" className="w-full h-auto" />
                </div>
                <p className="mb-4">
                    <strong>Effective Collision:</strong> The collision between particles that results in a chemical reaction.
                </p>
                <p className="mb-4">
                    <strong>Unstable Activated Complex:</strong> A temporary, high-energy state in which bonds are being broken and formed.
                </p>
                <p className="mb-4">
                    <strong>Ineffective Collision:</strong> The collision between particles that does not result in a chemical reaction.
                </p>
            </div>
        </div>
    );
};

export default ActivationEnergy;
 