// pages/distillation.tsx
import React from 'react';

const Distillation = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">17.3 DISTILLATION</h1>

            <p className="mb-4">
                Distillation is a separation technique used to separate components of a liquid mixture by a process of heating and cooling, which exploits the differences in the volatility of each of the components. The liquid that is obtained by performing the condensation of vapor is called the distillate. Distillation is carried out at the solvent&apos;s  boiling points. Boiling takes place when the vapor pressure is equivalent to the atmospheric pressure.
            </p>

            <p className="mb-4">
                Separation of the components of the mixture takes place better in case of the higher relative volatility of a liquid. On supplying heat to the liquid, the vapor boils and then condensation takes place.
            </p>

            <h2 className="text-xl font-bold mb-4">17.3.1 Distillation procedure:</h2>

            <ol className="list-decimal list-inside mb-4">
                <li>The round bottom flask contains the liquid mixture which is heated to a vigorous boil.</li>
                <li>The component with the lower boiling point will change into its gaseous state.</li>
                <li>On coming in contact with the water-cooled condenser, the gas will condense.</li>
                <li>The condensed gas will trickle down into the graduated cylinder where the chemist can collect the final distilled liquid.</li>
                <li>The other liquid component remains in the round bottom flask.</li>
            </ol>

            <h2 className="text-xl font-bold mb-4">Types of Distillation</h2>

            <ul className="list-disc list-inside mb-4">
                <li>Simple distillation.</li>
                <li>Fractional distillation.</li>
                <li>Steam distillation.</li>
                <li>Vacuum distillation.</li>
            </ul>

            <h3 className="text-lg font-bold mb-4">Fractional distillation</h3>
            <p className="mb-4">
                This technique works in a very similar way to simple distillation, but a fractionating column is used to get a temperature gradient, cooler at the top and hotter at the bottom. The column is used to control the temperature at which the distillate is being collected, allowing different liquids in a mixture to be separated, each turning into a vapor and being cooled and condensed in the condenser at their own individual boiling points.
            </p>

            <h3 className="text-lg font-bold mb-4">Steam distillation</h3>
            <p className="mb-4">
                Steam distillation is a separation process that consists in distilling water together with other volatile and non-volatile components.
            </p>

            <h3 className="text-lg font-bold mb-4">Vacuum distillation</h3>
            <p className="mb-4">
                Vacuum distillation or Distillation under reduced pressure is a type of distillation performed under reduced pressure, which allows the purification of compounds which are not readily distilled at ambient pressures or simply to save time or energy. This technique separates compounds based on differences in their boiling points.
            </p>

            <h2 className="text-xl font-bold mb-4">17.3.3 Application:</h2>

            <p className="mb-4">
                There is a piece of evidence that humans were using the distillation process since 3000 BC (approximately). This process is used to make distilled water.
            </p>

            <ul className="list-disc list-inside mb-4">
                <li>Distillation plays an important role in many water purification techniques. Many desalination plants incorporate this method in order to obtain drinking water from seawater.</li>
                <li>This process is also used to refine crude oil and to purify alcohol.</li>
                <li>The process of steam distillation is used to obtain essential oils and herbal distillates from several aromatic flowers/herbs.</li>
                <li>Distilled water has numerous applications, such as in lead-acid batteries and low-volume humidifiers.</li>
                <li>Many fermented products such as alcoholic beverages are purified with the help of this method.</li>
                <li>Many perfumes and food flavorings are obtained from herbs and plants via distillation.</li>
                <li>Air can be separated into nitrogen, oxygen, and argon by employing the process of cryogenic distillation.</li>
                <li>Distillation is also employed on an industrial scale to purify the liquid products obtained from chemical synthesis.</li>
            </ul>
        </div>
    );
};

export default Distillation;
