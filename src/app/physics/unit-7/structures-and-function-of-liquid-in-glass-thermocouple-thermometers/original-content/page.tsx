import React from 'react';

const ThermometersPage: React.FC = () => {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6">
                7.11 Structures and Function of Liquid-in-Glass and Thermocouple Thermometers
            </h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">7.11.1 Liquid-in-Glass Thermometers</h2>
                <p className="mb-4">
                    A liquid-in-glass thermometer typically consists of a long, thin glass tube with a bulb at the end. The bulb contains either mercury or alcohol as the liquid. This liquid expands when warmed and contracts when cooled.
                </p>
                <p className="mb-4">
                    The thermometer operates by measuring the expansion and contraction of the liquid in the bulb. When placed in a warm environment or touched by a hot object, the liquid in the bulb expands and rises in the glass tube. Conversely, when placed in a cold environment or touched by a cold object, the liquid contracts and falls in the tube. The temperature is read from the thermometer scale, which is calibrated so that a specific temperature corresponds to the height or position of the liquid in the tube.
                </p>
                <p className="mb-4">
                    Liquid-in-glass thermometers are commonly used in homes, schools, and laboratories to measure temperature. They also find use in certain industrial applications.
                </p>

                <div className="bg-blue-100 p-4 rounded mt-6">
                    <h3 className="text-xl font-semibold mb-2">Can You Tell?</h3>
                    <p>
                        Why does the temperature of a substance not change at its melting point and boiling point even after giving it heat?
                    </p>
                    <p className="mt-2">
                        The temperature of a substance remains constant at its melting point and boiling point because the heat energy supplied is used to overcome the intermolecular forces, leading to a change in state (solid to liquid or liquid to gas) rather than an increase in kinetic energy (and thus temperature) of the molecules.
                    </p>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">7.11.2 Thermocouple Thermometers</h2>
                <p className="mb-4">
                    Thermocouple thermometers consist of two wires made of different metals that are joined at one end, called the hot junction. The other ends, called the cold junctions, are connected to a measuring device, such as a voltmeter.
                </p>
                <p className="mb-4">
                    These thermometers work by measuring the voltage difference between the hot junction and the cold junctions. When the hot junction is heated, free electrons in the metals flow across the junction, creating a voltage difference between the hot and cold junctions. As the temperature of the hot junction increases, so does the voltage difference.
                </p>
                <p className="mb-4">
                    When the hot junction is cooled, the voltage difference decreases. The relationship between the temperature and voltage is linear, allowing temperature to be measured by determining the voltage. The voltmeter is calibrated so that the voltage difference corresponds to a specific temperature.
                </p>
                <p className="mb-4">
                    Thermocouple thermometers are used to measure the temperature of furnaces, kilns, engines, and other industrial equipment. They are also used in agriculture to measure soil and water temperature.
                </p>
            </section>
        </div>
    );
};

export default ThermometersPage;
