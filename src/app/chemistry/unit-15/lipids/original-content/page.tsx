import React from 'react';

const BiochemistryUnit15: React.FC = () => {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Unit 15: Biochemistry</h1>

            <h2 className="text-xl font-semibold mb-4">15.5 LIPIDS</h2>
            <p className="mb-4">
                Lipids are fatty, waxy, or oily compounds that are soluble in organic solvents like alcohol and chloroform, and insoluble in polar solvents such as water. Lipids are mainly composed of hydrocarbons and little oxygen, making them an excellent form of energy storage. They perform a variety of functions in your body, including being part of your cell membranes and helping control what goes in and out of your cells. They assist with moving and storing energy, absorbing vitamins, and making hormones.
            </p>

            <p className="mb-4">
                <strong>DO YOU KNOW?</strong> Most of the cholesterol in your body is produced by your liver. Your lifestyle choices, including diet, have a major influence on the production of cholesterol and triglycerides. Vitamin A, D, K, and E are the four fat-soluble vitamins and can be found in foods like butternut squash, broccoli, and salmon fish. Eating dietary fat in a balanced diet helps you absorb these fat-soluble vitamins, such as in a cabbage salad with olive oil dressing and walnuts.
            </p>

            <p className="mb-4">
                One gram of lipids provides 9 kilocalories of energy.
            </p>

            <div className="mb-4">
                <img src="/path/to/fat-soluble-vitamins.png" alt="Fat-Soluble Vitamins" />
                <p className="text-center">Figure 15.7: Fat-Soluble Vitamins</p>
            </div>

            <ul className="list-disc list-inside mb-4">
                <li>Vitamin A</li>
                <li>Vitamin D</li>
                <li>Vitamin K</li>
                <li>Vitamin E</li>
            </ul>
        </div>
    );
};

export default BiochemistryUnit15;
