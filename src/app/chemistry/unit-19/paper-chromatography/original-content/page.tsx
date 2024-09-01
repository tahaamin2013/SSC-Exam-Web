import React from 'react';

const PaperChromatography = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Unit 19: Chromatography</h1>

            <h2 className="text-xl font-bold mb-4">19.2 Paper Chromatography</h2>
            <p className="mb-4">
                In paper chromatography the stationary phase is the water absorbed on filter paper. The mobile phase can be a solvent or a mixture of solvents. A mixture of inks or some metal ions can be separated with the help of paper chromatography.
            </p>

            <h3 className="text-lg font-bold mb-4">Procedure</h3>
            <ol className="list-decimal ml-6 mb-4">
                <li>Take 1 dm³ measuring cylinder fitted with the rubber bung carrying a glass hook at the lower end.</li>
                <li>Pour 25 cm³ of water and ethanol solvent mixture (6:4) in it and close it. Allow it to stand for 15 minutes.</li>
                <li>Take a strip of paper (what Mann filter paper number one) 2.5 cm wide and lengthier than the length of the cylinder.</li>
                <li>Mark a line 5 centimetre from one end its midpoint with pencil.</li>
                <li>Prepare a mixture of various inks like blue, black, green, red etc by taking two drops of each in a clean China dish. Mix them thoroughly.</li>
                <li>Apply a very tiny drop of this mixture at the midpoint by means of capillary tube.</li>
                <li>Dry the strip in the air for about 15 minutes and suspend it by the glass hook with the impregnated end dipping into the solvent to a depth of 5-6 mm.</li>
                <li>When the solvent front has risen for about an hour or the solvent front is 2-3 cm below the upper end of the filter paper, remove the paper strip and dry it in air. It is seen that every ink gives coloured bands at different regular intervals.</li>
                <li>Measure the distance of these coloured bands from the baseline and the distance travelled by the solvent front from the baseline.</li>
                <li>Calculate the Rf values for various inks by the formula given. In this way we can separate a mixture of various inks by chromatography. Rf = Distance traveled by solute / Distance traveled by solvent.</li>
            </ol>

            <h3 className="text-lg font-bold mb-4">Locating Agent</h3>
            <p className="mb-4">
                A locating agent is a substance or a solution which is used to locate the components which have been separated by chromatography but are not visible due to being colourless. For example, a mixture of amino acids can be separated by paper chromatography or by thin layer chromatography (TLC) but they are not visible. To locate them, ninhydrin is sprayed on the chromatogram. Ninhydrin reacts with amino acids and develops into a colourful chromatogram.
            </p>

            <h3 className="text-lg font-bold mb-4">Reading a Chromatogram</h3>
            <p className="mb-4">
                Measure the distance each compound spot travelled from the starting point (origin) to its current position. This is known as the Rf (Retention Factor) value and is calculated as the distance travelled by the compound divided by the total distance travelled by the solvent. Compare the Rf values of the separated compounds to known standards data to identify the components within your chromatogram.
            </p>

            <h3 className="text-lg font-bold mb-4">Example</h3>
            <p className="mb-4">
                In the above given chromatogram, if the solvent front travelled 10 cm and the blue coloured component travelled 8 cm, then the Rf is: Rf (blue) = 8/10 = 0.8, Rf (purple) = 6/10 = 0.6, Rf (red) = 2/10 = 0.2. Blue has the greatest affinity with the stationary phase and the red has the greatest affinity with the mobile phase.
            </p>

            <h3 className="text-lg font-bold mb-4">Identification of an Unknown Substance</h3>
            <p className="mb-4">
                A paper chromatogram is used to identify an unknown substance by comparing it with known substances. Two substances are likely to be the same if their Rf value is the same. Therefore, the Rf value of an unknown substance is determined. This Rf value is then cross-matched with already known Rf values to identify the potential substance. A pure substance produces only one spot on the paper chromatogram. An impure substance can produce more than one spot depending on the compounds present in it.
            </p>

            <h3 className="text-lg font-bold mb-4">KEY POINTS</h3>
            <ul className="list-disc ml-6 mb-4">
                <li>Chromatography works on the principle of partitioning where the components of a mixture distribute themselves between two phases: one is called the stationary phase and the other one is said to be the mobile phase.</li>
                <li>In paper chromatography, the stationary phase is the water absorbed on filter paper.</li>
                <li>A locating agent is a substance or a solution used to locate components which have been separated by chromatography but are not visible due to being colourless.</li>
                <li>Rf (Retention Factor) value is calculated as the distance travelled by the compound divided by the total distance travelled by the solvent.</li>
            </ul>
        </div>
    );
};

export default PaperChromatography;
