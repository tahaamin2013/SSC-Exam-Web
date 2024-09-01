// pages/flame-test.tsx
import React from 'react';

const FlameTest = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">18.2 DETECTION OF METAL CATIONS BY FLAME TEST</h1>

            <p className="mb-4">
                A Bunsen burner flame has two parts the upper part is called oxidizing flame and the lower part is called reducing flame. Bunsen flame has enough energy to excite the electrons of alkali and alkaline earth metal atoms. Alkali metals have low ionization potentials that&apos;s  why there atoms get their electrons excited by the energy of visible wavelength of light. The same energy is released when the electron comes to the ground state showing the colour of flame, as this flame contain the energy of visible wavelength of light it possesses a characteristic flame colour.
            </p>

            <h2 className="text-xl font-bold mb-4">How is Flame Test Performed?</h2>
            <ol className="list-decimal list-inside mb-4">
                <li><strong>Sample Preparation:</strong> A small amount of the sample e.g. salt, oxide or any other compound containing the metal ions is usually dissolved in water to create a solution or paste.</li>
                <li><strong>Clean Wire Loop:</strong> A clean, non-reactive wire loop of platinum or even a clean glass rod is used to hold a small amount of the sample solution.</li>
                <li><strong>Heating:</strong> The wire loop with the sample is then introduced into the flame of a Bunsen burner. The heat causes the metal ions in the sample to become excited.</li>
                <li><strong>Observation:</strong> As the metal ions return to their ground state from the excited state, they emit light in the form of characteristic coloured flames. The colour of the flame is then observed and compared to a reference chart to identify the metal ion present.</li>
            </ol>

            <h2 className="text-xl font-bold mb-4">Flame Colors for Different Metal Ions</h2>
            <ul className="list-disc list-inside mb-4">
                <li><strong>Sodium (Na):</strong> Golden yellow</li>
                <li><strong>Lithium (Li) and Strontium (Sr):</strong> Crimson red</li>
                <li><strong>Potassium (K):</strong> Purple</li>
                <li><strong>Cesium (Cs):</strong> Blue</li>
                <li><strong>Barium (Ba):</strong> Green</li>
                <li><strong>Copper (Cu):</strong> Bluish green</li>
            </ul>

            <figure className="mb-4">
                <img src="/path/to/flame-colors.jpg" alt="Flame of different metallic cations" className="w-full h-auto" />
                <figcaption className="text-center mt-2">Figure 18.4: Flame of different metallic cations.</figcaption>
            </figure>

            <h2 className="text-xl font-bold mb-4">KEY POINTS</h2>
            <ul className="list-disc list-inside mb-4">
                <li>Qualitative analysis is those in which one only tells about the nature of a substance and not its quantity.</li>
                <li>Ammonia gas turns red litmus paper blue.</li>
                <li>Carbon dioxide turns lime water milky.</li>
                <li>Chlorine changes blue litmus paper red and then bleaches to colourless.</li>
                <li>Hydrogen burns with a pop sound.</li>
                <li>Oxygen helps in combustion.</li>
                <li>Sulphur dioxide discharges the purple colour of KMnO₄.</li>
                <li>Sodium gives golden yellow flame, lithium and strontium give crimson red, Potassium gives purple, Cesium gives blue, barium gives green and copper gives bluish green flame.</li>
            </ul>
        </div>
    );
};

export default FlameTest;
