import React from 'react';

const SensitivityRangeLinearityPage: React.FC = () => {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6">
                7.10 Sensitivity, Range, and Linearity of Thermometers
            </h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">7.10.1 Sensitivity of a Thermometer</h2>
                <p className="mb-4">
                    Sensitivity refers to the ability of a thermometer to detect small changes in temperature. It is the smallest variation in temperature that a thermometer can measure. For instance, a thermometer with a sensitivity of 0.1°C can detect changes as small as 0.1°C, whereas one with a sensitivity of 1°C can only detect changes as large as 1°C. This means it cannot measure changes smaller than 1°C. Sensitivity is analogous to the least count of a measuring instrument.
                </p>
                <p className="mb-4">
                    A mercury thermometer is a sensitive thermometer. To illustrate sensitivity, place it in a glass of water at room temperature and let it settle. Then, add a few drops of hot water to the glass. You will observe that the mercury in the thermometer rises quickly, indicating the change in water temperature.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">7.10.2 Range of a Thermometer</h2>
                <p className="mb-4">
                    The range of a thermometer refers to the range of temperatures that it can measure. This is defined by the lowest and highest temperatures that the thermometer can detect. For example, a clinical mercury thermometer can measure temperatures from 35°C to 42°C on the Celsius scale, and from 94°F to 108°F on the Fahrenheit scale.
                </p>
                <p className="mb-4">
                    Digital thermometers have a wider range and can measure temperatures from very cold to very hot. To illustrate the range of a thermometer, place a digital thermometer in a glass containing ice; it will accurately display the melting point of ice (0°C). Then, place the digital thermometer in a pot of boiling water; it will accurately display the boiling point of water (100°C). This method can be used to measure the range of thermometers.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">7.10.3 Linearity of a Thermometer</h2>
                <p className="mb-4">
                    Linearity refers to how uniformly a thermometer displays temperature variations. Thermometer scales have equally spaced marks on their scale, meaning that if the temperature increases, the thermometer should show a consistent increase in divisions for the same change in temperature across different ranges.
                </p>
                <p className="mb-4">
                    For example, a linear thermometer will measure an increase in temperature from 0°C to 50°C with the same accuracy as an increase from 50°C to 100°C. Bimetallic thermometers are examples of linear thermometers and measure temperature equally accurately across their range. To illustrate this, place a bimetallic thermometer in a glass of water at room temperature, then gradually heat the water. The bimetallic thermometer will gradually respond to the temperature change, and the pointer on the thermometer will move consistently.
                </p>
            </section>
        </div>
    );
};

export default SensitivityRangeLinearityPage;
