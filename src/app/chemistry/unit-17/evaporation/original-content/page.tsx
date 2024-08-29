// pages/evaporation.tsx
import React from 'react';

const Evaporation = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">17.2 EVAPORATION</h1>

            <p className="mb-4">
                Evaporation is a separation method used to separate components of a mixture in which a solid is dissolved in a liquid, where the liquid changes into the gaseous phase and solid is left behind. The application is based on the fact that solids do not vaporize easily, whereas liquids do. Can you think of any mixture that can be separated through this technique?
            </p>

            <p className="mb-4">
                In an enclosed space, a liquid will continue to vaporize until air saturation is achieved. In practically, only a small fraction of the total molecules possess enough heat energy required to vaporize the liquid.
            </p>

            <p className="mb-4">
                After Evaporation
            </p>

            <p className="mb-4">
                Mixture of a solid dissolved in a liquid
            </p>

            <p className="mb-4">
                Only a solid remains
            </p>

            <h2 className="text-xl font-bold mb-4">17.2.1 Factors affecting rate of evaporation</h2>

            <p className="mb-4">
                <strong>Pressure:</strong> An increase in pressure pushes gas particles close together. The force between the particles increases making it difficult for the liquid to convert to gaseous form.
            </p>

            <p className="mb-4">
                <strong>Temperature:</strong> On increasing the temperature of the substance, the material heats up and the constituent particles begin moving with greater kinetic energy. This leads to an increase in the rate of evaporation. For example, warm water boils faster than cold water.
            </p>

            <p className="mb-4">
                <strong>Surface area of the substance:</strong> A substance with a larger surface area will contain more surface molecules per unit of volume, it triggers the potential of the particles to escape, thereby increasing the rate of evaporation.
            </p>

            <p className="mb-4">
                <strong>Inter-molecular forces:</strong> Stronger inter-molecular forces between the molecules of the liquid require greater amounts of energy to break and turn into a gas. Therefore, substances with stronger intermolecular forces have a lower rate of evaporation. An indicator of the intermolecular forces is provided by the enthalpy of vaporization.
            </p>

            <p className="mb-4">
                <strong>Flow rate of the atmosphere:</strong> Increase in the flow of air which is unsaturated, for instance, fresh air, will lead to the increase in the rate of evaporation.
            </p>

            <h2 className="text-xl font-bold mb-4">17.2.2 Applications of Evaporation</h2>

            <p className="mb-4">
                From the explanation above, we can deduce that evaporation helps to separate a volatile component from a non-volatile one. Can you think of any examples?
            </p>

            <ul className="list-disc list-inside mb-4">
                <li>Seawater can be evaporated to produce drinking water.</li>
                <li>Dye from ink: ink is a mixture of water and dye.</li>
                <li>Dairy producers also use the technique of evaporation to use it to dry lactose into powders.</li>
                <li>Beverage producers can create concentrates, for instance, juice concentrators by reducing water content through evaporation.</li>
                <li>Water containing minerals can be evaporated to extract the metals and minerals which simulates the chemical processes.</li>
            </ul>
        </div>
    );
};

export default Evaporation;
