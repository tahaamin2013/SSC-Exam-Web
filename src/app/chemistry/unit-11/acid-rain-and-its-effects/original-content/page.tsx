// pages/acid-rain.js
import React from 'react';

const AcidRain = () => {
    return (
        <div className="p-6 bg-white text-black">
            <h1 className="text-2xl font-bold mb-4">UNIT 11</h1>
            <h2 className="text-xl font-semibold mb-4">ACID RAIN AND ITS EFFECTS</h2>

            <p className="mb-4">
                Normal rainwater is saturated with carbon dioxide. It has a pH of 5.6. However, the acidity of rain increases during thunderstorms in polluted areas.
                Fossil fuels contain compounds of sulphur and nitrogen. Sulphur dioxide from fossil fuels used in power plants and nitrogen oxides from car exhausts dissolve in rainwater, creating acids,
                such as sulphuric acid, nitrous acid, and nitric acid. Nitrogen dioxide also plays a significant role in the catalytic oxidation of sulphur dioxide into sulphur trioxide,
                which forms sulphuric acid in the atmosphere. These reactions are key contributors to the acidity of rainwater.
            </p>

            <div className="mb-4">
                <p className="mb-2">
                    <strong>SO₂(g) + O₂(g) → SO₃(g)</strong>
                </p>
                <p className="mb-2">
                    <strong>SO₃(g) + H₂O(l) → H₂SO₄(aq)</strong>
                </p>
                <p className="mb-2">
                    <strong>2NO₂(g) + 3O₂(g) + 2H₂O(l) → 4HNO₃(aq)</strong>
                </p>
            </div>

            <p className="mb-4">
                Therefore, the pH of rainwater can be much lower due to sulfuric acid and nitric acid from precipitation during thunderstorms. The pH of this rain can be as low as 2.1,
                which is lower than the pH of vinegar or lemon juice.
            </p>

            <p className="mb-4">
                Acid rain is defined as rain having a pH less than 5.6. Acid rain can often fall hundreds of kilometers from its source. Acid rain corrodes metals, stone structures, and statues.
            </p>

            <div className="mb-4">
                <p className="mb-2">
                    <strong>Reaction with iron:</strong>
                </p>
                <p className="mb-2">
                    <strong>Fe(s) + H₂SO₄(aq) → FeSO₄(aq) + H₂(g)</strong>
                </p>
                <p className="mb-2">
                    <strong>Reaction with marble:</strong>
                </p>
                <p className="mb-2">
                    <strong>CaCO₃(s) + H₂SO₄(aq) → CaSO₄(aq) + H₂O(g) + CO₂(g)</strong>
                </p>
                <p className="mb-2">
                    <strong>CaCO₃(s) + 2HNO₃(aq) → Ca(NO₃)₂(aq) + H₂O(g) + CO₂(g)</strong>
                </p>
            </div>

            <p className="mb-4">
                Acid rain also kills fish and destroys trees. Lakes and rivers may become too acidic for living things to survive.
            </p>

            <h3 className="text-lg font-semibold mb-4">CONCEPT ASSESSMENT EXERCISE 11.6</h3>
            <p className="mb-4">1. Define acid rain.</p>
            <p className="mb-4">2. Write names of gases that cause acid rain.</p>
            <p className="mb-4">3. What is the effect of acid rain on iron and marble? Give balanced chemical equations.</p>
            <p className="mb-4">4. List some effects caused by acid rain.</p>
            <p className="mb-4">5. Justify that acid rain is more dangerous than normal rain.</p>
        </div>
    );
};

export default AcidRain;
    