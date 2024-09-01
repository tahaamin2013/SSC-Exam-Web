// pages/chromatography.tsx
import React from 'react';

const Chromatography = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Unit 19: Chromatography</h1>

            <h2 className="text-xl font-bold mb-4">INTRODUCTION</h2>
            <p className="mb-4">
                The word chromatography has been originated from two words one is Chroma means colour the other graphein means writing.
                Chromatography has been originated as a very strong analytical tool in the analytical chemistry. This is not only used to analyse a compounds, it is used for separation of the conical chemistry. Nowadays this technique can be coupled with other techniques like mass spectrometry.
            </p>

            <h2 className="text-xl font-bold mb-4">19.1 PRINCIPLE OF CHROMATOGRAPHY</h2>
            <p className="mb-4">
                Chromatography works on the principle of partitioning where the components of a mixture distribute themselves between two phases one is called stationary phase and the other one is said to be mobile phase.
            </p>

            <h3 className="text-lg font-bold mb-4">Stationary phase:</h3>
            <p className="mb-4">
                Stationary phase in chromatography is a solid phase or a liquid phase coated on the surface of a solid phase. Like in paper chromatography water molecules are adsorbed on paper material cellulose.
            </p>

            <h3 className="text-lg font-bold mb-4">Mobile phase:</h3>
            <p className="mb-4">
                It is a liquid or gas that moves through or over the stationary phase. As the mixture is carried by the mobile phase through the stationary phase, each component interacts differently with the two phases, leading to different migration rates. This results in the separation of the components based on their affinity for the stationary phase relative to the mobile phase.
            </p>
        </div>
    );
};

export default Chromatography;