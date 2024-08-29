import React from 'react';

const BiochemistryUnit15: React.FC = () => {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Unit 15: Biochemistry</h1>

            <h2 className="text-xl font-semibold mb-4">15.3 CARBOHYDRATES - A SOURCE OF ENERGY</h2>
            <p className="mb-4">
                Carbohydrates, or hydrates of carbon, are macromolecules made of carbon, hydrogen, and oxygen. The primary function of carbohydrates is to supply energy to all cells of the body. One gram of carbohydrate provides 4 kilocalories of energy.
            </p>
            <p className="mb-4">
                Carbohydrates are broken down by the body into glucose, a type of sugar. Your body cells, tissues, and organs use glucose as fuel. When your body does not get sufficient carbohydrates, it looks for another energy source, breaking down protein in your muscles and body fat to use as energy. Glucose is the preferred fuel for the brain, which can&apos;t simply use other fuel resources like fat or protein for energy.
            </p>
            <p className="mb-4">
                <strong>DO YOU KNOW!</strong> A calorie is a unit used to measure the energy in your food. A calorie is the energy required to raise the temperature of 1 gram of water by 1 degree Celsius. Calories are the amount of energy released when your body breaks down (digests and absorbs) food. The more calories a food has, the more energy it can provide to your body.
            </p>

            <div className="mb-4">
                <img src="/path/to/benefits-of-carbohydrates.png" alt="Benefits of Carbohydrates" />
                <p className="text-center">Figure 15.4: Benefits of Carbohydrates</p>
            </div>

            <h3 className="text-lg font-semibold mb-4">15.3.1 Classification of Carbohydrates</h3>
            <p className="mb-4">
                Carbohydrates can be classified based on how many sugars are in the molecule. The table below summarizes the three types of carbohydrates and examples.
            </p>
            <table className="min-w-full divide-y divide-gray-200 mb-4">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Carbohydrates</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Examples</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Simple</td>
                        <td className="px-6 py-4 whitespace-nowrap">Monosaccharide</td>
                        <td className="px-6 py-4 whitespace-nowrap">Glucose, Fructose</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Simple</td>
                        <td className="px-6 py-4 whitespace-nowrap">Disaccharide</td>
                        <td className="px-6 py-4 whitespace-nowrap">Lactose, Sucrose</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Complex</td>
                        <td className="px-6 py-4 whitespace-nowrap">Polysaccharide</td>
                        <td className="px-6 py-4 whitespace-nowrap">Starch, Glycogen</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default BiochemistryUnit15;
