// pages/temperature-relationship.tsx

import React from 'react';

const TemperatureRelationshipPage: React.FC = () => {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4">7.5 RELATIONSHIP BETWEEN THE MOTION OF PARTICLES AND TEMPERATURE</h1>
            <p className="mb-4">
                Even though the water molecules in a pot are constantly moving, the movement is not powerful enough for us to notice it with our naked eyes. However, we observe water currents, or water molecules in motion at a higher temperature, when we place this pot on a stove that is burning. There is a certain relationship between the motion of molecules of a material and its temperature. In this section, we will understand this relationship.
            </p>
            <p className="mb-4">
                When a material is heated, one of the two things may happen: (1) The strength of the attractive force between particles can decrease, and bonds between particles may break (as it happens during melting and boiling processes of a material), or (2) it can speed up the particles and hence increase the kinetic energy (K.E.) of the particles.
            </p>
            <p className="mb-4">
                <strong>&quot;The temperature of a substance is the measure of its hotness or coldness, and the temperature of a substance is directly proportional to the average K.E. of its particles.&quot;</strong>
            </p>
            <p className="mb-4">
                When we heat a substance (at room temperature), the speed and kinetic energy of its particles increase. That is why the temperature of the substance will also increase. Conversely, when we remove heat from a substance (for example, by placing hot water on ice or in a refrigerator), the speed and kinetic energy of the particles will become slower and slower. Therefore, the temperature of the substance will also decrease.
            </p>
            <p className="mb-4">
                If we keep removing heat energy from a substance, its particles will continue to slow down and lose kinetic energy. At some point, the molecules will no longer be moving and will have least or no kinetic energy. Particles cannot collide with each other or with the container, and therefore cannot exert pressure (P=0 Pa). At this point, the temperature of the substance is called absolute zero.
            </p>
            <p className="mb-4">
                <strong>&quot;Absolute zero is the lowest possible temperature of a substance at which its particles have least kinetic energy.&quot;</strong>
            </p>
            <p className="mb-4">
                Its value is zero Kelvin (0 K), while on the Celsius scale, it is -273.15°C. At absolute zero, there is no heat energy available to move the particles of the substance.
            </p>
        </div>
    );
};

export default TemperatureRelationshipPage;
